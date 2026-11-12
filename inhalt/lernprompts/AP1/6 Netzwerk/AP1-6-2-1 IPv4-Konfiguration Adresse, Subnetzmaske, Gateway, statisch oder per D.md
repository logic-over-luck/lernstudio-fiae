Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Adressierung › IPv4-Konfiguration: Adresse, Subnetzmaske, Gateway, statisch oder per DHCP

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

## Stoff: IPv4-Konfiguration: Adresse, Subnetzmaske, Gateway, statisch oder per DHCP

Ziel: Einen Client mit IPv4 einrichten, die passende statische Adresse festlegen und die Wahl zwischen statisch und automatisch begründen.

Das muss ich können:

### K1 – IPv4-Konfiguration: Adresse, Maske, Gateway (Stufe 3 Anwenden)
Du kannst IP-Adresse, Subnetzmaske und Standardgateway in eine Konfigurationsmaske eintragen.

Erklärung:
Zuerst das Optionsfeld auf „Folgende IP-Adresse verwenden“ umstellen – das wird mitbewertet. In die Konfigurationsmaske gehören:
- **IP-Adresse:** die Adresse des Geräts, z. B. 192.168.10.20
- **Subnetzmaske:** trennt Netz- und Hostanteil, z. B. 255.255.255.0. Daran erkennt der Rechner, ob ein Ziel im eigenen Netz liegt.
- **Standardgateway:** der Router, über den Pakete in andere Netze gehen, z. B. 192.168.10.1. Er muss im **selben Netz** liegen wie der Client.
- dazu meist der **DNS-Server**.

### K2 – Freie statische Adresse außerhalb des DHCP-Bereichs (Stufe 3 Anwenden · in der Prüfung vorgegeben: Netz, DHCP-Bereich und Router)
Du kannst eine freie statische Adresse festlegen, die im richtigen Netz und außerhalb des DHCP-Bereichs liegt.

Erklärung:
Die Adresse muss vier Bedingungen erfüllen:
- im **richtigen Netz** liegen
- **noch nicht vergeben** sein (auch nicht an den Router)
- **außerhalb des DHCP-Bereichs** liegen – sonst kann der DHCP-Server sie ein zweites Mal vergeben (Adresskonflikt)
- weder **Netz-** noch **Broadcastadresse** sein
Beispiel: Netz 192.168.10.0/24, Router .1, DHCP-Bereich .100 bis .200 → z. B. **192.168.10.20**.

### K4 – Statische gegen automatische Adressvergabe (Stufe 4 Beurteilen)
Du kannst statische und automatische Adressvergabe unterscheiden und begründen, wann eine feste Adresse sinnvoll ist, zum Beispiel für Drucker oder Fernwartung.

Erklärung:
- **Statisch:** Die Adresse wird von Hand fest eingetragen.
- **Automatisch:** Ein DHCP-Server teilt die Adresse zu.
**Feste Adresse** für Geräte, die **immer unter derselben Adresse erreichbar** sein müssen: Server, Drucker, Router, Access Points, Geräte für Fernwartung. Würde sich die Adresse des Druckers ändern, fänden ihn die PCs nicht mehr.
**DHCP** für Arbeitsplätze: weniger Aufwand, keine Tippfehler, keine doppelten Adressen, Änderungen zentral.

### K5 – Private IPv4-Bereiche und ihre Erreichbarkeit (Stufe 2 Verstehen)
Du kannst private IPv4-Bereiche erkennen (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) und erklären, dass sie im Internet nicht direkt erreichbar sind.

Erklärung:
Die drei privaten Bereiche:
- **10.0.0.0/8** – 10.0.0.0 bis 10.255.255.255
- **172.16.0.0/12** – 172.16.0.0 bis 172.31.255.255
- **192.168.0.0/16** – 192.168.0.0 bis 192.168.255.255
Sie sind im LAN frei nutzbar, werden aber **im Internet nicht weitergeleitet** – ein Gerät mit privater Adresse ist von außen nicht direkt erreichbar.
Falle: 172.40.1.1 ist **nicht** privat (liegt außerhalb von 172.16 bis 172.31).

### K6 – Dokumentation der Netzwerkeinstellungen am Arbeitsplatz (Stufe 3 Anwenden)
Du kannst die Netzwerkeinstellungen eines Arbeitsplatzes dokumentieren: Adresse, Maske, Gateway, DNS-Server, Anschluss.

