Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Geräte und Komponenten › Wie ein Computer arbeitet: EVA, von Neumann, Prozessor und Speicher

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt. Fehlende Nummern (etwa K4) sind Absicht.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet, und für alles, was eine Erklärung im Stoff nur nebenbei erwähnt.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen. Die Begründungen nimmst du aus dem Stoff und der Lehrnotiz; ergänzt du eine eigene, kennzeichne sie mit „Hintergrund, nicht aus dem Stoff: …“. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, reicht die Erklärung aus dem Stoff. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber nur mit dem, was du mir vorher erklärt hast. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Wie ein Computer arbeitet: EVA, von Neumann, Prozessor und Speicher

Ziel: Das EVA-Prinzip erklären, flüchtigen Arbeitsspeicher, dauerhafte Datenträger und Cache-Stufen einordnen, RISC und x86 unterscheiden und Pipelining von anderen Formen der Parallelisierung abgrenzen.

Das muss ich können:

### K1 – EVA-Prinzip und Peripherie (Stufe 2 Verstehen)
Du kannst das EVA-Prinzip erklären: Eingabegeräte erfassen Daten, die Zentraleinheit aus Prozessor und Arbeitsspeicher verarbeitet sie nach einem Programm, Ausgabegeräte geben das Ergebnis aus; alle Geräte außerhalb der Zentraleinheit sind Peripherie, externe Speicher wie USB-Stick oder externe SSD dienen der Ein- und Ausgabe zugleich.

Erklärung:
Jede Datenverarbeitung folgt dem Schema **Eingabe – Verarbeitung – Ausgabe**.
- **Eingabe:** Tastatur, Maus, Scanner, Mikrofon, Sensor
- **Verarbeitung:** in der **Zentraleinheit** = Prozessor + Arbeitsspeicher, gesteuert vom Programm und vom Betriebssystem; ihre Leistung prägt die des ganzen Rechners
- **Ausgabe:** Bildschirm, Drucker, Lautsprecher
Alles um die Zentraleinheit herum ist **Peripherie**. Externe Speicher (USB-Stick, Speicherkarte, externe SSD) lesen und schreiben – sie sind Ein- und Ausgabe zugleich. Dasselbe gilt für die Netzwerkkarte, die sendet und empfängt (das Lehrbuch führt das Netzwerk nur bei der Ausgabe). Ein arbeitsfähiger Rechner braucht mindestens ein Ein- und ein Ausgabegerät.
Beispiel Kassensystem: Scanner liest den Barcode (E), der Rechner sucht den Preis (V), Display und Bondrucker zeigen ihn (A).

### K4 – Flüchtiger Arbeitsspeicher und dauerhafte Datenträger (Stufe 2 Verstehen)
Du kannst erklären, warum Programme beim Start in den Arbeitsspeicher geladen und Daten auf einem Datenträger gespeichert werden: Der Prozessor arbeitet nur mit Befehlen und Daten im Arbeitsspeicher bzw. Cache, der Arbeitsspeicher ist aber flüchtig und verliert ohne Strom seinen Inhalt, während Flash-Speicher (z. B. für das UEFI), SSD und HDD ihn dauerhaft behalten.

Erklärung:
Zwei Speicherarten mit verschiedenen Aufgaben:
- **Arbeitsspeicher (RAM):** schnell, direkter Zugriff des Prozessors, aber **flüchtig**. Beim Programmstart werden Programm und Daten vom Datenträger hierher geladen; jedes gleichzeitig laufende Programm belegt zusätzlich Platz.
- **Nichtflüchtige Speicher:** SSD, HDD, USB-Stick, optische Medien und der Flash-Baustein mit der Firmware (UEFI) behalten ihren Inhalt ohne Strom, sind aber langsamer.
Darum gilt: Wer nicht speichert, verliert bei Stromausfall oder Absturz alles, was nur im RAM stand.
Beispiel: Ein geöffnetes, nicht gespeichertes Dokument ist nach einem Stromausfall weg, die zuletzt gespeicherte Fassung auf der SSD bleibt.

### K5 – Cache-Stufen L1 bis L3 (Stufe 2 Verstehen)
Du kannst erklären, warum zwischen Prozessor und Arbeitsspeicher mehrere Cache-Stufen liegen: Je näher ein Speicher am Rechenkern ist, desto schneller, kleiner und teurer ist er – L1 im Kern fast so schnell wie der Prozessor, L2 größer und langsamer, L3 von allen Kernen geteilt –, und so überbrücken die Stufen den großen Geschwindigkeitsunterschied zum Arbeitsspeicher.

