Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz › Technische Schutzmaßnahmen › Datensicherung und Verfügbarkeit: Backup-Verfahren, NAS

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

## Stoff: Datensicherung und Verfügbarkeit: Backup-Verfahren, NAS

Ziel: Sicherungsarten unterscheiden, eine Datensicherung zuverlässig planen und beurteilen und die Verfügbarkeit von Daten sichern.

Das muss ich können:

### K1 – Voll-, differenzielle und inkrementelle Sicherung (Stufe 3 Anwenden)
Du kannst Vollsicherung, differenzielle und inkrementelle Sicherung unterscheiden und bestimmen, welche Sicherungen du zum Wiederherstellen brauchst: bei differenzieller die letzte Vollsicherung und die letzte differenzielle, bei inkrementeller die Vollsicherung und alle Inkremente seitdem; inkrementell spart Speicher und Zeit beim Sichern, dauert aber beim Wiederherstellen länger.

Erklärung:
- **Vollsicherung:** sichert **alle** ausgewählten Daten.
- **Differenziell:** sichert alles, was sich **seit der letzten Vollsicherung** geändert hat.
- **Inkrementell:** sichert nur, was sich **seit der letzten Sicherung** (gleich welcher Art) geändert hat.
**Wiederherstellen:**
- differenziell → letzte **Vollsicherung** + **letzte differenzielle**
- inkrementell → letzte **Vollsicherung** + **alle Inkremente** seitdem, in der richtigen Reihenfolge
Beispiel: Vollsicherung Sonntag, Absturz Donnerstag. Differenziell: Sonntag + Mittwoch. Inkrementell: Sonntag + Montag + Dienstag + Mittwoch.
Inkrementell spart beim Sichern Zeit und Speicher, das Wiederherstellen dauert aber am längsten.

### K2 – Merkmale einer zuverlässigen Sicherung (Stufe 1 Wiedergeben)
Du kannst Punkte nennen, die eine Sicherung zuverlässig machen: regelmäßig sichern, die Sicherung getrennt vom Rechner lagern, Datenträger verschlüsseln, die Wiederherstellung testen.

Erklärung:
- **Regelmäßig** sichern – je nachdem, wie viel Datenverlust verkraftbar ist.
- **Getrennt vom Rechner** lagern – sonst treffen Brand, Diebstahl, Überspannung oder Schadsoftware beides.
- **Datenträger verschlüsseln** – falls er verloren geht.
- **Datenträger reihum wechseln** (Generationenprinzip) – so bleiben ältere Stände erhalten.
- **Wiederherstellung testen** – eine Sicherung, die sich nicht zurückspielen lässt, ist wertlos.

### K3 – Verfügbarkeit durch Datensicherung und Redundanz (Stufe 1 Wiedergeben)
Du kannst Lösungen nennen, die Daten auch bei einem Ausfall verfügbar halten: verfügbare Datensicherungen und Redundanz.

Erklärung:
- **Verfügbare Datensicherungen:** Nach einem Ausfall lassen sich die Daten wiederherstellen.
- **Redundanz:** Daten werden mehrfach gespeichert, sodass beim Ausfall eines Speichers ein anderer übernimmt.
Wichtig: Redundanz **ersetzt keine Sicherung**. Löscht jemand eine Datei oder verschlüsselt Ransomware sie, passiert das sofort auf allen redundanten Kopien.

### K4 – NAS als Netzwerkspeicher (Stufe 2 Verstehen)
Du kannst erklären, was ein NAS ist: ein Speicher im Netzwerk, auf den mehrere Geräte zugreifen.

Erklärung:
Ein NAS (Network Attached Storage) ist ein **Speicher im Netzwerk**, auf den **mehrere Geräte** zugreifen.
Typische Nutzung: gemeinsame Dateiablage im Büro oder Ziel für die Datensicherung der Arbeitsplätze.

### K5 – 3-2-1-Regel der Datensicherung (Stufe 2 Verstehen)
Du kannst die 3-2-1-Regel erklären: drei Kopien, zwei verschiedene Medien, eine außer Haus; mindestens eine Sicherung wird zusätzlich offline oder unveränderbar aufbewahrt, damit Schadsoftware sie nicht mitverschlüsseln kann.

