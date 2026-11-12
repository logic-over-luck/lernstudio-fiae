Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Verbindungen einrichten und Fehler finden › Netzwerkbefehle und systematische Fehlersuche

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

## Stoff: Netzwerkbefehle und systematische Fehlersuche

Ziel: Mit den Netzwerkbefehlen Verbindungen prüfen, eine Fehlersuche in sinnvoller Reihenfolge planen und aus Testergebnissen auf die Fehlerursache schließen.

Das muss ich können:

### K1 – Zweck von ipconfig, ping, tracert, nslookup (Stufe 1 Wiedergeben)
Du kannst den Zweck der Befehle nennen: ipconfig bzw. ifconfig/ip zeigt die eigene Konfiguration, ping prüft die Erreichbarkeit, tracert (Windows) bzw. traceroute zeigt den Weg, nslookup prüft die Namensauflösung.

Erklärung:
- `ipconfig` (Windows) bzw. `ip addr` / `ifconfig` (Linux): zeigt die **eigene Konfiguration** – IP-Adresse, Maske, Gateway; mit `/all` auch DNS-Server und MAC.
- `ping`: prüft, ob ein Ziel **erreichbar** ist, und zeigt die Antwortzeit.
- `tracert` (Windows) bzw. `traceroute` (Linux): zeigt den **Weg** über alle Router – und bis wohin es geht.
- `nslookup`: prüft die **Namensauflösung** über DNS.

### K2 – Passender Befehl für einen Prüfzweck (Stufe 1 Wiedergeben)
Du kannst für einen Zweck den passenden Befehl angeben, zum Beispiel für die Erreichbarkeit des Gateways oder einer Internetadresse.

Erklärung:
- Ist das **Gateway** erreichbar? → `ping 192.168.1.1`
- Ist eine **Internetadresse** erreichbar? → `ping 8.8.8.8` oder `ping www.example.com`
- **Wo bricht der Weg ab?** → `tracert www.example.com`
- Wird der **Name aufgelöst**? → `nslookup www.example.com`
- Welche **Adresse** hat mein PC? → `ipconfig`
- Läuft IP auf dem **eigenen Gerät**? → `ping 127.0.0.1` bzw. `ping ::1` (Loopback)

### K3 – Reihenfolge der Fehlersuche (Stufe 3 Anwenden)
Du kannst eine Fehlersuche in sinnvoller Reihenfolge planen: Kabel und LED, eigene Konfiguration, Gateway, Namensauflösung, Zielserver.

Erklärung:
Von unten nach oben – von einfach zu aufwendig:
- **Kabel und LED:** ohne physische Verbindung geht nichts, und die Prüfung dauert Sekunden.
- **Eigene Konfiguration:** `ipconfig` – hat der PC eine passende Adresse?
- **Gateway:** `ping` auf den Router.
- optional: `ping` auf eine externe IP-Adresse – klappt das, aber Namen gehen nicht, liegt es an der Namensauflösung.
- **Namensauflösung:** `nslookup`.
- **Zielserver:** `ping` oder Aufruf im Browser.
Jeder bestandene Schritt schließt eine Fehlerquelle aus. Auch umgekehrt – vom Browser abwärts – ist zulässig, wenn du Schicht für Schicht vorgehst.

### K4 – Fehlerort aus dem Testergebnis (Stufe 4 Beurteilen)
Du kannst aus dem Ergebnis eines Tests beurteilen, wo der Fehler liegt, zum Beispiel wenn der ping auf die IP-Adresse gelingt, der Aufruf des Namens aber scheitert, oder wenn eine ping-Ausgabe Paketverlust oder hohe, stark schwankende Antwortzeiten zeigt.

Erklärung:
Schließe aus dem, was klappt und was nicht:
- `ping` auf die **IP** klappt, auf den **Namen** nicht → **DNS**-Problem.
- Eigene Adresse passt, **Gateway antwortet nicht** → Fehler zwischen PC und Gateway: Kabel, Switch, falsches Gateway oder falsche Maske.
- Gateway antwortet, **Internet-IP nicht** → Fehler **hinter** dem Gateway: Router, Internetanschluss; mit `tracert` eingrenzen.
- **Paketverlust** oder **stark schwankende Antwortzeiten** → Verbindung instabil oder überlastet: schwaches WLAN-Signal, defektes Kabel, ausgelastete Leitung.

### K5 – LEDs an der Netzwerkbuchse (Stufe 2 Verstehen)
Du kannst die LEDs an einer Netzwerkbuchse interpretieren: Dauerlicht für eine bestehende Verbindung, Blinken für Datenverkehr.

