Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Modelle, Protokolle und Geräte › Netzwerkgeräte nach Leistungsdaten auswählen: Switch, Router, Netzwerkkarte, PoE

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

## Stoff: Netzwerkgeräte nach Leistungsdaten auswählen: Switch, Router, Netzwerkkarte, PoE

Ziel: Switch, Router für ein kleines Büro und Netzwerkkarte nach ihren Leistungsdaten für einen Einsatz auswählen und beurteilen, ob ein PoE-Switch die geplanten Geräte mit Strom versorgen kann.

Das muss ich können:

### K1 – Switch-Auswahl nach Leistungsdaten (Stufe 4 Beurteilen)
Du kannst für einen Einsatz einen Switch nach seinen Leistungsdaten auswählen: Zahl und Datenrate der Ports (mit Reserve) und Bauform (19-Zoll-Gerät für den Verteilerschrank oder Tischgerät).

Erklärung:
Ein Switch wird nach dem ausgewählt, was **angeschlossen** werden soll und wo er **steht**:
- **Ports:** genug Anschlüsse plus Reserve – und denk an den Uplink: Die Verbindung zum Router oder zum nächsten Switch belegt selbst einen Port; Datenrate passend zu den Geräten, z. B. 1 Gbit/s für Arbeitsplätze, 10 Gbit/s für Server oder die Verbindung zum nächsten Switch.
- **Bauform:** 19-Zoll-Gerät mit vielen Ports für den Verteilerschrank, kleines Tischgerät mit wenigen Ports fürs Büro.
Beispiel: 30 Arbeitsplätze, Switch im Verteilerschrank → 48-Port-Switch im 19-Zoll-Format mit 1 Gbit/s und zwei 10-Gbit/s-Ports zum Server.

### K2 – Router-Auswahl fürs kleine Büro (Stufe 4 Beurteilen)
Du kannst einen Router für ein kleines Büro nach Kriterien auswählen: Anschlusstechnik passend zum Internetzugang (z. B. DSL mit Vectoring, Kabel oder Glasfaser), Zahl der LAN-Ports (sonst zusätzlicher Switch), PoE-Bedarf sowie aktueller WLAN-Standard und ausreichende Reichweite.

Erklärung:
Im kleinen Büro ist der Router meist zugleich Switch und Access Point – deshalb zählen mehrere Eigenschaften:
- **WAN-Anschluss:** muss zur Leitung des Providers passen, bei DSL z. B. mit (Super-)Vectoring (einer schnelleren DSL-Technik, die der Router beherrschen muss), sonst ein Kabel- oder Glasfasermodell.
- **LAN-Ports:** Reichen sie nicht für alle Kabelgeräte, kommt ein Switch dazu.
- **PoE:** Soll der Router z. B. ein IP-Telefon versorgen, braucht er PoE-fähige Ports.
- **WLAN:** aktueller Standard (z. B. Wi-Fi 6 oder 7) und genug Reichweite für alle Räume, sonst zusätzliche Access Points.
Beispiel: Büro mit Glasfaseranschluss, sechs PCs und zwei Etagen → Glasfaser-Router, 4 LAN-Ports plus 8-Port-Switch, Wi-Fi 6 und ein zweiter Access Point im Obergeschoss.

### K3 – Zusätzliche Netzwerkkarte: Auswahlkriterien (Stufe 4 Beurteilen)
Du kannst für einen Rechner eine zusätzliche Netzwerkkarte auswählen und dabei neben Standard, Datenrate und Medium auch Bauform und Bauhöhe passend zum Gehäuse, einen freien passenden PCIe-Steckplatz und die Zahl der benötigten Anschlüsse berücksichtigen.

