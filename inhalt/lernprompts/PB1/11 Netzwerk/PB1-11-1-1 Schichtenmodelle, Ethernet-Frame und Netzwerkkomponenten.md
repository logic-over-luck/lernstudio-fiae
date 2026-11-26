Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Schichten, Komponenten, Protokolle und Dienste › Schichtenmodelle, Ethernet-Frame und Netzwerkkomponenten

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt. Fehlende Nummern (etwa K4) sind Absicht.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet, und für alles, was eine Erklärung im Stoff nur nebenbei erwähnt.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen. Die Begründungen nimmst du aus dem Stoff und der Lehrnotiz; ergänzt du eine eigene, kennzeichne sie mit „Hintergrund, nicht aus dem Stoff: …“. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, reicht die Erklärung aus dem Stoff. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber nur mit dem, was du mir vorher erklärt hast. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Schichtenmodelle, Ethernet-Frame und Netzwerkkomponenten

Ziel: Das TCP/IP-Modell benennen und dem OSI-Modell zuordnen, ARP, Routing und Switching einordnen, den Ethernet-Frame erläutern und Switch, Bridge, Router und Firewall vergleichen.

Das muss ich können:

### K1 – TCP/IP-Modell und Zuordnung zum OSI-Modell (Stufe 2 Verstehen)
Du kannst die vier Schichten des TCP/IP-Modells (Netzzugang, Internet, Transport, Anwendung) benennen, den Schichten des OSI-Modells zuordnen und dabei über AP1 hinaus auch ARP, Routing und Switching einordnen.

Erklärung:
TCP/IP-Modell ↔ OSI:
- **Netzzugang** ↔ 1 + 2 (Ethernet, MAC, **Switching**; **ARP** an der Grenze zu 3)
- **Internet** ↔ 3 (IP, **Routing**)
- **Transport** ↔ 4 (TCP, UDP)
- **Anwendung** ↔ 5–7 (HTTP, DNS, DHCP)
Das OSI-Modell selbst kennst du aus AP1.

### K2 – Felder des Ethernet-Frames (Stufe 2 Verstehen)
Du kannst die Felder eines Ethernet-Frames zuordnen: Präambel (8 Byte), Ziel- und Quell-MAC-Adresse (je 6 Byte), Typ (2 Byte), Nutzdaten (46 bis 1500 Byte), Prüfsumme (4 Byte); den Aufbau der MAC-Adresse kennst du aus AP1-6-2-4.

Erklärung:
Ethernet-Frame von vorne nach hinten:
- **Präambel** – Preamble (8 Byte, mit Start-Delimiter)
- **Ziel-MAC** – Destination Address (6 Byte), **Quell-MAC** – Source Address (6 Byte)
- **Typ** – Type (2 Byte, z. B. IPv4)
- **Nutzdaten** – Data Payload (46–1500 Byte)
- **Prüfsumme** – Frame Check Sequence, FCS (4 Byte, CRC)
In der Prüfung 2024W standen nur die englischen Namen.
Den Aufbau der MAC-Adresse (6 Byte, vordere Hälfte Hersteller) kennst du aus AP1.

### K3 – Bridge, Switch und Router: Weiterleitung (Stufe 2 Verstehen)
Du kannst Bridge, Switch und Router nach ihrer Weiterleitung vergleichen: Bridge und Switch lernen MAC-Adressen in einer MAC-Tabelle und leiten Frames nur in das Segment bzw. an den Anschluss des Ziels (ein Switch ist eine Bridge mit vielen Anschlüssen), ein Router entscheidet anhand seiner Routingtabelle, in welches Netz er ein Paket weiterleitet; Schicht und Adressart von Switch und Router kennst du aus AP1-6-1-3.

Erklärung:
Schicht und Adressart kennst du aus AP1 (Switch: Schicht 2, MAC; Router: Schicht 3, IP). Neu:
- **Bridge:** verbindet zwei Segmente, **lernt MAC-Adressen** und leitet nur ins Segment des Ziels weiter
- **Switch:** Bridge mit **vielen Anschlüssen**, leitet anhand der **MAC-Tabelle** gezielt an den richtigen Port
- **Router:** entscheidet anhand der **Routingtabelle**, in welches Netz ein Paket geht

