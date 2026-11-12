Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Kenngrößen berechnen › Zeichen und Zahlen binär kodieren: ASCII, Unicode, Dualzahlen

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP1 und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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

## Stoff: Zeichen und Zahlen binär kodieren: ASCII, Unicode, Dualzahlen

Ziel: Erklären, wie Zeichen und ganze Zahlen als Bitfolgen gespeichert werden, den Wertebereich aus der Bitzahl ableiten und Zeichenkodierungen unterscheiden.

Das muss ich können:

### K1 – Bedeutung einer Bitfolge durch Code (Stufe 2 Verstehen)
Du kannst erklären, warum eine Bitfolge erst durch einen vereinbarten Code eine Bedeutung bekommt: Zahlen, Texte und Bilder werden als Bitfolgen kodiert, und dieselbe Folge 01000001 ist als Dualzahl 65, als ASCII-Zeichen aber ein „A“.

Erklärung:
Im Rechner gibt es nur Bits. Damit sie etwas bedeuten, braucht es einen **Code**, den Sender und Empfänger vorher vereinbart haben:
- **kodieren:** Zahl, Zeichen, Farbe → Bitfolge
- **dekodieren:** Bitfolge → Zahl, Zeichen, Farbe
Dieselbe Bitfolge kann je nach Code etwas völlig anderes sein. Erst die richtige Deutung macht aus Daten eine Information.
Beispiel: Öffnest du eine Bilddatei im Texteditor, siehst du Zeichensalat – der Editor dekodiert die Bits mit dem falschen Code.

### K2 – Ganzzahlen als Dualzahl und Wertebereich (Stufe 2 Verstehen)
Du kannst erklären, wie eine ganze Zahl zum Rechnen gespeichert wird: als Dualzahl, bei n Bit ohne Vorzeichen mit dem Wertebereich 0 bis 2^n − 1 (8 Bit: 0 bis 255), und nicht als Folge von Ziffernzeichen, mit der ein Prozessor nicht rechnen kann („42“ als Text sind zwei Zeichen).

Erklärung:
Eine Zahl kann auf zwei Arten im Speicher stehen:
- **als Text:** jede Ziffer ein Zeichen aus dem Zeichensatz – „42“ sind die Zeichen „4“ und „2“. Gut zum Anzeigen, aber nicht zum Rechnen.
- **als Dualzahl:** 42 = `00101010` – damit kann der Prozessor direkt rechnen.
Wie groß eine vorzeichenlose Ganzzahl werden kann, hängt von der Bitzahl ab: **0 bis 2^n − 1**.
- 8 Bit: 0 bis 255
- 16 Bit: 0 bis 65.535
Beispiel: Liest ein Programm eine Zahl aus einem Eingabefeld, kommt Text an – erst nach der Umwandlung in eine Zahl kann es damit rechnen.

### K3 – ASCII, Unicode und UTF-8 (Stufe 2 Verstehen)
Du kannst die Zeichenkodierungen ASCII, Unicode und UTF-8 unterscheiden: ASCII ordnet mit 7 Bit 128 Zeichen einen Code zu (z. B. A = 65), Unicode gibt den Zeichen aller Schriften einen eigenen Code, und UTF-8 speichert ein Unicode-Zeichen platzsparend in 1 bis 4 Byte, ASCII-Zeichen in einem Byte.

Erklärung:
Ein **Zeichensatz** ordnet jedem Zeichen eine eindeutige Zahl zu.
- **ASCII:** 7 Bit = 128 Zeichen; zuerst 32 Steuerzeichen, dann Leerzeichen, Ziffern, Groß- und Kleinbuchstaben (A = 65, a = 97). Keine Umlaute.
- **Unicode:** ein gemeinsamer Code für alle Schriften der Welt (weit über 100.000 Zeichen, mehr als in 16 Bit passt). Er löst die vielen unverträglichen Ländersätze ab, bei denen dasselbe Byte je nach Land ein anderes Zeichen war.
- **UTF-8:** speichert Unicode mit **variabler Länge**, 1 bis 4 Byte; die ASCII-Zeichen bleiben ein Byte – deshalb Standard im Web.
Beispiel: Erscheint „Ã¼“ statt „ü“, wurde UTF-8-Text mit einem falschen Zeichensatz gelesen.

## Lehrnotiz: Zeichen und Zahlen binär kodieren: ASCII, Unicode, Dualzahlen

