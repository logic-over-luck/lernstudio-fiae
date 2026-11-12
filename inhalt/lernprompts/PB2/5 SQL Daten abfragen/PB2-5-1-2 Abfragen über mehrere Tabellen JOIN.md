Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Daten abfragen › Abfragen zur Gewinnung von Daten › Abfragen über mehrere Tabellen: JOIN

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

## Stoff: Abfragen über mehrere Tabellen: JOIN

Ziel: Tabellen über Primär- und Fremdschlüssel verknüpfen, auch drei und mehr, mit LEFT JOIN alle Datensätze einer Seite behalten und eine Tabelle zweimal einbinden.

Das muss ich können:

### K1 – INNER JOIN über Primär- und Fremdschlüssel (Stufe 3 Anwenden)
Du kannst zwei Tabellen mit INNER JOIN … ON über Primär- und Fremdschlüssel verbinden (oder gleichwertig über FROM mit Komma und WHERE-Bedingung).

Erklärung:
Ein **JOIN** verbindet Zeilen zweier Tabellen, deren Schlüssel zusammenpassen: **Primärschlüssel** der einen = **Fremdschlüssel** der anderen.
`SELECT k.Name, b.BestellNr, b.Bestelldatum FROM Kunde k INNER JOIN Bestellung b ON k.KundenNr = b.KundenNr;`
- **INNER JOIN** (kurz `JOIN`) liefert nur Zeilen mit Partner in **beiden** Tabellen.
- Gleichwertige Schreibweise ohne JOIN: `FROM Kunde k, Bestellung b WHERE k.KundenNr = b.KundenNr`
- Fehlt die Verbindungsbedingung, entsteht das **Kreuzprodukt**: jede Zeile mit jeder.
- Die beiden Schlüsselspalten heißen in vorgegebenen Modellen oft **verschieden**, z. B. `Rechnung.Rg_KdIdKey` → `Kunde.Kd_IdKey`; das Paar liest du am Modell ab.

### K2 – Drei und mehr Tabellen mit Aliasnamen (Stufe 3 Anwenden)
Du kannst drei und mehr Tabellen in einer Abfrage verketten, auch über eine Zwischentabelle einer m:n-Beziehung, und Tabellen mit Aliasnamen abkürzen, damit gleichnamige Spalten eindeutig sind.

Erklärung:
Je weitere Tabelle kommt ein weiterer JOIN mit eigener ON-Bedingung; n Tabellen in einer Kette brauchen n − 1 Bedingungen.
`SELECT k.Name, a.Bezeichnung, p.Menge FROM Kunde k JOIN Bestellung b ON k.KundenNr = b.KundenNr JOIN Position p ON b.BestellNr = p.BestellNr JOIN Artikel a ON p.ArtikelNr = a.ArtikelNr;`
- **m:n-Beziehung:** Der Weg führt über die **Zwischentabelle** (hier `Position` zwischen Bestellung und Artikel), auch wenn von ihr keine Spalte ausgegeben wird.
- **Aliasnamen** (`Kunde k` oder `Kunde AS k`) kürzen ab.
- Spalten, die in mehreren Tabellen vorkommen (`KundenNr`), schreibst du mit Alias (`k.KundenNr`), sonst sind sie mehrdeutig und die Abfrage schlägt fehl.

### K3 – LEFT JOIN: Bedingung in ON statt WHERE (Stufe 3 Anwenden)
Du kannst mit LEFT JOIN alle Datensätze der linken Tabelle ausgeben, auch wenn rechts kein passender Datensatz da ist (z. B. Mitarbeiter ohne Urlaub, Haushalte ohne Zähler), und schreibst eine Bedingung für die rechte Tabelle in ON statt in WHERE (… LEFT JOIN Fehlzeit Fz ON Ma.Ma_ID = Fz.Ma_ID AND Fz.FzA_ID = 2 AND YEAR(Fz.VonDat) = 2022), weil WHERE die Zeilen ohne Partner wieder entfernt; RIGHT JOIN ist das Spiegelbild.

