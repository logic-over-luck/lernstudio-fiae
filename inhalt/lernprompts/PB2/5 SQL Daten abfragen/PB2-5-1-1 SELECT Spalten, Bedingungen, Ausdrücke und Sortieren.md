Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Daten abfragen › Abfragen zur Gewinnung von Daten › SELECT: Spalten, Bedingungen, Ausdrücke und Sortieren

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

## Stoff: SELECT: Spalten, Bedingungen, Ausdrücke und Sortieren

Ziel: Spalten auswählen und umbenennen, mit Bedingungen filtern, in der Ausgabe rechnen, Text- und Datumsfunktionen nutzen und sortieren.

Das muss ich können:

### K1 – SELECT mit AS und DISTINCT (Stufe 3 Anwenden)
Du kannst mit SELECT … FROM die verlangten Spalten in der Reihenfolge der Ergebnistabelle ausgeben und mit AS umbenennen, auch mit DISTINCT ohne doppelte Zeilen.

Erklärung:
Grundform: `SELECT Spalte1, Spalte2 FROM Tabelle;`
- Die Spalten stehen **in der Reihenfolge der verlangten Ergebnistabelle**; die Spaltenliste hinter SELECT heißt **Projektion**.
- `SELECT *` gibt alle Spalten aus – in der Prüfung meist falsch, weil eine bestimmte Auswahl verlangt ist.
- **Umbenennen** mit `AS`: `SELECT Nachname AS Name FROM Kunde;`
- Aliasnamen mit Leerzeichen stehen in **doppelten** Anführungszeichen: `SELECT HSt_Name AS "Name der Haltestelle" FROM Haltestelle;`
- **DISTINCT** entfernt doppelte Ergebniszeilen: `SELECT DISTINCT Ort FROM Kunde;`
Merke: einfache Anführungszeichen für Text (`'Köln'`), doppelte für Namen. Eckige Klammern (`[Name der Haltestelle]`) aus manchen IHK-Lösungen sind die Schreibweise einzelner Systeme.

### K2 – WHERE mit AND, OR, IN, BETWEEN (Stufe 3 Anwenden)
Du kannst mit WHERE filtern und Bedingungen mit AND, OR, NOT, Klammern, IN (Werteliste) und BETWEEN verknüpfen, zum Beispiel PLZ zwischen 50800 und 51999, Menge 100 oder 200 (AW.Menge = 100 OR AW.Menge = 200), einen Datumsbereich mit >= und <= oder eine Bedingung zwischen zwei Spalten (Plan-Ankunft < Ist-Ankunft).

Erklärung:
**Selektion** = Auswahl von Zeilen mit `WHERE`.
- Vergleiche: `=`, `<>`, `<`, `>`, `<=`, `>=`
- Verknüpfen: `AND` (beide gelten), `OR` (mindestens eine gilt), `NOT` (kehrt um)
- **AND bindet stärker als OR** – deshalb Klammern setzen: `WHERE (Ort = 'Köln' OR Ort = 'Bonn') AND Umsatz > 1000`
- **IN (Werteliste):** `WHERE Menge IN (100, 200)` ist dasselbe wie `WHERE Menge = 100 OR Menge = 200`
- **BETWEEN a AND b** schließt beide Grenzen ein: `WHERE PLZ BETWEEN 50800 AND 51999` (PLZ als Zahl)
- **PLZ als Text gespeichert** (z. B. `Kd_PLZ`): den Bereich in Anfangsmuster zerlegen und mit `OR` verknüpfen (LIKE: nächste Aussage): `WHERE Kd_PLZ LIKE '508%' OR Kd_PLZ LIKE '509%' OR Kd_PLZ LIKE '51%'`; sind alle Werte fünfstellig, geht auch `WHERE Kd_PLZ BETWEEN '50800' AND '51999'`
- **Datumsbereich:** `WHERE Bestelldatum >= '2025-01-01' AND Bestelldatum <= '2025-03-31'` (reines Datum); enthält die Spalte auch die Uhrzeit, schreibst du die Obergrenze als „kleiner als der Folgetag“: `… AND Bestelldatum < '2025-04-01'`
- **zwei Spalten derselben Zeile vergleichen:** `WHERE Plan_Ankunft < Ist_Ankunft`

