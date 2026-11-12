Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Daten abfragen › Abfragen zur Gewinnung von Daten › Übung: Vorgegebenes Tabellenmodell lesen und den Weg der Abfrage finden

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

**So will ich lernen**
- Bring mir den Stoff so bei, dass ich ihn verstehe und Aufgaben dazu lösen kann. Wie du erklärst, entscheidest du – richte dich danach, wie ich antworte. Die Aufteilung aus der Lehrnotiz ist ein Vorschlag.
- Kleine Portionen: ein Thema erklären, direkt eine Aufgabe dazu, dann das nächste. Immer nur eine Aufgabe auf einmal.
- Erklär in Alltagssprache, Schritt für Schritt an einem Beispiel und mit dem Warum; Formel oder Merksatz kommen am Ende. Sag zuerst, was eine Sache ist, bevor du Regeln dazu erklärst.
- Fachwörter, die die IHK lesen will, machst du beim ersten Auftauchen **fett** und bleibst dann bei genau diesem Wort. Nach der Erklärung, direkt vor der Aufgabe, steht eine kurze Liste „Fachwörter für die Prüfung“: je Zeile das Wort und in wenigen Worten, was es bedeutet – höchstens fünf je Thema.
- Komm direkt zur Sache: keine durchgehende Rahmengeschichte, keine Rate-Fragen vor der Erklärung, kein Smalltalk, kein Lob.
- Bei Fehlern: sag, was richtig war, und erklär klar, wo der Fehler liegt und wie die richtige Antwort lautet. Verstehe ich etwas nicht, erklär es anders statt noch einmal dasselbe.
- Habe ich etwas falsch verstanden (nicht nur unvollständig oder ungenau geantwortet), stellst du danach **eine Kurzfrage** genau zu diesem Punkt – ohne neue Situation, in einem Satz zu beantworten. Höchstens eine je Thema. War die Antwort nur unvollständig, fehlte die Begründung oder das Fachwort, geht es ohne Kurzfrage weiter.
- Keine Schleifen: Hänge ich nach einer Erklärung an derselben Stelle immer noch, zeig mir die Musterantwort, sag in einem Satz, nach welchem Muster sie gebaut ist, und geh weiter. Stell dieselbe Aufgabe nicht mehrmals und bring dann keine neuen Vergleiche mehr.

**Aufgaben und Bewertung**
- Die Aufgaben denkst du dir selbst aus, jede Sitzung neu. Sie sollen anwenden lassen (eine neue Lage, einen Fehler finden, einen Vorschlag beurteilen), nicht die Erklärung nachsagen. Bei Rechnungen glatte Werte; rechne deine Lösung nach, bevor du meine Antwort bewertest.
- Sag in der Aufgabe klar, was verlangt ist, bei mehreren Teilen als a), b). Bewerte nur das – verlang nachträglich nichts, was nicht in der Aufgabe stand.
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.
- Stimmt der Inhalt und fehlt nur das Fachwort, zählt die Antwort als richtig: Nenn mir das Wort in einem Satz und geh weiter.
- Zeig Lösungen nie, bevor ich geantwortet habe.

**Was feststeht**
- Der Stoff ist verbindlich, und jede Aussage muss drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“, statt still etwas anderes beizubringen. Steht bei einer Aussage „in der Prüfung vorgegeben“, muss ich das nur anwenden.
- Sag mir bei jedem Thema in einem Halbsatz, ob es schon in einer Prüfung vorkam (Lehrnotiz „Schon geprüft“). Was schon geprüft wurde, übst du gründlicher.
- Schreibe ich „kann ich“, stell nur eine Aufgabe. Schreibe ich „Pause“, fass in zwei Zeilen zusammen, wo wir stehen; später mache ich im selben Chat weiter.
- Am Ende stellst du eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu vorgegebener Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen 10–12), eine Teilaufgabe nach der anderen. Nimm vor allem das hinein, was unterwegs nicht saß, und das, was schon geprüft wurde. Davor gibt es keine eigene Wiederholungsrunde.
- Abhaken: Hat die Abschlussaufgabe mindestens zwei Drittel der Punkte, schreib: „✅ Kannst du abhaken: <Titel des Stichpunkts>“. Sonst nenn, was noch wackelt, und übe genau das mit mir.

