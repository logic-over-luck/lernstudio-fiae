# Leitfaden: Unterricht im Lernsystem

Der Reiter **Verstehen** eines Themas ist ein Unterricht in Kapiteln: eine ruhige Lehrbuch-Seite, die das Thema
**von null an** erklärt, wie ein guter Lehrer – Stück für Stück, mit Bildern zum Mitmachen und kleinen Zwischenfragen.
Am Ende kann man es **mit den richtigen Fachbegriffen** erklären und weiß, wie man es in der Prüfung sagt.
Verstanden heißt: durchgearbeitet. Es gibt keinen Test, keine Sperre, kein „bestanden“.

Alle Trainer bauen ihren Unterricht nach diesem Leitfaden. **Vorbild ist das Kapitel „Grundlagen“ der Zahlensysteme**
(`zahlen/unterricht/zahlensysteme.js` und `.jsx`, Teile `zwei-zustaende`, `zaehlen`, `basis`) – Aufbau, Ton und
Dichte genau so.

---

## 1. Dateien je Thema (Beispiel Zahlen-Trainer)

| Datei | Inhalt |
|---|---|
| `zahlen/unterricht/<thema>.js` | Daten: `BEGRIFFE` und `KAPITEL` (rein, ohne JSX – die Tests lesen sie) |
| `zahlen/unterricht/<thema>.jsx` | Text: `INHALT = { <teil-id>: () => [Blöcke] }` |
| `zahlen/bilder/<thema>.jsx` | eigene Bilder zum Mitmachen (Preact-Komponenten) |
| `styles/zahlen-<thema>.css` | Stile dieser Bilder, Präfix `zt-<thema>-` |
| `inhalte/glossar.json` | Bedeutung jedes Fachbegriffs (eine Quelle für alle Erklärungen) |

Gemeinsam und **nicht je Thema zu ändern**: `lernsystem/` (Ansicht, Bausteine, Prüfer, Struktur), `styles/lernsystem.css`,
`zahlen/unterricht/index.js` und `inhalt.js` (melden alle Themen an), Tests. Ein Thema mit leerem `KAPITEL` zeigt in
Verstehen noch die alte Kurz-Erklärung.

---

## 2. Daten (`<thema>.js`)

```js
export const BEGRIFFE = {
  stellenwert: { wort: 'Stellenwert', glossar: 'Stellenwert' }, // wort wie im Text, glossar = Eintrag in glossar.json
};

export const KAPITEL = [
  {
    id: 'grundlagen',
    name: 'Grundlagen',                       // kurz, ein bis zwei Wörter
    worum: 'Bit, Stellenwert und Basis',      // ein Satz/Stichwort unter dem Titel
    kurz: 'Ein Computer kennt nur … **Stellenwert** …', // das Kapitel in 1–2 Sätzen; erscheint in späteren Kapiteln unter „Baut auf“
    braucht: [],                              // frühere Kapitel, die vorausgesetzt werden
    lernziele: ['erklären, was ein Bit ist …', …],      // 2–4; klein beginnen, mit Punkt enden – angezeigt als „Du kannst …“
    begriffe: ['bit', 'uebertrag', …],        // in der Reihenfolge, in der das Kapitel sie mit <SoHeisstDas> einführt
    pruefung: ['Ein **Bit** ist …', …],       // je Lernziel genau ein Satz „So sagst du es in der Prüfung“, Begriffe fett
    teile: [
      { id: 'zwei-zustaende', titel: 'Ein Computer kennt nur an und aus' },
      { id: 'lesen', titel: 'Binärzahlen lesen', arten: ['b2d'] }, // arten: Aufgabenarten, die dieser Teil erklärt
    ],
  },
];
```

Regeln (prüft `pruefeUnterricht` in `lernsystem/struktur.js`, Test je Thema in `tests/<trainer>.test.mjs`):
- IDs eindeutig; `braucht` nur auf frühere Kapitel.
- Jedes Kapitel: 1–4 Lernziele (Ziel: 2–4), gleich viele Prüfungssätze, mindestens ein Begriff, mindestens ein Teil.
- **Jede Aufgabenart des Themas wird von genau einem Teil erklärt** (`arten`) – dorthin führt der Lösungsweg beim Üben,
  und „Aufgaben dazu üben“ am Kapitelende wählt die Arten des Kapitels.
