Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: UML-Modellierung › UML-Diagramme in der Tiefe › Aktivitätsdiagramm für umfangreiche Abläufe

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

## Stoff: Aktivitätsdiagramm für umfangreiche Abläufe

Ziel: Umfangreiche Geschäftsabläufe und Anwendungsfälle mit Schwimmbahnen, Verzweigungen, Rücksprüngen und Parallelität als Aktivitätsdiagramm erstellen oder erweitern.

Das muss ich können:

### K1 – Umfangreichen Ablauf als Aktivitätsdiagramm erstellen (Stufe 3 Anwenden)
Du kannst mit den Elementen aus AP1 (Schwimmbahnen, Verzweigungen, Zusammenführungen, Rücksprünge) einen umfangreichen Geschäftsablauf oder den Ablauf eines Anwendungsfalls vollständig als Aktivitätsdiagramm erstellen, zum Beispiel „Messergebnisse speichern“ mit Prüfung der Verbindung, Zwischenspeichern und Ergebnismeldung.

Erklärung:
Mit den Elementen aus AP1 einen **ganzen** Ablauf darstellen:
- Schwimmbahnen für jede beteiligte Rolle/Komponente
- Verzweigungen (Raute, im Belegsatz „Entscheidung“) mit Bedingungen in `[ ]`, Zusammenführung
- Rücksprünge (z. B. Raumbuchung: „Zeitraum prüfen“ → `[nicht verfügbar]` über eine Zusammenführung zurück zu „Anfrage für Zeitraum erstellen“)
Beispiel „Messergebnisse speichern“ (Grundgerüst): Verbindung prüfen → `[keine Verbindung]` Daten intern speichern, `[Verbindung ok]` Daten senden → Zusammenführung → Ergebnismeldung anzeigen. In der Prüfungsaufgabe besteht das Senden aus zwei parallelen Zweigen (aktuelle Daten senden, bei Fehler intern speichern; prüfen, ob gespeicherte Daten vorhanden sind, diese senden und bei Erfolg löschen) – Teilung und Synchronisation: K2. Der Zweig `[keine Verbindung]` läuft dabei an den parallelen Zweigen vorbei und wird erst **nach** der Synchronisation zusammengeführt.

### K2 – Parallele Zweige mit Teilung und Synchronisation (Stufe 3 Anwenden)
Du kannst parallele Zweige mit Teilung und Synchronisation darstellen und in jedem Zweig eigene Verzweigungen einsetzen, die vor der Synchronisation wieder zusammengeführt werden.

Erklärung:
- **Teilung** (Balken): ab hier laufen Zweige **gleichzeitig**
- **Synchronisation** (Balken): erst weiter, wenn **alle** Zweige fertig sind
- Verzweigungen innerhalb eines Zweigs müssen **vor** der Synchronisation wieder zusammengeführt werden
Häufiger Fehler: Raute statt Balken für Parallelität.

### K3 – Begonnenes Aktivitätsdiagramm nach Notizen erweitern (Stufe 3 Anwenden)
Du kannst ein begonnenes Aktivitätsdiagramm nach Notizen zu einem Arbeitsablauf erweitern, auch mit gleichzeitig ausgeführten Tätigkeiten verschiedener Personen und einem nur unter Bedingung ausgeführten Schritt.

Erklärung:
Begonnenes Diagramm erweitern:
- Notizen Satz für Satz in Aktionen übersetzen
- gleichzeitige Tätigkeiten verschiedener Personen → **Teilung/Synchronisation** über die Schwimmbahnen
- „nur wenn …“ → **Verzweigung** mit Bedingung und anschließender Zusammenführung
Vorhandene Elemente und Bezeichnungen übernehmen.

## Lehrnotiz: Aktivitätsdiagramm für umfangreiche Abläufe

**Aufteilung:**
- Einen ganzen Ablauf erstellen, mit Bahnen, Verzweigungen und Rücksprung: K1
- Parallele Zweige mit eigenen Verzweigungen: K2
- Ein begonnenes Diagramm nach Notizen erweitern: K3

**Schon geprüft:** In Prüfungen: K1 (2022W, 2023W), K2 (2022W, 2023W), K3 (2025S)

**Kerngedanken:**
- Neu gegenüber AP1 ist kein Symbol, sondern der Umfang: ein ganzer Ablauf auf einem Blatt. Die einzelnen Elemente lehrt der AP1-Stichpunkt „Aktivitätsdiagramm“; hier werden sie kombiniert.
- Die Synchronisation wartet auf alle eingehenden Kanten (UND). Die Zusammenführung leitet weiter, sobald eine Kante ankommt (ODER). Darum darf aus jedem parallelen Zweig genau eine Kante in den Balken laufen.
- Ein Rücksprung führt über eine Zusammenführung vor die Aktion, die wiederholt wird. Führt er direkt auf die Entscheidungsraute, wird die Prüfaktion davor nicht wiederholt, und die Entscheidung fällt mit denselben Daten wieder gleich aus.
- Läuft eine Alternative ganz an den parallelen Zweigen vorbei, wird sie erst nach der Synchronisation mit einer Raute mit dem Hauptfluss zusammengeführt.

