Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Schichten, Komponenten, Protokolle und Dienste › Übertragungsprotokolle: TCP, UDP, HTTP, HTTPS

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

## Stoff: Übertragungsprotokolle: TCP, UDP, HTTP, HTTPS

Ziel: Eigenschaften von TCP und UDP erläutern, Protokolle einschließlich HTTPS zielgerichtet einsetzen und Fehler im Web einordnen.

Das muss ich können:

### K1 – Eigenschaften von TCP und UDP (Stufe 2 Verstehen)
Du kannst die Eigenschaften von TCP (verbindungsorientiert, Bestätigung, richtige Reihenfolge, erneutes Senden verlorener Pakete) und UDP (verbindungslos, ohne Zustellgarantie, wenig Aufwand, schnell) erläutern.

Erklärung:
- **TCP:** **verbindungsorientiert** (Verbindungsaufbau), **Bestätigung**, **richtige Reihenfolge**, verlorene Pakete werden **neu gesendet** → zuverlässig
- **UDP:** **verbindungslos**, **keine Zustellgarantie**, wenig Aufwand → **schnell**

### K2 – Passende Protokolle für eine Anwendung (Stufe 3 Anwenden)
Du kannst für eine Anwendung die passenden Protokolle einsetzen und begründen, zum Beispiel TCP für Dateiübertragung und Webseiten, UDP für Sprache und Video in Echtzeit, HTTPS statt HTTP, sobald Anmeldedaten oder personenbezogene Daten übertragen werden (was das TLS-Zertifikat bewirkt, steht in PB1-10).

Erklärung:
Passend wählen:
- **TCP:** Dateiübertragung, Webseiten, E-Mail – alles muss ankommen
- **UDP:** Sprache und Video in **Echtzeit**, DNS-Anfragen – Tempo wichtiger als jedes Paket
- **HTTPS statt HTTP**, sobald **Anmeldedaten** oder **personenbezogene Daten** übertragen werden (heute praktisch immer)

### K3 – Ursachen der Fehlermeldung HTTP 404 (Stufe 2 Verstehen)
Du kannst mögliche Ursachen einer Fehlermeldung wie HTTP 404 beschreiben: Seite oder Datei gelöscht oder verschoben, URL fehlerhaft angelegt, falsch verlinkt oder falsch eingegeben; davon abgrenzen, dass Server oder Namensauflösung nicht erreichbar sind.

Erklärung:
**HTTP 404 (Not Found):** Der Server antwortet, findet die Ressource aber nicht:
- Seite/Datei **gelöscht oder verschoben**
- URL **fehlerhaft angelegt**, **falsch verlinkt** oder **falsch eingegeben**
- Webserver läuft, aber die **Anwendung** ist unter diesem Pfad noch nicht bereitgestellt (naheliegend beim Testen)
Abgrenzung: Ist der **Server aus** oder klappt die **Namensauflösung** nicht, kommt technisch gar keine HTTP-Antwort – also auch kein 404, der Browser zeigt eine eigene Fehlermeldung. Die IHK-Musterlösung (2021W-PB1-A3-c) ließ diese Ursachen trotzdem gelten (Webserver nicht in Betrieb, Verbindung unterbrochen, Domainname nicht auflösbar oder nicht mehr vorhanden). Nenne in der Prüfung zuerst eine der sicheren Ursachen oben.

### K4 – Eigenschaften von IP: verbindungslos, ohne Quittung (Stufe 2 Verstehen)
Du kannst über die Paketvermittlung aus AP1 hinaus die Eigenschaften von IP erläutern: unabhängig von der Übertragungstechnik darunter (Ethernet, WLAN, Glasfaser), verbindungslos und ohne Empfangsbestätigung, sodass verlorene oder vertauschte Pakete erst eine höhere Schicht wie TCP bemerkt und ausgleicht.

Erklärung:
IP ist das Protokoll, das alle Netze des Internets verbindet. Es macht absichtlich wenig – nur Adressieren und Weiterleiten, so gut es geht (best effort).
- **Adressierung:** Die IP-Adresse enthält Netz- und Hostanteil; Router entscheiden anhand des Netzanteils.
- **Unabhängig vom Medium:** Dasselbe IP-Paket reist über Ethernet, WLAN oder Mobilfunk; nur die Schicht darunter wechselt.
- **Verbindungslos, ohne Quittung:** Jedes Paket wird für sich zugestellt – oder auch nicht. Pakete können verloren gehen, doppelt oder in anderer Reihenfolge ankommen.
- **Zuverlässigkeit** liefert erst **TCP** darüber; Anwendungen, denen Tempo wichtiger ist, nehmen UDP und leben mit Verlusten.
Beispiel: Bei einer Videokonferenz über UDP sieht man ein verlorenes IP-Paket kurz als Bildstörung, weil niemand es nachsendet.

