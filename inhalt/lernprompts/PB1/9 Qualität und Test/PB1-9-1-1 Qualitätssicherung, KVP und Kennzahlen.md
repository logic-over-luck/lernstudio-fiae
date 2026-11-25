Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Qualität und Test › Qualität sichern und Software testen › Qualitätssicherung, KVP und Kennzahlen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen: gern mit Beispielen aus dem Alltag und dem Warum dahinter.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Bewerte nur, was in der Aufgabe verlangt war. Stimmt der Inhalt und fehlt nur das Fachwort, zählt es als richtig: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Qualitätssicherung, KVP und Kennzahlen

Ziel: Qualitätssichernde Maßnahmen für ein Softwareprojekt beschreiben, zu Vorschlägen begründet Stellung nehmen und die Zielerreichung mit KVP und Kennzahlen messen. PDCA und Soll-Ist-Vergleich kennst du aus AP1.

Das muss ich können:

### K1 – Qualitätssichernde Maßnahmen im Softwareprojekt (Stufe 2 Verstehen)
Du kannst qualitätssichernde Maßnahmen für ein Softwareprojekt beschreiben: standardisiertes Vorgehensmodell, übliche Entwicklungswerkzeuge (IDE, CI/CD), festgelegte Testumgebungen, -verfahren und -daten, Code-Reviews, Vorgaben zur Dokumentation, qualifizierte und zertifizierte Mitarbeiter, Einhaltung gesetzlicher Vorgaben (z. B. Datenschutz).

Erklärung:
Qualitätssichernde Maßnahmen:
- **standardisiertes Vorgehensmodell**
- übliche, möglichst zertifizierte **Werkzeuge** (IDE = Entwicklungsumgebung; CI/CD = jede Änderung wird automatisch gebaut, getestet und ausgeliefert)
- festgelegte **Testumgebungen, -verfahren, -daten**
- **Code-Reviews**
- Vorgaben zur **Dokumentation**
- **qualifizierte**, zertifizierte Mitarbeiter
- Einhaltung **gesetzlicher Vorgaben**, z. B. zum Datenschutz (DSGVO)
Die IHK verlangt „beschreiben“: Sag zu jeder Maßnahme in einem Satz, was sie bewirkt. Beispiele: Mit einem standardisierten Vorgehensmodell arbeiten alle nach denselben Abläufen und vergessen keinen Schritt; mit festgelegten Testumgebungen, -verfahren und -daten sind Tests wiederholbar und vergleichbar; beim Code-Review liest ein anderer Entwickler den Code gegen und findet Fehler, bevor er ausgeliefert wird.

### K2 – Grenzen automatischer Code-Reviews und Unit-Tests (Stufe 4 Beurteilen)
Du kannst Stellung nehmen, ob ausschließlich automatische Code-Reviews und Unit-Tests zur Qualitätssicherung reichen: Sie decken nicht alle Fälle ab (Bedienung, Zusammenspiel der Komponenten, Erfüllung der Anforderungen), deshalb sind weitere, auch manuelle Tests nötig.

Erklärung:
Nein, automatische Reviews und Unit-Tests reichen nicht:
- sie prüfen **einzelne Bausteine** und Regeln im Code
- sie prüfen **nicht**: Bedienung (Usability), **Zusammenspiel** der Komponenten, ob die **Anforderungen** des Kunden erfüllt sind
**Vorteile:** laufen bei jedem Build automatisch mit (CI), sind schnell, beliebig oft wiederholbar und finden Regelverstöße und Regressionen früh und günstig. (Unit-Test = automatischer Test eines einzelnen Bausteins; Build = automatisches Übersetzen und Zusammenbauen des Programms; Regression = neuer Fehler in einem Teil, der vorher funktioniert hat.)
**Gefahr:** trügerische Sicherheit – grüne Tests werden mit fehlerfreier Software verwechselt; ein automatisches Review prüft nur Regeln, nicht Logik und Verständlichkeit.
Deshalb zusätzlich Integrations-, System- und Abnahmetests, auch **manuell**.

### K3 – Kontinuierlicher Verbesserungsprozess (KVP) (Stufe 2 Verstehen)
Du kannst den kontinuierlichen Verbesserungsprozess (KVP) erklären: ständige Verbesserung in kleinen Schritten, an der alle Beteiligten mitwirken.

Erklärung:
**KVP** = kontinuierlicher Verbesserungsprozess:
- **ständig** verbessern, in **kleinen Schritten**
- **alle Beteiligten** wirken mit (auch Entwickler, Anwender)
Beispiel: Nach jedem Release Fehlerursachen besprechen und eine Maßnahme festlegen. Umgesetzt wird KVP mit dem PDCA-Zyklus aus AP1: Er wird immer wieder durchlaufen, jeder Durchlauf ist ein kleiner Verbesserungsschritt.

