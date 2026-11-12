Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Modelle, Protokolle und Geräte › Protokolle und ihre Aufgaben

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP1 und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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

## Stoff: Protokolle und ihre Aufgaben

Ziel: Gängige Protokolle ihrem Zweck zuordnen und für eine Verbindung das passende, sichere Protokoll wählen und begründen.

Das muss ich können:

### K2 – IMAP statt POP3 fürs Postfach (Stufe 4 Beurteilen)
Du kannst begründen, warum für ein E-Mail-Postfach IMAP statt POP3 gewählt wird: Die Mails bleiben auf dem Server und sind von mehreren Geräten aus nutzbar.

Erklärung:
- **IMAP:** Die Mails **bleiben auf dem Server**. Ordner und Gelesen-Status sind auf allen Geräten gleich – am PC, am Notebook und am Smartphone.
- **POP3:** lädt die Mails auf **ein** Gerät und löscht sie meist auf dem Server. Auf einem zweiten Gerät fehlen sie dann.
Begründung: Wer sein Postfach von mehreren Geräten nutzt, braucht IMAP.
Vorteil von POP3 wäre nur: Mails sind offline lesbar, der Server wird entlastet.

### K3 – SSH statt Telnet für Fernzugriff (Stufe 4 Beurteilen)
Du kannst begründen, warum für einen Fernzugriff SSH statt Telnet oder einer seriellen Verbindung gewählt wird: SSH überträgt verschlüsselt, Telnet und eine serielle Verbindung nicht.

Erklärung:
- **SSH** verschlüsselt die **ganze Verbindung** – auch Benutzername und Passwort.
- **Telnet** und eine **serielle Verbindung** übertragen alles **unverschlüsselt** – wer mitliest, sieht das Passwort im Klartext.
Begründung: Für einen Fernzugriff über das Netz ist SSH die sichere Wahl.
Eine serielle Verbindung ist eigentlich ein direktes Kabel zum Gerät (Konsolenkabel) und gar kein Netzprotokoll; als Grund gegen sie zählt in der Prüfung trotzdem „unverschlüsselt“.

### K4 – Standardports aus der Porttabelle (Stufe 1 Wiedergeben · in der Prüfung vorgegeben: Porttabelle)
Du kannst mithilfe einer vorgegebenen Porttabelle Verbindungsart und Standardport für eine Verbindung angeben, zum Beispiel SSH mit Port 22.

Erklärung:
Ein **Port** ist die Nummer, über die ein Rechner eine Verbindung dem richtigen Dienst zuordnet.
In der Prüfung bekommst du eine Porttabelle – du musst die Nummern nicht auswendig wissen.
So gehst du vor:
- Klären, **welche Verbindung** gebraucht wird (z. B. „sicherer Fernzugriff auf einen Linux-Server“ → SSH).
- In der Tabelle den **Standardport** ablesen (SSH → 22).
Weitere Beispiele: HTTPS → 443, SMTP → 25, DNS → 53.

### K5 – Gängige Protokolle und ihr Zweck (Stufe 2 Verstehen)
Du kannst gängige Protokolle ihrem Zweck zuordnen: Ethernet für die Übertragung im lokalen Netz, IP für die Adressierung, HTTP und HTTPS für Webseiten, SMTP, IMAP und POP3 für E-Mail, DNS für Namen, DHCP für Adressen, SSH für Fernzugriff.

Erklärung:
Ein **Protokoll** ist eine feste Vereinbarung, wie Geräte Daten austauschen.
- **Ethernet:** Übertragung im kabelgebundenen lokalen Netz.
- **IP:** Adressierung und Weiterleitung über Router.
- **HTTP / HTTPS:** Webseiten – HTTP im Klartext, HTTPS verschlüsselt.
- **SMTP:** E-Mails **versenden**.
- **IMAP / POP3:** E-Mails **abrufen**.
- **DNS:** Namen in IP-Adressen auflösen (z. B. www.example.com → 203.0.113.10).
- **DHCP:** Netzwerkeinstellungen automatisch verteilen.
- **SSH:** verschlüsselter Fernzugriff.

### K6 – Weitere Protokolle: FTP, SFTP, NTP, LDAP (Stufe 2 Verstehen)
Du kannst weitere gängige Protokolle ihrem Zweck zuordnen: FTP und SFTP für Dateiübertragung, NTP für die Uhrzeit, LDAP für Verzeichnisdienste.

Erklärung:
- **FTP:** Dateiübertragung – unverschlüsselt.
- **SFTP:** Dateiübertragung – verschlüsselt über SSH, deshalb auf Port 22 (nicht auf den FTP-Ports 20/21).
- **NTP:** synchronisiert die Uhrzeit der Geräte.
- **LDAP:** Zugriff auf Verzeichnisdienste, z. B. Benutzer und Gruppen im Active Directory.