### K3 – LIKE mit Platzhaltern und IS NULL (Stufe 3 Anwenden)
Du kannst LIKE mit den Platzhaltern % und _ sowie IS NULL und IS NOT NULL einsetzen, zum Beispiel eine 3 an der vierten Stelle der PLZ: LIKE '___3%'.

Erklärung:
**LIKE** vergleicht Text mit Platzhaltern:
- `%` = beliebig viele Zeichen, auch keins
- `_` = genau ein Zeichen
Beispiele:
- Nachname beginnt mit M: `WHERE Nachname LIKE 'M%'`
- 3 an der vierten Stelle der PLZ: `WHERE PLZ LIKE '___3%'` (drei Unterstriche, dann die 3, dann der Rest)
- enthält „weg“: `WHERE Strasse LIKE '%weg%'`
**NULL** heißt „kein Wert“. Ein Vergleich mit `=` ist dabei nie wahr, deshalb:
- `WHERE Telefon IS NULL` – Wert fehlt
- `WHERE Telefon IS NOT NULL` – Wert vorhanden

### K4 – Rechnen und Datumsfunktionen in der Ausgabe (Stufe 3 Anwenden)
Du kannst in der Ausgabe rechnen und Datumsfunktionen der SQL-Syntax einsetzen, zum Beispiel Menge * Preis, YEAR, MONTH, WEEKDAY, NOW() oder die Differenz zweier Zeitpunkte in Minuten mit DATEDIFF(minute, Plan, Ist).

Erklärung:
In der SELECT-Liste darfst du **rechnen** und **Funktionen** aufrufen; das Ergebnis bekommt mit `AS` einen Namen.
- Rechnen: `SELECT ArtikelNr, Menge * Preis AS Positionswert FROM Position;`
- Datumsteile: `YEAR(Datum)`, `MONTH(Datum)`, `DAY(Datum)`, `HOUR(…)`, `MINUTE(…)`, `WEEKDAY(Datum)` (Montag = 0)
- aktuelles Datum mit Uhrzeit: `NOW()`, z. B. `WHERE YEAR(Bestelldatum) = YEAR(NOW())`
- Abstand zweier Zeitpunkte: `DATEDIFF(MINUTE, Plan_Ankunft, Ist_Ankunft) AS Verspaetung` – Ende minus Anfang in der angegebenen Einheit (DAY, MONTH, YEAR, HOUR, MINUTE)
- Datum verschieben: `DATEADD(DAY, 30, Rechnungsdatum)`
Die Funktionen stehen im SQL-Auszug des Belegsatzes: anwenden, nicht auswendig lernen. `YEAR(TODAY)` aus einer IHK-Lösung ist die Form eines einzelnen Systems; nach dem Auszug schreibst du `YEAR(NOW())`.

### K5 – ORDER BY auf- und absteigend (Stufe 3 Anwenden)
Du kannst mit ORDER BY auf- und absteigend nach einer oder mehreren Spalten sortieren, zum Beispiel absteigend nach Datum und Uhrzeit oder erst nach Menge absteigend, dann nach Preis aufsteigend.

Erklärung:
`ORDER BY` steht **am Ende** der Abfrage.
- `ASC` aufsteigend (Standard, darf fehlen), `DESC` absteigend
- mehrere Kriterien: zuerst nach dem ersten, bei Gleichstand nach dem zweiten
- **jedes Kriterium hat seine eigene Richtung**
Beispiele:
- neueste zuerst: `ORDER BY Datum DESC, Uhrzeit DESC` (zwei Spalten)
- Datum und Uhrzeit in **einer** Spalte (z. B. `HStP_Abfahrt_Plan` mit `2024-12-01 12:12:00`): ein Kriterium genügt, `ORDER BY HStP_Abfahrt_Plan DESC`
- `ORDER BY Menge DESC, Preis ASC` – große Mengen zuerst, bei gleicher Menge der günstigste Preis zuerst
- auch nach Alias oder Ausdruck: `ORDER BY Positionswert DESC`

