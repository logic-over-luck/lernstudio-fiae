Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Datenmodellierung und Datenhaltung › Datenmodelle und Datenhaltung › Redundanz, Anomalien und Normalisierung bis zur 3. Normalform

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

## Stoff: Redundanz, Anomalien und Normalisierung bis zur 3. Normalform

Ziel: Redundanz und Anomalien an konkreten Beispielen belegen und eine Tabelle in die 3. Normalform bringen und als relationales Modell zeichnen.

Das muss ich können:

### K1 – Redundanz und die drei Anomalien (Stufe 2 Verstehen)
Du kannst Redundanz und die drei Anomalien (Änderung, Einfügen, Löschen) je an einem konkreten Beispiel aus einer gegebenen Tabelle erläutern, zum Beispiel die vollständigen Kontaktdaten eines Gastes bei jedem seiner Besuche.

Erklärung:
**Redundanz** = dieselbe Information mehrfach gespeichert (Kontaktdaten eines Gastes bei jedem Besuch).
Daraus folgen **Anomalien**:
- **Änderung:** ein Wert steht mehrfach – die neue Telefonnummer muss in allen Zeilen des Gastes geändert werden, sonst widersprüchlich
- **Einfügen:** Daten lassen sich nicht allein erfassen – ein neuer Gast kann erst mit einem Besuch erfasst werden – oder nur mit leeren Feldern für Besuch, Leistung und Bewertung
- **Löschen:** mit einer Zeile gehen Daten verloren, die nur dort standen – letzten Besuch löschen → Gastdaten sind weg

### K2 – Regeln der 1. bis 3. Normalform (Stufe 3 Anwenden)
Du kannst die Regeln der 1. bis 3. Normalform anwenden: Jede Zelle enthält genau einen Wert (1. NF), jedes Nichtschlüsselattribut hängt vom ganzen Primärschlüssel ab (2. NF) und von keinem anderen Nichtschlüsselattribut (3. NF).

Erklärung:
- **1. NF:** jede Zelle genau **ein** Wert – keine Listen („0221 123456, 0170 987654“) und keine zusammengesetzten Angaben: Anschrift → Strasse, PLZ, Ort; Kontaktangabe mit Name, Telefon und E-Mail in einer Zelle → Name, Vorname, Telefon, Email
- **2. NF:** 1. NF + jedes Nichtschlüsselattribut hängt vom **ganzen** Primärschlüssel ab (nur bei zusammengesetztem Schlüssel relevant)
- **3. NF:** 2. NF + kein Nichtschlüsselattribut hängt von einem **anderen Nichtschlüsselattribut** ab (z. B. Ort hängt von PLZ ab)

### K3 – Tabelle in die 3. Normalform bringen (Stufe 3 Anwenden)
Du kannst eine nicht normalisierte Tabelle in die 3. Normalform bringen und das Ergebnis als relationales Modell mit allen Primär- und Fremdschlüsseln und Beziehungen zeichnen, auch mit einem aus mehreren Attributen zusammengesetzten Schlüssel oder erweitert um neue Anforderungen (z. B. mehrere Sensoren je Beet mit ihren Messwerten).

Erklärung:
Vorgehen:
- Mehrfachwerte und zusammengesetzte Angaben auflösen (1. NF)
- Teilabhängigkeiten in eigene Tabellen (2. NF)
- transitive Abhängigkeiten in eigene Tabellen (3. NF)
- Ergebnis als **relationales Modell**: alle Tabellen, Primärschlüssel, Fremdschlüssel, Beziehungslinien
Verlangt die Aufgabe Schlüssel **aus vorhandenen Daten** (keine künstlichen IDs), frage: Welche Angaben machen eine Zeile zusammen eindeutig? Beispiel Bewertung: Ein Gast bewertet eine Leistung je Besuch höchstens einmal → Primärschlüssel (id_Gast, id_Leist, Besuch_Zeit); id_Gast und id_Leist sind zugleich Fremdschlüssel, id_Mit ist nur Fremdschlüssel. Ergebnis: `Gast(id_Gast PK, Name, Vorname, Telefon, Email)`, `Leistung(id_Leist PK, Bezeichnung)`, `Mitarbeiter(id_Mit PK, Name, Telefon)`, `Bewertung(id_Gast PK FK, id_Leist PK FK, Besuch_Zeit PK, id_Mit FK, Bewertung)`.
Neue Anforderungen gleich einbauen: mehrere Sensoren je Beet → `Sensor(SensorID PK, BeetID FK)`; die gelieferten Messwerte (Value, Timestamp) → `Messwert(MesswertID PK, SensorID FK, Wert, Zeitpunkt)` mit Sensor 1 : n Messwert.

