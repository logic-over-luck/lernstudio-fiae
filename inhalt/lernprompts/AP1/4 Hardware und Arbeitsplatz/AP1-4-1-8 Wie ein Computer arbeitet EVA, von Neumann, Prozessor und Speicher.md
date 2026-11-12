Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Geräte und Komponenten › Wie ein Computer arbeitet: EVA, von Neumann, Prozessor und Speicher

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

**Aufteilung:**
- EVA-Prinzip, Zentraleinheit und Peripherie: K1
- Flüchtiger Arbeitsspeicher und dauerhafte Datenträger: K4
- Cache-Stufen zwischen Prozessor und Arbeitsspeicher: K5
- RISC wie ARM gegen x86: K7
- Pipelining, danach die Abgrenzung zu den anderen Formen der Parallelisierung: K8

**Schon geprüft:** In Prüfungen: K5 (2022F) · Noch nicht geprüft: K1, K4, K7, K8

**Kerngedanken:**
- Pipelining lässt sich nachzählen: Ohne Pipelining braucht jeder Befehl alle Phasen für sich, also Befehle mal Phasen Takte. Mit Pipelining braucht der erste Befehl alle Phasen, danach wird im Idealfall je Takt einer fertig: Phasen plus (Befehle minus 1) Takte.
- Pipelining überlappt Phasen innerhalb eines Kerns. Die anderen vier Begriffe aus K8 beschreiben dagegen, dass zusätzliche Threads, Kerne, Prozessoren oder ein Spezialprozessor gleichzeitig arbeiten.
- Abgrenzung: Logische Prozessoren und die Frage, warum Leistung heute über mehr Kerne kommt, gehören zu anderen Stichpunkten.

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
