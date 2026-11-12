Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Qualität und Test › Qualität sichern und Software testen › Testverfahren: statisch und dynamisch, Black-Box und White-Box

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

## Stoff: Testverfahren: statisch und dynamisch, Black-Box und White-Box

Ziel: Statische und dynamische Testverfahren sowie Black-Box- und White-Box-Test beschreiben und einsetzen. Die begründete Auswahl des Testverfahrens gehört nach PB2.

Das muss ich können:

### K1 – Statische und dynamische Testverfahren (Stufe 2 Verstehen)
Du kannst statische Testverfahren (ohne Ausführung: Review, Schreibtischtest, Codeanalyse) und dynamische Testverfahren (Ausführen mit Testdaten) unterscheiden und je Beispiele nennen.

Erklärung:
- **statisch:** Code wird **nicht ausgeführt** – Review, Schreibtischtest, Codeanalyse (Linter = Werkzeug, das den Quelltext nach Regelverstößen durchsucht)
- **dynamisch:** Code wird **ausgeführt** – mit Testdaten, z. B. Unit-, Integrations-, Systemtest

### K2 – Black-Box- und White-Box-Test: Unterschied (Stufe 2 Verstehen)
Du kannst Black-Box-Test (Funktionstest gegen die Anforderungen ohne Kenntnis des Codes, oft von Personen außerhalb der Entwicklung) und White-Box-Test (Testfälle aus dem inneren Aufbau des Codes, durch das Entwicklungsteam) beschreiben.

Erklärung:
- **Black-Box:** Funktionstest gegen die **Anforderungen**, ohne Kenntnis des Codes – oft von Personen außerhalb der Entwicklung
- **White-Box:** Testfälle aus dem **inneren Aufbau** des Codes (Verzweigungen, Schleifen) – durch das Entwicklungsteam

### K3 – Black-Box- und White-Box-Test: Stärken und Grenzen (Stufe 3 Anwenden)
Du kannst Black-Box- und White-Box-Test mit ihren Stärken und Grenzen einsetzen: Der Black-Box-Test prüft aus Sicht der Anforderungen und findet fehlende Funktionen, zeigt aber nicht, welcher Code ungetestet bleibt; der White-Box-Test deckt den Code systematisch ab, bemerkt aber keine fehlenden Anforderungen.

Erklärung:
Stärken und Grenzen:
- **Black-Box:** findet **fehlende Funktionen**, prüft aus Kundensicht – zeigt aber nicht, welcher Code **ungetestet** bleibt
- **White-Box:** deckt den Code **systematisch** ab – bemerkt aber keine **fehlenden Anforderungen**
Deshalb ergänzen sich beide.

### K4 – Extremwertetest an den Grenzen (Stufe 2 Verstehen)
Du kannst den Extremwertetest erklären: mit den kleinsten und größten zulässigen Werten sowie knapp darüber und darunter testen, weil an Grenzen besonders oft Fehler stecken.

Erklärung:
**Extremwertetest (Grenzwerttest):** mit den kleinsten und größten zulässigen Werten testen – und **knapp darüber und darunter**.
Beispiel Alter 18–65 zulässig: teste 17, 18, 65, 66.
Grund: An Grenzen stecken besonders oft Fehler (`<` statt `<=`).

### K6 – Statisch gegen dynamisch: Vor- und Nachteile (Stufe 2 Verstehen)
Du kannst statische und dynamische Testverfahren nach Vor- und Nachteilen vergleichen: Statische Prüfungen sind schon vor dem Ausführen möglich, finden einen Fehler direkt an seiner Ursache und prüfen auch Konventionen und Wartbarkeit, entdecken aber keine Laufzeitfehler; dynamische Tests finden Laufzeitfehler und prüfen Zusammenspiel und Zeitverhalten, brauchen aber lauffähigen Code mit Testumgebung und zeigen nur das Fehlverhalten, dessen Ursache erst das Debugging findet.

