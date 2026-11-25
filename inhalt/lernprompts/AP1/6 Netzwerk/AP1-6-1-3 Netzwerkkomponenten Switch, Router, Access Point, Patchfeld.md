Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Modelle, Protokolle und Geräte › Netzwerkkomponenten: Switch, Router, Access Point, Patchfeld

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen: gern mit Beispielen aus dem Alltag und dem Warum dahinter.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
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

## Stoff: Netzwerkkomponenten: Switch, Router, Access Point, Patchfeld

Ziel: Die Aufgabe der Netzwerkgeräte am Arbeitsplatz erklären und für eine Situation Gerät oder Anschluss begründet auswählen.

Das muss ich können:

### K1 – Switch: Aufgabe und OSI-Schicht (Stufe 2 Verstehen)
Du kannst die Aufgabe eines Switches erklären: Geräte innerhalb eines Netzes verbinden; er arbeitet auf OSI-Schicht 2 mit MAC-Adressen.

Erklärung:
Ein Switch **verbindet Geräte innerhalb eines Netzes** – z. B. alle PCs und Drucker in einem Büro.
Er merkt sich, an welchem Anschluss welche **MAC-Adresse** hängt, und leitet Daten **gezielt** nur an den Anschluss des Empfängers weiter.
Er arbeitet auf **OSI-Schicht 2**. Manche Switches können mehr (z. B. ein Layer-3-Switch, der auch zwischen Netzen vermittelt) – das steht dann in der Aufgabe.

### K2 – Router bzw. Gateway: Netze verbinden (Stufe 2 Verstehen)
Du kannst die Aufgabe eines Routers bzw. Gateways erklären: Netze miteinander verbinden, zum Beispiel das lokale Netz mit dem Internet; er arbeitet auf OSI-Schicht 3 mit IP-Adressen.

Erklärung:
Ein Router **verbindet verschiedene Netze** miteinander – z. B. das lokale Netz mit dem Internet.
Er leitet Pakete anhand der **IP-Adresse** in das richtige Netz weiter und arbeitet auf **OSI-Schicht 3**.
**Gateway** heißt der Übergang in ein anderes Netz – im LAN ist das meist der Router. Deshalb trägt man seine Adresse als „Standardgateway“ ein. Viele Router können zusätzlich NAT/PAT (Adressumsetzung), eine Firewall oder DHCP – was gefragt ist, gibt die Aufgabe vor.

### K3 – Access Point: WLAN ans Kabelnetz (Stufe 2 Verstehen)
Du kannst die Aufgabe eines Access Points erklären: WLAN-Geräte an das kabelgebundene Netz anbinden.

Erklärung:
Ein Access Point **stellt WLAN bereit** und bindet die WLAN-Geräte an das **kabelgebundene Netz** an.
Er hängt selbst per Kabel am Switch – so können Notebooks und Smartphones per Funk mit den Geräten im Kabelnetz sprechen.

### K4 – Passendes Netzwerkgerät für eine Situation (Stufe 4 Beurteilen)
Du kannst für eine beschriebene Situation das passende Netzwerkgerät auswählen und die Wahl begründen.

Erklärung:
Frag, was fehlt:
- Mehr Kabelanschlüsse im **selben Netz** → **Switch**.
- **WLAN** in einem Raum mit Netzwerkdose → **Access Point**.
- Das LAN mit dem **Internet** oder einem anderen Netz verbinden → **Router**.
Begründe mit der Aufgabe des Geräts: „Ein Switch, weil die vier PCs im selben Netz verbunden werden sollen.“

### K5 – Gerätesymbole im einfachen Netzwerkplan (Stufe 1 Wiedergeben)
Du kannst die Symbole des Katalog-Anhangs für Switch, Router, Firewall, Access Point, Kombigerät, Server und Teilnetz in einem einfachen Netzwerkplan erkennen.

Erklärung:
Im Katalog-Anhang sind die Symbole abgebildet – präge sie dir ein:
- **Switch:** flacher Quader mit Pfeilen auf der Oberseite.
- **Router:** flacher runder Zylinder mit vier Pfeilen.
- **Firewall:** eine Mauer mit Ziegelmuster.
- **Access Point:** kleiner Sockel mit Antenne und Funkwellen.
- **Kombigerät (SOHO = Small Office/Home Office, kleines Büro):** flacher Kasten mit zwei Antennen – Router, Switch, Firewall und Access Point in einem.
- **Server:** Tower- oder flaches Server-Gehäuse.
- **Teilnetz:** Ellipse mit Netzadresse, z. B. 192.0.2.0 /24.
Vergleiche in der Prüfung immer mit der Legende aus dem Anhang.

