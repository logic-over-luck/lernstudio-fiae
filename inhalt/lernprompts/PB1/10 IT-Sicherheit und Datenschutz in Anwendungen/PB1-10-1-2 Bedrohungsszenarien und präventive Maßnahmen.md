Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Bedrohungen, Anforderungen und Kryptografie › Bedrohungsszenarien und präventive Maßnahmen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: Bedrohungsszenarien und präventive Maßnahmen

Ziel: Gegen Datendiebstahl, Ransomware und Phishing vorbeugende Maßnahmen planen und umsetzen und Kunden zu Angriffen wie Man-in-the-Middle, SQL-Injection und DDoS beraten.

Das muss ich können:

### K1 – Präventive Maßnahmen gegen Datendiebstahl (Stufe 3 Anwenden)
Du kannst präventive Maßnahmen gegen Datendiebstahl planen und umsetzen: Zugriffe nach dem Prinzip der geringsten Rechte, Verschlüsselung gespeicherter und übertragener Daten, Weitergabe an fremde Dienste nur geprüft und vertraglich geregelt.

Erklärung:
**Datendiebstahl** = unbefugtes Kopieren oder Abziehen vertraulicher Daten, z. B. von Kundendaten.
Gegen Datendiebstahl:
- **geringste Rechte**: jeder nur, was er braucht
- **Verschlüsselung** gespeicherter und übertragener Daten
- Weitergabe an fremde Dienste nur **geprüft** und **vertraglich geregelt** (Auftragsverarbeitung: Ein Dienstleister verarbeitet die Daten in deinem Auftrag und nach deinen Weisungen, PB1-10-2-2-K4)
- ergänzend: Zugriffe **protokollieren und auswerten**, um einen Abfluss früh zu bemerken

### K2 – Ransomware: Sicherungen offline, Netze trennen (Stufe 3 Anwenden)
Du kannst über die Grundmaßnahmen aus AP1 (getrennte Sicherung, Updates, Rechte) hinaus präventive Maßnahmen gegen digitale Erpressung durch Ransomware planen: Sicherungen offline oder unveränderbar aufbewahren, Netze trennen.

Erklärung:
Über die Grundmaßnahmen aus AP1 hinaus:
- Sicherungen **offline** oder **unveränderbar** (WORM = einmal geschrieben, danach nur noch lesbar; Immutable Backup = unveränderbare Sicherung) – Ransomware kann sie nicht mitverschlüsseln
- **Netze trennen** (Segmentierung) – Ausbreitung begrenzen

### K3 – Schutz vor Phishing in einer Anwendung (Stufe 3 Anwenden)
Du kannst präventive Maßnahmen gegen Identitätsdiebstahl durch Phishing in einer Anwendung umsetzen: Zwei-Faktor-Anmeldung, Zurücksetzen von Passwörtern nur über einen zweiten, unabhängigen Weg, Warnung bei Anmeldung von neuen Geräten.

Erklärung:
Gegen Phishing in einer Anwendung:
- **Zwei-Faktor-Anmeldung** – gestohlenes Passwort reicht nicht
- Passwort-Zurücksetzen nur über einen **zweiten, unabhängigen Weg**; der Link dazu **nur einmal und nur kurz gültig** und nur über HTTPS
- **Warnung** bei Anmeldung von einem neuen Gerät
Was das Unternehmen außerhalb der Anwendung einrichtet (Spamfilter, Schulung), steht in AP1-7-4-2.

### K4 – Beratung zu Man-in-the-Middle, SQL-Injection, DDoS (Stufe 3 Anwenden)
Du kannst einen Kunden zu Bedrohungsszenarien beraten und für seine Anwendung Gegenmaßnahmen empfehlen: Man-in-the-Middle (verschlüsselte Verbindung mit Zertifikatsprüfung), SQL-Injection über Eingabefelder (vorbereitete Anweisungen mit Parametern, Eingaben prüfen), DDoS (Filterung, Lastverteilung, Schutzdienste).

