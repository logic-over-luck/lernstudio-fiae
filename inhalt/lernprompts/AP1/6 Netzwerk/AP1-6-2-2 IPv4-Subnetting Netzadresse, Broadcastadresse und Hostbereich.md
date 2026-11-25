Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Adressierung › IPv4-Subnetting: Netzadresse, Broadcastadresse und Hostbereich

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

## Stoff: IPv4-Subnetting: Netzadresse, Broadcastadresse und Hostbereich

Ziel: Zu einer IPv4-Adresse mit Präfix Netz, Broadcast und nutzbare Adressen berechnen und ein Netz in gleich große Teilnetze aufteilen.

Das muss ich können:

### K1 – Adressen und Hosts aus der Präfixlänge (Stufe 3 Anwenden)
Du kannst aus der Präfixlänge die Zahl der Adressen und der nutzbaren Hosts berechnen, zum Beispiel bei /26: 64 Adressen, 62 Hosts.

Erklärung:
- `Adressen = 2^(32 − Präfix)`
- `nutzbare Hosts = Adressen − 2` – Netz- und Broadcastadresse fallen weg
Übersicht:
- /24: 256 Adressen, 254 Hosts
- /25: 128 Adressen, 126 Hosts
- /26: 64 Adressen, **62 Hosts**
- /27: 32 Adressen, 30 Hosts
- /28: 16 Adressen, 14 Hosts

### K2 – Netzadresse, Hostanteil und Broadcastadresse (Stufe 3 Anwenden)
Du kannst zu einer IPv4-Adresse mit Präfix die Netzadresse, den Hostanteil und die Broadcastadresse bestimmen.

Erklärung:
- **Netzadresse:** alle Hostbits 0 – die erste Adresse des Netzes.
- **Broadcastadresse:** alle Hostbits 1 – die letzte Adresse des Netzes.
- **Hostanteil:** Adresse minus Netzadresse; im Netzanteil stehen Nullen.
Schneller Weg über die **Blockgröße** = 256 − Maskenwert im betroffenen Oktett:
- /26 → Maske .192 → Blockgröße 256 − 192 = **64**
- Netze beginnen bei Vielfachen: .0, .64, .128, .192
Beispiel: 192.168.1.100/26 → 100 liegt zwischen 64 und 127 → Netz **192.168.1.64**, Broadcast **192.168.1.127** (nächstes Netz − 1), Hostanteil 100 − 64 = 36 → **0.0.0.36**.
Hostanteil: Bits hinter dem Netzpräfix, im Beispiel 0.0.0.36. **Hostadresse:** beim Konfigurieren die vollständige Geräteadresse, im Beispiel 192.168.1.100. In einer älteren Prüfungsaufgabe wurden im Feld „Hostadresse“ beide Darstellungen akzeptiert.

### K3 – Erste, letzte und vorletzte Hostadresse (Stufe 3 Anwenden)
Du kannst die erste, die letzte und die vorletzte nutzbare Hostadresse bestimmen.

Erklärung:
- **Erste** nutzbare Adresse = Netzadresse + 1
- **Letzte** nutzbare Adresse = Broadcast − 1
- **Vorletzte** = Broadcast − 2
Beispiel Netz 192.168.1.64/26, Broadcast .127:
- erste: .65
- letzte: .126
- vorletzte: .125
Die letzte oder erste Adresse bekommt oft der Router.

### K4 – Fehlende Adresse in der Netzskizze (Stufe 3 Anwenden)
Du kannst in einer Netzskizze mit Endgeräten und Netzadresse eine fehlende Adresse eintragen.

Erklärung:
- Aus Netzadresse und Präfix den **Bereich** bestimmen: von Netz + 1 bis Broadcast − 1.
- Die schon vergebenen Adressen in der Skizze streichen – **auch das Gateway**.
- Eine freie Adresse aus dem Rest wählen.
Beispiel: Netz 10.0.5.0/28 → Hosts .1 bis .14; vergeben sind .1 (Router), .2 und .3 → z. B. **10.0.5.4**.

### K5 – Subnetzmaske aus Präfixlänge und umgekehrt (Stufe 3 Anwenden)
Du kannst aus einer Präfixlänge die Subnetzmaske bestimmen und umgekehrt, zum Beispiel /25 = 255.255.255.128.

