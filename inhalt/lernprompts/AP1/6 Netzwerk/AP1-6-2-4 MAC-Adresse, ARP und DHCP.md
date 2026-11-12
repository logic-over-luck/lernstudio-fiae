Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Adressierung › MAC-Adresse, ARP und DHCP

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

## Stoff: MAC-Adresse, ARP und DHCP

Ziel: Erklären, wie ein Rechner im lokalen Netz Adressen bekommt und findet, und Ausgaben von ipconfig und arp deuten.

Das muss ich können:

### K1 – Aufbau einer MAC-Adresse (Stufe 2 Verstehen)
Du kannst den Aufbau einer MAC-Adresse beschreiben: 48 Bit, sechs Bytes hexadezimal, vom Hersteller fest vergeben, vordere Hälfte Herstellerkennung.

Erklärung:
- **48 Bit** lang
- geschrieben als **sechs Bytes hexadezimal**, z. B. 00:1A:2B:3C:4D:5E oder 00-1A-2B-3C-4D-5E
- vom **Hersteller fest** in die Netzwerkkarte eingetragen
- die **vordere Hälfte** (3 Bytes) ist die **Herstellerkennung**, die hintere die Seriennummer des Herstellers

### K2 – Aufgabe von ARP (Stufe 2 Verstehen)
Du kannst die Aufgabe von ARP erklären: zu einer IP-Adresse im lokalen Netz die MAC-Adresse ermitteln.

Erklärung:
Im LAN werden Daten an die **MAC-Adresse** zugestellt – der Absender kennt aber oft nur die **IP-Adresse**.
ARP findet die passende MAC:
- Der PC fragt per **Broadcast** in das lokale Netz: „Wer hat die IP 192.168.0.1?“
- Das Gerät mit dieser IP antwortet mit seiner MAC-Adresse.
- Der PC speichert das Paar im **ARP-Cache** (auch ARP-Tabelle), damit er nicht jedes Mal fragen muss.

### K3 – IP- und MAC-Adressen aus ipconfig und arp (Stufe 2 Verstehen)
Du kannst aus den Ausgaben von ipconfig /all und arp -a IP- und MAC-Adressen den richtigen Geräten zuordnen.

Erklärung:
- `ipconfig /all` zeigt die **eigene** Konfiguration: IPv4-Adresse und „Physische Adresse“ (die eigene MAC).
- `arp -a` zeigt den **ARP-Cache** mit den **anderen** Geräten: IP-Adresse, physische Adresse (MAC), Typ dynamisch oder statisch.
Beispiel: Die Zeile „192.168.0.1  00-1a-2b-3c-4d-5e  dynamisch“ heißt: Das Gerät mit der IP 192.168.0.1 (meist der Router) hat diese MAC, sie wurde per ARP gelernt.

### K4 – Was ein DHCP-Server zuteilt (Stufe 1 Wiedergeben)
Du kannst nennen, was ein DHCP-Server einem Client zuteilt: IP-Adresse, Subnetzmaske, Standardgateway, DNS-Server.

Erklärung:
- **IP-Adresse**
- **Subnetzmaske**
- **Standardgateway**
- **DNS-Server**
Bei „unter Bezug auf die Abbildung“ nennst du nur, was dort steht.

### K5 – Adresse aus 169.254.x.x (Stufe 4 Beurteilen)
Du kannst eine Adresse aus dem Bereich 169.254.x.x begründen: Der Client sollte per DHCP eine Adresse bekommen, hat keinen DHCP-Server erreicht und sich selbst eine gegeben.

Erklärung:
Adressen aus **169.254.x.x** (APIPA) vergibt sich ein Rechner **selbst**, wenn er per DHCP eine Adresse bekommen sollte, aber **keinen DHCP-Server erreicht** hat.
Folge: Er erreicht nur Geräte im eigenen Abschnitt, die auch so eine Adresse haben – **kein Internet**.
Prüfen:
- Kabel bzw. WLAN-Verbindung
- Läuft der DHCP-Server und ist er erreichbar?
- Hat er noch freie Adressen?

### K6 – Befehle für die eigene MAC-Adresse (Stufe 1 Wiedergeben)
Du kannst einen Befehl zum Ermitteln der eigenen MAC-Adresse angeben (ipconfig /all, getmac, ip link) und eine MAC-Adresse korrekt hexadezimal schreiben.