- Jeder Begriff im Kapitelkopf steht in `BEGRIFFE`, hat einen Glossar-Eintrag und wird **genau einmal** mit
  `<SoHeisstDas>` eingeführt. Ein Begriff gehört zu genau einem Kapitel.
- `BEGRIFFE` darf zusätzlich Begriffe aus anderen Themen enthalten, die nur mit `<B>` verwendet werden.
- Jeder Teil hat einen Eintrag in `INHALT`.

## 3. Aufbau

**Thema:** 3–6 Kapitel. Das erste Kapitel setzt nichts voraus und fängt wirklich bei null an.
Kapitel sind einzeln aufrufbar – jedes muss ohne die vorigen verständlich sein (Vorwissen steht kurz unter „Baut auf“).

**Kapitel:** 2–4 Teile, 2–4 Lernziele, 8–15 Minuten. Den Kopf (Titel, „Baut auf“, Lernziele, Begriffe), das
Inhaltsverzeichnis und den Abschluss „Das hast du gelernt“ baut die Ansicht aus den Daten – nichts davon in den Text.

**Teil:** ein Gedanke, 150–400 Wörter, 2–4 Zwischenfragen, mindestens ein Bild oder eine Tafel. Immer derselbe Weg:

1. **Einstieg:** ein konkretes Problem oder ein Bild zum Mitmachen – nie mit einer Definition beginnen.
2. **Frage vorab:** „Was passiert, wenn …?“ – selbst überlegen, bevor erklärt wird.
3. **Erklärung** in kurzen Absätzen, am Bild entlang.
4. **So heißt das:** jetzt bekommt das Erlebte seinen Fachnamen.
5. **Anwenden:** dieselbe Idee an einem neuen Beispiel, jetzt mit dem Begriff.

Der letzte Teil eines Kapitels endet mit einem Blick nach vorn oder einer Brücke zum nächsten Kapitel.

## 4. Bausteine (`lernsystem/bausteine.jsx`)

| Baustein | Wofür |
|---|---|
| `<P>` | Absatz. `<strong>` für das Wichtige, `<code>` für Zahlen/Befehle, `<em>` sparsam |
| `<Zwischentitel>` | Unterteilung innerhalb eines Teils (selten) |
| `<Abbildung unter="…">` | Rahmen um ein Bild zum Mitmachen; `unter`: optional, was man damit tun kann |
| `<Tafel zeilen={[{ name, werte, ton: 'oben' }, { text, ton: 'summe' }]}>` | Rechnung wie an der Tafel, Zeilen rechtsbündig |
| `<SoHeisstDas begriff="id" auch="Synonym">` | führt einen Begriff ein: Bedeutung in eigenen Worten, 1–3 Sätze, mit Bezug zum Bild |
| `<B id="id" />` | schon eingeführter Begriff im Text – antippbar, zeigt die Glossar-Bedeutung |
| `<Merke titel="…">` | Regel zum Mitnehmen, höchstens einer je Teil, nicht für Begriffe (dafür SoHeisstDas) |
| `<Wahl frage optionen>` | Auswahlfrage, Erklärung danach als Kinder |
| `<Eingabe frage pruefe tipp loesung platzhalter>` | Eingabefrage, Erklärung danach als Kinder |
| `<div class="ls-tabelle-huelle"><table class="ls-tabelle">` | Übersichtstabelle (selten) |

Andere Kästen, eigene Farben oder eigene Layouts im Text gibt es nicht. Bilder liegen immer in `<Abbildung>`.

## 5. Zwischenfragen

- **Jede falsche Option steht für einen echten Denkfehler** und hat ein `warum`, das den Fehler benennt, ohne die
  Lösung zu verraten: `{ text: '256', warum: '256 ist die Anzahl der Werte. Aber wo fängt das Zählen an?' }`.
  Die richtige Option hat `richtig: true`. 2–4 Optionen, die richtige nicht immer an derselben Stelle.
- **Eingaben** prüfen mit `lernsystem/pruefen.js`: `istZahl(soll, { <typischer falscher Wert>: 'Hinweis' }, toleranz)`,
  `istBinaer`, `istHex`, `istText(['richtig', …], { falsch: 'Hinweis' })`. Mindestens die zwei häufigsten Fehler
  erkennen. `tipp`: allgemeiner Hinweis; `loesung`: wie sie angezeigt wird („5,93 MiB“).
