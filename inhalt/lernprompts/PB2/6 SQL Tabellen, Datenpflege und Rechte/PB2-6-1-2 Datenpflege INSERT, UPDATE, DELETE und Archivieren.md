Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Tabellen, Datenpflege und Rechte › Datenbank aufbauen, pflegen und absichern › Datenpflege: INSERT, UPDATE, DELETE und Archivieren

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

## Stoff: Datenpflege: INSERT, UPDATE, DELETE und Archivieren

Ziel: Datensätze einfügen, ändern und löschen, auch mit Unterabfragen über verknüpfte Tabellen, Daten in ein Archiv verschieben und gleichzeitige Zugriffe durch passendes Sperren absichern.

Das muss ich können:

### K1 – INSERT INTO mit VALUES oder SELECT (Stufe 3 Anwenden)
Du kannst mit INSERT INTO … (Spaltenliste) VALUES … einen Datensatz einfügen und mit INSERT INTO … SELECT … Datensätze aus einer Abfrage übernehmen.

Erklärung:
**Ein Datensatz mit festen Werten:**
`INSERT INTO Kunde (KundenNr, Name, Ort) VALUES (1001, 'Meier', 'Köln');`
- Spaltenliste und Werte in gleicher Reihenfolge; nicht genannte Spalten bekommen ihren Standardwert (DEFAULT), ein automatisch hochgezählter Schlüssel die nächste Nummer, sonst NULL; ist die Spalte Pflichtfeld (NOT NULL) ohne Standardwert, wird das INSERT abgewiesen
- ist kein Schlüsselwert vorgegeben, weil die Datenbank ihn selbst vergibt, lässt du die Schlüsselspalte weg: `INSERT INTO Aerzte (Nachname, Vorname, Fachgebiet) VALUES ('Horner', 'Hugo', 'Allgemeinmedizin');`
- Text und Datum in einfachen Anführungszeichen (`'Köln'`, `'2025-03-31'`), Zahlen ohne
- Datumsformat: Der SQL-Auszug beschreibt `DATE` als DD.MM.YYYY, und eine IHK-Lösung schreibt `'19.06.2023'`; Standard-SQL und die meisten Systeme erwarten `'2025-03-31'`. Richte dich nach der Schreibweise in den Tabellen der Aufgabe, setze das Datum in einfache Anführungszeichen und bleib bei einem Format
**Datensätze aus einer Abfrage übernehmen** (ohne VALUES):
`INSERT INTO Kunde_Archiv (KundenNr, Name, Ort) SELECT KundenNr, Name, Ort FROM Kunde WHERE Ort = 'Bonn';`
- Spaltenzahl, Reihenfolge und Datentypen von Zielliste und SELECT müssen zusammenpassen

### K2 – UPDATE mit Unterabfragen über verknüpfte Tabellen (Stufe 3 Anwenden)
Du kannst mit UPDATE … SET … WHERE Werte ändern, auch berechnet aus der Spalte selbst (Preis = Preis * 1.05), und die Zeilen über Bedingungen in verknüpften Tabellen auswählen, in Standard-SQL mit Unterabfragen in WHERE: … WHERE HerstellerID = (SELECT HerstellerID FROM Hersteller WHERE Bezeichnung = 'CCC') oder je Bedingung eine IN-Unterabfrage, z. B. … WHERE RgPos_ArtIdKey IN (SELECT a.Art_IdKey FROM Artikel a INNER JOIN WeinArt w ON w.WA_IdKey = a.Art_WAIdKey WHERE w.WA_Weinart = 'Rotwein') AND RgPos_RgIdKey IN (SELECT Rg_IdKey FROM Rechnung WHERE YEAR(Rg_Datum) = 2023 AND MONTH(Rg_Datum) = 5).

Erklärung:
`UPDATE Tabelle SET Spalte = Wert [, Spalte2 = Wert2] WHERE Bedingung;`
- berechnet aus dem alten Wert: `UPDATE Artikel SET Preis = Preis * 1.05 WHERE KategorieNr = 3;`
- Wert aus einer Funktion: `UPDATE Kunde SET Kuerzel = LEFT(Name, 3);` (`LEFT` liefert die ersten n Zeichen und steht im SQL-Auszug; Textfunktionen: PB2-5-1-1)
- **ohne WHERE** werden **alle** Zeilen geändert
**Bedingung in einer anderen Tabelle** → Unterabfrage in WHERE (Standard-SQL):
- ein Wert: `UPDATE Arzneimittel SET Preis = Preis * 1.1 WHERE HerstellerID = (SELECT HerstellerID FROM Hersteller WHERE Bezeichnung = 'CCC');`
- mehrere Bedingungen: je Bedingung eine IN-Unterabfrage, z. B. bei Rotwein-Positionen auf Rechnungen aus Mai 2023 den Rabatt von 0 % auf 12 % setzen („von 0 %“ ist eine eigene Bedingung):
`UPDATE RechnungPosition SET RgPos_RabattProzent = 12 WHERE RgPos_RabattProzent = 0 AND RgPos_ArtIdKey IN (SELECT a.Art_IdKey FROM Artikel a INNER JOIN WeinArt w ON w.WA_IdKey = a.Art_WAIdKey WHERE w.WA_Weinart = 'Rotwein') AND RgPos_RgIdKey IN (SELECT Rg_IdKey FROM Rechnung WHERE YEAR(Rg_Datum) = 2023 AND MONTH(Rg_Datum) = 5);`
`UPDATE … FROM … INNER JOIN` aus einer IHK-Lösung ist die Form eines einzelnen Systems; du schreibst die Unterabfragen.

