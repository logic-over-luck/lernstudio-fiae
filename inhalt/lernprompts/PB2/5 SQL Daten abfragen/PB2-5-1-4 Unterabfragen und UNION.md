Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Daten abfragen › Abfragen zur Gewinnung von Daten › Unterabfragen und UNION

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

## Stoff: Unterabfragen und UNION

Ziel: Unterabfragen in WHERE, in der SELECT-Liste und in FROM einsetzen, auch korreliert, und Ergebnisse zweier Abfragen mit UNION oder UNION ALL vereinigen.

Das muss ich können:

### K1 – Unterabfrage mit IN und NOT IN (Stufe 3 Anwenden)
Du kannst eine Unterabfrage in der WHERE-Bedingung mit IN oder NOT IN einsetzen, zum Beispiel Kunden ohne Bestellung: WHERE KID NOT IN (SELECT KID FROM Bestellungen), und weißt, dass NOT IN gar keine Zeile liefert, sobald die Unterabfrage einen NULL-Wert enthält; dann nimmst du NOT EXISTS (PB2-5-1-4-K6).

Erklärung:
Eine **Unterabfrage** ist ein SELECT in Klammern innerhalb einer anderen (äußeren) Abfrage.
Die Unterabfrage hinter `IN` liefert **eine Spalte**; ihre Werte bilden die Vergleichsliste.
- Kunden mit Bestellung: `SELECT * FROM Kunde WHERE KundenNr IN (SELECT KundenNr FROM Bestellung);`
- Kunden ohne Bestellung: `SELECT * FROM Kunde WHERE KundenNr NOT IN (SELECT KundenNr FROM Bestellung);`
**NULL-Falle:** Enthält die Unterabfrage auch nur einen NULL-Wert, liefert `NOT IN` **keine einzige Zeile** – der Vergleich mit NULL ist nie wahr. Dann:
- NULL in der Unterabfrage ausschließen (`… WHERE KundenNr IS NOT NULL`) oder
- `NOT EXISTS` nehmen (PB2-5-1-4-K6).

### K2 – Unterabfrage mit genau einem Wert (Stufe 3 Anwenden)
Du kannst eine Unterabfrage einsetzen, die genau einen Wert liefert, und damit vergleichen oder rechnen, zum Beispiel das teuerste Arzneimittel: WHERE Preis = (SELECT MAX(Preis) FROM Arzneimittel).

Erklärung:
Eine Unterabfrage mit **genau einem Wert** (eine Zeile, eine Spalte) darf stehen, wo ein Wert stehen kann – hinter `=`, `<`, `>` oder in einer Rechnung.
- teuerstes Arzneimittel: `SELECT * FROM Arzneimittel WHERE Preis = (SELECT MAX(Preis) FROM Arzneimittel);`
- teurer als der Durchschnitt: `SELECT * FROM Arzneimittel WHERE Preis > (SELECT AVG(Preis) FROM Arzneimittel);`
- Abstand zum Durchschnitt: `SELECT Bezeichnung, Preis - (SELECT AVG(Preis) FROM Arzneimittel) AS Abweichung FROM Arzneimittel;`
`WHERE Preis = MAX(Preis)` ist falsch: Aggregatfunktionen sind in WHERE nicht erlaubt.

### K3 – Unterabfrage in FROM mit Namen (Stufe 3 Anwenden)
Du kannst eine Unterabfrage in FROM verwenden und ihr mit AS einen Namen geben, zum Beispiel erst die Anzahl je Patient zählen und davon den Durchschnitt bilden.

Erklärung:
Das Ergebnis einer Unterabfrage in `FROM` wird wie eine Tabelle behandelt und braucht mit `AS` einen **Namen**.
Durchschnittliche Anzahl Behandlungen je Patient:
`SELECT AVG(t.Anzahl) AS Durchschnitt FROM (SELECT PatientID, COUNT(*) AS Anzahl FROM Behandlung GROUP BY PatientID) AS t;`
- innen: je Patient zählen
- außen: über diese Zwischenergebnisse den Durchschnitt bilden
- berechnete Spalten innen benennen (`AS Anzahl`), damit du sie außen ansprechen kannst (`t.Anzahl`)
Ein Aggregat im Aggregat (`AVG(COUNT(*))`) geht nicht – genau dafür ist die Unterabfrage in FROM da.

