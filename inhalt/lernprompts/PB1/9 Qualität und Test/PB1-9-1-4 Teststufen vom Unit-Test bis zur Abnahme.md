Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Qualität und Test › Qualität sichern und Software testen › Teststufen: vom Unit-Test bis zur Abnahme

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen. Wo etwas abläuft oder funktioniert (Technik, Verfahren, Protokoll, Rechenweg), erklär zuerst Schritt für Schritt, was passiert, mit den richtigen Begriffen und dem Warum dahinter. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Die Erklärungen im Stoff sind das Minimum für die Prüfung, nicht die Grenze. Wo dort nur steht, was es gibt, erklär mir auch, wie es funktioniert, und trenn sichtbar, was die IHK lesen will und was nur Hintergrund zum Verstehen ist. Stehen in der Lehrnotiz „Abläufe zum Verstehen“, bau sie in deine Erklärung ein.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag – klein heißt wenig auf einmal, nicht oberflächlich. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
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

## Stoff: Teststufen: vom Unit-Test bis zur Abnahme

Ziel: Komponenten-, Integrations-, System- und Abnahmetest unterscheiden, Unit-, End-to-End-, Last- und Performancetest einordnen und die Teststufen eines Konzepts beurteilen. Die Zuordnung zu den Entwurfsstufen zeigt das V-Modell in PB1-1.

Das muss ich können:

### K1 – Teststufen vom Komponenten- bis zum Abnahmetest (Stufe 2 Verstehen)
Du kannst Komponententest (auch Modul- oder Unit-Test: ein Baustein wird getrennt vom Rest automatisch und beliebig oft wiederholbar geprüft), Integrationstest, Systemtest und Abnahmetest unterscheiden und in die richtige Reihenfolge bringen.

Erklärung:
Reihenfolge der Teststufen:
- **Komponententest** (Modul-/Unit-Test): ein Baustein allein, automatisch, beliebig oft wiederholbar
- **Integrationstest:** Zusammenspiel der schon einzeln getesteten Bausteine, Schwerpunkt **Schnittstellen**
- **Systemtest:** das ganze System gegen die Anforderungen, in Testumgebung
- **Abnahmetest:** durch den Kunden, Grundlage der Abnahme

### K2 – Last- und Performancetest (Stufe 2 Verstehen)
Du kannst Lasttest (erwartete Last), Belastungstest (Spitzenlast bis über die Belastungsgrenze) und Performancetest erklären: Verhalten, Antwortzeiten und Ressourcenverbrauch werden bei erwarteter Last und bei Spitzenlast gemessen, um Engpässe vor dem Betrieb zu finden.

Erklärung:
- **Lasttest:** Verhalten bei der **erwarteten Last** (geplante Zahl gleichzeitiger Nutzer)
- **Belastungstest (Stresstest):** Verhalten bei **Spitzenlast**, an und über der Belastungsgrenze – wann bricht das System ein, erholt es sich danach?
- **Performancetest:** **Antwortzeiten** und **Ressourcenverbrauch** (CPU, Speicher) messen
Ziel: **Engpässe** finden, bevor die Software in Betrieb geht.

### K3 – End-to-End-Test aus Benutzersicht (Stufe 2 Verstehen)
Du kannst den End-to-End-Test erklären: Ein vollständiger Ablauf wird aus Sicht des Benutzers durch das ganze System geprüft, von der Oberfläche bis zur Datenbank.

Erklärung:
**End-to-End-Test:** ein **vollständiger Ablauf** aus Sicht des Benutzers durch das **ganze System**, von der Oberfläche bis zur Datenbank.
Beispiel: anmelden → Artikel in den Warenkorb → bestellen → Bestätigung kommt an.

### K4 – Nötige Teststufen eines Testkonzepts (Stufe 4 Beurteilen)
Du kannst beurteilen, welche Teststufen ein Testkonzept für eine Anwendung vorsehen muss, und begründen, warum keine Stufe eine andere ersetzt.

