Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Verfügbarkeit und Betriebssicherheit › Ausfallrisiken, MTBF/AFR und Notfallkonzept

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

## Stoff: Ausfallrisiken, MTBF/AFR und Notfallkonzept

Ziel: Risiken für den Betrieb identifizieren, Ausfallwahrscheinlichkeiten mit MTBF und AFR berücksichtigen und ein Notfallkonzept aufstellen, das im PDCA-Zyklus aus AP1 verbessert wird.

Das muss ich können:

### K1 – Risiken für den Betrieb (Stufe 2 Verstehen)
Du kannst Risiken für den Betrieb identifizieren, zum Beispiel einzelne Fehlerquellen ohne Ersatz, Abhängigkeit von einem Rechenzentrum oder einer Leitung, Engpässe in der Bandbreite, veraltete oder uneinheitliche Hardware.

Erklärung:
Betriebsrisiken identifizieren:
- **Single Point of Failure** (Teil ohne Ersatz)
- **Abhängigkeit** von einem Rechenzentrum oder einer Leitung
- **Engpässe** in der Bandbreite, z. B. wenn große Installations-Images zentral über das Netz verteilt werden
- **veraltete oder uneinheitliche (inhomogene) Hardware** – viele verschiedene Modelle bedeuten mehr Aufwand für Treiber, Ersatzteile und Wartung
- fehlendes Wissen bei nur einem Mitarbeiter

### K2 – MTBF und AFR bei der Ersatzteilplanung (Stufe 3 Anwenden)
Du kannst MTBF (mittlere Betriebsdauer zwischen zwei Ausfällen) und AFR (Anteil der Geräte, die in einem Jahr ausfallen) erklären und beim Planen von Ersatzteilen und Redundanz berücksichtigen.

Erklärung:
- **MTBF** (Mean Time Between Failures): **mittlere Betriebsdauer** zwischen zwei Ausfällen – ein statistischer Mittelwert über viele Geräte, keine Lebensdauerzusage für ein einzelnes; je höher, desto zuverlässiger
- **AFR** (Annualized Failure Rate): **Anteil der Geräte**, die pro Jahr ausfallen – je niedriger, desto zuverlässiger
Nutzen: Bei 200 Platten und 2 % AFR rechnet man mit etwa **4 Ausfällen** im Jahr → so viele Ersatzplatten bereithalten, Redundanz planen.

### K3 – Notfallkonzept (Disaster Recovery) im PDCA-Zyklus (Stufe 3 Anwenden)
Du kannst ein Notfallkonzept (Disaster Recovery) planen: wer nach einem schweren Ausfall was in welcher Reihenfolge tut, wie lange der Ausfall dauern und wie viele Daten verloren gehen dürfen, Ausweichsysteme, regelmäßige Übungen; Konzept und Maßnahmen werden wie jeder Verbesserungsprozess im PDCA-Zyklus (AP1) geprüft und nachgesteuert.

Erklärung:
**Notfallkonzept (Disaster Recovery)** legt fest:
- **wer** nach einem schweren Ausfall **was** in welcher **Reihenfolge** tut
- **Zuständigkeiten, Ansprechpartner und Meldewege** (wer alarmiert wen, Erreichbarkeiten)
- wie lange der Ausfall dauern darf (**RTO**, Recovery Time Objective) und wie viele Daten verloren gehen dürfen (**RPO**, Recovery Point Objective – gemessen als Zeit seit der letzten Sicherung)
- **Ausweichsysteme**
- **regelmäßige Übungen**
Danach im **PDCA-Zyklus** verbessern.

### K4 – MTTR und Verfügbarkeit aus MTBF (Stufe 2 Verstehen)
Du kannst die MTTR erklären – die mittlere Zeit vom Ausfall über Erkennen, Diagnose, Reparatur und Test, bis das System wieder verfügbar ist – und wie sie zusammen mit der MTBF die Verfügbarkeit bestimmt: Verfügbarkeit = MTBF ÷ (MTBF + MTTR).