**Typische Missverständnisse:**
- Viele denken, der Synchronisationsbalken sammle einfach ein, was ankommt. Richtig ist: Von zwei Ausgängen einer Verzweigung wird immer nur einer durchlaufen. Laufen beide einzeln in den Balken, kommt einer nie an, und der Ablauf bleibt stehen.
- Viele denken, eine Aktion gehöre in die Bahn dessen, den sie betrifft. Richtig ist: Sie steht in der Bahn dessen, der sie ausführt. Eine Anzeige der App gehört zum System, ein Handgriff des Kunden zum Kunden.

**Fachwörter:**
- Schwimmbahn: Spalte für einen Beteiligten
- Aktion: ein Arbeitsschritt, abgerundetes Rechteck
- Verzweigung: Raute, Ausgänge mit Bedingungen
- Zusammenführung: Raute, vereint alternative Wege
- Rücksprung: Kante zurück vor eine frühere Aktion
- Teilung: Balken, Zweige laufen gleichzeitig
- Synchronisation: Balken, wartet auf alle Zweige

**So fragt die IHK:**
- Dreimal vorgekommen, jeweils als große Zeichenaufgabe mit 14 bis 17 Punkten. Die Notation liegt im Belegsatz bei, auch Konnektor und Ablaufende.
- „Erstellen“ auf einer Zeichenfläche mit zwei vorgegebenen Schwimmbahnen: ein Buchungsprozess mit Rücksprung nach einer Prüfung, zwei parallel geprüften Anforderungen, einer gemeinsamen Entscheidung nach der Synchronisation und einem zweiten Rücksprung. Abbruchmöglichkeiten waren ausdrücklich ausgeschlossen. Je Aktivität gab es 1 Punkt, für die richtige Verteilung auf die Bahnen 1 Punkt und je Knoten 0,5 Punkte. Start, Ende, Rauten und Balken zählen also einzeln.
- „Darstellen“ auf freier Fläche: der Ablauf eines Anwendungsfalls mit einer Eingangsprüfung, deren einer Ausgang an den parallelen Zweigen vorbeiläuft und erst nach der Synchronisation zusammengeführt wird. Die zwei parallelen Zweige haben je eine eigene Entscheidung.
- „Erweitern“: ein begonnenes Diagramm nach Notizen zu einem Arbeitsablauf, mit gleichzeitigen Tätigkeiten zweier Berufsgruppen und einem nur bei Bedarf ausgeführten Schritt. Dazu gibt es keine veröffentlichten Lösungshinweise.
- Die Lösungen sind „beispielhaft“; andere richtige Lösungen zählen.

**Fallen:**
- Abbruchmöglichkeiten oder zusätzliche Aktionen einzeichnen, die der Text nicht nennt.
- Bedingungen an einem Ausgang der Raute weglassen oder Bedingungen wählen, die sich nicht ausschließen.
- Die Zusammenführung weglassen und zwei Kanten direkt in dieselbe Aktion führen.
- Einen Satz des Textes nicht abbilden oder einen Zweig offen enden lassen.
- Die Zusammenführung eines Zweigs erst hinter die Synchronisation setzen.
- Eine Aktion, die im Zweig in jedem Fall folgt, in nur einen Ausgang der Raute setzen statt hinter die Zusammenführung.
- Die Aktion, die erst nach beiden Zweigen kommt, schon vor der Synchronisation beginnen lassen.
- Einen parallelen Zweig mit einem Ablaufende schließen statt mit der Kante in die Synchronisation.
- Auf die Frage nach dem Grund der Zusammenführung nur „Rauten führt man immer zusammen“ antworten.
- Beim Erweitern den bisherigen Endknoten stehen lassen und die Erweiterung daneben hängen, statt am letzten vorhandenen Element anzuschließen.
- Beide gleichzeitigen Zweige in dieselbe Bahn setzen, obwohl zwei Personen arbeiten.
- Einen Schritt, der nur manchmal passiert, ohne Raute einzeichnen oder als eigenen parallelen Zweig zeichnen.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird (wie im Belegsatz und in den IHK-Lösungen):
- Startknoten: ausgefüllter Kreis.
- Aktion: Rechteck mit abgerundeten Ecken, steht in der Bahn des Ausführenden. Der Name gilt sinngemäß.
- Entscheidung (im Stoff: Verzweigung): Raute mit einem Eingang und mehreren Ausgängen. An jedem Ausgang steht eine Bedingung in eckigen Klammern; die Bedingungen schließen sich aus.
- Zusammenführung: Raute mit mehreren Eingängen und einem Ausgang.
- Teilung: Balken mit einem Eingang und mehreren Ausgängen.
- Synchronisation: Balken mit mehreren Eingängen und einem Ausgang. Bei Zweigen in verschiedenen Bahnen reichen die Balken über die Bahnen.
- Ein Balken, der als Raute gezeichnet ist, zählt nicht.
- Schwimmbahnen: senkrechte Spalten mit dem Namen des Beteiligten.
- Endknoten: Kreis mit ausgefülltem Kreis darin; er beendet den ganzen Ablauf.
- Ablaufende: Kreis mit X; es beendet nur den eigenen Zweig.
- Rücksprung: Kante zurück in eine Zusammenführung vor der zu wiederholenden Aktion, nicht direkt in die Aktion.