### K5 – TCP-Verbindungsaufbau und -abbau: Drei-Wege-Handshake (Stufe 2 Verstehen)
Du kannst beschreiben, wie TCP eine Verbindung auf- und abbaut: Beim Drei-Wege-Handshake schickt der Client ein SYN, der Server antwortet mit SYN-ACK, der Client bestätigt mit ACK; beendet wird mit FIN und Bestätigung von beiden Seiten; häufen sich im Monitoring SYN-Fehler, scheitert schon der Aufbau (z. B. Dienst gestoppt, Port gesperrt, Server überlastet), FIN-Fehler zeigen Verbindungen, die nicht sauber beendet werden.

Erklärung:
„Verbindungsorientiert“ heißt bei TCP: Bevor Daten fließen, stimmen sich beide Seiten ab.
- **Aufbau (Drei-Wege-Handshake):** Client → `SYN` (ich möchte, meine Startnummer ist x), Server → `SYN-ACK` (einverstanden, meine Startnummer ist y), Client → `ACK`. Danach ist die Verbindung offen.
- Die Startnummern sind die Grundlage der **Sequenznummern**, mit denen TCP Reihenfolge und Verluste bemerkt.
- **Abbau:** Jede Seite sendet `FIN` und bekommt ein `ACK` – jede Richtung wird für sich geschlossen.
- **Im Monitoring:** **SYN-Fehler** bzw. **FIN-Fehler** zählen TCP-Nachrichten, die auf einen gescheiterten Verbindungsaufbau bzw. -abbau hinweisen. Viele unbeantwortete SYN zeigen, dass der Aufbau scheitert (Dienst gestoppt, Firewall sperrt den Port, Server überlastet oder ein SYN-Flood-Angriff). Fehler beim FIN zeigen Verbindungen, die nicht sauber geschlossen werden und Ressourcen belegen.
Beispiel: Ein Webshop meldet plötzlich tausende halb offene Verbindungen – ein Hinweis auf einen SYN-Flood.

### K6 – Ports und Sockets (Stufe 2 Verstehen)
Du kannst die Aufgabe von Ports und Sockets erläutern: Die Portnummer (16 Bit, Transportschicht) adressiert auf einem Rechner die Anwendung bzw. den Dienst, Server-Dienste lauschen auf festen Standardports, Clients nehmen meist zufällige hohe Ports; IP-Adresse und Port zusammen bilden einen Socket, und jede Verbindung ist durch zwei Sockets eindeutig festgelegt, sodass ein Server viele Dienste und Verbindungen gleichzeitig bedient.

Erklärung:
Die IP-Adresse bringt ein Paket zum richtigen Rechner, der **Port** zum richtigen Programm darauf.
- Portnummern sind 16 Bit groß (0 bis 65535). Dienste haben feste Standardports, die du aus einer Porttabelle abliest (AP1-6-1-2), etwa 443 für HTTPS oder 22 für SSH.
- Der Client wählt für jede Verbindung einen zufälligen hohen Quellport, damit die Antworten bei der richtigen Verbindung landen.
- **Socket** = IP-Adresse + Port, z. B. `192.168.1.5:51234`. Eine Verbindung besteht aus zwei Sockets: `192.168.1.5:51234 ↔ 203.0.113.10:443`.
- Weil sich die Verbindungen im Client-Socket unterscheiden, bedient ein Webserver auf Port 443 tausende Clients gleichzeitig, und auf demselben Rechner läuft daneben ein Mailserver auf seinem eigenen Port.
Beispiel: Zwei Browserfenster zum selben Shop haben dieselbe Ziel-IP und denselben Zielport, aber verschiedene Quellports.