Antworte auf Deutsch.

## Stoff: Übung: Vorgegebenes Tabellenmodell lesen und den Weg der Abfrage finden

Ziel: In einem vorgegebenen relationalen Modell oder Tabellenauszug Primär- und Fremdschlüssel und den JOIN-Pfad für eine Abfrage finden, Datentypen in Bedingungen beachten und an der Ergebnistabelle ablesen, welche Tabellen und welcher JOIN nötig sind.

Das muss ich können:

### K1 – JOIN-Pfad aus dem Tabellenmodell (Stufe 3 Anwenden)
Du kannst in einem vorgegebenen relationalen Modell oder Tabellenauszug für eine Abfrage den JOIN-Pfad bestimmen: an Primär- und Fremdschlüsseln ablesen, welche Tabellen über welche Spaltenpaare verbunden werden, auch über eine Zwischentabelle, von der keine Spalte ausgegeben wird (Wirkstoff – Arzneimittelwirkstoffe – Arzneimittel – Hersteller).

Erklärung:
Vorgehen am vorgegebenen Modell:
- **Start und Ziel:** In welchen Tabellen stehen die Spalten der Ergebnistabelle und die Bedingungen?
- **Pfad:** Von Tabelle zu Tabelle über Fremdschlüssel → Primärschlüssel gehen, bis alle verbunden sind.
- **Zwischentabellen** gehören in den Pfad, auch wenn keine ihrer Spalten ausgegeben wird.
Beispiel: Hersteller der Arzneimittel mit dem Wirkstoff Ibuprofen
`SELECT DISTINCT h.Name FROM Wirkstoff w JOIN Arzneimittelwirkstoffe aw ON w.WirkstoffID = aw.WirkstoffID JOIN Arzneimittel a ON aw.AMID = a.AMID JOIN Hersteller h ON a.HerstellerID = h.HerstellerID WHERE w.Bezeichnung = 'Ibuprofen';`
`DISTINCT`, weil ein Hersteller mehrere passende Arzneimittel haben kann.
Die Spaltennamen übernimmst du genau aus dem vorgegebenen Modell (hier `AMID` in Arzneimittelwirkstoffe und Arzneimittel, `Name` in Hersteller), nicht aus der Erinnerung oder aus anderen Aufgaben.

### K2 – JOIN-Bedingung bei mehreren Fremdschlüsseln (Stufe 3 Anwenden)
Du kannst die passende JOIN-Bedingung festlegen, wenn eine Tabelle mehrere Fremdschlüssel auf dieselbe Tabelle hat (MID_Soll und MID_Ist in Pflegearbeit) oder zwei Wege zum Ziel bestehen: Ist-Zeiten werden über die Plan-ID (HStZ_HStPIdKey) verbunden, nicht nur über die Haltestelle, sonst entstehen falsche Kombinationen.

Erklärung:
Hat eine Tabelle **mehrere Fremdschlüssel auf dieselbe Tabelle**, bindest du diese Tabelle je Fremdschlüssel einmal mit eigenem Alias ein:
`SELECT p.Datum_Soll, ms.Name AS Soll, mi.Name AS Ist FROM Pflegearbeit p JOIN Mitarbeiter ms ON p.MID_Soll = ms.MID LEFT JOIN Mitarbeiter mi ON p.MID_Ist = mi.MID;`
(LEFT JOIN beim Ist, falls die Arbeit noch nicht erledigt und MID_Ist leer ist.)
**Zwei Wege zum Ziel:** Verbinde über den Schlüssel, der den Datensatz eindeutig zuordnet. Eine Ist-Zeit gehört zu genau einem Plan-Eintrag, also `ON z.HStZ_HStPIdKey = p.HStP_IdKey`. Verbindest du nur über die Haltestelle, wird jede Ist-Zeit mit jedem Plan-Eintrag dieser Haltestelle kombiniert – es entstehen falsche Zeilen.

