Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Monitoring, Störungen und Cloud-Modelle › Hosting, Colocation und Managed Services auswählen

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

## Stoff: Hosting, Colocation und Managed Services auswählen

Ziel: Hosting-Varianten und Colocation unterscheiden und für einen Bedarf auswählen, Managed Services erklären und begründet auswählen, welche Betriebsaufgaben ein Kunde einkauft.

Das muss ich können:

### K1 – Hosting-Varianten von Shared bis Bare Metal (Stufe 4 Beurteilen)
Du kannst für einen Bedarf eine Hosting-Variante auswählen: Shared Webhosting (viele Kunden teilen sich Webserver, Datenbank und Dateisystem, Verwaltung über ein Control Panel, günstig, aber wenig Einfluss), VPS (virtueller Server mit geteilten, oft überbuchten CPU-Kernen), VDS (virtueller Server mit fest zugesicherten Ressourcen), Dedicated Server bzw. Bare Metal (eigene physische Hardware) und Managed Hosting (der Anbieter richtet den Server ein und wartet ihn).

Erklärung:
Die Varianten unterscheiden sich darin, **wie viel Hardware man exklusiv hat** und **wie viel man selbst verwaltet**:
- **Shared Webhosting:** Webspace auf einem gemeinsam genutzten Server; reicht für einfache Websites, aber keine eigene Software, keine Administratorrechte, Nachbarn können bremsen.
- **VPS** (Virtual Private Server): eigene virtuelle Maschine mit vollem Zugriff; die CPU-Kerne teilen sich mehrere Kunden – günstig, Leistung schwankt.
- **VDS** (Virtual Dedicated Server): wie VPS, aber mit fest zugesicherten Kernen und Arbeitsspeicher – planbare Leistung.
- **Dedicated Server/Bare Metal:** ein ganzer physischer Server; volle Leistung, volle Verantwortung.
- **Managed Hosting:** Der Anbieter übernimmt Einrichtung, Updates und Überwachung – weniger eigener Aufwand, höhere Kosten.
Beispiel: Vereinswebsite → Shared Hosting; Webanwendung mit eigener Laufzeitumgebung → VPS oder VDS; rechenintensive Datenbank → Dedicated Server.

### K2 – Colocation zwischen eigenem Rechenzentrum und Cloud (Stufe 4 Beurteilen)
Du kannst beurteilen, wann Colocation passt: Eigene Server und Daten stehen auf gemieteten Rack-Plätzen im Rechenzentrum eines Anbieters, der redundante Stromversorgung, Kühlung, Zutritts- und Brandschutz sowie eine schnelle Internetanbindung stellt; anders als in der Cloud bleiben Hardware und Betrieb beim Kunden, anders als im eigenen Serverraum spart er den Aufbau dieser Infrastruktur.

Erklärung:
**Colocation** (auch Housing) liegt zwischen eigenem Rechenzentrum und Cloud:
- **Kunde:** besitzt Server und Daten, installiert und wartet sie selbst (meist per Fernzugriff).
- **Anbieter:** stellt Rack-Platz (Einbauplatz im Serverschrank), abgesicherten Strom mit USV und Notstrom, Klimatisierung, Zutrittskontrolle, Brandschutz und schnelle Anbindung.
Das lohnt sich, wenn ein Unternehmen eigene Hardware und volle Kontrolle behalten will (Datenhoheit, spezielle Systeme), aber kein eigenes Rechenzentrum mit dieser Ausstattung bauen möchte.
Nachteile: Für den Hardwaretausch muss der Kunde anreisen oder Vor-Ort-Service buchen, und die Hardware kauft er weiterhin selbst.
Beispiel: Ein Mittelständler stellt seine zwei Server in ein regionales Rechenzentrum, statt den Kellerraum aufwendig zu klimatisieren und abzusichern.

