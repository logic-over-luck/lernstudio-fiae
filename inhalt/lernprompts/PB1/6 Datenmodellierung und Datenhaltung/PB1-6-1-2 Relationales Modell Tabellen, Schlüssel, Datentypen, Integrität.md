Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Datenmodellierung und Datenhaltung › Datenmodelle und Datenhaltung › Relationales Modell: Tabellen, Schlüssel, Datentypen, Integrität

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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
- Zeichnen: Ich zeichne auf Papier und lade ein Foto hoch (oder beschreibe die Zeichnung in Worten); du prüfst sie Punkt für Punkt.
- Stimmt der Inhalt und fehlt nur das Fachwort, zählt die Antwort als richtig: Nenn mir das Wort in einem Satz und geh weiter.
- Zeig Lösungen nie, bevor ich geantwortet habe.

**Was feststeht**
- Der Stoff ist verbindlich, und jede Aussage muss drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“, statt still etwas anderes beizubringen. Steht bei einer Aussage „in der Prüfung vorgegeben“, muss ich das nur anwenden.
- Sag mir bei jedem Thema in einem Halbsatz, ob es schon in einer Prüfung vorkam (Lehrnotiz „Schon geprüft“). Was schon geprüft wurde, übst du gründlicher.
- Schreibe ich „kann ich“, stell nur eine Aufgabe. Schreibe ich „Pause“, fass in zwei Zeilen zusammen, wo wir stehen; später mache ich im selben Chat weiter.
- Am Ende stellst du eine Abschlussaufgabe im Stil der IHK: kurze Kundensituation, Sie-Form, 3–5 Teilaufgaben mit Punkten (zusammen 10–12), eine nach der anderen. Nimm vor allem das hinein, was unterwegs nicht saß, und das, was schon geprüft wurde. Davor gibt es keine eigene Wiederholungsrunde.
- Abhaken: Hat die Abschlussaufgabe mindestens zwei Drittel der Punkte, schreib: „✅ Kannst du abhaken: <Titel des Stichpunkts>“. Sonst nenn, was noch wackelt, und übe genau das mit mir.

Antworte auf Deutsch.

## Stoff: Relationales Modell: Tabellen, Schlüssel, Datentypen, Integrität

Ziel: Ein ER-Modell in Tabellen überführen, Datentypen nach der Katalogliste zuweisen und referenzielle Integrität mit Lösch- und Aktualisierungsweitergabe festlegen.

Das muss ich können:

### K1 – ER-Modell in Tabellen überführen (Stufe 3 Anwenden)
Du kannst ein ER-Modell in ein relationales Modell überführen: jede Entität eine Tabelle, bei 1:n der Fremdschlüssel auf der n-Seite, eine m:n-Beziehung als Zwischentabelle mit beiden Fremdschlüsseln, die in der Regel zusammen den Primärschlüssel bilden.

Erklärung:
Regeln der Überführung:
- **jede Entität → eine Tabelle**, Primärschlüssel unterstreichen oder – wie in den Prüfungsaufgaben verlangt – mit (PK) kennzeichnen, Fremdschlüssel mit (FK)
- **1:n** → Fremdschlüssel auf der **n-Seite**
- **m:n** → **Zwischentabelle** mit beiden Fremdschlüsseln als **zusammengesetztem Primärschlüssel**, plus Beziehungsattribute. Im Modell bleibt keine m:n-Linie, sondern zwei 1:n-Beziehungen zur Zwischentabelle. Kann dasselbe Paar mehrfach vorkommen (derselbe Gast bewertet dieselbe Leistung bei mehreren Besuchen), kommt ein weiteres Attribut wie der Zeitpunkt in den Schlüssel, oder die Zwischentabelle erhält einen eigenen künstlichen Schlüssel
- 1:1 → meist **eine** gemeinsame Tabelle; bei zwei Tabellen (K5) Fremdschlüssel in einer der beiden, dort eindeutig (UNIQUE)

### K2 – Datentypen aus der Katalogliste (Stufe 3 Anwenden)
Du kannst den Attributen eines Datenmodells Datentypen aus der Katalogliste zuweisen (Begründung wie in AP1-8-4-2): Boolescher Wert, Ganzzahl, Gleitkommawert, Währung als Festkommazahl, Datum, Text fester und variabler Länge, BLOB für Binärdaten wie Bilder oder Dokumente, Geokoordinaten (Breiten- und Längengrad oder eigener Geodatentyp).