Erklärung:
Befehle:
- Windows: `ipconfig /all` (Zeile „Physische Adresse“) oder `getmac`
- Linux: `ip link` (älter, in Lösungen noch anerkannt: `ifconfig`)
Schreibweise: sechs Bytes zu je zwei Hexadezimalziffern (0–9, A–F), getrennt durch Doppelpunkte oder Bindestriche: **00:1A:2B:3C:4D:5E**.
Fehlerquelle: Buchstaben über F gibt es nicht – „00:1G:…“ ist keine gültige MAC.

### K7 – NDP und Multicast statt ARP (Stufe 1 Wiedergeben)
Du kannst nennen, was IPv6 statt ARP und Broadcast nutzt: das Neighbor Discovery Protocol (NDP) und Multicast.

Erklärung:
- Statt **ARP** nutzt IPv6 das **Neighbor Discovery Protocol (NDP)**, um zur IP-Adresse die MAC zu finden.
- Statt **Broadcast** nutzt IPv6 **Multicast** – die Anfrage geht nur an eine Gruppe von Geräten, nicht an alle.

### K8 – ARP: MAC des Ziels oder Gateways (Stufe 2 Verstehen)
Du kannst erklären, wessen MAC-Adresse ein Rechner per ARP ermittelt: Liegt das Ziel im eigenen Netz, die des Ziels selbst, liegt es in einem anderen Netz, die des Standardgateways; der Gefragte antwortet direkt an den Fragenden, und der Eintrag bleibt nur eine begrenzte Zeit in der ARP-Tabelle.

Erklärung:
Ethernet stellt Frames nur innerhalb des **eigenen Netzes** zu. Deshalb prüft der Rechner zuerst mit der Subnetzmaske, ob das Ziel im eigenen Netz liegt:
- **Ziel im eigenen Netz:** ARP fragt per Broadcast nach der IP des Ziels; das Ziel antwortet direkt (Unicast) mit seiner MAC.
- **Ziel in einem anderen Netz:** Der Rechner fragt nach der MAC des **Standardgateways** und schickt den Frame dorthin; die IP-Zieladresse im Paket bleibt die des eigentlichen Ziels.
- Einträge der **ARP-Tabelle** haben eine **Ablaufzeit**; danach wird neu gefragt, damit z. B. ein getauschtes Gerät gefunden wird.
Darum zeigt `arp -a` nach dem Aufruf einer Internetseite nur die MAC des Routers, nie die des Webservers.
Beispiel: PC 192.168.1.20/24 will zu 8.8.8.8 → ARP fragt nach 192.168.1.1 (Gateway), nicht nach 8.8.8.8.

### K9 – Befehle: IP erneuern, DNS-Cache, ip neigh (Stufe 1 Wiedergeben)
Du kannst Befehle angeben, mit denen du unter Windows die IP-Adresse beim DHCP-Server neu anforderst (ipconfig /release, dann ipconfig /renew) und den DNS-Zwischenspeicher leerst (ipconfig /flushdns) und unter Linux die eigenen Adressen (ip a) sowie die Zuordnung von IP- zu MAC-Adressen (ip neigh, Gegenstück zu arp -a) anzeigst.

Erklärung:
Ein paar Befehle braucht man bei der Fehlersuche immer wieder:
- `ipconfig /release` gibt die per DHCP bezogene Adresse frei, `ipconfig /renew` fordert beim DHCP-Server eine **neue** an – nützlich nach einer Änderung im Netz oder bei einer 169.254-Adresse.
- `ipconfig /flushdns` leert den **DNS-Zwischenspeicher**; danach fragt der PC Namen neu beim DNS-Server an.
- Linux (iproute2): `ip a` zeigt die eigenen Adressen (wie `ipconfig`), `ip neigh` die Zuordnung IP ↔ MAC (wie `arp -a`).
Beispiel: Ein Server hat eine neue IP-Adresse, ein PC landet aber noch bei der alten → `ipconfig /flushdns`, dann erneut aufrufen.

### K10 – Broadcast-MAC und Kennbits im ersten Byte (Stufe 3 Anwenden)
Du kannst an einer MAC-Adresse die Broadcast-Adresse ff-ff-ff-ff-ff-ff erkennen und erklären, dass zwei Kennbits im ersten Byte anzeigen, ob sie für eine Gruppe gilt (Unicast/Multicast) und ob sie lokal vergeben statt vom Hersteller zugeteilt ist (global/lokal).

