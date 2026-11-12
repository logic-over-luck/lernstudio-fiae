Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Monitoring, Störungen und Cloud-Modelle › Monitoring: Messdaten, Schwellwerte, SNMP, S.M.A.R.T., Systemlast

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

## Stoff: Monitoring: Messdaten, Schwellwerte, SNMP, S.M.A.R.T., Systemlast

Ziel: Monitoringdaten und Schwellwerte festlegen, SNMP und S.M.A.R.T. anwenden, eine Systemlastanalyse durchführen und Predictive Maintenance anwenden.

Das muss ich können:

### K1 – Zu erfassende Monitoringdaten (Stufe 3 Anwenden)
Du kannst festlegen, welche Monitoringdaten erfasst werden: Auslastung von Prozessor, Arbeitsspeicher und Datenträgern, Netzlast, Antwortzeiten, Erreichbarkeit von Diensten, Fehlermeldungen in Protokollen.

Erklärung:
Typische Monitoringdaten:
- Auslastung von **CPU, RAM, Datenträgern**
- **Netzlast**
- **Antwortzeiten**
- **Erreichbarkeit** von Diensten
- **Fehlermeldungen** in Protokollen

### K2 – Schwellwerte für Warnung und Alarm (Stufe 3 Anwenden)
Du kannst Schwellwerte für Warnung und Alarm festlegen, zum Beispiel Warnung ab 80 % und Alarm ab 95 % Speicherbelegung.

Erklärung:
Zwei Stufen:
- **Warnung**: Zeit zum Handeln (z. B. Speicher **80 %**)
- **Alarm**: sofort eingreifen (z. B. **95 %**)
Schwellwerte so wählen, dass genug Zeit bleibt, aber keine Fehlalarme stören.

### K3 – SNMP und S.M.A.R.T. im Monitoring (Stufe 3 Anwenden)
Du kannst SNMP (Zustandswerte von Netzwerkgeräten abfragen und Meldungen empfangen) und S.M.A.R.T. (Selbstüberwachung von Festplatten und SSDs) im Monitoring anwenden.

Erklärung:
- **SNMP** (Simple Network Management Protocol): Zustandswerte von **Netzwerkgeräten** abfragen (Auslastung, Fehler) und **Meldungen (Traps)** empfangen, die das Gerät von selbst schickt
- **S.M.A.R.T.:** **Selbstüberwachung** von Festplatten und SSDs (Fehlerzähler, Temperatur, Betriebsstunden)

### K4 – Systemlastanalyse und Ressourcenengpässe (Stufe 3 Anwenden)
Du kannst eine Systemlastanalyse durchführen und daraus Ressourcenengpässe interpretieren, zum Beispiel dauerhaft volle Prozessorlast zu Stoßzeiten oder knapper Arbeitsspeicher mit viel Auslagerung.

Erklärung:
**Systemlastanalyse:** Messwerte über die Zeit ansehen und deuten:
- dauerhaft **volle CPU zu Stoßzeiten** → zu wenig Rechenleistung
- **knapper RAM** mit viel **Auslagerung** (das System schiebt Arbeitsspeicher-Inhalte auf den langsameren Datenträger) → Arbeitsspeicher erweitern
- Datenträger fast voll → Speicher erweitern, aufräumen

### K5 – Predictive Maintenance aus Messwerten (Stufe 3 Anwenden)
Du kannst Predictive Maintenance anwenden: aus Messwerten wie S.M.A.R.T.-Werten oder Temperaturen vorhersagen, wann ein Teil ausfällt, und es vorher tauschen.

Erklärung:
**Predictive Maintenance:** aus Messwerten (S.M.A.R.T.-Fehler steigen, Temperatur hoch) **vorhersagen**, wann ein Teil ausfällt – und es **vorher tauschen**.
Vorteil: kein ungeplanter Ausfall, Tausch im Wartungsfenster.

### K6 – Anwendungsmonitoring und Systemmonitoring (Stufe 2 Verstehen)
Du kannst Anwendungsmonitoring (Sicht des Nutzers: Ist der Dienst erreichbar, wie schnell antwortet er, laufen Vorgänge wie Anmeldung oder Bestellung fehlerfrei durch) von Systemmonitoring (Sicht des Administrators: Auslastung von Prozessor, Arbeitsspeicher, Datenträgern und Netz) unterscheiden.

