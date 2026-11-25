Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz › Technische Schutzmaßnahmen › Datensicherung und Verfügbarkeit: Backup-Verfahren, NAS

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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
Du kannst Image-Sicherung und dateibasierte Sicherung unterscheiden: Das Image ist ein Abbild eines Datenträgers samt Betriebssystem und Dateisystem (als sektorweises Image mit allen Datenblöcken, auch Resten gelöschter Dateien) und eignet sich, um ein System komplett wiederherzustellen; die dateibasierte Sicherung kopiert ausgewählte Dateien und Ordner und eignet sich, um einzelne Dateien zurückzuholen.

Erklärung:
- **Image-Backup:** Der ganze Datenträger wird blockweise kopiert, üblicherweise nur die belegten Blöcke; ein sektorweises Image kopiert alle Blöcke, egal was darin steht. Nach einem Plattendefekt spielt man das Image zurück und hat ein startfähiges System mit allen Programmen und Einstellungen. Nachteil: groß; einzelne Dateien herauszuholen ist umständlicher.
- **Dateibasierte Sicherung:** Nur ausgewählte Dateien und Ordner, z. B. die Projektdaten. Klein und flexibel, aber nach einem Totalausfall muss das System erst neu installiert werden.
Weil ein sektorweises Image auch Reste gelöschter Dateien enthält, nutzt man es in der **Forensik**, um Beweise zu sichern.
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

**Schon geprüft:** In Prüfungen: K2 (2021H, 2024F), K3 (2026H), K6 (2021H) · Noch nicht geprüft: K1, K4, K5, K7, K9–K11

**Kerngedanken:**
- Redundanz hilft gegen den Ausfall eines Geräts, eine Sicherung gegen Löschen, Fehler und Schadsoftware. Der Unterschied ist der ältere Stand: Ein Spiegel schreibt jede Änderung sofort auf beide Laufwerke, nur die Sicherung erlaubt die Rückkehr zu einem Stand von vorher.
- Dasselbe gilt für einen Ordner, der laufend synchronisiert wird: Er überträgt auch das Löschen und das Verschlüsseln und ist deshalb keine Sicherung, solange es keine älteren, unveränderbaren Stände gibt.
- Ändern sich jeden Tag andere Daten, wächst die differenzielle Sicherung von Tag zu Tag bis zur nächsten Vollsicherung, die inkrementelle bleibt etwa gleich groß. Dafür hängt bei inkrementell jede Sicherung an der davor: Fehlt ein Inkrement, ist der Stand danach nicht herstellbar.
- Eine Sicherung zu beurteilen heißt auch zu sagen, was an ihr gut ist. Schwachstellen nennt man nur, soweit die Situation sie hergibt; bei „beschreiben“ gehört zu jedem Risiko die Folge.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K4 – Dateizugriff auf ein NAS über Freigaben: (1) Ein NAS ist ein eigenständiges Gerät mit eigenem Betriebssystem, eigenen Festplatten und Netzwerkanschluss und hängt am Switch oder Router des lokalen Netzes. (2) Der Administrator richtet auf dem NAS Freigaben (freigegebene Ordner) und Benutzerkonten ein und legt je Freigabe fest, wer lesen oder schreiben darf. (3) Ein Client verbindet sich über ein Dateifreigabeprotokoll wie SMB oder NFS mit einer Freigabe und meldet sich mit einem Benutzerkonto an. (4) Das NAS prüft Anmeldung und Rechte und gewährt oder verweigert den Zugriff auf die Freigabe. (5) Der Client bindet die Freigabe als Netzlaufwerk ein; beim Öffnen oder Speichern liest oder schreibt das NAS die Datei auf seinen Festplatten. (6) Weil das NAS alle Anfragen selbst bearbeitet, arbeiten mehrere Geräte gleichzeitig mit demselben Datenbestand.

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
- 2026H: Als Sicherheitsmaßnahme zu einer Schutzbedarfstabelle nennt die nicht amtliche Lösung regelmäßige automatische Backups nach der 3-2-1-Regel (2 Punkte für zwei Maßnahmen). Aus zwei englischen Sätzen über Ausfallsicherheit waren die zwei genannten Lösungen auf Deutsch zu nennen (K3, 2 Punkte): verfügbare Datensicherungen und Redundanz.

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
