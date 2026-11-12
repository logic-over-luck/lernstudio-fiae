Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Variablen, Datentypen und Ausdrücke: Gültigkeit, Konstanten, Zuweisung, Rangfolge

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

## Stoff: Variablen, Datentypen und Ausdrücke: Gültigkeit, Konstanten, Zuweisung, Rangfolge

Ziel: Gültigkeitsbereich, Datentypen, Konstanten und Typumwandlung erklären und Zuweisungen und Ausdrücke nach der Rangfolge der Operatoren auswerten.

Das muss ich können:

### K1 – Gültigkeitsbereich: global und lokal (Stufe 2 Verstehen)
Du kannst den Gültigkeitsbereich einer Variablen erklären: Eine global, also außerhalb aller Funktionen angelegte Variable ist im ganzen Programm bekannt, eine lokal in einer Funktion oder einem Block angelegte nur dort, sodass gleiche Namen in verschiedenen Funktionen sich nicht stören.

Erklärung:
Jeder Name gilt nur in einem bestimmten Bereich des Programms, seinem **Gültigkeitsbereich**.
- **Global:** außerhalb aller Funktionen angelegt, überall lesbar. Für Konstanten wie einen Steuersatz praktisch.
- **Lokal:** in einer Funktion oder einem Block angelegt; außerhalb unbekannt und nach dem Ende der Funktion verschwunden.
- Zwei Funktionen dürfen je eine lokale Variable `summe` haben, ohne sich zu stören.
Globale **Variablen** sparsam einsetzen: Wenn jede Funktion sie ändern kann, ist ein Fehler schwer zu finden.
Beispiel: Wird `i` als Schleifenzähler in einer Funktion angelegt, führt ein Zugriff auf `i` im Hauptprogramm zu einem Fehler.

### K2 – Datentyp: Wertebereich, Speicher, Operationen (Stufe 2 Verstehen)
Du kannst erklären, was der Datentyp einer Variablen festlegt: welche Werte sie aufnehmen kann (Wertebereich), wie viel Speicher sie belegt und welche Operationen mit ihr erlaubt sind, etwa Rechnen mit Zahlen oder Verketten von Text.

Erklärung:
Eine Variable ist ein benannter Speicherplatz. Ihr **Datentyp** bestimmt drei Dinge:
- **Wertebereich:** z. B. nur ganze Zahlen, nur wahr/falsch, beliebiger Text.
- **Speicherbedarf:** Ein großer Zahlentyp belegt mehr Bytes als ein kleiner.
- **Erlaubte Operationen:** Mit Zahlen rechnest du, Texte verkettest du, Wahrheitswerte verknüpfst du mit UND/ODER.
Deshalb liefert `"3" + "4"` bei Text `"34"`, bei Ganzzahlen `3 + 4` dagegen `7`.

### K5 – Deklaration und Initialisierung (Stufe 2 Verstehen)
Du kannst Deklaration und Initialisierung einer Variablen unterscheiden: Bei der Deklaration wird sie vor der ersten Verwendung mit Namen und Datentyp angelegt, bei der Initialisierung bekommt sie ihren ersten Wert; beides kann in einer Anweisung geschehen.

Erklärung:
- **Deklaration:** Name und Datentyp werden festgelegt, der Speicherplatz wird reserviert. Beispiel: `GANZZAHL anzahl`.
- **Initialisierung:** die erste Wertzuweisung. Beispiel: `anzahl = 0`.
- **Beides zusammen:** `GANZZAHL anzahl = 0`.
Wer eine deklarierte, aber nicht initialisierte Variable liest, bekommt je nach Sprache einen Fehler oder einen zufälligen Wert.
Typischer Fehler im Schreibtischtest: Eine Summenvariable wird nicht mit 0 initialisiert, die Summe stimmt nicht.

### K6 – Konstante gegenüber Variable (Stufe 2 Verstehen)
Du kannst Konstante und Variable unterscheiden: Der Wert einer Konstanten wird einmal festgelegt und darf danach nicht mehr geändert werden; feste Werte wie einen Steuersatz legt man als benannte Konstante (Name meist in Großbuchstaben) an, statt die Zahl mehrfach in den Code zu schreiben.

