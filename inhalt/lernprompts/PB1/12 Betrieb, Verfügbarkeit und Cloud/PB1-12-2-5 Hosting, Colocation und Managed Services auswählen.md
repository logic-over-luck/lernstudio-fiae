Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Monitoring, Störungen und Cloud-Modelle › Hosting, Colocation und Managed Services auswählen

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
