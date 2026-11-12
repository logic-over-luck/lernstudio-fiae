Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Bausteine eines Programms: Variablen, Datentypen, Datenstrukturen, Kontrollstrukturen, Prozeduren und Funktionen

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

## Stoff: Bausteine eines Programms: Variablen, Datentypen, Datenstrukturen, Kontrollstrukturen, Prozeduren und Funktionen

Ziel: Die Begriffe kennen, die du zum Lesen von Code brauchst, und sie im Code erkennen.

Das muss ich können:

### K1 – Variable und grundlegende Datentypen (Stufe 2 Verstehen)
Du kannst erklären, was eine Variable ist, und die Datentypen für Ganzzahl, Kommazahl, Wahrheitswert und Text unterscheiden.

Erklärung:
Eine **Variable** ist ein benannter Speicherplatz für einen Wert, der sich ändern kann. Der **Datentyp** legt fest, welche Werte darin stehen dürfen:
- **Ganzzahl** (Integer, `int`): z. B. Anzahl Mitarbeiter: 12
- **Kommazahl** (Gleitkommazahl, `float`/`double`): z. B. Gewicht: 72.5
- **Wahrheitswert** (Boolean, `bool`): wahr oder falsch
- **Text** (String): z. B. "Meier"

### K2 – Array und Index (Stufe 2 Verstehen)
Du kannst erklären, was ein Array ist und wie über den Index auf ein Element zugegriffen wird.

Erklärung:
Ein **Array** speichert **mehrere Werte desselben Typs** unter einem Namen. Auf ein einzelnes Element greifst du über seinen **Index** zu.
Beispiel: `zahlen = [4, 7, 9, 2]`
- Der Index beginnt meist bei **0**: `zahlen[0]` ist 4.
- Das dritte Element ist `zahlen[2]` = 9.
- Das letzte Element hat den Index **Länge − 1**: `zahlen[3]` = 2.

### K3 – Verzweigung, Schleife und Mehrfachauswahl (Stufe 2 Verstehen)
Du kannst Verzweigung und Schleife im Code unterscheiden, auch eine Mehrfachauswahl.

Erklärung:
- **Verzweigung:** führt je nach Bedingung **einen** Zweig **einmal** aus – `if`/`else` bzw. Wenn/Sonst.
- **Mehrfachauswahl:** wählt aus mehreren Fällen anhand eines Werts – `switch`/`case`. Sie ist keine eigene Grundstruktur, sondern eine Form der Verzweigung.
- **Schleife:** **wiederholt** einen Block – `for`, `while`, `do … while` bzw. Für, Solange, Wiederhole.
Erkennungsmerkmal: Geht der Ablauf nach dem Block zurück nach oben? Dann ist es eine Schleife.

### K5 – Zähler-, kopf- und fußgesteuerte Schleifen (Stufe 2 Verstehen)
Du kannst zählergesteuerte, kopfgesteuerte und fußgesteuerte Schleifen unterscheiden.

Erklärung:
- **Zählergesteuert** (`for`): Die Anzahl der Durchläufe **steht vorher fest**. „Für i von 1 bis 10“.
- **Kopfgesteuert** (`while`): Die Bedingung wird **vor** jedem Durchlauf geprüft – ist sie gleich zu Beginn falsch, läuft die Schleife **gar nicht**.
- **Fußgesteuert** (`do … while`): Die Bedingung wird **nach** dem Durchlauf geprüft – die Schleife läuft **mindestens einmal**.

### K6 – Funktion und Prozedur (Stufe 2 Verstehen)
Du kannst erklären, was eine Funktion ist (ein benannter Codeblock mit Parametern und Rückgabewert), und sie von einer Prozedur ohne Rückgabewert unterscheiden.

Erklärung:
- **Funktion:** ein benannter Codeblock, der Werte über **Parameter** bekommt und einen **Rückgabewert** liefert. Beispiel: `brutto(netto)` gibt `netto * 1.19` zurück.
- **Prozedur:** wie eine Funktion, aber **ohne Rückgabewert** (`void`) – sie tut etwas, z. B. eine Meldung ausgeben.

### K7 – Vergleichs-, logische und Modulo-Operatoren (Stufe 2 Verstehen)
Du kannst Bedingungen und Rechnungen mit Vergleichsoperatoren (gleich, ungleich, kleiner, größer), logischen Operatoren (UND, ODER, NICHT) und dem Modulo-Operator (Rest einer ganzzahligen Division) interpretieren.

