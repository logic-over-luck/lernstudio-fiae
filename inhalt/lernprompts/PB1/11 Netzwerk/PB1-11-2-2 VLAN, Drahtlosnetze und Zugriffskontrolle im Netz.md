Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Netzwerkkonzepte, Speichernetze und Standortvernetzung › VLAN, Drahtlosnetze und Zugriffskontrolle im Netz

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

## Stoff: VLAN, Drahtlosnetze und Zugriffskontrolle im Netz

Ziel: VLAN, PAN, WLAN, Mesh und Bluetooth charakterisieren, Risiken und Schutz in Drahtlosnetzen benennen und Kerberos neben RADIUS einordnen.

Das muss ich können:

### K1 – VLAN: logisch abgetrenntes Netz (Stufe 2 Verstehen)
Du kannst ein VLAN charakterisieren: ein logisch abgetrenntes Netz auf derselben Switch-Infrastruktur, eingesetzt, um Abteilungen oder Gäste zu trennen, die Sicherheit zu erhöhen und Broadcast-Verkehr zu begrenzen.

Erklärung:
**VLAN** = logisch getrenntes Netz auf derselben Switch-Infrastruktur.
Zweck:
- **Abteilungen oder Gäste trennen**
- **Sicherheit** erhöhen
- **Broadcast-Verkehr** (Rundsendungen an alle Geräte im selben Netz) begrenzen
Verkehr zwischen VLANs geht nur über einen Router.

### K2 – Drahtlosnetze: Bluetooth, WLAN und Mesh (Stufe 2 Verstehen)
Du kannst Drahtlosnetze charakterisieren: PAN mit Bluetooth für kurze Entfernungen, WLAN im Gebäude, Mesh-WLAN mit mehreren zusammenarbeitenden Zugangspunkten für große Flächen.

Erklärung:
- **PAN mit Bluetooth:** kurze Entfernungen (Headset, Tastatur)
- **WLAN:** im Gebäude
- **Mesh-WLAN:** mehrere Zugangspunkte arbeiten zusammen und versorgen **große Flächen** mit einem Netz

### K3 – Risiken und Schutz in Drahtlosnetzen (Stufe 2 Verstehen)
Du kannst Risiken in Drahtlosnetzen und Maßnahmen dagegen beschreiben: Mithören, unbefugter Zugang und gefälschte Zugangspunkte; aktuelle Verschlüsselung, Anmeldung je Benutzer, getrenntes Gastnetz.

Erklärung:
Risiken im Drahtlosnetz → Maßnahmen:
- **Mithören** → aktuelle Verschlüsselung (WPA3, siehe K6)
- **unbefugter Zugang** → Anmeldung **je Benutzer** (WPA-Enterprise mit RADIUS, siehe K6 und K8)
- **gefälschte Zugangspunkte** → Zertifikate prüfen, Netz überwachen
- Gäste → **getrenntes Gastnetz**
- bekannte Sicherheitslücken der Geräte → **Firmware** der Accesspoints aktuell halten

### K4 – Kerberos neben RADIUS (Stufe 2 Verstehen)
Du kannst neben RADIUS (aus AP1) Kerberos als Verfahren der Zugriffskontrolle im Netzwerk charakterisieren: einmalige Anmeldung bei einer zentralen Stelle, danach zeitlich begrenzte Tickets für die einzelnen Dienste.

Erklärung:
**Kerberos:**
- **einmal** bei einer zentralen Stelle anmelden
- danach erhält man **zeitlich begrenzte Tickets** für die einzelnen Dienste
- Passwort wird nicht an jeden Dienst geschickt
**RADIUS** (aus AP1): zentrale Prüfung beim **Netzzugang**.

### K5 – VLAN-Zuordnung: Port, Tag, Trunk, Inter-VLAN-Routing (Stufe 2 Verstehen)
Du kannst über die Aufgabe eines VLANs hinaus erklären, wie ein Switch den Verkehr einem VLAN zuordnet: Ein Port gehört entweder fest zu einem VLAN (das Endgerät sendet ungetaggt), oder die Frames tragen eine Markierung mit der VLAN-ID (Tag), mit der auf der Verbindung zwischen Switches (Trunk) Frames mehrerer VLANs über eine Leitung laufen; Verkehr zwischen zwei VLANs ist nur über einen Router oder Layer-3-Switch möglich (Inter-VLAN-Routing).

