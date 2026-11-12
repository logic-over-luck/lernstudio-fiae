Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Projekt, Vorgehen und Anforderungen › Vorgehensmodelle › Wasserfall-, V- und Spiralmodell

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

## Stoff: Wasserfall-, V- und Spiralmodell

Ziel: Die klassischen Modelle an ihrem Ablauf unterscheiden: streng nacheinander, mit zugeordneten Teststufen oder in Runden mit Risikobewertung.

Das muss ich können:

### K1 – V-Modell: Entwurfsstufen und Teststufen (Stufe 2 Verstehen)
Du kannst das V-Modell beschreiben: Die Phasen laufen nacheinander ab wie beim Wasserfallmodell, aber jeder Entwurfsstufe steht eine Teststufe gegenüber: Anforderungsdefinition ↔ Abnahmetest, funktionaler Systementwurf ↔ Systemtest, Architektur- bzw. Grobentwurf ↔ Integrationstest, Komponenten- bzw. Feinentwurf ↔ Komponententest.

Erklärung:
Das V-Modell ist ein Wasserfall, der „nach oben geknickt“ wird: Links geht es vom Groben ins Feine (Entwurf), rechts wird von unten nach oben getestet. Unten an der Spitze des V steht die Implementierung (Programmierung).
- Anforderungsdefinition ↔ **Abnahmetest**
- funktionaler Systementwurf ↔ **Systemtest**
- Architektur-/Grobentwurf ↔ **Integrationstest**
- Komponenten-/Feinentwurf ↔ **Komponententest**
Vorteil: Zu jedem Entwurf steht schon fest, wie er geprüft wird. Die Teststufen selbst lernst du in PB1-9.

### K2 – Spiralmodell: Runden mit Risikoanalyse (Stufe 2 Verstehen)
Du kannst das Spiralmodell beschreiben: Das Projekt durchläuft die Phasen mehrfach in Runden; jede Runde beginnt mit Zielen und einer Risikoanalyse und endet mit einem Prototyp oder Teilergebnis, auf dem die nächste Runde aufbaut.

Erklärung:
- Das Projekt läuft in **Runden (Spiralen)** durch dieselben Phasen.
- Jede Runde: **Ziele festlegen → Risiken analysieren → entwickeln und testen → nächste Runde planen**.
- Ergebnis jeder Runde ist ein **Prototyp** (eine vereinfachte, schon ausprobierbare Version des Produkts) oder Teilergebnis.
Typisch für große, neuartige Vorhaben, bei denen Risiken früh erkannt werden sollen.

### K3 – Einsatzfälle von Wasserfall-, V- und Spiralmodell (Stufe 2 Verstehen)
Du kannst Wasserfall-, V- und Spiralmodell nach ihrem typischen Einsatzfall unterscheiden: feste, gut bekannte Anforderungen (Wasserfall); hohe Anforderungen an nachweisbare Tests (V-Modell); große, neuartige Vorhaben mit hohem Risiko (Spiralmodell). Den Ablauf des Wasserfallmodells kennst du aus AP1-1-1-2.

Erklärung:
- **Wasserfall** (Ablauf aus AP1): passt bei **festen, gut bekannten Anforderungen**.
- **V-Modell:** zu jeder Entwurfsstufe eine Teststufe; passt, wenn **Tests nachgewiesen** werden müssen (Behörden, Medizin, Sicherheit).
- **Spiralmodell:** Runden mit Risikoanalyse; passt zu **großen, riskanten, neuartigen** Vorhaben.

### K4 – Wasserfallmodell: Stärken und Schwächen begründet (Stufe 2 Verstehen)
Du kannst Stärken und Schwächen des Wasserfallmodells aus seinem Ablauf erklären (je einen Vor- und Nachteil kennst du aus AP1-1-1-2): Weil alles vorab festgelegt wird, sind Termine, Kosten und Dokumentation gut planbar; weil der Auftraggeber erst bei der Abnahme ein Ergebnis sieht und erst nach der Umsetzung getestet wird, fallen Fehler aus Analyse und Entwurf spät und teuer auf, und bei langen Projekten kann die Lösung bei Einführung schon veraltet sein.

