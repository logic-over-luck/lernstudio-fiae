Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Modelle, Protokolle und Geräte › Leitungen, Standards und Internetanbindung

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

## Stoff: Leitungen, Standards und Internetanbindung

Ziel: Übertragungsmedien vergleichen, Kabelbezeichnungen deuten, ein passendes Kabel auswählen und einen Internetzugang ohne Festnetz nennen.

Das muss ich können:

### K1 – Kupfer, Lichtwellenleiter und WLAN im Vergleich (Stufe 2 Verstehen)
Du kannst Kupferkabel (Twisted Pair), Lichtwellenleiter und WLAN nach Geschwindigkeit, Reichweite und Störanfälligkeit vergleichen.

Erklärung:
- **Twisted Pair (Kupfer):** im LAN meist 1 oder 10 Gbit/s, höchstens **100 m** je Strecke, anfällig für elektromagnetische Störungen.
- **Lichtwellenleiter (Glasfaser):** sehr hohe Datenraten, Hunderte Meter bis viele **Kilometer**, **unempfindlich** gegen elektromagnetische Störungen – z. B. für die Verbindung zu einem Gebäude in 300 m Entfernung.
- **WLAN:** mobil, keine Kabel; aber meist geringere und **schwankende** Datenrate, begrenzte Reichweite, störanfällig, muss gesichert werden.

### K11 – Singlemode und Multimode im Vergleich (Stufe 2 Verstehen)
Du kannst Singlemode- und Multimode-Lichtwellenleiter unterscheiden: Singlemode (sehr dünner Kern, nur ein Lichtweg) überbrückt viele Kilometer, die Technik ist aber teurer; Multimode (dickerer Kern) ist günstiger und reicht für kürzere Strecken bis zu einigen hundert Metern, etwa im Gebäude oder auf dem Firmengelände.

Erklärung:
Lichtwellenleiter gibt es in zwei Grundarten:
- **Singlemode:** sehr dünner Kern (etwa 9 µm), das Licht läuft auf **einem** Weg. Reicht **viele Kilometer** weit, Sender und Module sind aber teurer.
- **Multimode:** dickerer Kern, das Licht läuft auf mehreren Wegen unterschiedlich lang. Das begrenzt die Strecke auf **einige hundert Meter**, dafür ist die Technik **günstiger**.
Auswahl: im Gebäude und auf dem Gelände meist Multimode, zwischen Standorten und beim Provider Singlemode.
Beispiel: Etagenverteiler im selben Haus → Multimode; zwei Firmengebäude 8 km auseinander → Singlemode.

### K2 – Kürzel der Kabelschirmung (Stufe 2 Verstehen)
Du kannst die Kürzel der Kabelschirmung erklären: U ungeschirmt, S Geflechtschirm, F Folienschirm, TP Twisted Pair.

Erklärung:
- **U:** ungeschirmt (unshielded)
- **S:** Geflechtschirm (screened)
- **F:** Folienschirm (foiled)
- **TP:** Twisted Pair – verdrillte Adernpaare
Vor dem Schrägstrich steht der **Gesamtschirm** um alle Paare, dahinter der Schirm **um jedes Paar**:
- **S/FTP:** Geflecht um alles, Folie um jedes Paar
- **U/UTP:** komplett ungeschirmt
- **F/UTP:** Folie um alles, Paare ungeschirmt

### K3 – Günstigstes Kabel nach Datenrate und Schirmung (Stufe 4 Beurteilen · in der Prüfung vorgegeben: Produktliste)
Du kannst aus mehreren Kabeln das günstigste auswählen, das geforderte Datenrate und Schirmung erfüllt.

Erklärung:
Zwei Schritte:
- **Aussortieren:** alle Kabel streichen, die die geforderte Datenrate oder Schirmung **nicht** erfüllen.
- **Auswählen:** von den übrigen das **billigste**.
Beispiel: Gefordert sind 10 Gbit/s und Paarschirmung. Cat 5e fällt wegen der Datenrate raus, U/UTP wegen der Schirmung. Von den übrigen Cat-6a- und Cat-7-Kabeln mit S/FTP nimmst du das günstigste.

