# Hinweise für die Arbeit an diesem Repo

## Wo was liegt

- **Lerninhalte: nur in `inhalt/`.** Eine Datei je Prüfungsteil (`AP1.json`, `PB1.json`, `PB2.json`, `WISO.json`)
  mit `raum` (Gliederung: Ordner → Blöcke → Stichpunkt-IDs), `stichpunkte` (je ID) und `karten`. Dazu `glossar.json`.
  Es gibt keine weitere Quelle, keinen alten Stand und keine Übersetzung alter IDs.
- **Trainer-Aufgaben und Probeprüfungen** stehen im Code unter `src/bereiche/trainer/` und `src/bereiche/pruefung/saetze/`
  und verweisen über Stichpunkt-IDs auf `inhalt/`.
- **Build:** `tools/build.mjs` liest `inhalt/` über `tools/inhalt.mjs` und schreibt alles in eine Datei `Lernstudio.html`.

## IDs

- Stichpunkt `AP1-6-2-3` = Raum-Ordner-Block-Nummer. Können-Aussage `AP1-6-2-3-K1`. Karte `AP1-6-2-3-K1-2`.
- IDs nie umbenennen oder wiederverwenden, nur neue vergeben.
- In Trainern steht `raum: ['AP2']` für „PB1 und PB2“ (siehe `src/bereiche/trainer/rahmen/raum.js`).

## Inhalte ändern

1. `inhalt/<RAUM>.json` bearbeiten.
2. `npm run pruefen` – muss „Keine Fehler.“ melden.
3. `npm test` und `npm run build`.

## Felder eines Stichpunkts

- `koennen`: `[[ID, Text], …]` – die Pflicht-Aussagen
- `neu`: Ziel, Kurzfassung, Hinweis, `bautAuf` (Stichpunkte, die vorausgesetzt werden), `koennen` (Erklärung, Stufe,
  Herkunft je Aussage), `kuer` (freiwillig)
- `pruef` / `ta`: in welchen Prüfungen und Teilaufgaben der Stichpunkt vorkam – daraus rechnet die App die Wichtigkeit
- `quer`: Prüfungen eines anderen Prüfungsteils (nur Hinweis), `gegen`: Gegenstück in einem anderen Prüfungsteil
- `gewicht`: Gewicht für die Zusammenstellung der Probeprüfungen

## Offene Punkte

- EPK/BPMN: 7 Übungen im Modellieren-Trainer sind nur für PB markiert, der Lernplan führt EPK/BPMN aber nur in AP1
  (AP1-8-4-4). Diese Übungen erscheinen deshalb nirgends.
- Ohne Trainer: AP1-2-3-3, AP1-3-2-4, AP1-6-1-5, PB1-7-1-2, PB2-1-1-3, PB2-2-1-4, PB2-5-1-5.
- Der Subnetz-Lernweg deckt 10 Aussagen von AP1-6-2-1 bis -4 nicht ab (Liste in `tests/subnetz.test.mjs`).
