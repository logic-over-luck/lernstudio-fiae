Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Tabellen, Datenpflege und Rechte › Datenbank aufbauen, pflegen und absichern › SQL-Sprachteile, Spaltenoptionen und Indexwahl

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen. Wo etwas abläuft oder funktioniert (Technik, Verfahren, Protokoll, Rechenweg), erklär zuerst Schritt für Schritt, was passiert, mit den richtigen Begriffen und dem Warum dahinter. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Die Erklärungen im Stoff sind das Minimum für die Prüfung, nicht die Grenze. Wo dort nur steht, was es gibt, erklär mir auch, wie es funktioniert, und trenn sichtbar, was die IHK lesen will und was nur Hintergrund zum Verstehen ist. Stehen in der Lehrnotiz „Abläufe zum Verstehen“, bau sie in deine Erklärung ein.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag – klein heißt wenig auf einmal, nicht oberflächlich. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Bewerte nur, was in der Aufgabe verlangt war. Stimmt der Inhalt und fehlt nur das Fachwort, zählt es als richtig: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu einer vorgegebenen Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen etwa 10–12), eine Teilaufgabe nach der anderen. Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: SQL-Sprachteile, Spaltenoptionen und Indexwahl

Ziel: SQL-Befehle den Sprachteilen zuordnen, Spalten beim Anlegen mit NOT NULL, UNIQUE, DEFAULT und automatisch hochgezähltem Schlüssel versehen, Tabellen in der richtigen Reihenfolge anlegen und bestimmen, für welche Spalten sich ein Index lohnt.

Das muss ich können:

### K1 – Sprachteile DDL, DML, DCL und TCL (Stufe 2 Verstehen)
Du kannst SQL-Befehle ihren Sprachteilen zuordnen: DDL (Data Definition Language) legt Strukturen an und ändert sie (CREATE, ALTER, DROP), DML (Data Manipulation Language) liest und ändert Datensätze (SELECT, INSERT, UPDATE, DELETE), DCL (Data Control Language) vergibt und entzieht Rechte (GRANT, REVOKE), TCL (Transaction Control Language) steuert Transaktionen (COMMIT, ROLLBACK).

Erklärung:
**Prinzip:** SQL ist eine genormte Sprache (ISO-Standard), deren Befehle nach ihrer Aufgabe in vier Gruppen fallen; die Datenbanksysteme weichen in Einzelheiten (Dialekten) voneinander ab.
- **DDL** – Struktur: `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`, `CREATE INDEX`
- **DML** – Daten: `SELECT`, `INSERT`, `UPDATE`, `DELETE` (SELECT wird manchmal als eigene DQL geführt)
- **DCL** – Rechte: `GRANT`, `REVOKE`
- **TCL** – Transaktionen: `COMMIT`, `ROLLBACK` (Transaktion = mehrere zusammengehörige Änderungen, die nur ganz oder gar nicht gelten; PB2-6-1-2-K7)
Nutzen im Betrieb: Ein Anwendungsbenutzer bekommt meist nur DML-Rechte; DDL und DCL bleiben der Administration vorbehalten.

### K2 – Spaltenoptionen und Reihenfolge beim Anlegen (Stufe 3 Anwenden)
Du kannst beim Anlegen einer Tabelle Spaltenoptionen einsetzen – NOT NULL (Pflichtfeld), UNIQUE (kein Wert doppelt), DEFAULT (Standardwert, wenn beim Einfügen nichts angegeben wird) und einen automatisch hochgezählten Primärschlüssel – und die Tabellen so nacheinander anlegen, dass jede Tabelle, auf die ein Fremdschlüssel verweist, schon existiert.

Erklärung:
**Prinzip:** Spaltenoptionen lassen die Datenbank selbst Regeln durchsetzen, statt sich auf jede Anwendung zu verlassen.
- `NOT NULL`: Einfügen ohne Wert wird abgewiesen
- `UNIQUE`: ein Wert darf nur einmal vorkommen (z. B. E-Mail-Adresse), auch wenn die Spalte nicht Primärschlüssel ist
- `DEFAULT`: setzt einen Standardwert, z. B. `Status VARCHAR(20) DEFAULT 'offen'`
- automatisch hochgezählter Schlüssel: die Datenbank vergibt die nächste Nummer selbst (Schlüsselwort je nach System: `AUTO_INCREMENT`, `AUTOINCREMENT`, `IDENTITY`), z. B. `KundenNr INTEGER AUTO_INCREMENT` mit `PRIMARY KEY (KundenNr)`; beim INSERT lässt du diese Spalte weg
**Reihenfolge:** `FOREIGN KEY … REFERENCES Kunde` klappt nur, wenn `Kunde` schon da ist – also erst Kunde, dann Bestellung, zuletzt Bestellposition; beim Löschen umgekehrt.

### K3 – Für welche Spalten sich ein Index lohnt (Stufe 3 Anwenden)
Du kannst bestimmen, auf welche Spalten einer großen Tabelle ein Index gelegt wird: auf Spalten, die häufig in WHERE-, JOIN- oder ORDER-BY-Teilen vorkommen, nicht auf jede Spalte und nicht zusätzlich auf den Primärschlüssel, der schon einen Index hat; vor einem Massenimport legst du den Index erst nach dem Import an (Nutzen und Kosten eines Index: PB2-6-1-1-K4).

