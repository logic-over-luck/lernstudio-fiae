Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Schichten, Komponenten, Protokolle und Dienste › Netzwerkdienste: DNS, DHCP und Proxy

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

## Stoff: Netzwerkdienste: DNS, DHCP und Proxy

Ziel: Aufgabe und Ablauf von DNS und DHCP sowie die Aufgabe eines Proxys beschreiben; Ausfälle erkennen kennst du aus AP1.

Das muss ich können:

### K1 – Aufgabe und Hierarchie von DNS (Stufe 2 Verstehen)
Du kannst die Aufgabe von DNS beschreiben: Namen in IP-Adressen auflösen, hierarchisch über Root-, Top-Level- und zuständige Nameserver, für lokale Domains über einen eigenen DNS-Server.

Erklärung:
**DNS** löst **Namen in IP-Adressen** auf:
- Der Client fragt nur seinen DNS-Server; dieser fragt sich hierarchisch durch: **Root**-Server → **Top-Level** (`.de`) → **zuständiger** Nameserver (`firma.de`)
- Antworten werden zwischengespeichert
- für **lokale Domains** ein eigener DNS-Server im Firmennetz

### K2 – Ablauf der DHCP-Vergabe mit Lease (Stufe 2 Verstehen)
Du kannst den Ablauf einer DHCP-Vergabe beschreiben: Discover, Offer, Request, Acknowledge; die Adresse gilt für eine begrenzte Zeit (Lease) und wird vorher verlängert.

Erklärung:
DHCP-Ablauf (**DORA**):
- **Discover:** Client sucht per Broadcast einen Server
- **Offer:** Server bietet eine Adresse an
- **Request:** Client fordert sie an
- **Acknowledge:** Server bestätigt
Die Adresse gilt für eine **Lease-Zeit** und wird vorher **verlängert**. Verlängert der Client nicht, läuft die Lease ab und die Adresse wird wieder frei.

### K3 – Aufgabe eines Proxys (Stufe 2 Verstehen)
Du kannst die Aufgabe eines Proxys beschreiben: Er stellt Anfragen stellvertretend für die Clients und kann dabei filtern, zwischenspeichern und protokollieren.

Erklärung:
**Proxy** = Stellvertreter:
- stellt Anfragen **im Auftrag der Clients**
- kann **filtern** (gesperrte Seiten), **zwischenspeichern** (Cache) und **protokollieren**
- nach außen tritt nur der Proxy auf

### K4 – DNS-Einträge A und AAAA (Stufe 2 Verstehen)
Du kannst DNS-Einträge der Typen A und AAAA unterscheiden: Ein Nameserver hält zu einem Namen Einträge verschiedener Typen, ein A-Eintrag liefert die IPv4-Adresse, ein AAAA-Eintrag die IPv6-Adresse, und ein Dual-Stack-Rechner fragt beide ab.

Erklärung:
Ein DNS-Server speichert zu jeder Domain **Einträge** (Resource Records); der **Typ** sagt, welche Frage ein Eintrag beantwortet.
- `A`: Welche **IPv4**-Adresse hat der Name?
- `AAAA`: Welche **IPv6**-Adresse hat der Name?
- Ein Rechner mit IPv4 und IPv6 (**Dual Stack**) fragt beide ab und bevorzugt meist IPv6.
Weitere Typen wie CNAME, MX oder PTR stehen in der Kür.
Beispiel: `nslookup -type=AAAA example.com` zeigt die IPv6-Adresse des Namens.

### K5 – Forward-Proxy gegen Reverse Proxy (Stufe 2 Verstehen)
Du kannst Forward-Proxy und Reverse Proxy unterscheiden: Ein Forward-Proxy stellt die Anfragen der internen Clients in eigenem Namen und ordnet die Antworten wieder zu, sodass nach außen nur er sichtbar ist; ein Reverse Proxy steht vor den eigenen Servern, nimmt die Anfragen aus dem Internet entgegen, verteilt sie auf mehrere Server, verbirgt diese, kann filtern und übernimmt oft die TLS-Verschlüsselung, sodass das Zertifikat zentral am Proxy liegt und die Webserver entlastet werden.