Erklärung:
Der Prozessor ist viel schneller als der Arbeitsspeicher. Müsste er jedes Mal auf den RAM warten, stünde er die meiste Zeit still. Deshalb gibt es eine **Speicherhierarchie**:
- **Register** im Rechenwerk – winzig, sofort verfügbar
- **L1-Cache** je Kern – klein, fast Prozessortempo
- **L2-Cache** – größer, etwas langsamer
- **L3-Cache** – noch größer, von allen Kernen gemeinsam genutzt
- **Arbeitsspeicher**, dann **SSD/HDD** – groß, aber immer langsamer
Der Prozessor sucht zuerst im schnellsten Speicher. Weil Programme dieselben Daten oft wiederverwenden, findet er sie meist schon dort.

### K7 – RISC wie ARM gegen x86 (Stufe 2 Verstehen)
Du kannst RISC-Prozessoren wie ARM von den x86-Prozessoren klassischer PCs unterscheiden: kleiner, einfacher Befehlssatz und geringe Leistungsaufnahme, daher in Smartphones, Tablets, eingebetteten Systemen und zunehmend in Notebooks und Servern; Betriebssystem, Programme und Treiber müssen für die Architektur übersetzt sein.

Erklärung:
- **CISC (x86):** großer Befehlssatz mit vielen komplexen Befehlen – der klassische PC- und Serverprozessor.
- **RISC (z. B. ARM):** wenige, einfache Befehle, die schnell und **sparsam** ausgeführt werden – lange Akkulaufzeit, wenig Wärme.
Darum stecken ARM-Prozessoren in fast allen Smartphones und Tablets, in eingebetteten Geräten und inzwischen auch in Notebooks und Rechenzentren.
Der Haken: Programme sind für einen **Befehlssatz** übersetzt. Ein x86-Programm läuft auf ARM nur nach Neuübersetzung oder über eine Emulation; fehlende Treiber z. B. für einen älteren Drucker können den Umstieg verhindern.

### K8 – Pipelining und Formen der Parallelisierung (Stufe 2 Verstehen)
Du kannst Pipelining erklären – die Phasen mehrerer Befehle (holen, entschlüsseln, ausführen) laufen überlappend in Stufen, im Idealfall wird je Takt ein Befehl fertig – und es von Multi-Threading, Coprozessor, Multi-Prozessor und Multi-Core abgrenzen.

Erklärung:
Pipelining: Die Phasen mehrerer Befehle (holen, entschlüsseln, ausführen) laufen überlappend in Stufen, sodass im Idealfall in jedem Takt ein Befehl fertig wird.
Abgrenzung:
- **Multi-Threading:** ein Kern bearbeitet mehrere Threads und nutzt seine Rechenwerke besser aus.
- **Coprozessor:** zusätzlicher Prozessor für Spezialaufgaben, z. B. Gleitkomma- oder Grafikberechnung.
- **Multi-Prozessor:** mehrere eigenständige Prozessoren in einem System.
- **Multi-Core:** mehrere Kerne auf einem Prozessor.

## Lehrnotiz: Wie ein Computer arbeitet: EVA, von Neumann, Prozessor und Speicher

**Hinweis aus dem Lernplan:** Das Lehrbuch gibt den Adressraum von 64 Bit zu klein an; richtig sind 2^64 Byte = 16 EiB (praktische Grenzen setzen Mainboard und Betriebssystem). Es beschreibt außerdem noch den Front Side Bus, den es in aktuellen PCs nicht mehr gibt, und bezieht das Mooresche Gesetz auf die Leistung mit 18 Monaten; gemeint ist die Transistorzahl je Chip, etwa alle zwei Jahre.

**Aufteilung:**
- EVA-Prinzip, Zentraleinheit und Peripherie: K1
- Flüchtiger Arbeitsspeicher und dauerhafte Datenträger: K4
- Cache-Stufen zwischen Prozessor und Arbeitsspeicher: K5
- RISC wie ARM gegen x86: K7
- Pipelining, danach die Abgrenzung zu den anderen Formen der Parallelisierung: K8

**Schon geprüft:** Noch nicht geprüft: K1, K4, K5, K7, K8