Erklärung:
Je einen Vor- und Nachteil kennst du aus AP1 (AP1-1-1-2-K2). Hier geht es um das **Warum** hinter den Eigenschaften:
- **Planbar und kalkulierbar**, weil Anforderungen, Phasen und Ergebnisse am Anfang feststehen.
- **Gut dokumentiert**, weil jede Phase mit einem Dokument abschließt, auf dem die nächste aufbaut.
- **Fehler spät erkannt:** Getestet wird erst nach der Umsetzung; ein Missverständnis aus der Analyse zeigt sich dann und zieht Änderungen durch alle Phasen.
- **Auftraggeber außen vor:** Zwischen Lastenheft und Abnahme sieht er kaum etwas.
- **Veraltet bei Einführung:** Bei langer Laufzeit haben sich Markt oder Technik inzwischen geändert.
Beispiel: Ein Lagerverwaltungsprogramm wird nach 18 Monaten abgenommen – erst jetzt merkt der Kunde, dass Rücksendungen fehlen.

### K5 – Spiralmodell: Vor- und Nachteile (Stufe 2 Verstehen)
Du kannst Vor- und Nachteile des Spiralmodells erklären: Es reagiert flexibel auf geänderte Anforderungen, jede Runde lässt sich einzeln planen und budgetieren, und Risiken und Qualität werden in jeder Runde geprüft; dafür ist der Managementaufwand hoch, die Risikobewertung verlangt viel Erfahrung, und weil die Runden aufeinander aufbauen, lässt sich kaum parallel arbeiten.

Erklärung:
Die Eigenschaften folgen aus dem Aufbau in **Runden mit Risikoanalyse** (PB1-1-1-2-K2):
- **Flexibel:** Jede Runde beginnt mit neuen Zielen; geänderte Anforderungen fließen dort ein.
- **Planbar je Runde:** Budget und Termin werden für die nächste Runde freigegeben, nicht für alles auf einmal.
- **Eingebaute Qualitätssicherung:** Prototyp oder Teilergebnis wird am Ende jeder Runde geprüft.
- **Hoher Aufwand:** Ständig planen, bewerten, entscheiden – das bindet Projektmanagement.
- **Risikobewertung schwierig:** Wer Risiken falsch einschätzt, steuert die ganze Runde falsch.
- **Kaum parallel:** Die nächste Runde baut auf dem Ergebnis der vorigen auf.
Beispiel: Ein Navigationssystem mit neuer Sensortechnik – teuer, wenn es schiefgeht, deshalb Runde für Runde mit Prototypen.

### K6 – V-Modell: Vor- und Nachteile (Stufe 2 Verstehen)
Du kannst Vor- und Nachteile des V-Modells erklären: Weil zu jeder Entwurfsstufe schon die passende Teststufe festgelegt und alles dokumentiert wird, ist die Qualität nachweisbar, was zu großen und öffentlichen Projekten passt (für IT-Projekte des Bundes ist das V-Modell XT vorgegeben); dafür ist es starr bei Änderungen und für kleine Projekte zu aufwendig.

Erklärung:
Die Stärke des V-Modells ist die **Kopplung von Entwurf und Test** (PB1-1-1-2-K1):
- **Tests früh geplant:** Schon bei der Anforderungsdefinition steht fest, wie abgenommen wird – Lücken fallen früh auf.
- **Nachweisbare Qualität:** Umfangreiche Dokumentation zeigt, was wann geprüft wurde; wichtig bei Behörden oder sicherheitskritischer Software.
- **Starr:** Ändert sich eine Anforderung, müssen Entwurfs- und Testdokumente auf mehreren Stufen angepasst werden.
- **Aufwendig:** Für eine kleine Web-App steht der Dokumentationsaufwand in keinem Verhältnis zum Nutzen.
Beispiel: Die Software einer Bundesbehörde wird nach V-Modell XT (der heutigen, weiterentwickelten Fassung des V-Modells, die sich auf das einzelne Projekt zuschneiden lässt) entwickelt; ein Drei-Personen-Team für eine Vereins-App würde damit eher ausgebremst.

## Lehrnotiz: Wasserfall-, V- und Spiralmodell

**Aufteilung:**
- Wasserfallmodell, Stärken und Schwächen aus dem Ablauf: K4
- V-Modell, erst der Aufbau, dann Vor- und Nachteile: K1, K6
- Spiralmodell, erst der Ablauf einer Runde, dann Vor- und Nachteile: K2, K5
- Welches Modell für welches Vorhaben: K3 – hier kommt alles Vorige zusammen

**Schon geprüft:** In Prüfungen: K3 (2024W) · Noch nicht geprüft: K1, K2, K4–K6

