Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Verfügbarkeit und Betriebssicherheit › Ausfallrisiken, MTBF/AFR und Notfallkonzept

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
Du kannst die MTTR erklären – die mittlere Zeit von der Störungsmeldung über Diagnose, Reparatur und Test, bis das System wieder verfügbar ist – und wie sie zusammen mit der MTBF die Verfügbarkeit bestimmt: Verfügbarkeit = MTBF ÷ (MTBF + MTTR).

Erklärung:
Die **MTBF** sagt, wie lange ein System im Mittel zwischen zwei Ausfällen läuft (Zuverlässigkeit). Die **MTTR** (Mean Time To Repair bzw. Restore) sagt, wie lange es nach einem Ausfall im Mittel dauert, bis es wieder läuft.
- Die MTTR läuft ab der Störungsmeldung und umfasst: Ursache diagnostizieren, reparieren, testen, wieder freigeben. Die Zeit bis zur Meldung zählt nicht dazu; sie wird mit Monitoring-Alarmen kürzer.
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
- Die Zeit, bis die Störung bemerkt und gemeldet ist, zur MTTR zählen; sie läuft erst ab der Störungsmeldung.
- Im Nenner der Verfügbarkeitsformel nur die MTBF schreiben statt MTBF + MTTR.
- Als Weg zu kürzerer MTTR nur „schneller reparieren“ schreiben statt einer konkreten Maßnahme.
- Bei redundanten Teilen die Wahrscheinlichkeiten addieren statt multiplizieren.
- Beim Umrechnen einer kleinen Dezimalzahl in Prozent Nullen verlieren.
- RTO und RPO vertauschen oder ohne Wert und Bedeutung nennen.