### K4 – Sichtbare Schäden an Stecker oder Kabel (Stufe 2 Verstehen)
Du kannst erklären, warum ein sichtbarer Schaden an Stecker oder Kabel, zum Beispiel eine fehlende Rastnase, die Verbindung unterbricht.

Erklärung:
Ein Netzwerkkabel überträgt nur, wenn alle Kontakte sicher anliegen.
- **Fehlende Rastnase:** Der Stecker rastet nicht ein und rutscht leicht heraus – der Kontakt geht verloren.
- **Geknicktes oder gequetschtes Kabel:** Adern können brechen.
- **Beschädigter Kabelmantel (die Außenhülle aus Kunststoff), verbogene Kontakte:** keine saubere Verbindung.
Abhilfe: das Kabel tauschen.

### K5 – Internet ohne Festnetzanschluss (Stufe 1 Wiedergeben)
Du kannst Möglichkeiten nennen, an einem Ort ohne Festnetzanschluss ins Internet zu kommen: mobiler Router mit SIM-Karte oder Tethering über das Smartphone.

Erklärung:
- **Mobiler Router mit SIM-Karte:** baut über Mobilfunk eine Internetverbindung auf und stellt sie per WLAN bereit.
- **Tethering:** Das Smartphone teilt seine mobile Internetverbindung, z. B. als WLAN-Hotspot oder per USB.

### K6 – Kabelkategorien Cat 5e bis Cat 8 (Stufe 2 Verstehen)
Du kannst Kabelkategorien wie Cat 5e, Cat 6, Cat 6a, Cat 7 und Cat 8 nach ihrer Datenrate einordnen.

Erklärung:
- **Cat 5e:** bis 1 Gbit/s (nach Norm auch 2,5 Gbit/s)
- **Cat 6:** 1 Gbit/s, 10 Gbit/s nur auf kurzen Strecken bis etwa 55 m
- **Cat 6a:** bis 10 Gbit/s auf 100 m
- **Cat 7:** bis 10 Gbit/s, immer geschirmt (Angebote werben teils mit mehr)
- **Cat 8:** 25 bzw. 40 Gbit/s, nur bis 30 m, etwa im Rechenzentrum
Je höher die Kategorie, desto höher die mögliche Datenrate. Für ein neues Netz mit 10 Gbit/s also mindestens Cat 6a. Manche Bücher und Angebote nennen dafür Cat 7 – nach Norm reicht Cat 6a.

### K7 – WAN- und LAN-Seite des Routers (Stufe 2 Verstehen)
Du kannst erklären, dass ein Router für den Internetzugang eine WAN-Seite zum Provider und eine LAN-Seite zum lokalen Netz hat: Die WAN-Seite muss zur Anschlussart passen (DSL, Kabelnetz, Glasfaser oder Mobilfunk mit jeweils eigener Übertragungstechnik), an der LAN-Seite erweitern Switches das lokale Netz.

Erklärung:
Ein Router für den Internetzugang verbindet **zwei verschiedene Netze** mit unterschiedlicher Technik:
- **WAN-Seite (Wide Area Network):** die Leitung zum Provider. Jede Anschlussart nutzt ihre eigene Übertragungstechnik – deshalb gibt es DSL-, Kabel-, Glasfaser- und Mobilfunkrouter, oder ein passendes Modem bzw. einen Glasfaser-Netzabschluss davor.
- **LAN-Seite (Local Area Network):** Ethernet-Anschlüsse für das lokale Netz. Reichen die Ports nicht, hängt man einen **Switch** an.
Wechselt eine Firma die Anschlussart, wird deshalb meist nur der Router oder sein Modem getauscht; das LAN dahinter bleibt, wie es ist.
Beispiel: Ein Kabelrouter steckt mit dem Koaxialkabel in der Multimediadose, an seinen vier LAN-Ports hängt ein 24-Port-Switch für die Büros.

