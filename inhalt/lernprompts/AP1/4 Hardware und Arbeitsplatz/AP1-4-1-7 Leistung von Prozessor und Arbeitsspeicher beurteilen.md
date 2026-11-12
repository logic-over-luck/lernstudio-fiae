Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Geräte und Komponenten › Leistung von Prozessor und Arbeitsspeicher beurteilen

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

## Stoff: Leistung von Prozessor und Arbeitsspeicher beurteilen

Ziel: Takt, Kerne, Turbo und TDP deuten, Engpässe begründen, Leistung über Benchmarks vergleichen und Arbeitsspeicher nach Menge, Bauform und ECC auswählen.

Das muss ich können:

### K1 – Mehr Kerne statt mehr Takt (Stufe 2 Verstehen)
Du kannst erklären, warum mehr Prozessorleistung heute über mehr Kerne statt über mehr Takt kommt: Der Takt gibt den Rhythmus vor, in dem Befehle abgearbeitet werden (3,5 GHz = 3,5 Milliarden Takte je Sekunde), doch ein höherer Takt treibt Energiebedarf, Wärme und Lüfterlärm stark nach oben, sodass er bei etwa 5 bis 6 GHz an Grenzen stößt.

Erklärung:
Ein **Taktgeber** gibt den Rhythmus vor; je Takt erledigt der Prozessor einen Arbeitsschritt. Die Taktfrequenz ist deshalb eine Kenngröße – aber nicht die einzige: Kerne, Cache und Architektur zählen genauso, ein neuerer Prozessor schafft je Takt mehr.
Den Takt immer weiter zu erhöhen lohnt kaum: Energiebedarf und Abwärme steigen stark, Kühlung und Lüfterlärm werden zum Problem. Selbst im Turbo erreichen aktuelle Desktop-Prozessoren nur etwa 5 bis 6 GHz.
Darum wird Leistung heute durch **Parallelisierung** gewonnen: mehr Kerne, die gleichzeitig arbeiten.
Beispiel: Zwei Prozessoren mit 3,5 GHz können sehr unterschiedlich schnell sein – einer hat 4, der andere 12 Kerne.

### K2 – Kernzahl für einen Arbeitsplatz (Stufe 4 Beurteilen)
Du kannst beurteilen, wie viele Kerne ein Arbeitsplatz braucht: Mehr Kerne und Threads beschleunigen nur Software, die ihre Arbeit parallel aufteilt; für Büro und Kommunikation reichen wenige Kerne, für Videoschnitt, 3D-Rendering oder CAD lohnen sich viele (etwa 8 und mehr).

Erklärung:
Ein Kern arbeitet einen **Thread** (Ausführungsstrang) ab, mit SMT bzw. Hyper-Threading zwei (nicht bei Effizienzkernen und neueren Intel-Prozessoren ohne Hyper-Threading). Ein Programm, das nur einen Thread startet, nutzt nur einen Kern – die übrigen langweilen sich.
Darum: erst fragen, **welche Software** läuft.
- Textverarbeitung, E-Mail, Browser, Videokonferenz: etwa 4 Kerne genügen
- Videoschnitt, 3D-Rendering, CAD, Kompilieren großer Projekte, professionelle Bild- und Audiobearbeitung: 8 und mehr Kerne, weil diese Programme ihre Arbeit gut aufteilen
Beispiel: Für den Empfang ist ein 16-Kern-Prozessor rausgeworfenes Geld, für den Videoschnitt spart er jeden Tag Wartezeit.

### K3 – TDP und Turbo-Takt (Stufe 2 Verstehen)
Du kannst den Zusammenhang von TDP und Turbo-Takt erklären: Die TDP gibt die Wärmeleistung an, für die die Kühlung ausgelegt sein muss (der Kühler braucht Reserve; Intel nennt dafür seit der 12. Core-Generation eine Basis- und eine maximale Turbo-Leistung); solange Leistungsaufnahme und Temperatur darunter bleiben, takten einzelne Kerne automatisch höher, wenn eine Anwendung nicht alle Kerne braucht.