Erklärung:
- **Variable:** Ihr Wert darf sich während des Programms beliebig oft ändern.
- **Konstante:** Ihr Wert wird **einmal** festgelegt; ein späterer Änderungsversuch ist ein Fehler. Manche Sprachen kennen keine echten Konstanten, dann gilt nur die Namenskonvention.
- **Namenskonvention:** Großbuchstaben, Wörter mit Unterstrich: `MWST_SATZ`, `MAX_VERSUCHE`.
**Warum benannte Konstanten?** Der Code wird lesbarer (`MWST_SATZ` statt `0.19`), und bei einer Änderung passt man nur eine Stelle an statt jede Zahl im Code.
Beispiel: `KONSTANTE MAX_VERSUCHE = 3` begrenzt die Anmeldeversuche.

### K7 – Rangfolge der Operatoren (Stufe 3 Anwenden)
Du kannst den Wert eines Ausdrucks nach der Rangfolge der Operatoren bestimmen: Klammern zuerst, Punkt- vor Strichrechnung, Vergleiche vor UND, UND vor ODER; wie stark NICHT bindet, ist je nach Sprache verschieden, deshalb setzt man dort Klammern.

Erklärung:
Ohne Klammern legt die **Rangfolge** fest, was zuerst ausgewertet wird:
- 1. **Klammern**
- 2. **Punktrechnung:** `*`, `/`, Modulo `%`, dann **Strichrechnung:** `+`, `-`
- 3. **Vergleiche:** `<`, `>`, `==`, `!=` …
- 4. **logisch:** UND vor ODER
Wie stark **NICHT** bindet, hängt von der Sprache ab: In Java oder C bindet `!` stärker als Rechen- und Vergleichszeichen, in Python bindet `not` schwächer als Vergleiche. Darum setzt man bei NICHT Klammern, z. B. `NICHT (a > 5)`.
Beispiel: `a = 2`, `b = 3`: `a + b * 2 > 7 UND a == 2` → `2 + 6 = 8`, `8 > 7` wahr, `a == 2` wahr → **wahr**.

### K8 – Zuweisung und Kurzformen wie += (Stufe 2 Verstehen)
Du kannst eine Zuweisung interpretieren: Erst wird der Ausdruck rechts vom Zuweisungszeichen ausgewertet, dann wird das Ergebnis in der Variablen links gespeichert; x = x + 1 ist deshalb keine Gleichung, sondern erhöht x um 1, und Kurzformen wie x += 5 stehen für x = x + 5.

Erklärung:
Die Zuweisung ist der Grundschritt jedes Schreibtischtests.
- **Rechts zuerst:** Der Ausdruck wird mit den **aktuellen** Werten ausgerechnet.
- **Dann links speichern:** Der alte Wert der Variablen wird überschrieben.
- `x = x + 1` ist kein mathematischer Widerspruch: Mit x = 4 wird rechts 5 berechnet und in x gespeichert.
- **Kurzformen:** `x += 5` → `x = x + 5`, `x -= 2`, `x *= 3`, `x /= 2`, `x %= 3` (Rest) entsprechend.
Beispiel: `summe = 10`, dann `summe += summe * 2` → rechts 10 + 20 = 30, summe = 30.

### K10 – Regeln für gültige Bezeichner (Stufe 3 Anwenden)
Du kannst die Regeln für Bezeichner anwenden: nur Buchstaben, Ziffern und Unterstrich, keine Ziffer am Anfang, kein Schlüsselwort, und in vielen Sprachen zählt die Groß- und Kleinschreibung.

Erklärung:
Ein **Bezeichner** ist der Name einer Variablen, Funktion oder Klasse. Fast alle Sprachen verlangen:
- nur Buchstaben, Ziffern und den Unterstrich `_`, also keine Leerzeichen, Bindestriche oder Sonderzeichen,
- am Anfang keine Ziffer,
- kein **Schlüsselwort** der Sprache wie `if`, `while` oder `class`.
In vielen Sprachen (Java, Python, C) sind `summe` und `Summe` zwei verschiedene Namen.
Beispiel: `anzahl_kunden` und `wert2` sind gültig; `2wert`, `anzahl-kunden` und `class` nicht.

### K11 – Benutzereingabe in Zahl umwandeln (Stufe 2 Verstehen)
Du kannst eingelesene Werte in den benötigten Datentyp umwandeln: Eine Benutzereingabe kommt als Text an und muss vor dem Rechnen ausdrücklich in eine Ganz- oder Gleitkommazahl umgewandelt werden; ist der Text keine Zahl, scheitert die Umwandlung zur Laufzeit.

Erklärung:
Eine Benutzereingabe kommt als Text an und muss vor dem Rechnen ausdrücklich in eine Ganz- oder Gleitkommazahl umgewandelt werden; ist der Text keine Zahl, scheitert die Umwandlung zur Laufzeit – das Programm startet also ohne Fehler und bricht erst ab, wenn es diese Eingabe umwandeln will.
Beispiel: Die Eingaben "12" und "5" ergeben ohne Umwandlung zusammengefügt "125" statt 17; die Umwandlung von "zwölf" in eine Zahl scheitert zur Laufzeit.