### K3 – Datentyp der Spalte in der Bedingung (Stufe 3 Anwenden)
Du kannst den Datentyp einer Spalte aus Modell oder Aufgabentext in der Bedingung berücksichtigen: eine als Zeichenkette angelegte PLZ in einfachen Anführungszeichen und mit LIKE ('___3%', '508%'), einen Wahrheitswert (Boolean) mit = TRUE bzw. = FALSE (rezeptpflichtig = FALSE), ein Datum mit YEAR(…) oder einem Bereich.

Erklärung:
Der Datentyp aus Modell oder Aufgabentext bestimmt, wie du die Bedingung schreibst:
- **Zeichenkette** (z. B. PLZ als `CHAR(5)`): Wert in einfachen Anführungszeichen, Muster mit `LIKE`: `WHERE PLZ LIKE '508%'` oder `WHERE PLZ LIKE '___3%'`
- **Zahl:** ohne Anführungszeichen: `WHERE Menge > 100`
- **Wahrheitswert** (BOOLEAN): `WHERE rezeptpflichtig = FALSE` bzw. `= TRUE`
- **Datum:** mit Datumsfunktion oder Bereich: `WHERE YEAR(Datum) = 2023` oder `WHERE Datum >= '2023-01-01' AND Datum < '2024-01-01'`
`LIKE` ist für Text gedacht; bei einer als Zahl gespeicherten PLZ prüfst du mit Vergleichen oder BETWEEN.

### K4 – INNER oder LEFT JOIN aus der Ergebnistabelle (Stufe 3 Anwenden)
Du kannst aus der verlangten Ergebnistabelle und dem Modell ableiten, welche Tabellen die Abfrage braucht und ob ein INNER JOIN reicht: Zeilen mit 0 oder leerem Wert (Mitarbeiter ohne Urlaub, Kunde ohne Rechnung) zeigen Datensätze ohne Partner, dann brauchst du LEFT JOIN oder eine korrelierte Unterabfrage.

Erklärung:
Die verlangte Ergebnistabelle verrät, was die Abfrage braucht:
- **Spalten** → welche Tabellen beteiligt sind (und welche Zwischentabellen auf dem Weg liegen)
- Zeilen mit **0 oder leerem Wert** (Mitarbeiter mit 0 Urlaubstagen, Kunde ohne Rechnung) → es gibt Datensätze **ohne Partner** → `LEFT JOIN` (mit `COUNT(Spalte der rechten Tabelle)`) oder korrelierte Unterabfrage
- nur Datensätze mit Partner → `INNER JOIN` reicht
- eine Zeile je Kunde, Jahr oder Kategorie → `GROUP BY` danach
Beispiel: „Alle Mitarbeiter mit der Anzahl ihrer Urlaubseinträge 2022, auch 0“ → `Mitarbeiter LEFT JOIN Fehlzeit` mit Art und Jahr in ON, `COUNT(f.Ma_ID)`, `GROUP BY` je Mitarbeiter.

## Lehrnotiz: Übung: Vorgegebenes Tabellenmodell lesen und den Weg der Abfrage finden

**Aufteilung:**
- Den Weg durch das Modell finden: K1
- Mehrere Fremdschlüssel auf dieselbe Tabelle, zwei Wege zum Ziel: K2
- Bedingung passend zum Datentyp: K3
- Aus der Ergebnistabelle Tabellen und JOIN-Art ablesen: K4 – hier kommt alles Vorige zusammen

**Schon geprüft:** In Prüfungen: K1 (2021W), K2 (2023S, 2024W), K3 (2021W, 2022W, 2023W), K4 (2022W, 2023S, 2023W)