Erklärung:
- **TDP (Thermal Design Power):** die Wärme, die die Kühlung dauerhaft abführen können muss. Der Kühler – Luft, Wasser oder geschlossene All-in-one-Wasserkühlung – sollte deutlich mehr schaffen, als die TDP angibt. Intel nennt seit der 12. Core-Generation statt der TDP eine **Basis-** und eine **maximale Turbo-Leistung**.
- **Turbo-Takt:** Nutzt ein Programm nur wenige Kerne, bleibt Spielraum bei Strom und Wärme. Der Prozessor taktet diese Kerne dann von selbst höher, bis eine Grenze für Leistung oder Temperatur erreicht ist.
Folge: Ein schwacher Kühler kostet Leistung, weil der Prozessor den Turbo früher drosselt.
Beispiel: Ein Notebook wird bei langer Last heiß und langsamer – es nimmt den Turbo zurück, um die Temperatur zu halten.

### K4 – Engpass: das langsamste Teil bremst (Stufe 4 Beurteilen)
Du kannst begründen, warum ein schneller Prozessor allein wenig bringt: Das langsamste angebundene Teil – etwa ein langsamer Datenträger, zu wenig Arbeitsspeicher oder ein schwacher Chipsatz – bremst das ganze System, deshalb müssen Prozessor, Chipsatz, Arbeitsspeicher und Datenträger zueinander passen.

Erklärung:
Ein Rechner ist wie eine Kette: Das **schwächste Glied** bestimmt das Tempo (Engpass).
- Wartet der Prozessor auf eine langsame HDD, nützt ihm sein hoher Takt nichts.
- Ist der Arbeitsspeicher voll, lagert das System aus und wird zäh.
- Bietet der Chipsatz zu wenig schnelle Anbindungen, bremsen die Laufwerke.
Darum stellt man ein System **ausgewogen** zusammen und rüstet gezielt dort auf, wo der Engpass liegt.
Beispiel: Ein Büro-PC mit neuem Prozessor, aber alter HDD startet immer noch langsam – eine SSD bringt hier mehr als ein noch schnellerer Prozessor.

### K5 – Benchmark als Leistungsvergleich (Stufe 2 Verstehen)
Du kannst erklären, wie die Leistung von Systemen vergleichbar wird: Ein Benchmark ist ein standardisierter Test, dessen Ergebnis man mit dem gleichwertiger Produkte vergleicht – aussagekräftiger als Datenblattwerte wie Takt oder Kernzahl allein.

Erklärung:
Datenblattwerte wie Takt oder Kernzahl sagen wenig über die echte Leistung. Vergleichbar wird sie durch **gleiche Tests unter gleichen Bedingungen**.
- **Benchmark:** standardisierte Aufgabe, Ergebnis als Punktzahl oder Zeit – vergleichbar mit anderen Geräten derselben Klasse
Beispiel: Zwei Notebook-Angebote vergleichst du über denselben Benchmark statt über die GHz-Angabe.

### K6 – Zu wenig Arbeitsspeicher und Auslagerung (Stufe 4 Beurteilen)
Du kannst begründen, warum zu wenig Arbeitsspeicher ein System ausbremst und was dagegen hilft: Das Betriebssystem lagert Speicherinhalte auf den viel langsameren Datenträger aus; mehr Arbeitsspeicher beseitigt die Ursache, eine SSD statt HDD macht das Auslagern nur schneller.

Erklärung:
Reicht der Arbeitsspeicher nicht für alle laufenden Programme, schiebt das Betriebssystem gerade nicht gebrauchte Inhalte in eine **Auslagerungsdatei** auf dem Datenträger und holt sie bei Bedarf zurück. Der Datenträger ist aber um Größenordnungen langsamer als RAM – das System stockt.
Abwägung:
- **mehr RAM:** beseitigt das Auslagern – die richtige Lösung, wenn Steckplätze frei sind und der Speicher nicht verlötet ist
- **SSD statt HDD:** Auslagern und Programmstart werden schneller, das Grundproblem bleibt
Beispiel: Ein Notebook mit 8 GiB wird bei Browser, Videokonferenz und Tabellenkalkulation zäh; der Task-Manager zeigt fast vollen Speicher – Aufrüsten auf 16 GiB hilft.

