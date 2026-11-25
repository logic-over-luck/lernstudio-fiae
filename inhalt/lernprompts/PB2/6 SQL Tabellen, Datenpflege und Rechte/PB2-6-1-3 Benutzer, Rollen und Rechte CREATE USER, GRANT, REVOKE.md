Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Tabellen, Datenpflege und Rechte › Datenbank aufbauen, pflegen und absichern › Benutzer, Rollen und Rechte: CREATE USER, GRANT, REVOKE

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

## Stoff: Benutzer, Rollen und Rechte: CREATE USER, GRANT, REVOKE

Ziel: Benutzer und Rollen anlegen und ihnen gezielt Lese- und Schreibrechte auf Tabellen oder Datenbanken geben und wieder entziehen.

Das muss ich können:

### K1 – CREATE USER mit Passwort (Stufe 3 Anwenden)
Du kannst mit CREATE USER einen Benutzer mit Passwort anlegen (CREATE USER Name IDENTIFIED BY 'Passwort').

Erklärung:
`CREATE USER Benutzername IDENTIFIED BY 'Passwort';`
- Beispiel: `CREATE USER hhorner IDENTIFIED BY 'S1cher!2025';`
- das Passwort als Text in einfachen Anführungszeichen (die IHK-Lösung 2023S schreibt doppelte: `IDENTIFIED BY "5jk2T?"`; du bleibst bei den einfachen des SQL-Auszugs)
- Ein neuer Benutzer darf zunächst **nichts** – Rechte bekommt er erst mit `GRANT`.
Die genaue Form der Passwortangabe unterscheidet sich je nach System; in der Prüfung gilt die Form des SQL-Auszugs.

### K2 – GRANT: Lese- und Schreibrechte vergeben (Stufe 3 Anwenden)
Du kannst mit GRANT ein oder mehrere Rechte (durch Komma getrennt) gezielt vergeben, Leserecht = SELECT, Schreibrechte = INSERT, UPDATE, DELETE, auf eine Tabelle (Datenbank.Tabelle), alle Tabellen einer Datenbank (Datenbank.*) oder alles (*.*), zum Beispiel GRANT INSERT, UPDATE, DELETE ON NotaufnahmeManagement.Verschreibungen TO hhorner.

Erklärung:
`GRANT Recht [, Recht …] ON Objekt TO Benutzer;`
- **Leserecht:** `SELECT`; **Schreibrechte:** `INSERT`, `UPDATE`, `DELETE`
- **Objekt:** eine Tabelle `Datenbank.Tabelle`, alle Tabellen einer Datenbank `Datenbank.*`, alles `*.*`
- Nennt die Aufgabe keine Datenbank, schreibst du nur den Tabellennamen (so auch die IHK-Lösung 2023S): `GRANT SELECT ON Artikel TO lager;`
- mehrere Rechte durch Komma trennen
Beispiele:
- `GRANT INSERT, UPDATE, DELETE ON NotaufnahmeManagement.Verschreibungen TO hhorner;`
- nur lesen, ganze Datenbank: `GRANT SELECT ON NotaufnahmeManagement.* TO auswertung;`
Vergib nur die Rechte, die die Aufgabe verlangt.

### K3 – REVOKE: Rechte wieder entziehen (Stufe 3 Anwenden)
Du kannst mit REVOKE ein oder mehrere Rechte wieder entziehen, zum Beispiel die Schreibrechte: REVOKE INSERT, UPDATE, DELETE ON NotaufnahmeManagement.Verschreibungen FROM sklinkel.

Erklärung:
`REVOKE Recht [, Recht …] ON Objekt FROM Benutzer;` – Aufbau wie GRANT, aber `FROM` statt `TO`.
- Schreibrechte entziehen: `REVOKE INSERT, UPDATE, DELETE ON NotaufnahmeManagement.Verschreibungen FROM sklinkel;`
- Entzogen wird nur, was genannt ist – das Leserecht (`SELECT`) bleibt hier bestehen.
Merke: GRANT … **TO**, REVOKE … **FROM**.