### K4 – Firewall: Paketfilter und zustandsorientierte Prüfung (Stufe 2 Verstehen)
Du kannst die Aufgabe einer Firewall beschreiben und Paketfilter (Regeln nach Adressen und Ports) von zustandsorientierter Prüfung (merkt sich bestehende Verbindungen und lässt nur die zugehörigen Antworten durch) unterscheiden.

Erklärung:
**Firewall** = kontrolliert den Verkehr zwischen Netzen nach Regeln.
- **Paketfilter:** prüft jedes Paket einzeln nach **Adressen und Ports**
- **zustandsorientiert (Stateful Inspection):** merkt sich **bestehende Verbindungen** und lässt nur die **dazugehörigen Antworten** herein

### K5 – Kapselung und Entkapselung der Schichten (Stufe 2 Verstehen)
Du kannst Kapselung und Entkapselung im Schichtenmodell beschreiben: Beim Senden setzt jede Schicht ihren eigenen Kopf vor die Daten der Schicht darüber (Segment, dann Paket, dann Frame, bei dem Ethernet zusätzlich die Prüfsumme anhängt, zuletzt Bits auf dem Medium), beim Empfang entfernt jede Schicht ihren Kopf wieder und reicht den Inhalt nach oben weiter.

Erklärung:
Jede Schicht erledigt nur ihre eigene Aufgabe und braucht dafür eigene Steuerdaten. Deshalb packt sie die Daten der Schicht darüber ein, ohne sie zu verändern oder zu verstehen.
- **Transportschicht:** TCP- oder UDP-Kopf mit den Ports → **Segment** (bei UDP heißt die Einheit genau genommen **Datagramm**)
- **Internetschicht:** IP-Kopf mit Quell- und Ziel-IP-Adresse → **Paket**
- **Netzzugang:** Ethernet-Kopf mit den MAC-Adressen, am Ende die Prüfsumme (FCS) → **Frame**, gesendet als **Bits**
Der Empfänger geht den umgekehrten Weg: Jede Schicht wertet ihren Kopf aus, entfernt ihn und gibt den Rest nach oben.
Beispiel: Eine HTTP-Anfrage steckt im TCP-Segment, das im IP-Paket, das im Ethernet-Frame – wie ein Brief in mehreren Umschlägen.

### K6 – Webseitenaufruf: Adressen und Geräte je Schicht (Stufe 2 Verstehen)
Du kannst für einen Webseitenaufruf zuordnen, welche Adressen auf jeder Schicht im Datenpaket stehen und bis zu welcher Schicht die Geräte unterwegs hineinschauen: Ports (zufälliger Quellport des Browsers, Zielport 443 bzw. 80), IP-Adressen von PC und Server, als Ziel-MAC-Adresse die des Routers, wenn der Server in einem anderen Netz liegt; der Switch liest nur den Ethernet-Kopf (Schicht 2), der Router zusätzlich den IP-Kopf (Schicht 3), erst der Empfänger packt alle Schichten aus.

Erklärung:
Beim Weg durchs Netz ändern sich nicht alle Adressen gleich – das ist der Kern vieler Prüfungsfragen.
- **Ports und IP-Adressen** bleiben von Ende zu Ende gleich (ohne NAT): Quellport zufällig hoch, Zielport des Dienstes; Quell-IP der PC, Ziel-IP der Server.
- **MAC-Adressen** gelten nur im eigenen Netzsegment. Liegt der Server in einem fremden Netz, trägt der PC die MAC-Adresse seines **Standardgateways** als Ziel ein (per ARP ermittelt, AP1-6-2-4); jeder Router setzt für den nächsten Abschnitt neue MAC-Adressen ein.
- Ein **Switch** liest nur den Ethernet-Kopf, ein **Router** zusätzlich den IP-Kopf; Transport- und Anwendungsdaten öffnet erst der Empfänger.
Beispiel: Der PC 192.168.1.20 ruft https://shop.example auf: Zielport 443, Ziel-IP die des Shops, Ziel-MAC die des Routers 192.168.1.1. Weil 192.168.1.20 eine private Adresse ist, ersetzt der Router sie beim Übergang ins Internet per NAT bzw. PAT durch seine öffentliche Adresse (bei Bedarf mit anderem Quellport, AP1-6-2-1-K7); der Shop sieht als Quell-IP also die des Routers.

