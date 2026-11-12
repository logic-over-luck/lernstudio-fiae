Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Daten abfragen › Abfragen zur Gewinnung von Daten › Aggregatfunktionen, GROUP BY und HAVING

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

## Stoff: Aggregatfunktionen, GROUP BY und HAVING

Ziel: Werte mit COUNT, SUM, AVG, MIN und MAX zusammenfassen, je Gruppe ausgeben, Gruppen filtern und nach dem Ergebnis sortieren; die weiteren Aggregatfunktionen des SQL-Auszugs erkennen.

Das muss ich können:

### K1 – Aggregatfunktionen, COUNT(*) gegen COUNT(Spalte) (Stufe 3 Anwenden)
Du kannst COUNT, SUM, AVG, MIN und MAX einsetzen und COUNT(*) (alle Zeilen) von COUNT(Spalte) (nur Zeilen, in denen die Spalte nicht NULL ist) unterscheiden; nach einem LEFT JOIN zählst du mit COUNT(Spalte der rechten Tabelle), dann ergibt eine Zeile ohne Partner 0, SUM und AVG liefern dort NULL.

Erklärung:
Aggregatfunktionen fassen viele Zeilen zu **einem** Wert zusammen:
- `COUNT` Anzahl, `SUM` Summe, `AVG` Durchschnitt, `MIN` kleinster, `MAX` größter Wert
- `COUNT(*)` zählt **alle Zeilen**, `COUNT(Spalte)` nur die Zeilen, in denen die Spalte **nicht NULL** ist
- `SUM`, `AVG`, `MIN` und `MAX` lassen NULL-Werte weg; `AVG` teilt nur durch die Anzahl der vorhandenen Werte
Nach einem LEFT JOIN zählst du eine Spalte der **rechten** Tabelle:
`SELECT k.Bezeichnung, COUNT(a.ArtikelNr) AS Anzahl FROM Kategorie k LEFT JOIN Artikel a ON k.KategorieNr = a.KategorieNr GROUP BY k.KategorieNr, k.Bezeichnung;`
- Kategorie ohne Artikel: `COUNT(a.ArtikelNr)` ergibt 0, `COUNT(*)` ergäbe fälschlich 1
- `SUM(a.Preis)` und `AVG(a.Preis)` liefern dort NULL
Mit dem Ergebnis eines Aggregats kannst du **weiterrechnen:** Die durchschnittliche Anzahl je Monat eines Jahres ist Anzahl ÷ 12, z. B. bei den erledigten Pflegearbeiten eines Jahres je Mitarbeiter (`MID_Ist` = wer die Arbeit erledigt hat): `COUNT(p.MID_Ist) / 12 AS Durchschnitt` – nicht `AVG`, denn `AVG` bildet den Mittelwert der Werte einer Spalte. Manche Systeme teilen zwei ganze Zahlen ganzzahlig; mit `/ 12.0` bleiben die Nachkommastellen sicher erhalten.

### K2 – GROUP BY mit allen nicht aggregierten Spalten (Stufe 3 Anwenden)
Du kannst mit GROUP BY je Gruppe ein Ergebnis ausgeben, auch gruppiert nach einem Ausdruck wie YEAR(AK_DatumZeit), und schreibst jede nicht aggregierte Spalte der Ausgabe auch ins GROUP BY; so ist die Abfrage in jedem Datenbanksystem richtig.

Erklärung:
`GROUP BY` fasst alle Zeilen mit gleichen Werten in den Gruppierungsspalten zu **einer Gruppe** zusammen; die Aggregatfunktionen rechnen dann je Gruppe.
`SELECT Ort, COUNT(*) AS Anzahl FROM Kunde GROUP BY Ort;`
- **Regel:** Jede Spalte der SELECT-Liste, die nicht in einer Aggregatfunktion steht, steht auch in `GROUP BY` – so ist die Abfrage in jedem Datenbanksystem richtig.
- Gruppieren nach einem Ausdruck: `SELECT YEAR(AK_DatumZeit) AS Jahr, COUNT(*) AS Anzahl FROM Aktion GROUP BY YEAR(AK_DatumZeit);`
- Mit Schlüssel und Name: `GROUP BY k.KundenNr, k.Name` – die Nummer trennt gleichnamige Kunden, der Name muss wegen der Ausgabe mit hinein.
Manche Systeme erlauben, nur nach dem Schlüssel zu gruppieren und den Namen trotzdem auszugeben; die sichere Form ist die mit allen Spalten.

