# Fortschritt: Lernprompts neu (Regelblock + Stoff + Lehrnotiz)

Plan: `PLAN_LERNPROMPTS_NEU.md`. Arbeitsmappe: `archiv/2026-11-11_lehrnotiz-arbeitsmappe/`
(`ln.py` mit `brief`, `check`, `pruefpaket`, `install`, `meldungen`, `stand`; Aufträge `AUFTRAG_SCHREIBER.md`,
`AUFTRAG_PRUEFER.md`; Muster in `muster/`; Lehrnotizen in `out/<ID>.md`, Meldungen zum Stoff in
`out/<PAKET>_meldungen.md`, Prüferbefunde in `pruef/<BLOCK>_befunde.md`).
Sicherung der Drehbuch-Prompts: `archiv/2026-11-11_drehbuch-prompts/` (124 / 76 / 23 / 70).

## Entscheidungen nach dem Pilot (Sebastian, 11.11.2026) – weichen vom Plan ab

- **Fallen vollständig:** Jede Falle aus dem alten Drehbuch, die nicht schon im Stoff steht, bleibt (gekürzt, ohne das
  alte Beispiel). Was schon als Kerngedanke oder Missverständnis steht, wird nicht wiederholt.
- **Länge:** bis 3.500 Zeichen, mit Material bis 5.000, ab 10 Aussagen bis 7.000.
- **„Schon geprüft“ zweiteilig:** „In Prüfungen: K1 (2021H), K2 (neuere Prüfung) · Noch nicht geprüft: …“. Belege aus
  2025H, 2026F, 2026H zählen als geprüft, aber ohne Jahr; ihr Inhalt wird weiter nicht geöffnet und nicht genannt.
  Katalog/Buch/„Ohne Angabe“ entfallen.
- **Regelblock:** „Was schon geprüft wurde, übst du gründlicher.“ (der Halbsatz zum Buch ist gestrichen; auch im Plan).

## Stand

**Sprint 1 (AP1) – Stand 11.11.2026: alle 31 Blöcke / 124 Stichpunkte geschrieben, geprüft und eingebaut.**
Nachsehen mit `python ln.py stand AP1`.

- Schreiber Fable 5.2 (Effort mittel), ein Lauf je Briefing-Paket (37 Pakete; Blöcke über ~170.000 Zeichen geteilt).
- Prüfer Opus 5.5 (Effort hoch), ein Lauf je Block, nur Stoff + Lehrnotiz: 232 Befunde (14 schwer, 218 klein),
  dazu 23 Hinweise zum Stoff. Alle Befunde von einem Fable-Lauf mit Briefing eingearbeitet (`pruef/<BLOCK>_befunde.md`).
  Die drei Pilot-Blöcke wurden nach dem Nachziehen der Fallen ein zweites Mal geprüft.
- Abnahme: Formprüfung ohne Fehler; Stoff aller 124 Dateien zeichengleich mit der Sicherung; Titel, Abhak-Satz und
  Wortlaut jeder Aussage passen zu `AP1.json`; keine Nennung von 2025H/2026F/2026H.
- Größe: Prompt im Mittel 13.900 Zeichen (vorher 32.400), Lehrnotiz im Mittel 4.100 (3.300–7.100).

**Sprint 2 und 3 (PB1, PB2, WiSo) – Stand 11.11.2026: alle 169 Stichpunkte geschrieben, geprüft und eingebaut, über die Claude-API** (Skript `lb.py` in der Arbeitsmappe;
Schlüssel in `ANTHROPIC_API_KEY`, setzt nur Sebastian).
- Vorbereitet: `regelblock_PB1/PB2/WISO.txt` (aus `regel_varianten.py`, Plan Abschnitt 4), 52 Briefing-Pakete in
  `brief/`, Aufträge `AUFTRAG_SCHREIBER_API.md` / `AUFTRAG_PRUEFER_API.md` (Besonderheiten je Raum stehen in `lb.py`).
- SQL-Stichpunkte (PB2-5-1-1 bis -5, PB2-6-1-1, -2, -3, -6): ein festes Tabellenmodell `material_PB2_sql.txt`, das
  `ln.py` beim Zusammensetzen als „Material“ anhängt; die Lehrnotiz in `out/` hat dort kein eigenes Material.