Erklärung:
- **Dauerlicht:** Die Verbindung besteht (Link).
- **Blinken:** Es fließen Daten.
- **Aus:** keine Verbindung – Kabel, Stecker oder Gegenstelle prüfen.

### K6 – Zugehörigkeit einer Netzwerkdose per ping (Stufe 2 Verstehen)
Du kannst beschreiben, wie du mit Patchkabel und ping herausfindest, welche Netzwerkdose zu welchem Netz gehört.

Erklärung:
- Ein Notebook per **Patchkabel** an die Dose anschließen.
- Mit `ipconfig` die per **DHCP** erhaltene **Adresse** ansehen – sie verrät das Netz (z. B. 192.168.20.x = Netz 20). Kommt nur eine 169.254.x.x-Adresse, gibt es dort keinen DHCP-Server: Dann eine feste Adresse aus dem vermuteten Netz eintragen.
- Zur Bestätigung das **Gateway** oder einen bekannten Rechner dieses Netzes **anpingen**.
So kannst du Dose für Dose zuordnen, auch wenn die Beschriftung fehlt.

### K7 – Typische Fehlerursachen: Prüfung und Behebung (Stufe 1 Wiedergeben)
Du kannst für typische Fehlerursachen eine Überprüfung und eine Behebung angeben, zum Beispiel falsche DNS-Einstellung: mit nslookup prüfen, DNS-Server korrigieren.

Erklärung:
- **Falscher DNS-Server:** prüfen mit `nslookup` bzw. `ipconfig /all` → richtigen DNS-Server eintragen.
- **Falsches Gateway:** prüfen mit `ipconfig` und `ping` aufs Gateway → Gateway korrigieren.
- **Defektes Kabel:** prüfen an der LED, Kabel testen → Kabel tauschen.
- **Kein DHCP (169.254.x.x):** prüfen mit `ipconfig` → DHCP-Server und Verbindung prüfen.

### K8 – Kabeltester: wie er prüft (Stufe 2 Verstehen)
Du kannst beschreiben, wie ein Kabeltester ein Netzwerkkabel prüft: Beide Enden werden angesteckt, der Tester schaltet die acht Adern einzeln nacheinander durch, und das Kabel ist in Ordnung, wenn jede Ader auf beiden Seiten an derselben Stelle ankommt; mit zwei geprüften Patchkabeln lässt sich so auch die fest verlegte Strecke von der Dose zum Patchfeld testen.

Erklärung:
Ein einfacher Kabeltester besteht aus einem **Hauptgerät** und einem **Gegenstück**, je an einem Kabelende.
- Das Hauptgerät legt nacheinander auf **jede der acht Adern** ein Signal; am Gegenstück leuchtet die zugehörige Anzeige.
- **In Ordnung:** Die Anzeigen laufen auf beiden Seiten in derselben Reihenfolge 1 bis 8.
- **Fehler:** Eine Anzeige bleibt dunkel (Ader unterbrochen) oder die Reihenfolge ist vertauscht (falsch aufgelegt oder gekreuzt).
- **Verlegte Strecke:** Hauptgerät per Patchkabel an die Dose, Gegenstück per Patchkabel ans Patchfeld – die beiden Patchkabel vorher selbst prüfen.
Beispiel: Ein Arbeitsplatz hat keinen Link, das Patchkabel ist in Ordnung → Strecke Dose–Patchfeld messen; Ader 3 bleibt dunkel → Dose neu auflegen lassen.

### K9 – ping auf externen Namen als Schnelltest (Stufe 4 Beurteilen)
Du kannst begründen, warum ein erfolgreicher ping auf einen externen Namen als Schnelltest genügt: Er bestätigt auf einmal, dass eigene IP-Konfiguration, Standardgateway und DNS funktionieren; erst wenn er scheitert, sind die Einzeltests in sinnvoller Reihenfolge nötig.

Erklärung:
Ein `ping www.example.com` braucht **alles auf einmal**:
- eine gültige **eigene IP-Konfiguration**,
- einen **DNS-Server**, der den Namen in eine Adresse auflöst,
- ein erreichbares **Standardgateway**, das das Paket ins Internet weiterleitet.
Kommt eine Antwort, ist all das in Ordnung – ein Befehl ersetzt mehrere Einzeltests. Erst bei einem Fehlschlag gehst du Schritt für Schritt vor: eigene Konfiguration, Gateway, externe IP-Adresse, Name.
Beispiel: Eine Kollegin meldet „kein Internet“. `ping www.example.com` antwortet → Netz und DNS laufen, der Fehler liegt eher in der Anwendung, etwa im Browser.

## Lehrnotiz: Netzwerkbefehle und systematische Fehlersuche

