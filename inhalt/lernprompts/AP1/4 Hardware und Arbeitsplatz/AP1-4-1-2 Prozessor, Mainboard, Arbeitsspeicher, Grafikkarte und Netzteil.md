Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Geräte und Komponenten › Prozessor, Mainboard, Arbeitsspeicher, Grafikkarte und Netzteil

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: Prozessor, Mainboard, Arbeitsspeicher, Grafikkarte und Netzteil

Ziel: Aufgaben und Kenngrößen der Komponenten kennen, Datenblätter vergleichen, die Verträglichkeit beurteilen und den Arbeitsspeicher prüfen.

Das muss ich können:

### K1 – Aufgaben der Hauptkomponenten im PC (Stufe 2 Verstehen)
Du kannst die Aufgaben von CPU, Mainboard, Arbeitsspeicher, Grafikkarte und Netzteil erklären.

Erklärung:
- **CPU (Prozessor):** führt die Befehle der Programme aus – rechnet und steuert.
- **Mainboard:** die Hauptplatine, verbindet alle Komponenten (CPU-Sockel, RAM-Steckplätze, Erweiterungssteckplätze, Anschlüsse) und trägt die Firmware BIOS/UEFI.
- **Arbeitsspeicher (RAM):** hält laufende Programme und ihre Daten bereit; flüchtig – beim Ausschalten ist alles weg.
- **Grafikkarte:** berechnet das Bild und gibt es an den Monitor aus.
- **Netzteil:** wandelt die 230 V Wechselspannung aus der Steckdose in die niedrigen Gleichspannungen für die Komponenten um.

### K2 – Kenngrößen aus dem Datenblatt (Stufe 2 Verstehen)
Du kannst Kenngrößen aus einem Datenblatt lesen und vergleichen, zum Beispiel Kernzahl und Taktfrequenz der CPU, Größe und Typ des Arbeitsspeichers.

Erklärung:
Typische Kenngrößen und was sie bedeuten:
- **Kernzahl der CPU:** wie viele Aufgaben parallel bearbeitet werden – 8 Kerne schaffen mehr gleichzeitig als 4.
- **Taktfrequenz in GHz:** wie viele Arbeitstakte je Sekunde ein Kern schafft – 4,2 GHz ist schneller als 3,6 GHz (bei gleicher Bauart).
- **Größe des RAM:** z. B. 16 GB – wie viel gleichzeitig geöffnet sein kann.
- **Typ des RAM:** DDR-Generation und Datenrate, z. B. DDR5-4800 (4.800 MT/s – oft als „MHz“ angegeben, der echte Takt ist halb so hoch).
Vergleiche immer gleiche Kenngrößen nebeneinander.

### K3 – Speicherriegel: passt er zum System (Stufe 4 Beurteilen)
Du kannst beurteilen, ob ein Speicherriegel zu einem System passt: Die DDR-Generation muss gleich sein; bei unterschiedlichem Takt gilt der niedrigere.

Erklärung:
Zwei Regeln:
- **Die DDR-Generation muss gleich sein.** Ein DDR4-Riegel passt nicht in ein DDR5-System – die Kerbe sitzt an einer anderen Stelle.
- **Bei unterschiedlichem Takt gilt der niedrigere.** Steckt ein DDR4-3200 neben einem DDR4-2666, laufen beide mit 2666. Beim Kauf heißt das: Ein schnellerer, teurerer Riegel lohnt nicht, wenn er neben dem vorhandenen doch nur mit dem niedrigeren Takt läuft.
Dazu muss ein Steckplatz frei sein und die Bauform passen (DIMM im Desktop, SO-DIMM im Notebook).

### K6 – Logische Prozessoren und Cache (Stufe 2 Verstehen)
Du kannst logische Prozessoren und Cache erklären: Logische Prozessoren sind die Threads, die eine CPU gleichzeitig ausführen kann – mit SMT (bei Intel Hyper-Threading) zwei je Kern, bei Effizienzkernen und neueren Intel-Prozessoren ohne Hyper-Threading einer; der Cache ist ein schneller Zwischenspeicher, der Zugriffe auf langsameren Speicher spart.