### K6 – Textfunktionen LEFT und RIGHT (Stufe 3 Anwenden)
Du kannst Textfunktionen aus der SQL-Syntax einsetzen, LEFT(Text, n) und RIGHT(Text, n) für die ersten bzw. letzten n Zeichen (z. B. LEFT(PLZ, 2) für die Leitregion), und eine Zeichenkette mit der Funktion, die die Aufgabe vorgibt, am Leerzeichen in Vorname und Nachname zerlegen.

Erklärung:
Textfunktionen aus dem SQL-Auszug:
- `LEFT(Text, n)`: die ersten n Zeichen, z. B. `SELECT Name, LEFT(PLZ, 2) AS Leitregion FROM Kunde;`
- `RIGHT(Text, n)`: die letzten n Zeichen, z. B. `RIGHT(IBAN, 4)`
**Name am Leerzeichen zerlegen:** Mit welcher Funktion du die Stelle des Leerzeichens und die Länge bestimmst, gibt die Aufgabe vor. Das Prinzip:
- Vorname = alles **links** vom Leerzeichen: `LEFT(Name, Stelle - 1)`
- Nachname = alles **rechts** davon: `RIGHT(Name, Länge - Stelle)`
Mit den Standardfunktionen `POSITION(' ' IN Name)` und `CHAR_LENGTH(Name)`:
`SELECT LEFT(Name, POSITION(' ' IN Name) - 1) AS Vorname, RIGHT(Name, CHAR_LENGTH(Name) - POSITION(' ' IN Name)) AS Nachname FROM Kunde;`

### K7 – NULL als fehlender Wert und IS NULL (Stufe 2 Verstehen)
Du kannst erklären, warum NULL nur mit IS NULL bzw. IS NOT NULL geprüft werden kann: NULL steht für einen fehlenden oder unbekannten Wert und ist weder 0 noch ein leerer Text; jeder Vergleich mit NULL, auch Spalte = NULL, ergibt kein Wahr, deshalb liefert WHERE Telefon = NULL nie eine Zeile.

Erklärung:
**Prinzip:** NULL ist kein Wert, sondern die Angabe „hier ist nichts bekannt“. Ob ein unbekannter Wert gleich einem anderen ist, lässt sich nicht sagen – das Ergebnis jedes Vergleichs ist deshalb **unbekannt** statt wahr, und WHERE übernimmt nur Zeilen, deren Bedingung **wahr** ist.
- `WHERE Telefon = NULL` → nie eine Zeile, auch nicht bei Kunden ohne Telefonnummer
- `WHERE Telefon IS NULL` → Kunden ohne Telefonnummer
- `WHERE Telefon IS NOT NULL` → Kunden mit Telefonnummer
- NULL ist **nicht 0** (ein Lagerbestand 0 ist bekannt) und **nicht ''** (ein leerer Text ist ein Wert)
Beispiel: Hat ein Artikel noch keinen Rabatt eingetragen (NULL), findet ihn weder `Rabatt = 0` noch `Rabatt = NULL`, sondern nur `Rabatt IS NULL`.

## Lehrnotiz: SELECT: Spalten, Bedingungen, Ausdrücke und Sortieren

**Aufteilung:**
- Spalten auswählen, umbenennen, Doppeltes weglassen: K1
- Zeilen filtern: K2
- Textmuster und fehlende Werte: K3, K7
- Sortieren: K5
- Rechnen und Datumsfunktionen: K4
- Textfunktionen: K6

**Schon geprüft:** In Prüfungen: K1 (2021W), K2 (2021W, 2023S, 2023W, 2024W), K3 (2022W), K4 (2023S, 2024W), K5 (2021W, 2024W), K6 (2025W) · Noch nicht geprüft: K7