**Kerngedanken:**
- Erst das Modell lesen, dann schreiben. Jedes Paar aus Fremdschlüssel und Primärschlüssel auf dem Weg wird genau eine ON-Bedingung. Vier Tabellen brauchen also drei.
- Zwei Tabellen lassen sich nur dort verbinden, wo ein Fremdschlüssel auf einen Primärschlüssel zeigt. Gibt es keinen direkten, führt der Weg über weitere Tabellen.
- Bei zwei Fremdschlüsseln auf dieselbe Tabelle sollen zwei Werte nebeneinander in einer Zeile stehen. Darum wird die Tabelle zweimal eingebunden, z. B. `Station` einmal für `StartStationNr` und einmal für `EndStationNr`.
- Eine Spalte, die viele Datensätze gemeinsam haben, ordnet nicht eindeutig zu. `Fahrrad.StationNr` ist die Stammstation des Rads und sagt nichts darüber, wo eine Ausleihe begann.

**Typische Missverständnisse:**
- Viele denken, eine zusätzlich verbundene Tabelle schade nicht. Richtig ist: Ein unnötiger INNER JOIN lässt alle Zeilen wegfallen, die dort keinen Partner haben.
- Viele denken, mit der Wahl von LEFT JOIN sei die 0-Zeile gesichert. Richtig ist: Steht eine Bedingung für die rechte Tabelle in WHERE, verschwindet die Zeile wieder. Die Bedingung gehört in ON.

**Fachwörter:**
- JOIN-Pfad: Weg über Schlüssel von Tabelle zu Tabelle
- Primärschlüssel: kennzeichnet jeden Datensatz eindeutig
- Fremdschlüssel: verweist auf Primärschlüssel einer anderen Tabelle
- Zwischentabelle: löst m:n auf, enthält beide Fremdschlüssel
- Alias: Kurzname für eine Tabelle in der Abfrage
- Datentyp: Art der Werte einer Spalte
- Ergebnistabelle: verlangte Ausgabe mit Spalten und Beispielzeilen

**So fragt die IHK:**
- Jede Prüfung baut ihre SQL-Aufgabe (21 bis 30 Punkte) auf vorgegebenen Tabellen auf. Manchmal ist das ein gezeichnetes relationales Modell mit Primärschlüsseln und Beziehungen. Meist sind es Tabellenauszüge mit Beispielzeilen auf einer heraustrennbaren Anlage.
- Das Lesen des Modells wird nie einzeln abgefragt. Es entscheidet aber über die Punkte der Schreibaufgaben (je 4 bis 12 Punkte, Operator meist „erstellen“).
- Vorgekommen sind:
  - eine Liste über vier Tabellen mit Zwischentabelle, Bedingung „Menge 100 oder 200“ und zweistufiger Sortierung (8 Punkte);
  - eine Tabelle mit zwei Fremdschlüsseln (Soll und Ist) auf dieselbe Mitarbeitertabelle. Für eine Durchschnittsliste war der richtige zu wählen, und auch ein Mitarbeiter mit 0 erschien (8 Punkte);
  - alle Mitarbeiter mit Abteilung, Urlaubstagen und Anzahl der Einträge, viele mit leerem Wert oder 0 (10 Punkte, LEFT JOIN mit Art und Jahr in ON);
  - Verspätungen aus Plan- und Ist-Zeiten, die über die Plan-ID zu verbinden sind (12 Punkte);
  - eine als Zeichenkette angelegte PLZ mit Muster (4 bzw. 5 Punkte).
- Signale im Aufgabentext sind „Beachten Sie die Spaltenbezeichnungen“, „als Zeichenkette angelegt“ und „hat den Datentyp Boolean“. Genau dort liegen die Punkte.
- Die Lösungshinweise nennen eine beispielhafte Lösung und Gesamtpunkte. In einem Jahrgang weichen sie bei Spaltennamen vom Modell ab. Maßgeblich sind die Namen im vorgegebenen Modell.
- Gewertet wird nach Bestandteilen: Tabellen und Spaltenpaare, Zwischentabelle, Alias bei doppelt eingebundener Tabelle, JOIN-Art, Bedingung passend zum Datentyp, GROUP BY, Spaltennamen der Ergebnistabelle. Andere richtige Lösungen zählen, Folgefehler nur einmal.

