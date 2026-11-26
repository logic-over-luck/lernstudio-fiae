Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Qualität und Test › Qualität sichern und Software testen › Testverfahren: statisch und dynamisch, Black-Box und White-Box

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K4 – Wie der Extremwertetest einen Grenzfehler aufdeckt: (1) Der Tester liest aus der Anforderung die Grenzen des zulässigen Bereichs ab, bei Alter 18 bis 65 also 18 und 65. (2) Zu jeder Grenze wählt er den Grenzwert selbst und den Nachbarwert außerhalb, also 17 und 18 sowie 65 und 66. (3) Zu jedem Testwert legt er das erwartete Ergebnis fest: 18 und 65 werden angenommen, 17 und 66 abgelehnt. (4) Das Programm wird mit jedem Testwert ausgeführt, und das tatsächliche Ergebnis wird mit dem erwarteten verglichen. (5) Steht im Code fälschlich alter > 18 statt alter >= 18, lehnt das Programm die 18 ab, und nur dieser Testfall schlägt fehl. (6) Lässt der Code fälschlich schon 17 zu (alter >= 17), fällt das nur beim Testwert 17 auf; ein Wert wie 30 besteht in beiden Fällen.

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