Erklärung:
Beide Verfahren ergänzen sich, weil jedes andere Fehler findet:
- **statisch** (ohne Ausführen): sehr **früh** möglich, auch an Entwürfen; der Fehler wird direkt an der **Ursache** gesehen; prüft auch Konventionen, Design und **Wartbarkeit**; fördert den Wissensaustausch im Team – findet aber **keine Laufzeitfehler** (Fehler, die erst beim Ausführen entstehen, z. B. Speichermangel oder falsches Zeitverhalten) und taugt wenig für das Zusammenspiel ganzer Systeme
- **dynamisch** (mit Ausführen): findet **Laufzeitfehler**, prüft Zusammenspiel und **Zeitverhalten** – braucht aber lauffähigen Code und eine **Testumgebung** und zeigt nur das **Symptom**
Beispiel: Ein Review bemerkt eine fehlende Prüfung auf `null` direkt im Code. Ein dynamischer Test zeigt nur „Absturz beim Speichern“ – wo die Ursache liegt, klärt erst das Debugging (die gezielte Suche nach der Fehlerursache im Code).

### K7 – Black- und White-Box: Zeitpunkt, Pflege, Fehlerort (Stufe 2 Verstehen)
Du kannst Black- und White-Box-Test nach Entstehungszeitpunkt, Pflegeaufwand und Fehlersuche vergleichen: Black-Box-Testfälle lassen sich schon aus der Spezifikation entwerfen und bleiben gültig, solange sich die Anforderungen nicht ändern, zeigen aber nur, dass ein Fehler auftritt, nicht wo er im Code sitzt; White-Box-Testfälle grenzen den Fehler im Code ein, sind aber erst mit fertigem Code vollständig und müssen nach jeder Codeänderung angepasst werden.

Erklärung:
Der Unterschied liegt in der **Grundlage** der Testfälle – daraus folgen Zeitpunkt, Pflege und Fehlersuche (was jede Art abdeckt und übersieht, steht in K3):
- **Black-Box** (Grundlage: Spezifikation, also die festgelegten Anforderungen): Testfälle können **vor** dem Code entstehen und sind **wiederverwendbar**, solange die Anforderungen gleich bleiben. Ein fehlgeschlagener Test sagt aber nicht, **wo** im Code der Fehler liegt.
- **White-Box** (Grundlage: Code): Testfälle zielen auf einzelne Zweige und **lokalisieren** Fehler. Sie sind aber erst mit fertigem Code vollständig, und nach jeder **Codeänderung** stimmt die erreichte Überdeckung (welche Teile des Codes die Tests durchlaufen) nicht mehr – die Testfälle müssen überprüft und angepasst werden.
Beispiel: Wird eine Rabattberechnung intern umgebaut, bleiben die Black-Box-Tests „100 € → 95 €“ gültig, die White-Box-Tests für die alten Verzweigungen nicht.

## Lehrnotiz: Testverfahren: statisch und dynamisch, Black-Box und White-Box

**Aufteilung:**
- Statisch oder dynamisch: K1
- Vor- und Nachteile beider Verfahren: K6
- Black-Box- und White-Box-Test, der Unterschied: K2
- Was jeder der beiden findet und übersieht: K3
- Zeitpunkt, Pflege und Fehlerort: K7 – folgt aus der Grundlage der Testfälle
- Extremwertetest: K4

**Schon geprüft:** In Prüfungen: K2 (2021W) · Noch nicht geprüft: K1, K3, K4, K6, K7

**Kerngedanken:**
- Es gibt hier zwei getrennte Einteilungen. Statisch oder dynamisch fragt nur: Läuft das Programm dabei? Black-Box oder White-Box fragt: Woher kommen die Testfälle, aus den Anforderungen oder aus dem Code?
- Zur Beschreibung von Black-Box- und White-Box-Test gehören für die IHK drei Dinge: Grundlage der Testfälle, Kenntnis des Codes ja oder nein, und wer testet. Die Durchführenden zählen als eigener Punkt.
- Ein White-Box-Test prüft nur, was im Code steht. Für eine Funktion, die nie programmiert wurde, gibt es keinen Code und deshalb keinen Testfall.
- Grenzen gibt es nicht nur am Rand des zulässigen Bereichs, sondern an jeder Schwelle in den Anforderungen („ab … gilt ein anderer Preis“). Auch dort lohnt der Test genau auf und knapp neben der Grenze.

