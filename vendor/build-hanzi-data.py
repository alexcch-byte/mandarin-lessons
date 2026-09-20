#!/usr/bin/env python3
"""
Regenerate vendor/hanzi-data.js so character-writing practice works fully
offline / inside the hosted artifact (no CDN fetch needed at runtime).

Run this from the vendor/ folder (or anywhere, paths are absolute) whenever
a new lesson adds characters that aren't in the bundle yet:

    python vendor/build-hanzi-data.py

It reads every lessons/lesson-*.js file's `writingPractice` list, downloads
any character not already cached in vendor/hanzi-data/<char>.json from the
public hanzi-writer-data CDN, then rewrites vendor/hanzi-data.js with the
full combined set.
"""
import json
import os
import re
import sys
import urllib.parse
import urllib.request

# Windows consoles often default to a legacy codepage that can't print
# Chinese characters in progress messages — force UTF-8 stdout so this
# script's own status output doesn't crash on non-ASCII terminals.
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LESSONS_DIR = os.path.join(ROOT, "lessons")
CACHE_DIR = os.path.join(ROOT, "vendor", "hanzi-data")
OUT_FILE = os.path.join(ROOT, "vendor", "hanzi-data.js")

HANZI_RE = re.compile(r'hanzi:\s*"([^"]+)"')


def collect_writing_chars():
    chars = set()
    for fname in os.listdir(LESSONS_DIR):
        # Every lesson/category data file except the manifest itself.
        if fname == "manifest.js" or not fname.endswith(".js"):
            continue
        with open(os.path.join(LESSONS_DIR, fname), encoding="utf-8") as f:
            text = f.read()
        # Grab the writingPractice array block, then pull hanzi values from it.
        m = re.search(r"writingPractice:\s*\[(.*?)\]", text, re.S)
        if not m:
            continue
        for hm in HANZI_RE.finditer(m.group(1)):
            for ch in hm.group(1):
                if ch.strip():
                    chars.add(ch)
    return chars


def ensure_downloaded(chars):
    os.makedirs(CACHE_DIR, exist_ok=True)
    new_count = 0
    for ch in sorted(chars):
        path = os.path.join(CACHE_DIR, f"{ch}.json")
        if os.path.exists(path):
            continue
        enc = urllib.parse.quote(ch)
        url = f"https://cdn.jsdelivr.net/npm/hanzi-writer-data@latest/{enc}.json"
        req = urllib.request.Request(url, headers={"User-Agent": "curl/8.0"})
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
            with open(path, "wb") as out:
                out.write(data)
            new_count += 1
            print(f"  downloaded {ch}")
        except Exception as e:
            print(f"  FAILED {ch}: {e}")
    print(f"Downloaded {new_count} new character(s).")


def build_bundle():
    entries = {}
    for fname in os.listdir(CACHE_DIR):
        if not fname.endswith(".json"):
            continue
        ch = fname[:-5]
        with open(os.path.join(CACHE_DIR, fname), encoding="utf-8") as f:
            entries[ch] = json.load(f)

    with open(OUT_FILE, "w", encoding="utf-8") as out:
        out.write("// Bundled Hanzi Writer stroke data for every character used in the current lessons.\n")
        out.write("// Generated from https://github.com/chanind/hanzi-writer-data — regenerate with vendor/build-hanzi-data.py\n")
        out.write("// when a new lesson introduces characters not yet in this bundle.\n")
        out.write("window.HANZI_DATA = window.HANZI_DATA || {};\n")
        out.write("Object.assign(window.HANZI_DATA, ")
        json.dump(entries, out, ensure_ascii=False, separators=(",", ":"))
        out.write(");\n")

    print(f"Wrote {OUT_FILE} with {len(entries)} characters "
          f"({os.path.getsize(OUT_FILE) / 1024:.1f} KB).")


if __name__ == "__main__":
    chars = collect_writing_chars()
    print(f"Found {len(chars)} unique writing-practice characters across all lessons.")
    ensure_downloaded(chars)
    build_bundle()