Erklärung:
**LEFT JOIN** liefert **alle** Zeilen der linken Tabelle; fehlt rechts ein Partner, stehen in den rechten Spalten NULL-Werte.
`SELECT m.Name, f.VonDat FROM Mitarbeiter m LEFT JOIN Fehlzeit f ON m.Ma_ID = f.Ma_ID;`
- Die Tabelle, deren Zeilen **alle** erscheinen sollen, steht links.
- **Bedingungen für die rechte Tabelle gehören in ON:** `… FROM Mitarbeiter m LEFT JOIN Fehlzeit f ON m.Ma_ID = f.Ma_ID AND f.FzA_ID = 2 AND YEAR(f.VonDat) = 2022`
- In WHERE wären sie für die NULL-Zeilen nie wahr – die Mitarbeiter ohne Urlaub fielen wieder heraus, das Ergebnis wäre wie beim INNER JOIN.
- Datensätze **ohne** Partner finden: `… FROM Kunde k LEFT JOIN Bestellung b ON k.KundenNr = b.KundenNr WHERE b.BestellNr IS NULL`
- **RIGHT JOIN** ist das Spiegelbild: `A RIGHT JOIN B` entspricht `B LEFT JOIN A`.

### K4 – Dieselbe Tabelle zweimal mit Aliasnamen (Stufe 3 Anwenden)
Du kannst dieselbe Tabelle zweimal mit verschiedenen Aliasnamen einbinden, zum Beispiel die Zählerstände 2021 (S21) und 2022 (S22) je Zähler in einer Zeile gegenüberstellen und S22.ZSt_Stand - S21.ZSt_Stand berechnen; damit Zähler ohne Stand erhalten bleiben (Verbrauch NULL), verbindest du beide mit LEFT JOIN und der Jahresbedingung in ON (alternativ: zwei korrelierte Unterabfragen, PB2-5-1-4).

Erklärung:
Dieselbe Tabelle kann mehrfach in einer Abfrage stehen, jedes Mal mit **eigenem Alias** – wie zwei Kopien.
Beispiel: Zählerstände 2021 und 2022 je Zähler in einer Zeile:
`SELECT z.Z_ID, s21.ZSt_Stand AS Stand2021, s22.ZSt_Stand AS Stand2022, s22.ZSt_Stand - s21.ZSt_Stand AS Verbrauch FROM Zaehler z LEFT JOIN Zaehlerstand s21 ON s21.ZSt_ZID = z.Z_ID AND YEAR(s21.ZSt_Datum) = 2021 LEFT JOIN Zaehlerstand s22 ON s22.ZSt_ZID = z.Z_ID AND YEAR(s22.ZSt_Datum) = 2022;`
- Jede Kopie bekommt ihre Jahresbedingung **in ON**, damit Zähler ohne Stand erhalten bleiben.
- Fehlt ein Stand, ist der Verbrauch NULL: Rechnen mit NULL ergibt NULL.
- Mit INNER JOIN fiele ein solcher Zähler ganz weg.
- Voraussetzung: je Zähler und Jahr **höchstens ein** Stand (in der Prüfung stand dabei: „Es findet pro Jahr nur eine Eintragung statt.“); sonst entsteht für jede Kombination zweier Stände eine eigene Zeile.
- Alternative: zwei korrelierte Unterabfragen in der SELECT-Liste (PB2-5-1-4-K5).

## Lehrnotiz: Abfragen über mehrere Tabellen: JOIN

**Aufteilung:**
- Zwei Tabellen verbinden: K1
- Kette über mehrere Tabellen, Zwischentabelle, Aliasnamen: K2
- Alle Zeilen einer Seite behalten: K3
- Dieselbe Tabelle zweimal, baut auf dem LEFT JOIN auf: K4

**Schon geprüft:** In Prüfungen: K1 (2025W), K2 (2021W), K3 (2022S, 2022W, 2023S), K4 (2022S)