### K7 – Netzwerkkomponenten nach Schicht: Hub bis Proxy (Stufe 2 Verstehen)
Du kannst über Switch und Router hinaus Netzwerkkomponenten nach ihrer Schicht einordnen: Repeater und Hub (Schicht 1) reichen Signale ungeprüft an alle Anschlüsse weiter, Switch und Bridge trennen Kollisionsdomänen, ein Router begrenzt die Broadcast-Domäne, Proxy und Application Layer Gateway arbeiten auf der Anwendungsschicht.

Erklärung:
Woran ein Gerät seine Weiterleitung festmacht, hängt davon ab, wie weit es ein Paket auspackt.
- **Schicht 1 – Repeater, Hub:** frischen das Signal auf bzw. verteilen es an alle Ports, ohne Adressen zu lesen. Alle Geräte an einem Hub teilen sich eine **Kollisionsdomäne**.
- **Schicht 2 – Bridge, Switch:** lesen die Ziel-MAC-Adresse und leiten gezielt weiter; jeder Port ist eine eigene Kollisionsdomäne. Broadcasts (z. B. ARP-Anfragen) gehen aber an alle Ports.
- **Schicht 3 – Router:** verbindet verschiedene IP-Netze und leitet Broadcasts nicht weiter – er begrenzt die **Broadcast-Domäne**.
- **Schicht 7 – Proxy, Application Layer Gateway:** verstehen das Anwendungsprotokoll (z. B. HTTP) und können Inhalte prüfen.
Beispiel: 200 PCs an großen Switches bilden eine Broadcast-Domäne; teilt man sie per Router in vier Netze, erreicht ein Broadcast nur noch rund 50 Geräte.

### K8 – Aufgaben der Frame-Felder und MTU (Stufe 2 Verstehen)
Du kannst die Aufgaben der Felder eines Ethernet-Frames beschreiben: Die Präambel synchronisiert den Empfänger, das Typfeld gibt an, welches Protokoll in den Nutzdaten steckt (z. B. IPv4, IPv6 oder ARP), die Nutzdaten sind höchstens 1500 Byte groß (MTU), sodass größere Pakete nicht in einen Frame passen, und mit der Prüfsumme bemerkt der Empfänger Übertragungsfehler und verwirft den Frame.

Erklärung:
Aufbau und Feldlängen des Frames kennst du schon – hier geht es darum, **wozu** jedes Feld da ist.
- **Präambel:** festes Bitmuster, auf das sich der Empfänger einstellt, bevor die eigentlichen Daten kommen.
- **Typ:** sagt, an welches Protokoll die Nutzdaten weitergereicht werden – IPv4, IPv6 oder ARP. Die Codes musst du nicht auswendig können.
- **Nutzdaten:** höchstens 1500 Byte (**MTU**, Maximum Transmission Unit); ein größeres IP-Paket passt nicht in einen Frame.
- **Prüfsumme (FCS):** wird über den Frame berechnet; stimmt sie beim Empfänger nicht, wird der Frame ohne Rückmeldung verworfen. Nachsenden muss eine höhere Schicht, etwa TCP.
Beispiel: Ein Switch im Store-and-Forward-Betrieb prüft die Prüfsumme und gibt einen beschädigten Frame gar nicht erst weiter.

### K9 – Switching-Verfahren: Cut-Through bis Store-and-Forward (Stufe 2 Verstehen)
Du kannst die Switching-Verfahren Cut-Through, Fragment-Free und Store-and-Forward danach vergleichen, wie viel vom Frame vor dem Weiterleiten gelesen wird: Cut-Through leitet nach der Ziel-MAC-Adresse sofort weiter (geringste Verzögerung, aber auch fehlerhafte Frames), Fragment-Free wartet die ersten 64 Byte ab (filtert Reste von Kollisionen), Store-and-Forward liest den ganzen Frame und prüft die Prüfsumme (verwirft fehlerhafte Frames, braucht dafür mehr Zeit und Pufferspeicher).

