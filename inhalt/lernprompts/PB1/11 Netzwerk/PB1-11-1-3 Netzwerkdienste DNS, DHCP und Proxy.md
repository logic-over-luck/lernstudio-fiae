Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Schichten, Komponenten, Protokolle und Dienste › Netzwerkdienste: DNS, DHCP und Proxy

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