- Probe direkt (ohne Batch): PB1-4-1_1, PB2-5-1_1, WISO-1-1 – Form ohne Fehler, gelesen, Niveau wie AP1.
- **Erledigt 11.11.2026:** Schreiber-Batch (49 Pakete, alle gelungen) → 169 Lehrnotizen ohne Formfehler.
  Prüfer-Batch (43 Blöcke): 433 Befunde (24 schwer, 409 klein), kein Block „zurück an den Schreiber“.
  Einarbeiten per API (`AUFTRAG_EINARBEITER_API.md`, ein Lauf je Block, sieht Stoff + Lehrnotiz + Befunde):
  237 übernommen, 125 geändert übernommen, 66 nicht übernommen (meist Zweifel an Angaben über echte IHK-Aufgaben,
  die der Prüfer nicht sehen konnte), 20 weitergegeben (SQL-Modell, Stoff). Alle schweren Befunde sind eingearbeitet.
  Protokoll je Block: `pruef/<BLOCK>_entscheidungen.md`; Fassung vor dem Einarbeiten: `api/vorher/<ID>.md`.
- SQL-Modell nach Prüferbefund berichtigt (`StationNr` = Stammstation; Spalten `PLZ` und `MitMotor`; Tabellen
  `Inventur` und `Interessent`).
- Eingebaut mit `python ln.py install PB1|PB2|WISO` (76 / 23 / 70 Dateien; Kopf und Stoff zeichengleich mit der
  Sicherung). `npm run pruefen` „Keine Fehler.“, `npm test` 171/171, Build 11,6 MB. Prompt im Mittel: PB1 14.300
  (vorher 34.600), PB2 18.200 (40.000), WiSo 14.600 (33.000) Zeichen.
- Stoff-Meldungen: 637 vom Schreiber, dazu 15 Prüfer-Abschnitte „Zum Stoff“, in
  `_Stoff-Meldungen_Lehrnotiz_PB1-PB2-WISO_2026-11-11.md` (`meldungen_pb_wiso.py`).
- **Stoffprüfung PB1, PB2, WiSo erledigt (11.11.2026):** Meldungen in 24 Einheiten geteilt (`meldungen_teilen.py`;
  Themenordner, WISO-1 in zwei Hälften). Erste Prüfung gegen Katalog, Bücher und Altprüfungen: 12 Agenten Opus 5.5
  (`ZUSATZ_PB_WISO.md` + `AUFTRAG_STOFFPRUEFUNG.md`) → `stoffpruefung/<EINHEIT>_ergebnis.md`. **Das war im Abo sehr
  teuer** (je Agent rund 300.000 Token Verlauf, 5-Stunden-Limit einmal erreicht). Zweite Kontrolle deshalb über die
  API als Batch (`la.py`: alles Nötige steht in der Anfrage, keine Werkzeuge; PB2-5/-6 noch per Agent) →
  `<EINHEIT>_aenderungen.json`, `_entscheidungen.md`. Regeln wie bei AP1; in WiSo werden Beträge, Fristen und
  Rechtsstände nie geändert. Eingetragen mit `python stoff_aendern.py anwenden PB1|PB2|WISO` (**nie „alle“** – die
  AP1-Listen liegen im selben Ordner): 434 Ersetzungen, alle passend (418 Erklärungen-Ersetzungen in 316 Erklärungen,
  6 Aussagen, 8 Karten, 2 Lehrnotizen) in 156 Stichpunkten. JSON sonst unverändert (gegen
  `stoffpruefung/<RAUM>_vor_stoffaenderung.json` geprüft); `pruefen` „Keine Fehler.“, 171/171 Tests, Build 11,7 MB.
  Geänderte Aussagen: PB1-10-2-3-K4, PB1-7-1-3-K4, WISO-1-1-1-K2, WISO-1-1-3-K3, WISO-1-7-3-K2, WISO-3-4-2-K3.
  Nicht eingetragen: 75 offene Punkte in `_Stoffpruefung_OFFEN_PB1-PB2-WISO_2026-11-11.md`; alle Urteile in
  `_Stoffpruefung_Lehrnotiz_PB1-PB2-WISO_2026-11-11.md`.