Erklärung:
Beratung: Angriff erklären + Gegenmaßnahme:
- **Man-in-the-Middle:** Angreifer schaltet sich zwischen Client und Server → **TLS mit Zertifikatsprüfung**
- **SQL-Injection:** Schadcode über Eingabefelder → **vorbereitete Anweisungen (Prepared Statements)**, Eingaben prüfen
- **DDoS:** Überlastung durch viele Anfragen → **Filterung, Lastverteilung, Schutzdienste**

### K5 – DoS und DDoS aus dem Botnetz (Stufe 2 Verstehen)
Du kannst DoS und DDoS unterscheiden: Beim Denial of Service überlastet ein Angreifer Rechenzeit, Speicher oder Bandbreite eines Dienstes, bis berechtigte Nutzer ihn nicht mehr erreichen; beim Distributed Denial of Service kommt die Last gleichzeitig von vielen Geräten eines Botnetzes, also von Rechnern und IoT-Geräten, die mit Schadsoftware befallen sind und zentral ferngesteuert werden.

Erklärung:
Ein **DoS-Angriff** zielt auf die **Verfügbarkeit**: Der Dienst soll so beschäftigt sein, dass für echte Nutzer nichts übrig bleibt. Daten werden dabei meist nicht gestohlen.
- Mittel: massenhaft Anfragen, Pings oder Mails; beim **SYN-Flood** viele begonnene, nie abgeschlossene Verbindungsaufbauten, die die Verbindungstabelle des Servers füllen.
- **DDoS:** Die Last kommt von Tausenden Geräten zugleich. Sie bilden ein **Botnetz** – unbemerkt infizierte PCs, Router oder Kameras, die über einen Steuerserver (Command and Control) Befehle erhalten. Solche Netze werden auch an andere Kriminelle vermietet.
- Weil die Anfragen von vielen echten Adressen kommen, hilft es nicht, einen Absender zu sperren; nötig sind Filterdienste und Lastverteilung (PB1-10-1-2-K4).
Beispiel: Kurz vor einem Aktionstag ist ein Onlineshop stundenlang nicht erreichbar, weil ein gemietetes Botnetz ihn mit Anfragen flutet.

### K7 – Identitätsdiebstahl: Begriff und Wege (Stufe 2 Verstehen)
Du kannst Identitätsdiebstahl erklären: Ein Angreifer verschafft sich fremde Zugangs- oder Personendaten, um im Namen des Opfers zu handeln, etwa über gefälschte Anmeldeseiten (Phishing), Keylogger, offen einsehbare Profile in sozialen Netzwerken oder schlecht geschützte Cloudablagen.

Erklärung:
Beim **Identitätsdiebstahl** geht es nicht um die Daten an sich, sondern darum, **als jemand anderes aufzutreten**: bestellen, Konten eröffnen, Mails im fremden Namen schicken, auf Firmensysteme zugreifen.
- **Phishing:** Eine gefälschte Anmeldeseite fängt Benutzername und Passwort ab.
- **Keylogger:** zeichnet Tastatureingaben auf (AP1-7-4-1-K9).
- **Offene Profile:** Geburtsdatum, Adresse oder Arbeitgeber reichen oft für Sicherheitsfragen oder eine glaubwürdige Täuschung.
- **Schlecht gesicherte Cloudablagen:** öffentlich freigegebene Ordner, etwa mit Ausweiskopien.
Für die Anwendung folgt daraus: Ein Passwort allein beweist die Identität nicht sicher – deshalb zweiter Faktor und sichere Wege zum Zurücksetzen (PB1-10-1-2-K3).

### K8 – Social Engineering: Prinzip und Formen (Stufe 2 Verstehen)
Du kannst Social Engineering erklären: Angreifer nutzen menschliche Eigenschaften wie Hilfsbereitschaft, Neugier, Respekt vor Vorgesetzten oder Angst aus, oft in mehreren Schritten über Telefon, E-Mail oder soziale Netzwerke, um an Zugangsdaten oder interne Informationen zu kommen, Schadsoftware einzuschleusen oder eine Überweisung auszulösen, etwa mit einer gefälschten Anweisung der Geschäftsleitung (CEO-Fraud); Phishing ist eine verbreitete Form davon.