Erklärung:
Ein Switch muss entscheiden, wann er mit dem Weiterleiten beginnt – ein Abwägen zwischen **Geschwindigkeit** und **Fehlerfilterung**.
- **Cut-Through:** Sobald die Ziel-MAC-Adresse gelesen ist, geht es los. Sehr geringe Verzögerung, aber beschädigte Frames werden mit weitergereicht.
- **Fragment-Free:** wartet 64 Byte ab, die Mindestgröße eines Frames. Bruchstücke aus Kollisionen sind kürzer und werden so ausgefiltert.
- **Store-and-Forward:** nimmt den ganzen Frame auf und prüft die Prüfsumme. Fehlerhafte Frames werden verworfen; dafür wächst die Verzögerung mit der Framelänge, und es braucht Pufferspeicher. Nur so lassen sich auch Ports mit unterschiedlicher Datenrate verbinden.
Beispiel: Wo jede Mikrosekunde zählt, etwa im Börsenhandel, setzt man auf Cut-Through; im normalen Büronetz ist Store-and-Forward üblich.

### K10 – Routingentscheidung, statisches und dynamisches Routing (Stufe 2 Verstehen)
Du kannst beschreiben, wie ein Router mit seiner Routingtabelle arbeitet und wie sie gefüllt wird: Er sucht den Eintrag für das Zielnetz und leitet das Paket über den zugehörigen Anschluss bzw. an den nächsten Router weiter, sonst über die Standardroute, und ohne passende Route verwirft er es mit einer Fehlermeldung an den Absender; bei statischem Routing sind die Einträge von Hand eingetragen (kleine, übersichtliche Netze), bei dynamischem Routing tauschen die Router sie per Routingprotokoll aus und weichen bei Ausfällen auf andere Wege aus (große Netze, Internet).

Erklärung:
Eine Routingtabelle lesen kannst du aus AP1-6-3-4; hier geht es um die Entscheidung im Router und darum, woher die Einträge kommen.
- Für jedes Paket sucht der Router den passendsten Eintrag zum **Zielnetz** (bei mehreren den mit dem längsten Präfix) und schickt es über den zugehörigen Anschluss oder an den nächsten Router (Next Hop).
- Passt kein Eintrag, nimmt er die **Standardroute** (0.0.0.0/0). Fehlt auch die, verwirft er das Paket und meldet das per ICMP an den Absender.
- **Statisches Routing:** Der Administrator trägt die Routen von Hand ein – einfach und berechenbar, aber bei Änderungen oder Ausfällen muss jemand eingreifen. Passt für kleine Netze mit wenigen Wegen.
- **Dynamisches Routing:** Router tauschen ihre Routen über ein Routingprotokoll aus und rechnen bei einem Ausfall neue Wege. Passt für große, vermaschte Netze bis zum Internet.
Beispiel: Die Filiale mit einem einzigen Internetanschluss kommt mit einer statischen Standardroute aus; ein Provider mit vielen Leitungen braucht dynamisches Routing.

## Lehrnotiz: Schichtenmodelle, Ethernet-Frame und Netzwerkkomponenten

**Hinweis aus dem Lernplan:** Netzwerk ist im AP2-Katalog gemeinsamer Inhalt aller Fachinformatiker. Der Aufbau der MAC-Adresse (2024W-PB1-A2-bb) steht in AP1-6-2-4, das Skript über die Host-Adressen (2024W-PB1-A2-c) in PB1-3. Das Lehrbuch nennt beim Weg eines Webseitenaufrufs auf Schicht 2 die Ziel-IP-Adresse des Interfaces; richtig ist die Ziel-MAC-Adresse (die des Routers, wenn der Server in einem anderen Netz liegt). Den dritten Switchtyp nennt es „Fast-Forward oder Fragment-free“; richtig ist: Fast Forward ist ein anderer Name für Cut-Through, der Mittelweg heißt Fragment-Free. Bei TTL 0 meldet der Router laut Lehrbuch „Ziel nicht erreichbar“; richtig ist die ICMP-Meldung „Time Exceeded“. CSMA/CD stellt es als heute übliches LAN-Verfahren dar; im geswitchten Vollduplex-Ethernet gibt es keine Kollisionen mehr.