Erklärung:
Eine Netzwerkkarte muss **zum Netz** und **zum Rechner** passen:
- **Zum Netz:** Standard und Datenrate (z. B. 10GBASE-T), Medium (Kupfer oder Glasfaser) und Zahl der Anschlüsse – etwa zwei Ports, wenn ein Server an zwei Netzen hängt.
- **Zum Rechner:** ein freier Steckplatz mit passendem Bus (**PCIe**) und die richtige **Bauhöhe**: In flache Gehäuse passen nur Low-Profile-Karten (niedrige Bauhöhe, kurzes Slotblech – das Blech liegt oft zum Tauschen bei).
- Reicht ein Steckplatz nicht, nimmt man eine Karte mit mehreren Ports oder baut mehrere Karten ein.
Beispiel: Ein kleiner Server im flachen Rackgehäuse soll per Glasfaser mit 10 Gbit/s angebunden werden → Low-Profile-PCIe-Karte mit Glasfaseranschluss.

### K4 – PoE-Budget eines Switches (Stufe 4 Beurteilen)
Du kannst beurteilen, ob ein PoE-Switch für die geplanten Endgeräte reicht: Er braucht genug PoE-fähige Ports mit dem jeweils nötigen Standard, und die Summe der Leistungsaufnahmen aller versorgten Geräte darf das gesamte PoE-Budget des Switches nicht überschreiten.

Erklärung:
Ein PoE-Switch ist die **Stromquelle** für alle angeschlossenen PoE-Geräte. Zwei Grenzen gelten gleichzeitig:
- **Ports:** Es braucht genug PoE-fähige Ports (oft liefert nur ein Teil der Ports Strom), und jeder davon muss den Standard liefern, den sein Gerät braucht, z. B. 802.3at für einen Access Point mit 20 W.
- **Insgesamt:** Das Netzteil des Switches stellt nur ein begrenztes **PoE-Budget** bereit. Die Summe aller Geräte muss hineinpassen, am besten mit Reserve.
Oft können nicht alle Ports gleichzeitig die volle Leistung liefern; reicht das Budget nicht, bleiben Geräte ohne Strom.
Beispiel: 16 Kameras à 7 W und 4 Access Points à 20 W brauchen 192 W. Ein Switch mit 24 PoE-Ports, aber nur 150 W Budget reicht **nicht**, einer mit 370 W schon.

### K5 – Managebarer oder nicht managebarer Switch (Stufe 4 Beurteilen)
Du kannst begründet zwischen einem managebaren und einem nicht managebaren Switch auswählen: Den managebaren richtet man über eine Weboberfläche oder per SSH ein und kann ihn überwachen, etwa Datenrate und Duplex je Port festlegen oder einen Port zur Fehlersuche spiegeln; wer das nicht braucht, nimmt den günstigeren nicht managebaren, der ohne Einrichtung sofort arbeitet.

Erklärung:
- **Nicht managebar** (unmanaged): wird eingesteckt und arbeitet sofort mit festen Einstellungen. Günstig, aber man kann nichts einstellen und nichts auslesen.
- **Managebar** (managed): bekommt eine eigene IP-Adresse und wird über eine Weboberfläche oder per SSH eingerichtet. Man kann z. B. Datenrate und Duplex je Port festlegen, Ports abschalten, Fehlerzähler je Port ansehen oder den Verkehr eines Ports auf einen Analyseport **spiegeln**.
Entscheide nach dem Bedarf: Im kleinen Büro mit fünf PCs reicht meist ein nicht managebarer Switch. Soll das Netz überwacht oder bei Störungen gezielt untersucht werden, lohnt sich der Aufpreis für einen managebaren.

## Lehrnotiz: Netzwerkgeräte nach Leistungsdaten auswählen: Switch, Router, Netzwerkkarte, PoE

**Aufteilung:**
- Switch nach Ports, Datenrate und Bauform: K1
- Managebar oder nicht: K5
- Reicht der Strom, das PoE-Budget: K4
- Router für das kleine Büro: K2
- Zusätzliche Netzwerkkarte: K3

**Schon geprüft:** Noch nicht geprüft: K1–K5