### K10 – Firewall im Netzwerkplan bis Schicht 4 (Stufe 1 Wiedergeben)
Du kannst nennen, wofür eine Firewall im Netzwerkplan steht: eine Stateful Inspection Firewall, die Verbindungen bis OSI-Schicht 4 prüft, also nach IP-Adressen und Ports filtert und Antworten zu bestehenden Verbindungen durchlässt.

Erklärung:
Der Katalog-Anhang legt fest, was das Firewall-Symbol (Mauer mit Ziegelmuster) im Netzwerkplan bedeutet: eine **Stateful Inspection Firewall**, die bis **Schicht 4** arbeitet.
- Sie prüft jede Verbindung nach **IP-Adressen** (Schicht 3) und **Ports** (Schicht 4) gegen ihre Regeln.
- „Stateful“: Sie merkt sich erlaubte Verbindungen und lässt die **Antworten** darauf durch, ohne dass dafür eine eigene Regel nötig ist.
- Weitere Funktionen (z. B. Next Generation Firewall) gelten nur, wenn die Aufgabe sie nennt.
Beispiel: Ein PC ruft eine Website auf (Ziel-Port 443) – die Firewall lässt die Anfrage nach außen und die Antwort des Webservers wieder herein.

### K6 – Richtige Netzwerkdose per Patchplan (Stufe 4 Beurteilen · in der Prüfung vorgegeben: Dosenbeschriftung und Patchplan)
Du kannst anhand von Dosenbeschriftung und Patchplan die Netzwerkdose wählen, die über Patchfeld und Switch ins richtige Netz führt, und die Wahl begründen.

Erklärung:
Verfolge den Weg vom Arbeitsplatz bis zum Netz:
- **Dose** → laut Beschriftung zu einem Port am **Patchfeld**
- **Patchfeld-Port** → laut Patchplan mit einem Port am **Switch** verbunden
- **Switch-Port** → gehört zu einem bestimmten **Netz**
Beispiel: Dose 2.07 führt zu Patchfeld-Port 7, der ist mit Switch-Port 15 verbunden, und Port 15 gehört zum Verwaltungsnetz → Dose 2.07 ist richtig für einen PC der Verwaltung. Die Nummern von Dose, Patchfeld-Port und Switch-Port müssen nicht übereinstimmen – immer ablesen.

### K7 – WLAN-Router im Büro als Kombigerät (Stufe 2 Verstehen)
Du kannst erklären, dass ein WLAN-Router im kleinen Büro mehrere Geräte vereint: Router mit Internetzugang, Switch, Access Point und oft eine Firewall.

Erklärung:
Im kleinen Büro steht meist **ein** Gerät, das mehrere Aufgaben vereint:
- **Router** mit Internetzugang (z. B. DSL- oder Glasfaser-Modem eingebaut)
- **Switch** – die LAN-Anschlüsse auf der Rückseite
- **Access Point** – das WLAN
- oft eine **Firewall**
Im größeren Netz sind das getrennte Geräte.

### K8 – Weg von der Dose zum Switch (Stufe 2 Verstehen)
Du kannst den Weg von der Netzwerkdose zum Switch erklären: Jede Dose hat ein eigenes, fest verlegtes Kabel bis zu einem Port am Patchfeld im Verteilerschrank, von dort führt ein kurzes Patchkabel zum Switch; so lässt sich eine Dose durch Umstecken einem anderen Switch-Port oder Netz zuordnen, ohne neu zu verlegen.

Erklärung:
Kabel in Wänden und Kabelkanälen werden **einmal fest verlegt** und danach nicht mehr angefasst. Alles, was sich ändert, passiert im Verteilerschrank.
- **Dose → Patchfeld:** Jede Dose hat ihr **eigenes** Kabel, das am Patchfeld auf einem nummerierten Port endet.
- **Patchfeld → Switch:** Ein kurzes **Patchkabel** verbindet den Patchfeld-Port mit einem Switch-Port; Patchfeld und Switch sitzen meist im 19-Zoll-Schrank.
- **Umstecken statt neu verlegen:** Zieht jemand um oder soll eine Dose in ein anderes Netz, steckt man nur das Patchkabel um.
- Beschriftung von Dose und Patchfeld-Port und ein aktueller **Patchplan** halten fest, was womit verbunden ist.
Beispiel: Dose 3.12 endet an Patchfeld-Port 12; steckt man dessen Patchkabel von Switch A auf Switch B um, ist der Arbeitsplatz im Netz von Switch B.

### K9 – Endgeräte gegen Netzwerkgeräte (Stufe 2 Verstehen)
Du kannst Endgeräte von Netzwerkgeräten unterscheiden: Endgeräte (Hosts) wie PC, Server, Drucker oder IP-Telefon erzeugen oder empfangen Daten, Netzwerkgeräte wie Switch, Access Point und Router leiten sie nur weiter.