**Aufteilung:**
- Schichten und Kapselung: K1, K5
- Adressen und Geräte beim Webseitenaufruf: K6
- Ethernet-Frame, erst der Aufbau, dann die Aufgaben der Felder: K2, K8
- Komponenten nach Weiterleitung und Schicht: K3, K7
- Pause möglich nach den Komponenten.
- Switching-Verfahren: K9
- Routing: K10
- Firewall: K4

**Schon geprüft:** In Prüfungen: K2 (2024W) · Noch nicht geprüft: K1, K3–K10

**Kerngedanken:**
- „Paket“ ist streng genommen nur die Einheit der Internetschicht, kein Oberbegriff. Die IHK will die Reihe Segment – Paket – Frame – Bits lesen.
- Ob das Ziel im eigenen oder in einem fremden Netz liegt, entscheidet der PC anhand von Ziel-IP und eigenem Präfix. Im eigenen Netz trägt er die MAC-Adresse des Zielgeräts selbst ein, nur bei einem fremden Netz die des Standardgateways.
- Ein reiner Paketfilter kennt keine Verbindungen. Für Antworten von außen bräuchte er eine eigene, sehr weite Regel. Die zustandsorientierte Prüfung lässt Antworten ohne eingehende Regel durch, weil sie die Verbindung kennt.
- Dieser Stichpunkt behandelt bei der Firewall nur die Grundidee. Regelwerk, Next-Generation-Firewall und Einsatzort gehören zu PB1-11-1-4.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K3 – Wie Switch und Bridge MAC-Adressen lernen und Frames weiterleiten: (1) Der Switch empfängt einen Frame an einem Port und liest daraus die Quell-MAC-Adresse. (2) Er trägt die Quell-MAC-Adresse zusammen mit dem Eingangsport in seine MAC-Tabelle ein oder frischt einen vorhandenen Eintrag auf. (3) Danach sucht er die Ziel-MAC-Adresse des Frames in der MAC-Tabelle. (4) Steht dort ein anderer Port als der Eingangsport, sendet er den Frame nur über diesen Port; ist es derselbe Port, verwirft er ihn. (5) Findet er keinen Eintrag oder ist das Ziel die Broadcast-Adresse, sendet er den Frame über alle Ports außer dem Eingangsport (Fluten). (6) Einträge, die längere Zeit nicht aufgefrischt wurden, löscht der Switch wieder aus der MAC-Tabelle.

**Typische Missverständnisse:**
- Viele denken, im Frame stehe als Ziel immer die MAC-Adresse des Webservers. Richtig ist: Liegt der Server in einem fremden Netz, kennt der PC dessen MAC-Adresse nicht und braucht sie nicht. MAC-Adressen reichen nur bis zum nächsten Router, deshalb steht dort die MAC des Standardgateways.
- Viele denken, die Schichten verpacken die Daten aus Sicherheitsgründen. Richtig ist: Kapselung verschlüsselt nichts, jede Schicht fügt nur ihre eigenen Steuerdaten hinzu.
- Viele denken, bei „von außen ist nichts erlaubt“ kämen auch die Antworten nicht herein. Richtig ist: Die zustandsorientierte Firewall erkennt sie als Teil einer Verbindung, die von innen aufgebaut wurde.

**Fachwörter:**
- Kapselung: jede Schicht setzt ihren Kopf davor
- Segment: Einheit der Transportschicht, Kopf mit Ports
- Frame: Einheit des Netzzugangs, Kopf mit MAC-Adressen
- MTU: größte Nutzdatenmenge eines Frames, 1500 Byte
- Kollisionsdomäne: Bereich, in dem Signale zusammenstoßen können
- Broadcast-Domäne: Bereich, den ein Broadcast erreicht
- Standardroute: Eintrag für alle übrigen Ziele
- Stateful Inspection: Firewall merkt sich bestehende Verbindungen

