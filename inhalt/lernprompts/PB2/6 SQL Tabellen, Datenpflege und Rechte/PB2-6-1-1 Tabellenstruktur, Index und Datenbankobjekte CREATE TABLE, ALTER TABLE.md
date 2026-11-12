Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Tabellen, Datenpflege und Rechte › Datenbank aufbauen, pflegen und absichern › Tabellenstruktur, Index und Datenbankobjekte: CREATE TABLE, ALTER TABLE, CREATE INDEX, Prozedur, Trigger

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

## Stoff: Tabellenstruktur, Index und Datenbankobjekte: CREATE TABLE, ALTER TABLE, CREATE INDEX, Prozedur, Trigger

Ziel: Tabellen nach einem Datenmodell mit Datentypen und Schlüsseln anlegen, nachträglich ändern, Indizes begründet anlegen und Stored Procedures und Trigger als weitere Datenbankobjekte beschreiben.

Das muss ich können:

### K1 – CREATE TABLE mit Datentypen und Schlüsseln (Stufe 3 Anwenden)
Du kannst mit CREATE TABLE eine Tabelle nach dem relationalen Modell anlegen: Spalten mit Datentypen aus der SQL-Syntax (z. B. INTEGER, DECIMAL(8,2), DOUBLE, CHAR(5), VARCHAR(30), DATE; BOOLEAN, wenn die Aufgabe ihn vorgibt), den Primärschlüssel mit PRIMARY KEY (Spalte) und Fremdschlüssel mit FOREIGN KEY (Spalte) REFERENCES Tabelle (Primärschlüssel).

Erklärung:
Grundform nach dem SQL-Auszug:
`CREATE TABLE Bestellung (BestellNr INTEGER, Bestelldatum DATE, Betrag DECIMAL(8,2), KundenNr INTEGER, PRIMARY KEY (BestellNr), FOREIGN KEY (KundenNr) REFERENCES Kunde (KundenNr));`
- je Spalte Name und **Datentyp**: `INTEGER` (Ganzzahl), `DECIMAL(p,s)` (Festkomma: p Stellen insgesamt, davon s nach dem Komma), `DOUBLE` (Gleitkomma), `CHAR(n)` (genau n Zeichen), `VARCHAR(n)` (höchstens n Zeichen), `DATE`; `BOOLEAN`, wenn die Aufgabe ihn vorgibt
- **Primärschlüssel** mit `PRIMARY KEY (Spalte)`, aus zwei Spalten: `PRIMARY KEY (BestellNr, PosNr)`
- **Fremdschlüssel** mit `FOREIGN KEY (Spalte) REFERENCES Tabelle (Primärschlüssel)`; die Tabelle, auf die verwiesen wird, muss es schon geben
- Pflichtfeld mit `NOT NULL` hinter dem Datentyp
Welcher Datentyp fachlich passt, entscheidest du schon beim Modell (PB1-6-1-2).

### K2 – ALTER TABLE und DROP TABLE (Stufe 3 Anwenden)
Du kannst mit ALTER TABLE … ADD COLUMN, DROP COLUMN und MODIFY COLUMN Spalten hinzufügen, entfernen oder ändern und einen Fremdschlüssel ergänzen, bei einem Umbau in der richtigen Reihenfolge (neue Spalten anlegen, Daten mit UPDATE übertragen, z. B. mit Textfunktionen aus PB2-5-1-1, alte Spalte löschen), und eine ganze Tabelle mit DROP TABLE löschen.

Erklärung:
`ALTER TABLE` ändert eine bestehende Tabelle (Form des SQL-Auszugs):
- Spalte hinzufügen: `ALTER TABLE Kunde ADD COLUMN Email VARCHAR(100);`
- Spalte entfernen: `ALTER TABLE Kunde DROP COLUMN Telefon;`
- Spalte ändern: `ALTER TABLE Kunde MODIFY COLUMN Name VARCHAR(200);` (andere Systeme schreiben `ALTER COLUMN`)
- Fremdschlüssel ergänzen: `ALTER TABLE Bestellung ADD FOREIGN KEY (KundenNr) REFERENCES Kunde (KundenNr);`
- ganze Tabelle samt Struktur und Daten löschen: `DROP TABLE Kunde;`
**Umbau in der richtigen Reihenfolge**, z. B. Name → Vorname und Nachname:
- neue Spalten anlegen: `ALTER TABLE Kunde ADD COLUMN Vorname VARCHAR(50);` und `ALTER TABLE Kunde ADD COLUMN Nachname VARCHAR(50);` (die IHK-Lösung 2025W fasst beides mit Komma in einer Anweisung zusammen: `ALTER TABLE … ADD COLUMN Vorname VARCHAR(50), ADD COLUMN Nachname VARCHAR(50);`)
- Daten mit `UPDATE Kunde SET Vorname = …, Nachname = …;` übertragen – vollständig mit den Textfunktionen aus PB2-5-1-1: `UPDATE Kunde SET Vorname = LEFT(Name, POSITION(' ' IN Name) - 1), Nachname = RIGHT(Name, CHAR_LENGTH(Name) - POSITION(' ' IN Name));` (mit welcher Funktion du die Stelle des Leerzeichens bestimmst, gibt die Aufgabe vor)
- erst dann die alte Spalte löschen: `ALTER TABLE Kunde DROP COLUMN Name;` – sonst sind die Daten weg