### K3 – Managed Services: Begriff und Umfang (Stufe 2 Verstehen)
Du kannst Managed Services erklären: Ein Dienstleister übernimmt wiederkehrende Betriebsaufgaben wie Updates, Datensicherung, Überwachung oder Helpdesk dauerhaft nach SLA; der Umfang kann von einzelnen Anwendungen über einzelne Server bis zum Betrieb eines ganzen Rechenzentrums reichen.

Erklärung:
Bei **Managed Services** kauft ein Unternehmen nicht einzelne Einsätze, sondern die laufende Betreuung festgelegter Aufgaben – meist zum festen Monatspreis und mit SLA.
- **Umfang** je nach Vertrag: einzelne Anwendungen (etwa Groupware oder CRM), einzelne Server (Updates, Datensicherung, Snapshots, Rückrollen fehlgeschlagener Updates) bis zum Betrieb eines ganzen Rechenzentrums.
- Der Unterschied zum Einsatz nur bei Störungen (Break/Fix): Der Dienstleister überwacht vorbeugend und ist an zugesagte Reaktionszeiten gebunden.
Beispiel: Eine Steuerkanzlei lässt Server, Backup und Updates von einem Systemhaus betreuen und bezahlt dafür monatlich je Arbeitsplatz.

### K4 – Managed Services nach Know-how des Kunden (Stufe 4 Beurteilen)
Du kannst begründen, welche Betriebsaufgaben ein Kunde als Managed Service einkauft: Was er mangels eigenem Fachpersonal oder Know-how nicht sicher selbst leisten kann, vergibt er; was seine eigene IT beherrscht, behält er.

Erklärung:
Wie viel ein Kunde selbst macht, sollte zu seinem Wissen und seiner Zeit passen – übernimmt er sich, leiden Sicherheit und Verfügbarkeit.
- **kein IT-Personal:** Infrastruktur, Server und Anwendungen komplett betreuen lassen.
- **ein IT-erfahrener Mitarbeiter:** z. B. Benutzerverwaltung und Anwendungen selbst, Serverbetrieb und Backup beim Dienstleister.
- **eigene IT-Abteilung:** Betrieb selbst, nur Spezialthemen wie Rechenzentrum oder Sicherheitsüberwachung rund um die Uhr einkaufen.
Zu bedenken ist auch die Vertretung: Eine einzelne Person kann bei Urlaub und Krankheit keinen durchgehenden Betrieb sichern.
Beispiel: Eine Arztpraxis ohne IT-Personal kauft alles ein; ein Softwarehaus mit Admin-Team betreut seine Server selbst und bezieht nur das Rechenzentrum.

## Lehrnotiz: Hosting, Colocation und Managed Services auswählen

**Aufteilung:**
- Hosting-Varianten auswählen: K1
- Colocation beurteilen: K2
- Managed Services erklären und zuschneiden: K3, K4

**Schon geprüft:** Noch nicht geprüft: K1–K4

**Kerngedanken:**
- Die Hosting-Wahl ergibt sich aus wenigen Fragen. Wer eigene Software oder Administratorrechte braucht, braucht einen eigenen (virtuellen) Server statt Shared Webhosting. Muss die Leistung verlässlich sein, nimmt man VDS statt VPS; braucht man eine ganze Maschine ohne Mitnutzer, einen Dedicated Server. Kann den Server niemand betreuen, kommt Managed Hosting dazu.
- Beim Hosting gehört der Server dem Anbieter, bei Colocation dem Kunden; der Anbieter liefert dort nur die Umgebung. Colocation passt deshalb nur, wenn der Kunde den Betrieb selbst leisten kann.
- Managed Hosting meint den betreuten Mietserver beim Hoster. Managed Services sind weiter gefasst und können auch Server, PCs und Anwendungen im Haus des Kunden betreffen.
- Abgrenzung: IaaS, PaaS, SaaS und die Liefermodelle der Cloud gehören zu PB1-12-2-3.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Überbuchung beim VPS und feste Zusicherung beim VDS: (1) Auf dem physischen Server läuft ein Hypervisor, der jeder virtuellen Maschine virtuelle CPU-Kerne (vCPUs) und Arbeitsspeicher zuteilt. (2) Beim VPS vergibt der Anbieter häufig an alle Kunden zusammen mehr vCPUs, als der Server physische Kerne hat; das ist die Überbuchung. (3) Der Scheduler des Hypervisors verteilt die Rechenzeit der physischen Kerne in kurzen Zeitscheiben auf die vCPUs, die gerade rechnen wollen. (4) Rechnen viele virtuelle Maschinen gleichzeitig, wartet jede vCPU länger auf einen freien Kern, und die Anwendung im VPS wird langsamer. (5) Beim VDS reserviert der Hypervisor Kerne und Arbeitsspeicher fest für eine virtuelle Maschine, sodass andere Kunden sie nicht belegen können. (6) Beim Dedicated Server entfällt diese Aufteilung, weil ein Kunde die gesamte Hardware allein nutzt.