Erklärung:
Ein Testkonzept braucht **alle Stufen**, weil jede etwas anderes findet:
- Unit-Tests: Fehler in einzelnen Funktionen
- Integration: Fehler an Schnittstellen
- System: fehlende oder falsche Anforderungen im Ganzen, Last
- Abnahme: Erwartungen des Kunden
Fehlt eine Stufe, bleiben genau diese Fehler unentdeckt.

### K6 – Testverfahren, Testarten und Teststufen (Stufe 2 Verstehen)
Du kannst Testverfahren (wie getestet wird, z. B. statisch oder dynamisch), Testarten (was geprüft wird, z. B. Funktion oder Performance) und Teststufen (in welchem Entwicklungsstand getestet wird, vom Komponenten- bis zum Abnahmetest) unterscheiden; dazu gehört der Grundsatz, dass ein Testobjekt möglichst nicht von seinem Entwickler, sondern von unabhängigen Personen getestet wird, weil der Entwickler eigene Denkfehler leicht übersieht.

Erklärung:
Drei Begriffe ordnen das ganze Testen – jeder beantwortet eine andere Frage:
- **Testverfahren – wie?** statisch (ohne Ausführen: Review, Codeanalyse) oder dynamisch (mit Ausführen: Black-Box, White-Box)
- **Testarten – was?** welches Qualitätsmerkmal geprüft wird: Funktion, Zuverlässigkeit, Effizienz (Performance- und Lasttest), Benutzbarkeit …
- **Teststufen – wann?** in welchem Entwicklungsstand: Komponenten-, Integrations-, System-, Abnahmetest
Jeder Test lässt sich in allen drei Richtungen einordnen: Ein Lasttest ist eine Testart (Effizienz), läuft dynamisch und meist auf der Stufe Systemtest.
Die IHK trennt die Begriffe nicht immer scharf: In 2021W-PB1-A4-d heißen Black-Box- und White-Box-Test „Testarten“.
**Unabhängig testen:** Wer den Code geschrieben hat, prüft unbewusst nur, was er sich selbst gedacht hat; ein Missverständnis der Anforderung findet er so nicht. Deshalb testen möglichst andere Personen.

## Lehrnotiz: Teststufen: vom Unit-Test bis zur Abnahme

**Aufteilung:**
- Die vier Teststufen und ihre Reihenfolge: K1
- End-to-End-Test: K3
- Last-, Belastungs- und Performancetest: K2
- Verfahren, Art, Stufe – und wer testet: K6
- Ein Testkonzept beurteilen: K4 – baut auf allem Vorigen auf

**Schon geprüft:** Noch nicht geprüft: K1–K4, K6

**Kerngedanken:**
- Getestet wird vom Kleinen zum Ganzen. Ein Fehler, der auf einer kleinen Stufe auffällt, ist früh und eindeutig einem Baustein zugeordnet; der Systemtest zeigt nur, dass etwas nicht stimmt, aber nicht, wo.
- Der Integrationstest prüft das Zusammenspiel bereits getesteter Bausteine an ihren Schnittstellen. Der Systemtest prüft das fertige Ganze gegen die Anforderungen.
- Wird geprüft, ob zwei Bausteine über ihre Schnittstelle richtig zusammenarbeiten (einer ruft den anderen auf), ist das ein Integrationstest. End-to-End ist erst der ganze Weg eines Benutzers, von der ersten Eingabe bis zu einem sichtbaren Ergebnis.
- Beurteilen heißt hier: ein Urteil abgeben und für jede fehlende Stufe sagen, welche Fehler dann unentdeckt bleiben. Dazu gehört, warum die Abnahme die fehlenden Stufen nicht ersetzt.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Ablauf eines Last- und Belastungstests mit Messung: (1) Die Tester leiten aus den Anforderungen ein Lastprofil ab: erwartete Zahl gleichzeitiger Nutzer, deren typische Aktionen und die geforderten Antwortzeiten. (2) Ein Lasttest-Werkzeug (Lastgenerator) simuliert diese Nutzer und schickt ihre Anfragen gleichzeitig an das System in der Testumgebung. (3) Während des Laufs misst das Werkzeug die Antwortzeit jeder Anfrage, und ein Monitoring zeichnet auf dem Server CPU- und Speicherauslastung auf. (4) Für den Belastungstest erhöht das Werkzeug die Nutzerzahl schrittweise über die erwartete Last hinaus, bis an der Belastungsgrenze Antwortzeiten stark ansteigen oder Anfragen fehlschlagen. (5) Anschließend senkt das Werkzeug die Last wieder, und die Tester beobachten, ob das System zu normalen Antwortzeiten zurückkehrt. (6) Die Tester vergleichen die Messwerte mit den Anforderungen und suchen die Ressource oder Komponente, die zuerst voll ausgelastet war: Dort liegt der Engpass.