### K3 – HAVING gegen WHERE beim Gruppieren (Stufe 3 Anwenden)
Du kannst mit HAVING Gruppen filtern und HAVING von WHERE unterscheiden: WHERE filtert Zeilen vor dem Gruppieren, HAVING filtert Gruppen danach, zum Beispiel Kunden mit mindestens drei Bestellungen.

Erklärung:
- `WHERE` filtert **Zeilen vor** dem Gruppieren – dort gibt es noch keine Aggregate.
- `HAVING` filtert **Gruppen nach** dem Gruppieren – mit Bedingungen auf Aggregate.
Kunden mit mindestens drei Bestellungen:
`SELECT KundenNr, COUNT(*) AS Anzahl FROM Bestellung GROUP BY KundenNr HAVING COUNT(*) >= 3;`
Beides zusammen: `SELECT KundenNr, COUNT(*) AS Anzahl FROM Bestellung WHERE YEAR(Bestelldatum) = 2025 GROUP BY KundenNr HAVING COUNT(*) >= 3;` – erst nur Bestellungen aus 2025, dann je Kunde zählen, dann die Gruppen filtern.
Reihenfolge der Klauseln: `SELECT – FROM – WHERE – GROUP BY – HAVING – ORDER BY`.

### K4 – Aggregate mit JOIN, nach Ergebnis sortiert (Stufe 3 Anwenden)
Du kannst Aggregate mit JOIN verbinden und nach dem aggregierten Wert sortieren, zum Beispiel Umsatz je Kunde über mehrere Tabellen oder Verkaufsanzahl je Kategorie absteigend.

Erklärung:
Aggregate funktionieren auch über verknüpfte Tabellen: erst verbinden, dann gruppieren, dann nach dem Ergebnis sortieren.
Umsatz je Kunde, größter zuerst:
`SELECT k.KundenNr, k.Name, SUM(p.Menge * p.Preis) AS Umsatz FROM Kunde k JOIN Bestellung b ON k.KundenNr = b.KundenNr JOIN Position p ON b.BestellNr = p.BestellNr GROUP BY k.KundenNr, k.Name ORDER BY Umsatz DESC;`
- sortieren nach dem Alias (`ORDER BY Umsatz DESC`) oder nach dem Ausdruck (`ORDER BY SUM(p.Menge * p.Preis) DESC`)
- Verkaufsanzahl je Kategorie: Kategorie, Artikel und Position verbinden, `SUM(p.Menge)` je Kategorie bilden, absteigend sortieren

### K5 – STDDEV, VARIANCE und CORR (Stufe 1 Wiedergeben)
Du kannst die weiteren Aggregatfunktionen des SQL-Auszugs erkennen: STDDEV(Spalte) für die Standardabweichung, VARIANCE(Spalte) für die Varianz und CORR(Spalte1, Spalte2) für die Korrelation zweier Merkmale (nahe 1 oder −1 starker Zusammenhang, nahe 0 keiner); sie werden wie AVG nach der Beschreibung im Auszug eingesetzt.

Erklärung:
Der SQL-Auszug nennt drei weitere Aggregatfunktionen; sie werden wie `AVG` eingesetzt:
- `STDDEV(Spalte)`: **Standardabweichung** – wie stark die Werte im Mittel vom Durchschnitt abweichen
- `VARIANCE(Spalte)`: **Varianz** – das Quadrat der Standardabweichung
- `CORR(Spalte1, Spalte2)`: **Korrelation** zweier Merkmale; nahe 1 oder −1 starker Zusammenhang, nahe 0 kein Zusammenhang
Beispiel: `SELECT AVG(Temperatur) AS Mittel, STDDEV(Temperatur) AS Streuung FROM Messung;`
Du musst sie erkennen; die Beschreibung steht im Belegsatz.

## Lehrnotiz: Aggregatfunktionen, GROUP BY und HAVING

**Aufteilung:**
- Aggregatfunktionen über die ganze Tabelle: K1 (ohne das Zählen nach LEFT JOIN)
- Weitere Funktionen des SQL-Auszugs erkennen: K5
- Je Gruppe ein Ergebnis: K2
- Gruppen filtern: K3
- Aggregate über verknüpfte Tabellen, nach dem Ergebnis sortiert: K4 – hier auch das zurückgestellte Zählen nach LEFT JOIN (0 bei COUNT, NULL bei SUM und AVG)

**Schon geprüft:** In Prüfungen: K1 (2022S, 2022W, 2023S, 2024S), K2 (2022W, 2023W, 2024S), K3 (2021W, 2025W), K4 (2023W, 2025W) · Noch nicht geprüft: K5