Erklärung:
So viele Einsen von links, wie das Präfix angibt. Die Werte eines Oktetts mit 1 bis 8 Einsen:
- 1 → 128, 2 → 192, 3 → 224, 4 → 240
- 5 → 248, 6 → 252, 7 → 254, 8 → 255
Beispiele:
- /24 = 255.255.255.0
- /25 = 255.255.255.**128**
- /26 = 255.255.255.**192**
- /27 = 255.255.255.**224**
Umgekehrt: Einsen zählen. 255.255.255.240 = 24 + 4 = **/28**.

### K6 – Zwei Adressen im selben Netz (Stufe 3 Anwenden)
Du kannst bestimmen, ob zwei Adressen im selben Netz liegen und damit direkt miteinander kommunizieren können.

Erklärung:
Bestimme für **beide** Adressen mit derselben Maske die Netzadresse:
- gleich → selbes Netz → direkt erreichbar
- verschieden → verschiedene Netze → nur über einen Router
Beispiel: 192.168.1.60/26 und 192.168.1.70/26
- .60 liegt im Block .0–.63 → Netz .0
- .70 liegt im Block .64–.127 → Netz .64
→ **verschiedene Netze**, obwohl die Adressen nah beieinander liegen.

### K7 – Aufteilung in gleich große Teilnetze (Stufe 3 Anwenden)
Du kannst ein Netz in gleich große Teilnetze aufteilen und für jedes Teilnetz Netzadresse und Broadcastadresse bestimmen.

Erklärung:
Für **2ⁿ** gleich große Teilnetze addierst du **n Bits** zum Präfix.
Beispiel: 192.168.1.0/24 in **4** Teilnetze → 2² → +2 Bits → **/26**, Blockgröße 64:
- .0 bis .63 (Broadcast .63)
- .64 bis .127 (Broadcast .127)
- .128 bis .191 (Broadcast .191)
- .192 bis .255 (Broadcast .255)
In 8 Teilnetze → +3 Bits → /27, Blockgröße 32.

## Lehrnotiz: IPv4-Subnetting: Netzadresse, Broadcastadresse und Hostbereich

**Aufteilung:**
- Maske und Präfix ineinander umrechnen: K5
- Größe eines Netzes: K1
- Grenzen des Netzes: K2
- Was im Netz vergeben werden darf: K3, K4
- Selbes Netz oder nicht: K6
- Ein Netz in Teilnetze teilen: K7

**Schon geprüft:** In Prüfungen: K1 (2026F), K2 (2022F, 2026F), K3 (2025F, 2025H), K4 (2025F), K5 (2026F) · Noch nicht geprüft: K6, K7

**Kerngedanken:**
- Die Blockgröße ist der Stellenwert des letzten Netzbits in seinem Oktett, z. B. /26 → 64, /28 → 16. Bei Präfixen von /25 bis /32 ist sie zugleich die Zahl der Adressen des Netzes; ein /24-Netz hat 256 Adressen. So hängen Größe und Grenzen zusammen.
- Der Hostanteil ist der Rest, wenn man von der Adresse die Netzadresse abzieht. Bei /24 und längeren Präfixen schreibt man ihn als 0.0.0.x, bei /16 z. B. als 0.0.5.7.
- Im Prüfungsmaterial kann statt des Präfixes die Subnetzmaske stehen, etwa in einer Konsolenausgabe. Dann wird zuerst umgerechnet.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K6 – Sendeentscheidung des Hosts: direkt oder über das Gateway: (1) Der sendende Host verknüpft seine eigene IP-Adresse bitweise per UND mit seiner Subnetzmaske und erhält so seine Netzadresse. (2) Er verknüpft die Zieladresse mit derselben eigenen Maske und vergleicht das Ergebnis mit seiner Netzadresse. (3) Sind beide Netzadressen gleich, fragt der Host per ARP-Anfrage als Broadcast im eigenen Netz nach der MAC-Adresse des Ziels. (4) Er sendet das IP-Paket dann in einem Ethernet-Frame direkt an diese MAC-Adresse, ohne dass ein Router beteiligt ist. (5) Sind die Netzadressen verschieden, ermittelt der Host per ARP die MAC-Adresse seines Standardgateways und sendet den Frame dorthin; die Ziel-IP-Adresse im Paket bleibt unverändert. (6) Der Router sucht das Zielnetz in seiner Routingtabelle und leitet das Paket über die passende Schnittstelle weiter. Vereinfacht: Der Host schaut zuerst in seinem ARP-Cache nach und sendet die ARP-Anfrage nur, wenn dort kein Eintrag steht.