Erklärung:
**Vergleich:** `==` gleich, `!=` ungleich, `<` kleiner, `>` größer, `<=` und `>=`. Im Pseudocode der Prüfung steht für „gleich“ auch ein einfaches `=` oder das Wort „gleich“ – in einer Bedingung ist das ein Vergleich, keine Zuweisung.
**Logisch:**
- **UND:** wahr, wenn **beide** Teile wahr sind
- **ODER:** wahr, wenn **mindestens einer** wahr ist
- **NICHT:** kehrt um
**Modulo** `%`: der **Rest** einer ganzzahligen Division.
- `17 % 5` = 2 (17 = 3 × 5 + 2)
- Gerade Zahl prüfen: `x % 2 == 0`

### K8 – Sequenz als dritte Grundstruktur (Stufe 2 Verstehen)
Du kannst die Sequenz als dritte Grundstruktur neben Verzweigung und Schleife erklären: Anweisungen ohne Bedingung und ohne Wiederholung laufen von oben nach unten je genau einmal ab, und aus diesen drei Strukturen lässt sich jeder Ablauf zusammensetzen.

Erklärung:
Jedes Programm besteht aus drei Grundstrukturen.
- **Sequenz:** Anweisungen wie Zuweisung, Berechnung, Ein- und Ausgabe stehen hintereinander und werden **der Reihe nach je einmal** ausgeführt.
- **Verzweigung:** Eine Bedingung entscheidet, welcher Zweig läuft.
- **Schleife:** Anweisungen werden wiederholt, solange eine Bedingung gilt.
Die Strukturen werden ineinander geschachtelt: Im Zweig einer Verzweigung steht wieder eine Sequenz, darin vielleicht eine Schleife.
Beispiel Sequenz: `netto = EINGABE()` – `brutto = netto * 1.19` – `AUSGABE(brutto)`.

### K9 – Blöcke durch Klammern, Wörter oder Einrückung (Stufe 2 Verstehen)
Du kannst erklären, wie Anweisungen zu Blöcken zusammengefasst werden – je nach Sprache durch Klammern, durch Anfangs- und Endwörter oder durch gleiche Einrückungstiefe – und an den Blöcken ablesen, welche Anweisungen zu einer Verzweigung oder Schleife gehören.

Erklärung:
Ein **Block** ist eine Gruppe von Anweisungen, die zusammen zu einer Verzweigung, einer Schleife oder einer Funktion gehören.
- In vielen Sprachen begrenzen **geschweifte Klammern** `{ … }` den Block; die Einrückung ist dort nur Lesehilfe.
- Andere Sprachen und Pseudocode nutzen **Anfangs- und Endwörter** wie `WENN … ENDE WENN` oder `begin … end`.
- In manchen Sprachen (z. B. Python) bestimmt allein die **Einrückungstiefe**, was zum Block gehört.
Blöcke lassen sich verschachteln. Beispiel: Steht `zaehler = zaehler + 1` eingerückt unter `SOLANGE`, wird es in jedem Durchlauf ausgeführt; steht es danach auf der Ebene von `SOLANGE`, nur einmal nach der Schleife.

### K10 – WENN-Kette gegenüber unabhängigen WENN-Anweisungen (Stufe 2 Verstehen)
Du kannst eine Kette aus WENN, SONST WENN und SONST von mehreren unabhängigen WENN-Anweisungen unterscheiden: In der Kette werden die Bedingungen der Reihe nach geprüft und nur der erste zutreffende Zweig läuft, bei unabhängigen WENN-Anweisungen wird jede Bedingung geprüft, sodass mehrere Zweige laufen können.

Erklärung:
Ob Bedingungen verkettet oder unabhängig sind, ändert das Ergebnis.
- **Kette:** Sobald eine Bedingung zutrifft, läuft ihr Zweig, und **alle weiteren werden übersprungen**. Trifft keine zu, läuft der SONST-Zweig.
- **Unabhängige WENN:** Jede Bedingung wird **für sich** geprüft; mehrere Zweige können nacheinander laufen.
Beispiel mit `punkte = 95`:
- Kette `WENN punkte >= 92: note = 1 SONST WENN punkte >= 81: note = 2` → note = 1.
- Zwei unabhängige WENN mit denselben Bedingungen → erst note = 1, dann wird sie mit 2 überschrieben.