Erklärung:
Die **MTBF** sagt, wie lange ein System im Mittel zwischen zwei Ausfällen läuft (Zuverlässigkeit). Die **MTTR** (Mean Time To Repair bzw. Restore) sagt, wie lange es nach einem Ausfall im Mittel dauert, bis es wieder läuft.
- Die MTTR läuft ab dem Ausfall und umfasst: Störung erkennen, Ursache diagnostizieren, reparieren, testen, wieder freigeben. Auch die Zeit, bis die Störung bemerkt ist, zählt dazu; Monitoring-Alarme verkürzen sie.
- `Verfügbarkeit = MTBF ÷ (MTBF + MTTR)`
Verfügbarkeit steigt also nicht nur durch seltenere Ausfälle, sondern auch durch schnellere Wiederherstellung – etwa mit Ersatzteilen vor Ort, Monitoring-Alarmen und eingeübten Abläufen.
Beispiel: MTBF 999 h, MTTR 1 h → 999 ÷ 1000 = 99,9 %. Halbiert ein Ersatzteillager die MTTR auf 0,5 h, steigt die Verfügbarkeit auf rund 99,95 %.

### K5 – Ausfallwahrscheinlichkeit redundanter Teile (Stufe 3 Anwenden)
Du kannst berechnen, wie Redundanz die Ausfallwahrscheinlichkeit senkt: Voneinander unabhängige redundante Teile fallen nur gleichzeitig mit dem Produkt ihrer Einzelwahrscheinlichkeiten aus, zwei Netzteile mit je 0,1 % also mit 0,001 · 0,001 = 0,000001 (0,0001 %); zugleich fällt bei mehr Teilen öfter irgendeines aus und muss getauscht werden.

Erklärung:
Redundanz wirkt, weil ein Totalausfall nur eintritt, wenn **alle** redundanten Teile zugleich ausfallen.
- unabhängige Teile: `p(alle) = p₁ · p₂ · …`, bei gleichen Teilen `pⁿ`
- zwei Netzteile mit je 0,001: 0,001 · 0,001 = 0,000001 – tausendmal seltener als bei einem Netzteil
- Die Wahrscheinlichkeit, dass **irgendeines** ausfällt, steigt dagegen mit der Zahl der Teile (bei zwei Teilen auf rund das Doppelte). Es muss also öfter ein Teil getauscht werden – ohne dass der Betrieb stoppt.
Voraussetzung ist Unabhängigkeit: Hängen beide Netzteile am selben Stromkreis, fallen sie gemeinsam aus, und die Rechnung gilt nicht mehr.
Beispiel: Ein Server mit zwei Netzteilen meldet häufiger ein defektes Netzteil als einer mit nur einem – fällt aber viel seltener wegen eines Netzteils ganz aus.

## Lehrnotiz: Ausfallrisiken, MTBF/AFR und Notfallkonzept

**Aufteilung:**
- Risiken für den Betrieb erkennen: K1
- Kennzahlen der Zuverlässigkeit: erst K2, darauf aufbauend K4
- Wie Redundanz die Ausfallwahrscheinlichkeit senkt: K5
- Notfallkonzept planen und verbessern: K3

**Schon geprüft:** In Prüfungen: K1 (2022W) · Noch nicht geprüft: K2–K5

**Kerngedanken:**
- Viele Risiken findet man mit der Frage, wo es nur eins gibt: ein Teil, eine Leitung, einen Kopf. Dazu kommen Engpässe (reicht die Bandbreite, etwa beim Verteilen großer Images?) und alte oder viele verschiedene Geräte.
- RTO (Recovery Time Objective) ist eine Zeit bis zum Wiederanlauf. RPO (Recovery Point Objective) ist ein Datenverlust, gemessen als Zeitraum seit der letzten Sicherung. Aus dem RPO folgt, wie oft mindestens gesichert werden muss.
- Zum Notfallkonzept gehören auch die Reihenfolge des Wiederanlaufs nach Wichtigkeit (die Datenbank vor den Anwendungen, die sie brauchen) und die Wiederherstellung aus Backups, die nicht am betroffenen Ort liegen.
- PDCA am Notfallkonzept: Das Konzept ist Plan, die Übung Do, der Vergleich der gemessenen Zeit mit dem RTO Check. Act heißt Ursache beheben, Ablauf anpassen und erneut üben.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Von der MTBF zur erwarteten Zahl der Ausfälle pro Jahr: (1) Die MTBF ist definiert als Summe der Betriebsstunden vieler Geräte geteilt durch die Zahl der Ausfälle in dieser Zeit. (2) Für die Planung rechnet man rückwärts: Ein Gerät im Dauerbetrieb läuft 8.760 Stunden im Jahr. (3) Die Geräteanzahl mal 8.760 Stunden ergibt die Betriebsstunden des ganzen Bestands pro Jahr, bei 200 Platten also 1.752.000 Stunden. (4) Diese Betriebsstunden geteilt durch die MTBF ergeben die erwarteten Ausfälle pro Jahr, bei einer MTBF von 438.000 Stunden also 4. (5) Die erwarteten Ausfälle geteilt durch die Geräteanzahl ergeben die AFR, kurz 8.760 ÷ MTBF, hier 2 %. (6) Die erwartete Zahl der Ausfälle legt fest, wie viele Ersatzteile bereitliegen müssen und wo sich Redundanz lohnt. Vereinfacht: Die Rechnung setzt Dauerbetrieb und eine gleichbleibende Ausfallrate voraus; tatsächlich fallen Geräte am Anfang und am Ende ihrer Nutzungszeit häufiger aus.

