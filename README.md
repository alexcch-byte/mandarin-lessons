# Hello, 華語! — Mandarin Lessons App

A simple website for practicing the weekly Mandarin lesson: vocabulary flashcards
with sound, sentence patterns, dialogue practice, a classroom-actions page,
character writing practice (trace the strokes), review exercises, and a culture
reading.

## How the kids access it (tablets etc.)

The app is published online at:

**https://claude.ai/artifact/12WsBcC82Q9dDmtjLheDB9**

(An earlier link, `.../APrrfMYiezBuoa6S2MTPsf`, is retired — some viewers got
stuck seeing an old pinned snapshot of it that never updated, even after
several republishes. This new link avoids that problem entirely. Please
switch any bookmarks/shortcuts on tablets or phones to the new one above.)

Open Claude.ai's share menu on that page to control who can view it (by
default it's private to your account). Once shared, any tablet/phone/computer
with that link can open it in a browser — no app install needed.

When you send me a new lesson PDF (see below), I update this same link in
place. If a device ever seems to be showing outdated content again despite a
refresh, that pinning behavior may be back — tell me and I'll investigate
rather than assume a reload will fix it.

## How to open it locally instead

Double-click **`index.html`** in this folder. It opens in your default
browser and works straight from this folder — no installation needed, and
(after the first load) it works fully offline, including character-writing
practice and pronunciation audio, since everything is bundled locally.

## The native Fire tablet app

There's also a real installable app (not just a website), built from this
same code using [Capacitor](https://capacitorjs.com/) to wrap it as Android
app. It's currently installed directly on the connected Fire tablet as
`com.mandarinlessons.hellohuayu`. This exists because the Fire tablet's stock
browser (Silk) and its system voice engine (Amazon IVONA) don't reliably
support Mandarin — the native app sidesteps both by playing the same bundled
recordings as the website, no synthesized voice or Silk dependency involved.

The Capacitor/Android project itself isn't checked into this Drive folder —
node_modules and Gradle's build cache are tens of thousands of small files,
which Google Drive's sync doesn't handle well (this bit me once already
during setup). It's easy to regenerate from scratch instead, from this
project's own files, whenever you need to rebuild the app (e.g. after new
lesson content, or on a different Fire tablet):

```bash
# from a local (non-Drive-synced) folder:
mkdir mandarin-android && cd mandarin-android
mkdir -p www/css www/js www/lessons www/vendor
cp <this-project>/index.html www/
cp <this-project>/css/style.css www/css/
cp <this-project>/js/app.js www/js/
cp <this-project>/lessons/*.js www/lessons/
cp <this-project>/vendor/*.js <this-project>/vendor/*.mp3 www/vendor/ 2>/dev/null
cp -r <this-project>/vendor/audio www/vendor/

npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor-community/text-to-speech
npx cap init "Hello, 華語!" com.mandarinlessons.hellohuayu --web-dir www
npx cap add android
npx cap sync android

# needs Android Studio's SDK + bundled JDK (or your own):
export JAVA_HOME="/path/to/Android/Android Studio/jbr"
export ANDROID_HOME="/path/to/Android/Sdk"
cd android && ./gradlew assembleDebug   # gradlew.bat on Windows

adb install -r app/build/outputs/apk/debug/app-debug.apk
```

The one code difference from the plain website: `js/app.js` checks for
`window.Capacitor.Plugins.TextToSpeech` and uses Android's native
text-to-speech service directly when running inside the app (bypassing the
WebView's Web Speech API entirely) — though in practice bundled audio
(above) handles almost everything now, so this only matters as a fallback
for any phrase without a recording.

## Adding a new week's lesson

Each week, do this:

1. **Send me (Claude) the new lesson-plan PDF**, the same way you did before.
   Tell me the lesson number if it's not obvious from the file.
2. I will:
   - Read the PDF and pull out the vocabulary, sentence patterns, dialogue,
     actions, and any exercises.
   - Create a new file `lessons/lesson-<n>.js` with that content (copy of the
     structure in `lessons/lesson-3.js`).
   - Add that filename to `lessons/manifest.js`.
   - Run `python vendor/build-hanzi-data.py` to bundle stroke data for any
     new characters, so writing practice keeps working offline/hosted.
   - Run `python vendor/build-audio.py` to generate real Mandarin recordings
     for any new vocabulary/sentences/dialogue, so pronunciation keeps
     working without relying on the device's own voices.
   - Republish the same hosted link above with the new lesson included.
3. Reopen (or refresh) `index.html`, or the hosted link — the new lesson
   appears in the **Lesson** dropdown at the top, and previous weeks stay
   available for review.

If you ever want to add or fix a lesson yourself without me, open
`lessons/lesson-3.js` in a text editor as a template — every field is plain
English/Chinese text, no coding knowledge required. Just make sure commas and
quote marks stay intact.

## What's in each lesson tab

- **📚 Vocabulary** — flashcards: character, pinyin, English, a picture emoji,
  and a speaker button that plays a real recorded Mandarin clip.
- **🧩 Sentences** — the grammar patterns taught that week.
- **💬 Dialogue** — the scripted conversations from the lesson, playable line
  by line or all at once.
- **🙋 Actions** — classroom command phrases (stand up, sit down, etc.).
- **✍️ Writing** — pick any character from the week's lesson and either watch
  the stroke order animate, or trace it yourself with the mouse/finger.
- **🎯 Practice** — matching, fill-in-the-blank, and read-aloud review
  exercises with instant feedback.
- **🏮 Culture** — the short cultural reading passage included in the lesson.

## Notes on the tech (for reference)

- Pure HTML/CSS/JavaScript, no build step, no server required.
- **Pronunciation plays real recorded audio** (`vendor/audio/*.mp3`, ~270
  clips, generated once via Google's TTS and bundled — see
  `vendor/build-audio.py`). This is the primary and normally only playback
  path: it sounds right and works identically on every device, regardless of
  what TTS voices (if any) are installed. The Web Speech API / native
  Android TTS are still there as a fallback, only used for a phrase that
  somehow has no recording yet.
- Character stroke-order data comes from the open-source **Hanzi Writer**
  library (`vendor/hanzi-writer.min.js`). Stroke data for every character in
  the current lessons is bundled locally in `vendor/hanzi-data.js` (built by
  `vendor/build-hanzi-data.py`) so writing practice works fully offline and
  inside the hosted artifact's sandbox, with no live CDN dependency.
- The hosted version is a **Claude Artifact** (multi-file HTML/CSS/JS
  publish) — free, no server to maintain, updates instantly when I republish
  it after a new lesson.