Erklärung:
Datentypen nach Katalog:
- **Boolesch:** ja/nein (`istAktiv`)
- **Ganzzahl:** Anzahl, ID
- **Gleitkomma:** Messwerte
- **Währung:** **Festkommazahl** (`DECIMAL(10,2)`), nie Gleitkomma (Rundungsfehler)
- **Datum** (Geburtsdatum) oder **Datum mit Uhrzeit** (Bestellzeitpunkt) – Uhrzeit nur, wenn der Zeitpunkt am Tag zählt
- **Text fester / variabler Länge:** `CHAR(5)` für PLZ, `VARCHAR(100)` für Namen
- **BLOB:** Binärdaten wie Bilder, PDF
- **Geokoordinaten:** Breiten- und Längengrad oder eigener Geodatentyp

### K3 – Referenzielle Integrität und Löschweitergabe (Stufe 3 Anwenden)
Du kannst referenzielle Integrität sichern (ein Fremdschlüsselwert muss auf einen vorhandenen Primärschlüssel verweisen) und für eine Beziehung festlegen, was beim Löschen oder Ändern des referenzierten Datensatzes geschieht: Löschweitergabe bzw. Aktualisierungsweitergabe (abhängige Datensätze werden mitgelöscht bzw. angepasst) oder Verbot der Änderung, solange abhängige Datensätze bestehen.

Erklärung:
**Referenzielle Integrität:** Jeder Fremdschlüsselwert verweist auf einen **vorhandenen** Primärschlüssel oder ist leer (NULL).
Was beim Löschen/Ändern des Elterndatensatzes passiert:
- **Löschweitergabe** (CASCADE): abhängige Datensätze werden **mitgelöscht**
- **Aktualisierungsweitergabe:** geänderter Schlüssel wird in den abhängigen Datensätzen **angepasst**
- **Verbot** (RESTRICT): Löschen/Ändern geht nicht, solange abhängige Datensätze bestehen
Beispiel: Kunde löschen → seine Bestellungen? Meist Verbot, damit Rechnungsdaten erhalten bleiben.

### K4 – Beziehungsattribute in der Zwischentabelle (Stufe 3 Anwenden)
Du kannst beim Überführen einer m:n-Beziehung ihre Beziehungsattribute in die Zwischentabelle übernehmen: Ein Wert wie die Arbeitsstunden eines Mitarbeiters in einem Projekt gehört weder zum Mitarbeiter noch zum Projekt allein, sondern zur Kombination aus beiden und steht deshalb in der Zeile der Zwischentabelle.

Erklärung:
Ein **Beziehungsattribut** beschreibt nicht eine Entität, sondern ihre Verbindung. Deshalb hat es nur dort einen eindeutigen Platz, wo genau eine Kombination gespeichert ist.
- Bei m:n ist das die **Zwischentabelle**: eine Zeile je Paar aus beiden Fremdschlüsseln.
- In der Tabelle Mitarbeiter wüsstest du nicht, zu welchem Projekt die Stunden gehören; in Projekt nicht, von wem.
- Der zusammengesetzte Primärschlüssel aus beiden Fremdschlüsseln bestimmt den Wert eindeutig.
Beispiel: `Mitarbeit(MitarbeiterNr, ProjektNr, Stunden)` – Frau Kaya arbeitet 12 Stunden im Projekt Webshop und 30 im Projekt Umzug. Im ER-Modell hängt das Attribut an der Raute (AP1-8-4-1-K7), im relationalen Modell wandert es mit in die Zwischentabelle.

### K5 – 1:1-Beziehung: wann zwei Tabellen (Stufe 3 Anwenden)
Du kannst festlegen, wann eine 1:1-Beziehung als zwei Tabellen statt als eine gemeinsame Tabelle umgesetzt wird: wenn ein Teil der Daten eigene Zugriffsrechte braucht, etwa vertrauliche Gehaltsdaten, oder wenn viele selten gebrauchte Attribute ausgelagert werden; sonst gehören Daten, die 1:1 zusammengehören, in eine Tabelle.