Erklärung:
- **Logische Prozessoren:** die Threads (Aufgabenstränge), die die CPU gleichzeitig ausführen kann; das Betriebssystem behandelt jeden als eigenen Prozessor. Mit **SMT** (bei Intel **Hyper-Threading**) bearbeitet ein Kern zwei Threads: 8 Kerne → 16 logische Prozessoren. Aber: Bei Hybrid-CPUs haben nur die Leistungskerne SMT (z. B. 2 P-Kerne + 8 E-Kerne = 10 Kerne, 12 Threads), und neuere Intel-Prozessoren (Core Ultra 200S, Lunar Lake) haben gar kein Hyper-Threading mehr – dort ist es ein Thread je Kern.
- **Cache:** ein kleiner, sehr schneller Zwischenspeicher direkt in der CPU. Häufig gebrauchte Daten liegen dort, die CPU muss seltener auf den langsameren Arbeitsspeicher warten.

### K7 – Chipsatz auf dem Mainboard (Stufe 2 Verstehen)
Du kannst die Aufgabe des Chipsatzes erklären: Er verbindet auf dem Mainboard den Prozessor mit Laufwerken, Steckplätzen und Anschlüssen und legt damit weitgehend fest, wie viele USB-, SATA- und PCIe-Anschlüsse ein Mainboard bietet; was er nicht kann, lässt sich nur über Zusatzchips oder Erweiterungskarten nachrüsten.

Erklärung:
Der Chipsatz ist der **Verkehrsknoten des Mainboards**. Arbeitsspeicher und Grafikkarte hängen heute meist direkt am Prozessor, oft auch ein M.2-Steckplatz und einzelne USB-Anschlüsse; alles andere – SATA-Laufwerke, weitere PCIe-Steckplätze, USB, Netzwerk, Audio – läuft über den Chipsatz.
- Er bestimmt die **Ausstattung**: Anzahl der Anschlüsse, unterstützte Standards, teils Übertaktung.
- Eingestellt wird er über das **BIOS/UEFI**, z. B. SATA-Modus oder abgeschaltete Anschlüsse.
- Prozessor und Chipsatz müssen zueinander passen.
Beispiel: Braucht ein Rechner mehr USB-Anschlüsse, als der Chipsatz bietet, hilft nur eine USB-Erweiterungskarte.

### K8 – Formfaktor: Normmaße und Auswahl (Stufe 2 Verstehen)
Du kannst erklären, was ein Formfaktor festlegt und warum er für die Auswahl zählt: Er normt Größe, Befestigungspunkte und Lage der Anschlüsse, damit Mainboard, Gehäuse und Netzteil verschiedener Hersteller zusammenpassen; ein großes ATX-Board bietet viele Steckplätze, ein kompaktes Mini-ITX-Board passt in kleine Gehäuse, lässt sich aber kaum erweitern.

Erklärung:
Ein **Formfaktor** ist eine am Markt durchgesetzte Norm für Maße, Form und Anschlüsse. Nur deshalb passt ein Mainboard von Hersteller A in ein Gehäuse von Hersteller B.
- **ATX:** groß, viele Steckplätze für Speicher und Erweiterungskarten
- **Micro-ATX:** etwas kleiner, weniger Steckplätze
- **Mini-ITX:** sehr kompakt für kleine Rechner, meist nur ein Erweiterungssteckplatz
Auch Netzteile haben Formfaktoren (ATX, kleiner SFX), die zum Gehäuse passen müssen.
Beispiel: Für einen kleinen Rechner hinter dem Empfangstresen passt Mini-ITX – eine zweite Erweiterungskarte geht dann aber nicht mehr.

### K9 – PCI Express und seine Lanes (Stufe 2 Verstehen)
Du kannst PCI Express erklären: Erweiterungskarten wie Grafik- oder Netzwerkkarten und NVMe-SSDs sind über eigene serielle Punkt-zu-Punkt-Leitungen angebunden; die Zahl der Lanes (x1, x4, x8, x16) bestimmt bei gleicher PCIe-Generation die Datenrate, eine kurze Karte passt auch in einen längeren Steckplatz, und der Steckplatz versorgt die Karte mit Strom.

