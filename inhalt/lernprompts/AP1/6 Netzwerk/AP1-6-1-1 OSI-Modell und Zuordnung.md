Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Modelle, Protokolle und Geräte › OSI-Modell und Zuordnung

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

## Stoff: OSI-Modell und Zuordnung

Ziel: Die Schichten des OSI-Modells nennen und Protokolle, Adressen, Geräte und Fehler der richtigen Schicht zuordnen.

Das muss ich können:

### K1 – Sieben OSI-Schichten in Reihenfolge (Stufe 1 Wiedergeben)
Du kannst die sieben Schichten des OSI-Modells in der richtigen Reihenfolge mit deutschem oder englischem Namen nennen.

Erklärung:
Von unten (1) nach oben (7):
- **1 Bitübertragung** (Physical)
- **2 Sicherung** (Data Link)
- **3 Vermittlung / Netzwerk** (Network)
- **4 Transport** (Transport)
- **5 Sitzung / Kommunikationssteuerung** (Session)
- **6 Darstellung** (Presentation)
- **7 Anwendung** (Application)
Eselsbrücke (englisch, von unten): „**P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way“.

### K2 – Protokolle und Adressen je OSI-Schicht (Stufe 2 Verstehen)
Du kannst Begriffe der richtigen Schicht zuordnen: Kabel, Buchse und LED (leuchtet sie, steht die physische Verbindung) zu 1, MAC-Adresse, Ethernet und ARP zu 2, IPv4- und IPv6-Adressen zu 3, TCP, UDP und Ports zu 4, DNS, DHCP und HTTPS zu 7; zeigt eine blinkende LED an, dass Frames gesendet werden, kann ihre Sichtprüfung auch als Test der Schicht 2 dienen.

Erklärung:
- **Schicht 1:** Kabel, Buchse, Stecker, Signale; die **LED, die leuchtet**, wenn die physische Verbindung steht (Link)
- **Schicht 2:** MAC-Adresse, Ethernet-Frames (Frame = Datenpaket der Schicht 2), **ARP**, Switch; eine **blinkende LED** zeigt, dass Frames übertragen werden (Activity)
- **Schicht 3:** IPv4- und IPv6-Adressen, Router
- **Schicht 4:** TCP, UDP, Ports
- **Schicht 7:** DNS, DHCP, HTTP/HTTPS
Prüffrage: Ist es etwas zum Anfassen (1), eine Hardwareadresse (2), eine IP-Adresse (3), ein Port (4) oder ein Dienst bzw. Anwendungsprotokoll (7)?
In 2024F gehörte „Buchse mit LED“ zu Schicht 1; in einer anderen Prüfung stand die Sichtprüfung der blinkenden LED in der Zeile Data Link, gefragt war dort das Protokoll: Ethernet (IEEE 802.3), auch ARP.
Achtung: Die „Physische Adresse“ aus `ipconfig` ist die MAC-Adresse, also Schicht 2. DNS und DHCP zählen zu Schicht 7, auch wenn manche Bücher Schicht 3 nennen.

### K3 – Tabelle zur Fehlersuche je Schicht (Stufe 3 Anwenden)
Du kannst in einer Tabelle zur Fehlersuche je Schicht ein Protokoll, eine Adressart, einen Test oder einen möglichen Fehler ergänzen.

Erklärung:
Ergänze je Schicht, was dazu passt:
- **Schicht 1:** Test: Sichtprüfung von Kabel, Stecker, LED. Fehler: Kabel defekt oder nicht eingesteckt (Medium getrennt).
- **Schicht 2:** Adressart: MAC-Adresse. Protokoll: Ethernet. Fehler: Netzwerkkarte oder Switch-Port defekt.
- **Schicht 3:** Protokoll: IPv4, IPv6. Adressart: IP-Adresse. Test: `ping` auf eine IP, `traceroute`. Fehler: falsche IP-Adresse oder falsches Gateway.
- **Schicht 4:** Port, Protokoll TCP/UDP. Fehler: Port durch Firewall gesperrt.
- **Schicht 7:** Protokoll: DNS, DHCP, HTTPS. Test: `nslookup`, Webseite im Browser. Fehler: falscher DNS-Server, Serverkonfiguration fehlerhaft.

