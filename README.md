# Speak Easy — Spoken Canadian English

A free, offline course in **spoken Canadian English** for adult newcomers (CEFR A2–B2, roughly CLB 3–7).
Made as a thank-you to the ESL teachers, LINC instructors and settlement workers across Canada.

**[Open the course](https://arkay-origin.github.io/Speakeasy/)** · Works on phones, tablets and computers · No account · No tracking

## What's inside

- **66 lessons in 12 units:** sounds, word stress, rhythm, linking and fast speech, intonation and body language, grammar for speaking, expressions and idioms, everyday Canada, life in Canada (health, 911, housing, banking, transit, school, government services, texts and emails), and conversation skills.
- **300+ exercises** with instant feedback, a placement quiz, unit tests and spaced review.
- **Audio for every example** using the device's built-in voices — works offline.
- **Record & compare:** learners record themselves and hear the model, then their own voice. Recordings never leave the device.
- **Two-voice dialogues** with comprehension questions.
- **Canadian English glossary** with 150+ words and expressions.
- **Notes in 7 languages:** Arabic, Mandarin, French, Spanish, Punjabi, Tagalog, Russian.
- **For teachers:** teacher mode with goals, activities and answer keys; printable worksheets, tests and glossary handouts; light theme for projectors.

## Using it

- **Online:** open the site. On a phone, use "Add to Home Screen" (iPhone: Share → Add to Home Screen; Android/Chrome: menu → Install app). After the first visit it works offline.
- **Offline file:** download `index.html` and open it in any modern browser. Everything is in that one file.

## Privacy

No accounts, cookies, analytics, ads or servers. Progress is saved only in the learner's own browser (`localStorage`). Microphone recordings stay in memory on the device and are discarded when the page closes.

## Licence

- **Lesson content** (text, exercises, vowel keyword chart, glossary, teacher notes, translations): [CC BY 4.0](LICENSE-CONTENT.md) — share and adapt for any purpose, with credit.
- **Software:** [MIT](LICENSE).

## Support

Speak Easy is free and always will be. If it helped you or your learners, you can [buy me a coffee](https://buymeacoffee.com/a50443536g). Entirely optional.

The donation link is a plain hyperlink. No third-party widget or script is embedded, so nothing loads from outside the course and nothing about your visit is reported anywhere.

## Contributing

Found a mistake? Speak one of the course languages? See [CONTRIBUTING.md](CONTRIBUTING.md).

## Building from source

The course is built from the files in `src/` into one self-contained HTML file:

```
cd src
python3 build.py
```

This writes `index.html` (the web version) and `dist/speak-easy.html` (a standalone offline file).
If you change `index.html`, also bump `VERSION` in `sw.js` so installed copies update.