Erklärung:
Halte für jeden Arbeitsplatz fest:
- **IP-Adresse** (oder „per DHCP“)
- **Subnetzmaske**
- **Standardgateway**
- **DNS-Server**
- **Anschluss:** Netzwerkdose und Switch-Port
So kann später jeder nachvollziehen, wie der Platz eingerichtet ist – hilfreich bei Fehlersuche und Umzug.

### K7 – NAT bzw. PAT am Router (Stufe 2 Verstehen)
Du kannst erklären, dass ein Router per NAT bzw. PAT die privaten Adressen des lokalen Netzes für den Internetzugang auf seine öffentliche Adresse umsetzt.

Erklärung:
Private Adressen sind im Internet nicht gültig. Der Router löst das:
- **NAT** (Network Address Translation): Er ersetzt beim Weg ins Internet die private Absenderadresse durch **seine öffentliche Adresse**.
- **PAT** (Port Address Translation): Er unterscheidet die einzelnen Verbindungen zusätzlich über **Ports**. So können **viele Geräte eine einzige öffentliche Adresse** teilen.
Kommt die Antwort zurück, weiß der Router anhand des Ports, an welches Gerät im LAN sie gehört.

### K9 – Inhalt einer Netzwerkdokumentation (Stufe 2 Verstehen)
Du kannst erklären, was eine Netzwerkdokumentation enthält (Lage-, Netzwerk- und Patchpläne, IP-Bereiche und Teilnetze, fest vergebene Adressen, DHCP-Einstellungen, Messprotokolle) und warum jede Änderung am Netz sofort von dem eingetragen wird, der sie vornimmt.

Erklärung:
Die Netzwerkdokumentation ist das **Gedächtnis** des Netzes: Nur wer weiß, was wo hängt, findet Fehler schnell und bindet Neues sauber ein.
- **Pläne:** Lageplan mit Dosen und Verteilern, Netzwerkplan mit Geräten und Teilnetzen, Patchpläne.
- **Adressen:** IP-Bereiche je Teilnetz, fest vergebene Adressen (Drucker, Server, Router), DHCP-Bereiche und Reservierungen.
- **Messprotokolle:** belegen, dass die verlegten Strecken die geforderte Kategorie erreichen.
- **Sofort pflegen:** Wer etwas ändert, trägt es gleich ein. Eine veraltete Doku ist gefährlich – man vergibt z. B. eine Adresse doppelt oder sucht an der falschen Dose.
Beispiel: Ein neuer Drucker bekommt 192.168.10.30 – wer die Adresse vergibt, trägt sie sofort in die Adressliste ein.

### K10 – DHCP-Reservierung: wann sie sinnvoll ist (Stufe 4 Beurteilen)
Du kannst begründen, wann eine DHCP-Reservierung sinnvoll ist: Der DHCP-Server gibt einer bestimmten MAC-Adresse immer dieselbe IP-Adresse, das Gerät hat also eine feste Adresse, die aber zentral am Server verwaltet und dokumentiert wird statt von Hand am Gerät.

Erklärung:
Zwischen „statisch am Gerät“ und „irgendeine Adresse per DHCP“ gibt es einen dritten Weg: die **Reservierung** (auch statisches DHCP).
- Am DHCP-Server wird die **MAC-Adresse** des Geräts (die fest eingebaute Hardwareadresse seiner Netzwerkkarte) mit einer festen IP-Adresse verknüpft, meist außerhalb des Bereichs für wechselnde Adressen.
- Das Gerät bleibt auf „automatisch“ eingestellt und bekommt trotzdem **immer dieselbe Adresse**.
- **Vorteil:** Alle Adressen werden an einer Stelle verwaltet; ändern sich Gateway oder DNS-Server, erfahren es alle Geräte automatisch, Tippfehler am Gerät entfallen.
- **Grenze:** Ohne erreichbaren DHCP-Server bekommt auch dieses Gerät keine Adresse; Router und DHCP-Server selbst konfiguriert man deshalb statisch.
Beispiel: Der Netzwerkdrucker erhält per Reservierung immer 192.168.10.30 – nach einem Wechsel des DNS-Servers muss niemand am Drucker etwas umstellen.