**Kerngedanken:**
- Ohne GROUP BY liefert eine Abfrage mit Aggregatfunktionen genau eine Zeile, mit GROUP BY eine Zeile je Gruppe. Signalwort in der Aufgabe ist „je“ oder „pro“.
- Grund der GROUP-BY-Regel: Eine Spalte, die weder gruppiert noch aggregiert ist, hat in einer Gruppe mehrere Werte – die Datenbank wüsste nicht, welchen sie zeigen soll.
- Probe für WHERE oder HAVING: Lässt sich die Bedingung an einer einzelnen Zeile prüfen (Jahr, Art), gehört sie in WHERE; braucht sie die zusammengefasste Gruppe (Anzahl, Summe), in HAVING.
- Beim INNER JOIN fehlen Gruppen ohne Partner ganz, zum Beispiel ein Kunde ohne Ausleihe.

**Typische Missverständnisse:**
- Viele denken, es reiche, `MONTH(Beginn)` auszugeben und nach `Beginn` zu gruppieren; richtig ist: nach demselben Ausdruck gruppieren, sonst entsteht je Zeitpunkt eine Gruppe.
- Viele denken, für „je Monat“ reiche der Monat; richtig ist: Reichen die Daten über mehrere Jahre, gruppiert man nach Jahr und Monat.

**Fachwörter:**
- Aggregatfunktionen: fassen viele Zeilen zu einem Wert
- Gruppe: Zeilen mit gleichen Werten der Gruppierungsspalten
- HAVING: filtert Gruppen nach dem Gruppieren
- Standardabweichung: mittlere Abweichung vom Durchschnitt
- Varianz: Quadrat der Standardabweichung
- Korrelation: Zusammenhang zweier Merkmale

**So fragt die IHK:**
- Aggregate kommen in nahezu jeder PB2-SQL-Aufgabe vor (Aufgabe 4, Operator „erstellen“, vorgegebene Ergebnistabelle).
- Vorgekommen: Minimal-, Maximalkurs und Anzahl der Datensätze je Jahr, gruppiert nach `YEAR(…)`, absteigend nach Jahr sortiert und mit einer Archivtabelle vereinigt (12 Punkte); Gesamtpreis je Bestellung als `SUM(Preis * Menge)` über vier Tabellen (5 Punkte); Kunden mit mindestens drei Bestellungen mit COUNT und `HAVING … >= 3` (5 Punkte); Verkaufsanzahl je Kategorie mit `SUM(Menge)` über drei Tabellen, absteigend nach dem Alias sortiert (5 Punkte); durchschnittlicher Umsatz je Kunde, wobei auch Kunden ohne Rechnung erscheinen (Wert dort NULL; 8 Punkte).
- Weitere Aufgaben verlangen Anzahlen „auch 0“ nach einem LEFT JOIN oder einen Durchschnitt pro Monat als Jahresanzahl ÷ 12.
- Die Lösungshinweise sind „beispielhaft“. Eine IHK-Lösung gruppiert nur nach dem Schlüssel und gibt den Namen trotzdem aus; das ist anerkannt und kein Fehler, gelehrt wird die sichere Form.
- Gewertet wird je Bestandteil: Aggregatfunktion auf der richtigen Spalte, JOIN-Pfad, WHERE vor dem Gruppieren, GROUP BY passend zu den nicht aggregierten Spalten, HAVING für Gruppenbedingungen, ORDER BY nach dem Ergebnis; Folgefehler nur einmal.

**Fallen:**
- Den Jahresfilter vergessen, wenn die Kennzahl nur für ein Jahr verlangt ist.
- COUNT schreiben, wo Mengen zu summieren sind: Zeilen zählen ist nicht Stückzahlen addieren.
- Eine Spalte, die nicht am Gruppierungsschlüssel hängt (z. B. `Beginn` bei Gruppen je Kunde), einfach ins GROUP BY nachtragen: Das ändert die Gruppen; ist sie nicht verlangt, gehört sie aus der SELECT-Liste. Eine Spalte, die am Schlüssel hängt (Name zur Nummer), gehört dagegen hinein.
- „Mindestens drei“ als `> 3` oder „mehr als“ als `>=` übersetzen.
- Klauseln in falscher Reihenfolge schreiben, vor allem ORDER BY vor GROUP BY.
- Eine Tabelle auf dem Weg auslassen (`Radtyp` hängt nur über `Fahrrad` an `Ausleihe`).
- Aufsteigend oder gar nicht sortieren, obwohl „größte zuerst“ verlangt ist.
- Bei der Begründung für COUNT nach LEFT JOIN nur einen Teil nennen: Die Zeile ohne Partner existiert mit NULL-Werten, und `COUNT(*)` zählt sie mit.

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