## Lehrnotiz: Protokolle und ihre Aufgaben

**Aufteilung:**
- Was ein Protokoll ist; Netz-Protokolle (Ethernet, IP, DHCP, DNS), dann Web, E-Mail und Fernzugriff: K5
- IMAP oder POP3: K2
- Dateien, Uhrzeit, Verzeichnis: K6
- Sicherer Fernzugriff und Porttabelle: K3, K4

**Schon geprüft:** In Prüfungen: K2 (2025F), K3 (2025F), K4 (2025F) · Noch nicht geprüft: K5, K6

**Kerngedanken:**
- Ein Protokoll ist ein Satz vereinbarter Regeln, nach denen Geräte Daten austauschen; an einem Vorgang wie dem Lesen einer E-Mail sind viele beteiligt.
- Ein Port ist die Nummer, über die ein Rechner eine eingehende Verbindung dem richtigen Dienst zuordnet. Der Standardport ist die Nummer, unter der ein Dienst üblicherweise erreichbar ist.
- Ein Mailprogramm braucht immer zwei Protokolle: eines zum Versenden und eines zum Abrufen.
- Begründen heißt hier: den Mechanismus nennen, nicht ein Werturteil. „Die Mails bleiben auf dem Server“ oder „überträgt unverschlüsselt“ trägt die Punkte, „moderner“, „besser“ oder „unsicher“ allein nicht. Mehr als ein klarer Grund ist nicht verlangt.

**Typische Missverständnisse:**
- Viele denken, DNS verteile die Adressen; richtig ist: DHCP verteilt die Netzwerkeinstellungen, DNS übersetzt nur Namen in Adressen.
- Viele denken, im internen Netz sei Verschlüsselung egal; richtig ist: Auch dort kann mitgelesen werden.
- Viele denken, SFTP sei FTP mit Passwort oder dasselbe wie FTPS; richtig ist: SFTP ist Dateiübertragung über eine SSH-Verbindung, und FTP überträgt auch das Passwort im Klartext. FTPS ist das alte FTP, abgesichert mit TLS: ebenfalls verschlüsselt, aber mit anderen Ports als SFTP.

**Fachwörter:**
- Protokoll: vereinbarte Regeln für den Datenaustausch
- Standardport: übliche Portnummer eines Dienstes
- Klartext: unverschlüsselt, für Mitlesende lesbar
- Verzeichnisdienst: zentrale Ablage für Benutzer und Gruppen

**So fragt die IHK:**
- Echte Vorlage (2025F): In einem kleinen Büro wird ein Mailclient eingerichtet und eine gesicherte Verbindung zu einem Server aufgebaut.
- Vorgegeben waren die Serverdaten mit IPv4-Adresse, ein englischsprachiges Verbindungsformular (Host Name or IP address, Port, Connection type mit SSH, Serial, Telnet) und eine Porttabelle mit Beschreibungen.
- „Geben Sie eine Begründung an“ für IMAP statt POP3, 2 Punkte. Gezählt hat: IMAP lässt eine Kopie der Mail auf dem Server, dadurch ist das Postfach von mehreren Clients aus nutzbar.
- „Geben Sie mithilfe der Porttabelle die Einstellungen an“, 3 Punkte: IP-Adresse des Servers, Port 22, Verbindungsart SSH.
- „Begründen Sie, warum Sie die übrigen Verbindungstypen nicht gewählt haben“, 2 Punkte: Serial und Telnet sind unverschlüsselt.
- Zu K5 und K6 gibt es keine echte Aufgabe.

**Fallen:**
- Ethernet für den ganzen Weg ins Internet nennen; Ethernet überträgt nur im lokalen Netz, den Weg zwischen Netzen findet IP.
- Aus „wir nutzen IMAP“ schließen, dass auch über IMAP gesendet wird.
- HTTP nennen, wo die Verbindung verschlüsselt ist oder sein soll.
- Im Verbindungsformular nur Port und Verbindungsart eintragen und die Adresse des Servers vergessen.
- Für SFTP einen FTP-Port aus der Tabelle ablesen; SFTP läuft über SSH und nutzt dessen Port.
- Beim Beurteilen eines Vorschlags POP3 pauschal ablehnen: Liest jemand nur an einem Gerät, ist POP3 vertretbar (Mails offline lesbar, Server entlastet). Zum Urteil gehören der Bezug auf die Lage und die Bedingung, unter der es kippt.
- Übersehen, was aus POP3 folgt: Die Mails liegen dann nur noch auf dem einen Gerät und müssen bei einem Gerätewechsel von Hand übertragen und gesichert werden.
