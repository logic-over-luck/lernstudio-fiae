Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Verbindungen einrichten und Fehler finden › Was Testbefehle zeigen: ping, traceroute, Routingtabelle, nslookup

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

## Stoff: Was Testbefehle zeigen: ping, traceroute, Routingtabelle, nslookup

Ziel: Erklären, wie ping und traceroute arbeiten, Routingtabelle und nslookup-Ausgabe deuten und beurteilen, was ein Testergebnis beweist und was nicht.

Das muss ich können:

### K1 – Funktionsweise von ping und RTT (Stufe 2 Verstehen)
Du kannst erklären, wie ping arbeitet: Er schickt eine ICMP-Echo-Anfrage an das Ziel, das sofort mit einer Echo-Antwort reagiert, und misst die Round Trip Time (RTT), die Zeit für Hin- und Rückweg; eine hohe RTT bedeutet große Verzögerung, über die erreichbare Datenrate sagt sie dagegen wenig aus.

Erklärung:
`ping` nutzt **ICMP**, das Protokoll der Schicht 3 für Kontroll- und Fehlermeldungen.
- Der Rechner sendet eine **Echo-Anfrage** (Echo Request) an die Zieladresse.
- Das Ziel antwortet sofort mit einer **Echo-Antwort** (Echo Reply).
- `ping` zeigt für jede Antwort die **Round Trip Time** (RTT): Hin- **und** Rückweg zusammen, über alle Kabel, Switches und Router.
Die RTT misst die **Verzögerung** (Latenz), nicht die Datenrate: Ein schneller Glasfaseranschluss zu einem Server in Übersee hat eine RTT über 100 ms und überträgt trotzdem viele Megabit pro Sekunde. Im kabelgebundenen LAN liegt die RTT meist unter 1 ms, im WLAN sind einige Millisekunden normal; steigt sie stark oder schwankt sie, ist die Strecke ausgelastet oder gestört.
Beispiel: `ping 192.168.1.1` → „Antwort von 192.168.1.1: Zeit<1ms“ – das Gateway ist erreichbar und antwortet ohne merkliche Verzögerung.

### K2 – traceroute und die TTL (Stufe 2 Verstehen)
Du kannst erklären, wie traceroute den Weg zu einem Ziel ermittelt: Jedes IP-Paket trägt eine Lebensdauer (TTL), die jeder Router um eins verringert und bei null das Paket mit einer Meldung an den Absender verwirft; traceroute sendet Pakete mit TTL 1, 2, 3 …, sodass sich die Router auf dem Weg der Reihe nach melden.

Erklärung:
**TTL** (Time to Live) ist ein Zähler im Kopf jedes IP-Pakets. Er verhindert, dass ein Paket bei einem Routingfehler **endlos im Kreis** läuft: Jeder Router zieht **1** ab; erreicht der Wert **0**, verwirft er das Paket und schickt dem Absender eine ICMP-Meldung „Zeit abgelaufen“.
**traceroute** (Windows: `tracert`) nutzt das gezielt:
- Erstes Paket mit TTL 1 → der **erste** Router meldet sich; TTL 2 → der **zweite**; und so weiter, bis das Ziel antwortet.
- Jede Zeile der Ausgabe ist ein Router (Hop) mit seinen Antwortzeiten.
- Endet die Liste mit `* * *`, kommt man ab dort nicht weiter – oder dieser Router beantwortet solche Anfragen nur nicht.
Beispiel: Hop 1 (eigener Router) und Hop 2 (Provider) antworten, danach nur noch Sternchen → das Problem liegt beim Provider oder dahinter.

### K3 – Routingtabelle und Standardroute (Stufe 2 Verstehen)
Du kannst eine Routingtabelle (Linux: ip route, Windows: route print) interpretieren: Die Standardroute („default via …“ bzw. 0.0.0.0) nennt das Standardgateway, weitere Einträge die direkt angeschlossenen Netze.