Erklärung:
Beide Proxys sind Stellvertreter – der Unterschied ist, **für wen** sie stehen.
- **Forward-Proxy** (der Proxy, den du schon kennst): steht für die **Clients**. Er baut zum Webserver eine eigene Verbindung auf; der Server sieht nur den Proxy, nicht die internen Rechner. Im Unternehmen ist es ein eigener Proxy-Server mit Filter und Zwischenspeicher; ein üblicher Heimrouter setzt dagegen nur Adressen um (NAT) und ist kein Proxy.
- **Reverse Proxy:** steht für die **Server**. Clients aus dem Internet sprechen nur mit ihm; er reicht die Anfragen an interne Server weiter, z. B. nach URL-Pfad oder zur Lastverteilung.
- Am Reverse Proxy endet oft die **TLS-Verbindung**: Das Zertifikat liegt nur dort, die Webserver dahinter müssen nicht selbst verschlüsseln.
- Ein Proxy arbeitet auf der Anwendungsschicht mit eigener Verbindung – das ist etwas anderes als NAT, das nur Adressen im IP-Kopf austauscht.
Beispiel: `shop.example.de/api` geht an den API-Server, `/bilder` an den Bildserver – beide stehen hinter einem Reverse Proxy.

## Lehrnotiz: Netzwerkdienste: DNS, DHCP und Proxy

**Aufteilung:**
- DNS, erst Aufgabe und Ablauf, dann die Eintragstypen: K1, K4
- DHCP: K2
- Proxy, erst die Aufgabe, dann Forward gegen Reverse: K3, K5

**Schon geprüft:** Noch nicht geprüft: K1–K5

**Kerngedanken:**
- Der Client fragt immer nur seinen eigenen DNS-Server. Dieser arbeitet die Kette Root, Top-Level, zuständiger Nameserver ab, sofern er die Antwort nicht schon zwischengespeichert hat oder selbst zuständig ist, und gibt die Antwort an den Client zurück.
- Kein Server kennt alle Namen. Root- und Top-Level-Server wissen nur, wer eine Stufe tiefer zuständig ist. Erst der zuständige Nameserver kennt die Adresse.
- Einen Namen, den es nur im Firmennetz gibt, kennt kein Server im Internet. Deshalb braucht eine lokale Domain einen eigenen DNS-Server.
- Der Discover geht per Broadcast, weil der Client noch keine Adresse hat und den Server nicht kennt.
- Abgrenzung: Ausfälle von DNS und DHCP erkennen (Netzwerkbefehle, Fehlersuche) ist Stoff aus AP1 und hier nicht Thema.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Wie der Client seine Lease verlängert: (1) Nach der Hälfte der Lease-Zeit schickt der Client einen DHCP-Request direkt an den Server, der ihm die Adresse gegeben hat. (2) Ist der Server einverstanden, antwortet er mit einem Acknowledge und einer neuen Lease-Zeit; der Client behält seine Adresse. (3) Antwortet der Server nicht, versucht der Client es weiter; nach sieben Achteln der Lease-Zeit schickt er den Request per Broadcast, damit jeder DHCP-Server antworten kann. (4) Lehnt ein Server mit einem NAK ab oder läuft die Lease ohne Antwort ab, gibt der Client die Adresse auf und beginnt wieder mit Discover.
- K3 – Weg einer Webanfrage über den Proxy: (1) Der Client sendet seine HTTP-Anfrage mit der Ziel-URL nicht an den Webserver, sondern an den Proxy. (2) Der Proxy liest die Anfrage auf der Anwendungsschicht und protokolliert Client, Zeitpunkt und Ziel. (3) Der Proxy prüft die Ziel-URL gegen seine Filterregeln und beantwortet gesperrte Ziele selbst mit einer Fehlermeldung. (4) Liegt die Antwort zu einer erlaubten Anfrage noch gültig im Cache, liefert der Proxy sie direkt von dort an den Client. (5) Andernfalls baut der Proxy eine eigene Verbindung zum Webserver auf und stellt die Anfrage mit seiner eigenen IP-Adresse als Absender. (6) Der Proxy empfängt die Antwort des Webservers, speichert sie im Cache und gibt sie über die Verbindung des Clients an diesen zurück. Vereinfacht: Bei HTTPS sieht der Proxy ohne Aufbrechen der TLS-Verbindung nur den Zielnamen und kann deshalb nur nach Ziel filtern und protokollieren, aber keine Inhalte prüfen oder zwischenspeichern.

