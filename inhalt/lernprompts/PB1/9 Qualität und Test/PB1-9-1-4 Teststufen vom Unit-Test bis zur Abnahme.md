Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Qualität und Test › Qualität sichern und Software testen › Teststufen: vom Unit-Test bis zur Abnahme

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