**Kerngedanken:**
- Die ON-Spalten liest man im Modell ab: Fremdschlüssel und der Primärschlüssel, auf den er zeigt. Die Namen müssen nicht gleich sein (`Ausleihe.StartStationNr` zu `Station.StationNr`).
- Erst den Weg von Tabelle zu Tabelle im Modell nachzeichnen: Jede Tabelle auf dem Weg gehört in die Abfrage, auch ohne ausgegebene Spalte (von `Ausleihe` zu `Radtyp` nur über `Fahrrad`).
- Jede Kopie einer Tabelle braucht ihre eigene Bedingung, sonst wird jede passende Zeile der einen mit jeder der anderen kombiniert.
- Zwei Kopien braucht man auch bei zwei Fremdschlüsseln auf dieselbe Tabelle: Für die Namen von Start- und Endstation steht `Station` zweimal in der Abfrage. Weil `EndStationNr` bei einer laufenden Ausleihe NULL ist, wird die Kopie für die Endstation mit LEFT JOIN eingebunden, sonst fällt die laufende Ausleihe weg.

**Typische Missverständnisse:**
- Viele denken, beim LEFT JOIN gehörten alle Bedingungen in ON; richtig ist: nur die für die rechte Tabelle. Eine Bedingung für die linke Tabelle bleibt in WHERE.
- Viele denken, für „ohne Partner“ könne man jede rechte Spalte auf NULL prüfen; richtig ist: den Primärschlüssel der rechten Tabelle, denn andere Spalten können auch mit Partner NULL sein (`Ende` einer laufenden Ausleihe).

**Fachwörter:**
- INNER JOIN: nur Zeilen mit Partner beidseitig
- LEFT JOIN: alle linken Zeilen bleiben erhalten
- Kreuzprodukt: jede Zeile mit jeder kombiniert
- Zwischentabelle: Tabelle zwischen zwei m:n-Partnern
- Aliasnamen: Kurznamen für Tabellen in der Abfrage

**So fragt die IHK:**
- JOINs stecken in fast jeder SQL-Aufgabe der PB2 (Aufgabe 4, „Erstellen Sie eine SQL-Anweisung …“ mit vorgegebener Ergebnistabelle).
- Vorgekommen: Verspätungsliste über drei Tabellen (Stammdaten, Planzeiten, Istzeiten) mit zwei INNER JOINs, Aliasnamen und Spaltenvergleich in WHERE (12 Punkte); Gesamtpreis je Bestellung über vier Tabellen samt Zwischentabelle einer m:n-Beziehung (5 Punkte); Verkaufszahlen je Kategorie über drei Tabellen (5 Punkte).
- Signal für LEFT JOIN: Verlangt sind ausdrücklich „alle“ Mitarbeiter, Haushalte oder Kunden, auch ohne Einträge; die Ergebnistabelle zeigt dann Zeilen mit 0 oder leerem Wert. Nötig ist LEFT JOIN; gibt es eine Bedingung für die rechte Tabelle (z. B. Art oder Jahr), steht sie in ON (alternativ eine korrelierte Unterabfrage).
- Einmal waren Zählerstände zweier Jahre je Zähler in einer Zeile gegenüberzustellen und zu subtrahieren.
- Die IHK-Lösungen schreiben `INNER JOIN … ON` mit Aliasnamen; die Komma-Schreibweise mit WHERE und jede andere richtige Lösung zählen gleich. Gewertet wird je Bestandteil: jede Tabelle des Pfads mit richtiger Bedingung, JOIN-Art passend zur Ergebnistabelle, Bedingungen an der richtigen Stelle, Spalten eindeutig.

**Fallen:**
- Neben der Verbindungsbedingung eine Filterbedingung aus dem Aufgabentext vergessen.
- Einen Alias vergeben und danach doch den vollen Tabellennamen schreiben.
- Gleichnamige Spalten aus zwei Tabellen (zweimal `Nachname`) mit dem falschen Alias ansprechen.
- Die verlangte Sortierung über dem JOIN vergessen.
- Beim LEFT JOIN die falsche Tabelle nach links stellen oder INNER JOIN schreiben, obwohl „alle“ verlangt sind.
- Bei einer Spalte mit Uhrzeit (`Beginn`, `Ende`) die Obergrenze eines Datumsbereichs in ON mit `<=` auf den letzten Tag setzen; richtig ist `<` auf den Folgetag.
- Beide Kopien einer Tabelle mit demselben oder ohne Alias einbinden.
- Die Differenz falsch herum bilden (alt minus neu).

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