Erklärung:
- **3** Kopien der Daten (das Original und zwei Sicherungen)
- auf **2** verschiedenen Medien (z. B. NAS und externe Festplatte)
- **1** Kopie **außer Haus** (z. B. in der Cloud oder im Bankschließfach)
So überleben die Daten auch einen Brand oder Einbruch.
Zusätzlich: Mindestens eine Sicherung **offline** (getrennt) oder **unveränderbar** aufbewahren – sonst verschlüsselt Ransomware sie gleich mit.

### K6 – Bewertung einer bestehenden Datensicherung (Stufe 4 Beurteilen)
Du kannst eine bestehende Datensicherung beurteilen, zum Beispiel ob sie räumlich getrennt und oft genug erfolgt.

Erklärung:
Prüfe die bestehende Sicherung gegen die Regeln:
- **Zu selten?** Wird nur einmal pro Woche gesichert, kann im ungünstigsten Fall die Arbeit einer ganzen Woche verloren gehen.
- **Nicht räumlich getrennt?** Liegt die Sicherung neben dem Server, trifft ein Brand beides; liegt sie sogar auf derselben Festplatte (andere Partition), geht sie schon bei einem Plattendefekt mit verloren.
- **Dauerhaft angeschlossen?** Ransomware verschlüsselt dann auch die Sicherung.
- **Nie getestet?** Ob die Wiederherstellung klappt, ist unklar.
Nenne jede Schwachstelle mit ihrer Folge und einer Verbesserung.

### K7 – Generationenprinzip bei Sicherungsdatenträgern (Stufe 2 Verstehen)
Du kannst das Generationenprinzip erklären: Mehrere nummerierte Datenträger werden reihum genutzt, damit ältere Sicherungsstände erhalten bleiben; beim Großvater-Vater-Sohn-Prinzip gibt es Tagessicherungen (Sohn), Wochensicherungen (Vater) und Monatssicherungen (Großvater), die jeweils nach ihrem Zyklus wieder überschrieben werden.

Erklärung:
Beim Generationenprinzip werden **mehrere nummerierte Datenträger reihum** genutzt – z. B. fünf Festplatten für Montag bis Freitag.
Dadurch bleiben **ältere Sicherungsstände erhalten**. Wird ein Fehler erst nach Tagen bemerkt (z. B. eine versehentlich gelöschte Datei), gibt es noch eine Sicherung von vor dem Fehler.
Bekanntes Schema: Großvater – Vater – Sohn. Tagessicherungen (Sohn) werden jede Woche wieder überschrieben, Wochensicherungen (Vater) erst nach mehreren Wochen, Monatssicherungen (Großvater) erst nach Monaten.

### K9 – Sicherungsziel passend zur Betriebsgröße (Stufe 4 Beurteilen)
Du kannst ein Sicherungsziel passend zum Betrieb auswählen: ein weit entferntes zweites Rechenzentrum für große Betriebe mit mehreren Standorten, Bänder für einen Standort mit großen Datenmengen, Cloud-Backup für jede Größe – bei der Cloud geprüft nach Verfügbarkeit, Wiederherstellungsdauer, Datenstandort und geltendem Recht sowie Schutz vor fremdem Zugriff.

Erklärung:
Die Sicherung muss **getrennt** vom Original liegen, damit Brand, Wasser oder Ransomware nicht beides treffen.
- **Zweites Rechenzentrum** an einem entfernten Standort: für große Betriebe; der Abstand muss so groß sein, dass ein regionales Ereignis wie Hochwasser nicht beide trifft.
- **Band:** günstig für große Datenmengen, lässt sich offline und außer Haus lagern.
- **Cloud-Backup:** für jede Betriebsgröße, kein eigener zweiter Standort nötig.
Vor einem Cloud-Backup prüfen: Wie verfügbar ist der Dienst, was passiert bei seinem Ausfall, wie lange dauert die Wiederherstellung großer Datenmengen, wo liegen die Daten (EU, DSGVO), und sind sie vor Zugriff geschützt (z. B. vor dem Hochladen selbst verschlüsseln)?

### K10 – Image-Sicherung gegen dateibasierte Sicherung (Stufe 2 Verstehen)
Du kannst Image-Sicherung und dateibasierte Sicherung unterscheiden: Das Image ist ein Abbild aller Datenblöcke eines Datenträgers samt Betriebssystem, Dateisystem und Resten gelöschter Dateien und eignet sich, um ein System komplett wiederherzustellen; die dateibasierte Sicherung kopiert ausgewählte Dateien und Ordner und eignet sich, um einzelne Dateien zurückzuholen.