### K3 – Nachträgliches Pflichtfeld: erst füllen, dann ändern (Stufe 3 Anwenden)
Du kannst eine Spalte einer gefüllten Tabelle nachträglich zum Pflichtfeld machen: zuerst fehlende Werte füllen (UPDATE Aerzte SET Email = 'info@fit.de' WHERE Email IS NULL), dann die Spalte ändern (ALTER TABLE Aerzte MODIFY COLUMN Email VARCHAR(100) NOT NULL; in der Form des SQL-Auszugs wird der Datentyp mit angegeben).

Erklärung:
Eine Spalte einer gefüllten Tabelle wird nicht einfach zum Pflichtfeld: Stehen noch NULL-Werte darin, lehnt die Datenbank die Änderung ab. Deshalb zwei Schritte:
- **zuerst die Lücken füllen:** `UPDATE Aerzte SET Email = 'info@fit.de' WHERE Email IS NULL;`
- **dann die Spalte ändern:** `ALTER TABLE Aerzte MODIFY COLUMN Email VARCHAR(100) NOT NULL;`
In der Form des SQL-Auszugs gibst du beim Ändern den Datentyp mit an. In umgekehrter Reihenfolge schlägt `ALTER TABLE` fehl.

### K4 – Index: Nutzen und Nachteil (Stufe 2 Verstehen)
Du kannst erklären, wozu ein Index dient (schnelleres Suchen und Sortieren in großen Tabellen) und welchen Nachteil er hat (zusätzlicher Speicher, langsameres Einfügen und Ändern).

Erklärung:
Ein **Index** ist eine zusätzliche, sortierte Zugriffsstruktur zu einer oder mehreren Spalten – wie das Register eines Buchs.
**Vorteil:** Suchen (`WHERE`), Sortieren (`ORDER BY`) und Verbinden (`JOIN`) über diese Spalte werden in großen Tabellen schneller, weil die Datenbank nicht alle Zeilen durchgehen muss.
**Nachteile:**
- zusätzlicher Speicherplatz
- `INSERT`, `UPDATE` und `DELETE` werden langsamer, weil der Index jedes Mal mitgepflegt wird
Ein Index lohnt sich bei großen Tabellen für Spalten, nach denen oft gesucht, sortiert oder verbunden wird (z. B. Fremdschlüssel, Datum) – kaum bei kleinen Tabellen oder Spalten, die ständig geändert werden.

### K5 – CREATE INDEX mit eigenem Namen (Stufe 3 Anwenden)
Du kannst mit CREATE INDEX einen benannten Index auf eine Spalte anlegen, zum Beispiel CREATE INDEX Idx_Datum ON Zaehlerstand (ZSt_Datum).

Erklärung:
`CREATE INDEX Indexname ON Tabelle (Spalte);`
- Beispiel: `CREATE INDEX Idx_Datum ON Zaehlerstand (ZSt_Datum);`
- über mehrere Spalten: `CREATE INDEX Idx_Name ON Kunde (Nachname, Vorname);`
- Den Namen wählst du frei; üblich und verständlich ist `Idx_` plus Spaltenname.
Für den Primärschlüssel legen die meisten Systeme automatisch einen Index an.

### K6 – Stored Procedure als gespeicherte Anweisungsfolge (Stufe 2 Verstehen)
Du kannst beschreiben, was eine Stored Procedure ist: eine in der Datenbank gespeicherte Folge von SQL-Anweisungen mit Namen und Parametern, die von Anwendungen oder dem Datenbank-Client ausdrücklich aufgerufen wird.

Erklärung:
Eine **Stored Procedure** (gespeicherte Prozedur) ist eine Folge von SQL-Anweisungen, die **in der Datenbank gespeichert** ist:
- hat einen **Namen** und kann **Parameter** haben
- wird **ausdrücklich aufgerufen** – von einer Anwendung oder im Datenbank-Client, z. B. `CALL Archivieren(2024);`
- Nutzen: ein Ablauf wird an einer Stelle gepflegt, Anwendungen schicken nur den Aufruf statt vieler Anweisungen
Beispiel: eine Prozedur, die alle Datensätze eines übergebenen Jahres ins Archiv verschiebt.