### K4 – UNION und UNION ALL (Stufe 3 Anwenden)
Du kannst die Ergebnisse zweier Abfragen vereinigen, mit UNION (doppelte Zeilen entfernt) oder UNION ALL (alle Zeilen bleiben), zum Beispiel aktuelle Tabelle und Archiv: Spaltenzahl und Datentypen müssen passen, die Spaltennamen kommen aus der ersten Abfrage, jede Teilabfrage wird für sich gruppiert und ORDER BY steht nur einmal am Ende.

Erklärung:
`UNION` hängt die Ergebniszeilen zweier Abfragen untereinander.
- `UNION` entfernt doppelte Zeilen, `UNION ALL` behält alle
- gleiche **Spaltenzahl**, passende **Datentypen**, gleiche **Reihenfolge**
- die Spaltennamen kommen aus der **ersten** Abfrage
- jede Teilabfrage hat ihr eigenes `WHERE` und `GROUP BY`
- `ORDER BY` steht nur **einmal am Ende** und sortiert das Gesamtergebnis
Anzahl je Jahr aus aktueller Tabelle und Archiv:
`SELECT YEAR(AK_DatumZeit) AS Jahr, COUNT(*) AS Anzahl FROM Aktion GROUP BY YEAR(AK_DatumZeit) UNION ALL SELECT YEAR(AK_DatumZeit), COUNT(*) FROM Aktion_Archiv GROUP BY YEAR(AK_DatumZeit) ORDER BY Jahr;`
Hier `UNION ALL`, damit zwei gleiche Zeilen (gleiches Jahr, gleiche Anzahl) nicht zu einer verschmelzen.

### K5 – Korrelierte Unterabfrage in der SELECT-Liste (Stufe 3 Anwenden)
Du kannst in der SELECT-Liste eine korrelierte Unterabfrage schreiben, die sich auf die aktuelle Zeile der äußeren Abfrage bezieht, zum Beispiel je Kunde (SELECT AVG(RP.RgPos_EinzelPreis * RP.RgPos_Mg) FROM RechnungPosition RP INNER JOIN Rechnung R ON R.Rg_IdKey = RP.RgPos_RgIdKey WHERE R.Rg_KdIdKey = Kunde.Kd_IdKey) AS Umsatz, und weißt, dass sie ohne passende Zeile NULL liefert (COUNT liefert 0).

Erklärung:
**Korreliert** heißt: Die Unterabfrage bezieht sich auf die **aktuelle Zeile der äußeren Abfrage** und wird für jede Zeile neu ausgewertet.
Anzahl Bestellungen je Kunde:
`SELECT k.Name, (SELECT COUNT(*) FROM Bestellung b WHERE b.KundenNr = k.KundenNr) AS Anzahl FROM Kunde k;`
- der Bezug `b.KundenNr = k.KundenNr` verbindet innen und außen
- die Unterabfrage muss je Zeile **genau einen Wert** liefern
- ohne passende Zeile liefert `COUNT` 0, `SUM` und `AVG` liefern NULL
So lassen sich mehrere Werte je Zeile nebeneinanderstellen, z. B. Stand 2021 und Stand 2022 je Zähler mit zwei solchen Unterabfragen; ihre Differenz ist der Verbrauch:
`SELECT z.Z_Nummer, (SELECT s.ZSt_Stand FROM Zaehlerstand s WHERE s.ZSt_ZID = z.Z_ID AND YEAR(s.ZSt_Datum) = 2022) - (SELECT s.ZSt_Stand FROM Zaehlerstand s WHERE s.ZSt_ZID = z.Z_ID AND YEAR(s.ZSt_Datum) = 2021) AS Verbrauch FROM Zaehler z;`
Fehlt ein Stand, liefert die Unterabfrage NULL und der Verbrauch ist NULL.

