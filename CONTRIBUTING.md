# Contributing to Speak Easy

Thank you for helping! Teachers, settlement workers and learners are all welcome.

## Reporting a mistake

Use **"Report a problem"** at the bottom of any lesson (opens a GitHub issue), or open an issue directly.
Please include the lesson title and what should change.

## Reviewing a language

Learners can choose notes in Arabic, Mandarin, French, Spanish, Punjabi, Tagalog or Russian.
These were drafted carefully but need checking by native speakers.

1. Open the review sheet for your language in `review/` (HTML or PDF).
2. Tick OK or Fix for each line and write corrections in the last column.
3. Send it back (attach it to an issue, or email the maintainer).

## Adding a language

Translations live in `src/tr.js` (lesson summaries), `src/l1.js` (tips for speakers of each language and the
language overview page) and `src/n_life.js` / `src/n_pub3.js` (newer lessons). Add the language to `LANGUAGES`
in `src/sounds.js`, then add an entry for every lesson. Run `python3 src/build.py` and check the course.

## Editing lessons

Lessons are JavaScript objects in the `src/` files. Markup inside lesson text:

| Markup | Meaning |
|---|---|
| `[[text]]` | Tappable audio. `[[shown|spoken]]` shows one text and speaks another. |
| `«STRESS»` | Marks a stressed syllable (shown in bold colour). |
| `⦃sheep⦄` | A vowel keyword chip (see `VOWELS` in `src/sounds.js`). |

Exercise types: `mc`, `fill`, `reveal`, `stress`, `colour` (vowel keyword), `pairs` (minimal-pair listening),
`say` (listen, repeat, record) and `dialogue`.

Keep content original (don't copy from textbooks or other courses), Canadian, and written in simple English.