### K7 – Trigger gegen Stored Procedure (Stufe 2 Verstehen)
Du kannst beschreiben, was ein Trigger ist: SQL-Anweisungen, die die Datenbank automatisch ausführt, wenn in einer Tabelle ein bestimmtes Ereignis eintritt (INSERT, UPDATE oder DELETE), zum Beispiel um Änderungen zu protokollieren – im Unterschied zur Stored Procedure, die ausdrücklich aufgerufen wird.

Erklärung:
Ein **Trigger** ist eine Folge von SQL-Anweisungen, die die Datenbank **automatisch** ausführt, wenn in einer Tabelle ein bestimmtes **Ereignis** eintritt:
- Ereignisse: `INSERT`, `UPDATE` oder `DELETE` auf dieser Tabelle, ausgeführt davor oder danach
- Beispiele: jede Preisänderung mit altem und neuem Wert in einer Protokolltabelle festhalten, nach einer Buchung den Bestand anpassen
**Gemeinsamkeit und Unterschied zur Stored Procedure:** Beide sind in der Datenbank gespeicherte Folgen von SQL-Anweisungen; die IHK-Lösung beschreibt den Trigger sogar als besondere Art einer Stored Procedure, die automatisch ausgeführt wird. Den Trigger ruft aber niemand auf – das Ereignis löst ihn aus, egal welche Anwendung die Änderung vornimmt. Die Prozedur läuft nur, wenn sie ausdrücklich aufgerufen wird.

### K8 – Vorteile von Stored Procedures (Stufe 2 Verstehen)
Du kannst die Vorteile einer Stored Procedure erklären: Sie kann außer SQL auch Ablaufsteuerung (Bedingungen, Verzweigungen) enthalten und läuft in der Datenbank, sodass zusammengehörige Schritte ohne einzelnes Hin und Her mit der Anwendung schneller ablaufen; und weil Anwendungen nur das Recht zum Aufruf der Prozedur brauchen statt Schreibrechte auf die Tabellen, wird der Zugriff sicherer.

Erklärung:
**Prinzip:** Logik, die eng an den Daten hängt, wird in der Datenbank gespeichert und dort ausgeführt, statt Anweisung für Anweisung von der Anwendung geschickt zu werden.
- **Ablaufsteuerung:** Neben SELECT, INSERT, UPDATE sind Variablen, Bedingungen (IF) und Schleifen möglich – eine Prozedur kann also selbst entscheiden, was zu tun ist
- **Geschwindigkeit:** Die Schritte laufen ohne Hin und Her über das Netz, die Datenbank kann die Prozedur vorbereitet halten
- **Sicherheit:** Der Anwendungsbenutzer bekommt nur das Recht, die Prozedur auszuführen, aber keine direkten Schreibrechte auf die Tabellen; freies SQL von außen ist dann gar nicht möglich
Beispiel: Eine Prozedur `Bestellung_stornieren(nr)` prüft den Status, bucht den Bestand zurück und setzt die Bestellung auf „storniert“ – die Web-Anwendung ruft nur diese Prozedur auf.

## Lehrnotiz: Tabellenstruktur, Index und Datenbankobjekte: CREATE TABLE, ALTER TABLE, CREATE INDEX, Prozedur, Trigger

**Aufteilung:**
- Teil A – Struktur: Tabelle anlegen K1; ändern und löschen K2; nachträgliches Pflichtfeld K3; Index K4, K5
- Pause möglich nach Teil A.
- Teil B – Datenbankobjekte: Stored Procedure K6, K8; Trigger K7

**Schon geprüft:** In Prüfungen: K1 (2021W), K2 (2025W), K3 (2025S), K4 (2022S), K5 (2022S), K6 (2022S), K7 (2022S) · Noch nicht geprüft: K8

**Kerngedanken:**
- Geldbeträge werden als `DECIMAL` angelegt, nicht als `DOUBLE` oder `INTEGER`: Gleitkommazahlen sind nicht centgenau.
- `DROP TABLE` entfernt die Tabelle selbst. `DELETE` (Nachbarthema Datenpflege) löscht nur Zeilen, die leere Tabelle bleibt.
- Bei „beschreiben“ zu Index, Stored Procedure und Trigger ist die Kundensituation nur Verpackung: Verlangt ist das Wissen über die Sache in ein bis zwei Sätzen. Ein Vorteil zählt erst mit seinem Grund (warum schneller, warum sicherer).