### K4 – Rollen und WITH GRANT OPTION (Stufe 3 Anwenden)
Du kannst Rechte über Rollen vergeben: eine Rolle anlegen (CREATE ROLE Sachbearbeitung), ihr Rechte geben (GRANT SELECT ON Klinik.* TO Sachbearbeitung), die Rolle einem Benutzer zuweisen (GRANT Sachbearbeitung TO hhorner) und wieder entziehen (REVOKE Sachbearbeitung FROM hhorner); WITH GRANT OPTION erlaubt dem Empfänger, ein Recht weiterzugeben.

Erklärung:
Statt jedem Benutzer einzeln Rechte zu geben, bündelst du sie in einer **Rolle**:
- Rolle anlegen: `CREATE ROLE Sachbearbeitung;` (der SQL-Auszug fasst Benutzer und Rolle in einer Zeile `CREATE USER Benutzer | Rolle …` zusammen)
- Rechte an die Rolle: `GRANT SELECT ON Klinik.* TO Sachbearbeitung;`
- Rolle einem Benutzer zuweisen: `GRANT Sachbearbeitung TO hhorner;`
- Rolle entziehen: `REVOKE Sachbearbeitung FROM hhorner;`
**WITH GRANT OPTION:** Der Empfänger darf das Recht an andere weitergeben: `GRANT SELECT ON Klinik.Patient TO hhorner WITH GRANT OPTION;`

## Lehrnotiz: Benutzer, Rollen und Rechte: CREATE USER, GRANT, REVOKE

**Aufteilung:**
- Benutzer anlegen: K1
- Rechte vergeben: K2
- Rechte entziehen: K3
- Rollen und Weitergabe von Rechten: K4

**Schon geprüft:** In Prüfungen: K1 (2023S), K2 (2023S, 2025S), K3 (2025S) · Noch nicht geprüft: K4

**Kerngedanken:**
- Das Anlegen regelt nur die Anmeldung (Authentifizierung); was der Benutzer darf (Autorisierung), regelt erst GRANT. Es sind immer zwei getrennte Anweisungen.
- Aufgaben nennen Tätigkeiten, keine Befehle: ansehen = SELECT, anlegen = INSERT, ändern = UPDATE, löschen = DELETE.
- Mehrere Rechte auf dieselbe Tabelle passen in eine Anweisung; Rechte auf verschiedene Tabellen brauchen je eine eigene.
- Wird eine Rolle entzogen, verliert der Benutzer alle Rechte der Rolle; Rechte, die er einzeln erhalten hat, bleiben.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K4 – Wie Rechte über eine Rolle wirken: (1) CREATE ROLE legt im Datenbanksystem einen benannten Rechteträger an, der zunächst keine Rechte hat. (2) GRANT Recht ON Objekt TO Rolle speichert das Recht bei der Rolle, nicht bei einzelnen Benutzern. (3) GRANT Rolle TO Benutzer speichert nur die Mitgliedschaft des Benutzers in der Rolle; Rechte werden dabei nicht kopiert. (4) Bei jeder Anweisung prüft das Datenbanksystem, ob der Benutzer das nötige Recht am Objekt direkt oder über eine seiner Rollen besitzt. (5) Ändert jemand die Rechte der Rolle, wirkt das für alle Mitglieder, weil die Prüfung die Rechte bei der Rolle nachschlägt. (6) REVOKE Rolle FROM Benutzer löscht nur die Mitgliedschaft; direkt an den Benutzer vergebene Rechte bleiben gespeichert.

**Typische Missverständnisse:**
- Viele denken, „Schreibrechte“ heiße UPDATE; richtig ist: Gemeint sind INSERT, UPDATE und DELETE zusammen.
- Viele denken, beim Zuweisen einer Rolle gehöre wieder `ON Objekt` dazu; richtig ist: `GRANT Rolle TO Benutzer` – das Objekt steckt schon in den Rechten der Rolle.