Erklärung:
Ein Server kann im Systemmonitoring „grün“ sein, während Kunden die Webseite nicht erreichen – etwa wegen eines abgelaufenen Zertifikats oder eines hängenden Dienstes. Deshalb überwacht man auf zwei Ebenen:
- **Systemmonitoring:** Ressourcen von Hardware und Betriebssystem – CPU, RAM, Plattenplatz, Netzlast, Temperatur. Zielgruppe: Administration.
- **Anwendungsmonitoring:** der Dienst, wie ihn der Nutzer erlebt – Erreichbarkeit, Antwortzeit, Fehlerquote, erfolgreiche Abläufe. Zielgruppe: Betrieb und Kunde, oft Grundlage für SLA-Nachweise.
Beide ergänzen sich: Das Anwendungsmonitoring zeigt, **dass** etwas nicht stimmt, das Systemmonitoring hilft herauszufinden, **warum**.
Beispiel: Die Antwortzeiten des Shops steigen (Anwendung) – gleichzeitig ist der Arbeitsspeicher des Datenbankservers voll (System).

### K7 – Umgebungswerte im Serverraum überwachen (Stufe 3 Anwenden)
Du kannst für einen Serverraum festlegen, welche Umgebungswerte Sensoren überwachen und bei Abweichung melden: Temperatur, Luftfeuchtigkeit (zu hoch führt zu Kondenswasser und Korrosion, zu niedrig begünstigt elektrostatische Entladungen), Rauch, Wasser etwa im Doppelboden, Netzspannung und Zustand der USV sowie Zutritte.

Erklärung:
Hardware fällt nicht nur durch eigene Defekte aus, sondern auch durch ihre Umgebung. Sensoren melden Abweichungen, bevor Schaden entsteht:
- **Temperatur:** Ausfall der Klimaanlage → Überhitzung, Notabschaltung
- **Luftfeuchtigkeit:** zu hoch → Kondenswasser und Korrosion; zu niedrig → elektrostatische Entladungen
- **Rauch und Wasser:** Brand, Rohrbruch, Leck der Klimaanlage im Doppelboden
- **Strom:** Netzspannung, Zustand und Ladung der USV
- **Zutritt:** Tür- und Zugangsmeldungen
Die Werte laufen im Monitoringsystem zusammen; Schwellwerte lösen Alarm auf dem Dashboard, per E-Mail oder auf dem Mobiltelefon aus.
Beispiel: Die Klimaanlage fällt nachts aus; der Temperatursensor schlägt Alarm, und der Bereitschaftsdienst reagiert, bevor die Server sich abschalten.

### K8 – Instandhaltungsstrategien von reaktiv bis prädiktiv (Stufe 2 Verstehen)
Du kannst Maßnahmen den Instandhaltungsstrategien zuordnen: reaktiv (erst nach dem Ausfall reparieren, Daten retten, Ersatzsystem bereitstellen), periodisch (planmäßig in festen Abständen, etwa Backups prüfen, Updates einspielen, USV-Akkus testen), präventiv bzw. proaktiv (Messwerte laufend überwachen und bei Abweichung handeln, bevor etwas ausfällt) und prädiktiv (Ausfälle aus Messdaten vorhersagen und Teile vorher tauschen).

Erklärung:
Instandhaltung lässt sich danach ordnen, **wann** gehandelt wird:
- **reaktiv:** nach dem Schaden. Billig, solange nichts passiert – dann aber Ausfallzeit, Datenverlust und Notfallkosten (Beispiel: Die Serverplatte läuft voll, der Dienst steht).
- **periodisch:** nach Kalender, unabhängig vom Zustand – Patches, Backup-Tests, Akkutests der USV.
- **präventiv/proaktiv:** nach Zustand – das Monitoring meldet z. B. 85 % Plattenbelegung, und der Admin räumt auf, bevor der Dienst steht.
- **prädiktiv:** nach Vorhersage – aus dem Verlauf von Messwerten (S.M.A.R.T., Temperatur) wird abgeschätzt, wann ein Teil ausfällt (Predictive Maintenance, PB1-12-2-1-K5).
„Präventiv“ wird sonst oft weiter gefasst und schließt dann auch die Wartung nach Kalender ein; hier ist das Handeln nach Zustand gemeint, getrennt vom periodischen Vorgehen.
Je weiter unten in der Liste, desto mehr Messung und Auswertung – und desto weniger ungeplante Ausfälle.

## Lehrnotiz: Monitoring: Messdaten, Schwellwerte, SNMP, S.M.A.R.T., Systemlast

**Aufteilung:**
- Was überwacht wird und aus welcher Sicht: K1, K6
- Schwellwerte für Warnung und Alarm: K2
- SNMP und S.M.A.R.T.: K3
- Systemlastanalyse: K4
- Pause möglich nach der Systemlastanalyse.
- Vorausschauend warten und Instandhaltung einordnen: K5, K8
- Umgebung im Serverraum: K7