Erklärung:
ff-ff-ff-ff-ff-ff ist die Broadcast-MAC-Adresse für alle Geräte im Netz; zwei Kennbits im ersten Byte zeigen an, ob eine Adresse für eine Gruppe (Multicast) gilt und ob sie lokal vergeben statt vom Hersteller zugeteilt ist.
Es sind die zwei niedrigsten Bits des ersten Bytes:
- **Bit 0** (das niedrigstwertige): 0 = Unicast (ein Gerät), 1 = Multicast (Gruppe)
- **Bit 1:** 0 = global (vom Hersteller), 1 = lokal vergeben
Beispiel: 01-00-5e-… → erstes Byte 0000 0001, Bit 0 = 1 → Multicast. 02-… → 0000 0010, Bit 1 = 1 → lokal vergeben. 00-1a-… → beide 0 → Unicast, vom Hersteller.

## Lehrnotiz: MAC-Adresse, ARP und DHCP

**Aufteilung:**
- DHCP und die selbst vergebene Adresse: K4, K5
- Die physische Adresse und ihre Schreibweise: K1, K6
- Besondere MAC-Adressen und Kennbits: K10
- Pause möglich nach den MAC-Adressen.
- ARP, erst die Aufgabe, dann Ziel oder Gateway, dann der Blick auf IPv6: K2, K8, K7
- Ausgaben lesen und Befehle zur Fehlersuche: K3, K9

**Schon geprüft:** In Prüfungen: K1 (2022F, 2024H), K2 (2024F), K3 (2024F), K4 (2022F, 2024F), K5 (2022F, 2024H), K6 (2024H), K9 (2022F) · Noch nicht geprüft: K7, K8, K10

**Kerngedanken:**
- Ein Gerät hat zwei Adressen mit verschiedenen Aufgaben. Die MAC-Adresse gehört zur Netzwerkkarte, bleibt gleich und gilt nur für die Zustellung im eigenen Netz; die IP-Adresse hängt vom Netz ab und kann wechseln.
- Eine 169.254-Adresse ist kein Defekt des Rechners, sondern ein Hinweis: Er hat gefragt, und niemand hat geantwortet. Hat ein anderes Gerät im selben Netz eine gültige Adresse, liegt es eher am Weg dieses einen Rechners (Kabel, Dose, Switch-Port, WLAN) als am DHCP-Server; ob der Server noch freie Adressen hat, wird trotzdem geprüft.
- Es gibt zwei Zwischenspeicher, die leicht verwechselt werden: Der DNS-Zwischenspeicher merkt sich Name zu IP-Adresse, der ARP-Cache IP-Adresse zu MAC-Adresse. „ARP-Cache“ und „ARP-Tabelle“ meinen dasselbe.
- Für die Kennbits genügt die zweite Hexadezimalziffer des ersten Bytes: binär schreiben und die beiden Bits ganz rechts ansehen.
- Wann eine feste Adresse oder eine DHCP-Reservierung sinnvoll ist, gehört zur IPv4-Konfiguration, nicht hierher.

**Typische Missverständnisse:**
- Viele denken, eine 169.254-Adresse komme vom Router oder sei von Hand falsch eingetragen. Richtig ist: Der Rechner hat sie sich selbst gegeben, gerade weil kein DHCP-Server geantwortet hat.
- Viele denken, ARP finde zu einem Gerät die IP-Adresse. Richtig ist: Die IP-Adresse ist schon bekannt, gesucht wird die MAC-Adresse dazu.
- Viele denken, die MAC-Adresse ändere sich wie die IP-Adresse, wenn das Gerät eine neue Konfiguration bekommt. Richtig ist: Sie bleibt dieselbe.

**Fachwörter:**
- MAC-Adresse: Hardwareadresse der Netzwerkkarte, in Windows „Physische Adresse“
- Herstellerkennung: die vorderen drei Bytes
- ARP: findet zur IP-Adresse die MAC-Adresse
- ARP-Cache: gespeicherte Paare aus IP und MAC
- Broadcast: Anfrage an alle im lokalen Netz
- DHCP-Server: teilt die Netzwerkeinstellungen automatisch zu
- APIPA: selbst vergebene Adresse aus 169.254.x.x
- Multicast: an eine Gruppe von Geräten