### K6 – Korrelierte Unterabfrage in WHERE mit EXISTS (Stufe 3 Anwenden)
Du kannst eine korrelierte Unterabfrage in WHERE einsetzen, mit EXISTS bzw. NOT EXISTS oder mit einem Vergleich, zum Beispiel Haushalte ohne Zähler (FROM Haushalte h): WHERE NOT EXISTS (SELECT * FROM Zaehler z WHERE z.Z_HHID = h.HH_ID) oder WHERE (SELECT COUNT(*) FROM Zaehler z WHERE z.Z_HHID = h.HH_ID) = 0.

Erklärung:
`EXISTS (Unterabfrage)` ist wahr, wenn die Unterabfrage **mindestens eine Zeile** liefert; `NOT EXISTS`, wenn sie **keine** liefert. Die Unterabfrage ist meist korreliert (sie bezieht sich auf die aktuelle Zeile der äußeren Abfrage, unten über `h.HH_ID`; genauer in K5).
Haushalte ohne Zähler:
`SELECT * FROM Haushalte h WHERE NOT EXISTS (SELECT * FROM Zaehler z WHERE z.Z_HHID = h.HH_ID);`
Gleichwertig mit einem Vergleich:
`SELECT * FROM Haushalte h WHERE (SELECT COUNT(*) FROM Zaehler z WHERE z.Z_HHID = h.HH_ID) = 0;`
- Was in der SELECT-Liste der Unterabfrage steht, ist egal; üblich ist `SELECT *`.
- `NOT EXISTS` hat die NULL-Falle von `NOT IN` nicht.

## Lehrnotiz: Unterabfragen und UNION

**Aufteilung:**
- Teil A – Unterabfragen in WHERE: genau ein Wert K2; Liste mit IN und NOT IN K1; korreliert mit EXISTS K6
- Teil B – Unterabfragen an anderer Stelle: korreliert in der SELECT-Liste K5; in FROM K3
- Teil C – Ergebnisse vereinigen: K4

**Schon geprüft:** In Prüfungen: K3 (2025S), K4 (2024S), K5 (2022S, 2023W) · Noch nicht geprüft: K1, K2, K6

**Kerngedanken:**
- Eine Unterabfrage ist ein `SELECT` in Klammern innerhalb einer anderen Abfrage.
- Die Stelle bestimmt, was sie liefern muss: hinter einem Vergleich und in der SELECT-Liste genau einen Wert, hinter `IN` eine Spalte, in `FROM` eine Tabelle; bei `EXISTS` zählt nur, ob es Zeilen gibt.
- Steht bei einer korrelierten Unterabfrage in der SELECT-Liste außen nur die Haupttabelle, erscheinen alle ihre Zeilen, auch die ohne Partner. Darum ist sie eine Alternative zum LEFT JOIN.
- Die Aufgabe nennt UNION meist nicht beim Namen. Das Signal ist ein Hinweis wie „Vorjahre wurden archiviert“ zusammen mit einer Ergebnistabelle über alle Jahre.

**Typische Missverständnisse:**
- Viele denken, man müsse den Durchschnitt oder Höchstwert erst getrennt ausrechnen und als Zahl eintippen. Richtig ist: Die Unterabfrage liefert diesen Wert an Ort und Stelle.
- Viele denken, `EXISTS` gebe eine äußere Zeile mehrfach aus, wenn mehrere innere Zeilen passen. Richtig ist: Jede äußere Zeile erscheint höchstens einmal.

**Fachwörter:**
- Unterabfrage: SELECT in Klammern in einer Abfrage
- korreliert: bezieht sich auf die aktuelle äußere Zeile
- EXISTS: wahr, wenn Unterabfrage mindestens eine Zeile liefert
- Aggregatfunktion: fasst viele Zeilen zu einem Wert zusammen
- UNION: Ergebnisse untereinander, doppelte Zeilen entfernt
- UNION ALL: Ergebnisse untereinander, alle Zeilen bleiben
- NULL: kein Wert, Vergleich damit nie wahr