### K4 – Nutzen eines Schichtenmodells (Stufe 2 Verstehen)
Du kannst erklären, wozu ein Schichtenmodell dient: Aufgaben trennen, Fehler eingrenzen, Geräte verschiedener Hersteller zusammenarbeiten lassen.

Erklärung:
- **Aufgaben trennen:** Jede Schicht hat eine klar umrissene Aufgabe und nutzt nur die Dienste der Schicht darunter.
- **Fehler eingrenzen:** Man prüft Schicht für Schicht – funktioniert Schicht 3, kann der Fehler nicht im Kabel liegen.
- **Herstellerunabhängigkeit:** Für jede Schicht gibt es einheitliche Standards – deshalb arbeiten Geräte verschiedener Hersteller zusammen.

### K5 – Anzeigewerte der Schicht 1 als Fehlerhinweis (Stufe 2 Verstehen)
Du kannst angezeigte Werte wie Medienstatus, Signalqualität oder Übertragungsrate der Schicht 1 zuordnen und daraus deuten, ob der Fehler in einer höheren Schicht liegt.

Erklärung:
Werte wie **Medienstatus** („verbunden“), **Signalqualität** und **Übertragungsrate** (z. B. 1 Gbit/s) beschreiben die physische Verbindung – sie gehören zu **Schicht 1**. In der IHK-Lösung zählt auch die **Aktivität** (gesendete und empfangene Bytes): Sie zeigt, ob über die Leitung überhaupt Daten fließen. Keine Schicht-1-Werte im selben Fenster sind die Konnektivität („Kein Netzwerkzugriff“ betrifft die IP-Verbindung) und die SSID (der Name des WLANs).
Daraus folgt:
- Sind sie in Ordnung und es geht trotzdem nicht, liegt der Fehler **höher** – z. B. in der IP-Konfiguration (Schicht 3) oder beim DNS (Schicht 7).
- Steht dort „Medium getrennt“, liegt der Fehler in Schicht 1 – Kabel prüfen.

### K6 – Aufgaben der sieben OSI-Schichten (Stufe 2 Verstehen)
Du kannst jeder OSI-Schicht ihre Aufgabe zuordnen: 1 überträgt Bits als Signale, 2 stellt Daten im lokalen Netzsegment an MAC-Adressen zu, 3 adressiert Netze und leitet Pakete über Router weiter, 4 bringt die Daten zum richtigen Programm (Port) und sichert bei Bedarf die Übertragung, 5 steuert die Sitzung, 6 vereinheitlicht die Darstellung, 7 ist die Schnittstelle zur Anwendung.

Erklärung:
Jede Schicht löst **eine** Teilaufgabe und nutzt dafür nur die Schicht darunter. Wer die Aufgaben kennt, kann auch unbekannte Begriffe richtig einordnen.
- **1 Bitübertragung:** Bits als elektrische, optische oder Funksignale – Kabel, Stecker, Funk.
- **2 Sicherung:** Zustellung im eigenen Netzsegment an eine **MAC-Adresse**, Übertragungsfehler erkennen.
- **3 Vermittlung:** **IP-Adressen** und der Weg über Router in andere Netze.
- **4 Transport:** Daten an das richtige **Programm** (Port); TCP sorgt zusätzlich für vollständige, geordnete Übertragung.
- **5 Sitzung / 6 Darstellung:** Verbindung zwischen Anwendungen steuern; Daten einheitlich darstellen, z. B. Zeichenkodierung, Kompression, Verschlüsselung.
- **7 Anwendung:** Schnittstelle zum Programm, z. B. HTTP für den Browser.
Beispiel: Der Browser (7) fordert eine Seite an, TCP (4) schickt die Anfrage an Port 443 des Webservers, IP (3) findet den Weg, Ethernet (2) und Kabel (1) tragen sie bis zum Router.

## Lehrnotiz: OSI-Modell und Zuordnung

**Aufteilung:**
- Aufgaben der Schichten am Weg einer Anfrage, dann die Namen: K6, K1
- Begriffe einsortieren: K2
- Wozu ein Schichtenmodell: K4
- Statusanzeige einer Verbindung deuten: K5
- Fehlersuche mit der Tabelle, hier kommt alles zusammen: K3

**Schon geprüft:** In Prüfungen: K1 (2024F), K2 (2022F, 2024F, neuere Prüfung), K3 (2022F, neuere Prüfung), K5 (2022F) · Noch nicht geprüft: K4, K6