Erklärung:
Die Routingtabelle sagt dem Rechner, **wohin** er ein Paket schickt. Sie ist die erste Anlaufstelle, wenn ein Rechner im eigenen Netz arbeitet, aber nicht darüber hinaus.
- **Direkt angeschlossene Netze**, z. B. `192.168.1.0/24 dev eth0`: Ziele darin werden direkt zugestellt. Steht in der Zeile `src 192.168.1.20`, ist das die eigene Adresse, nicht das Gateway.
- **Standardroute**, z. B. `default via 192.168.1.1` (Windows: Ziel 0.0.0.0): Alles andere geht an dieses **Gateway**. Fehlt sie oder zeigt sie auf eine falsche Adresse, ist das Internet nicht erreichbar.
Beispiel: `ip route` zeigt „default via 192.168.1.1 dev eth0“ – das Standardgateway ist 192.168.1.1.

### K4 – Was ein ping beweist und was nicht (Stufe 4 Beurteilen)
Du kannst beurteilen, was ein ping über die Erreichbarkeit eines Dienstes aussagt: Ein fehlgeschlagener ping beweist nicht, dass das Ziel unerreichbar ist, weil Firewalls ICMP oft sperren, und ein erfolgreicher ping beweist nicht, dass der Dienst läuft, weil sein Port getrennt gefiltert wird und der Dienst selbst ausgefallen sein kann.

Erklärung:
ping prüft nur, ob ein Rechner auf **ICMP** antwortet. Ein Dienst wie ein Webserver läuft aber über **TCP oder UDP auf einem Port** – das sind zwei verschiedene Dinge:
- **Kein Echo:** Viele Firewalls, auch die eingebaute von Windows, blockieren ping. Der Rechner kann trotzdem laufen und seine Dienste anbieten.
- **Echo kommt:** Der Rechner lebt – aber der Port des Dienstes kann von einer Firewall gesperrt sein, oder das Programm selbst ist abgestürzt.
Deshalb sicherst du den Befund mit einem Test **des Dienstes selbst** ab: Seite im Browser aufrufen, Verbindung zum Port aufbauen, am Dienst anmelden.
Beispiel: `ping intranet` antwortet, die Seite lädt aber nicht → Rechner und Netz sind in Ordnung, der Fehler liegt beim Webserver-Dienst oder seinem Port (Dienst gestoppt oder Port von einer Firewall gesperrt).

### K5 – nslookup-Ausgabe: befragter Server und Adressen (Stufe 2 Verstehen)
Du kannst eine nslookup-Ausgabe interpretieren: oben der befragte DNS-Server, darunter die zum Namen gefundenen Adressen (oft mehrere).

Erklärung:
`nslookup name` fragt einen DNS-Server nach der Adresse zu einem Namen. Die Ausgabe hat zwei Teile:
- **Server / Address:** welcher DNS-Server gefragt wurde – normalerweise der aus der eigenen Konfiguration.
- **Name / Addresses:** die gefundenen IPv4- und IPv6-Adressen; große Dienste liefern oft **mehrere**, um die Last zu verteilen. Die Zeile „Nicht autorisierende Antwort“ davor ist normal und kein Fehler.
Zum Eingrenzen fragst du gezielt einen **anderen** DNS-Server (`nslookup name <Server>`): Antwortet der richtig, der eigene aber nicht, liegt der Fehler beim eigenen DNS-Server.
Beispiel: `nslookup intranet.firma.de` liefert nichts, mit dem internen DNS-Server als zweitem Argument schon → am PC ist der falsche DNS-Server eingetragen.

## Lehrnotiz: Was Testbefehle zeigen: ping, traceroute, Routingtabelle, nslookup

**Aufteilung:**
- Wie ping arbeitet und was die Zeit bedeutet: K1
- Wie traceroute den Weg findet: K2
- Routingtabelle lesen: K3
- nslookup-Ausgabe lesen: K5
- Was ein ping beweist und was nicht: K4