### K3 – DELETE mit WHERE und Unterabfrage (Stufe 3 Anwenden)
Du kannst mit DELETE FROM … WHERE Datensätze löschen, auch mit einer Unterabfrage, z. B. Haushalte ohne Zähler: DELETE FROM Haushalte WHERE NOT EXISTS (SELECT * FROM Zaehler WHERE Zaehler.Z_HHID = Haushalte.HH_ID) oder WHERE HH_ID NOT IN (SELECT Z_HHID FROM Zaehler), solange Z_HHID nie NULL ist, und weißt, dass ohne WHERE alle Zeilen gelöscht werden.

Erklärung:
`DELETE FROM Tabelle WHERE Bedingung;`
- Beispiel: `DELETE FROM Bestellung WHERE Bestelldatum < '2020-01-01';`
- **ohne WHERE** werden **alle Zeilen** gelöscht; die Tabelle selbst bleibt (anders als bei `DROP TABLE`)
**Mit Unterabfrage**, z. B. Haushalte ohne Zähler:
- `DELETE FROM Haushalte WHERE NOT EXISTS (SELECT * FROM Zaehler WHERE Zaehler.Z_HHID = Haushalte.HH_ID);`
- oder `DELETE FROM Haushalte WHERE HH_ID NOT IN (SELECT Z_HHID FROM Zaehler);` – nur sicher, solange `Z_HHID` nie NULL ist
Verweisen noch andere Datensätze per Fremdschlüssel auf eine Zeile, entscheidet die referenzielle Integrität, ob das Löschen abgewiesen oder weitergegeben wird (PB1-6-1-2).

### K5 – Datensätze in Archivtabelle verschieben (Stufe 3 Anwenden)
Du kannst Datensätze in eine gleich aufgebaute Archivtabelle verschieben: mit INSERT INTO Archiv (Spaltenliste) SELECT … WHERE … kopieren (z. B. WHERE YEAR(AK_DatumZeit) < YEAR(NOW())) und mit DELETE … WHERE mit derselben Bedingung löschen, beides in einer Transaktion.

Erklärung:
**Archivieren** = in eine gleich aufgebaute Archivtabelle kopieren und im Original löschen – mit **derselben Bedingung** und in **einer Transaktion**:
`START TRANSACTION;`
`INSERT INTO Aktion_Archiv (AK_ID, AK_DatumZeit, AK_Text) SELECT AK_ID, AK_DatumZeit, AK_Text FROM Aktion WHERE YEAR(AK_DatumZeit) < YEAR(NOW());`
`DELETE FROM Aktion WHERE YEAR(AK_DatumZeit) < YEAR(NOW());`
`COMMIT;`
- **erst kopieren, dann löschen** – andersherum wären die Daten weg
- **Transaktion:** Scheitert ein Schritt, wird alles zurückgenommen (`ROLLBACK`); es fehlt nichts und nichts steht doppelt
`SELECT … INTO Archiv` aus einer IHK-Lösung ist die Form eines einzelnen Systems (legt dort eine neue Tabelle an); du schreibst `INSERT INTO … SELECT`.

### K6 – Pessimistisches gegen optimistisches Sperren (Stufe 4 Beurteilen)
Du kannst bei gleichzeitigen Zugriffen begründen, ob Datensätze früh und lange gesperrt werden (pessimistisch, z. B. alle freien Termine eines Monats schon beim Anzeigen blockieren) oder spät und kurz (optimistisch: erst beim Bestätigen sperren und prüfen, ob der Termin noch frei ist, bei Konflikt neu anbieten): Lange Sperren blockieren andere Nutzer unnötig, kurze Sperren brauchen eine Konfliktbehandlung.