Erklärung:
Ein VLAN teilt ein physisches Switchnetz in mehrere logische Netze. Damit das klappt, muss der Switch jeden Frame einem VLAN zuordnen.
- **Portbasiert (Access-Port):** Der Port gehört fest zu einem VLAN; das Endgerät merkt davon nichts und sendet ungetaggt.
- **Tag nach IEEE 802.1Q:** Der Switch fügt in den Frame ein kurzes Feld mit der **VLAN-ID** ein. Auf dem **Trunk** zwischen zwei Switches laufen so Frames vieler VLANs über ein Kabel; am Ausgang zum Endgerät entfernt der Switch das Tag wieder.
- Das alles passiert auf **Schicht 2**. Damit ein Gerät aus VLAN 10 eines in VLAN 20 erreicht, muss ein **Router oder Layer-3-Switch** (ein Switch, der auch routen kann) dazwischen routen – dort kann auch eine Firewall-Regel greifen.
Beispiel: Buchhaltung (VLAN 10) und Gäste (VLAN 20) hängen an denselben Switches; der Trunk zum Serverraum trägt beide VLANs getaggt.

### K6 – WLAN-Verschlüsselung: WEP bis WPA3 (Stufe 2 Verstehen)
Du kannst die WLAN-Verschlüsselungen WEP, WPA, WPA2 und WPA3 charakterisieren: WEP und WPA gelten als gebrochen und scheiden aus, WPA2 mit AES ist verbreitet und mit langem Passwort noch ausreichend, WPA3 ist der aktuelle Standard und schützt mit für jede Sitzung neu ausgehandelten Schlüsseln auch mitgeschnittenen Verkehr, wenn das Passwort später bekannt wird; beide gibt es als Personal mit gemeinsamem Schlüssel (PSK) und als Enterprise mit Anmeldung je Benutzer über RADIUS, und ein Mischbetrieb WPA2/WPA3 bindet ältere Geräte an.

Erklärung:
Für das WLAN ist die Verschlüsselung der wichtigste Schutz, denn Funk lässt sich ohne Kabel mithören.
- **WEP** und **WPA** sind geknackt – wer sie noch verwendet, hat praktisch ein offenes Netz.
- **WPA2** mit dem Verschlüsselungsverfahren AES ist weit verbreitet und mit langem, zufälligem Passwort weiter vertretbar; ein schwaches Passwort lässt sich aber aus einem mitgeschnittenen Anmeldevorgang offline erraten.
- **WPA3** ersetzt das durch den Schlüsselaustausch SAE: Der für jede Sitzung ausgehandelte Schlüssel lässt sich – anders als bei WPA2 mit gemeinsamem Passwort – auch mit dem Passwort nicht nachträglich aus einem Mitschnitt berechnen (**Forward Secrecy**), und Offline-Raten funktioniert nicht mehr.
- **Personal (PSK):** ein gemeinsamer Schlüssel für alle – für kleine Netze. **Enterprise (802.1X):** eigene Zugangsdaten je Benutzer, geprüft vom RADIUS-Server – für Unternehmen (AP1-6-3-1).
Beispiel: Ein Büro stellt auf WPA3-Enterprise um und lässt WPA2 nur im Übergangsmodus für alte Scanner zu.

### K7 – WLAN-Betriebsarten: Ad-hoc und Infrastrukturmodus (Stufe 2 Verstehen)
Du kannst die WLAN-Betriebsarten charakterisieren: Im Ad-hoc-Modus funken gleichberechtigte Geräte direkt miteinander ohne zentrale Stelle, im Infrastrukturmodus melden sich alle Geräte an einem Access Point an, der den Verkehr vermittelt, das WLAN mit dem kabelgebundenen Netz verbindet und die Anmeldung zentral regelt.

Erklärung:
Ein WLAN kann auf zwei Arten organisiert sein.
- **Ad-hoc:** Zwei oder mehr Geräte funken direkt miteinander, keines hat eine Sonderrolle. Schnell eingerichtet, aber ohne zentrale Verwaltung und ohne Verbindung ins Firmennetz – etwa zum direkten Datenaustausch zwischen zwei Notebooks.
- **Infrastrukturmodus:** Ein **Access Point** ist die Zentrale. Die Geräte melden sich an ihm an, er leitet den Verkehr weiter und verbindet die Funkzelle mit dem LAN (AP1-6-1-3). Hier greifen Verschlüsselung, Anmeldung per PSK oder RADIUS und Gastnetze.
- Mesh-WLAN erweitert den Infrastrukturmodus: Mehrere Access Points arbeiten als ein Netz zusammen.
Beispiel: Im Büro läuft das WLAN im Infrastrukturmodus; zwei Notebooks, die auf einer Baustelle ohne Access Point Dateien tauschen, verbinden sich ad hoc.

