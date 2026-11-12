Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Entwicklungsumgebung und Werkzeuge › Programmiersprachen und Werkzeuge › Versionsverwaltung im Entwicklungsteam

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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

## Stoff: Versionsverwaltung im Entwicklungsteam

Ziel: Zweck der Versionsverwaltung erklären, ihren Einsatz im Team begründen und sie zum Beheben von Fehlern nutzen.

Das muss ich können:

### K1 – Versionsverwaltung: Zweck und Grundfunktionen (Stufe 2 Verstehen)
Du kannst erklären, wozu eine Versionsverwaltung dient (Änderungen nachvollziehen, frühere Stände wiederherstellen, parallel am selben Code arbeiten), und ihre Grundfunktionen in ihrem Einsatz beschreiben: Commit (Änderung mit Beschreibung festhalten), Branch (Entwicklungszweig), Merge (Zweige zusammenführen), Pull und Push (Abgleich des lokalen Repositorys mit einem entfernten, meist dem gemeinsamen Remote-Repository des Teams).

Erklärung:
Zweck:
- jede Änderung **nachvollziehen** (wer, was, wann, warum)
- frühere Stände **wiederherstellen**
- **parallel** am selben Code arbeiten
Grundbegriffe:
- **Commit:** Änderung mit Beschreibung festhalten
- **Branch:** eigener Entwicklungszweig
- **Merge:** Zweige zusammenführen
- **Pull / Push:** Stand vom gemeinsamen Remote-Repository holen / dorthin senden (Git ist verteilt: jeder Klon, also jede vollständige Kopie auf einem Rechner, enthält das ganze Repository, die Ablage des Codes mit allen früheren Ständen)
Einsatz im Team: Eine dringende Korrektur entsteht in einem eigenen Branch, wird nach dem Commit per Merge in den Hauptzweig übernommen und per Push ins Team-Repository gesendet; die anderen holen sie mit Pull. Eine halbfertige Funktion bleibt so lange in ihrem eigenen Branch.

### K2 – Versionsverwaltung bei mehreren Entwicklern (Stufe 4 Beurteilen)
Du kannst begründet entscheiden, ob ein Entwicklungsteam eine Versionsverwaltung einsetzen soll: Bei mehreren Entwicklern reichen Absprachen nicht aus, parallele Änderungen können sich widersprechen und wären ohne Versionsverwaltung nicht rückgängig zu machen.

Erklärung:
Ja, sobald **mehrere Entwickler** am Code arbeiten:
- Absprachen reichen nicht, Änderungen überschreiben sich
- widersprüchliche Änderungen werden erst beim Zusammenführen sichtbar (Konflikt)
- ohne Historie lässt sich ein Fehler nicht gezielt zurücknehmen
Auch allein lohnt sie sich als Sicherung mit Historie.

### K3 – Fehler mit dem Versionsmanagement beheben (Stufe 3 Anwenden)
Du kannst das Versionsmanagement des Quellcodes nutzen, um einen Fehler zu beheben: den letzten fehlerfreien Stand finden, die Änderungen seitdem vergleichen und die fehlerhafte Änderung zurücknehmen oder berichtigen.

Erklärung:
Vorgehen bei einem Fehler:
- letzten **fehlerfreien Stand** (Commit/Version) finden
- **Änderungen seitdem vergleichen** (Diff: beide Stände Zeile für Zeile gegenübergestellt)
- die fehlerhafte Änderung **zurücknehmen** (revert: ein neuer Commit kehrt den fehlerhaften Commit ganz um) oder, wenn dieser Commit auch richtige Änderungen enthält, nur die fehlerhafte Stelle berichtigen und neu committen

### K4 – Verteilte Versionsverwaltung am Beispiel Git (Stufe 2 Verstehen)
Du kannst erklären, was eine verteilte Versionsverwaltung wie Git ausmacht: Jeder Klon enthält das vollständige Repository mit der ganzen Historie, sodass Commits, Vergleiche und Zweige lokal ohne Server funktionieren; ein gemeinsames Remote-Repository dient nur dem Abgleich im Team, und vor dem Commit werden die gewünschten Änderungen gezielt vorgemerkt (Staging).

Erklärung:
Man unterscheidet **zentrale** Versionsverwaltung (die Historie liegt nur auf dem Server, jeder Commit braucht eine Verbindung) und **verteilte** wie Git.
- Beim Klonen kommt das **ganze Repository** samt Historie auf den eigenen Rechner.
- Commit, Verlauf, Vergleich und Zweige laufen **lokal** – schnell und auch offline.
- Mit Push und Pull gleichst du dich mit anderen ab; das gemeinsame Remote-Repository auf einem Server ist eine Absprache im Team, technisch sind alle Kopien gleichwertig.
- **Staging:** Vor dem Commit merkst du genau die Änderungen vor, die hineinsollen; so entstehen kleine, sauber beschriebene Commits.
- Nebeneffekt: Jede Kopie ist zugleich eine Sicherung der Historie.
Beispiel: Im Zug ohne Netz committest du drei Korrekturen lokal und überträgst sie später per Push ins Team-Repository.