**Fallen:**
- Die Zwischentabelle überspringen und zwei Spalten gleichsetzen, die nichts miteinander zu tun haben.
- Die Bedingung auf eine Spalte der falschen Tabelle setzen.
- Die doppelt referenzierte Tabelle nur einmal einbinden und die beiden Fremdschlüssel mit OR verbinden. Das ergibt zwei Zeilen statt zweier Spalten.
- Die beiden Aliasnamen vertauschen oder die Ausgabespalten nicht mit AS unterscheiden.
- Den erstbesten Weg im Modell nehmen, ohne zu prüfen, ob er den Datensatz eindeutig zuordnet.
- Einen Textwert ohne Anführungszeichen schreiben oder mit `>` vergleichen, als wäre er eine Zahl: Text wird Zeichen für Zeichen verglichen ('9' > '10'); nur bei gleich langen Werten wie fünfstelligen PLZ stimmt das Ergebnis.
- Einen Wahrheitswert als Text schreiben ('TRUE', 'ja').
- Bei einer Spalte mit Uhrzeit wie `Ausleihe.Beginn` die Obergrenze mit `<=` auf den letzten Tag setzen. Dann fehlt fast der ganze letzte Tag. Richtig ist `<` auf den ersten Tag danach.
- Einen Monat nur mit `MONTH(…)` prüfen und das Jahr vergessen.
- Die Zeile mit 0 oder leerem Wert in der Ergebnistabelle übersehen und INNER JOIN schreiben.
- Nach LEFT JOIN mit `COUNT(*)` zählen. Für Datensätze ohne Partner steht dann 1 statt 0.
- Führt der Weg zur gezählten Tabelle über mehrere Tabellen, müssen alle JOINs dorthin LEFT JOINs sein.
- Nur nach dem Namen gruppieren. Sicherer ist es, den Primärschlüssel mit in GROUP BY zu nehmen.
- Die Spaltennamen der Ergebnistabelle nicht als Aliasnamen übernehmen.
- Bei „begründen“ nur die JOIN-Art nennen, ohne die 0-Zeile als Datensatz ohne Partner zu deuten.

**Material:**
Tabellenmodell „VeloPlan“ (Verleihsoftware eines Fahrradverleihs mit mehreren Stationen). Es gilt für alle SQL-Aufgaben dieser Sitzung; Ergebnistabellen werden gegen genau diese Zeilen gerechnet.

Relationales Modell (PK = Primärschlüssel, FK = Fremdschlüssel):
- `Station(StationNr (PK), Name, PLZ, Ort, Stellplaetze)`
- `Radtyp(RadtypNr (PK), Bezeichnung, MitMotor, PreisStunde, PreisTag)`
- `Fahrrad(RadNr (PK), Rahmennummer, RadtypNr (FK), StationNr (FK), Anschaffungsdatum, KmStand, Status)` – `StationNr` ist die Stammstation des Rades (nicht der Ort der letzten Rückgabe); `Status` ist 'frei', 'verliehen' oder 'Wartung'
- `Kunde(KundenNr (PK), Vorname, Nachname, Email, Geburtsdatum, RegistriertAm)`
- `Ausleihe(AusleihNr (PK), KundenNr (FK), RadNr (FK), StartStationNr (FK), EndStationNr (FK), Beginn, Ende, Betrag)` – `EndStationNr`, `Ende` und `Betrag` sind NULL, solange das Rad unterwegs ist
- `Ausleihe_Archiv` – gleich aufgebaut wie `Ausleihe`, enthält alle Ausleihen bis 31.12.2025
- `Zubehoer(ZubehoerNr (PK), Bezeichnung, PreisTag)`
- `AusleiheZubehoer(AusleihNr (PK)(FK), ZubehoerNr (PK)(FK), Anzahl)`
- `Mitarbeiter(MitarbeiterNr (PK), Vorname, Nachname, StationNr (FK), Rolle)`
- `Inventur(InventurNr (PK), RadNr (FK), Datum, KmStand)` – am Saisonende wird je Rad und Jahr einmal der Kilometerstand erfasst
- `Interessent(InteressentNr (PK), Name, Email)` – `Name` enthält Vor- und Nachname in einem Feld