**Kerngedanken:**
- DISTINCT wirkt auf die ganze Ergebniszeile: Es entfernt nur Zeilen, die in allen ausgegebenen Spalten gleich sind.
- Auch `<>`, LIKE und der Vergleich zweier Spalten sind mit NULL nie wahr: Bei `EndStationNr <> StartStationNr` fehlt die laufende Ausleihe.
- Ein Datum ohne Uhrzeit gilt als 0:00 Uhr. Deshalb schneidet `<=` mit dem letzten Tag bei einer Spalte mit Uhrzeit fast den ganzen Tag ab.

**Typische Missverständnisse:**
- Viele denken, „die am längsten dabei sind, zuerst“ heiße absteigend; richtig ist: Das früheste Datum ist das kleinste, also aufsteigend.
- Viele denken, `'%3%'` prüfe eine bestimmte Stelle; richtig ist: Das heißt „irgendwo eine 3“. Für Stelle n stehen n − 1 Unterstriche davor, und jedes Zeichen zählt, auch ein Bindestrich.

**Fachwörter:**
- Projektion: Auswahl der Spalten hinter SELECT
- Selektion: Auswahl von Zeilen mit WHERE
- Aliasname: Ersatzname in der Ausgabe, mit AS
- DISTINCT: entfernt doppelte Ergebniszeilen
- Platzhalter: `%` und `_` im LIKE-Muster

**So fragt die IHK:**
- SQL ist in PB2 fast immer Aufgabe 4 (rund 20–30 Punkte), Teilaufgaben mit 4–12 Punkten, Operator „erstellen“: „Erstellen Sie eine SQL-Anweisung, die … entsprechend der folgenden Ergebnistabelle ausgibt.“
- Vorgegeben: Tabellen als Anlage mit Beispielzeilen. Die Ergebnistabelle zeigt Spaltennamen, Reihenfolge und oft Beispielwerte; daran liest man Projektion, Aliasnamen und Sortierung ab.
- Vorgekommen: PLZ-Bereich bei PLZ als Text (4 Punkte, IHK-Lösung: drei LIKE-Muster mit OR); Vergleich Plan gegen Ist mit DATEDIFF in Minuten und Aliasname mit Leerzeichen (mit JOINs 12 Punkte); absteigend nach Datum und Uhrzeit sortieren; Jahresfilter mit laufendem Jahr; Name am Leerzeichen zerlegen (mit Tabellenänderung 8 Punkte).
- Reine Ein-Tabellen-Abfragen sind selten; meist kommt ein JOIN oder Aggregat dazu.
- Lösungshinweise sind „beispielhaft“, andere richtige Lösungen zählen. Sie zeigen teils Systemschreibweisen (eckige Klammern, `YEAR(TODAY)`, Text in doppelten Anführungszeichen). Gewertet wird die Logik je Bestandteil, Folgefehler nur einmal.

**Fallen:**
- DISTINCT vergessen, obwohl die Ergebnistabelle jede Kombination nur einmal zeigt.
- BETWEEN nehmen, wenn die Grenzen nicht dazugehören; `>` statt `>=` bei eingeschlossenen Grenzen; den Monatsletzten falsch setzen.
- Teilbedingungen mit OR statt AND verbinden; einen Spaltenvergleich falsch herum schreiben.
- LIKE-Muster ohne `%` am Ende; `<> NULL` oder `<> ''` statt IS NOT NULL.
- Bei der NULL-Erklärung nur die Korrektur nennen, nicht den Grund.
- Sortierkriterien vertauschen oder eines vergessen.
- DATEDIFF-Argumente vertauschen oder falsche Einheit; läuft ein Vorgang noch, ist das Ende `NOW()`.
- Feste Jahreszahl statt „laufendes Jahr“; WEEKDAY mit Sonntag = 0 oder Montag = 1 rechnen.
- Berechnete Spalte ohne Namen lassen, obwohl die Ergebnistabelle einen zeigt.
- Beim Zerlegen `- 1` vergessen oder `Länge - Stelle + 1` rechnen (Leerzeichen bleibt dran); LEFT und RIGHT vertauschen; andere Funktion als vorgegeben nehmen.

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
