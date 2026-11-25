Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Adressierung › IPv6-Adressen lesen und schreiben

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

## Stoff: IPv6-Adressen lesen und schreiben

Ziel: IPv6-Adressen kürzen und ausschreiben, in Präfix und Interface-Identifier zerlegen und von IPv4 unterscheiden.

Das muss ich können:

### K1 – Aufbau einer IPv6-Adresse (Stufe 1 Wiedergeben)
Du kannst den Aufbau einer IPv6-Adresse nennen: 128 Bit, geschrieben in acht Blöcken zu je vier Hexadezimalziffern.

Erklärung:
- **128 Bit** lang
- geschrieben in **acht Blöcken** zu je **vier Hexadezimalziffern** (je Block 16 Bit)
- Blöcke durch **Doppelpunkte** getrennt
Beispiel: 2001:0db8:0000:0000:0000:0000:0000:0001

### K2 – IPv6-Adresse gekürzt und ungekürzt (Stufe 3 Anwenden)
Du kannst eine IPv6-Adresse gekürzt und ungekürzt darstellen: führende Nullen weglassen, die längste Folge von Nullblöcken einmal durch :: ersetzen (bei gleich langen Folgen die erste, nie einen einzelnen Nullblock) und Hexadezimalziffern klein schreiben.

Erklärung:
Regeln zum Kürzen (Normform nach RFC 5952):
- **Führende Nullen** in einem Block weglassen: 0db8 → db8, 0000 → 0. Nie Nullen am Ende weglassen: 0db0 → db0.
- Die **längste** zusammenhängende Folge von Nullblöcken durch `::` ersetzen – nur **einmal** pro Adresse, sonst wüsste man nicht, wie viele Nullen wo fehlen.
- Sind zwei Nullfolgen **gleich lang**, kürzt man die **erste**; die andere schreibt man als 0:0.
- Ein **einzelner** Nullblock wird nicht zu `::`, sondern bleibt 0.
- Hexadezimalziffern **klein** schreiben.
Beispiele:
- 2001:0db8:0000:0000:0000:0000:0000:0001 → **2001:db8::1**
- 2001:0db8:0000:0000:0001:0000:0000:0001 → **2001:db8::1:0:0:1**
- 2001:0db8:0000:0001:0000:0000:0000:0001 → **2001:db8:0:1::1**
- Ausschreiben: fe80::1 → fe80:0000:0000:0000:0000:0000:0000:0001 (mit Nullblöcken auffüllen, bis es acht Blöcke sind)

### K3 – Präfix und Interface-Identifier bei /64 (Stufe 3 Anwenden)
Du kannst bei einer Adresse mit /64 den Präfix und den Interface-Identifier bestimmen.

Erklärung:
Bei /64 ist die Adresse genau in der Mitte geteilt:
- die ersten **64 Bit** (vier Blöcke) = **Präfix** – das Netz
- die letzten **64 Bit** (vier Blöcke) = **Interface-Identifier** – die Schnittstelle des Geräts
Beispiel: 2001:db8:abcd:12:a1b2:c3ff:fe4d:5e6f/64
- Präfix: 2001:db8:abcd:12::/64
- Interface-Identifier: a1b2:c3ff:fe4d:5e6f
Tipp: Gekürzte Adressen vorher ausschreiben, sonst zählst du die Blöcke falsch.

### K4 – Verbindungslokale Adresse fe80:: (Stufe 2 Verstehen)
Du kannst erklären, woran man eine verbindungslokale Adresse (fe80::) erkennt, dass sie immer die Präfixlänge /64 hat, auch wenn keine angegeben ist, und warum sie ohne Konfiguration automatisch entsteht.