- **Offene Punkte bearbeitet (12.11.2026):** von Claude selbst, ohne Agenten und ohne API. Belege an den Altprüfungen
  nachgelesen (`aufgabe.py`), Rechtsstände am Gesetzestext geprüft, Entscheidungen in
  `_Stoffpruefung_OFFEN_PB1-PB2-WISO_Entscheidungen_2026-11-12.md`. Eingetragen mit
  `python stoff_aendern.py anwenden PB1-OFFEN|PB2-OFFEN|WISO-OFFEN` (38 Ersetzungen) und `python offen_felder.py`
  (35 Feldänderungen), dann `ln.py install`. Stand davor: `stoffpruefung/<RAUM>_vor_offene_punkte.json`.
  `offen_sammeln.py` nicht noch einmal laufen lassen – es überschriebe den Vermerk in der Liste vom 11.11.
- Kosten laut `python lb.py kosten`: rund 65 $ (Probe 4,80 · Schreiber 27 · Prüfer 7 · Einarbeiten 14 ·
  zweite Kontrolle der Stoffprüfung 12).

## Offen

- ~~Node fehlte~~ **Erledigt 11.11.2026:** Node.js 26 LTS installiert (`C:\Program Files\nodejs`; in einer schon
  offenen Shell ggf. den Pfad voranstellen). `npm run pruefen` „Keine Fehler.“, `npm test` 171/171, `npm run build`:
  `Lernstudio.html` mit den neuen AP1-Prompts gebaut (15,1 MB statt 18 MB). Noch nicht auf GitHub (`NOCH_HOCHLADEN.md`).
- **Stoffprüfung AP1 erledigt (11.11.2026):** 514 Meldungen je Themenordner von Opus 5.5 gegen Katalog, Bücher und
  die acht freigegebenen Altprüfungen geprüft (`stoffpruefung/AP1-<N>_ergebnis.md`, Auftrag `AUFTRAG_STOFFPRUEFUNG.md`,
  Sammeldatei `_Stoffpruefung_Lehrnotiz_2026-11-11.md`), dann von Fable 5.2 gegengeprüft und in exakte Ersetzungen
  übersetzt (`AUFTRAG_AENDERUNGEN.md`, `AP1-<N>_aenderungen.json`, `AP1-<N>_entscheidungen.md`). Sebastian: „prüf
  nochmal grob nach und entscheide selber“ – Regeln stehen im Auftrag. Eingetragen mit `stoff_aendern.py`:
  348 Ersetzungen (256 Erklärungen, 6 Aussagen, 11 Karten, 2 Lehrnotizen) in 113 Stichpunkten; `pruefen`, Tests und
  Build danach ohne Fehler. Nicht eingetragen: 81 offene Punkte in `_Stoffpruefung_OFFEN_2026-11-11.md`.
  `ln.py install` vergleicht den Stoff dieser 113 Stichpunkte nicht mehr mit der Sicherung
  (`stoffpruefung/stoff_geaendert.txt`).
- Stoff-Meldungen: 514 Zeilen aus allen AP1-Blöcken, gesammelt in `_Stoff-Meldungen_Lehrnotiz_2026-11-11.md`,
  **nicht bearbeitet, nicht nachgeprüft**. Darunter Hinweise auf mögliche Fehler im Stoff (z. B. AP1-5-2-1-K9
  ESU-Datum, AP1-5-1-4-K2 Rechtsstand KI-Verordnung) und auf Aussagen, die als „neuere Prüfung“ belegt sind, zu denen
  das alte Drehbuch aber „keine echte Aufgabe“ sagt (dort schreibt die Lehrnotiz, dass die Form nicht bekannt ist).
- Probesitzungen (5.7) und Doku (5.8: `LIES_MICH.md`, `CLAUDE.md`, `README.md`, `OFFENE_PUNKTE.md`, Hilfe-Seite).
- Sprint 2 (PB1, PB2) und Sprint 3 (WiSo): Regelblock-Varianten anlegen (`regelblock_<RAUM>.txt`), `ln.py` nimmt den
  Stoff bisher aus der gesicherten Datei (für PB1/PB2/WiSo gleichwertig, solange das JSON nicht geändert wurde).