Erklärung:
Was 1:1 zusammengehört, beschreibt meist dasselbe Objekt – deshalb steht es normalerweise **in einer Tabelle**. Eine Aufteilung braucht einen Grund:
- **Zugriffsrechte:** Rechte vergibt man in vielen DBMS am einfachsten je Tabelle. Liegen Gehälter in einer eigenen Tabelle, darf die Personalabteilung sie bearbeiten, die Teamleitung nur Name und Abteilung lesen.
- **Auslagern:** Viele selten gebrauchte oder große Attribute (z. B. ein Foto als BLOB) in eine Nebentabelle, damit die Haupttabelle schlank und übersichtlich bleibt.
Technisch: Der Fremdschlüssel in der Nebentabelle ist zugleich eindeutig (UNIQUE) oder ihr Primärschlüssel.
Ohne solchen Grund kostet die Trennung nur einen zusätzlichen Join.

### K6 – m:n ohne Zwischentabelle: feste Rollen (Stufe 3 Anwenden)
Du kannst festlegen, ob eine m:n-Beziehung eine Zwischentabelle braucht: Ist die Zahl der Beteiligten je Datensatz fest und klein und hat jeder eine eigene Rolle, etwa genau eine Heim- und eine Gastmannschaft je Spiel, genügen zwei Fremdschlüsselspalten; ist die Zahl offen, etwa beliebig viele Teilnehmer je Kurs, ist die Zwischentabelle nötig.

Erklärung:
Die Regel „m:n wird Zwischentabelle“ gilt, weil die Zahl der Partner je Datensatz **offen** ist – feste Spalten würden irgendwann nicht reichen.
Ausnahme: Die Zahl ist **fest und klein**, und jeder Partner hat eine **eigene Rolle**.
- Spiel: genau eine `HeimMannschaftID` und eine `GastMannschaftID` – zwei Fremdschlüssel auf dieselbe Tabelle Mannschaft. Über alle Spiele hinweg bleibt es m:n.
- Flug: `StartFlughafenID`, `ZielFlughafenID`.
Gegenprobe: Kann es irgendwann einen dritten Beteiligten geben (Kurs mit Teilnehmern, Projekt mit Mitarbeitern)? Dann Zwischentabelle, sonst müsstest du später Spalten anbauen und Abfragen über `Teilnehmer1`, `Teilnehmer2` … schreiben.

## Lehrnotiz: Relationales Modell: Tabellen, Schlüssel, Datentypen, Integrität

**Aufteilung:**
- ER-Modell in Tabellen überführen: K1
- Beziehungsattribute in die Zwischentabelle: K4
- Wann m:n keine Zwischentabelle braucht: K6
- 1:1 als eine oder zwei Tabellen: K5
- Datentypen zuweisen: K2
- Referenzielle Integrität und Weitergabe: K3

**Schon geprüft:** Noch nicht geprüft: K1–K6

**Kerngedanken:**
- Der Fremdschlüssel steht bei 1:n auf der n-Seite, weil auf der 1-Seite eine Zelle mehrere Werte aufnehmen müsste.
- Aus einer m:n-Beziehung werden zwei 1:n-Beziehungen zur Zwischentabelle. Im fertigen relationalen Modell gibt es keine m:n-Linie mehr.
- Gibt es zwei Beziehungen mit verschiedener Bedeutung zur selben Tabelle, entstehen zwei verschieden benannte Fremdschlüssel auf diese Tabelle. Die Rolle steckt im Spaltennamen. Das gilt auch für rekursive Beziehungen: Bei 1:n steht der Fremdschlüssel in derselben Tabelle (`VorgesetzterID`), bei m:n hat die Zwischentabelle zwei Fremdschlüssel auf dieselbe Tabelle.
- Einen Fremdschlüsselwert ohne passenden Primärschlüssel weist die Datenbank immer zurück. Ist keine Weitergabe festgelegt, weist sie außerdem das Löschen oder Schlüsseländern eines Datensatzes zurück, auf den noch verwiesen wird (Verbot). Die Wahl zwischen Weitergabe und Verbot entscheidet sich an zwei Fragen: Haben die abhängigen Datensätze allein noch einen Sinn, und muss sie später jemand nachweisen können?
- Das Modellieren aus einem langen Anforderungstext und die Normalisierung sind eigene Stichpunkte. Hier geht es um das Überführen eines fertigen ER-Modells.

**Typische Missverständnisse:**
- Viele denken, Löschweitergabe sei überall bequem, weil dann keine Fehlermeldung kommt; richtig ist, dass dann beim Löschen eines Stammdatensatzes auch Daten verschwinden, die erhalten bleiben müssen.
- Viele denken, Aktualisierungsweitergabe übertrage jede Änderung am Elterndatensatz; richtig ist, dass nur ein geänderter Schlüsselwert in den Fremdschlüsseln nachgezogen wird.