- Die Erklärung nach der Antwort (Kinder) ist kurz: warum es so ist, mit Rechenweg.
- Feste Beispiele (nachvollziehbar), Zufall gibt es nur beim Üben.

## 6. Fachbegriffe

- Erst erleben, dann benennen: `<SoHeisstDas>` steht **nach** dem Bild/der Frage, die den Begriff greifbar macht.
- Höchstens 3 neue Begriffe je Teil, höchstens 8–9 je Kapitel. Nur Begriffe, die in Prüfung oder Katalog vorkommen.
- Danach immer dasselbe Wort; Alltagsbilder (Rädchen, Lampe, Wasserrohr) nur als Brücke – Prüfungssatz nur Fachsprache.
- Synonyme einmal nennen (`auch="Dualsystem"`), dann nicht mehr wechseln.
- Glossar-Eintrag: `{ "begriff": "…", "langform": null, "erklaerung": "1–2 Sätze, sachlich", "sp": ["AP1-4-2-1"] }`,
  alphabetisch einsortiert (`localeCompare(…, 'de')`), Datei mit 2 Leerzeichen eingerückt. Gibt es den Begriff mit
  anderer Bedeutung schon (z. B. „Stelle“ in WiSo), Klammerzusatz: „Stelle (Zahl)“. Vorhandene Einträge nicht ändern,
  außer um einen Fehler zu beheben.

## 7. Bilder zum Mitmachen

- Etwas zum Anfassen statt Dekoration: Schalter, Regler, Felder, Schritt-für-Schritt-Knöpfe – das Bild zeigt den
  Mechanismus, um den es im Teil geht. Startwert = das Beispiel aus dem Text.
- Komponente in `bilder/<thema>.jsx` liefert **nur ihren Inhalt** (Fragment); den Rahmen gibt `<Abbildung>`.
- Rechnungen als reine Funktionen in `rechnen.js` des Trainers (getestet), nicht im Bild.
- Vorhandene Bilder wiederverwenden, wo sie passen (z. B. `Lesen`, `Gruppen`, `Potenzen` aus `bilder/zahlensysteme.jsx`).
- Stil: nur Tokens aus `tokens.css` (`--s-*`, `--t-*`, `--text-*`, `--akzent`, `--info`, `--gut`, `--warn`, `--fehler`,
  `--flaeche-*`, `--linie*`, `--r-*`, `--mono`). Hilfsklassen `zt-bild__hinweis`, `zt-bild__knoepfe`, `zt-bild__eingabe`
  dürfen genutzt werden. Muss auf dem Handy (390 px) ohne seitliches Scrollen funktionieren.

## 8. Sprache

- „Du“, aktiv, Präsens, kurze Sätze (meist ≤ 20 Wörter). Erklären wie am Tisch, nicht wie im Lehrbuch.
- Konkrete Zahlen statt „eine beliebige Zahl n“, Beispiel vor Regel.
- Keine Floskeln („Wie wir sehen …“, „Es ist wichtig zu verstehen …“), keine Ausrufezeichen-Begeisterung.
- Deutsches Zahlenformat (1.024; 5,93), Einheiten mit Leerzeichen (100 Mbit/s). Fachlich wie Prüfungskatalog und
  IHK-Prüfungen (z. B. Datenmengen mit Binärpräfixen KiB/MiB, Herstellerangaben und Übertragungsraten dezimal).

## 9. Fertig, wenn …

- `npm test` grün (Struktur-Test des Themas), `npm run build` ohne Fehler.
- Im Browser (`node tools/browser-check.mjs '#/ap1/trainer/zahlen?modus=<thema>&ansicht=verstehen&kapitel=<id>'`, auch
  mit `HANDY=1`) jedes Kapitel einmal komplett durchgeklickt, alle Fragen beantwortet, keine Konsolenfehler, auf dem
  Handy nichts abgeschnitten.
- Jedes Kapitel liest sich wie Grundlagen: Problem → Erleben → Begriff → Anwenden, Lernziele werden wirklich erklärt.