Erklärung:
PCIe ist **kein gemeinsamer Bus**, sondern jedes Gerät bekommt eigene Leitungspaare (**Lanes**). Mehr Lanes heißt mehr Datenrate – bei gleicher Generation. Jede neue PCIe-Generation verdoppelt etwa die Rate je Lane, x4 mit PCIe 4.0 schafft also ungefähr so viel wie x8 mit PCIe 3.0.
- **x16:** Grafikkarte
- **x4:** NVMe-SSD (im M.2-Steckplatz)
- **x1:** Netzwerk- oder Soundkarte
Eine x1-Karte läuft auch im x16-Steckplatz; umgekehrt nicht. Der Steckplatz liefert begrenzt Strom, starke Grafikkarten brauchen zusätzlich Stromkabel vom Netzteil.
Beispiel: Eine 10-Gbit-Netzwerkkarte mit x4 braucht für die volle Datenrate einen freien Steckplatz, der mindestens x4 elektrisch anbindet (mit weniger Lanes läuft sie, aber langsamer) – ein langer Steckplatz kann elektrisch auch nur mit x1 oder x4 angeschlossen sein (steht im Handbuch).

### K10 – Netzteilauswahl: Leistung, Wirkungsgrad, Schutz (Stufe 4 Beurteilen)
Du kannst die Auswahl eines Netzteils begründen: Leistung mit Reserve, weil der Wirkungsgrad bei mittlerer Last am höchsten ist und ein Netzteil an der Grenze heiß und laut wird; dazu passende Anschlüsse und Formfaktor, ein hoher Wirkungsgrad (80 PLUS), Schutzschaltungen gegen Überspannung, Überlast, Kurzschluss und Übertemperatur sowie aktive Kühlung mit Lüfter oder lautlose passive Kühlung für kleinere Leistungen.

Erklärung:
Das Netzteil versorgt alles – ein billiges kann bei einem Fehler die ganzen Komponenten beschädigen.
- **Leistung mit Reserve:** Der Wirkungsgrad ist um etwa **50 % Last** am besten; dauernd an der Grenze wird das Netzteil ineffizient, warm und laut.
- **Anschlüsse und Formfaktor** passend zu Mainboard, Grafikkarte und Gehäuse
- **Wirkungsgrad:** hoch = weniger Abwärme und Stromkosten (Siegel 80 PLUS)
- **Schutzschaltungen** gegen Überspannung, Überlast, Kurzschluss, Übertemperatur
- **Kühlung:** aktiv mit Lüfter (oft erst ab Teillast), passiv lautlos, aber nur für kleinere Leistungen
Beispiel: Komponenten brauchen 300 W → ein Netzteil um 500–600 W ist zu 50–60 % ausgelastet (300 ÷ 600 = 50 %) und läuft im effizienten Bereich.

### K11 – Integrierte gegen dedizierte Grafik (Stufe 2 Verstehen)
Du kannst integrierte und dedizierte Grafik unterscheiden: Die integrierte Grafik sitzt im Prozessor und teilt sich den Arbeitsspeicher, die dedizierte Grafikkarte hat eigenen Grafikspeicher (VRAM) und deutlich mehr Rechenleistung für 3D, Rendering, Videoschnitt und KI.

Erklärung:
- **Integrierte Grafik (iGPU):** im Prozessor eingebaut, zweigt sich einen Teil des Arbeitsspeichers ab. Sparsam, leise, günstig – reicht für Büro, Web, Videos und mehrere Monitore.
- **Dedizierte Grafikkarte:** eigene Karte im PCIe-Steckplatz mit eigenem, schnellem **VRAM** und vielen Rechenkernen. Braucht mehr Strom, Kühlung und ein stärkeres Netzteil.
Beispiel: Die Sachbearbeitung kommt mit integrierter Grafik aus, die 3D-Visualisierung oder das Training eines KI-Modells braucht eine dedizierte Karte.

## Lehrnotiz: Prozessor, Mainboard, Arbeitsspeicher, Grafikkarte und Netzteil

**Aufteilung:**
- Die fünf Komponenten und ihre Aufgaben: K1
- Datenblatt lesen, zuerst die Prozessorzeile: K2, K6
- Arbeitsspeicher-Zeile lesen und prüfen, ob ein Riegel passt: K3
- Pause möglich nach dem Arbeitsspeicher.
- Mainboard: Formfaktor K8, Chipsatz K7, PCI Express K9
- Grafik K11, danach das Netzteil K10

**Schon geprüft:** In Prüfungen: K3 (2024H), K6 (2022F) · Noch nicht geprüft: K1, K2, K7–K11