**Aufteilung:**
- Teil A – Befehle und Zweck: K1, K2
- Teil A – Suchen und schließen: Reihenfolge K3; Fehlerort K4; Schnelltest K9; Prüfung und Behebung K7
- Pause möglich nach Teil A.
- Teil B – am Gerät: LEDs K5; Kabeltester K8; Dose zuordnen K6

**Schon geprüft:** In Prüfungen: K2 (2022H, 2024F), K3 (2022F, neuere Prüfung), K4 (2022F, neuere Prüfung), K5 (2024F), K6 (2024H), K7 (neuere Prüfung) · Noch nicht geprüft: K1, K8, K9

**Kerngedanken:**
- Die Fehlersuche ist ein Ausschlussverfahren: Der Fehler liegt zwischen dem letzten Test, der klappt, und dem ersten, der scheitert. Ein Fehlerort ist deshalb eine Stelle mit Begründung aus dem Testergebnis; „Netzwerkfehler“ ist keiner.
- Paketverlust heißt nicht „nicht erreichbar“: Es kommen Antworten, nur nicht alle. Das Schwanken zeigen Minimum und Maximum, der Mittelwert allein täuscht.
- Eine leuchtende LED beweist nur die physische Verbindung, nicht, dass Adresse oder DNS stimmen.
**Typische Missverständnisse:**
- Viele denken, ein erfolgreicher ping auf eine IP-Adresse im Internet zeige, dass alles läuft. Richtig ist: Er prüft die Namensauflösung nicht mit; nur der ping auf einen Namen bestätigt alles auf einmal.
**Fachwörter:**
- Gateway: Router, der aus dem eigenen Netz hinausführt
- Namensauflösung: DNS macht aus dem Namen eine Adresse
- Paketverlust: ein Teil der Anfragen bleibt unbeantwortet
**So fragt die IHK:**
- Regelmäßig, meist als Kette zur Fehlersuche. Operatoren: benennen, interpretieren, angeben, beschreiben.
- Statusfenster einer WLAN-Verbindung (Medienstatus, Signalqualität, Übertragungsrate, aber „kein Netzwerkzugriff“): Werte der untersten Schicht benennen (je 1 Punkt) und deuten (2 Punkte: Schicht 1 fehlerfrei, Fehler liegt höher).
- Nach dem Erneuern der IP-Adresse eine ipconfig-Ausgabe und ein erfolgreicher ping aufs Gateway: den ermittelten Fehler benennen (gezählt: fehlende Zuteilung einer IP-Adresse). Klappt es erst nach dem Erneuern, fehlte vorher die Adresse.
- Foto einer Buchse: Dauerlicht und unregelmäßiges Blinken interpretieren.
- Befehl angeben, um eine Adresse aus einer Ausgabe (z. B. `arp`), Loopback oder Gateway zu prüfen: gezählt wird `ping <Adresse>`, auch `tracert`; bei IPv6 z. B. `ping ::1`.
- Unbeschriftete Doppeldose, zwei getrennte Netze, Router-Adresse im Material: Vorgehen beschreiben (Patchkabel an eine Buchse, ping auf den Router, bei Erfolg beschriften, sonst umstecken), um 5 Punkte.
- Gezählt werden der Befehl mit der konkreten Adresse aus dem Material (nicht ohne Ziel) und die Begründung aus dem Testergebnis.

**Fallen:**
- Teil A: Provider anrufen oder Router neu starten, bevor die schnellen Prüfungen am PC gemacht sind; in der Reihenfolge springen.
- Teil A: „Internetanschluss gestört“ urteilen, weil ein einziges Internetziel nicht antwortet. Manche Ziele beantworten ping nicht: zweites Ziel testen oder `tracert`.
- Teil A: Antwortet das Gateway nicht, andere Rechner im eigenen Netz aber schon, trotzdem Kabel oder Switch verdächtigen. Diese scheiden aus: Gateway-Adresse und Maske mit dem Netzplan vergleichen, dann prüfen, ob der Router selbst läuft.
- Teil A: Bei Paketverlust eine Ursache nennen, die nicht zur Verbindungsart passt (WLAN-Signal bei einem PC am Kabel).
- Teil B: Blinken als Fehler deuten. Farben und Lage der LEDs sind herstellerabhängig; es zählt das Prinzip.
- Teil B: Beim Kabeltester nur „anstecken“ schreiben, ohne zu sagen, wie er prüft.
- Teil B: Eine Dose mit „Internet geht“ zuordnen: Das können beide Netze.
- Teil B: Scheitert der ping aufs Gateway, kann die Dose auch nicht gepatcht sein: erst die andere Buchse prüfen.
