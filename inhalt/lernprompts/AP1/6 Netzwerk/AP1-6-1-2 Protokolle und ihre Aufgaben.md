Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Modelle, Protokolle und Geräte › Protokolle und ihre Aufgaben

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K3 – Aufbau einer SSH-Verbindung: (1) Der SSH-Client baut eine TCP-Verbindung zum SSH-Server auf dem Standardport 22 auf. (2) Client und Server einigen sich auf die Verschlüsselungsverfahren und berechnen per Schlüsselaustausch einen gemeinsamen Sitzungsschlüssel, der selbst nie übertragen wird. Dabei weist sich der Server mit seinem Host-Schlüssel aus. (3) Der Client vergleicht den Host-Schlüssel mit dem Schlüssel, den er für diesen Server gespeichert hat. Beim allerersten Verbindungsaufbau bestätigt der Benutzer stattdessen einmalig dessen Fingerabdruck. (4) Ab diesem Punkt verschlüsseln beide Seiten alle übertragenen Daten mit dem Sitzungsschlüssel. (5) Erst in diesem verschlüsselten Kanal meldet sich der Benutzer am Server an, mit Benutzername und Passwort oder mit einem Schlüsselpaar. (6) Danach laufen Befehle und Ausgaben verschlüsselt. Bei Telnet gehen Anmeldung und Befehle dagegen ohne diesen Vorlauf als Klartext durchs Netz.

**Typische Missverständnisse:**
- Viele denken, DNS verteile die Adressen; richtig ist: DHCP verteilt die Netzwerkeinstellungen, DNS übersetzt nur Namen in Adressen.
- Viele denken, im internen Netz sei Verschlüsselung egal; richtig ist: Auch dort kann mitgelesen werden.
- Viele denken, SFTP sei FTP mit Passwort oder dasselbe wie FTPS; richtig ist: SFTP ist Dateiübertragung über eine SSH-Verbindung, und FTP überträgt auch das Passwort im Klartext. FTPS ist das alte FTP, abgesichert mit TLS: ebenfalls verschlüsselt, aber mit anderen Ports als SFTP.

**Fachwörter:**
- Protokoll: vereinbarte Regeln für den Datenaustausch
- Standardport: übliche Portnummer eines Dienstes
- IMAP: Postfach bleibt auf dem Server, für mehrere Geräte
- POP3: Nachrichten abrufen, keine vollständige Postfachsynchronisation wie IMAP
- SSH: verschlüsselter Fernzugriff, Standardport 22
- Telnet: unverschlüsselter Fernzugriff
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