### K7 – Bauformen von Arbeitsspeicher (Stufe 2 Verstehen)
Du kannst Bauformen von Arbeitsspeicher unterscheiden: DIMM im Desktop-PC, kürzere SO-DIMM im Notebook und Mini-PC und fest verlöteter Speicher, der sich nicht aufrüsten lässt.

Erklärung:
Ob ein Riegel passt, entscheidet neben der DDR-Generation die **Bauform**:
- **DIMM** (ungepuffert, UDIMM – ohne das Register der Server-Module, siehe K9): lange Module im Desktop-PC
- **SO-DIMM:** kurze Module für Notebooks und Mini-PCs
- **verlötet:** fest auf der Platine, vor allem in flachen Notebooks – kein Aufrüsten möglich
Außerdem begrenzt die Zahl der **Steckplätze** den Ausbau.
Beispiel: Für ein dünnes Notebook mit verlötetem Speicher musst du die Größe gleich beim Kauf ausreichend wählen.

### K8 – DDR-Datenrate in MT/s und Latenz (Stufe 2 Verstehen)
Du kannst die Datenrate von DDR-Speicher in MT/s erklären (zwei Transfers je Takt, DDR5-4800 = 4.800 Millionen Transfers je Sekunde) und die Latenz als Wartezeit bis zur Antwort, die eine höhere Datenrate teilweise ausgleichen kann.

Erklärung:
Die Datenrate von DDR-Speicher wird in MT/s angegeben (DDR überträgt zweimal je Takt, DDR5-4800 = 4.800 Millionen Transfers je Sekunde); die Latenz ist die Wartezeit bis zur Antwort, eine höhere Datenrate kann eine etwas höhere Latenz ausgleichen.
Beispiel: DDR5-4800 mit CL40 und DDR5-6000 mit CL48 – die CL-Zahl (CAS-Latenz: Wartezeit in Takten) ist bei 6000 höher, die tatsächliche Wartezeit aber fast gleich (CL ÷ echter Takt, der die halbe Datenrate ist: 40 ÷ 2.400 MHz ≈ 16,7 ns, 48 ÷ 3.000 MHz = 16 ns). Der schnellere Riegel bringt also mehr Datenrate bei kaum anderer Wartezeit.

### K9 – ECC-Speicher und RDIMM (Stufe 4 Beurteilen)
Du kannst ECC-Arbeitsspeicher erklären: Er erkennt und korrigiert einzelne Bitfehler im Betrieb, braucht Unterstützung durch Prozessor und Mainboard und steckt vor allem in Servern und Workstations, dort oft als registriertes Modul (RDIMM).

Erklärung:
ECC-Arbeitsspeicher erkennt und korrigiert einzelne Bitfehler selbst während des Betriebs; er ist teurer, braucht Unterstützung durch Prozessor und Mainboard und steckt deshalb vor allem in Servern und Workstations, dort oft als registriertes Modul (RDIMM: ein Register auf dem Riegel entlastet den Speichercontroller, so sind mehr Riegel je Kanal möglich).
Beispiel für ein Urteil: Für einen Datenbankserver lohnt sich ECC, weil ein unbemerkter Bitfehler Daten verfälschen kann. Für einen Büro-PC meist nicht: Prozessor und Mainboard unterstützen es oft gar nicht, und der Speicher ist teurer.

## Lehrnotiz: Leistung von Prozessor und Arbeitsspeicher beurteilen

**Aufteilung:**
- Teil A – Prozessor: Takt und der Weg zu mehr Kernen K1; Kernzahl für einen Arbeitsplatz K2; TDP und Turbo-Takt K3; Benchmark K5
- Teil B – das System als Ganzes: Engpass K4; zu wenig Arbeitsspeicher K6
- Pause möglich nach Teil B.
- Teil C – Arbeitsspeicher auswählen: Bauformen K7; Datenrate und Latenz K8; ECC K9