**So fragt die IHK:**
- Unterabfragen und UNION kamen in vier Prüfungen in sechs Teilaufgaben vor. Der Operator war „erstellen“, einmal „berechnen“. Vorgegeben waren immer Tabellen mit Beispielzeilen und die verlangte Ergebnistabelle.
- Große Aufgaben:
  - Verbrauch je Zähler zwischen zwei Jahresablesungen (10 Punkte). Die Ergebnistabelle zeigt NULL bei fehlendem Stand. Lösung mit zwei korrelierten Unterabfragen in der SELECT-Liste oder zwei Unterabfragen in FROM.
  - MIN, MAX, COUNT je Jahr aus aktueller Tabelle und Archiv, absteigend nach Jahr (12 Punkte). Gemeint ist UNION ALL mit je eigenem GROUP BY und einem ORDER BY am Ende.
  - Durchschnittswert je Kunde über zwei verknüpfte Tabellen, auch für Kunden ohne Rechnung (8 Punkte). Lösung als korrelierte Unterabfrage in der SELECT-Liste.
- Kleinere Aufgaben:
  - Durchschnitt einer Anzahl je Person als eine Zahl (5 Punkte, Unterabfrage in FROM).
  - Löschen von Datensätzen ohne abhängige Datensätze (5 Punkte). Die Bedingung ist ein korreliertes `COUNT(…) = 0` oder `NOT IN`. Das Löschen selbst gehört zu einem anderen Thema.
- Die Lösungshinweise sind beispielhaft, nennen nur Gesamtpunkte und lassen andere richtige Lösungen zu.
- Gewertet wird nach Bestandteilen: richtige Tabellen, Korrelation, passendes Aggregat, Verhalten bei fehlenden Partnern (NULL bzw. 0), Spaltennamen, Sortierung. Folgefehler zählen nur einmal.

**Fallen:**
- Teil A: Eine Unterabfrage ohne Aggregat hinter `=`, `<` oder `>` setzen, obwohl sie mehrere Zeilen liefert.
- Teil A: `>=` schreiben, wo „über dem Durchschnitt“ verlangt ist.
- Teil A: Hinter `IN` eine Unterabfrage mit `SELECT *` oder mehreren Spalten schreiben.
- Teil A: `NOT IN` benutzen, ohne zu prüfen, ob die Spalte der Unterabfrage NULL sein kann. Das gilt vor allem für Fremdschlüssel, die erst später gefüllt werden, wie `EndStationNr` in `Ausleihe`.
- Teil A: Die Korrelation vergessen. Dann ist `EXISTS` für jede Zeile wahr und `NOT EXISTS` für keine.
- Teil A: Eine Zusatzbedingung für die innere Tabelle (z. B. einen Status) außen statt in der Unterabfrage schreiben.
- Teil B: In der SELECT-Liste eine korrelierte Unterabfrage ohne Aggregat schreiben. Bei mehreren passenden Zeilen schlägt die Abfrage fehl.
- Teil B: Außen zusätzlich einen INNER JOIN setzen. Dann fallen die Zeilen ohne Partner weg, die die Ergebnistabelle zeigt.
- Teil B: Zwei Kindtabellen per LEFT JOIN anhängen und gemeinsam gruppieren. Jede Zeile der einen wird mit jeder der anderen kombiniert, Anzahl und Summe werden zu groß. Zwei getrennte Unterabfragen vermeiden das.
- Teil B: Die berechnete Spalte nicht so benennen wie in der Ergebnistabelle.
- Teil B: Übersehen, dass im Zwischenergebnis der Unterabfrage in FROM alle fehlen, die in der gezählten Tabelle nicht vorkommen. Sie gehen nicht mit 0 in den Durchschnitt ein.
- Teil B: Eine Einschränkung (z. B. auf ein Jahr) außen statt in der inneren Abfrage setzen.
- Teil C: Nur die aktuelle Tabelle auswerten und das Archiv vergessen.
- Teil C: Die verlangte Sortierrichtung nicht beachten.
- Teil C: `UNION` oder `UNION ALL` wählen, ohne die Wahl begründen zu können.

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