**Typische Missverständnisse:**
- Viele denken, statisch heiße von Hand und dynamisch automatisch; richtig ist: Ein Linter ist automatisch und trotzdem statisch, ein Durchklicken von Hand ist dynamisch.
- Viele denken, wenn jeder Zweig durchlaufen wurde und alle Tests bestehen, sei alles getestet; richtig ist: Fehlende Funktionen und eine falsch gesetzte Grenze in einer Bedingung können trotzdem unbemerkt bleiben.
- Viele denken, Black-Box heiße ohne Plan ausprobieren; richtig ist: Die Testfälle werden gezielt aus der Spezifikation abgeleitet.

**Fachwörter:**
- Review: Kollegen lesen und prüfen Code oder Dokumente
- Schreibtischtest: Code mit Beispielwerten gedanklich Zeile für Zeile durchgehen, ohne ihn auszuführen
- Codeanalyse: Werkzeug durchsucht Quelltext nach Regelverstößen
- Laufzeitfehler: Fehler, der erst beim Ausführen entsteht
- Debugging: gezielte Suche nach der Fehlerursache im Code
- Spezifikation: die festgelegten Anforderungen an die Software
- Überdeckung: welche Teile des Codes die Tests durchlaufen
- Extremwertetest: Test an und knapp neben den Grenzen

**So fragt die IHK:**
- Eine echte Teilaufgabe fragt das Thema direkt: Das Team soll je Release einen Black-Box- und einen White-Box-Test durchführen, verlangt ist „Beschreiben Sie diese beiden Testarten“ (4 Punkte, 2 je Test, Lösung eindeutig).
- Gezählt wird beim Black-Box-Test: Funktionstest, keine Kenntnis der inneren Funktion, durchgeführt von an der Entwicklung unbeteiligten Anwendern. Beim White-Box-Test: Kenntnis des inneren Aufbaus und der inneren Funktion, durchgeführt vom Entwicklungsteam.
- In derselben Aufgabe steht davor eine Stellungnahme (5 Punkte) zum Vorschlag, nur automatische Code-Reviews und Unit-Tests einzusetzen. Wissen über statische und dynamische Verfahren dient dort als Begründung.
- Noch nicht gefragt, aber nach dem Prüfungskatalog zu erwarten (je 2–4 Punkte): „Unterscheiden Sie“ statisch und dynamisch mit Beispielen, „Ermitteln Sie die Testwerte“ für einen Extremwertetest mit Begründung, „Erläutern Sie“ zu Stärken und Grenzen.

**Fallen:**
- Statisch und dynamisch: Statische Verfahren als veraltet abtun, weil „Tests alles finden“. Jedes Verfahren hat blinde Flecken.
- Statisch und dynamisch: Vor- und Nachteile vertauschen, etwa „statisch findet Laufzeitfehler“.
- Statisch und dynamisch: Bei „Vorteil nur dieses Verfahrens“ etwas nennen, das beide können, etwa „findet Fehler“.
- Black-Box und White-Box: Den Black-Box-Test für besser halten, weil er „mehr findet“. Die IHK will lesen, dass sich beide ergänzen.
- Black-Box und White-Box: Nur zuordnen, welcher Test welches Problem aufdeckt, ohne die Begründung über die Grundlage der Testfälle (Anforderungen oder Code).
- Black-Box und White-Box: Nach einem internen Umbau „alle Tests neu schreiben“ antworten, statt die beiden Arten zu unterscheiden.
- Extremwertetest: Nur die beiden Grenzwerte oder nur die Werte knapp außerhalb nennen. Ob die Grenze richtig sitzt, zeigen erst alle vier zusammen.
- Extremwertetest: „Extremwert“ als absurd großen Wert verstehen.
- Extremwertetest: Die Begründung weglassen (an Grenzen häufen sich Fehler).
