Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Adressierung › IPv6-Adressen lesen und schreiben

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
- Der Vergleich mit IPv4 ist laut Katalog Prüfstoff, typisch „beschreiben“, 2–3 Punkte.

**Fallen:**
- Beim Ausschreiben die vorhandenen Blöcke nicht zählen und :: mit zu vielen oder zu wenigen Nullblöcken füllen.
- Beim Ausschreiben die führenden Nullen kurzer Blöcke vergessen, besonders im letzten Block.
- Die ersten vier sichtbaren Blöcke einer gekürzten Adresse als Präfix nehmen.
- Beim Vergleich nur eine Seite nennen („IPv6 ist hexadezimal“). Zu jedem Unterschied gehören beide Seiten.
- Eine fe80-Adresse als Ziel aus einem anderen Netz verwenden, oder den Fehlschlag nur mit „Adresse ungültig“ erklären statt mit „gilt nur lokal, wird nicht weitergeleitet“.