**Fachwörter:**
- Leserecht: das Recht SELECT, Daten nur ansehen
- Schreibrechte: INSERT, UPDATE und DELETE zusammen
- Objekt: Tabelle oder Datenbank, für die das Recht gilt
- Rolle: Bündel von Rechten für mehrere Benutzer
- WITH GRANT OPTION: Empfänger darf das Recht weitergeben

**So fragt die IHK:**
- Benutzer und Rechte kamen in drei Teilaufgaben der SQL-Aufgabe (Aufgabe 4) vor. Es waren immer kurze Schreibaufgaben mit 3–4 Punkten, Operator „angeben“ bzw. „erstellen“. Der SQL-Auszug mit CREATE USER, GRANT und REVOKE lag jeweils bei.
- Einmal war in einer Teilaufgabe ein neuer Benutzer mit Passwort anzulegen und ihm das Leserecht auf eine Tabelle zu geben (4 Punkte, zwei Anweisungen). Die Lösung schrieb das Passwort in doppelten Anführungszeichen und den Tabellennamen ohne Datenbank.
- In einer anderen Prüfung folgten zwei Teilaufgaben aufeinander: einem vorhandenen Benutzer „Schreibrechte“ auf eine Tabelle einer genannten Datenbank gewähren und einem anderen Benutzer die Schreibrechte auf dieselbe Tabelle entziehen (je 3 Punkte). Dazu gibt es keine amtliche Lösung; gemeint sind INSERT, UPDATE, DELETE auf `Datenbank.Tabelle`, mit TO bzw. FROM.
- Punkte gibt es erkennbar für den richtigen Befehl, die richtigen Rechte, das richtige Objekt und den Benutzer mit TO/FROM.
- Rollen und WITH GRANT OPTION stehen im Auszug, wurden aber noch nicht eigens abgefragt. Zu erwarten wäre: Rolle anlegen, ihr Rechte geben, sie Benutzern zuweisen.

**Fallen:**
- Das Tabellenmodell nennt weder einen Datenbanknamen noch Benutzerkonten; beides muss die Aufgabe vorgeben. Fehlt der Datenbankname vor der Tabelle, ist das kein Fehler, solange die Datenbank eindeutig ist.
- Anlegen: Rechte gleich mit in die CREATE-USER-Anweisung schreiben oder `IDENTIFIED BY` weglassen.
- Anlegen: Doppelte Anführungszeichen um das Passwort werden geduldet; einfache sind die Form des Auszugs.
- Vergeben: Ein Recht vergessen, häufig SELECT bei „ansehen“ neben den Schreibrechten, oder DELETE.
- Vergeben: Das Objekt zu weit fassen (`Datenbank.*` oder `*.*`, wo nur eine Tabelle verlangt ist) oder Rechte auf Tabellen geben, die die Aufgabe ausschließt.
- Entziehen: SELECT mit entziehen, obwohl das Lesen bleiben soll.
- Entziehen: REVOKE ohne Rechteangabe schreiben, in der Annahme, es nehme „das Nötige“ weg.
- Rollen: Die Reihenfolge vertauschen. Erst muss es die Rolle geben, dann bekommt sie Rechte, dann wird sie zugewiesen.
- Rollen: Die Rechte den Benutzern einzeln geben statt der Rolle, oder das Anlegen der Rolle vergessen.
- Rollen: Die Rolle nach dem Auszug mit `CREATE USER Rolle IDENTIFIED BY '…'` anzulegen ist ebenfalls richtig.
- Weitergabe: WITH GRANT OPTION vergessen, nicht ans Ende der Anweisung setzen oder ohne Not vergeben. Der Empfänger kann das Recht dann beliebig weiterreichen.

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
