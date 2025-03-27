# Run project locally

Simply clone the repor and cd to /frontend.
Install dependencies by running:

```bash
npm install
```

To run the vite server locally:

```bash
npm run dev
```

## Change word list

You can edit the word list in /utils/WordList.ts to whatever you want.
The current list is optimized for german, child-appropriate 4-5 letter words.

## Planned features/Ideas

- Datenbank mit Verwaltungsseite für die Wörter
- Icons als Hilfe optional einblendbar
- Audio Ausgabe der Wörter (ggf. mit LLM)
- Persistente Highscore mit Zeitstempel -> Button beendet und speichert Ergebnis
- Resizable Interface?
