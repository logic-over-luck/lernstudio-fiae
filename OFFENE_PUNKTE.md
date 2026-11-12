# Offene Punkte

Stand 12.11.2026. Die Stoffprüfungen aller vier Prüfungsteile sind abgeschlossen, der Ordner ist aufgeräumt.
Was bis dahin geändert wurde (Protokolle, Pläne, alte Fassungen), liegt außerhalb des Repos in
`Desktop\lernstudio_archiv\2026-11-12\` – dort auch die alte, lange Fassung dieser Datei.

## So lerne ich bis zur AP1 (29.09.2027)

- Nur AP1. Etwa 1 Stichpunkt pro Werktag (5–7 pro Woche) → Lernplan durch im März/April 2027.
- Neuer Stichpunkt mit dem Lernprompt, dann abhaken → seine Karten werden „offen“.
- Jeden Tag: zuerst die fälligen Karten, dann die offenen. An vollen Tagen lieber keinen neuen Stichpunkt.
- Altprüfungen ab etwa Januar/März üben (erst einzelne Rechen-/Zeichenaufgaben, später ganze Prüfungen).
  **Die 3 neuesten (2025H, 2026F, 2026H) aufheben** und in den letzten 6 Wochen unter echten Bedingungen schreiben.
- Prüfungstermin 29.09.2027 in der App eingetragen lassen (die Prüfungsrunde braucht ihn).

## Als Nächstes

1. **Probesitzungen:** Die Lernprompts (Regelblock + Stoff + Lehrnotiz) sind noch in keiner echten Sitzung erprobt.
   Nach 3–5 Sitzungen notieren: Dauer, was zu viel, zu wenig oder nervig war. Dann den Regelblock anpassen
   (`regelblock_<RAUM>.txt` in der Arbeitsmappe, `python ln.py install <RAUM>`).
2. **Wiederholungs-Prompt** (abgehakte Stichpunkte, `lernprompt.js`) ist noch der alte. Ideen: Aussage für Aussage
   erklären und sofort fragen; Stufe und „in der Prüfung vorgegeben“ mitgeben; wie ein IHK-Prüfer bewerten; „kann ich“
   überspringt die Erklärung; Kür und der Satz zum Prüfungskatalog raus, Längengrenze rein.

## Bekannte Eigenheiten der Daten (große Prüfung 12.11.2026, bewusst gelassen)

- **`pruef` nennt eine Prüfung, zu der keine Teilaufgabe in `ta` steht:** AP1-8-2-2, -8-2-3, -8-4-1 (2025H) und
  13 Stichpunkte in PB1/PB2 (2026S). Die Zuordnung kam aus der Auswertung ohne Teilaufgaben-Nummer.
- **WISO-3-2-2:** Gewicht 1,5, `pruef` ergibt 1.
- **Sechs Belege, deren Aufgabe im `ta` eines anderen Stichpunkts steht:** AP1-3-2-2-K5, AP1-3-3-3-K6, AP1-4-1-1-K7,
  AP1-4-2-4-K3, AP1-5-2-5-K7 (aufgehobene Prüfungen, nicht nachgelesen) und AP1-7-3-3-K7 (2023F-A3-be, bewusst).
- **Drei Erklärungen in `AP1.json` nennen ein Jahr der aufgehobenen Prüfungen** (AP1-1-2-2-K8, AP1-6-1-1-K2,
  „vorgegeben“ bei AP1-1-1-1-K4). Die Lernprompts sagen dort „in einer Prüfung“; die App zeigt das Jahr.
- Einige Lehrnotizen in PB1, PB2 und WiSo liegen 200–700 Zeichen über dem Richtwert von 3.500.

## Im Frühjahr 2027

- **Faktencheck** der Stellen, die sich bis zur Prüfung ändern können: E-Rechnungs-Fristen (AP1-3-1-6-K5),
  KI-Verordnung Art. 50 (AP1-5-1-4-K2), Windows-10-ESU (AP1-5-2-1-K9), Grundschutz++ (AP1-7-2-1-K1),
  USB-C-Ladepflicht und EU-Energielabel (AP1-4), WLAN-Höchstraten / WPA3 im 6-GHz-Band (AP1-6), WCAG 2.2 und
  Barrierefreiheitsstärkungsgesetz (AP1-8), BSI-Passwort-Richtwerte (AP1-7). Zuletzt geprüft: 12.11.2026.
- Nachsehen, ob eine neue Auflage des Prüfungskatalogs angekündigt ist (aktuell: 2. Auflage 2024).
- AP1 Frühjahr 2027 als frische Probeprüfung holen, sobald sie mit Lösungen erhältlich ist.

## Vor der AP2 (nach der AP1)

- **Offene Stoff-Meldungen** (`inhalt\lernprompts\_Stoff-Meldungen_Drehbuch_2026-11-10.md`), die wichtigsten Gruppen:
  - Belegzuordnung, die die Wichtigkeit verschiebt: PB1-6-1-2 ohne eigene Belege (zwei Aufgaben hängen nur an PB1-6-1-3),
    WISO-2-4-2, WISO-4-1-2-K3, WISO-4-2-1/-2, WISO-3-4-4 (Brandschutzzeichen 2024S-A28 ohne Aussage), WISO-5-2-1 (A28).
  - Art prüfen: PB1-6-1-3 ist „Wissen“, lässt aber ein relationales Modell zeichnen.
  - Lücken, die eine Quelle brauchen: WISO-3-3-1 (zwei Zeichen aus 2022S-A23, Begriff Sammelstelle/-platz/-punkt),
    WISO-3-3-2 (IP-Wasserziffer 4, Symbole Schutzklasse I/III), WISO-1-3-6-K8 (Urlaubs-Bruchteile), WISO-1-3-5-K10
    (Pflichtplätze runden), WISO-2-4-3-K3 („Kosten gesenkt“ ohne Angabe zum Ergebnis), WISO-4-2-2 (Verpflichteter beim Weiterverkauf).
  - Karten, die an der Nachbar-Aussage hängen (nur notiert, IDs bleiben): PB1-8-1-2 K2-1, PB1-9-1-3 K3-1, WISO-5-3-3 K2-2.
- **Faktencheck WiSo** vor der AP2 und jedes Jahr im Januar (`inhalt\lernprompts\WISO\_Faktencheck_2026-11-09.md`, 40 Stellen).
  Jährlich neu: Mindestausbildungsvergütung (WISO-1-1-4-K4), Beitragsbemessungs- und Versicherungspflichtgrenzen
  (WISO-1-6-2-K4), Beitragssätze (WISO-1-6-3). Im Blick behalten: Arbeitszeitgesetz-Reform (WISO-1-3-4-K5),
  Verpackungsrecht (WISO-4-2-2), Sicherheitsbeauftragte/DGUV Vorschrift 1 (WISO-3-1-2), Bildungsurlaub Sachsen ab 1.1.2027
  (WISO-1-8-1-K7), Datenschutzaufsicht und Meldefristen (WISO-5-2-1-K10), Löschdecke bei brennender Kleidung (WISO-3-4-4-K5).
- **Rechtsänderungen 2026 in WiSo** stehen mit beiden Ständen und Datum im Stoff („Stand 2026“): Sicherheitsbeauftragte
  ab 50 Beschäftigten, VerpackDG, Grundsicherungsgeld statt Bürgergeld, Mindestausbildungsvergütung 2026/2027,
  Bildungsurlaub Sachsen ab 2027, Kommanditist (Zustimmung statt Widerspruchsrecht).
- Wo das Buch dem Stoff widerspricht, gilt der Stoff: `inhalt\lernprompts\_Buch-Abweichungen_2026-11-10.md`.
- Erst nach der AP1 prüfen, ob ein Wechsel zu FSRS lohnt (mit den eigenen Antworten aus der AP1-Zeit).

## Trainer-Lücken

- **Bewusst gelassen (für die AP1 nicht nötig):**
  - EPK/BPMN (AP1-8-4-4): Die 4 Lese-Übungen erscheinen in AP1. Die 7 übrigen in `prozess.js` (`raum: ['AP2']`) sind
    Zeichnen und Fehlersuche – geht über AP1 hinaus, und in PB1/PB2 gibt es keinen Stichpunkt dafür.
  - AP1-2-3-3 (Präsentieren), AP1-6-1-5 (WLAN-/Ethernet-Standards): reines Wissen bzw. Schreiben, Karten und Lernprompt reichen.
  - Subnetz-Lernweg (13 Aussagen, Liste in `tests\subnetz.test.mjs`) und Zahlen-Trainer (AP1-4-2-4-K8, Liste in
    `tests\zahlen.test.mjs`): fast nur Wissen mit je 1–3 Karten.
- **Vor der AP2:** PB1-7-1-2, PB2-1-1-3, PB2-2-1-4, PB2-5-1-5 ohne Trainer (PB2-5-1-5 passt ins SQL-Labor).

## Klein, irgendwann (optional)

- Glossar wird nicht genutzt – Menüpunkt ausblenden (nicht löschen, der Zahlen-Trainer verweist darauf).
- Drei Aussagen haben nur noch eine Karte, die eigentlich doppelt ist: AP1-4-1-5-K1, AP1-3-4-3-K2, AP1-7-3-1-K8.
- 33 Karten mit sechs oder mehr Aufzählungspunkten (z. B. AP1-1-2-2-K6-2, AP1-7-5-1-K3-1) wären eher zu teilen.
- Drei Stichpunkte wiederholen fast nur ihren Partner – direkt nach dem Partner lernen:
  AP1-7-2-3 nach AP1-1-1-3 · AP1-1-3-3 nach AP1-5-1-4 · AP1-6-3-4 nach AP1-6-3-2.