**Fachwörter:**
- Fremdschlüssel: Verweis auf den Primärschlüssel einer Tabelle
- Zwischentabelle: löst m:n in zwei 1:n auf
- zusammengesetzter Primärschlüssel: mehrere Spalten sind zusammen eindeutig
- Beziehungsattribut: Wert gehört zur Kombination zweier Partner
- Referenzielle Integrität: Fremdschlüssel zeigt auf vorhandenen Primärschlüssel
- Löschweitergabe: abhängige Datensätze werden mitgelöscht
- Aktualisierungsweitergabe: geänderter Schlüssel wird überall angepasst
- Festkommazahl: Zahl mit fester Zahl Nachkommastellen

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es in PB1 noch keine echte Aufgabe. Der Prüfungskatalog nennt Überführung, Datentypenliste und referenzielle Integrität mit Weitergabe aber ausdrücklich.
- Gezeichnet wurde ein relationales Modell in PB1 bei der Normalisierung (13 und 16 Punkte). Gezählt wurde je Tabelle (1–2 P), je Primärschlüssel (1 P), ein zusammengesetzter Primärschlüssel eigens (2 P), je Fremdschlüssel bzw. Beziehung (1 P).
- Zu erwarten ist: ein ER-Modell überführen (erstellen, 8–14 P), Datentypen angeben (je 1 P), für Beziehungen das Löschverhalten festlegen und begründen (je 2 P).
- Tabellennamen sind frei. Die Lage von Fremdschlüssel und Beziehungsattribut wird streng bewertet.

**Fallen:**
- In der Zwischentabelle nur einen der beiden Fremdschlüssel zum Primärschlüssel machen.
- Der Zwischentabelle einen künstlichen Schlüssel geben und die beiden Fremdschlüssel nicht kennzeichnen.
- Beziehungslinien ohne Kardinalität zeichnen oder die n-Seite nicht bei der Tabelle mit dem Fremdschlüssel.
- Zwei Beziehungen zur selben Tabelle mit nur einem Fremdschlüssel umsetzen.
- Ein Attribut, das für eine Entität immer gleich ist (ihr fester Preis), in die Zwischentabelle schreiben.
- Den Platz des Beziehungsattributs nennen, ohne die Begründung „gehört zu genau einem Paar“.
- Bei fester Zahl mit eigenen Rollen reflexartig eine Zwischentabelle bauen.
- Bei getrennten 1:1-Tabellen den Fremdschlüssel der Nebentabelle nicht eindeutig machen.
- Postleitzahl oder Telefonnummer als Ganzzahl wählen; die führende Null geht verloren.
- Einen Standort als Text statt als Geokoordinaten speichern.
- Nur ein Datum wählen, wo auch die Uhrzeit gebraucht wird.
- Gefragt ist meist der allgemeine Datentyp; ein passender SQL-Typ ist kein Fehler. Ein Messwert als Festkommazahl ist vertretbar, wenn er begründet wird.
- Das Löschverhalten festlegen, ohne es zu begründen.

**Material:**
Notationsregeln, nach denen ein relationales Modell geprüft wird (wie in den IHK-Lösungen):
- Je Tabelle der Name und alle Attribute. In Textform: `Tabelle: Attribut (PK), Attribut (FK), …`
- Primärschlüssel: unterstrichen oder „(PK)“. Fremdschlüssel: „(FK)“. Ist eine Spalte beides, steht „(PK, FK)“.
- Zusammengesetzter Primärschlüssel: alle beteiligten Spalten sind gekennzeichnet.
- Jede Beziehung ist eine Linie zwischen zwei Tabellen mit Kardinalität (1 : n oder 1 : 1). Die n-Seite, beim Krähenfuß der Fuß, liegt bei der Tabelle mit dem Fremdschlüssel. In Textform: `Tabelle A 1 : n Tabelle B`.
- Es bleibt keine m:n-Linie. Eine Zwischentabelle hat zwei 1:n-Linien, das n liegt jeweils bei ihr.
- Zwei Fremdschlüssel auf dieselbe Tabelle ergeben zwei Linien.
- Tabellennamen und Namen der Fremdschlüsselspalten sind frei. Ein künstlicher Schlüssel der Zwischentabelle ist nur mit gekennzeichneten Fremdschlüsseln gleichwertig.
- Folgefehler werden nur einmal gezählt.
