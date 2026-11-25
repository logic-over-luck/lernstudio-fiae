Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Netzwerkkonzepte, Speichernetze und Standortvernetzung › Standortübergreifende Kommunikation: VPN-Modelle, Tunneling, IPsec

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: Standortübergreifende Kommunikation: VPN-Modelle, Tunneling, IPsec

Ziel: VPN-Modelle unterscheiden, für eine Situation auswählen und eine Standortverbindung einrichten; Tunneling und IPsec erläutern.

Das muss ich können:

### K1 – VPN-Modelle Site-to-Site, End-to-Site, End-to-End (Stufe 2 Verstehen)
Du kannst VPN-Modelle unterscheiden: Site-to-Site (zwei Standortnetze werden verbunden), End-to-Site (ein einzelnes Gerät wählt sich ins Firmennetz ein), End-to-End (zwei Geräte direkt).

Erklärung:
- **Site-to-Site:** zwei **Standortnetze** werden verbunden (Filiale ↔ Zentrale)
- **End-to-Site:** ein **einzelnes Gerät** wählt sich ins Firmennetz ein (Homeoffice)
- **End-to-End:** **zwei Geräte** direkt

### K2 – Passendes VPN-Modell für eine Situation (Stufe 4 Beurteilen)
Du kannst für eine Situation ein VPN-Modell und das Verfahren auswählen und die Wahl begründen, zum Beispiel Site-to-Site mit IPsec im Tunnelmodus für die Filialen, End-to-Site für Beschäftigte im Homeoffice.

Erklärung:
Auswählen und begründen:
- **Filialen** dauerhaft verbinden → **Site-to-Site** mit **IPsec im Tunnelmodus**
- **Beschäftigte im Homeoffice** → **End-to-Site** (VPN-Client)
Begründung: Wer oder was wird verbunden, wie oft, wie viele Geräte?

### K3 – IPsec: Tunnel- und Transportmodus (Stufe 2 Verstehen)
Du kannst über das Bild des Tunnels aus AP1 hinaus IPsec erläutern: verschlüsselt und authentifiziert IP-Pakete auf der Netzwerkebene; im Tunnelmodus wird das ganze ursprüngliche Paket samt Kopf geschützt, im Transportmodus nur die Nutzdaten.

Erklärung:
**IPsec** verschlüsselt und authentifiziert **IP-Pakete** auf der Netzwerkebene, also OSI-Schicht 3 (verschlüsselt wird mit ESP; AH allein authentifiziert nur, siehe K5).
- **Tunnelmodus:** das **ganze ursprüngliche Paket** samt Kopf wird geschützt und in ein neues Paket verpackt (Standort-VPN)
- **Transportmodus:** nur die **Nutzdaten** werden geschützt, der ursprüngliche IP-Kopf bleibt sichtbar

### K4 – VPN-Verbindung zwischen zwei Standorten einrichten (Stufe 3 Anwenden)
Du kannst eine VPN-Verbindung zwischen zwei Standorten einrichten: Gateways und ihre Adressen, zu verbindende Netze, Authentifizierung mit Pre-Shared Key oder Zertifikat, Verschlüsselungsverfahren festlegen.

Erklärung:
Standort-VPN einrichten – festlegen:
- **Gateways** und ihre öffentlichen Adressen
- zu verbindende **Netze** (z. B. 10.1.0.0/16 ↔ 10.2.0.0/16)
- **Authentifizierung**: Pre-Shared Key oder Zertifikat
- **Verschlüsselungsverfahren** (z. B. AES)

### K5 – IPsec-Protokolle AH und ESP (Stufe 2 Verstehen)
Du kannst bei IPsec die Protokolle AH und ESP unterscheiden: AH (Authentication Header) sichert die Echtheit des Absenders und die Unversehrtheit des Pakets, verschlüsselt aber nicht, ESP (Encapsulating Security Payload) verschlüsselt zusätzlich die Nutzdaten und sorgt so für Vertraulichkeit; für ein VPN wird deshalb ESP eingesetzt.

Erklärung:
IPsec bringt zwei Schutzprotokolle mit, die du nicht mit den Modi (Tunnel- und Transportmodus) verwechseln darfst.
- **AH (Authentication Header):** fügt eine mit geheimem Schlüssel berechnete Prüfsumme ein. Der Empfänger merkt, ob das Paket vom richtigen Absender kommt und unterwegs verändert wurde – lesen kann es aber jeder.
- **ESP (Encapsulating Security Payload):** verschlüsselt die Nutzdaten **und** sichert sie gegen Veränderung. Damit sind Vertraulichkeit, Integrität und Authentizität erfüllt.
- Weil AH auch Teile des IP-Kopfs schützt, verträgt es sich nicht mit NAT (der Router tauscht Adressen im IP-Kopf aus); in der Praxis nimmt man fast immer ESP.
- Modus und Protokoll lassen sich kombinieren; typisch für eine Standortverbindung ist **ESP im Tunnelmodus**.
Beispiel: Zwei Filialen verbinden ihre Netze über das Internet mit ESP im Tunnelmodus – Inhalt und interne Adressen bleiben verborgen.