**Typische Missverständnisse:**
- Viele denken, alle Namen stünden in einer einzigen großen Liste bei einem zentralen Server. Richtig ist: Die Zuständigkeit ist hierarchisch verteilt, jede Domain verwaltet ihre eigenen Einträge.
- Viele denken, der PC frage selbst nacheinander Root-Server und Top-Level-Nameserver. Richtig ist: Das übernimmt sein DNS-Server.

**Fachwörter:**
- Nameserver: Server, der DNS-Einträge einer Domain hält
- Top-Level: oberste Namensebene, z. B. `.de`
- A-Eintrag: liefert die IPv4-Adresse eines Namens
- Dual Stack: Rechner mit IPv4 und IPv6
- Lease: befristete Zuteilung einer IP-Adresse
- Broadcast: Rundsendung an alle im Netz
- Forward-Proxy: Stellvertreter für die internen Clients
- Reverse Proxy: Stellvertreter vor den eigenen Servern

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es noch keine echte Aufgabe. Der Prüfungskatalog nennt DNS (Namensauflösung, lokale Domains), DHCP (Ablauf) und Proxy (Aufgabe).
- Zu erwarten sind kurze Teilaufgaben im Projektzusammenhang.
- DHCP: „Beschreiben Sie den Ablauf einer DHCP-Adressvergabe“, 3–4 Punkte, je Abschnitt ein Punkt. Ein Abschnitt zählt nur mit richtiger Reihenfolge und richtigem Absender.
- DNS: „Beschreiben Sie die Aufgabe eines DNS-Servers“ oder die Auflösung eines Namens, 2–3 Punkte. Die Hierarchie oder das Weiterfragen bis zum zuständigen Server muss vorkommen.
- Proxy: „Nennen Sie zwei Aufgaben eines Proxy-Servers“ oder „Erläutern Sie den Einsatz eines Reverse Proxys vor den Webservern“, 2–4 Punkte. Es zählen genannte Aufgaben, nicht das Wort „Stellvertreter“ allein.

**Fallen:**
- DNS: Beim Ablauf das Zwischenspeichern der Antwort weglassen.
- DNS: A und AAAA vertauschen oder AAAA als Alias deuten.
- DNS: Übersehen, dass ein Name beide Einträge zugleich haben kann.
- DHCP: Offer und Request vertauschen. Erst bietet der Server an, dann fordert der Client an.
- DHCP: Die Abschnitte ohne Richtung nennen (wer sendet an wen).
- DHCP: Die Lease weglassen oder als dauerhafte Zuteilung beschreiben.
- Proxy: Als Aufgabe „Adressen umsetzen“ nennen. Das ist NAT, der Proxy baut eine eigene Verbindung auf der Anwendungsschicht auf.
- Proxy: Forward und Reverse über die Technik unterscheiden statt über die Seite, für die sie stehen (Clients oder Server).
- Proxy: Beim Reverse Proxy zu wenige Aufgaben nennen. Zur Auswahl stehen verteilen, verbergen, filtern und TLS mit zentralem Zertifikat.