**Typische Missverständnisse:**
- Viele denken, eine MTBF von mehreren hunderttausend Stunden heiße, ein Gerät halte Jahrzehnte; richtig ist: Die MTBF ist ein statistischer Mittelwert über viele Geräte, keine Lebensdauerzusage für ein einzelnes.
- Viele denken, ein Notfallkonzept sei eine Liste von Technik (Backup, Ersatzserver); richtig ist: Ohne Zuständigkeiten und Meldewege handelt im Ernstfall niemand.

**Fachwörter:**
- Single Point of Failure: Teil ohne Ersatz, sein Ausfall stoppt den Dienst
- MTBF: mittlere Betriebsdauer zwischen zwei Ausfällen
- AFR: Anteil der Geräte, die jährlich ausfallen
- MTTR: mittlere Zeit bis zur Wiederherstellung
- Notfallkonzept (Disaster Recovery): Plan für die Zeit nach einem schweren Ausfall
- RTO: höchste erlaubte Dauer des Ausfalls
- RPO: höchster erlaubter Datenverlust, als Zeitraum
- Ausweichsysteme: Ersatzsysteme, die den Betrieb übernehmen

**So fragt die IHK:**
- Belegt ist eine Teilaufgabe (4 Punkte, „beschreiben“, zwei Schwachstellen à 2 Punkte). Es ging um gehäufte Dienstausfälle bei veralteter, uneinheitlicher Infrastruktur an mehreren Standorten.
- Die Lösungshinweise sind beispielhaft: Netzinfrastruktur der Standorte, Bereitstellung über die Rechenzentren, unterschiedliche Hardware, Bandbreitenengpass, Verteilen von Images. Gezählt wird, was zur Lage passt und mit Folge beschrieben ist.
- Alles andere wurde bisher nicht geprüft. Laut Katalog zu erwarten sind kurze Rechen- und Erklärteile (2–3 Punkte) und Inhalte eines Notfallkonzepts mit 1 Punkt je Inhalt.

**Fallen:**
- Ein Risiko nur als Stichwort nennen, ohne zu sagen, was am Fall passiert, wenn es eintritt. Das bringt höchstens die halben Punkte.
- Zweimal dasselbe Risiko mit anderen Worten beschreiben oder Risiken nennen, die nicht zur Lage passen.
- Die Richtung verwechseln: Bei der MTBF ist der höhere Wert besser, bei der AFR der niedrigere.
- Beim zuverlässigeren Modell keine Ersatzgeräte einplanen; auch dort fallen Geräte aus.
- Die Zeit, bis die Störung bemerkt und gemeldet ist, aus der MTTR herauslassen; die MTTR läuft ab dem Ausfall, sonst wird die Verfügbarkeit zu hoch berechnet.
- Im Nenner der Verfügbarkeitsformel nur die MTBF schreiben statt MTBF + MTTR.
- Als Weg zu kürzerer MTTR nur „schneller reparieren“ schreiben statt einer konkreten Maßnahme.
- Bei redundanten Teilen die Wahrscheinlichkeiten addieren statt multiplizieren.
- Beim Umrechnen einer kleinen Dezimalzahl in Prozent Nullen verlieren.
- RTO und RPO vertauschen oder ohne Wert und Bedeutung nennen.
