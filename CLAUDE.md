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
  `src/daten/wichtigkeit.js` schreibt sie für Anzeige und kopierte Prompts aus („Frühjahr 2024“). **Keine Prüfung
  ist aufgehoben** (seit 14.11.2026): Alle elf AP1-Prüfungen werden genannt, geöffnet und in Lehrnotizen, Stoff und
  Lernplan verwendet. `npm run pruefen` meldet, wenn in der Datei die Zeile „Thema:“, die Zeile „Ziel:“ oder bei
  einer Aussage Überschrift (Kurztitel, Stufe, „in der Prüfung vorgegeben“), Wortlaut oder Erklärung nicht mehr zu
  `inhalt/<RAUM>.json` passen, der Regelblock nicht mehr zu `_regelblock.md` oder der Hinweis aus dem Lernplan nicht
  mehr zu `neu.hinweis`, und verlangt je Raum alle Prompts oder keinen.
  - **Das Repo ist die einzige Quelle** (seit 15.11.2026): Prompts und `inhalt/<RAUM>.json` werden direkt hier
    geändert. Die frühere Arbeitsmappe mit ihren Skripten und der Sicherung der Drehbuch-Prompts gibt es nicht mehr;
    `inhalt/lernprompts/_FORTSCHRITT_LEHRNOTIZ.md` ist nur noch das Protokoll dazu.
  - **Stoff ändern:** Datei und `inhalt/<RAUM>.json` von Hand gleich ändern – Ziel, Überschrift, Können-Satz und
    Erklärung jeder Aussage stehen in beiden wortgleich, das prüft `npm run pruefen`. Die Lehrnotiz steht nur in der
    Datei und wird dort geändert.
  - **Regelblock ändern** (Abschnitt „## So läuft unsere Sitzung“ bis vor „## Stoff“, in allen Prompts eines Raums
    gleich): `inhalt/lernprompts/<RAUM>/_regelblock.md` ändern, dann `npm run regelblock einsetzen <RAUM>` – schreibt
    ihn in alle Prompts des Raums; Kopf, Stoff, Lehrnotiz und Material bleiben zeichengleich.
    `npm run regelblock pruefen [RAUM]` nennt Prompts, die abweichen (ohne Raum oder mit `ALLE`: alle vier). Die vier
    Fassungen sind eigenständig: Was für alle Räume gelten soll, in allen vier `_regelblock.md` ändern. Die Regeln
    für die Wiederholung stehen nicht dort, sondern im Code (`wiederholRegeln` in
    `src/bereiche/lernen/lernprompt-neu.js`) und wiederholen einzelne Sätze des Regelblocks – bei Bedarf dort
    mit ändern.
  - **Der Regelblock ist seit 26.11.2026 eingefroren.** Bis dahin wurde er nach einzelnen Sitzungen viermal
    umgeschrieben, und jede Fassung behob die Nebenwirkung der vorigen. Deshalb gilt: Fällt in einer Lernsitzung
    etwas auf, zuerst prüfen, ob die Ursache in Stoff, Lehrnotiz oder Hinweis dieses einen Stichpunkts liegt – dann
    nur diese Datei ändern. Am Regelblock wird erst etwas geändert, wenn dasselbe Problem in zwei Sitzungen zu
    verschiedenen Stichpunkten aufgetreten ist, und dann nur die eine Zeile dazu. Anlass und Probe der Fassung vom
    26.11.2026 stehen im Commit-Text; was noch beobachtet wird, in `OFFENE_PUNKTE.md`.
  - **Hinweis aus dem Lernplan** (seit 26.11.2026): Was die App am Stichpunkt als Hinweis zeigt (`neu.hinweis`), steht
    Wort für Wort als erste Zeile der Lehrnotiz: „**Hinweis aus dem Lernplan:** …“. Dort steht, was zu einem anderen
    Stichpunkt gehört und wo das Lehrbuch abweicht. Ändern: `neu.hinweis` in `inhalt/<RAUM>.json` bearbeiten, dann
    `npm run hinweis einsetzen <RAUM>`; `npm run hinweis pruefen [RAUM]` nennt Prompts, die abweichen (181 der 293
    Stichpunkte haben einen Hinweis, die anderen keine Zeile).
  - **Abläufe in der Lehrnotiz** (seit 25.11.2026): Der Abschnitt „**Abläufe zum Verstehen (Hintergrund, mehr als die
    IHK verlangt):**“ hinter den Kerngedanken beschreibt Schritt für Schritt, was der Stoff nur aufzählt. Er kommt aus
    `tools/ablauf-ergaenzen.mjs`: `npm run ablauf start [ALLE|RAUM|Ordner wie AP1-4|Stichpunkt] [neu]`, dann
    `npm run ablauf weiter warten`, Bericht ansehen, dann `npm run ablauf einarbeiten`. Für Tests mit wenigen
    Stichpunkten `npm run ablauf direkt <FILTER>` (ohne Batch: sofort fertig, voller Preis). Sonst läuft es über die Batch-API
    (Schreiber Fable 5.2, Prüfer Opus 5.5, braucht `ANTHROPIC_API_KEY`); eingearbeitet wird nur, was der Prüfer
    freigibt. Der Bericht mit Abgelehntem, übersehenen Stellen und Stoff-Meldungen liegt als
    `_Ablauf-Bericht_<Datum>_<Filter>.md` in `inhalt/lernprompts/`, Zwischenstände in `.ablauf/` (nicht im Repo).
    Von Hand ändern geht auch: Zeilen im Abschnitt bearbeiten oder löschen; Stoff und JSON sind nicht betroffen.
  - **SQL-Stichpunkte in PB2** (PB2-5-1-1 bis -5, PB2-6-1-1, -2, -3, -6): ein festes Tabellenmodell, das in allen neun
    Dateien zeichengleich als „Material“ am Ende der Lehrnotiz steht. Ändern: in allen neun Dateien gleich.
  - In WiSo ist die Abschlussrunde gebunden (Auswahl, Zuordnung, Reihenfolge, Zahl eintragen) wie in der Prüfung.
  - Lehrnotizen für PB1, PB2, WiSo kamen über die Claude-API (Schreiber Fable 5.2, Prüfer Opus 5.5, Einarbeiten
    Fable 5.2). Den Schlüssel `ANTHROPIC_API_KEY` setzt nur Sebastian.
  - Dateien mit `_` und `LIES_MICH.md` dort lädt der Build nicht: `<RAUM>/_regelblock.md` ist die Vorlage des
    Regelblocks, alles andere sind Arbeitslisten und Hinweise, kein Inhalt. Geblieben sind nur die, die noch gebraucht
    werden: `_Buch-Abweichungen_2026-11-10.md`, `_Stoff-Meldungen_Drehbuch_2026-11-10.md` (offen, vor der AP2),
    `_FORTSCHRITT_LEHRNOTIZ.md` (historisch), `WISO/_Faktencheck_2026-11-09.md`. Die Protokolle der Stoffprüfungen
    und alles Ältere liegen außerhalb des Repos in `Desktop\lernstudio_archiv\2026-11-12\`.
- **Prüfen vor jedem Hochladen:** `npm run pruefen`, `npm test`, `npm run saetze`, `npm run build`.
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