### K7 – TCP-Fluss- und Staukontrolle, UDP-Multicast (Stufe 2 Verstehen)
Du kannst über Bestätigung und Nachsenden hinaus erläutern, wie TCP den Datenfluss regelt: Mit der Flusssteuerung meldet der Empfänger, wie viele Daten er gerade aufnehmen kann, mit der Staukontrolle drosselt der Sender sein Tempo, sobald Pakete verloren gehen; UDP verzichtet auf beides, hat dafür einen kleineren Kopf und kann Daten per Multicast an viele Empfänger zugleich schicken.

Erklärung:
TCP sorgt nicht nur dafür, dass alles ankommt, sondern auch dafür, dass niemand überrollt wird.
- **Flusssteuerung** schützt den **Empfänger**: Er teilt in jeder Bestätigung mit, wie viel Platz sein Puffer noch hat. Ist er voll, wartet der Sender.
- **Staukontrolle** schützt das **Netz**: Der Sender beginnt vorsichtig, steigert das Tempo und drosselt es deutlich, sobald Pakete verloren gehen – ein Zeichen für überlastete Router.
- **UDP** kennt weder Verbindung noch Bestätigung noch Drosselung. Sein Kopf ist kleiner, und weil kein fester Verbindungspartner nötig ist, eignet es sich für **Multicast**, etwa für Fernsehen über IP an viele Empfänger.
Beispiel: Ein großer Download wird langsamer, sobald im selben Netz eine Videokonferenz startet – die Staukontrolle von TCP reagiert auf den Engpass.

### K8 – HTTP-Anfrage und -Antwort, HTTPS über TLS (Stufe 2 Verstehen)
Du kannst das Anfrage-Antwort-Prinzip von HTTP erläutern: Der Client schickt eine Anfrage (Request) mit Methode, Pfad und Kopfzeilen, der Server antwortet (Response) mit Statuscode, Kopfzeilen und Inhalt; HTTP überträgt alles im Klartext, HTTPS ist dasselbe Protokoll in einer TLS-verschlüsselten Verbindung.

Erklärung:
HTTP folgt einem einfachen Muster: Jede Anfrage bekommt genau eine Antwort, und der Server merkt sich zwischen zwei Anfragen nichts (zustandslos; Anmeldungen laufen deshalb über Cookies oder Tokens).
- **Request:** Methode (z. B. `GET`, `POST`), Pfad der Ressource, Kopfzeilen (z. B. `Host`, `Accept`), bei Bedarf ein Rumpf mit Daten.
- **Response:** Statuscode (z. B. `200 OK`, `404 Not Found`), Kopfzeilen (z. B. `Content-Type`), Rumpf mit HTML, JSON oder einem Bild.
- **HTTP** läuft im Klartext – wer mitliest, sieht alles, auch Passwörter. **HTTPS** schickt dieselben Anfragen durch eine mit **TLS** verschlüsselte Verbindung (Standardport 443 statt 80).
Eine Anfrage nach einer API-Dokumentation zusammenstellen übst du in PB1-7-1-4.
Beispiel: Der Browser fragt `GET /produkte` an und bekommt `200 OK` mit der HTML-Seite zurück.

### K9 – GET oder POST für Formulardaten (Stufe 3 Anwenden)
Du kannst für ein Formular die passende HTTP-Methode einsetzen: GET hängt die Daten als Parameter an die URL (sichtbar, landet in Verlauf, Lesezeichen und Server-Logs, in der Länge begrenzt, passend zum Suchen und Filtern), POST überträgt sie im Rumpf der Anfrage (auch große Datenmengen und Dateien, passend für Daten, die gespeichert oder verarbeitet werden, etwa Anmeldung oder Bestellung).

Erklärung:
Beide Methoden schicken Formulardaten zum Server – der Unterschied liegt darin, **wo** die Daten stehen.
- **GET:** Die Daten hängen an der URL, z. B. `/suche?q=router&seite=2`. Die Seite lässt sich als Lesezeichen speichern und teilen, aber die Werte stehen auch im Browserverlauf und in Logdateien, und die Länge ist begrenzt. Passt für Abfragen, die nichts verändern.
- **POST:** Die Daten stehen im Rumpf der Anfrage, nicht in der URL. Geeignet für große Mengen, Datei-Uploads und alles, was etwas anlegt oder ändert.
- **Wichtig:** POST ist nicht verschlüsselt, nur weniger sichtbar – Passwörter gehören immer in eine HTTPS-Verbindung.
Beispiel: Die Produktsuche eines Shops nutzt GET, das Anmeldeformular und die Bestellung POST.