Erklärung:
Greifen mehrere Nutzer gleichzeitig auf dieselben Datensätze zu (z. B. Terminbuchung), verhindern **Sperren**, dass sie sich gegenseitig Änderungen überschreiben oder denselben Termin buchen.
- **pessimistisch – früh und lang:** schon beim Lesen oder Anzeigen sperren. Sicher, aber andere müssen warten. Alle freien Termine eines Monats zu blockieren, nur weil jemand schaut, sperrt alle anderen unnötig aus.
- **optimistisch – spät und kurz:** erst beim Bestätigen kurz sperren und prüfen, ob der Termin noch frei bzw. der Datensatz unverändert ist; bei Konflikt Meldung und neues Angebot. Kaum Wartezeit, braucht aber eine **Konfliktbehandlung**.
**Entscheiden und begründen:**
- viele Leser, seltene Konflikte (viele schauen, wenige buchen denselben Termin) → optimistisch
- häufige Konflikte, teure Fehler, kurze Bearbeitung → pessimistisch
Antwortmuster: Wahl + Folge für die anderen Nutzer + wie Konflikte behandelt werden.

### K7 – Transaktion mit COMMIT und ROLLBACK (Stufe 3 Anwenden)
Du kannst Transaktionen in SQL anwenden: mehrere zusammengehörige Änderungen mit START TRANSACTION (bzw. BEGIN) einleiten, sie mit COMMIT gemeinsam dauerhaft machen oder bei einem Fehler mit ROLLBACK alle Änderungen seit dem Beginn zurücknehmen.

Erklärung:
**Prinzip:** Eine Transaktion macht mehrere Änderungen zu einer Einheit – ganz oder gar nicht (Atomarität, PB1-6-1-5).
In SQL:
- `START TRANSACTION;` (oder `BEGIN;`)
- `INSERT INTO Archiv … SELECT … WHERE YEAR(Datum) < 2025;`
- `DELETE FROM Auftrag WHERE YEAR(Datum) < 2025;`
- `COMMIT;` – oder bei einem Problem `ROLLBACK;`, dann ist der Stand wie vor START TRANSACTION
Ohne Transaktion stünde nach einem Fehler beim Löschen der Datensatz doppelt da (im Archiv und im Bestand).
Aus einem Programm heraus hängt es von der Datenbankschnittstelle ab, ob jede Anweisung sofort festgeschrieben wird (Auto-Commit, bei JDBC, der Datenbankschnittstelle von Java, voreingestellt und für eine Transaktion abzuschalten) oder ob die Schnittstelle selbst eine Transaktion öffnet, die das Programm mit `commit` abschließt (PB1-6-1-5).

### K8 – UPDATE ohne WHERE, Wert auf NULL (Stufe 2 Verstehen)
Du kannst erklären, warum ein UPDATE fast immer eine WHERE-Bedingung braucht: Ohne sie erhält jede Zeile der Tabelle den neuen Wert; soll nur ein einzelner Wert entfernt werden, setzt man ihn mit UPDATE … SET Spalte = NULL, und die übrigen Werte der Zeile bestehen weiter.

Erklärung:
**Prinzip:** Die WHERE-Bedingung legt fest, welche Zeilen ein UPDATE trifft – fehlt sie, gilt die Änderung für die ganze Tabelle.
- `UPDATE Artikel SET Preis = 9.99;` setzt den Preis **jedes** Artikels auf 9,99
- `UPDATE Artikel SET Preis = 9.99 WHERE ArtikelNr = 4711;` ändert nur diesen einen Artikel
**Einzelnen Wert entfernen:** `UPDATE Kunde SET Telefon = NULL WHERE KundenNr = 17;` – die Telefonnummer ist leer, der Kunde bleibt (geht nur, wenn die Spalte nicht NOT NULL ist). `DELETE` würde dagegen den ganzen Datensatz löschen.
Tipp: Die Bedingung vorher mit `SELECT * FROM … WHERE …` testen – kommen genau die gewünschten Zeilen?

## Lehrnotiz: Datenpflege: INSERT, UPDATE, DELETE und Archivieren

**Aufteilung:**
- Einfügen: K1
- Ändern, erst die Rolle von WHERE, dann Unterabfragen: K8, K2
- Löschen: K3
- Transaktion: K7
- Archivieren, baut auf Einfügen, Löschen und Transaktion auf: K5
- Sperren bei gleichzeitigen Zugriffen (ohne SQL): K6

**Schon geprüft:** In Prüfungen: K1 (2022W, 2025S), K2 (2021W, 2023W), K3 (2022S, 2024S), K5 (2022W, 2024S), K6 (2021W) · Noch nicht geprüft: K7, K8