## Lehrnotiz: Variablen, Datentypen und Ausdrücke: Gültigkeit, Konstanten, Zuweisung, Rangfolge

**Aufteilung:**
- Zuweisung und Startwert: K8, K5
- Was der Datentyp festlegt, und Eingaben umwandeln: K2, K11
- Pause möglich nach dem Umwandeln der Eingaben.
- Wo ein Name gilt und was fest bleibt: K1, K6
- Gültige Namen: K10
- Ausdrücke auswerten: K7

**Schon geprüft:** Noch nicht geprüft: K1, K2, K5–K8, K10, K11

**Kerngedanken:**
- Das Zuweisungszeichen `=` ist ein Befehl („speichere“), das Vergleichszeichen `==` eine Frage, die wahr oder falsch liefert. Wer das trennt, stolpert nicht über `x = x + 1`.
- „Scheitert zur Laufzeit“ heißt: Das Programm startet ohne Fehler und bricht erst ab, wenn es mit genau diesen Daten an die Stelle kommt. Mit einer anderen Eingabe läuft dasselbe Programm durch.
- Einen gemischten Ausdruck wertet man in festen Runden aus: erst alle Rechnungen, dann alle Vergleiche, dann jeden UND-Teil zu einem Wert zusammenfassen, zuletzt ODER. Gleichrangige Rechenzeichen (etwa `/` und `*`) gelten von links nach rechts.

**Typische Missverständnisse:**
- Viele denken, UND und ODER würden einfach von links nach rechts ausgewertet; richtig ist: UND bindet stärker, auch wenn das ODER weiter vorn steht – das Ergebnis kann sonst kippen.
- Viele denken, ein Name dürfe nicht mit einem Unterstrich beginnen; richtig ist: Verboten ist am Anfang nur die Ziffer.

**Fachwörter:**
- Zuweisung: rechts ausrechnen, links speichern
- Deklaration: Variable mit Namen und Datentyp anlegen
- Initialisierung: erste Wertzuweisung
- Gültigkeitsbereich: Programmteil, in dem ein Name bekannt ist
- Konstante: einmal festgelegter, unveränderlicher Wert
- Bezeichner: Name einer Variablen, Funktion oder Klasse
- Rangfolge: Reihenfolge, in der Operatoren ausgewertet werden

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es keine eigene echte Aufgabe.
- Der Prüfungskatalog nennt „Variablen, Datentypen und -strukturen“, „Fehler in einem gegebenen Quellcode finden“ und „Schreibtischtest mit einem gegebenen Quellcode durchführen“. Der Inhalt steckt also vor allem in Code-Aufgaben.
- Als Erwartung, ohne echte Vorlage: kurze Teilaufgaben an einem Codeausschnitt (ungültige Namen berichtigen, Wert einer Bedingung ermitteln, Folgen einer fehlenden Umwandlung erläutern).

**Fallen:**
- Eine fehlende Initialisierung nur als „Fehler“ benennen, ohne den Grund: Die rechte Seite braucht schon beim ersten Durchlauf einen alten Wert.
- Von den drei Festlegungen des Datentyps den Speicherbedarf vergessen.
- Einer Ganzzahl eine Kommazahl zuweisen: Der Wert liegt außerhalb des Wertebereichs; je nach Sprache gibt es einen Fehler oder die Nachkommastellen gehen verloren.
- Bei einer fehlenden Umwandlung nur die Berichtigung nennen und vergessen, dass die Umwandlung selbst scheitert, wenn kein Zahlentext eingegeben wird.
- Übersehen, dass eine globale Variable jede Änderung behält: Ändert eine Funktion sie, wirkt jeder weitere Aufruf auf den schon geänderten Wert.
- Für die benannte Konstante nur einen der beiden Vorteile nennen oder das Änderungsverbot weglassen.
- Einen Namen nur als ungültig markieren, ohne die verletzte Regel und – wo verlangt – einen gültigen Ersatz zu nennen.
- Eine Strichrechnung zuerst ausführen, weil sie im Ausdruck vorn steht, oder Summanden zusammenziehen, bevor multipliziert ist.
- Beim Auswerten nur das Endergebnis hinschreiben, obwohl die Aufgabe den Weg oder eine Begründung verlangt; dann gehören die Zwischenschritte in der richtigen Reihenfolge dazu.