## Lehrnotiz: Übertragungsprotokolle: TCP, UDP, HTTP, HTTPS

**Aufteilung:**
- IP als Grundlage: K4
- Ports und Sockets: K6
- TCP und UDP, erst die Eigenschaften, dann Verbindungsaufbau und -abbau, dann der Datenfluss: K1, K5, K7
- Pause möglich nach TCP und UDP.
- HTTP mit Anfrage, Antwort, GET und POST: K8, K9
- Das passende Protokoll wählen, auch HTTPS: K2
- Fehlermeldung 404: K3

**Schon geprüft:** In Prüfungen: K3 (2021W) · Noch nicht geprüft: K1, K2, K4–K9

**Kerngedanken:**
- Zwischen TCP und UDP entscheidet eine Frage: Was wäre für diese Anwendung schlimmer, ein fehlendes Stück oder eine Verzögerung? Bei Echtzeit käme ein nachgesendetes Paket ohnehin zu spät.
- Bei „begründen“ reicht der Name des Protokolls nicht. Verlangt ist eine Eigenschaft des Protokolls, bezogen auf die genannte Anwendung.
- „Unzuverlässig“ heißt bei IP nur: keine Garantie und keine Bestätigung. Es heißt nicht, dass ständig Pakete verloren gehen.

**Typische Missverständnisse:**
- Viele denken, ein 404 bedeute, der Server sei ausgefallen. Richtig ist: Ein Statuscode ist eine Antwort, wer ihn schickt, läuft.
- Viele denken, ein Server brauche für jeden Client einen eigenen Port. Richtig ist: Alle nutzen denselben Zielport, die Verbindungen unterscheiden sich in IP-Adresse oder Quellport des Clients – auch bei zwei Clients hinter derselben öffentlichen Adresse.
- Viele denken, IP bestätige den Empfang. Richtig ist: Das tut erst TCP.

**Fachwörter:**
- verbindungsorientiert: Verbindung wird vor den Daten aufgebaut
- verbindungslos: senden ohne Aufbau und Bestätigung
- Drei-Wege-Handshake: SYN, SYN-ACK, ACK
- Socket: IP-Adresse plus Port
- Flusssteuerung: Empfänger meldet freien Pufferplatz
- Staukontrolle: Sender drosselt bei Paketverlust
- Statuscode: Ergebniszahl in der HTTP-Antwort
- Multicast: an viele Empfänger zugleich senden

**So fragt die IHK:**
- Bisher gab es eine echte Teilaufgabe (2021W): Beim Test einer Webanwendung zeigt der Browser HTTP 404. „Beschreiben Sie eine mögliche Fehlerursache“, 2 Punkte, eine Ursache genügt.
- Die IHK-Lösung wertete großzügig und ließ auch Serverausfall, unterbrochene Verbindung und nicht auflösbare Domain gelten. So ist auch hier zu werten; gelehrt werden die sicheren Ursachen.
- Zu TCP/UDP, HTTPS und Ports gibt es noch keine echte Aufgabe. Der Prüfungskatalog verlangt, Protokolle zielgerichtet einzusetzen.
- Zu erwarten sind dort kurze Teilaufgaben mit 2–4 Punkten am Projekt der Prüfung, etwa „Begründen Sie die Wahl …“, „Erläutern Sie zwei Eigenschaften …“ oder GET gegen POST.

**Fallen:**
- Flusssteuerung und Staukontrolle vertauschen (wer schützt wen).
- UDP einen Datenstrom zuschreiben. UDP sendet einzelne, unabhängige Datagramme, einen Bytestrom bietet nur TCP.
- Einen Socket nur als Port oder nur als IP-Adresse beschreiben.
- Das SYN-ACK dem Client zuordnen oder den Abbau mit FIN weglassen.
- „UDP für alles Schnelle“ wählen. Ein Download muss vollständig sein, also TCP.
- Ein Protokoll wählen, ohne es mit der Anwendung zu begründen.
- HTTPS nur mit „sicherer“ begründen. Erwartet wird „verschlüsselt statt Klartext“.
- Bei POST für Zugangsdaten den Hinweis auf HTTPS vergessen.
- Statuscode und Methode vertauschen. Die Methode steht in der Anfrage, der Statuscode in der Antwort.
- Bei 404 nur ein Stichwort wie „falsche URL“ schreiben. „Beschreiben“ verlangt die Ursache mit Zusammenhang.
