Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Monitoring, Störungen und Cloud-Modelle › Monitoring: Messdaten, Schwellwerte, SNMP, S.M.A.R.T., Systemlast

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K3 – SNMP: Abfrage durch den Manager und Trap vom Agenten: (1) Auf dem Netzwerkgerät läuft ein SNMP-Agent, der Zustandswerte wie Portauslastung und Fehlerzähler laufend bereithält. (2) Jeder Wert hat eine eindeutige Kennung, die OID; die MIB des Geräts beschreibt, welche OIDs es gibt und was sie bedeuten. (3) Das Monitoringsystem schickt als SNMP-Manager in festen Abständen eine GET-Anfrage mit der gewünschten OID an den Agenten (UDP-Port 161). (4) Der Agent liest den aktuellen Wert aus und schickt ihn als Antwort zurück; der Manager speichert ihn und vergleicht ihn mit den Schwellwerten. (5) Tritt auf dem Gerät ein Ereignis wie ein Linkausfall ein, schickt der Agent von sich aus einen Trap an den Manager (UDP-Port 162). (6) Der Manager nimmt den Trap sofort entgegen und löst die Meldung aus, ohne auf die nächste Abfrage zu warten. Vereinfacht: In Wirklichkeit werden die Nachrichten abgesichert: Bei SNMPv1/v2c geschieht das über einen unverschlüsselt übertragenen Community-String, bei SNMPv3 über Benutzer und Authentifizierung, auf Wunsch auch mit Verschlüsselung.
- K3 – Wie S.M.A.R.T. einen Plattenausfall ankündigt: (1) Die Firmware der Platte erfasst laufend eigene Messwerte, zum Beispiel ersetzte Sektoren, Lesefehler, Temperatur und Betriebsstunden. (2) Sie rechnet jeden Rohwert in einen normierten Wert um und vergleicht ihn mit einem Schwellwert, den der Hersteller festgelegt hat. (3) Ein Programm auf dem Rechner, zum Beispiel smartctl oder ein Monitoring-Agent, liest die Werte über die Schnittstelle der Platte aus. (4) Das Monitoring speichert die Werte, beobachtet ihren Verlauf und meldet, wenn ein Wert seinen Schwellwert erreicht oder sich schnell verschlechtert. (5) Daraufhin wird die Platte ersetzt, bevor sie ausfällt. Vereinfacht: Bei NVMe-SSDs gibt es statt der Attributliste ein festes Gesundheitsprotokoll mit eigenen Warnwerten.

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