### K8 – RADIUS: Authentifizierung, Autorisierung, Accounting (Stufe 2 Verstehen)
Du kannst das AAA-Prinzip eines RADIUS-Servers erklären: Authentifizierung stellt fest, wer sich anmeldet (Benutzername und Kennwort oder Zertifikat), Autorisierung legt fest, worauf der Benutzer danach zugreifen darf (z. B. welches VLAN er bekommt), Accounting zeichnet die Nutzung für Protokoll und Abrechnung auf; Access Points, Switches oder VPN-Gateways fragen dafür als RADIUS-Clients zentral beim Server an, etwa bei der portbasierten Anmeldung am WLAN oder Switch.

Erklärung:
Aus AP1 weißt du, dass beim Enterprise-WLAN ein RADIUS-Server die Zugangsdaten prüft. Genauer leistet er drei Dinge – **AAA**:
- **Authentication** (Authentifizierung): Ist das wirklich Benutzer X? Prüfung von Kennwort oder Zertifikat gegen ein zentrales Verzeichnis.
- **Authorization** (Autorisierung): Was darf X? Etwa nur das Gäste-VLAN oder volle Rechte.
- **Accounting:** Wann war X wie lange mit welcher Datenmenge verbunden – für Protokoll und Abrechnung.
Die Netzgeräte entscheiden nicht selbst, sondern fragen als **RADIUS-Client** beim Server nach. So wird ein Benutzerkonto an einer Stelle gesperrt und gilt sofort überall. Bei der portbasierten Anmeldung (Standard IEEE 802.1X) lässt ein Access Point oder Switch ein Gerät erst nach erfolgreicher Prüfung ins Netz.
Beispiel: Das Konto einer ausgeschiedenen Mitarbeiterin wird im Verzeichnis deaktiviert – WLAN und VPN lehnen ihre Anmeldung ab diesem Moment ab.

### K9 – Komfortanmeldung per QR-Code und WPS (Stufe 2 Verstehen)
Du kannst die Sicherheit der Anmeldung per QR-Code und per WPS charakterisieren: Ein QR-Code enthält SSID und Schlüssel im Klartext und ist nur so sicher wie der Ort, an dem er hängt; WPS koppelt ein Gerät per Tastendruck am Router oder per PIN, wobei sich die PIN durch Ausprobieren in kurzer Zeit knacken lässt, weshalb WPS meist abgeschaltet wird.

Erklärung:
Komfort und Sicherheit ziehen beim WLAN oft in verschiedene Richtungen.
- **QR-Code:** enthält SSID (den Namen des WLANs), Verschlüsselungsart und Schlüssel. Bequem für Gäste – wer ein Foto davon hat, ist aber genauso drin. Für ein getrenntes Gastnetz in Ordnung, fürs Firmennetz nicht.
- **WPS per Taste:** Wer am Router die Taste drückt, lässt für kurze Zeit ein neues Gerät ohne Passwort zu. Das setzt Zugang zum Gerät voraus.
- **WPS per PIN:** Die achtstellige PIN wird in zwei Hälften geprüft und ist deshalb mit einigen tausend Versuchen zu erraten – danach kennt der Angreifer den WLAN-Schlüssel.
- Empfehlung: WPS abschalten, Gäste in ein eigenes Netz.
Beispiel: Ein Angreifer auf dem Parkplatz probiert über Stunden WPS-PINs durch und liest am Ende das WPA2-Passwort aus.

## Lehrnotiz: VLAN, Drahtlosnetze und Zugriffskontrolle im Netz

**Aufteilung:**
- Teil A – VLAN: Zweck K1; Zuordnung im Switch K5
- Pause möglich nach Teil A.
- Teil B – Drahtlosnetze: Arten und Betriebsarten K2, K7; Risiken und Verschlüsselung K3, K6; Komfortanmeldung K9
- Teil C – Zugriffskontrolle: RADIUS K8; Kerberos K4

**Schon geprüft:** Noch nicht geprüft: K1–K9