### K10 – PowerLAN als Anbindung eines Arbeitsplatzes (Stufe 4 Beurteilen)
Du kannst beurteilen, ob PowerLAN einen Arbeitsplatz ausreichend anbindet: Es nutzt die vorhandene Stromleitung und spart neue Kabel, erreicht aber je nach Leitungslänge, Zahl der Verteiler und Störungen im Stromnetz meist deutlich weniger Datenrate als ein Netzwerkkabel.

Erklärung:
PowerLAN (Powerline) überträgt Netzwerkdaten über die 230-V-Leitungen im Gebäude. Nötig sind mindestens zwei Adapter: einer in einer Steckdose nahe dem Router, einer am Arbeitsplatz.
- **Vorteil:** Räume ohne Netzwerkdose werden ohne neue Kabel und ohne Bauarbeiten angebunden.
- **Nachteil:** Die Datenrate auf der Packung ist ein theoretischer Höchstwert. Lange Leitungen, mehrere Verteiler und Störer im Stromnetz senken sie oft stark.
Beurteile nach dem Bedarf: Für E-Mail und Office im Nebenraum reicht PowerLAN meist; wer große Dateien bearbeitet, bekommt besser ein Netzwerkkabel.

### K12 – Lichtwege in Multimode- und Singlemode-Faser (Stufe 2 Verstehen)
Du kannst erklären, warum Multimode-Fasern kürzere Strecken begrenzen: Im dicken Kern läuft das Licht auf mehreren unterschiedlich langen Wegen, die dünne Singlemode-Faser (Kern etwa 9 µm) führt nur einen Lichtweg und reicht viele Kilometer; dazu kennst du die Klassen OM1 bis OM5 und OS1/OS2.

Erklärung:
In der dicken Multimode-Faser läuft das Licht auf mehreren Wegen unterschiedlich lang, das begrenzt die Strecke; die dünne Singlemode-Faser (Kern etwa 9 µm) führt nur einen Lichtweg und reicht deshalb viele Kilometer weit.
Klassen: Multimode **OM1 bis OM5** (je höher die Zahl, desto höhere Datenraten über längere Strecken), Singlemode **OS1 und OS2** (OS2 für sehr lange Strecken).

### K13 – Verdrillte Adernpaare und Schirmung (Stufe 4 Beurteilen)
Du kannst erklären, wie Twisted-Pair-Kabel Störungen abwehren: Durch das Verdrillen heben sich Störungen, die beide Adern eines Paares gleich treffen, und die Abstrahlung des Paares weitgehend auf; ein Schirm aus Folie oder Drahtgeflecht hält zusätzlich Störfelder ab.

Erklärung:
Verdrillte Adernpaare und Schirmung: Durch das Verdrillen heben sich Störungen, die beide Adern eines Paares gleich treffen, und die Abstrahlung des Paares weitgehend auf; ein Schirm aus Folie oder Geflecht hält zusätzlich Störfelder ab.
So beurteilst du es: Gibt es starke Störquellen (Maschinen, Motoren, Starkstromleitungen), nimmt man geschirmte Kabel, z. B. S/FTP; im normalen Büro reicht oft ein ungeschirmtes Kabel (U/UTP).

### K14 – Lichtwellenleiter und Totalreflexion (Stufe 2 Verstehen)
Du kannst das Prinzip des Lichtwellenleiters erklären: Das Licht läuft in einem Kern, den ein Mantel mit geringerer Brechzahl umgibt, und wird an dieser Grenze vollständig zurückgeworfen (Totalreflexion); so wird es mit geringer Dämpfung weit geführt, und weil Licht statt Strom übertragen wird, beeinflussen elektrische Störungen es nicht.

