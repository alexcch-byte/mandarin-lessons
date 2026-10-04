#!/usr/bin/env python3
"""
Regenerate vendor/audio/*.mp3 and vendor/audio-manifest.js so every speak()
call in the app plays a real recorded Mandarin clip instead of relying on
whatever (if any) text-to-speech voice happens to be installed on the
device. This matters especially for Amazon Fire tablets, whose stock TTS
engine (IVONA) has no Mandarin voice at all.

Run this whenever a new lesson adds vocabulary/sentences/dialogue:

    python vendor/build-audio.py

It uses Node to load every lessons/*.js file (the same way the app does) and
collect every unique string that gets spoken, then uses gTTS (Google
Translate's TTS endpoint, called over HTTPS — no API key needed) to
synthesize any text that isn't already cached in vendor/audio/, and finally
rewrites vendor/audio-manifest.js with the full text -> filename mapping.
"""
import hashlib
import json
import os
import subprocess
import sys
import time

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LESSONS_DIR = os.path.join(ROOT, "lessons")
AUDIO_DIR = os.path.join(ROOT, "vendor", "audio")
MANIFEST_JS = os.path.join(ROOT, "vendor", "audio-manifest.js")

EXTRACT_SCRIPT = r"""
global.window = { MANDARIN_LESSONS: [] };
const fs = require('fs');
const path = require('path');
const lessonsDir = process.argv[2];
fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.js') && f !== 'manifest.js')
  .forEach(f => require(path.join(lessonsDir, f)));

const texts = new Set();
function stripEllipsis(s) { return s.replace(/……|\.\.\./g, ''); }

window.MANDARIN_LESSONS.forEach(l => {
  (l.vocabulary || []).forEach(v => texts.add(v.say || v.hanzi));
  (l.sentencePatterns || []).forEach(p => { const s = stripEllipsis(p.hanzi); if (s) texts.add(s); });
  (l.dialogues || []).forEach(d => (d.lines || []).forEach(line => texts.add(line.hanzi)));
  (l.actions || []).forEach(a => texts.add(a.hanzi));
  (l.exercises || []).forEach(ex => {
    if (ex.type === 'match-emoji') (ex.items || []).forEach(i => texts.add(i.hanzi));
    if (ex.type === 'read-aloud') (ex.items || []).forEach(i => texts.add(i));
    if (ex.type === 'listen-pick') (ex.items || []).forEach(i => texts.add(i.say));
  });
});
texts.add('太棒了');
texts.add('對了');

process.stdout.write(JSON.stringify([...texts]));
"""


def extract_texts():
    # Write the script to a temp .js file rather than passing it as a `node
    # -e` argument — on Windows, subprocess argv goes through the system
    # codepage, which mangles the non-ASCII characters (……) in this script.
    # A file is read by Node as UTF-8 regardless of the OS codepage.
    tmp_path = os.path.join(ROOT, "vendor", "_extract_texts_tmp.js")
    with open(tmp_path, "w", encoding="utf-8") as f:
        f.write(EXTRACT_SCRIPT)
    try:
        result = subprocess.run(
            ["node", tmp_path, LESSONS_DIR],
            capture_output=True, text=True, encoding="utf-8", check=True
        )
    finally:
        os.remove(tmp_path)
    return json.loads(result.stdout)


def main():
    from gtts import gTTS  # imported here so --help/extract-only failures are clearer

    texts = extract_texts()
    print(f"Found {len(texts)} unique speakable strings.")

    os.makedirs(AUDIO_DIR, exist_ok=True)
    manifest = {}
    generated = 0

    for i, text in enumerate(texts):
        h = hashlib.sha1(text.encode("utf-8")).hexdigest()[:16]
        fname = f"{h}.mp3"
        manifest[text] = fname
        outpath = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(outpath) and os.path.getsize(outpath) > 0:
            continue
        for attempt in range(3):
            try:
                gTTS(text=text, lang="zh-TW").save(outpath)
                generated += 1
                break
            except Exception as e:
                if attempt == 2:
                    print(f"  FAILED: {text!r} -> {e}")
                else:
                    time.sleep(1.5)
        time.sleep(0.15)
        if (i + 1) % 20 == 0:
            print(f"  ...{i + 1}/{len(texts)}")

    with open(MANIFEST_JS, "w", encoding="utf-8") as f:
        f.write("// Maps each spoken phrase to its pre-recorded audio file in vendor/audio/.\n")
        f.write("// Regenerate with: python vendor/build-audio.py\n")
        f.write("window.AUDIO_MANIFEST = ")
        json.dump(manifest, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")

    print(f"Generated {generated} new clip(s). Manifest has {len(manifest)} entries total.")
    print(f"Wrote {MANIFEST_JS}")


if __name__ == "__main__":
    main()