Erklärung:
- **Image-Backup:** Der ganze Datenträger wird blockweise kopiert, egal was darin steht. Nach einem Plattendefekt spielt man das Image zurück und hat ein startfähiges System mit allen Programmen und Einstellungen. Nachteil: groß; einzelne Dateien herauszuholen ist umständlicher.
- **Dateibasierte Sicherung:** Nur ausgewählte Dateien und Ordner, z. B. die Projektdaten. Klein und flexibel, aber nach einem Totalausfall muss das System erst neu installiert werden.
Weil das Image auch Reste gelöschter Dateien enthält, nutzt man es in der **Forensik**, um Beweise zu sichern.
In der Praxis kombiniert man oft: ein Image des Systems und regelmäßige Dateisicherungen der Daten.

### K11 – USB-Speicher am Router statt NAS (Stufe 3 Anwenden)
Du kannst begründen, warum ein USB-Speicher am Router im Betrieb kein NAS ersetzt: kaum Rechteverwaltung, keine Redundanz wie bei einem NAS mit mehreren gespiegelten Laufwerken und für viele gleichzeitige Zugriffe zu langsam.

Erklärung:
Ein USB-Speicher am Router ersetzt für einen Betrieb kein NAS: kaum Rechteverwaltung, keine Redundanz und für viele gleichzeitige Zugriffe zu langsam.
Beispiel: Personalakten sollen nur für die Leitung lesbar sein – am USB-Speicher des Routers lässt sich das kaum einstellen. Fällt der eine Speicher aus, sind alle Daten weg, während ein NAS mit zwei gespiegelten Laufwerken weiterläuft.

## Lehrnotiz: Datensicherung und Verfügbarkeit: Backup-Verfahren, NAS

**Aufteilung:**
- Teil A – Speicher und Verfügbarkeit: NAS K4; Redundanz und Datensicherung K3; USB-Speicher am Router statt NAS K11
- Teil B – Was gesichert wird: Sicherungsarten K1; Image oder einzelne Dateien K10
- Pause möglich nach Teil B.
- Teil C – Sicherungen aufbewahren: Generationenprinzip K7; 3-2-1-Regel K5; zuverlässige Sicherung K2; Sicherungsziel K9
- Teil D – Eine bestehende Sicherung beurteilen: K6, hier kommt alles Vorige zusammen

**Schon geprüft:** In Prüfungen: K2 (2021H, 2024F), K3 (2026H), K5 (2026H), K6 (2021H), K7 (2024F) · Noch nicht geprüft: K1, K4, K9–K11

**Kerngedanken:**
- Redundanz hilft gegen den Ausfall eines Geräts, eine Sicherung gegen Löschen, Fehler und Schadsoftware. Der Unterschied ist der ältere Stand: Ein Spiegel schreibt jede Änderung sofort auf beide Laufwerke, nur die Sicherung erlaubt die Rückkehr zu einem Stand von vorher.
- Dasselbe gilt für einen Ordner, der laufend synchronisiert wird: Er überträgt auch das Löschen und das Verschlüsseln und ist deshalb keine Sicherung, solange es keine älteren, unveränderbaren Stände gibt.
- Ändern sich jeden Tag andere Daten, wächst die differenzielle Sicherung von Tag zu Tag bis zur nächsten Vollsicherung, die inkrementelle bleibt etwa gleich groß. Dafür hängt bei inkrementell jede Sicherung an der davor: Fehlt ein Inkrement, ist der Stand danach nicht herstellbar.
- Eine Sicherung zu beurteilen heißt auch zu sagen, was an ihr gut ist. Schwachstellen nennt man nur, soweit die Situation sie hergibt; bei „beschreiben“ gehört zu jedem Risiko die Folge.

**Typische Missverständnisse:**
- Viele denken, wer jeden Abend sichert, könne jeden Fehler rückgängig machen. Richtig ist: Wird immer derselbe Datenträger überschrieben, enthält er nur den letzten Stand – einen Fehler, der erst nach Tagen auffällt, also mit.
- Viele denken, ein Image sei dasselbe wie eine Vollsicherung. Richtig ist: „Voll, differenziell, inkrementell“ sagt, wie viel gesichert wird; „Image oder dateibasiert“ sagt, ob der Datenträger blockweise oder Datei für Datei kopiert wird. Auch ein Image kann inkrementell fortgeschrieben werden.