### K4 – Kennzahlen zur Zielerreichung im Soll-Ist-Vergleich (Stufe 3 Anwenden)
Du kannst Kennzahlen zur Messung der Zielerreichung in der Softwareentwicklung festlegen und im Soll-Ist-Vergleich (Berechnung wie in AP1) anwenden, zum Beispiel gefundene Fehler je Release, Anteil bestandener Testfälle, Bearbeitungszeit von Störungen, Verfügbarkeit.

Erklärung:
**Kennzahl** = eine Zahl, die einen Sachverhalt messbar macht. Mit ihr misst man die Zielerreichung, vergleicht Entwicklungen über die Zeit und erkennt Abweichungen früh.
Beispiele für Kennzahlen:
- gefundene **Fehler je Release**
- **Anteil bestandener Testfälle**
- **Bearbeitungszeit** von Störungen
- **Verfügbarkeit**
Soll-Ist-Vergleich: Abweichung = Ist − Soll, in Prozent vom Soll (wie in AP1). Beispiel: Soll 95 % bestandene Tests, Ist 88 % → Abweichung 88 − 95 = −7 Prozentpunkte; in Prozent vom Soll: −7 / 95 · 100 ≈ −7,4 %, das Ziel ist verfehlt. **Prozentpunkte** sind der einfache Abstand zweier Prozentwerte; „in Prozent vom Soll“ setzt diesen Abstand ins Verhältnis zum Soll.

### K5 – Frühes Testen und steigende Fehlerkosten (Stufe 4 Beurteilen)
Du kannst begründen, warum Tests so früh wie möglich beginnen und das ganze Projekt begleiten: Je später ein Fehler entdeckt wird, desto mehr darauf aufbauende Arbeit muss geändert werden, deshalb steigen die Kosten seiner Behebung von Phase zu Phase und sind im laufenden Betrieb am höchsten.

Erklärung:
**Prinzip:** Ein Fehler wird umso teurer, je später man ihn findet, weil immer mehr Arbeit auf ihm aufbaut.
- in der **Anforderung** beim Review des Pflichtenhefts gefunden: ein Satz wird korrigiert
- erst im **Systemtest** gefunden: Entwurf, Code und Testfälle müssen geändert werden
- erst im **Betrieb** gefunden: zusätzlich Ausfälle beim Kunden, Support-Anfragen, ein Update für alle Installationen, im schlimmsten Fall Datenverlust oder Imageschaden
Deshalb ist Testen **keine Phase am Ende**, sondern begleitet alle Phasen: Anforderungen und Entwürfe werden schon geprüft, bevor Code entsteht (Teststufen im V-Modell, PB1-1).

### K6 – Tests als Stichprobe ohne Beweis der Fehlerfreiheit (Stufe 2 Verstehen)
Du kannst erklären, warum Tests nur Stichproben sind: Sie zeigen, dass die geprüften Testfälle bestehen, beweisen aber nicht, dass die Software fehlerfrei ist; deshalb werden neben den funktionalen auch die nichtfunktionalen Anforderungen geprüft und Tests durch weitere Prüfverfahren wie Reviews ergänzt.

Erklärung:
**Prinzip:** Alle denkbaren Eingaben und Abläufe durchzuprobieren ist praktisch unmöglich – schon eine Methode mit zwei Ganzzahl-Parametern (je 32 Bit) hat 2^64, also rund 18 Trillionen Kombinationen; selbst bei einer Million Tests pro Sekunde bräuchte man dafür über 500 000 Jahre. Ein Test ist deshalb eine **Stichprobe**.
- ein bestandener Test zeigt: **dieser** Fall funktioniert
- er beweist **nicht**, dass keine Fehler mehr da sind – Tests können Fehler nachweisen, nicht ihr Fehlen
Folgen: Testfälle gezielt auswählen (typische Fälle, Grenzen), auch **nichtfunktionale** Anforderungen wie Antwortzeit oder Bedienbarkeit prüfen (schwerer zu messen) und Tests mit **statischen Prüfungen** wie Reviews kombinieren.

## Lehrnotiz: Qualitätssicherung, KVP und Kennzahlen

**Aufteilung:**
- Qualitätssichernde Maßnahmen: K1
- Tests sind nur Stichproben: K6
- Reichen automatische Code-Reviews und Unit-Tests?: K2 – baut auf dem Stichproben-Gedanken auf
- Früh testen und steigende Fehlerkosten: K5
- Kontinuierlicher Verbesserungsprozess: K3
- Kennzahlen im Soll-Ist-Vergleich: K4

**Schon geprüft:** In Prüfungen: K1 (2023S, 2024S), K2 (2021W) · Noch nicht geprüft: K3–K6