**Schon geprüft:** Noch nicht geprüft: K1–K5

**Kerngedanken:**
- Welcher Befehl wofür da ist und in welcher Reihenfolge man sucht, gehört zum Nachbarthema „Netzwerkbefehle und systematische Fehlersuche“. Hier geht es darum, wie die Befehle arbeiten und was ihre Ausgabe beweist.
- Eine Ausgabe interpretieren heißt zweierlei: den Wert richtig ablesen (Standardgateway, befragter DNS-Server, letzter Hop mit Antwort) und daraus einen begründeten Schluss ziehen.
- Beim Urteil über einen ping ist weder „keine Antwort, also Server aus“ noch „Antwort, also alles in Ordnung“ zulässig. Zum vollen Urteil gehören der Grund (ICMP ist etwas anderes als der Port des Dienstes) und der nächste Test am Dienst selbst.

**Typische Missverständnisse:**
- Viele denken, die TTL sei eine Zeit in Sekunden. Richtig ist: Sie ist ein Zähler, den jeder Router um 1 senkt.
- Viele denken, die Adresse im oberen Teil der nslookup-Ausgabe sei die gesuchte. Richtig ist: Oben steht der befragte DNS-Server, die gesuchten Adressen stehen darunter.

**Fachwörter:**
- ICMP: Protokoll für Kontroll- und Fehlermeldungen
- Echo-Anfrage / Echo-Antwort: Frage und Rückmeldung bei ping
- Round Trip Time (RTT): Zeit für Hin- und Rückweg
- TTL: Zähler im Paket, sinkt je Router
- Hop: ein Router auf dem Weg
- Standardroute: Eintrag für alle übrigen Ziele

**So fragt die IHK:**
- Es gibt keine verwendbare echte Prüfungsaufgabe. Der Prüfungskatalog nennt Test und Troubleshooting von Netzwerkverbindungen und die Befehle ifconfig/ip, iproute2, ping, traceroute, nslookup.
- Zu erwarten ist eine Konsolenausgabe als Material in einer Aufgabe zur Fehlersuche: sie interpretieren, einen Wert benennen (Standardgateway, befragter DNS-Server, Hop, an dem es abbricht) oder einen Schluss beurteilen.
- Operatoren wie interpretieren, erläutern, beurteilen; je Teilaufgabe meist 2–4 Punkte. Gezählt werden der richtig abgelesene Wert und die Begründung aus der Ausgabe.

**Fallen:**
- Eine hohe RTT als langsamen Download deuten oder als Zeit nur für den Hinweg.
- Bei traceroute nur das Ergebnis deuten, ohne den Mechanismus zu erklären: Die TTL wird schrittweise erhöht, und der Router, bei dem sie abläuft, meldet sich.
- Die drei Zeiten je Zeile für drei Router halten: Je TTL-Wert gehen drei Pakete hinaus.
- Sternchen mitten in der Liste, nach denen weitere Hops antworten, als Fehler werten: Dieser Router antwortet nur nicht.
- Bei Sternchen am Ende ohne Vorbehalt sagen, der nächste Router sei defekt.
- In `ip route` die Adresse hinter „src“ oder in `route print` die Spalte „Schnittstelle“ für das Gateway halten: Beides ist die eigene Adresse. Das Gateway steht hinter „default via“ bzw. in der Zeile mit Netzwerkziel 0.0.0.0 in der Spalte „Gateway“; „Auf Verbindung“ heißt direkt angeschlossen.
- Bei einer gezielten Abfrage (`nslookup name <Server>`) die Adresse dieses Servers für die Adresse des gesuchten Namens halten.
- Die Zeile „Nicht autorisierende Antwort“ als Fehler deuten: Sie ist normal und wird nicht vertieft.
- Die Ursache an einzelnen PCs suchen, obwohl alle Benutzer zugleich betroffen sind: Das spricht für eine gemeinsame Stelle (Server, Dienst, gemeinsamer Netzabschnitt oder DNS-Server).