Erklärung:
**Prinzip:** Ein Index lohnt sich, wenn er viele Lesezugriffe beschleunigt und dafür wenige Schreibzugriffe bremst.
- **lohnt sich:** große Tabellen; Spalten in WHERE-Bedingungen, JOIN-Bedingungen (Fremdschlüssel) und ORDER BY
- **lohnt sich kaum:** kleine Tabellen (Durchsuchen ist ohnehin schnell), selten abgefragte Spalten, Tabellen mit sehr vielen Änderungen
- **schon vorhanden:** Der Primärschlüssel bekommt automatisch einen Index; Fremdschlüssel nicht in jedem System
- **Massenimport:** Mit Index muss bei jedem eingefügten Satz der Index nachgeführt werden – schneller ist, erst zu importieren und dann den Index anzulegen
Beispiel: Eine Tabelle mit 5 Mio. Zählerständen wird ständig nach `ZSt_Datum` gefiltert → Index auf `ZSt_Datum`; die Spalte `Bemerkung` bekommt keinen.

## Lehrnotiz: SQL-Sprachteile, Spaltenoptionen und Indexwahl

**Aufteilung:**
- Sprachteile von SQL: K1
- Spaltenoptionen und Reihenfolge beim Anlegen: K2
- Welche Spalten einen Index bekommen: K3

**Schon geprüft:** Noch nicht geprüft: K1–K3

**Kerngedanken:**
- Beim Zuordnen hilft eine Frage: Betrifft die Anweisung die Struktur, die Daten (lesen oder ändern) oder die Rechte, oder steuert sie eine Transaktion? Das Wort „ändern“ allein entscheidet nichts.
- Der Anwendungsbenutzer bekommt keine DCL-Rechte, weil er sonst Rechte an andere Benutzer weitergeben oder ihnen entziehen könnte; die Rechtevergabe soll allein bei der Administration liegen.
- Die Indexwahl leitet man aus der beschriebenen Nutzung ab: jede Abfrage einzeln durchgehen und fragen, welche Spalte dort in WHERE, JOIN oder ORDER BY steht. Eine Spalte, die nur angezeigt wird, bekommt keinen Index. Grenzfälle (eine Auswertung, die selten läuft) zählen mit Begründung in beide Richtungen.
- Abgrenzung: Schreibweise von `CREATE TABLE` und `CREATE INDEX` sowie Nutzen und Nachteil eines Index gehören zum Nachbarstichpunkt Tabellenstruktur. GRANT, REVOKE, COMMIT und ROLLBACK werden hier nur zugeordnet, nicht geschrieben.

**Typische Missverständnisse:**
- Viele denken, `ALTER TABLE` gehöre zur DML, weil etwas geändert wird; richtig ist: Es ändert die Struktur (DDL), `UPDATE` ändert Daten (DML).
- Viele denken, UNIQUE sei dasselbe wie der Primärschlüssel; richtig ist: Eine Tabelle hat genau einen Primärschlüssel; er ist eindeutig, nie NULL, und auf ihn verweisen die Fremdschlüssel. UNIQUE verhindert nur doppelte Werte und kann zusätzlich an mehreren weiteren Spalten stehen.
- Viele denken, mehr Indizes seien immer besser; richtig ist: Jeder Index braucht Speicher und bremst jedes Einfügen, Ändern und Löschen.

**Fachwörter:**
- DDL: Strukturen anlegen, ändern, löschen
- DML: Datensätze lesen, einfügen, ändern, löschen
- DCL: Rechte vergeben und entziehen
- TCL: Transaktionen festschreiben oder zurückrollen
- NOT NULL: Pflichtfeld, Wert muss angegeben werden
- UNIQUE: kein Wert darf doppelt vorkommen
- DEFAULT: Standardwert, wenn nichts angegeben wird
- Index: sortierte Zugriffsstruktur zu einer Spalte

**So fragt die IHK:** Zu diesem Stichpunkt gibt es keine echte Aufgabe; er stammt aus dem Lehrbuch. Geprüft wurden verwandte Teile: einen Index beschreiben und mit vorgegebenem Namen anlegen, `CREATE TABLE`, Rechte mit GRANT und REVOKE. Zu erwarten ist in der SQL-Aufgabe 4:
- Anweisungen in einer Tabelle den Sprachteilen zuordnen („Ordnen Sie zu …“, 0,5 Punkte je Anweisung)
- ein `CREATE TABLE` mit Pflichtfeld, Eindeutigkeit, Standardwert und automatisch vergebener Nummer erstellen (4–6 Punkte, je Option einer)
- die Reihenfolge des Anlegens begründen (2 Punkte)
- zu einer beschriebenen Nutzung bestimmen und begründen, welche Spalten indiziert werden (2–4 Punkte, je begründeter Spalte einer)

Gibt der Belegsatz kein Schlüsselwort für die automatische Nummer vor, zählt jede Form, aus der klar wird, dass die Datenbank die Nummer vergibt.

**Fallen:**
- `CREATE INDEX` oder `ALTER TABLE … DROP COLUMN` als DML einordnen; beide ändern die Struktur.
- `DROP TABLE` (DDL, Tabelle weg) mit `DELETE` (DML, Zeilen weg) verwechseln.
- GRANT und REVOKE (Rechte, DCL) mit COMMIT und ROLLBACK (Transaktionen, TCL) verwechseln.
- Ein eindeutiges Fachmerkmal (Code, E-Mail) zum Primärschlüssel machen, obwohl die Aufgabe eine Nummer als Schlüssel und für das Merkmal nur Eindeutigkeit verlangt.
- Eine Anforderung aus dem Text übersehen: Jede genannte Regel (Pflicht, eindeutig, Standardwert, automatische Nummer) braucht ihre eigene Option; an einer Spalte können mehrere stehen.
- Im INSERT einen Wert für die Spalte mit Standardwert mitgeben, obwohl der Standardwert gelten soll.
- Spalten für den Index bestimmen, ohne zu begründen; die Begründung nennt WHERE, JOIN oder ORDER BY, die Größe der Tabelle oder die Zahl der Schreibzugriffe.

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