**Kerngedanken:**
- Qualitätssichernde Maßnahmen legen vorab fest, wie entwickelt und geprüft wird, damit Qualität nicht vom Zufall abhängt. Bei „beschreiben“ stehen die Maßnahmen nicht in der Aufgabe: Man muss sie wissen, auf das Projekt beziehen und zu jeder in einem Satz sagen, was sie bewirkt.
- Eine Stellungnahme wägt ab: Standpunkt, Vorteile, Grenzen, Gefahr, Folgerung. Der Standpunkt lautet hier: als Baustein sinnvoll, allein nicht ausreichend.
- KVP und PDCA gehören zusammen: Der Zyklus wird immer wieder durchlaufen, und jeder Durchlauf ist ein kleiner Verbesserungsschritt. Die Kennzahlen liefern dafür die Messung: Abweichung erkennen, Ursache klären, Maßnahme festlegen, erneut messen.
- Ist die Kennzahl selbst ein Prozentwert, ist Ist − Soll eine Abweichung in Prozentpunkten. „In Prozent vom Soll“ ist eine zweite, andere Zahl.

**Typische Missverständnisse:**
- Viele denken, Qualitätssicherung heiße, den fertigen Code zu testen; richtig ist: Die Maßnahmen betreffen auch Abläufe, Werkzeuge, Menschen und Gesetze.
- Viele denken, eine positive Abweichung sei gut und eine negative schlecht; richtig ist: Es kommt auf die Richtung der Kennzahl an. Bei bestandenen Testfällen und Verfügbarkeit ist mehr besser, bei Fehlern und Bearbeitungszeit weniger.
- Viele denken, KVP sei ein einmaliges großes Verbesserungsprojekt; richtig ist: Es läuft ständig, in kleinen Schritten und mit allen Beteiligten.

**Fachwörter:**
- Code-Review: Code wird vor der Übernahme geprüft – von anderen Entwicklern oder automatisch durch ein Werkzeug
- CI/CD: automatisches Bauen, Testen und Ausliefern jeder Änderung
- Unit-Test: automatischer Test eines einzelnen Bausteins
- Regression: neuer Fehler in bisher funktionierendem Teil
- KVP: ständige Verbesserung in kleinen Schritten
- Kennzahl: Zahl, die einen Sachverhalt messbar macht
- Stichprobe: geprüft wird nur eine Auswahl von Fällen

**So fragt die IHK:**
- Es gibt drei echte Teilaufgaben, eingebettet in ein App- oder Plattformprojekt.
- Zweimal hieß es „Beschreiben Sie zwei bzw. drei Maßnahmen zur Qualitätssicherung“ (4 bzw. 6 Punkte, also 2 je Maßnahme). Die Lösungshinweise zählen die Maßnahmen aus K1 beispielhaft auf.
- Einmal (5 Punkte, „Stellung nehmen, begründen“) ging es um den Vorschlag, nur automatische Code-Reviews und Unit-Tests einzusetzen. Erwartet wird: Das deckt nicht alle Szenarien ab, weitere, auch manuelle Tests sind nötig, und Vor- und Nachteile bzw. Gefahren sind ausdrücklich benannt. Bewertet wird individuell nach der Begründung.
- KVP, Kennzahlen und Soll-Ist-Vergleich stehen im Prüfungskatalog, wurden aber noch nicht eigens gefragt. Zu erwarten sind „Erläutern Sie“ zum KVP und eine kleine Rechnung mit Bewertung (2–4 Punkte).
- Frühes Testen und „Tests sind Stichproben“ taugen als Begründung in einer Stellungnahme.

**Fallen:**
- Maßnahmen: Nur „testen“ schreiben. Die IHK will festgelegte Testumgebungen, -verfahren und -daten lesen, damit alle gleich und wiederholbar testen.
- Maßnahmen: Dieselbe Maßnahme zweimal in anderen Worten nennen.
- Maßnahmen: Nur Stichworte ohne Wirkung liefern (bringt etwa die Hälfte der Punkte).
- Stellungnahme: Nur „reicht nicht“ schreiben, nur eine Seite betrachten oder die Gefahr und die Folgerung weglassen.
- Stellungnahme: Die Automatik pauschal schlechtreden. Das verschenkt die Punkte für die Vorteile.
- Stichprobe: Nur „Fehler gibt es immer“ schreiben, ohne zu begründen, dass man nicht alle Eingaben durchprobieren kann.
- Früh testen: Nur „später ist teurer“ schreiben, ohne den Grund (darauf aufbauende Arbeit), ohne den Betrieb als teuerste Stelle und ohne die Folgerung, dass Testen alle Phasen begleitet.
- KVP: „kleine Schritte“ oder „alle Beteiligten“ weglassen. Dann fehlt ein Kernpunkt.
- Kennzahlen: Prozentpunkte als Prozent bezeichnen oder durch das Ist statt durch das Soll teilen.
- Kennzahlen: Ein Ziel wie „bessere Qualität“ als Kennzahl nennen. Eine Kennzahl muss messbar sein.
- Kennzahlen: Nach der Bewertung „verfehlt“ aufhören, ohne zu sagen, was folgt (Ursachen klären, Maßnahmen festlegen).