Datentypen: Nummern und `Stellplaetze`, `KmStand`, `Anzahl` INT · Texte VARCHAR (auch `PLZ`, als Zeichenkette angelegt) · `MitMotor` BOOLEAN · `Geburtsdatum`, `RegistriertAm`, `Anschaffungsdatum`, `Datum` DATE · `Beginn`, `Ende` DATETIME · Preise und `Betrag` DECIMAL(8,2).

`Station`

| StationNr | Name | PLZ | Ort | Stellplaetze |
|---|---|---|---|---|
| 1 | Strandpromenade | 23570 | Travemünde | 60 |
| 2 | Seebrücke | 23669 | Timmendorfer Strand | 45 |
| 3 | Kurpark | 23683 | Scharbeutz | 40 |
| 4 | Hafen | 23743 | Grömitz | 25 |

`Radtyp`

| RadtypNr | Bezeichnung | MitMotor | PreisStunde | PreisTag |
|---|---|---|---|---|
| 1 | Citybike | FALSE | 3.00 | 15.00 |
| 2 | E-Bike | TRUE | 6.00 | 30.00 |
| 3 | Lastenrad | TRUE | 8.00 | 40.00 |
| 4 | Kinderrad | FALSE | 2.00 | 10.00 |

`Fahrrad`

| RadNr | Rahmennummer | RadtypNr | StationNr | Anschaffungsdatum | KmStand | Status |
|---|---|---|---|---|---|---|
| 101 | RL-1001 | 1 | 1 | 2024-03-01 | 2140 | frei |
| 102 | RL-1002 | 2 | 1 | 2024-03-01 | 3870 | verliehen |
| 103 | RL-1003 | 2 | 2 | 2025-04-15 | 1210 | Wartung |
| 104 | RL-1004 | 3 | 2 | 2023-05-10 | 640 | frei |
| 105 | RL-1005 | 1 | 3 | 2025-04-15 | 980 | frei |

`Kunde`

| KundenNr | Vorname | Nachname | Email | Geburtsdatum | RegistriertAm |
|---|---|---|---|---|---|
| 1 | Jana | Petersen | jana.p@mail.de | 1990-05-12 | 2024-04-02 |
| 2 | Malte | Kruse | NULL | 1985-11-03 | 2025-06-20 |
| 3 | Svenja | Lorenz | s.lorenz@mail.de | 2001-02-27 | 2026-05-14 |
| 4 | Ole | Hansen | ole.h@mail.de | 1978-09-30 | 2024-03-01 |

`Ausleihe`

| AusleihNr | KundenNr | RadNr | StartStationNr | EndStationNr | Beginn | Ende | Betrag |
|---|---|---|---|---|---|---|---|
| 5001 | 1 | 102 | 1 | 2 | 2026-07-03 10:00 | 2026-07-03 14:00 | 24.00 |
| 5002 | 2 | 101 | 1 | 1 | 2026-07-04 09:00 | 2026-07-04 12:00 | 9.00 |
| 5003 | 1 | 104 | 2 | 3 | 2026-07-10 09:00 | 2026-07-11 09:00 | 40.00 |
| 5004 | 3 | 105 | 3 | 3 | 2026-07-11 10:00 | 2026-07-11 12:00 | 6.00 |
| 5005 | 3 | 101 | 1 | 2 | 2026-07-12 10:00 | 2026-07-12 15:00 | 15.00 |
| 5006 | 3 | 102 | 2 | NULL | 2026-11-10 09:30 | NULL | NULL |