### K4 – Erfüllte Normalform einer Tabelle bestimmen (Stufe 3 Anwenden)
Du kannst bestimmen, welche Normalform eine Tabelle erfüllt, und die Verletzung der nächsten Normalform benennen.

Erklärung:
Prüfen von unten nach oben:
- Gibt es Mehrfachwerte oder zusammengesetzte Angaben in einer Zelle (Liste, ganze Anschrift)? → nicht 1. NF
- Zusammengesetzter Schlüssel, und ein Attribut hängt nur von einem Teil ab? → nicht 2. NF
- Hängt ein Attribut von einem anderen Nichtschlüsselattribut ab? → nicht 3. NF
Antwort: „erfüllt die 2. NF, verletzt die 3. NF, weil `Ort` von `PLZ` abhängt.“

### K5 – 2. NF nur bei zusammengesetztem Schlüssel (Stufe 2 Verstehen)
Du kannst erklären, warum eine Tabelle in der 1. NF mit einspaltigem Primärschlüssel automatisch in der 2. NF ist: Die 2. NF verbietet die Abhängigkeit eines Attributs von nur einem Teil des Schlüssels, und einen Teil gibt es nur bei einem zusammengesetzten Schlüssel.

Erklärung:
Die 2. NF verlangt: Jedes Nichtschlüsselattribut hängt vom **ganzen** Primärschlüssel ab, nicht nur von einem Teil.
- Besteht der Schlüssel aus **einer** Spalte, hat er keine echten Teile – eine Teilabhängigkeit ist unmöglich.
- Prüfen musst du die 2. NF also nur bei **zusammengesetzten** Schlüsseln.
Beispiel: `Bestellposition(BestellNr, ArtikelNr, Menge, Artikelname)` – Artikelname hängt nur von ArtikelNr ab → 2. NF verletzt. `Kunde(KundenNr, Name, PLZ, Ort)` ist automatisch in der 2. NF; hier kann höchstens die 3. NF verletzt sein (Ort hängt von PLZ ab).
Praxis-Tipp beim Bestimmen der Normalform: erst nach dem Schlüssel schauen, dann gezielt prüfen.

### K6 – Berechenbare Attribute und die 3. NF (Stufe 2 Verstehen)
Du kannst erklären, warum ein berechenbares Attribut wie der Bruttopreis, der sich aus dem Nettopreis und einem festen Steuersatz ergibt, die 3. NF verletzt: Es hängt nicht direkt vom Schlüssel ab, sondern über das Nichtschlüsselattribut Nettopreis, also transitiv. Dass ein berechenbarer Wert als versteckte Redundanz nicht gespeichert wird, kennst du aus AP1-8-4-2.

Erklärung:
Die 3. NF verbietet, dass ein Nichtschlüsselattribut von einem **anderen Nichtschlüsselattribut** abhängt (transitive Abhängigkeit).
- Ein berechenbarer Wert ist genau so ein Fall: Kennst du `Netto`, kennst du `Brutto` – der Schlüssel bestimmt Brutto nur auf dem Umweg über Netto.
- Folge: versteckte Redundanz. Ändert jemand den Nettopreis und vergisst Brutto, widersprechen sich die Daten (Änderungsanomalie, vgl. AP1-8-4-2-K6).
Lösung in der 3. NF: Spalte weglassen und bei Bedarf berechnen, z. B. in der Abfrage, einer Sicht oder im Programm.
Beispiel Webshop: `Artikel(ArtikelNr, Netto, Brutto)` → `Artikel(ArtikelNr, Netto)`, Brutto = Netto · 1,19.

### K7 – Übernormalisierung und gewollte Redundanz (Stufe 2 Verstehen)
Du kannst erklären, warum ein Datenmodell nicht weiter als nötig normalisiert wird: Jede weitere Zerlegung bringt mehr Tabellen, Schlüssel und Joins und damit längere Antwortzeiten und mehr Komplexität; deshalb entfernt man nur ungewollte Redundanz, und Redundanz, die man bewusst in Kauf nimmt, wird begründet.