**So fragt die IHK:**
- Bisher gab es eine echte Aufgabe (2024W) über die Datennetze eines Unternehmens. Gezeichnet war ein Frame, in dem nur die Byte-Größen standen. Sechs englische Feldbezeichner waren zuzuordnen: Preamble, Destination Address, Source Address, Type, Data Payload, Frame Check Sequence. Operator „zuordnen“, 6 Punkte, 1 Punkt je Zuordnung.
- Danach war der Aufbau der MAC-Adresse zu erläutern (3 Punkte, Stoff aus AP1).
- Zu Schichten, Komponenten, Routing und Firewall gibt es noch keine echte Aufgabe; sie stehen im Prüfungskatalog. Zu erwarten sind kurze Teilaufgaben mit „zuordnen“, „beschreiben“, „erläutern“ oder „vergleichen“ (2–6 Punkte), oft an einer Netzskizze.
- Es kommt auf genaue Fachwörter an.

**Fallen:**
- Schichten: ARP allein der Schicht 3 zuordnen. Richtig ist Schicht 2 oder „zwischen 2 und 3“, weil ARP IP- und MAC-Adressen verknüpft.
- Schichten: DHCP und DNS wegen des Namens „Netzwerkdienste“ nach unten einordnen. Beide sind Anwendungsprotokolle.
- Schichten: Bei einer Zuordnung nur eines der beiden Modelle nennen, wenn TCP/IP- und OSI-Schicht verlangt sind.
- Kapselung: Die Prüfsumme am Ende des Frames oder die Empfängerseite (Entkapselung) weglassen.
- Webseitenaufruf: Als Quellport den Port des Dienstes angeben statt eines zufälligen hohen Ports.
- Webseitenaufruf: Schon im IP-Paket des PCs die öffentliche Adresse des Routers als Quell-IP eintragen. Die setzt erst der Router ein.
- Webseitenaufruf: Behaupten, NAT ändere bei der Anfrage des PCs auch Ziel-IP oder Zielport. Ausgehend tauscht der Router nur Quell-IP und gegebenenfalls Quellport.
- Webseitenaufruf: Die Ziel-MAC des Gateways nennen, aber nicht begründen (Ziel liegt in einem anderen Netz).
- Webseitenaufruf: Dem Switch einen Blick in den IP-Kopf zuschreiben.
- Frame: Ziel- und Quelladresse vertauschen. Die Zieladresse steht zuerst.
- Frame: Die englischen Feldnamen nicht wiedererkennen.
- Frame: Der Prüfsumme eine Fehlerkorrektur zuschreiben oder Ethernet selbst nachsenden lassen.
- Komponenten: Den Switch als Grenze der Broadcast-Domäne nennen. Er trennt nur Kollisionsdomänen.
- Komponenten: Bridge und Switch als Gegensatz darstellen. Beide arbeiten gleich, der Switch hat nur viele Anschlüsse.
- Komponenten: Im Vergleich das Lernen der MAC-Adressen oder die Routingtabelle weglassen.
- Switching: Fragment-Free eine Prüfung der Prüfsumme zuschreiben. Es filtert nur zu kurze Bruchstücke.
- Switching: Fast Forward für ein viertes Verfahren halten. Es ist nur ein anderer Name für Cut-Through.
- Routing: Bei zwei passenden Einträgen den oberen nehmen statt den genaueren.
- Routing: Ein Paket ohne passende Route „an alle“ schicken lassen, statt es zu verwerfen, oder die Meldung an den Absender vergessen.
- Firewall: Die zustandsorientierte Prüfung als Blick in den Inhalt beschreiben. Sie arbeitet auf Schicht 3/4.
- Firewall: Die Angaben weglassen, nach denen gefiltert wird (Adressen, Ports, Protokoll).