`Ausleihe_Archiv`

| AusleihNr | KundenNr | RadNr | StartStationNr | EndStationNr | Beginn | Ende | Betrag |
|---|---|---|---|---|---|---|---|
| 4001 | 1 | 101 | 1 | 1 | 2025-08-02 10:00 | 2025-08-02 13:00 | 9.00 |
| 4002 | 2 | 104 | 2 | 2 | 2025-08-09 09:00 | 2025-08-09 17:00 | 40.00 |
| 4003 | 1 | 105 | 3 | 3 | 2025-09-01 14:00 | 2025-09-01 16:00 | 6.00 |

`Zubehoer` (ZubehoerNr, Bezeichnung, PreisTag): (1, Helm, 2.00) · (2, Kindersitz, 4.00) · (3, Anhänger, 8.00)

`AusleiheZubehoer` (AusleihNr, ZubehoerNr, Anzahl): (5001, 1, 1) · (5003, 1, 2) · (5003, 2, 1) · (5005, 1, 1)

`Mitarbeiter` (MitarbeiterNr, Vorname, Nachname, StationNr, Rolle): (11, Ina, Wolters, 1, Stationsleitung) · (12, Malte, Kruse, 2, Aushilfe) · (13, Timo, Wulf, 3, Werkstatt)

`Inventur` (InventurNr, RadNr, Datum, KmStand): (1, 101, 2025-10-31, 1480) · (2, 102, 2025-10-31, 1890) · (3, 104, 2025-10-31, 310) · (4, 105, 2025-10-31, 420) · (5, 101, 2026-10-31, 2140) · (6, 102, 2026-10-31, 3870) · (7, 103, 2026-10-31, 1210) · (8, 104, 2026-10-31, 640) · (9, 105, 2026-10-31, 980)

`Interessent` (InteressentNr, Name, Email): (1, Nele Brückner, nele.b@mail.de) · (2, Jonas Meyer, j.meyer@web.de)

Besonderheiten, die sich für Aufgaben eignen: Rad 103 hat für 2025 keinen Inventur-Eintrag (es war in der Werkstatt). Gefahrene Kilometer 2026 laut Inventur: Rad 101 → 660, Rad 102 → 1980, Rad 104 → 330, Rad 105 → 560. Kunde 2 hat keine E-Mail. Kunde 4 hat nie ausgeliehen. Rad 103 wurde nie verliehen. Ausleihe 5006 läuft noch. Station 4 ist für kein Rad Stammstation, und dort begann oder endete nie eine Ausleihe. Von Radtyp 4 gibt es kein Rad. Zubehör 3 wurde nie mitgebucht. Malte Kruse ist Kunde und Mitarbeiter.

Kennzahlen zum Nachprüfen: Summe `KmStand` = 8840, Durchschnitt = 1768. Summe `Betrag` in `Ausleihe` = 94.00 (fünf Werte, NULL zählt nicht mit), in `Ausleihe_Archiv` = 55.00. Ausleihen je Kunde in `Ausleihe`: Kunde 1 → 2, Kunde 2 → 1, Kunde 3 → 3, Kunde 4 → 0. Der 2026-07-04 ist ein Samstag.

Funktionen aus dem SQL-Auszug (in der Prüfung im Belegsatz vorgegeben, nur anwenden): `YEAR(d)`, `MONTH(d)`, `DAY(d)`, `HOUR(d)`, `MINUTE(d)`, `WEEKDAY(d)` (Montag = 0), `NOW()`, `DATEDIFF(Einheit, Anfang, Ende)`, `DATEADD(Einheit, n, Datum)`, `LEFT(Text, n)`, `RIGHT(Text, n)`. Weitere Funktionen stehen im Stoff bei der jeweiligen Aussage.