Erklärung:
**Social Engineering** greift nicht die Technik an, sondern den **Menschen** – Firewall und Verschlüsselung helfen dagegen nicht.
- **Hebel:** Hilfsbereitschaft, Neugier, Respekt vor Autorität, Zeitdruck oder Angst
- **Wege:** Telefon, E-Mail, soziale Netzwerke, auch persönlich (angeblicher Techniker an der Pforte)
- **oft mehrstufig:** erst Insiderwissen sammeln (Namen, Abläufe), dann damit Vertrauen erschleichen
- **Ziele:** Zugangsdaten, interne Informationen, Schadsoftware einschleusen, Geld überweisen lassen
**Phishing** ist eine verbreitete Form per E-Mail oder gefälschter Webseite (AP1-7-4-2). Dagegen helfen Schulung, klare Meldewege und Freigaben nach dem Vier-Augen-Prinzip.
Beispiel (CEO-Fraud): Eine Buchhalterin erhält eine eilige Mail „vom Geschäftsführer“, sie solle vertraulich 48.000 € an einen neuen Lieferanten überweisen – Absender und Kontoverbindung sind gefälscht.

## Lehrnotiz: Bedrohungsszenarien und präventive Maßnahmen

**Aufteilung:**
- Angriffe auf den Menschen, das Prinzip: K8
- Identitätsdiebstahl mit seinen menschlichen und technischen Wegen: K7
- Die Anwendung gegen die Folgen von Phishing schützen: K3
- Datendiebstahl vorbeugen: K1
- Ransomware, über die Grundmaßnahmen hinaus: K2
- Überlastungsangriffe verstehen: K5
- Kunden zu technischen Angriffen beraten: K4

**Schon geprüft:** Noch nicht geprüft: K1–K5, K7, K8

**Kerngedanken:**
- SQL-Injection entsteht, wenn die Anwendung ihre Abfrage als Text aus der Eingabe zusammenbaut: Ein Anführungszeichen in der Eingabe beendet den Wert, der Rest wird als SQL ausgeführt. Bei einer vorbereiteten Anweisung steht die Anweisung vorab fest; die Eingabe wird getrennt als reiner Wert übergeben und nie als Code ausgeführt.
- Verschlüsselung allein stoppt Man-in-the-Middle nicht: Ohne Prüfung des Serverzertifikats gibt sich der Angreifer als Server aus und verschlüsselt mit beiden Seiten getrennt.
- Ein Rücksetz-Link, der allein per E-Mail kommt, ist die Schwachstelle: Wer das Postfach kontrolliert oder den Link abfängt, übernimmt das Konto. Darum der zweite, unabhängige Weg.
- Wer zu viele Rechte hat, sieht die Daten entschlüsselt. Verschlüsselung ersetzt deshalb die geringsten Rechte nicht.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K3 – Ablauf eines sicheren Passwort-Zurücksetzens: (1) Der Nutzer fordert in der Anwendung das Zurücksetzen des Passworts für sein Konto an. (2) Die Anwendung erzeugt ein zufälliges, nicht erratbares Token, speichert es mit kurzer Ablaufzeit zum Konto und verschickt es als HTTPS-Link per E-Mail. (3) Der Nutzer öffnet den Link; die Anwendung prüft, ob das Token zum Konto gehört, noch nicht abgelaufen und noch nicht benutzt ist. (4) Die Anwendung verlangt zusätzlich eine Bestätigung über einen zweiten, unabhängigen Weg, zum Beispiel einen Code per SMS oder aus einer Authenticator-App. (5) Erst wenn Token und Bestätigung stimmen, speichert die Anwendung das neue Passwort und entwertet das Token sofort, sodass der Link kein zweites Mal funktioniert. Vereinfacht: In der Praxis speichert die Anwendung das Token zusätzlich nur als Hashwert, damit ein Datenbankabzug keine gültigen Links liefert.
- K4 – Wie die Zertifikatsprüfung Man-in-the-Middle stoppt: (1) Der Angreifer leitet den Datenverkehr über sein eigenes Gerät um, zum Beispiel in einem offenen WLAN, und nimmt die Verbindung des Clients selbst entgegen. (2) Beim TLS-Verbindungsaufbau schickt die Gegenstelle ein Zertifikat mit Domainnamen, öffentlichem Schlüssel und der digitalen Signatur einer Zertifizierungsstelle. (3) Der Client prüft die Signatur gegen seine Liste vertrauenswürdiger Zertifizierungsstellen, den Gültigkeitszeitraum und ob der Domainname zur aufgerufenen Adresse passt. (4) Die Gegenstelle muss im Handshake beweisen, dass sie den privaten Schlüssel besitzt, der zum öffentlichen Schlüssel im Zertifikat gehört. (5) Der Angreifer scheitert: Ein eigenes Zertifikat für die Domain signiert ihm keine vertrauenswürdige Stelle, und zum echten Zertifikat fehlt ihm der private Schlüssel. (6) Der Client bricht deshalb die Verbindung ab oder warnt; nur mit dem echten Server entsteht ein Sitzungsschlüssel, den der Angreifer nicht kennt. Vereinfacht: In Wirklichkeit prüft der Client eine Kette aus Zwischenzertifikaten bis zu einer Stammzertifizierungsstelle, nicht nur eine einzelne Signatur.