**Kerngedanken:**
- Beim Senden laufen die Daten von Schicht 7 hinunter zu Schicht 1, beim Empfänger von 1 hinauf zu 7. Gezählt wird trotzdem immer von unten.
- Fehlersuche nach OSI heißt: von unten nach oben prüfen. Die erste Schicht, deren Test scheitert, ist der Fehlerort; klappt der Test einer höheren Schicht, sind die Schichten darunter in Ordnung.
- Schicht 2 und Schicht 3 unterscheiden sich durch die Reichweite: Schicht 2 stellt nur im eigenen Netzsegment zu (MAC-Adresse), Schicht 3 findet den Weg in andere Netze (IP-Adresse, Router).

**Typische Missverständnisse:**
- Viele denken, die „Physische Adresse“ gehöre zu Schicht 1, weil sie physisch heißt; richtig ist: Gemeint ist die Hardwareadresse der Netzwerkkarte, also die MAC-Adresse, Schicht 2.
- Viele denken, DNS und DHCP gehörten zu Schicht 3, weil sie mit Adressen zu tun haben; richtig ist: Es sind Dienste (Anwendungsprotokolle), die IHK zählt Schicht 7. Manche Lehrbücher nennen Schicht 3.
- Viele denken, bei „Kein Internetzugriff“ sei das Kabel verdächtig; richtig ist: Die Meldung ist nur das Symptom. Zeigen Medienstatus und Übertragungsrate eine stehende Verbindung, liegt die Ursache höher.

**Fachwörter:**
- MAC-Adresse: Hardwareadresse der Netzwerkkarte, Schicht 2
- Frame: Datenpaket der Schicht 2, z. B. Ethernet
- Port: Nummer für das richtige Programm, Schicht 4
- Medienstatus: Anzeige, ob die physische Verbindung steht

**So fragt die IHK:**
- Ausgangslage: Eine Verbindung funktioniert nicht; geplant wird eine Fehlersuche nach OSI.
- Tabelle mit den Zeilen 7, 4, 3, 2, 1 (ohne 5 und 6) und den Spalten Nummer, Name, Protokolle, Adressen, möglicher Fehler; die Zeile Transport ist meist schon ausgefüllt. Operator „ergänzen“, ein Beispiel je Feld; 12 Felder gaben 6 Punkte.
- Statusfenster: Schicht-1-Werte „benennen“ und „interpretieren“, 4 Punkte (je Wert 1, Deutung 2). Gezählt haben Medienstatus, Signalqualität, Übertragungsrate und Aktivität; Deutung: Schicht 1 fehlerfrei, der Fehler liegt höher.
- Begriffe aus einer ipconfig-Ausgabe und einem Foto der Buchse Schichten zuordnen, Name deutsch oder englisch; vier Begriffe gaben 4 Punkte (Physische Adresse zu 2, DHCP zu 7, verbindungslokale IPv6-Adresse zu 3, Buchse mit LED zu 1).
- Als Fehler zählten etwa „Serverkonfiguration fehlerhaft“ (7), „falsche IP-Adresse vergeben“ (3), „Netzwerkkarte defekt“ (2), „Medium getrennt“ (1). Die Lösungen sind beispielhaft, andere passende Einträge zählen auch.

**Fallen:**
- In der Spalte „Adressen“ bei Schicht 4 eine IP-Adresse eintragen; dort stehen die Ports.
- Einen erfolgreichen `ping` auf eine IP-Adresse als Beweis nehmen, dass DNS funktioniert; er testet nur bis Schicht 3.
- Im Statusfenster Werte als Schicht-1-Werte nennen, die keine sind, etwa die SSID oder die Zeile zur Konnektivität.
- Bei der Deutung bei „Schicht 1 ist in Ordnung“ stehen bleiben; verlangt ist auch die Folgerung für die weitere Suche.
- Beim Nutzen eines Schichtenmodells nur die drei Stichworte nennen, ohne zu sagen, wodurch der Nutzen entsteht.
- Herstellerunabhängigkeit (der Hersteller eines Geräts wechselt) und Aufgabentrennung (unten wechselt die Technik, etwa Funk statt Kabel, oben merkt man nichts) verwechseln.