## Lehrnotiz: Bausteine eines Programms: Variablen, Datentypen, Datenstrukturen, Kontrollstrukturen, Prozeduren und Funktionen

**Aufteilung:**
- Daten: Variable und Datentypen K1; Array und Index K2
- Ablauf: die drei Grundstrukturen K8, K3; Blöcke K9; Arten von Schleifen K5
- Pause möglich nach den Arten von Schleifen.
- Bedingungen lesen: Operatoren K7; Kette oder unabhängige WENN K10
- Funktion und Prozedur K6

**Schon geprüft:** In Prüfungen: K2 (2022H) · Noch nicht geprüft: K1, K3, K5–K10

**Kerngedanken:**
- Die Mehrfachauswahl ist keine vierte Grundstruktur, sondern eine Form der Verzweigung: Gedacht ist, dass genau ein Fall genau einmal läuft. In C und Java gilt das nur mit `break` am Ende jedes Falls; sonst laufen auch die folgenden Fälle.
- Ein Vergleich liefert selbst einen Wahrheitswert. Deshalb kann als Bedingung auch eine Variable vom Typ Wahrheitswert allein stehen, ohne Vergleichszeichen.
- Parameter sind der Weg in die Funktion hinein, der Rückgabewert ist der Weg hinaus: ein Wert, mit dem der Aufrufer weiterarbeiten kann.
- Hier geht es um das Erkennen und Benennen in gegebenem Code. Rangfolge, Gültigkeitsbereich und Zuweisung gehören zum Stichpunkt über Variablen und Ausdrücke.

**Typische Missverständnisse:**
- Viele denken, ein Baustein, der etwas auf dem Bildschirm oder Drucker ausgibt, liefere damit einen Rückgabewert; richtig ist: Eine Ausgabe geht an den Benutzer, der Aufrufer bekommt nichts zurück – das ist eine Prozedur.
- Viele denken, ODER heiße „entweder – oder“; richtig ist: Sind beide Teile wahr, ist ODER ebenfalls wahr.
- Viele denken, in einer Verzweigung mit mehreren Zweigen laufe jede Zeile einmal; richtig ist: Von den Zweigen läuft nur einer, die übrigen gar nicht.

**Fachwörter:**
- Datentyp: legt fest, welche Werte erlaubt sind
- Index: Positionsnummer eines Elements im Array
- Sequenz: Anweisungen nacheinander, je einmal
- Mehrfachauswahl: Verzweigung nach dem Wert einer Variablen
- Parameter: Wert, der beim Aufruf übergeben wird
- Rückgabewert: Ergebnis, das die Funktion zurückliefert
**So fragt die IHK:**
- Echte Aufgaben fragen die Bausteine selten als Begriffe ab, sie setzen sie in Code-Aufgaben voraus.
- Echte Vorlage: Eine Funktion bekommt ein Array mit vier Werten, bei dem jeder Index eine feste Bedeutung hat; dazu sind Schnittstellenfunktionen vorgegeben, eine davon liefert einen Status als Wahrheitswert. Operatoren „erstellen/ergänzen“, 7 Punkte, zeilenweise gewertet: Funktionsaufruf mit den richtigen Indizes, Schleife mit Zähler und Bedingung, Statusabfrage und Zählererhöhung im Rumpf.
- Aus dem Prüfungskatalog ableitbar, ohne echte Vorlage: kurze Fragen nach dem passenden Datentyp, nach der Art einer Kontrollstruktur oder nach dem Unterschied zweier Bausteine.

**Fallen:**
- Was in Anführungszeichen steht, ist Text, auch wenn es nur aus Ziffern besteht.
- Für einen Wert mit Nachkommastellen (Preis, Gewicht) eine Ganzzahl wählen.
- Die Variable nur mit „speichert einen Wert“ erklären; dazu gehören der Name und dass der Wert sich ändern kann.
- Den Index ab 1 zählen oder auf den Index zugreifen, der gleich der Länge ist – dieses Element gibt es nicht.
- Eine Mehrfachauswahl nur „Verzweigung“ oder eine Schleife nur „Schleife“ nennen, wo die genaue Art verlangt ist.
- `>` und `<` schließen den Grenzwert aus: Ein Wert ist nicht größer als er selbst; erst `>=` lässt ihn zu.
- Bei einer Prüfung wie `x % n == 0` nur den Rest ausrechnen, aber nicht sagen, was geprüft wird: ob x ohne Rest durch n teilbar ist.
- Parameter und Rückgabewert verwechseln.