**Schon geprüft:** Noch nicht geprüft: K1–K8

**Kerngedanken:**
- Bei der Systemlastanalyse zählt der Verlauf: Wenige Sekunden volle Last sind kein Engpass, Stunden zur Stoßzeit schon.
- Das Symptom zeigt nicht, wo der Engpass liegt: Langsame Antworten können an der CPU des Anwendungsservers oder am RAM des Datenbankservers liegen. Man sucht den Wert, der sich gleichzeitig mit dem Symptom ändert.
- Präventiv/proaktiv reagiert auf einen aktuellen Messwert; prädiktiv liest aus dem Trend, wann der Ausfall kommt. Gegenüber dem Tausch nach Kalender hat Predictive Maintenance einen weiteren Vorteil: Intakte Teile werden nicht zu früh ersetzt.
- Abgrenzung: Baseline, Flussdaten, Logs und die Reaktion auf einen Alarm gehören zu PB1-12-2-4, korrektive Maßnahmen und Skalierung zu PB1-12-2-2. Hier reicht je Engpass eine passende Maßnahme.

**Typische Missverständnisse:**
- Viele denken, ein vorbeugend gemeinter Tausch in festen Abständen sei präventiv oder prädiktiv; richtig ist: Was nach Kalender geschieht, ist periodisch.
- Viele denken, 80 % und 95 % seien vorgeschrieben; richtig ist: Es sind Beispiele, andere gestufte Werte mit stimmiger Begründung zählen ebenso.

**Fachwörter:**
- Monitoringdaten: Werte, die laufend automatisch erfasst werden
- Schwellwert: Grenze, ab der gewarnt oder alarmiert wird
- Trap: Meldung, die ein Netzwerkgerät von selbst schickt
- Auslagerung: Arbeitsspeicherinhalte weichen auf den Datenträger aus
- Ressourcenengpass: eine Ressource reicht für die Last nicht
- Predictive Maintenance: Ausfall vorhersagen, Teil vorher tauschen
- Wartungsfenster: geplante Zeit für Arbeiten am System

**So fragt die IHK:** In Prüfungsbereich 1 bisher nicht geprüft; der Prüfungskatalog nennt die Inhalte ausdrücklich. Zu erwarten ist: Eine Anwendung geht in Betrieb; Monitoringdaten nennen (1 Punkt je Wert), erläutern (2 Punkte je Aspekt, voll nur mit Begründung), eine kleine Messwerttabelle interpretieren (je Befund Engpass plus Maßnahme), Schwellwerte festlegen mit Begründung.

**Fallen:**
- Nur Ressourcen wie CPU und RAM nennen; mindestens ein Wert aus Nutzersicht (Antwortzeit, Erreichbarkeit) gehört dazu.
- Geschäftszahlen wie Umsatz oder Zahl der Bestellungen als Monitoringdaten nennen. Gemeint sind technische Werte; aus Nutzersicht zählt, ob Anmeldung oder Bestellung fehlerfrei durchläuft und wie schnell, nicht wie viele es sind.
- „Alles grün, der Dienst geht trotzdem nicht“ mit einem falsch eingestellten Monitoring erklären statt mit den zwei Ebenen.
- Bei Schwellwerten nur zwei Zahlen nennen, ohne die Aufgabe jeder Stufe.
- Den Alarm erst bei 100 % setzen (zu spät) oder einen Schwellwert unter den heutigen Normalwert legen (Daueralarm).
- SNMP nur mit „überwacht das Netz“ beschreiben; gemeint sind das Abfragen von Werten und das Empfangen von Traps.
- SNMP und S.M.A.R.T. vertauschen: S.M.A.R.T. ist die Selbstüberwachung in der Platte und sagt nichts über Netzlast; SNMP ist das Protokoll, mit dem man Zustandswerte von Geräten abfragt oder als Trap empfängt.
- Eine Maßnahme nennen, die nicht zum Engpass passt, oder einen unauffälligen Wert (mäßige Belegung, keine Auslagerung) als Engpass deuten.
- „Sofort tauschen“ empfehlen, ohne die Vorhersage aus den Messwerten und den Vorteil zu nennen.
- „Abwarten, das Teil läuft ja noch“ nicht als reaktiv erkennen.
- Bei der Luftfeuchtigkeit nur eine Richtung nennen; verlangt sind beide mit Folge.
- Im Serverraum Wasser und Luftfeuchtigkeit vergessen.
