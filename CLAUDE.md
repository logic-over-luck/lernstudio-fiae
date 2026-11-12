# Hinweise für die Arbeit an diesem Repo

## Wo was liegt

- **Lerninhalte: nur in `inhalt/`.** Eine Datei je Prüfungsteil (`AP1.json`, `PB1.json`, `PB2.json`, `WISO.json`)
  mit `raum` (Gliederung: Ordner → Blöcke → Stichpunkt-IDs), `stichpunkte` (je ID) und `karten`. Dazu `glossar.json`.
  Es gibt keine weitere Quelle, keinen alten Stand und keine Übersetzung alter IDs.
- **Lernprompts (alle vier Räume): `inhalt/lernprompts/<RAUM>/<Ordner>/`**, je Stichpunkt eine Datei `<ID> <Titel>.md`
  (AP1 124, PB1 76, PB2 23, WiSo 70). **Alle vier Räume seit 11.11.2026: Kopf + Regelblock + Stoff + Lehrnotiz** (kein
  Drehbuch mehr). Der Build lädt sie über `tools/inhalt.mjs`;
  `src/bereiche/lernen/lernprompt-neu.js` wählt aus: neu lernen = feste Datei; abgehakt/Wiederholen = Kopf, Stoff und
  Lehrnotiz derselben Datei mit den Wiederholungs-Regeln aus `wiederholRegeln` (seit 12.11.2026; `lernprompt.js` ist
  nur noch Rückfall). **Prüfungskürzel:** In `inhalt/` stehen Kürzel wie `2024F`; `terminText` in
  `src/daten/wichtigkeit.js` schreibt sie für Anzeige und kopierte Prompts aus („Frühjahr 2024“). „Schon geprüft“
  nennt seit 12.11.2026 auch die drei aufgehobenen AP1-Prüfungen mit Termin (ihr Inhalt bleibt ungeöffnet). `npm run pruefen` meldet, wenn Titel oder Wortlaut einer Aussage in der Datei nicht mehr zu
  `inhalt/<RAUM>.json` passen, und verlangt je Raum alle Prompts oder keinen.
  - **Arbeitsmappe `archiv/2026-11-11_lehrnotiz-arbeitsmappe/`** (Stand und Regeln:
    `inhalt/lernprompts/_FORTSCHRITT_LEHRNOTIZ.md`). **Der Ordner `archiv/` liegt nur lokal, nicht auf GitHub**
    (`.gitignore`). Er enthält genau zwei Ordner, beide werden gebraucht: die Arbeitsmappe und
    `2026-11-11_drehbuch-prompts/` – die Sicherung, gegen die `ln.py install` Kopf und Stoff jeder Datei prüft (nicht
    löschen, nicht ändern). Alles Ältere liegt seit 12.11.2026 außerhalb des Repos in
    `Desktop\lernstudio_archiv\2026-11-12\`. Regelblock ändern: `regelblock_<RAUM>.txt` dort ändern (PB1, PB2,
    WISO entstehen aus AP1 über `regel_varianten.py`), dann `python ln.py install <RAUM>` (setzt alle Dateien neu
    zusammen; Lehrnotizen liegen in `out/<ID>.md`). Die Lehrnotiz in der Datei und in `out/` gleich halten.
  - **Stoff ändern:** AP1 über eine Ersetzungsliste in `stoffpruefung/` und `python stoff_aendern.py anwenden …`
    (ändert JSON, Datei und Lehrnotiz gleich) – oder in jedem Raum Datei und JSON von Hand gleich ändern und die ID in
    `stoffpruefung/stoff_geaendert.txt` eintragen (sonst bricht `ln.py install` ab, weil der Stoff nicht mehr zur
    Sicherung passt).
  - **SQL-Stichpunkte in PB2** (PB2-5-1-1 bis -5, PB2-6-1-1, -2, -3, -6): ein festes Tabellenmodell
    `material_PB2_sql.txt`, das `ln.py` als „Material“ anhängt. Ändern: Datei ändern, `python ln.py install PB2`.
  - In WiSo ist die Abschlussrunde gebunden (Auswahl, Zuordnung, Reihenfolge, Zahl eintragen) wie in der Prüfung.
  - Lehrnotizen für PB1, PB2, WiSo kamen über die Claude-API (`lb.py`: Schreiber Fable 5.2, Prüfer Opus 5.5,
    Einarbeiten Fable 5.2). Den Schlüssel `ANTHROPIC_API_KEY` setzt nur Sebastian.
  - Dateien mit `_` und `LIES_MICH.md` dort sind Arbeitslisten und Hinweise, kein Inhalt; der Build lädt sie nicht.
    Geblieben sind nur die, die noch gebraucht werden: `_Buch-Abweichungen_2026-11-10.md`,
    `_Stoff-Meldungen_Drehbuch_2026-11-10.md` (offen, vor der AP2), `_FORTSCHRITT_LEHRNOTIZ.md`,
    `WISO/_Faktencheck_2026-11-09.md`. Die Protokolle der Stoffprüfungen liegen im Archiv außerhalb des Repos.
- **Prüfen vor jedem Hochladen:** `npm run pruefen`, `npm test`, `npm run saetze`, `npm run build`; in der
  Arbeitsmappe `python ln.py check <RAUM>`.
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
4. Die gebaute `Lernstudio.html` **mit committen** – GitHub Pages zeigt genau diese Datei aus dem Repo. Ohne
   Commit bleibt die Online-Version auf dem alten Stand.

## Felder eines Stichpunkts

- `koennen`: `[[ID, Text], …]` – die Pflicht-Aussagen
- `neu`: Ziel, Kurzfassung, Hinweis, `bautAuf` (Stichpunkte, die vorausgesetzt werden), `koennen` (Erklärung, Stufe,
  Herkunft je Aussage), `kuer` (freiwillig)
- `pruef` / `ta`: in welchen Prüfungen und Teilaufgaben der Stichpunkt vorkam – daraus rechnet die App die Wichtigkeit
- `quer`: Prüfungen eines anderen Prüfungsteils (nur Hinweis), `gegen`: Gegenstück in einem anderen Prüfungsteil
- `gewicht`: Gewicht für die Zusammenstellung der Probeprüfungen
- `klasse`, `punkte`, `rang` (nur AP1): Lernreihenfolge. `A` = alles mit `art` Rechnen/Zeichnen, dazu deren
  Voraussetzungen (`neu.bautAuf`) und Englisch als Fertigkeit; `B` = übriges Wissen mit Prüfungspunkten; `C` = nie geprüft.
  `punkte` = Punkte der Teilaufgaben (ungewichtet, geteilt bei mehreren Stichpunkten), `rang` = empfohlene Reihenfolge.
  Gerechnet mit `ap1/werkzeuge/klassen_lernstudio.py` (außerhalb dieses Repos; Aufruf mit dem Pfad dieses Repos). Seit
  12.11.2026 stehen auch in B Voraussetzungen direkt davor, und Block 6-3 steht per Regel `NACH` hinter AP1-7-3-1.
  Nach Änderungen an `ta`, `art` oder `neu.bautAuf` neu laufen lassen. Ein Rückwärtstest über die
  Altprüfungen ergab: Nur „Rechnen und Zeichnen zuerst“ sagt die nächste Prüfung besser voraus als Zufall.
  `prioHinweis`: Satz am Stichpunkt.
  Die App zeigt dann statt „Wichtigkeit“ die Seite „Lernreihenfolge“; `npm run pruefen` prüft die Regeln.
- `neu.buch` (alle Räume; PB1, PB2 und WiSo am 10.11.2026 gegen den Buchtext geprüft): bis zu 3 Buchstellen `{buch, abschnitt, titel, von, bis}` (Bücher „IT-Berufe“, Hrsg. Gratzke:
  1 = Grundstufe LF 1–5, 2 = Fachstufe LF 6–9, 3 = Fachstufe LF 10–12; Druckseiten). `neu.nichtImBuch`: was in keinem
  Buch steht. Die App zeigt beides als Zeile „Im Buch: …“. Quelle: swag-Zuordnung, am 29.10.2026 für alle 124 AP1-Themen
  gegen den Buchtext geprüft (17 swag-Verweise waren falsch, viele zu breit oder unvollständig). Wo das Buch etwas anderes
  sagt als der Stoff (24 Stellen, vor allem WiSo): `inhalt/lernprompts/_Buch-Abweichungen_2026-11-10.md`. In `herkunft` heißt `buch:GS|FS|FS2-…` Buch 1/2/3.
- `raum.merksatz` (alle Räume): ein Satz, warum die Reihenfolge so ist – oben im Lernplan und auf der Seite.
  PB1, PB2 und WiSo bleiben bei den Stufen nach Häufigkeit (dort kommen geprüfte Themen deutlich öfter wieder).

## Lernkarten und Wiederholung

Der Lernstand ist ein Ereignisprotokoll im Browser (`src/lernstand/store.js`); `ableiten.js` rechnet daraus alles
Weitere, die Konstanten stehen in `regeln.js`.

- **Offene Karten statt Block-Phasen:** Es gibt keine Wiederholungs-Phasen für Blöcke mehr. Wer einen Stichpunkt
  abhakt, bekommt dessen Karten als „offen“ (nie bewertet, nach Abhak-Zeit sortiert, `offeneKarten`). Alte
  `wdh`-Ereignisse zählen nur noch für die Punkte.
- **Planung:** feste Leiter `[0,1,3,7,16,35,75]` Tage, drei Knöpfe; 1 Punkt je Kartenantwort.
- **Bewertungsregel** steht an der Karte: Gewusst = alles Verlangte ohne Zögern, Unsicher = im Kern richtig, aber
  lückenhaft oder geraten, Nicht gewusst = falsch, leer oder weniger als die Hälfte.
- **Kartenkopf:** zeigt den Blocktitel, den Stichpunkt-Titel erst nach dem Aufdecken.
- **Prüfungsrunde** (`mitPruefungsrunde`): Ist ein Prüfungstermin eingetragen, kommt jede Karte in den letzten
  42 Tagen davor noch einmal dran, spätestens 3 Tage vorher, über das Fenster verteilt.
- **Fällige Karten** werden gemischt; bei mehr als 150 fälligen Karten (Rückstau) kommen die mit der niedrigsten
  Stufe zuerst. Der Zufallsmix nimmt nur schon bewertete Karten.
- **Problemkarten:** ab 4× „nicht gewusst“; im Stapel „Schwierige Karten“ stehen sie vorn.
- **Karten-Kachel** auf der Startseite: groß die Summe für heute (fällig + offen), darunter „X Wiederholungen ·
  Y neu“, unten „Z angefangen“.
- Ändert sich die Zahl der Karten einer Aussage, das Feld `karten` in `neu.koennen` mit anpassen.

## Offene Punkte

Stehen in [`OFFENE_PUNKTE.md`](OFFENE_PUNKTE.md).