**Aufteilung:**
- Bits bekommen erst durch einen Code Bedeutung: K1
- Zahl als Text oder als Dualzahl, Wertebereich: K2
- Zeichenkodierungen, erst ASCII, dann Unicode und UTF-8: K3

**Schon geprüft:** Noch nicht geprüft: K1–K3

**Kerngedanken:**
- Unicode und UTF-8 sind zweierlei: Unicode ist die Zuordnung Zeichen zu Nummer, UTF-8 die Art, diese Nummer in Bytes abzulegen.
- Bei falschen Umlauten ist die Datei heil; sie wurde mit einem anderen Code gelesen, als sie gespeichert wurde. Ein Programm mit einem alten 1-Byte-Zeichensatz macht aus jedem Byte ein Zeichen: Ein Umlaut, der in UTF-8 mehrere Byte belegt, wird zu mehreren falschen Zeichen. ASCII-Zeichen bleiben richtig, weil UTF-8 sie genau wie ASCII speichert.
- Das „− 1“ im Wertebereich kommt daher, dass die 0 selbst ein Bitmuster belegt: n Bit haben 2ⁿ Muster, der größte Wert ist 2ⁿ − 1.
- Als Dualzahl speichert man, womit gerechnet wird. Kennwerte aus Ziffern, mit denen niemand rechnet (etwa eine Postleitzahl), sind als Text richtig aufgehoben.
- Das Umrechnen zwischen Dual- und Dezimalzahl gehört zum Stichpunkt über Zahlensysteme; hier genügt es, die Werte zu nennen. Negative Zahlen sind nicht verlangt.

**Typische Missverständnisse:**
- Viele denken, eine Bitfolge „sei“ ein bestimmtes Zeichen. Richtig ist: Ohne vereinbarten Code ist sie nur Daten. Richtig gedeutet wird sie nur mit dem Code, mit dem sie gespeichert wurde.
- Viele denken, ASCII habe 8 Bit und 256 Zeichen. Richtig sind 7 Bit und 128 Zeichen; die 8-Bit-Ländersätze sind kein ASCII.
- Viele denken, UTF-8 heiße 8 Bit je Zeichen und Unicode immer 2 Byte. Richtig ist: UTF-8 braucht 1 bis 4 Byte, und Unicode passt nicht in 16 Bit.

**Fachwörter:**
- Code: vereinbarte Zuordnung von Bitfolge und Bedeutung
- kodieren: Zahl, Zeichen oder Farbe in Bitfolge umsetzen
- dekodieren: Bitfolge zurück in Zahl, Zeichen, Farbe
- Dualzahl: Zahl im Zweiersystem, zum Rechnen
- Wertebereich: kleinster bis größter speicherbarer Wert
- Zeichensatz: ordnet jedem Zeichen eine Zahl zu
- UTF-8: speichert Unicode in 1 bis 4 Byte

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es keine echte Aufgabe. Der Prüfungskatalog nennt ASCII, Unicode und Dualzahlen für Teil 1 nicht ausdrücklich; Anknüpfungspunkte sind Datenmengen digitalisierter Dokumente und Datentypen beim Programmieren (Text gegen Ganzzahl).
- Zu erwarten ist höchstens eine kleine Teilaufgabe in einem Kundenszenario: falsch angezeigte Umlaute, ein zu kleines Zahlenfeld, eine als Text gelieferte Zahl. Wahrscheinliche Operatoren: erklären, erläutern, beurteilen, dazu eine kurze Rechnung zum Wertebereich; 2–4 Punkte.
- Gezählt wird die Ursache über den Code (Kodierung beim Speichern, Zeichensatz beim Lesen), nicht die bloße Feststellung „Zeichensalat“.

**Fallen:**
- Als Höchstwert 2ⁿ statt 2ⁿ − 1 nennen.
- Den Code eines Ziffernzeichens mit dem Wert der Ziffer gleichsetzen: Das Zeichen „4“ hat in ASCII einen ganz anderen Code als 4.
- Übersehen, dass Groß- und Kleinbuchstabe verschiedene Codes haben.
- Reines ASCII als Lösung für Umlautprobleme vorschlagen: Umlaute und ß lassen sich darin gar nicht speichern, aus dem Anzeigefehler würde ein Datenverlust.
- Nur „verschiedene Programme zeigen es verschieden an“ oder „falscher Zeichensatz“ sagen, ohne den Code und die Zahl der Byte zu erklären.
- Bei der Feldgröße Zeichen und Byte gleichsetzen: In UTF-8 kann ein Text mehr Byte haben als Zeichen.