**Typische Missverständnisse:**
- Viele denken, die Netzadresse ende immer auf .0 und die Broadcastadresse auf .255. Richtig ist: Das gilt nur bei /24 und kürzeren Präfixen; bei längeren Präfixen liegen die Grenzen im letzten Oktett an den Vielfachen der Blockgröße, bei /26 etwa mit den Broadcastadressen .63, .127, .191 und .255.
- Viele denken, bei vier Teilnetzen bekomme jedes ein Viertel der bisherigen Hosts. Richtig ist: Jedes Teilnetz verliert eine eigene Netz- und Broadcastadresse; die Hostzahl rechnet man aus dem neuen Präfix.
- Viele denken, für acht Teilnetze brauche man acht zusätzliche Bits. Richtig ist: Es zählt der Exponent, 2³ = 8, also drei Bits.

**Fachwörter:**
- Präfixlänge: Zahl der Netzbits von links
- Subnetzmaske: Präfix als vier Dezimalzahlen geschrieben
- Hostanteil: nur die Bits hinter dem Netzpräfix; nicht die vollständige IP-Adresse des Hosts
- Netzadresse: erste Adresse des Subnetzes, alle Hostbits 0
- Broadcastadresse: letzte Adresse des Subnetzes, alle Hostbits 1
- nutzbare Hostadresse: vollständige Adresse zwischen Netz- und Broadcastadresse
- Blockgröße: Abstand zwischen zwei Netzadressen
- Teilnetz: gleich großes Stück eines größeren Netzes

**So fragt die IHK:**
- Muster 1: Konsolenausgabe von ipconfig (IPv4-Adresse, Maske 255.255.255.0, Gateway). Netzadresse, Hostadresse und Broadcastadresse angeben, drei vorgegebene Zeilen, 3 Punkte, je 1. Als Hostadresse zählte 0.0.0.x oder die volle Adresse.
- Muster 2: Gezeichnete Netzskizze mit der Überschrift „Netzadresse …/26“, zwei PCs mit Adressen und ein Gerät mit leerer Linie. Das Gateway hat die letzte mögliche Adresse, das Gerät soll die vorletzte bekommen; „ergänzen“, 2 Punkte, eindeutige Lösung.
- Typisch sind kurze Aufgaben mit „angeben“ oder „ergänzen“ und eindeutiger Lösung. Ein Rechenweg wird nicht verlangt, es zählt nur das exakte Ergebnis.
- Muster 3 (2026F), 4 Punkte, „errechnen“: zu einer Adresse mit /25 vier Felder ausfüllen – Subnetzmaske, Anzahl nutzbarer IP-Adressen, Netzadresse, Broadcast-Adresse (K1, K2, K5), je 1 Punkt.
- Muster 4 (2025H), 3 Punkte, „konfigurieren“: Netzplan mit /24-Adressen; ein neues Gerät soll die letzte mögliche Adresse bekommen, dazu Maske und Gateway (K3).
- Aufteilen in Teilnetze ist laut Katalog ebenso prüfbar, kam aber noch nicht vor.

**Fallen:**
- Eine Maske mit einer Lücke in den Einsen (z. B. 255.255.0.255) oder mit einem Oktettwert außer 0, 128, 192, 224, 240, 248, 252, 254 und 255 für gültig halten.
- Bei Präfixen unter /24 das angebrochene Oktett ans Ende setzen. Es steht weiter vorn, dahinter folgen nur Nullen.
- Vergessen, dass auch der Router eine der nutzbaren Hostadressen belegt.
- Die Netzadresse oder die Broadcastadresse einem Gerät geben, oder bei „vorletzte“ die letzte eintragen.
- Zwei Adressen wegen weit auseinander liegender Zahlen vorschnell in verschiedene Netze stecken. Es zählt nur, ob sie im selben Block liegen.
- Bei „selbes Netz?“ nur das Urteil nennen. Die Begründung sind die beiden Netzadressen.
- Beim Abzählen der Teilnetze mit der Blockgröße anfangen. Das erste Teilnetz beginnt bei 0, das dritte also beim Zweifachen der Blockgröße.