Erklärung:
Normalisieren beseitigt Redundanz und damit Anomalien – aber es hat einen **Preis**:
- mehr Tabellen und künstliche Schlüssel
- mehr Joins je Abfrage → längere Antwortzeiten
- komplexere Abfragen und Programme, mehr Fehlerquellen
Wird über das Ziel hinaus zerlegt, spricht man von **Übernormalisierung**. Ziel ist deshalb: **ungewollte** Redundanz entfernen; **gewollte** Redundanz darf bleiben, wenn sie begründet ist.
Beispiele: Der Rechnungsbetrag wird gespeichert, weil er rechtlich unverändert bleiben muss; Ort steht trotz PLZ in der Kundentabelle, weil eine eigene PLZ-Tabelle mehr Aufwand als Nutzen bringt; ein Auswertungs-Warehouse wird absichtlich denormalisiert.
Für die Prüfung: Sollst du eine Verletzung benennen, ist „Ort hängt von PLZ ab“ ein Verstoß gegen die 3. NF. Sollst du ein Modell in der 3. NF erstellen, lassen die IHK-Lösungen PLZ und Ort trotzdem in einer Tabelle – eine eigene Ort-Tabelle wird nicht verlangt. Andere Abhängigkeiten zwischen Nichtschlüsselattributen (z. B. Abteilungsname von Abteilungsnummer) lagerst du aus.

## Lehrnotiz: Redundanz, Anomalien und Normalisierung bis zur 3. Normalform

**Aufteilung:**
- Redundanz und Anomalien an einer gegebenen Tabelle: K1
- Regeln der drei Normalformen und wie man sie herstellt: K2
- Normalform bestimmen, mit der Abkürzung beim einspaltigen Schlüssel: K4, K5
- Berechenbare Werte und Grenzen der Normalisierung: K6, K7
- Tabelle in die 3. NF bringen und als relationales Modell zeichnen, hier kommt alles Vorige zusammen: K3

**Schon geprüft:** In Prüfungen: K1 (2023S, 2025W), K3 (2023S, 2025W) · Noch nicht geprüft: K2, K4–K7

**Kerngedanken:**
- „B hängt von A ab“ heißt: Kennt man den Wert von A, steht der Wert von B eindeutig fest (zu einer PLZ gehört genau ein Ort); alle Normalformen fragen danach, wovon ein Attribut abhängt.
- Redundanz ist die Ursache der Anomalien. In der Prüfung zählt je ein konkretes Beispiel aus der gegebenen Tabelle (welche Zeile, welcher Wert) zusammen mit der Folge: Widerspruch, nicht erfassbar bzw. nur mit leeren Feldern, Informationsverlust.
- Auslagern heißt: Das abhängige Attribut wandert zusammen mit dem Attribut, von dem es abhängt, in eine neue Tabelle. Dieses wird dort Primärschlüssel und bleibt in der alten Tabelle als Fremdschlüssel stehen.
- Beim Zerlegen darf keine Information verloren gehen. Über die Fremdschlüssel müssen sich die ursprünglichen Zeilen vollständig wieder zusammensetzen lassen.
- Das Überführen eines fertigen ER-Modells, Datentypen und referenzielle Integrität gehören zum Nachbarthema (Relationales Modell).

**Typische Missverständnisse:**
- Viele denken, Mehrfachwerte löse man mit nummerierten Spalten auf (Telefon1, Telefon2); richtig ist, dass jeder Wert einen eigenen Datensatz bekommt, wodurch der Primärschlüssel meist zusammengesetzt wird.
- Viele denken, ein gespeicherter Bruttopreis und ein gespeicherter Rechnungsbetrag seien dasselbe Problem; richtig ist, dass der Bruttopreis sich immer mit dem Nettopreis ändert (reine Kopie, weglassen), der Rechnungsbetrag bei späteren Preisänderungen aber gerade nicht mitgehen soll (eigene Information, bleibt).

**Fachwörter:**
- Redundanz: dieselbe Information mehrfach gespeichert
- Änderungsanomalie: Wert nicht überall geändert, Daten widersprechen sich
- Nichtschlüsselattribut: Attribut, das nicht zum Primärschlüssel gehört
- Teilabhängigkeit: Attribut hängt nur an einem Schlüsselteil
- transitive Abhängigkeit: Abhängigkeit über ein anderes Nichtschlüsselattribut
- Übernormalisierung: weiter zerlegt als nötig
- gewollte Redundanz: bewusst gespeichert und begründet

