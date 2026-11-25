Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Projekt, Vorgehen und Anforderungen › Vorgehensmodelle › Wasserfall-, V- und Spiralmodell

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen und dem Warum dahinter. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, vor jedem Vergleich, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, wurde das geprüft – dann reicht die Erklärung aus dem Stoff mit dem Warum dazu, ohne eigenen Ablauf. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber lösbar allein mit dem Stoff. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
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