**Typische Missverständnisse:**
- Viele denken, gegen SQL-Injection genüge „Eingaben prüfen“; richtig ist: Erwartet wird die vorbereitete Anweisung samt Grund, die Prüfung kommt dazu.
- Viele denken, DDoS sei nur ein stärkerer DoS; richtig ist: Der Unterschied liegt in der Herkunft der Last (eine Quelle gegen sehr viele zugleich), nicht in der Wirkung.

**Fachwörter:**
- Social Engineering: Angriff auf den Menschen statt Technik
- CEO-Fraud: gefälschte Anweisung der Geschäftsleitung
- Identitätsdiebstahl: im Namen des Opfers handeln
- Auftragsverarbeitung: Dienstleister verarbeitet Daten im Auftrag, vertraglich geregelt
- Segmentierung: Netz in getrennte Bereiche teilen
- Man-in-the-Middle: Angreifer zwischen Client und Server
- Prepared Statements: feste Anweisung, Eingabe nur als Wert
- Botnetz: befallene, zentral ferngesteuerte Geräte

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es bisher keine echte Aufgabe. Der Prüfungskatalog verlangt, präventive Maßnahmen gegen Datendiebstahl, digitale Erpressung und Identitätsdiebstahl zu planen und Kunden zu Bedrohungsszenarien zu beraten.
- Zu erwarten ist eine kurze Situation, dann „Beschreiben Sie zwei Maßnahmen …“ (2 Punkte je Maßnahme mit Wirkung) oder „Erläutern Sie …“ mit 3–4 Punkten.
- Ist ein SQL-Ausschnitt als Material gegeben, muss die Wirkung der Eingabe konkret benannt werden.
- „Nur Testdaten an fremde Dienste“ wurde einmal gefragt, gehört aber zu einem anderen Stichpunkt.

**Fallen:**
- Mensch: Einen Angriff nur „Phishing“ nennen, ohne die ausgenutzten Hebel am Fall zu zeigen, oder nur technische Gegenmaßnahmen nennen.
- Phishing-Schutz: Schulung, Spamfilter oder „Nutzer aufklären“ als Maßnahme in der Anwendung zählen.
- Phishing-Schutz: Beim Zurücksetzen nur die Gültigkeitsdauer des Links bemängeln und übersehen, dass der Link allein schon reicht, um das Konto zu übernehmen; es fehlt der zweite, unabhängige Weg.
- Datendiebstahl: Nur gespeicherte oder nur übertragene Daten verschlüsseln oder die Maßnahmen nicht begründen.
- Ransomware: Regelmäßige Sicherung, Updates oder Virenschutz nennen, wo verlangt ist, was darüber hinausgeht.
- Überlastung: Bei sehr vielen Absendern nur „DoS“ schreiben oder das Botnetz als Quelle weglassen. Die Geräte gehören nicht dem Angreifer.
- Beratung: Die Wirkung einer SQL-Injection unterschätzen. Ein angehängtes OR mit immer wahrer Bedingung hebelt auch davorstehende AND-Bedingungen aus, weil AND vor OR ausgewertet wird – geliefert werden alle Datensätze, nicht nur die eigenen.
- Beratung: Bei Man-in-the-Middle nur „verschlüsseln“ empfehlen, ohne die Zertifikatsprüfung.