Erklärung:
Lichtwellenleiter und Totalreflexion: Das Licht läuft in einem Kern, der von einem Mantel mit geringerer Brechzahl (Maß dafür, wie stark ein Stoff Licht ablenkt) umgeben ist, und wird an dieser Grenze vollständig zurückgeworfen (Totalreflexion); so wird es mit sehr geringer Dämpfung (Signalverlust) über große Entfernungen geführt. Weil Licht statt Strom übertragen wird, beeinflussen elektrische Störungen es nicht.
Aufbau von innen nach außen: Kern, Mantel, Schutzhülle.

## Lehrnotiz: Leitungen, Standards und Internetanbindung

**Aufteilung:**
- Teil A – Kupferkabel: die drei Medien im Vergleich K1; Störungen abwehren K13; Aufdruck lesen K2, K6; passendes Kabel auswählen K3; Schäden K4
- Pause möglich nach Teil A.
- Teil B – Glasfaser: Lichtführung K14; die zwei Faserarten K11, K12
- Teil C – Internetzugang: Router mit zwei Seiten K7; ohne Festnetz K5; PowerLAN K10

**Schon geprüft:** In Prüfungen: K2 (2026H), K3 (2026H), K4 (2026H), K5 (2026H) · Noch nicht geprüft: K1, K6, K7, K10–K14

**Kerngedanken:**
- Die Anforderung an die Schirmung genau lesen: „geschirmt“ erfüllt jedes Kabel, bei dem vor oder hinter dem Schrägstrich S oder F steht. „Jedes Paar geschirmt“ verlangt einen Schirm hinter dem Schrägstrich (z. B. U/FTP, S/FTP); steht dort UTP, sind die Paare ungeschirmt.
- Bei der Kategorie zählen Datenrate und Streckenlänge zusammen. Eine höhere Kategorie erfüllt eine niedrigere Anforderung in der Regel mit, kostet aber mehr; gewählt wird das günstigste Kabel, das die Anforderung erfüllt.
- Das Wort „Mantel“ meint zwei verschiedene Dinge: beim Kupferkabel die äußere Kunststoffhülle, bei der Glasfaser die Glasschicht direkt um den Kern.
- Ein Urteil (PowerLAN, geschirmt oder ungeschirmt, Wahl des Mediums) besteht aus der Entscheidung, dem Grund aus der Lage des Kunden und der Bedingung, unter der es anders ausfiele. Hier geht es um Leitungen; die Standards der Anschlüsse (1000BASE-T, Wi-Fi) und die Auswahl der Geräte sind eigene Stichpunkte.

**Typische Missverständnisse:**
- Viele denken, verdrillt heiße geschirmt. Richtig ist: Das sind zwei verschiedene Maßnahmen; auch ein ungeschirmtes Kabel (U/UTP) hat verdrillte Paare.
- Viele denken, Multimode sei wegen „mehr“ die bessere Faser. Richtig ist: Gerade die mehreren Lichtwege sind der Grund für die kürzere Strecke.

**Fachwörter:**
- Twisted Pair: Kupferkabel mit paarweise verdrillten Adern
- Lichtwellenleiter: Glasfaser, überträgt Licht statt Strom
- Gesamtschirm: Schirm um alle Adernpaare zusammen
- Totalreflexion: Licht wird an der Grenze vollständig zurückgeworfen
- Dämpfung: Signalverlust auf der Strecke
- Singlemode / Multimode: Faser mit einem / mehreren Lichtwegen
- Tethering: Smartphone teilt seine mobile Internetverbindung
- WAN-Seite: Anschluss des Routers zum Provider