### K11 – Adressklassen und CIDR (Stufe 3 Anwenden)
Du kannst die historischen Adressklassen A bis E als Ursprung der Standard-Subnetzmaske erklären und begründen, dass heute stattdessen die Präfixlänge nach CIDR gilt (z. B. /24 = 255.255.255.0).

Erklärung:
Früher war die Netzgröße fest an die Adressklasse gebunden – das erste Oktett bestimmte die Standard-Subnetzmaske:
- **A:** 0–127, 255.0.0.0 (/8)
- **B:** 128–191, 255.255.0.0 (/16)
- **C:** 192–223, 255.255.255.0 (/24)
- **D:** 224–239, Multicast, keine Maske
- **E:** 240–255, reserviert
Heute gilt die Präfixlänge (die Zahl der Einsen der Subnetzmaske von links) nach **CIDR**: Die Klassen waren zu grob, viele Adressen blieben ungenutzt. Mit CIDR wird die Präfixlänge frei angegeben, z. B. /24 = 255.255.255.0, und passt zur benötigten Netzgröße.

### K12 – Weitere besondere IPv4-Adressen (Stufe 2 Verstehen)
Du kannst besondere IPv4-Adressen erkennen: 0.0.0.0 für eine noch unbekannte eigene Adresse und 0.0.0.0/0 für die Standardroute (Default-Route), 224.0.0.0/4 als Multicast-Bereich und 240.0.0.0/4 als reservierten Bereich.

Erklärung:
Weitere besondere IPv4-Adressen: 0.0.0.0 steht für eine noch unbekannte eigene Adresse und als 0.0.0.0/0 für die Standardroute, 224.0.0.0/4 ist der Multicast-Bereich (die alte Klasse D), 240.0.0.0/4 ist reserviert (die alte Klasse E). 0.0.0.0 nutzt z. B. ein Client als Absender, bevor er per DHCP eine Adresse bekommen hat.

## Lehrnotiz: IPv4-Konfiguration: Adresse, Subnetzmaske, Gateway, statisch oder per DHCP

**Aufteilung:**
- Die Konfigurationsmaske mit Adresse, Maske und Gateway: K1
- Fest oder automatisch, und eine freie feste Adresse wählen: K4, K2
- Der dritte Weg, die DHCP-Reservierung: K10
- Aufschreiben, was eingerichtet ist: K6, K9
- Pause möglich nach der Dokumentation.
- Woher die Maske kommt, Klassen und CIDR: K11
- Private Adressen und der Weg ins Internet: K5, K7
- Besondere Adressen: K12

**Schon geprüft:** In Prüfungen: K1 (2024H), K2 (2024H), K4 (2024H), K5 (2026F) · Noch nicht geprüft: K6, K7, K9–K12

**Kerngedanken:**
- Der Hauptgrund für eine feste Adresse ist, dass andere das Gerät immer unter derselben Adresse finden müssen. Dazu kommen Geräte, die nicht selbst vom DHCP-Server abhängen dürfen: der Router und der DHCP-Server selbst. Die Frage lautet also bei jedem Gerät: Sucht es jemand unter seiner Adresse, oder muss es laufen, bevor DHCP funktioniert?
- Die MAC-Adresse, an die eine Reservierung gebunden ist, ist die fest eingebaute Hardwareadresse der Netzwerkkarte. Mehr dazu gehört zum Thema MAC, ARP und DHCP; hier reicht dieser eine Satz.
- Die Präfixlänge zählt die Einsen der Subnetzmaske von links. /24 heißt 24 Einsen, also 255.255.255.0. Ein Präfix von 0 heißt: Kein Bit muss übereinstimmen, darum passt 0.0.0.0/0 auf jedes Ziel.
- Hier bleibt es bei /24. Das Rechnen mit anderen Masken (Blockgrößen, Netz- und Broadcastadresse bei /26 und ähnlichen) gehört zum Subnetting.

**Typische Missverständnisse:**
- Viele denken, feste Adressen seien sicherer, schneller oder einfach „ordentlicher“. Richtig ist: Ihr Nutzen ist die gleichbleibende Erreichbarkeit; „alles fest“ bedeutet mehr Handarbeit, Tippfehler und doppelte Adressen.
- Viele denken, NAT mache die privaten Adressen öffentlich. Richtig ist: Nach außen erscheint nur die Adresse des Routers; das Gerät im LAN bleibt von außen nicht direkt ansprechbar.
- Viele denken, die Adressklasse lege die Maske eines Netzes fest. Richtig ist: Die Klasse sagt heute nichts mehr über die Maske; ein Netz aus dem alten Klasse-A-Bereich mit /24 ist völlig normal.