**Kerngedanken:**
- Eine Anweisung muss für jeden Datenbestand stimmen, nicht nur für die abgedruckten Zeilen. Nennt die Aufgabe einen Text aus einer anderen Tabelle (Bezeichnung, Ort), gehört eine Unterabfrage hin, keine aus dem Auszug abgelesene Nummer.
- `=` vor einer Unterabfrage passt nur, wenn sie sicher genau einen Wert liefert; sonst muss `IN` stehen. `IN` ist auch bei einem Wert richtig.
- Liefert die Unterabfrage hinter `NOT IN` auch nur ein NULL, ist die Bedingung für keine Zeile wahr und nichts wird gelöscht; `NOT EXISTS` hat das Problem nicht. Im Tabellenmodell betrifft das `EndStationNr` in `Ausleihe`.
- Beim Sperren beschreibt die Aufgabe nur die zwei Varianten; die Begründung muss man selbst finden. Beide Varianten zählen, wenn die Begründung zum Fall passt.

**Typische Missverständnisse:**
- Viele denken, ROLLBACK nehme nur die fehlgeschlagene Anweisung zurück; richtig ist: Auch die gelungenen Änderungen seit START TRANSACTION sind weg.
- Viele denken, die Datenbank warne bei einem vergessenen WHERE; richtig ist: Sie führt UPDATE oder DELETE ohne Meldung für alle Zeilen aus.

**Fachwörter:**
- Unterabfrage: SELECT in Klammern innerhalb einer Anweisung
- Archivtabelle: gleich aufgebaute Tabelle für alte Datensätze
- Transaktion: mehrere Änderungen, ganz oder gar nicht
- optimistisches Sperren: erst beim Bestätigen kurz sperren
- Konfliktbehandlung: Meldung und neues Angebot bei Konflikt

**So fragt die IHK:**
- Datenpflege steckt in fast jeder SQL-Aufgabe (Aufgabe 4) als Teilaufgabe auf Tabellenauszügen. Operator ist „erstellen“; Signalwörter sind auch „löschen“, „erhöhen“, „ändern“.
- Einfügen: 2–3 Punkte. Löschen mit fester Bedingung: 2 Punkte; mit Unterabfrage („alle … ohne …“): 5 Punkte. Anerkannt wurden dort eine Zähl-Unterabfrage `= 0` und `NOT IN`.
- UPDATE mit einer Unterabfrage auf eine andere Tabelle: 5 Punkte; mit Bedingungen aus drei Tabellen: 8 Punkte. Die Lösung schrieb `UPDATE … FROM … INNER JOIN`; die Form mit Unterabfragen ist gleichwertig.
- Verschieben ins Archiv kam zweimal vor, mit 8 und 10 Punkten. Die Lösungen zeigen INSERT … SELECT bzw. SELECT … INTO plus DELETE mit derselben Bedingung, ohne Transaktion. Die Transaktion ist fachlich richtig und kostet nie Punkte.
- Sperren kam einmal vor: zwei Varianten einer Online-Terminvergabe (früh blockieren oder erst beim Bestätigen prüfen) „auswählen und begründen“, 4 Punkte. Erwartet war die späte Sperre; die andere zählte bei passender Begründung.
- Durchgängig gilt „andere korrekte Lösungen sind möglich“.

**Fallen:**
- Einfügen: Ein Datum ohne Anführungszeichen liest die Datenbank als Rechnung (Jahr minus Monat minus Tag).
- Einfügen: Einen Schlüsselwert selbst ausdenken, obwohl die Datenbank ihn vergibt, oder beim Weglassen des Schlüssels auch die Spaltenliste weglassen; ohne Spaltenliste braucht jede Spalte einen Wert in der Reihenfolge der Tabelle. Die Aufgabe muss sagen, wer den Schlüssel vergibt.
- Einfügen: Bei INSERT … SELECT die WHERE-Bedingung vergessen; dann werden alle Zeilen übernommen.
- Ändern: Eine Einschränkung aus dem Aufgabentext übersehen (etwa „nur freie“); dann trifft das UPDATE zu viele Zeilen.
- Ändern: Bei „um … erhöhen“ oder „senken“ einen festen Wert setzen, statt aus dem alten Wert zu rechnen.
- Löschen: In `NOT EXISTS` die Verknüpfung zur äußeren Zeile vergessen; dann prüft die Unterabfrage nur, ob es überhaupt eine Zeile gibt, und nichts wird gelöscht.
- Löschen: Aus der verknüpften Tabelle löschen statt aus der, deren Zeilen verschwinden sollen.
- Transaktion: START TRANSACTION oder COMMIT weglassen.
- Archivieren: Bei gleich aufgebauter Archivtabelle ist `INSERT INTO … SELECT *` ohne Spaltenliste ebenfalls richtig.
- Sperren: Nur „sicherer“ oder „schneller“ schreiben, ohne Bezug zum Fall und ohne die Folge für die anderen Nutzer.

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