**Kerngedanken:**
- Ein Urteil über einen Speicherriegel hat zwei Teile: passt oder passt nicht mit Grund, und der Wert, mit dem danach alle Riegel laufen. Daraus folgt: Ein teurerer, schnellerer Riegel lohnt nicht, wenn die vorhandenen ihn bremsen.
- Beim Netzteil rechnet man den Lastanteil: Leistungsbedarf aller Komponenten geteilt durch die Leistung des Netzteils; nahe 100 % ist zu knapp.
- Cache-Stufen, mehr Kerne statt mehr Takt, Latenz und Bauformen gehören zu Nachbarstichpunkten.

**Typische Missverständnisse:**
- Viele denken, der Rechner mit mehr GHz sei der schnellere. Richtig ist: Der Takt gilt für einen Kern und ist nur bei gleicher Bauart vergleichbar; Kernzahl und Cache zählen mit.

**Fachwörter:**
- Logische Prozessoren: gleichzeitig ausführbare Threads einer CPU
- Chipsatz: verbindet Prozessor mit Laufwerken und Anschlüssen
- Formfaktor: Norm für Maße und Anschlusslage
- Lanes: eigene Leitungspaare einer PCIe-Karte
- VRAM: eigener Speicher der Grafikkarte
- Cache: schneller Zwischenspeicher; verringert Zugriffe auf langsameren Speicher

**So fragt die IHK:**
- Kleine Teilaufgaben (2–3 Punkte) im Hardware-Block.
- Muster 1: Vorgegeben ist ein Taskmanager-Ausschnitt. „Erläutern“ des Begriffs logische Prozessoren (2 Punkte, etwa 3 Zeilen; die Lösung sagt gröber: Teilung der physischen Kerne, um mehrere Threads gleichzeitig in einem Kern auszuführen, Hyperthreading – das zählt ebenso). „Beschreiben“ der Aufgabe eines Cache (2 Punkte: schneller Zwischenspeicher, weniger Zugriffe auf ein langsameres Speichermedium).
- Muster 2: Eckdaten eines Laptops, ein Steckplatz frei, drei Riegelangebote mit Preis (andere Generation, gleiche Generation schneller, gleich). Kompatibilität je Angebot in einem knappen Satz „erklären“ (3 Punkte), dann eine Empfehlung wirtschaftlich „begründen“ (2 Punkte). Die IHK schreibt dabei „DDR4-3200MHz“; gemeint ist die Datenrate.
- Chipsatz, Formfaktor, PCIe, Netzteil und Grafik kamen noch nicht vor. Der Prüfungskatalog nennt Netzteil, Grafikkarte, Motherboard, Wirkungsgrad und Gütesiegel; zu erwarten sind „erklären“ und eine begründete Auswahl am Datenblatt, beim Netzteil mit Lastanteil.
- 2026H, Testprotokoll: Laut Spezifikation 32 GB RAM, angezeigt werden 16 GB. Zwei weitere Wege angeben, die Speichergröße zu prüfen, und beschreiben, wie man den defekten von zwei Riegeln findet (je 2 Punkte).

**Fallen:**
- Eine Aufgabe nur umschreiben: „Netzteil liefert Strom“ ohne die Umwandlung, „RAM speichert Daten“ ohne „laufende Programme“ – oder Arbeitsspeicher und SSD als „Speicher“ vermengen.
- Logische Prozessoren nur „virtuelle Kerne“ nennen, bei einer Hybrid-CPU alle Kerne verdoppeln oder den Cache mit dem Arbeitsspeicher gleichsetzen.
- Beim Riegel nur „passt“ schreiben, ohne den Wert, mit dem die Riegel laufen.
- Den Formfaktor nur als „Größe“ erklären, ohne Befestigungspunkte, Anschlusslage und Zweck.
- Glauben, ein Chipsatz lasse sich per Update um Anschlüsse erweitern.
- Zeigt ein älteres Blockschaltbild den Arbeitsspeicher am Chipsatz, nach dem Bild antworten; sonst gilt der heutige Stand.
- Integrierte und dedizierte Grafik nur als „schwächer/stärker“ unterscheiden statt nach Ort und Speicher.
- Netzteile nur nach Wattzahl vergleichen und den Formfaktor übersehen, den das Gehäuse verlangt.
- „Nicht an der Grenze betreiben“ nur mit „könnte ausfallen“ begründen statt mit dem Wirkungsgrad.