**Typische Missverständnisse:**
- Viele denken, VPS und VDS unterschieden sich im Zugriff oder in der Art des Servers; richtig ist: Beide sind virtuelle Server mit vollem Zugriff, der Unterschied liegt nur in geteilten oder fest zugesicherten Ressourcen.
- Viele denken, bei Colocation kümmere sich das Rechenzentrum um die Server; richtig ist: Es stellt Platz, Strom, Kühlung, Schutz und Anbindung, Hardware und Wartung bleiben beim Kunden.

**Fachwörter:**
- Shared Webhosting: Webspace auf gemeinsam genutztem Server
- VPS: virtueller Server, CPU-Kerne geteilt
- VDS: virtueller Server, Ressourcen fest zugesichert
- Dedicated Server: ganzer physischer Server für einen Kunden
- Managed Hosting: Anbieter richtet Server ein und wartet ihn
- Colocation: eigene Server im fremden Rechenzentrum
- Managed Services: dauerhafte Betreuung festgelegter Aufgaben nach SLA
- Break/Fix: Einsatz nur bei Störungen

**So fragt die IHK:** In Prüfungsbereich 1 gab es noch keine eigene Aufgabe; einmal nannte ein Lösungshinweis zur technischen Machbarkeit „Eigen- oder Fremdhosting?“ als Gesichtspunkt. Zu erwarten ist: zu einem Bedarf eine Variante auswählen und begründen oder eine Lösung beurteilen, etwa 2–3 Punkte je begründetem Gesichtspunkt. Es zählt der Bezug zur Situation (eigene Software, planbare Leistung, wer Hardware und Betrieb trägt, Fachwissen). Wer VPS und VDS oder Colocation und Hosting verwechselt, bekommt für die Begründung keinen Punkt.

**Fallen:**
- Shared Webhosting als kleinen eigenen Server ansehen oder für eine Anwendung mit eigener Laufzeitumgebung wählen.
- Einen VPS wählen, obwohl verlässlich gleiche Leistung verlangt ist, oder die Abgrenzung zum VPS in der Begründung weglassen.
- Einen Dedicated Server wählen, ohne zu begründen, wozu ein ganzer physischer Server nötig ist.
- Einen VDS wählen, obwohl die volle Leistung einer Maschine ohne Mitnutzer verlangt ist.
- Shared Webhosting als SaaS einordnen. Der Kunde nutzt keine fertige Anwendung, sondern legt eigene Inhalte und Skripte in einer vorgegebenen Umgebung ab; das liegt näher an PaaS. Eigene Software installieren kann er aber nicht.
- Colocation für einen Kunden ohne IT-Personal empfehlen, „weil dann alles professionell ist“.
- Bei der Beurteilung von Colocation den Nachteil weglassen oder nicht konkret sagen, was der Anbieter stellt.
- Managed Services als Hilfe auf Abruf beschreiben; entscheidend sind dauerhaft, wiederkehrend, vorbeugend, nach SLA.
- Auslagern mit „bequemer“ begründen statt mit fehlendem Fachpersonal oder Know-how.
- „Alles einkaufen“ oder „alles selbst machen“ antworten, ohne zu prüfen, was die vorhandenen Leute tatsächlich beherrschen.