Erklärung:
- Erkennbar am Anfang **fe80::**
- Gilt nur im **lokalen Netzabschnitt** und wird von Routern nicht weitergeleitet.
- Sie hat immer die Präfixlänge **/64** – auch wenn keine dabeisteht: Präfix fe80:0000:0000:0000, die hinteren 64 Bit sind der Interface-Identifier. (Reserviert ist der Bereich fe80::/10, genutzt wird fe80::/64.)
- Jede IPv6-Schnittstelle bildet sie **automatisch** – aus fe80:: und ihrem Interface-Identifier –, ganz ohne Router oder DHCP.
So können Geräte im selben Abschnitt immer miteinander sprechen, auch wenn sonst nichts konfiguriert ist.

### K5 – Vorteile von IPv6 gegenüber IPv4 (Stufe 1 Wiedergeben)
Du kannst Vorteile von IPv6 gegenüber IPv4 nennen: viel größerer Adressraum, weltweite Erreichbarkeit einzelner Geräte, automatische Konfiguration.

Erklärung:
- **Viel größerer Adressraum:** IPv4-Adressen sind weltweit aufgebraucht, IPv6 hat praktisch unbegrenzt viele.
- **Weltweite Erreichbarkeit:** jedes Gerät kann eine eigene öffentliche Adresse bekommen – ohne NAT.
- **Automatische Konfiguration:** Geräte können sich ihre Adresse selbst bilden.

### K6 – IPv4 gegen IPv6: Bitlänge, Schreibweise, Vergabe (Stufe 2 Verstehen)
Du kannst Unterschiede zwischen IPv4 und IPv6 beschreiben: 32 gegen 128 Bit, dezimal mit Punkten gegen hexadezimal mit Doppelpunkten, Art der Adressvergabe.

Erklärung:
- **Länge:** IPv4 32 Bit, IPv6 128 Bit
- **Schreibweise:** IPv4 dezimal mit Punkten (192.168.1.10), IPv6 hexadezimal mit Doppelpunkten (2001:db8::10)
- **Adressvergabe:** IPv4 statisch oder per DHCP; IPv6 zusätzlich automatisch durch das Gerät selbst aus dem Präfix, das der Router mitteilt (SLAAC)

### K7 – IPv6-Gegenstücke zu IPv4-Adressarten (Stufe 1 Wiedergeben)
Du kannst die IPv6-Gegenstücke zu den IPv4-Adressarten nennen: Loopback ::1 statt 127.0.0.1, verbindungslokal fe80::/10 statt 169.254.0.0/16, Unique Local fc00::/7 statt privater Bereiche, Global Unicast 2000::/3 statt öffentlicher Adressen.

Erklärung:
- **Loopback:** ::1 statt 127.0.0.1
- **Verbindungslokal:** fe80::/10 statt 169.254.0.0/16 (dem Bereich, aus dem sich ein IPv4-Gerät ohne DHCP-Server selbst eine Adresse gibt)
- **Unique Local** (wie privat): fc00::/7 statt 10.x, 172.16.x, 192.168.x
- **Global Unicast** (öffentlich): 2000::/3 statt öffentlicher IPv4-Adressen
Erkennungstipp: Beginnt eine Adresse mit 2 oder 3, ist sie global; mit fe80 lokal; mit fc oder fd Unique Local.

## Lehrnotiz: IPv6-Adressen lesen und schreiben

**Aufteilung:**
- Aufbau, Vergleich mit IPv4 und Vorteile: K1, K6, K5
- Kürzen und ausschreiben: K2
- Präfix und Interface-Identifier: K3
- Die verbindungslokale Adresse: K4
- Gegenstücke zu den IPv4-Adressarten: K7

**Schon geprüft:** In Prüfungen: K1 (2024F), K2 (2022H, 2024F), K3 (2024F), K4 (2022F, 2022H, 2024F), K5 (2022H), K6 (2026F) · Noch nicht geprüft: K7