**So fragt die IHK:**
- Ausgangslage ist meist die Fehlersuche oder Prüfung an einem neuen Arbeitsplatz. Material sind Konsolenausgaben: ipconfig /all mit „Physische Adresse“ und „DHCP aktiviert: Ja“, arp oder arp -a mit einer Zeile Router-IP, MAC, „dynamisch“, dazu ein ping.
- „Beschreiben Sie die Herkunft der Adresse …“ (2 Punkte): vom Hersteller der Netzwerkkarte fest zugeordnete MAC-Adresse.
- „Nennen Sie den Server, der durch den Befehl zur Erneuerung der IP-Adresse kontaktiert wurde“ (1 Punkt): DHCP-Server. „Benennen Sie den ermittelten Fehler“ (2 Punkte): fehlende Zuteilung einer IP-Adresse.
- „Nennen Sie unter Bezug auf die Abbildung die Informationen, die der DHCP-Server bereitstellt“: Gezählt wurde, was in der Abbildung stand, dort IPv4-Adresse und Subnetzmaske.
- „Erläutern Sie anhand des Beispiels die Aufgabe von ARP“ (3 Punkte): Ermittlung der MAC-Adresse zur IP-Adresse, mit den konkreten Werten aus der Ausgabe.
- „Ordnen Sie in der Skizze IP- und physische Adressen zu“ (eigener PC und weiterer PC, 4 Punkte): die eigenen Werte aus ipconfig, die des anderen aus arp.
- „Begründen Sie diese Vorkonfiguration“ zu einer 169.254-Adresse (2 Punkte): auf dynamische Vergabe eingestellt, DHCP-Server nicht erreicht, Adresse selbst vergeben.
- „Geben Sie einen Konsolenbefehl zum Ermitteln der MAC an und nennen Sie ein Beispiel in strukturierter Hexadarstellung“ (4 Punkte): ipconfig /all, ifconfig oder getmac /v; Beispiel mit sechs Hexpaaren.
- Kennbits, NDP und ip neigh kamen in den Aufgaben nicht vor; denkbar sind kurze Nenn- oder Bestimmungsfragen.

**Fallen:**
- DHCP: Beim Begründen einer 169.254-Adresse einen der drei Teile weglassen: auf DHCP eingestellt, keinen DHCP-Server erreicht, selbst vergeben.
- DHCP: Aus einer einzelnen 169.254-Adresse sofort auf einen ausgefallenen DHCP-Server schließen, ohne die anderen Geräte im Netz anzusehen.
- DHCP: Bei „unter Bezug auf die Abbildung“ die gelernte Liste aufsagen statt zu nennen, was die Abbildung zeigt.
- MAC: MAC- und IP-Adresse verwechseln. Die MAC-Adresse hat 48 Bit, nicht 32.
- MAC: In der Prüfung gilt „vom Hersteller fest vergeben“. In der Praxis melden sich Handys, Tablets und Laptops im WLAN oft mit einer zufälligen, je WLAN eigenen MAC-Adresse an; für eine Reservierung oder einen MAC-Filter zählt dann die angezeigte Adresse, oder die Funktion wird für dieses WLAN abgeschaltet.
- Kennbits: Die Bits von links statt von rechts zählen, das ganze Byte statt der letzten zwei Bits ansehen oder ein anderes Byte als das erste prüfen.
- ARP: Die Aufgabe von ARP allgemein beschreiben, wenn „anhand des Beispiels“ verlangt ist. Dann gehören die Werte aus der Ausgabe in die Antwort.
- ARP: Bei einem getauschten Gerät mit gleicher IP-Adresse die Ablaufzeit vergessen. Bis der alte Eintrag verfällt, gehen die Daten noch an die alte MAC-Adresse.
- Ausgaben: Die eigene MAC-Adresse in arp -a suchen. Dort stehen nur die anderen Geräte; die eigene zeigt ipconfig /all (oder getmac).
- Ausgaben: Statische Einträge in arp -a für gelernte Geräte halten. Bei Broadcast- und Multicast-Adressen sind es feste Zuordnungen, nicht per ARP ermittelt.