**Schon geprüft:** Noch nicht geprüft: K1–K9

**Kerngedanken:**
- Die Leitfrage lautet immer: Was bremst hier, und welche Software läuft? Ein Urteil nennt die Ursache aus den Angaben der Aufgabe, die Maßnahme genau dort und eine Bedingung (etwa: nur wenn die Software parallel arbeitet, nur wenn ein Steckplatz frei ist).
- Auslagern erkennt man an einem Muster: Arbeitsspeicher fast voll, Datenträger ständig aktiv, Prozessor nicht ausgelastet.
- Bei DDR-Speicher ist der echte Takt die halbe Datenrate. Die Wartezeit in Nanosekunden ergibt sich aus der Latenzzahl geteilt durch diesen Takt in MHz, mal 1.000. Die Latenzzahl allein ist nur bei gleicher Datenrate vergleichbar.
- Der Stichpunkt braucht Wissen aus Nachbarthemen, das an der jeweiligen Stelle kurz aufgefrischt werden sollte: Thread und SMT, die Aufgabe des Chipsatzes, die Regel zur DDR-Generation.

**Typische Missverständnisse:**
- Viele denken, die TDP sei der Stromverbrauch des PCs oder ein Höchstwert. Richtig ist: Sie ist die Auslegungsgröße für die Kühlung.
- Viele denken, mehr Kerne seien immer besser. Richtig ist: Sie nützen nur Software, die parallel arbeitet; diese Bedingung gehört in jede Begründung.

**Fachwörter:**
- Parallelisierung: mehrere Kerne arbeiten gleichzeitig
- TDP: Wärmeleistung, die die Kühlung abführen muss
- Engpass: langsamstes Teil, bremst das System
- Benchmark: standardisierter Test zum Leistungsvergleich
- Auslagerungsdatei: Speicherinhalte, auf den Datenträger verschoben
- ECC: erkennt und korrigiert einzelne Bitfehler

**So fragt die IHK:**
- Es gibt keine echte Prüfungsaufgabe. Der Prüfungskatalog verlangt, die Leistungsfähigkeit von IT-Systemen anhand von Kenngrößen (CPU, RAM, Datenspeicher) zu beurteilen, Hardware bedarfsgerecht auszuwählen und Angebote qualitativ zu vergleichen.
- Zu erwarten nach dem Muster benachbarter Hardware-Aufgaben: Material aus Datenblättern, Angeboten oder einem Task-Manager-Ausschnitt; Operatoren „erläutern“, „beurteilen“, „begründen“, „entscheiden“ mit 2–4 Punkten je Teilaufgabe. Punkte gibt es für die Begründung aus dem Material, nicht für Schlagworte wie „mehr GHz“.

**Fallen:**
- Teil A: Beim Takt nur die Grenze nennen, ohne den Grund und ohne zu sagen, woher die Mehrleistung stattdessen kommt.
- Teil A: Den Zusammenhang zwischen Kühler und Turbo weglassen.
- Teil A: Punktzahlen aus verschiedenen Benchmarks oder von Geräten verschiedener Klassen nebeneinanderstellen.
- Teil B: Nach dem Bauteil mit der eindrucksvollsten Zahl aufrüsten statt nach dem Engpass, oder nur „Festplatte zu langsam“ schreiben, ohne Prinzip und Rat.
- Teil B: Im Task-Manager nur auf den Prozessor schauen und den vollen Arbeitsspeicher übersehen.
- Teil B: Die SSD als gleichwertige Lösung neben mehr Arbeitsspeicher stellen.
- Teil C: Für ein Notebook oder einen Mini-PC ein DIMM-Modul vorsehen; es passt mechanisch nicht.
- Teil C: Die „MHz“-Angabe im Datenblatt für den echten Takt halten oder eine höhere Latenz automatisch als schlechter werten.
- Teil C: ECC empfehlen, ohne zu prüfen, ob Prozessor und Mainboard es unterstützen.