**Fachwörter:**
- Vollsicherung: sichert alle ausgewählten Daten
- differenzielle Sicherung: Änderungen seit der letzten Vollsicherung
- inkrementelle Sicherung: Änderungen seit der letzten Sicherung
- Redundanz: Daten mehrfach gespeichert, Ersatz übernimmt
- NAS: Speicher im Netzwerk für mehrere Geräte
- Generationenprinzip: Datenträger reihum, ältere Stände bleiben
- 3-2-1-Regel: drei Kopien, zwei Medien, eine außer Haus
- Image: blockweises Abbild eines ganzen Datenträgers

**So fragt die IHK:**
- Operatoren: beschreiben, unterbreiten, nennen – kurz, aber mit Bezug zur Situation.
- 2021H, Arztpraxis: Die Abrechnungssoftware sichert einmal in der Woche beim Herunterfahren auf eine eigene Partition derselben Festplatte. Verlangt waren zwei Risiken (2 Punkte; gezählt: keine zeitliche und räumliche Trennung, wöchentlicher Zyklus zu lang) und ein konkreter Verbesserungsvorschlag (2 Punkte; externe Sicherung, mindestens täglich, Medium abmelden und an einem anderen Ort verwahren).
- 2024F, Laptop im Außendienst ohne stabile Internetverbindung, laut Richtlinie Tagesvollsicherungen auf mehrere nummerierte externe Festplatten: drei Punkte nennen, die die Sicherung zuverlässig machen. Gezählt wurden: verschlüsseln, feste Reihenfolge der Datenträger und danach wieder von vorn (Generationenprinzip); andere Lösungen waren zulässig.
- Zu Sicherungsarten, NAS, Image und Sicherungsziel gibt es keine echte Aufgabe; der Prüfungskatalog nennt Backup-Verfahren und die Sicherung der Verfügbarkeit, z. B. NAS.

**Fallen:**
- Teil A: gegen den USB-Speicher am Router nur einen Grund nennen oder die Gründe nicht auf den Betrieb beziehen (wer darf was sehen, was passiert bei einem Defekt, wie viele greifen gleichzeitig zu).
- Teil B: bei inkrementell nur das letzte Inkrement nennen oder bei differenziell alle differenziellen Sicherungen.
- Teil B: übersehen, dass alles, was nach der letzten Sicherung geändert wurde, in keiner Sicherung steckt.
- Teil B: ein Verfahren empfehlen, ohne seinen Nachteil zu nennen.
- Teil B: Image oder dateibasiert zuordnen, ohne den Unterschied zu nennen, der die Wahl begründet (ganzer Datenträger mit System oder nur ausgewählte Dateien).
- Teil C: einen einzelnen Datenträger, der jedes Mal überschrieben wird, als Generationenprinzip bezeichnen; es braucht mehrere Datenträger in fester Reihenfolge.
- Teil C: zum Zurückholen eine Tagessicherung wählen, die erst nach dem Fehler entstanden ist – sie enthält den Fehler schon. Gibt es keine Tagessicherung von vor dem Fehler mehr, weil sie inzwischen überschrieben wurde, nimmt man die jüngste Wochen- oder Monatssicherung von vor dem Fehler.
- Teil C: das zweite Laufwerk eines Spiegels als Kopie im Sinn der 3-2-1-Regel zählen; es ist dasselbe Gerät am selben Ort und spiegelt jeden Fehler sofort.
- Teil C: eine dauerhaft angeschlossene Festplatte als „außer Haus“ oder „offline“ werten.
- Teil C: beim zweiten Rechenzentrum eine feste Kilometerzahl lernen. Die Angaben unterscheiden sich je nach Quelle; es zählt das Prinzip aus dem Stoff.
- Teil C: ein Sicherungsziel wählen, ohne es mit Standorten und Datenmenge des Betriebs zu begründen; bei sehr großen Datenmengen in der Cloud die Dauer der Wiederherstellung vergessen.
- Teil D: nur „unsicher“ schreiben oder als Verbesserung nur „besser sichern“; verlangt ist etwas Konkretes (wie oft, wohin, was nach der Sicherung mit dem Datenträger geschieht).
- Teil D: eine Sicherung auf demselben Datenträger wie das Original – etwa auf einer anderen Partition – als getrennt ansehen.