## Lehrnotiz: Versionsverwaltung im Entwicklungsteam

**Aufteilung:**
- Zweck und Grundfunktionen: K1
- Verteilt statt zentral, Git: K4
- Mit dem Verlauf einen Fehler beheben: K3
- Braucht das Team eine Versionsverwaltung, die Entscheidung stützt sich auf alles Vorige: K2

**Schon geprüft:** In Prüfungen: K2 (2021W) · Noch nicht geprüft: K1, K3, K4

**Kerngedanken:**
- Ein Repository ist die Ablage des Codes mit allen früheren Ständen; ein Klon ist eine vollständige Kopie davon auf dem eigenen Rechner.
- Branches trennen Arbeiten, die unterschiedlich schnell fertig werden: Eine halbfertige Erweiterung bleibt in ihrem Zweig und wird nicht mit ausgeliefert, wenn eine dringende Korrektur früher in den Hauptzweig zusammengeführt wird.
- Ein Revert nimmt den ganzen Commit zurück. Enthält der Commit neben dem Fehler auch richtige Änderungen, berichtigt man besser gezielt die fehlerhafte Stelle und committet die Korrektur.
- Eine regelmäßige Kopie des Projektordners ersetzt keine Historie: Man sieht nicht, wer was wann geändert hat, und kann einen Fehler nicht zurücknehmen, ohne alle übrigen Änderungen seit der Kopie zu verlieren.

**Typische Missverständnisse:**
- Viele denken, ein Commit lade die Änderung schon ins gemeinsame Repository; richtig ist: Der Commit hält sie lokal fest, erst der Push sendet sie.
- Viele denken, man behebe einen Fehler, indem man die letzte fehlerfreie Version wieder ausliefert; richtig ist: Dann wären auch alle richtigen Änderungen seitdem weg – zurückgenommen oder berichtigt wird nur die fehlerhafte Änderung.
- Viele denken, ein Klon sei nur eine Arbeitskopie der aktuellen Dateien und ohne Server könne man nicht committen; richtig ist: Das beschreibt eine zentrale Versionsverwaltung, bei Git hat jeder Klon die ganze Historie.

**Fachwörter:**
- Repository: Ablage des Codes mit allen Ständen
- Remote-Repository: gemeinsames, entferntes Repository des Teams
- Klon: vollständige lokale Kopie des Repositorys
- Diff: Vergleich zweier Stände Zeile für Zeile
- revert: neuer Commit, der die Änderungen eines früheren Commits umkehrt; der alte Commit bleibt in der Historie
- Konflikt: widersprüchliche Änderungen beim Zusammenführen
- Staging: Änderungen für den nächsten Commit vormerken

**So fragt die IHK:**
- Belegt ist eine Teilaufgabe in einer Aufgabe zur Programmierumgebung zu Projektbeginn: Ein zehnköpfiges Team schlägt eine Versionsverwaltung vor. Operator „entscheiden und begründen“, 4 Punkte (1 für die Zustimmung, 3 für die Begründung).
- Gezählt wird: Bei dieser Teamgröße reichen Absprachen nicht; beim parallelen Arbeiten entstehen widersprüchliche Änderungen, die ohne Versionsverwaltung nicht rückgängig zu machen sind. Andere sinnvolle Begründungen sind zugelassen.
- Grundfunktionen, Git und das Beheben eines Fehlers über den Verlauf wurden noch nicht eigens gefragt; denkbar sind Aufgaben mit „erklären“ oder „beschreiben“ zu 2–4 Punkten.

**Fallen:**
- Push und Pull vertauschen.
- Merge als „Datei kopieren“ beschreiben statt als Zusammenführen von Zweigen.
- Die Grundfunktionen nur definieren, wenn ihr Einsatz in einer Lage beschrieben werden soll.
- Beim Beheben eines Fehlers einen der drei Teile weglassen (fehlerfreien Stand finden, Änderungen seitdem vergleichen, zurücknehmen oder berichtigen).
- Bei „entscheiden und begründen“ nicht klar Stellung beziehen, nur einen Grund nennen oder mit „ist heute üblich“ begründen; die Gründe müssen sich auf Teamgröße und paralleles Arbeiten beziehen.
- Bei Git und einem Ausfall des Servers schreiben, das Team könne nicht weiterarbeiten; es warten nur Push und Pull, Commits und Zweige gehen lokal weiter (anders als bei einer zentralen Versionsverwaltung).