Erklärung:
Ein Netz besteht aus **Knoten** und den Verbindungen dazwischen. Die Knoten unterscheidet man nach ihrer Rolle:
- **Endgeräte (Hosts):** Hier entstehen Daten oder kommen an – PC, Notebook, Server, Netzwerkdrucker, IP-Telefon, IP-Kamera, Sensor.
- **Netzwerkgeräte:** Sie **vermitteln** nur zwischen den Endgeräten – Switch, Access Point, Router.
Die Unterscheidung hilft beim Lesen eines Netzwerkplans und bei der Fehlersuche: Kommen die Daten am Endgerät nicht an, oder bleiben sie unterwegs in einem Netzwerkgerät hängen?
Beispiel: Druckt ein PC über das Netz, sind PC und Drucker Endgeräte, Switch und Access Point dazwischen Netzwerkgeräte.

### K11 – Hub als Vorläufer des Switches (Stufe 2 Verstehen)
Du kannst den Hub als Vorläufer des Switches einordnen: Er arbeitet auf OSI-Schicht 1 und leitet jedes Signal an alle Anschlüsse weiter, während der Switch auf Schicht 2 gezielt nach MAC-Adressen weiterleitet.

Erklärung:
Hub als Vorläufer des Switches: Er arbeitet auf **OSI-Schicht 1**, wertet keine Adressen aus und leitet jedes Signal an **alle** Anschlüsse weiter. Der **Switch** arbeitet dagegen auf **Schicht 2**: Er merkt sich die MAC-Adressen und leitet gezielt nur an den Empfänger weiter – weniger Last im Netz, und die anderen Geräte bekommen die Daten nicht.

### K12 – Repeater und Hub auf Schicht 1 (Stufe 2 Verstehen)
Du kannst Repeater und Hub erklären: Ein Repeater frischt das Signal auf und verlängert so eine Leitung, ein Hub ist ein Repeater mit vielen Anschlüssen; beide arbeiten auf OSI-Schicht 1, werten keine Adressen aus und geben alles an alle Ports weiter.

Erklärung:
Ein Repeater frischt das Signal auf und verlängert so eine Leitung, ein Hub ist ein Repeater mit vielen Anschlüssen; beide arbeiten auf Schicht 1, werten keine Adressen aus und geben alles an alle Ports weiter.

## Lehrnotiz: Netzwerkkomponenten: Switch, Router, Access Point, Patchfeld

**Aufteilung:**
- Teil A – Geräte: Endgeräte und Netzwerkgeräte K9; Geräte der Schicht 1 K12; Switch im Vergleich zum Hub K1, K11; Router und Gateway K2; Access Point und Kombigerät K3, K7; passendes Gerät auswählen K4
- Pause möglich nach Teil A.
- Teil B – Plan und Verkabelung: Firewall und Symbole im Netzwerkplan K10, K5; Weg von der Dose zum Switch K8; richtige Dose per Patchplan K6

**Schon geprüft:** In Prüfungen: K6 (2025H) · Noch nicht geprüft: K1–K5, K7–K12

**Kerngedanken:**
- Die Netzwerkgeräte unterscheiden sich darin, was sie von den Daten auswerten: Repeater und Hub nur das Signal (Schicht 1), der Switch die MAC-Adresse (Schicht 2), der Router die IP-Adresse (Schicht 3), die Firewall zusätzlich die Ports (Schicht 4). Daraus folgt, was ein Gerät kann.
- Innerhalb des eigenen Netzes stellt der Switch zu, ein Router wird dafür nicht gebraucht. Erst für ein Ziel in einem anderen Netz gehen die Daten an das Standardgateway. Fehlt dieser Eintrag, klappt deshalb alles im eigenen Netz, aber nichts nach außen.
- Der Switch lernt seine Zuordnung selbst: Er liest in jedem ankommenden Frame die MAC-Adresse des Absenders und merkt sich den Anschluss dazu.
- Ein Access Point ersetzt nur das Kabel durch Funk. Er verbindet keine Netze und bringt kein Internet; das Netz, in dem die WLAN-Geräte landen, ist das Netz der Dose, an der er hängt.
- Welches Netz an einer Dose anliegt, entscheidet nicht die Dose selbst, sondern der Weg im Verteilerschrank: Die Beschriftung führt zum Port am Patchfeld, das Patchkabel legt den Switch-Port fest, und der Switch-Port gehört zu einem Netz. Deshalb wechselt man das Netz durch Umstecken, ohne an der Dose etwas zu ändern.

**Typische Missverständnisse:**
- Viele denken, ein Hub sei ein kleiner Switch; richtig ist: Ein Hub wertet keine Adressen aus und gibt alles an alle Anschlüsse.
- Viele denken, das Gateway sei ein eigenes, zusätzliches Gerät; richtig ist: Im LAN ist es meist der Router selbst.
- Viele denken, Access Point und WLAN-Router seien dasselbe; richtig ist: Der WLAN-Router enthält einen Access Point und dazu Router, Switch und oft eine Firewall.