**Kerngedanken:**
- Ein Broadcast geht an alle Geräte im selben Netz. Ein VLAN hält ihn im eigenen VLAN; deshalb sinkt der Rundsendeverkehr.
- Bluetooth hat gegenüber WLAN geringere Reichweite, geringere Datenrate und geringeren Energiebedarf. Im Mesh-WLAN reichen die Zugangspunkte Daten untereinander weiter; fällt einer aus, finden die Daten einen anderen Weg.
- Bei der Anmeldung je Benutzer gehört jeder Zugang zu einer Person und lässt sich einzeln sperren. Ein gemeinsames Passwort müsste für alle geändert werden, sobald jemand ausscheidet.
- RADIUS und Kerberos ergänzen sich: RADIUS entscheidet, wer ins Netz darf, Kerberos regelt die Anmeldung an den Diensten. Keines ersetzt das andere.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K4 – Ticket-Ablauf bei Kerberos: (1) Der Client meldet sich einmal beim Key Distribution Center (KDC) an, der zentralen Stelle, und weist sich mit einem aus dem Passwort abgeleiteten Schlüssel aus. (2) Das KDC stellt ein zeitlich begrenztes Ticket Granting Ticket (TGT) aus, das der Client für die Dauer der Sitzung speichert. (3) Für den Zugriff auf einen Dienst legt der Client das TGT beim KDC vor und fordert ein Ticket für genau diesen Dienst an. (4) Das KDC prüft das TGT und stellt ein zeitlich begrenztes Service-Ticket aus, verschlüsselt mit einem geheimen Schlüssel, den nur KDC und Dienst kennen. (5) Der Client schickt das Service-Ticket an den Dienst; der Dienst entschlüsselt es mit seinem Schlüssel und erkennt daran den vom KDC bestätigten Benutzer. (6) Für jeden weiteren Dienst holt der Client mit dem TGT ein neues Service-Ticket; das Passwort muss dabei nicht erneut eingegeben werden und wird zu keinem Zeitpunkt über das Netz übertragen. Vereinfacht: Zusätzlich tauschen Client, KDC und Dienst Sitzungsschlüssel und Zeitstempel aus, damit ein abgefangenes Ticket nicht von Fremden wiederverwendet werden kann.

**Typische Missverständnisse:**
- Viele denken, ein VLAN sei ein Funknetz oder ein eigenes Kabelnetz; richtig ist: Das V steht für virtuell, dieselben Switches werden nur logisch aufgeteilt.
- Viele denken, Mesh sei ein stärkerer Access Point; richtig ist: Es sind mehrere, die als ein Netz zusammenarbeiten.
- Viele denken, ein starkes WLAN-Passwort schütze auch bei eingeschaltetem WPS; richtig ist: Geraten wird die PIN, nicht das Passwort.

**Fachwörter:**
- VLAN: logisch abgetrenntes Netz auf denselben Switches
- Access-Port: Port, der fest zu einem VLAN gehört
- Tag: Markierung mit der VLAN-ID im Frame
- Trunk: Verbindung, die mehrere VLANs trägt
- Inter-VLAN-Routing: Routen zwischen zwei VLANs
- Forward Secrecy: Mitschnitt bleibt trotz bekanntem Passwort geschützt
- RADIUS-Client: Netzgerät, das beim RADIUS-Server anfragt
- Tickets: zeitlich begrenzte Ausweise für einzelne Dienste

**So fragt die IHK:**
- In den vorliegenden Prüfungen gibt es zu diesem Stichpunkt keine echte Aufgabe. Der Prüfungskatalog nennt VLAN, PAN, WLAN, Mesh, Bluetooth, Sicherheit in Drahtlosnetzen und Kerberos neben RADIUS.
- Zu erwarten ist ein Standort mit Bereichen und Gästen. Dazu „nennen“ (Gründe für VLANs, Risiken), „beschreiben/erläutern“ (Trunk und Inter-VLAN-Routing, AAA, RADIUS gegen Kerberos) und „beurteilen“ eines Vorschlags (gemeinsames Passwort, QR-Code, WPS).
- Meist 2–4 Punkte je Teil, ein Punkt je Merkmal.

**Fallen:**
- Teil A: Als Zweck eines VLANs nur „Ordnung“ schreiben statt Trennen, Sicherheit und weniger Broadcast.
- Teil A: Bei zwei Geräten am selben Switch in verschiedenen VLANs schreiben, der Switch leite den Verkehr einfach weiter; nötig ist Inter-VLAN-Routing über einen Router oder Layer-3-Switch.
- Teil A: Den Trunk erklären, ohne Tag und VLAN-ID zu nennen.
- Teil B: Nur Maßnahmen aufzählen, ohne das Risiko dazu, oder weniger verschiedene Risiken nennen als verlangt.
- Teil B: „WPA2 ist geknackt“ als Schwachstelle schreiben; die Schwäche ist das schwache Passwort, das sich aus einem Mitschnitt offline erraten lässt.
- Teil B: Den Vorteil von WPA3 nur mit „stärker“ beschreiben statt mit dem Schutz mitgeschnittenen Verkehrs.
- Teil B: WPS nur „unsicher“ nennen, ohne den Grund (PIN durch Ausprobieren zu erraten).
- Teil C: Authentifizierung (wer bist du?) und Autorisierung (was darfst du?) vertauschen.
- Teil C: Die drei A erklären, aber den Vorteil der zentralen Anfrage weglassen.