## Lehrnotiz: Standortübergreifende Kommunikation: VPN-Modelle, Tunneling, IPsec

**Aufteilung:**
- Die drei VPN-Modelle: K1
- IPsec, erst die Modi, dann die Schutzprotokolle: K3, K5
- Modell und Verfahren für eine Situation auswählen: K2
- Standort-VPN einrichten: K4

**Schon geprüft:** Noch nicht geprüft: K1–K5

**Kerngedanken:**
- Das Modell erkennt man an den beiden Enden der Verbindung: Steht dort ein ganzes Netz oder ein einzelnes Gerät? End-to-Site ist der VPN-Zugang mit VPN-Client, der aus AP1 bekannt ist.
- IPsec arbeitet auf der Netzwerkebene (OSI-Schicht 3) und schützt deshalb allen Verkehr zwischen zwei Netzen, unabhängig von der Anwendung. HTTPS (TLS) schützt dagegen nur die Verbindung einer einzelnen Anwendung.
- Was ein Mitleser sieht, hängt am Kopf des Pakets. Im Tunnelmodus sieht er nur die Adressen der beiden Tunnelenden (Gateways), nicht, welche Rechner dahinter miteinander sprechen.
- Beim Einrichten sind die Einträge der beiden Gateways spiegelbildlich: Jedes kennt seine eigene öffentliche Adresse und sein eigenes Netz sowie Adresse und Netz der Gegenstelle. Authentifizierung und Verschlüsselungsverfahren müssen auf beiden Seiten gleich sein; ein Pre-Shared Key ist auf beiden Seiten derselbe.

**Typische Missverständnisse:**
- Viele denken, der Zugang aus dem Homeoffice sei End-to-End, weil ein einzelnes Gerät beteiligt ist; richtig ist: Am anderen Ende steht ein ganzes Netz, also End-to-Site.
- Viele denken, im Tunnel sei von außen gar nichts mehr zu sehen; richtig ist: Die öffentlichen Adressen der beiden Gateways bleiben sichtbar.

**Fachwörter:**
- Site-to-Site: zwei Standortnetze werden verbunden
- End-to-Site: einzelnes Gerät wählt sich ins Netz ein
- End-to-End: zwei einzelne Geräte direkt verbunden
- Tunnelmodus: ganzes Paket samt Kopf geschützt, neu verpackt
- Transportmodus: nur Nutzdaten geschützt, Kopf bleibt sichtbar
- AH: sichert Echtheit und Unversehrtheit, verschlüsselt nicht
- ESP: verschlüsselt zusätzlich die Nutzdaten
- Pre-Shared Key: vorab vereinbarter gemeinsamer Schlüssel

**So fragt die IHK:**
- Es gibt keine echte Aufgabe zu diesem Stichpunkt. In einer Prüfung zählte „sichere Datenübertragung (über VPN)“ nur als Beispiel für eine funktionale Anforderung an die IT-Infrastruktur mehrerer Standorte.
- Der Prüfungskatalog nennt VPN-Modelle, Tunneling und IPsec ausdrücklich. Zu erwarten sind: ein VPN-Modell wählen und begründen, Tunnel- und Transportmodus erläutern, die Festlegungen für eine Standortverbindung nennen.
- Meist 2–4 Punkte je Teil, oft als Tabelle mit Zuordnung (1 Punkt) und Begründung (1–2 Punkte). Die Begründung muss aus der Situation kommen.

**Fallen:**
- Nur den Namen des Modells nennen, ohne das Unterscheidungsmerkmal (Netz–Netz, Gerät–Netz, Gerät–Gerät) oder ohne Begründung aus der Situation.
- Bei einer Standortverbindung das Verfahren weglassen; zu Site-to-Site gehört IPsec im Tunnelmodus.
- Den Schutz im Tunnelmodus nur mit „ist verschlüsselt“ erklären, ohne die Rolle des Kopfes mit den internen Adressen.
- Beim Vergleich der Modi den Transportmodus weglassen.
- ESP nur als „sicherer“ oder „besser“ bezeichnen, ohne die Verschlüsselung (Vertraulichkeit) als Grund.
- Beim Einrichten bei den Gateways interne Adressen oder bei den Netzen öffentliche Adressen eintragen.
- Gegenstelle und entferntes Netz mit den eigenen Angaben vertauschen.
- Eine der vier Festlegungen vergessen (Gateways, Netze, Authentifizierung, Verschlüsselungsverfahren).
- Auf den beiden Seiten unterschiedliche Authentifizierung oder unterschiedliche Verfahren angeben.