**Fachwörter:**
- Endgeräte (Hosts): erzeugen oder empfangen Daten
- Netzwerkgeräte: leiten Daten nur weiter
- Standardgateway: Adresse des Übergangs in andere Netze
- Kombigerät (SOHO): Router, Switch, Firewall, Access Point in einem
- Stateful Inspection Firewall: merkt sich erlaubte Verbindungen, prüft bis Schicht 4
- Patchfeld: nummerierte Ports, an denen die Dosenkabel enden
- Patchkabel: kurzes Kabel, verbindet Patchfeld und Switch
- Patchplan: Liste, welcher Port womit verbunden ist

**So fragt die IHK:**
- Echte Aufgabe (2025H, K6), 3 Punkte, „auswählen“ und „begründen“: Ein Kartenterminal soll per Patchkabel angeschlossen werden. Material: ein Foto zweier Doppeldosen mit den Beschriftungen „Verkauf - 3/4“ und „Verkauf - 5/6“ und ein Foto des Netzwerkschranks, in dem am Patchfeld nur die Ports 5 bis 12 mit dem Switch verbunden sind. Richtig ist ein Anschluss der Dose 5/6, weil nur diese Ports gepatcht sind. Lösungshinweise liegen nicht vor.
- Zu den Geräten selbst gibt es keine echte Aufgabe; das Folgende ist aus dem Prüfungskatalog abgeleitet.
- Der Katalog führt WLAN-Router, Switch, Gateway und Access Point unter „marktgängige IT-Systeme kennen, unterscheiden und beurteilen“: einordnen und für eine Kundensituation auswählen.
- Der Katalog-Anhang „IT-Netzwerk-Diagramm“ legt Symbole und Bedeutung fest und erlaubt, dass eine Aufgabe weitere Funktionen (Layer-3-Switch, NAT, Next Generation Firewall) oder weitere Symbole ergänzt.
- Zu erwarten ist ein Kundennetz, das erweitert oder neu aufgebaut wird, mit Netzwerkplan, bei Verkabelung mit Dosenbeschriftung und Patchplan. Operatoren: nennen (Gerät zum Symbol), erklären oder beschreiben (Aufgabe eines Geräts, Weg von der Dose zum Switch), auswählen und begründen (Gerät, Dose).
- Punkte sind nur eine Annahme: kleine Teilaufgaben mit 2–4 Punkten, je Situation ein Punkt für das Gerät und einer für die Begründung mit seiner Aufgabe.

**Fallen:**
- Teil A: Einen Server als Netzwerkgerät einordnen, weil er im Schrank steht; er erzeugt und empfängt Daten, ist also ein Endgerät.
- Teil A: Den Switch mit IP-Adressen oder Schicht 3 begründen oder schreiben, er verbinde Netze.
- Teil A: Switch und Router verwechseln (im selben Netz mit MAC-Adressen, zwischen Netzen mit IP-Adressen).
- Teil A: Die Wahl eines Geräts mit „besser“ oder „schneller“ begründen statt mit seiner Aufgabe, bezogen auf die Situation.
- Teil A: Einen Router wählen, wo nur Anschlüsse oder WLAN fehlen, oder einen Hub vorschlagen.
- Teil A: Bei einem Vorschlag, der beurteilt werden soll, nur das richtige Gerät nennen, ohne zu sagen, warum das vorgeschlagene nicht passt.
- Teil A: Ein Gerät in ein Netz hängen, aus dem es sein Ziel nicht erreicht; welches Netz richtig ist, ergibt sich daraus, was das Gerät erreichen muss.
- Teil B: Die Symbole von Router (runder Zylinder) und Switch (Quader) verwechseln, ebenso Access Point (Sockel mit Funkwellen) und Kombigerät (Kasten mit zwei Antennen).
- Teil B: Die Ellipse für ein Gerät halten; sie steht für ein Netz, in dem weitere Geräte stecken können.
- Teil B: Annehmen, die Dose sei direkt mit dem Switch verbunden, oder für einen Netzwechsel ein neues Kabel verlegen wollen.
- Teil B: Nach dem Umstecken den Patchplan nicht aktualisieren.
- Teil B: Den Patchfeld-Port aus der Dosennummer erraten, statt ihn aus der vorgegebenen Dosenbeschriftung abzulesen; die Nummern können übereinstimmen, müssen es aber nicht.
- Teil B: Einen Port übersehen, der laut Patchplan nicht gepatcht ist; eine solche Dose hat keine Verbindung.
- Teil B: Nur die Dose nennen, ohne den ganzen Weg bis zum Netz als Begründung.
