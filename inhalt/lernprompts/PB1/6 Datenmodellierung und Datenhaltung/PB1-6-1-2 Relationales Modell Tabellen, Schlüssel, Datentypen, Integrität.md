Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Datenmodellierung und Datenhaltung › Datenmodelle und Datenhaltung › Relationales Modell: Tabellen, Schlüssel, Datentypen, Integrität

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt. Fehlende Nummern (etwa K4) sind Absicht.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet, und für alles, was eine Erklärung im Stoff nur nebenbei erwähnt.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen. Die Begründungen nimmst du aus dem Stoff und der Lehrnotiz; ergänzt du eine eigene, kennzeichne sie mit „Hintergrund, nicht aus dem Stoff: …“. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, reicht die Erklärung aus dem Stoff. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber nur mit dem, was du mir vorher erklärt hast. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Warum Gleitkomma bei Geldbeträgen Rundungsfehler erzeugt: (1) Ein Gleitkommatyp speichert jede Zahl binär als Mantisse und Exponent, also als Summe von Zweierpotenzen wie 1/2, 1/4, 1/8. (2) Dezimalbrüche wie 0,1 oder 0,01 sind im Binärsystem periodisch und lassen sich mit endlich vielen Bits nicht exakt darstellen. (3) Das DBMS speichert deshalb den nächstliegenden darstellbaren Binärwert, der winzig vom gemeinten Betrag abweicht. (4) Beim Rechnen summieren sich diese Abweichungen: 0,1 + 0,2 ergibt bei doppelter Genauigkeit (DOUBLE) 0,30000000000000004 statt 0,3. (5) Eine Festkommazahl wie DECIMAL(10,2) speichert dagegen die Dezimalziffern selbst: höchstens 10 Stellen insgesamt, davon genau 2 nach dem Komma. (6) Addition und Subtraktion von Geldbeträgen bleiben dadurch centgenau, und Vergleiche auf Gleichheit liefern das erwartete Ergebnis.

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