**So fragt die IHK:**
- Zwei Aufgabenblöcke in PB1. Im Material steht jeweils eine Tabelle mit Mehrfachwerten und zusammengesetzten Angaben (Kontaktdaten, Koordinaten) in den Zellen.
- Kleine Teile: Redundanz an einem konkreten Beispiel beschreiben (2 P); eine Gefahr beim Ändern am Beispiel beschreiben (3 P, erwartet: inkonsistente Daten, Änderungsanomalie); eine Tabelle mit den drei Anomalien je mit Beispiel ergänzen (6 P, 2 je Anomalie).
- Großer Teil (13 bzw. 16 P): „in die 3. Normalform bringen und ein relationales Datenbankmodell erstellen“. Dazu kommen Hinweise wie „Schlüssel aus vorhandenen Daten“, „PK und FK kennzeichnen, alle Beziehungen einzeichnen“ und eine Regel zur Eindeutigkeit. Einmal kam eine neue Anforderung dazu (mehrere Sensoren je Beet, Messwerte als JSON-Beispiel).
- Gezählt wird je Tabelle mit Attributen (1–2 P), je einfachem Primärschlüssel (1 P), der zusammengesetzte eigens (2 P), je Fremdschlüssel bzw. Beziehung mit Kardinalität (1 P). Tabellennamen sind frei, Schlüssel und Lage der Attribute werden streng bewertet.
- Fragen nach der erfüllten Normalform oder nach berechenbaren Attributen gab es bisher nicht. Sie kämen als „angeben und begründen“ mit 2–4 P.

**Fallen:**
- Einfüge- und Löschanomalie verwechseln.
- Die verletzte Normalform nennen, ohne das betroffene Attribut und die Art der Abhängigkeit.
- Beim berechenbaren Attribut nur „Redundanz“ schreiben, die 2. NF nennen oder die Lösung (weglassen und berechnen) vergessen.
- Bei der Frage nach den Grenzen der Normalisierung nur den Preis der Zerlegung nennen, ohne zu sagen, welche Redundanz deshalb bewusst bleibt und warum.
- Eine zusammengesetzte Angabe (Name und Funktion in einer Zelle) unzerlegt in das Modell übernehmen.
- Ein Attribut der ausgelagerten Sache in der alten Tabelle lassen oder den Fremdschlüssel in die falsche Tabelle setzen; er gehört dorthin, wo die Abhängigkeit direkt besteht.
- Bei „Schlüssel aus vorhandenen Daten“ doch eine Nummer erfinden. Steht diese Vorgabe in der Aufgabe, gilt sie auch für die Tabelle der neuen Anforderung, deren Schlüssel dann z. B. aus Fremdschlüssel und Zeitpunkt besteht; ohne die Vorgabe ist ein künstlicher Schlüssel wie die MesswertID im Stoff richtig.
- Einen Schlüssel wählen, der nicht eindeutig ist, etwa ohne Zeitpunkt, obwohl dasselbe Paar wiederkommen kann.
- Die neue Anforderung aus dem Aufgabentext im Modell vergessen.
- Beziehungslinien ohne Kardinalität zeichnen, die n-Seite zur Stammtabelle legen oder eine m:n-Linie stehen lassen.

**Material:**
Notationsregeln für das relationale Modell (wie in den IHK-Lösungen):
- Je Tabelle der Name und alle Attribute. Primärschlüssel unterstrichen oder „(PK)“, Fremdschlüssel „(FK)“. Beim zusammengesetzten Schlüssel sind alle beteiligten Spalten gekennzeichnet.
- Alle Beziehungen als Linien mit Kardinalität. Die n-Seite, beim Krähenfuß der Fuß, liegt bei der Tabelle mit dem Fremdschlüssel. Eine Zwischentabelle hat zwei 1:n-Linien.
- Textform ist möglich: `Tabelle: Attribut (PK), Attribut (FK), …` und `Tabelle A 1 : n Tabelle B`.
- Ist ein künstlicher Schlüssel nicht verboten, darf für eine Sache ohne Nummer eine ergänzt werden.
- PLZ und Ort bleiben in den IHK-Lösungen in einer Tabelle. Folgefehler werden nur einmal gezählt.