**Kerngedanken:**
- Jede Teststufe prüft das Ergebnis der Entwurfsstufe gegenüber. Der Abnahmetest prüft die Anforderungen des Auftraggebers, der Systemtest das ganze System, der Integrationstest das Zusammenspiel der Komponenten und der Komponententest ein einzelnes Teil. Wer das verstanden hat, muss die Paare nicht auswendig lernen.
- Das Kennzeichen des Spiralmodells ist die Risikoanalyse am Anfang jeder Runde. „Mehrere Durchläufe“ allein beschreibt es nicht.
- Eine Modellwahl begründet man mit zwei Dingen: dem besonderen Merkmal des Vorhabens und der Eigenschaft des Modells, die genau dazu passt. Diese Eigenschaft kommt aus dem Ablauf des Modells.

**Typische Missverständnisse:**
- Viele denken, beim V-Modell springe man zwischen Entwurf und Test hin und her; richtig ist: Die Phasen laufen nacheinander ab wie beim Wasserfall, getestet wird erst nach der Implementierung von unten nach oben. Festgelegt wird jeder Test aber schon bei der gegenüberliegenden Entwurfsstufe.
- Viele denken, das Spiralmodell sei agil, weil es in Runden arbeitet und flexibel ist; richtig ist: Die IHK zählt es zu den klassischen Modellen.
- Viele denken, „viele Tests“ spreche für das V-Modell und „groß“ für das Spiralmodell; richtig ist: Entscheidend ist, dass Tests nachgewiesen werden müssen beziehungsweise dass das Vorhaben neuartig und riskant ist.

**Fachwörter:**
- Implementierung: Programmierung, unten an der Spitze des V
- Abnahmetest: Auftraggeber prüft gegen seine Anforderungen
- Systemtest: prüft das ganze System
- Integrationstest: prüft das Zusammenspiel der Komponenten
- Komponententest: prüft ein einzelnes Teil, auch Unit-Test
- Risikoanalyse: Risiken zu Beginn jeder Runde bewerten
- Prototyp: frühes, testbares Muster
- V-Modell XT: für IT-Projekte des Bundes vorgegeben

**So fragt die IHK:**
- Bisher kam das Thema nur im Rahmen der Kategorien-Aufgaben vor: „Beschreiben Sie jeweils ein Modell zu den genannten Kategorien“ (4 Punkte, etwa 2 je Modell). Für klassisch war eine Beschreibung wie beim Wasserfall erwartet: Phasen linear nacheinander, jede abgeschlossen vor der nächsten.
- Ein anderer Lösungshinweis nennt Wasserfall-, Spiral- und V-Modell als klassische Beispiele.
- V- und Spiralmodell stehen ausdrücklich im Prüfungskatalog, eine eigene Aufgabe dazu gab es noch nicht.
- Denkbar sind:
  - „Beschreiben Sie das V-Modell“ oder Teststufen in einer Tabelle zuordnen (1 Punkt je Paar)
  - „Beschreiben Sie das Spiralmodell“ (2–3 Punkte)
  - „Wählen Sie ein Vorgehensmodell und begründen Sie Ihre Wahl“ (1 Punkt Modell, 1 Punkt Begründung)
  - Vor- und Nachteile mit „erläutern“ (volle Punkte nur mit Begründung)

**Fallen:**
- Wasserfall: Nur „unflexibel“ oder „gut planbar“ schreiben, ohne den Grund aus dem Ablauf.
- Wasserfall: Bei „Fehler spät erkannt“ nur einen der beiden Gründe nennen. Dazu gehören der Test erst nach der Umsetzung und der Auftraggeber, der erst bei der Abnahme ein Ergebnis sieht.
- V-Modell: Die Paare verschieben, vor allem den Abnahmetest zum Systementwurf statt zur Anforderungsdefinition.
- V-Modell: Die Implementierung an der Spitze weglassen oder die Teststufen rechts in falscher Reihenfolge nennen (unten Komponententest, oben Abnahmetest).
- V-Modell: Als Vorteil „es wird viel getestet“ nennen. Gemeint ist, dass die Tests schon beim Entwurf festgelegt werden und die Qualität nachweisbar ist.
- Spiralmodell: Die Risikoanalyse weglassen oder nicht sagen, dass die nächste Runde auf dem Prototyp oder Teilergebnis aufbaut.
- Spiralmodell: „Kaum parallel“ ohne den Grund nennen.
- Einsatzfälle: Ein Modell zuordnen, ohne zu begründen; das bringt höchstens die Hälfte.
- Einsatzfälle: In der Begründung nur das Vorhaben wiederholen, ohne eine Eigenschaft des Modells zu nennen.