**Kerngedanken:**
- Auswählen heißt: aus der Lage des Kunden Anforderungen ableiten und jedes Angebot dagegen prüfen. Ein Angebot fällt nur wegen einer Anforderung weg, die es wirklich verfehlt; der Grund gehört dazu.
- Es gibt Mängel, die ein Gerät ausschließen, und Mängel, die sich ausgleichen lassen. Ein Router, dessen WAN-Anschluss nicht zur Leitung des Providers passt, scheidet aus, wenn nicht ein passendes Modem davor gesetzt wird; fehlende LAN-Ports, fehlendes PoE oder zu wenig WLAN-Reichweite lassen sich mit Switch, PoE-Switch oder Injektor und Access Point ergänzen.
- Beim PoE-Switch sind es genau genommen drei Prüfungen: genug PoE-fähige Ports (oft kann nur ein Teil der Ports Strom liefern), an jedem Port der nötige Standard, und die Summe im Budget.
- Der Uplink braucht nicht nur einen eigenen Port, sondern auch das passende Medium (etwa einen Glasfaserport) und meist eine höhere Datenrate, weil dort der Verkehr aller Geräte zusammenläuft.

**Typische Missverständnisse:**
- Viele denken, ein managebarer Switch sei schneller. Richtig ist: Die Datenrate der Ports ist dieselbe; bezahlt wird das Einstellen und Überwachen.
**Fachwörter:**
- Uplink: Verbindung zum Router oder nächsten Switch
- 19-Zoll-Gerät: Bauform für den Verteilerschrank
- PoE-Budget: Leistung, die der Switch insgesamt abgibt
- managebar: einstellbar und überwachbar, eigene IP-Adresse
- spiegeln: Verkehr eines Ports auf Analyseport kopieren
- PCIe: Steckplatz für Erweiterungskarten im Rechner
- Low-Profile-Karte: niedrige Karte für flache Gehäuse

**So fragt die IHK:**
- Es gibt keine echte Aufgabe als Vorlage; was folgt, ist aus dem Prüfungskatalog abgeleitet.
- Zu erwarten sind zwei oder drei Angebote oder Datenblattauszüge (Port-Zahl, Bezeichnungen wie 1000BASE-T, PoE-Standard je Port, PoE-Budget, Preis), aus denen für eine Kundensituation eines auszuwählen und zu begründen ist, dazu eine Leistungssumme gegen ein Budget und die Wahl managebar oder nicht.
- Operatoren: berechnen, auswählen und begründen, beurteilen, erläutern. Als Annahme: 2–6 Punkte je Teilaufgabe; beim Auswählen zählen die begründete Wahl und jede begründet ausgeschlossene Alternative.

**Fallen:**
- Nur die Port-Zahl prüfen, Datenrate oder Bauform übergehen.
- Die Tabelle im Switch „ARP-Speicher“ nennen, wie es manche Bücher tun; sie heißt MAC-Adresstabelle (Port zu MAC-Adresse), und ihre Größe spielt im kleinen Netz für die Auswahl keine Rolle.
- Den nicht managebaren Switch nur als „billiger“ begründen, ohne zu sagen, welche Funktionen hier niemand nutzen würde; und vergessen, dass ein managebarer Aufwand macht: Er muss erst eingerichtet werden (IP-Adresse, Passwort), damit man seine Funktionen nutzen kann.
- Beim Urteil zu managebar die Bedingung weglassen, unter der die andere Variante richtig wäre.
- Beim PoE nur die Summe gegen das Budget rechnen und die Ports nicht prüfen, oder umgekehrt aus einem großen Budget schließen, dass jeder Port genug liefert.
- Einen Router nur nach WLAN-Standard und Preis aussuchen und die WAN-Seite vergessen.
- Eine Netzwerkkarte mit dem falschen Grund ausschließen, etwa „zu langsam“, wenn in Wahrheit ein Anschluss fehlt und kein zweiter Steckplatz frei ist.