**Kerngedanken:**
- Pipelining lässt sich nachzählen: Ohne Pipelining braucht jeder Befehl alle Phasen für sich, also Befehle mal Phasen Takte. Mit Pipelining braucht der erste Befehl alle Phasen, danach wird im Idealfall je Takt einer fertig: Phasen plus (Befehle minus 1) Takte.
- Pipelining überlappt Phasen innerhalb eines Kerns. Die anderen vier Begriffe aus K8 beschreiben dagegen, dass zusätzliche Threads, Kerne, Prozessoren oder ein Spezialprozessor gleichzeitig arbeiten.
- Abgrenzung: Logische Prozessoren und die Frage, warum Leistung heute über mehr Kerne kommt, gehören zu anderen Stichpunkten.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K5 – Ablauf eines Cache-Zugriffs: Treffer und Fehlzugriff: (1) Der Rechenkern braucht einen Befehl oder ein Datum und sucht es zuerst im L1-Cache seines Kerns. (2) Steht es dort, ist das ein Cache-Treffer, und der Kern arbeitet fast ohne Wartezeit weiter. (3) Fehlt es dort, ist das ein Fehlzugriff, und der Prozessor sucht nacheinander im L2-Cache und im L3-Cache. (4) Fehlt es in allen Cache-Stufen, holt der Prozessor es aus dem langsameren Arbeitsspeicher, und der Kern muss so lange warten. (5) Der Prozessor legt das geholte Datum zusammen mit benachbarten Daten als Kopie im Cache ab und verdrängt dafür länger nicht benutzte Einträge. (6) Beim nächsten Zugriff auf dieselben oder benachbarte Daten gibt es einen Treffer, und der Zugriff auf den Arbeitsspeicher entfällt. Vereinfacht: Das Zurückschreiben geänderter Daten in den Arbeitsspeicher ist hier weggelassen.

**Typische Missverständnisse:**
- Viele denken, die Zentraleinheit sei das PC-Gehäuse. Richtig ist: Gemeint sind nur Prozessor und Arbeitsspeicher.
- Viele denken, „2 TB Speicher“ schütze vor Datenverlust beim Stromausfall. Richtig ist: Die Angabe meint den Datenträger; gearbeitet wird im viel kleineren, flüchtigen Arbeitsspeicher.
- Viele denken, der Cache sei ein anderes Wort für den Arbeitsspeicher. Richtig ist: Er ist ein eigener, schnellerer Zwischenspeicher im Prozessor.

**Fachwörter:**
- EVA-Prinzip: Eingabe, Verarbeitung, Ausgabe
- Zentraleinheit: Prozessor und Arbeitsspeicher zusammen
- Peripherie: alle Geräte außerhalb der Zentraleinheit
- flüchtig: verliert ohne Strom den Inhalt
- Befehlssatz: alle Befehle, die ein Prozessor versteht
- Pipelining: Phasen mehrerer Befehle laufen überlappend
- Thread: einzelner Ausführungsstrang eines Programms

**So fragt die IHK:**
- Eine echte Teilaufgabe grenzt an dieses Thema: Vorgegeben ist ein Taskmanager-Ausschnitt eines Standard-PCs (unter anderem Sockets, Kerne, logische Prozessoren, L1-, L2-, L3-Cache). Operator „beschreiben“: die Aufgabe eines Cache-Speichers allgemein, 2 Punkte, etwa 3 Zeilen. Gezählt wird je ein Punkt für „schneller Zwischenspeicher“ und für „weniger Zugriffe auf ein langsameres Speichermedium“.
- Zu EVA, flüchtigem Speicher, ARM und Pipelining gibt es keine echte Aufgabe. Der Prüfungskatalog nennt Hardwareprodukte und Kenngrößen von CPU und RAM; zu erwarten sind daher kurze Teilaufgaben mit „beschreiben“, „erklären“ oder „erläutern“, meist an Material wie Taskmanager-Ausschnitt oder Angebot.

**Fallen:**
- Einen externen Speicher (USB-Stick, Speicherkarte) nur der Eingabe oder nur der Ausgabe zuordnen.
- Das Laden in den Arbeitsspeicher nur mit „der ist schneller“ begründen. Der Grund ist, dass der Prozessor direkt nur auf Arbeitsspeicher und Cache zugreift; dazu gehört die Folge, regelmäßig zu speichern.
- Bei der Aufgabe des Cache einen der beiden gezählten Teile weglassen.
- Die Cache-Stufen nur aufzählen oder nur „zu teuer“ schreiben, ohne den Zweck: den Geschwindigkeitsunterschied zum Arbeitsspeicher überbrücken.
- Mit „ARM ist langsamer“ oder nur „ARM ist sparsamer“ argumentieren. Die Argumente sind Befehlssatz, Leistungsaufnahme und die Verfügbarkeit von Programmen und Treibern.
- Beim Pipelining den Anlauf vergessen und für jeden Befehl nur einen Takt zählen.
- Multi-Core und Multi-Prozessor verwechseln: mehrere Kerne auf einem Chip gegen mehrere eigenständige Prozessoren.