**Kerngedanken:**
- Eine Hexadezimalziffer steht für 4 Bit. Daraus folgt alles Zählen: vier Ziffern je Block sind 16 Bit (nicht 8 wie ein Oktett), acht Blöcke 128 Bit, vier Blöcke 64 Bit.
- Gekürzte und ungekürzte Form sind dieselbe Adresse. Vor jedem Zählen oder Zerlegen wird ausgeschrieben, denn :: kann auch mitten im Präfix stehen.
- Windows hängt an verbindungslokale Adressen ein Prozentzeichen mit einer Zahl an. Das ist die Nummer der Netzwerkkarte, kein Teil der Adresse.
- Ein Gerät hat meist zugleich eine verbindungslokale und eine globale Adresse. Aus einem anderen Netz ist es nur über die globale erreichbar.
- 169.254.0.0/16 ist der Bereich, aus dem sich ein IPv4-Rechner selbst eine Adresse gibt, wenn kein DHCP-Server antwortet. Wie man ein Präfix aufteilt und wie SLAAC im Einzelnen arbeitet, gehört zum Thema „IPv6 im Netz“.

**Typische Missverständnisse:**
- Viele denken, IPv6 habe viermal so viele Adressen wie IPv4. Richtig ist: Nur die Bitlänge ist viermal so lang, die Zahl der Adressen ist 2⁹⁶-mal so groß.
- Viele denken, eine fe80-Adresse zeige einen Fehler oder eine fehlende Verbindung an. Richtig ist: Jede IPv6-Schnittstelle hat sie immer, auch neben einer globalen Adresse.

**Fachwörter:**
- Hexadezimalziffer: 0–9 und a–f, je 4 Bit
- Präfix: vorderer Teil, bezeichnet das Netz
- Interface-Identifier: hinterer Teil, bezeichnet die Schnittstelle
- verbindungslokale Adresse: gilt nur im lokalen Netzabschnitt (IHK auch: link-lokal)
- Global Unicast: weltweit gültige, öffentliche Adresse
- Unique Local: Gegenstück zu privaten IPv4-Adressen
- Loopback: Adresse des eigenen Rechners

**So fragt die IHK:**
- Bildschirmausgabe von ipconfig mit einer verbindungslokalen Adresse ohne Präfixlänge, dazu vier Antwortfelder „nennen“: Länge in Bit (1 Punkt), ungekürzte Darstellung in Hex (2), Präfixlänge (1), Interface-Identifier (1). Gezählt: 128; alle acht Blöcke vierstellig; 64 Bit; die hinteren vier Blöcke.
- Dieselbe Art Ausgabe oder `ip addr`: „Beschreiben Sie die Herkunft“ oder „Geben Sie den Grund an und benennen Sie die Adressart“, je 2 Punkte. Gezählt: link-lokale Adresse, vom Rechner unabhängig vom Netz automatisch selbst vergeben.
- „Nennen Sie zwei technologische Vorteile von IPv6 gegenüber IPv4“, 2 Punkte, beispielhaft. Die Lösungshinweise ließen neben Adresszahl und weltweiter Erreichbarkeit auch integrierte Sicherheit (IPsec) und einen schlankeren Protokollkopf gelten: nicht lehren, aber nicht als falsch werten.
- Eine gekürzte globale Adresse in Teilen ungekürzt hexadezimal angeben, je Teil 2 Punkte.
- Vergleich mit IPv4 (K6, 2026F), 4 Punkte, „beschreiben“: zwei Unterschiede zwischen den Protokollen IPv4 und IPv6, je 2 Punkte. Lösungshinweise liegen nicht vor.

**Fallen:**
- Beim Ausschreiben die vorhandenen Blöcke nicht zählen und :: mit zu vielen oder zu wenigen Nullblöcken füllen.
- Beim Ausschreiben die führenden Nullen kurzer Blöcke vergessen, besonders im letzten Block.
- Die ersten vier sichtbaren Blöcke einer gekürzten Adresse als Präfix nehmen.
- Beim Vergleich nur eine Seite nennen („IPv6 ist hexadezimal“). Zu jedem Unterschied gehören beide Seiten.
- Eine fe80-Adresse als Ziel aus einem anderen Netz verwenden, oder den Fehlschlag nur mit „Adresse ungültig“ erklären statt mit „gilt nur lokal, wird nicht weitergeleitet“.