**Fachwörter:**
- Subnetzmaske: trennt Netz- und Hostanteil
- Standardgateway: Router für alle anderen Netze
- DHCP-Bereich: Adressen, die der DHCP-Server verteilt
- Adresskonflikt: dieselbe Adresse zweimal im Netz
- Reservierung: feste Adresse, am DHCP-Server hinterlegt
- Präfixlänge: Zahl der Netzbits, z. B. /24
- NAT, PAT: Umsetzung privater Adressen am Router
- Standardroute: Eintrag für alle übrigen Ziele

**So fragt die IHK:**
- Echte Aufgabe: Ein Rechner soll statisch eingerichtet werden; der Grund (spätere Fernwartung) steht schon im Aufgabentext. Vorgegeben sind eine kleine Tabelle des Administrators (Netz mit /24, DHCP-Bereich, Router) und eine gezeichnete Eingabemaske mit den Optionsfeldern „IP-Adresse automatisch beziehen“ und „Folgende IP-Adresse verwenden“ sowie den Feldern IP-Adresse, Subnetzmaske, Standardgateway (ohne DNS).
- Operatoren „markieren“ und „anpassen“, 4 Punkte. Als richtig zählten: Umstellen auf „Folgende IP-Adresse verwenden“, eine Adresse aus dem freien Rest, die Maske 255.255.255.0, das Gateway gleich dem Router. Die Adresse in der Lösung ist ausdrücklich beispielhaft, jede zulässige zählt.
- Ein Beurteilen von statisch gegen DHCP oder der Reservierung ist nicht als eigene Teilaufgabe belegt. Der Prüfungskatalog nennt die Konfiguration von Clients mit statischer und automatischer Vergabe; denkbar ist „begründen“ oder „beurteilen“ mit 2–4 Punkten.
- Zu privaten Bereichen, NAT und PAT, Dokumentation, Klassen und CIDR sowie besonderen Adressen gibt es keine echte Aufgabe. Zu erwarten sind kurze Fragen mit „nennen“, „erläutern“ oder Zuordnen (Adresse zu privat oder öffentlich, Klasse, Bedeutung), je 1–3 Punkte.

**Fallen:**
- Maske: Das Umstellen des Optionsfelds auf „Folgende IP-Adresse verwenden“ vergessen. Es gehört zur Lösung und wird mitbewertet.
- Maske: Ein Gateway aus einem anderen Netz eintragen, aus Gewohnheit oder durch einen Zahlendreher. Das Gateway Ziffer für Ziffer gegen das Netz lesen.
- Reservierung: Sie hängt an der MAC-Adresse. Wird das Gerät getauscht, bekommt das neue irgendeine Adresse aus dem DHCP-Bereich, bis die Reservierung auf die neue MAC-Adresse geändert ist.
- Reservierung: Ein Gerätetausch ist kein Argument gegen sie. Auch bei einer statischen Adresse muss am neuen Gerät jemand von Hand etwas eintragen.
- Dokumentation: Den Anschluss (Dose und Switch-Port) weglassen.
- Dokumentation: Bei einem DHCP-Client die gerade angezeigte Adresse als feste eintragen. Sie kann morgen anders sein; richtig ist „per DHCP“.
- Dokumentation: Auf die Frage nach dem Warum nur „Doku ist Pflicht“ antworten statt eine konkrete Folge zu nennen (Adresse doppelt vergeben, Suche an der falschen Stelle).
- Klassen: 172.x ist Klasse B, nicht C. Entscheidend ist allein das erste Oktett.
- Private Bereiche: Auch knapp neben 192.168 liegende Adressen wie 192.169.x.x sind nicht privat.
- NAT und PAT: Die Ports weglassen. Ohne sie ist nicht erklärt, wie der Router mehrere gleichzeitige Verbindungen auseinanderhält.
- Besondere Adressen: 0.0.0.0 oder eine Adresse mit erstem Oktett ab 224 einem Gerät als normale Adresse geben.
- Besondere Adressen: 0.0.0.0/0 für eine Geräteadresse halten. Es ist ein Eintrag in der Routingtabelle.