**Typische Missverständnisse:**
- Viele denken, grüne Unit-Tests oder eine hohe Codeabdeckung zeigten, dass die Software funktioniert. Richtig ist: Sie sagen nichts über Schnittstellen und über die Anforderungen im Ganzen.
- Viele denken, ein gründlicher Abnahmetest mache Integrations- und Systemtest überflüssig. Richtig ist: Der Kunde prüft seine Erwartungen, nicht systematisch Schnittstellen und Anforderungen. Die Abnahme wäre dann der erste Gesamttest, und Fehler fielen spät beim Kunden auf.

**Fachwörter:**
- Komponententest: ein Baustein allein, automatisch geprüft
- Integrationstest: Zusammenspiel der Bausteine an Schnittstellen
- Systemtest: ganzes System gegen die Anforderungen
- Abnahmetest: Kunde prüft, Grundlage der Abnahme
- End-to-End-Test: vollständiger Ablauf aus Sicht des Benutzers
- Belastungstest: Spitzenlast bis über die Belastungsgrenze
- Testverfahren: wie getestet wird, statisch oder dynamisch
- Testarten: welches Qualitätsmerkmal geprüft wird

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es noch keine eigene Teilaufgabe.
- Nahe dran war eine Stellungnahme (5 Punkte) zum Vorschlag, Qualität nur mit automatischen Code-Reviews und Unit-Tests zu sichern. Gezählt wurde, dass das nicht alle Szenarien abdeckt und weitere, auch manuelle Tests nötig sind, mit Vor- und Nachteilen.
- Ebenfalls nahe dran: „Beschreiben Sie Black-Box- und White-Box-Test“ (4 Punkte).
- Nach dem Katalog zu erwarten: Teststufen in der richtigen Reihenfolge nennen und beschreiben (je 1 Punkt), zwei Testarten beschreiben (je 2 Punkte), ein Konzept beurteilen oder dazu Stellung nehmen (4–6 Punkte: Urteil plus fachliche Begründung).
- Schlüsselwörter, auf die es ankommt: Schnittstellen, gegen die Anforderungen, erwartete Last, Belastungsgrenze, Antwortzeit.

**Fallen:**
- Die Stufen nur mit Namen aufzählen, ohne je Stufe zu sagen, was geprüft wird.
- Integrationstest und Systemtest vertauschen.
- Beim End-to-End-Testfall nur einen Teilschritt beschreiben, die Benutzersicht weglassen oder ohne sichtbares Ergebnis aufhören.
- Last- und Belastungstest beschreiben, ohne erwartete Last und Spitzenlast zu trennen.
- Den Performancetest über eine Nutzerzahl erklären statt über Antwortzeit und Ressourcenverbrauch.
- Den Lasttest als Teststufe einordnen.
- Beim Einordnen eines Tests eine der drei Richtungen (wie, was, wann) auslassen.
- Unabhängiges Testen nur mit „Vier-Augen-Prinzip“ begründen, ohne den Grund: Der Entwickler prüft nur, was er sich selbst gedacht hat.
- Beim Beurteilen nur „alle Stufen sind wichtig“ schreiben, ohne je fehlender Stufe den unentdeckten Fehlertyp zu nennen.
- Komponententests für entbehrlich halten, weil der Systemtest „alles zusammen“ prüft.