**So fragt die IHK:**
- Echte Aufgaben (2026H), Lösung nicht amtlich. Im Testprotokoll eines neuen PCs steht: „nicht mit dem Internet verbunden“.
- Sichtprüfung (K4), 3 Punkte, „beschreiben“: Foto zweier RJ45-Stecker eines Patchkabels, an denen die Rastnase fehlt. Verlangt ist der Zusammenhang mit der unterbrochenen Verbindung: Der Stecker rastet nicht ein, rutscht heraus, kein Kontakt auf Schicht 1.
- Kürzel (K2), 3 Punkte, „angeben“: Produkttabelle mit drei Kabeln (Cat 7, Cat 6a, Cat 5e; höchste Datenrate; S/FTP oder UTP; Preis). Bedeutung von S, FTP und UTP: Gesamtschirm aus Geflecht, Folienschirm je Adernpaar, ungeschirmt.
- Auswahl (K3, K6), 2 Punkte, „auswählen“: Das geschirmte Kabel soll durch ein gleichwertiges oder besseres ersetzt werden, gesucht ist das günstigste geeignete. Lösung: das geschirmte Cat-6a-Kabel – das ungeschirmte fällt weg, das Cat-7-Kabel ist teurer.
- Internet ohne Festnetz (K5), 2 Punkte, „nennen“: zwei Möglichkeiten, auf einer Baustelle ins Internet zu kommen. Lösung: Mobilfunk-Router mit SIM-Karte, Hotspot über das Smartphone.
- Zu Lichtwellenleitern und zum Vergleich der Medien gibt es keine echte Aufgabe; der Prüfungskatalog nennt Lichtwellenleiter, Ethernet- und WLAN-Standards sowie Leistungsparameter und Kosten marktgängiger Systeme.
- Die Anforderungen (Datenrate, Störquelle, Länge) stehen dabei meist in der Situation, nicht in der Frage.

**Fallen:**
- Teil A: Die 100 m als Grenze für das ganze Netz verstehen; sie gelten für jede einzelne Kupferstrecke.
- Teil A: WLAN als Ersatz für eine dauerhafte, schnelle Strecke zwischen zwei Gebäuden einplanen.
- Teil A: Kupfer nur nach Länge und Datenrate wählen und eine Störquelle am Kabelweg übersehen.
- Teil A: Als Begründung für ein geschirmtes Kabel nur „geschirmt ist besser“ schreiben, ohne zu sagen, was das Verdrillen leistet und was der Schirm zusätzlich.
- Teil A: Cat 7 als Mindestkategorie für 10 Gbit/s nennen, wie es in manchen Büchern und Angeboten steht; nach Norm reicht Cat 6a, und für die Prüfung zählt die Norm.
- Teil A: Das „beste“ Kabel wählen, weil die höhere Kategorie mehr könnte; für die gestellte Anforderung bringt sie nichts.
- Teil A: Ein Kabel wegen der Datenrate aussortieren, obwohl seine Kategorie genügt (Cat 5e reicht für 1 Gbit/s).
- Teil A: Beim Aussortieren den Grund weglassen; zu jedem gestrichenen Kabel gehört, welche Anforderung es nicht erfüllt.
- Teil A: Bei einem sichtbaren Schaden die Ursache in der Software suchen oder den Stecker mit Klebeband festmachen, statt das Kabel zu tauschen.
- Teil A: Zum Schaden nur „Kabel kaputt“ schreiben; verlangt ist die Kette vom Schaden über den Kontaktverlust zum Abbruch und die Abhilfe.
- Teil B: Den Mantel der Glasfaser mit der Schutzhülle aus Kunststoff gleichsetzen.
- Teil B: Das Prinzip des Lichtwellenleiters nur mit „Licht statt Strom“ erklären, ohne die Totalreflexion an der Grenze von Kern und Mantel, die das Licht im Kern hält; oder nur eine der beiden Folgen nennen (geringe Dämpfung durch die Totalreflexion, keine elektrischen Störungen, weil Licht statt Strom übertragen wird).
- Teil B: Die Wahl der Faserart nur mit „reicht weiter“ begründen, ohne die Lichtwege; die Klassen OM (Multimode) und OS (Singlemode) vertauschen.
- Teil C: Einen kleinen WLAN-Router nicht als Router mit WAN-Seite erkennen.
- Teil C: Nur „falscher Router“ schreiben, ohne zu sagen, welche Seite von der Anschlussart abhängt und welche immer gleich bleibt.
- Teil C: PowerLAN nur als „langsam“ ablehnen, ohne die Ursachen und ohne den Bedarf des Arbeitsplatzes.