**Typische Missverständnisse:**
- Viele denken, bei einem nachträglichen `NOT NULL` lösche die Datenbank die Zeilen mit NULL oder fülle sie selbst; richtig ist: Sie weist die Änderung ab, und die Tabelle bleibt, wie sie war.
- Viele denken, ein Index mache das Lesen langsamer oder einfach alles schneller; richtig ist: Lesen über die indizierte Spalte wird schneller, Schreiben wird langsamer.

**Fachwörter:**
- Datentyp: legt fest, welche Werte eine Spalte fasst
- Primärschlüssel: kennzeichnet jede Zeile eindeutig
- Fremdschlüssel: verweist auf Primärschlüssel einer anderen Tabelle
- Pflichtfeld: Spalte mit NOT NULL, Wert muss da sein
- Index: sortierte Zugriffsstruktur zu einer oder mehreren Spalten
- Stored Procedure: gespeicherte Anweisungsfolge, wird ausdrücklich aufgerufen
- Trigger: läuft automatisch bei INSERT, UPDATE oder DELETE
- Ablaufsteuerung: Bedingungen und Schleifen in der Prozedur

**So fragt die IHK:** Meist kleine Teilaufgaben der SQL-Aufgabe 4. Vorgekommen sind:
- eine Tabelle aus einem gezeichneten Modell mit `CREATE TABLE` anlegen (3 Punkte; Hinweise wie „Datentyp Boolean“ stehen dabei)
- nach der Modellaufgabe Datentypen für drei Attribute festlegen (3 Punkte)
- einen Index mit vorgegebenem Namen auf eine Datumsspalte anlegen (3 Punkte)
- je 2 Punkte „beschreiben“: Stored Procedure, Trigger, wozu Spalten indiziert werden (erwartet: Suche beschleunigen, vor allem bei großen Datenmengen)
- zwei Umbauten gefüllter Tabellen mit „schreiben“: eine Spalte zum Pflichtfeld machen und Lücken vorher mit einem festen Wert füllen (5 Punkte); einen Namen auf Vor- und Nachname aufteilen (8 Punkte, andere richtige Lösungen zählen)

Bewertet werden Logik und Reihenfolge, nicht die genaue Schreibweise. Die Kurzform `PRIMARY KEY` direkt an der Spalte, größere Spaltenbreiten und `ALTER COLUMN` gelten ebenso. Die Vorteile der Stored Procedure wurden noch nicht gefragt; denkbar ist „Erläutern Sie zwei Vorteile …“ mit 2–4 Punkten.

**Fallen:**
- Teil A: Den Fremdschlüssel nur als Spalte anlegen; ohne `FOREIGN KEY … REFERENCES` mit Zieltabelle gibt es dafür keinen Punkt.
- Teil A: Bei `DECIMAL(p,s)` p für die Vorkommastellen halten; vor dem Komma stehen p − s Stellen, ein größeres p ist kein Fehler.
- Teil A: `NOT NULL` vergessen, obwohl die Aufgabe „Pflichtfeld“ sagt; `VARCHAR` statt `CHAR` bei fester Länge ist nur ein kleiner Abzug.
- Teil A: Ein Komma zwischen den Angaben in der Klammer vergessen.
- Teil A: Beim Umbau das `UPDATE` weglassen, sodass die neuen Spalten NULL bleiben.
- Teil A: Beim Zerlegen eines Textes um eine Stelle danebenliegen, sodass das Leerzeichen mitwandert; ein Beispielwert zum Durchspielen zeigt es.
- Teil A: Beim Lückenfüllen `= NULL` statt `IS NULL` schreiben (dann trifft das UPDATE keine Zeile, die Lücken bleiben) oder das `WHERE` weglassen (dann werden alle Werte überschrieben); Text- und Datumswerte stehen in einfachen Anführungszeichen.
- Teil A: Nur den Vorteil des Index nennen, wenn Vor- und Nachteile gefragt sind, oder „schneller“ ohne den Grund schreiben.
- Teil A: Bei `CREATE INDEX` den Indexnamen oder `ON` vergessen.
- Teil B: Prozedur und Trigger nur als „gespeicherte SQL-Befehle“ beschreiben; zur Prozedur gehört der ausdrückliche Aufruf, zum Trigger das Ereignis auf einer bestimmten Tabelle.
- Teil B: Die Prozedur als „läuft automatisch“ beschreiben.
- Teil B: Die Wahl zwischen Trigger und Prozedur gar nicht oder nur mit „ist schneller“ begründen; der Grund ist, wer den Ablauf auslöst.

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
