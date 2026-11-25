Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Entwicklungsumgebung und Werkzeuge › Bibliotheken, Automatisierung und cyber-physische Systeme › Abläufe automatisieren: Skripte und CI/CD

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: Abläufe automatisieren: Skripte und CI/CD

Ziel: Wiederkehrende Abläufe mit Shell- und Skriptsprachen automatisieren und überwachen und automatisierte Bereitstellung mit CI/CD beschreiben.

Das muss ich können:

### K1 – CI/CD-Pipeline: Kompilieren, Testen, Bereitstellen (Stufe 2 Verstehen)
Du kannst beschreiben, wie Kompilieren, Testen und Bereitstellen mit einer CI/CD-Pipeline automatisiert werden: Ein Ereignis wie ein Commit oder Pull Request startet die Pipeline, die den Code übersetzt, die Unit-Tests ausführt und auf Test- und Produktivumgebung ausliefert.

Erklärung:
**CI/CD-Pipeline**:
- **Auslöser:** Commit, Pull Request oder das Taggen eines Commits (Tag = Versionsmarke)
- **Build:** Code wird übersetzt
- **Test:** Unit-Tests laufen automatisch
- **Deploy:** Auslieferung auf Test-, dann Produktivumgebung
CI = Continuous Integration (laufend zusammenführen und testen), CD = Continuous Delivery/Deployment (laufend ausliefern).

### K2 – Vorteile automatisierter Bereitstellung (Stufe 1 Wiedergeben)
Du kannst Vorteile automatisierter Bereitstellung nennen: Tests laufen vor jeder Auslieferung in gleicher Umgebung, die Bereitstellung ist auf allen Umgebungen einheitlich, Entwickler brauchen keinen direkten Zugang zu den Produktivsystemen, ein alter Stand lässt sich leicht wiederherstellen.

Erklärung:
- Tests laufen **vor jeder Auslieferung** in gleicher Umgebung
- Bereitstellung auf allen Umgebungen **einheitlich**
- Entwickler brauchen **keinen direkten Zugang** zur Produktion
- alter Stand ist **leicht wiederherstellbar**

### K3 – Abläufe mit Shell- oder Skriptprogramm automatisieren (Stufe 3 Anwenden · in der Prüfung vorgegeben: Funktion getMacAddress und Aufbau des JSON-Arrays)
Du kannst mit einem kurzen Shell- oder Skriptprogramm (Bash oder PowerShell im Betriebssystem, Python allgemein; vgl. AP1-8-1-3) einen Ablauf automatisieren und überwachen, zum Beispiel alle Adressen eines /24-Netzes durchlaufen, je Adresse eine vorgegebene Funktion aufrufen, leere Ergebnisse (NULL) überspringen und die Treffer als JSON-Array ausgeben, oder eine Datensicherung starten, ihr Ergebnis protokollieren und bei Fehlern warnen.

Erklärung:
Skript-Grundmuster: **Schleife – Aufruf – Prüfung – Ausgabe**.
- Schleife `für i von 1 bis 254` (ohne Netz- und Broadcastadresse)
- Aufruf `mac = getMacAddress("192.168.0." + i)`
- Prüfung `wenn mac != NULL`, dann `{ip, mac}` an die Ergebnisliste anhängen
- Ausgabe der Liste als **JSON-Array** (JSON: textbasiertes Standardformat für strukturierte Daten, das andere Programme leicht einlesen; ein Array ist darin eine Liste in eckigen Klammern)
Typische Abläufe für Skripte: Datensicherung, Benutzerkonten anlegen, Protokolle (Logs) auswerten, Dienste und Speicherplatz überwachen, Netz nach Geräten durchsuchen.
Überwachen heißt: Ergebnis protokollieren und bei Fehlern warnen (z. B. Datensicherung fehlgeschlagen → Mail). Vorgegebene Funktionen stehen in der Aufgabe.
Vollständiges Beispiel in Pseudocode:
`ergebnis ← leere Liste`
`FÜR i VON 1 BIS 254`
`  ip ← "192.168.0." + i`
`  mac ← getMacAddress(ip)`
`  WENN mac ≠ NULL DANN`
`    ergebnis.anhängen({"IP-Adresse": ip, "MAC-Adresse": mac})`
`  ENDE WENN`
`ENDE FÜR`
`ausgabe(toJson(ergebnis))`
Dasselbe in PowerShell:
`$results = @()`
`for ($i = 1; $i -le 254; $i++) {`
`  $ip = "192.168.0.$i"`
`  $mac = getMacAddress $ip`
`  if ($mac -ne $null) {`
`    $results += [PSCustomObject]@{ "IP-Adresse" = $ip; "MAC-Adresse" = $mac }`
`  }`
`}`
`ConvertTo-Json -InputObject $results`
Achtung: Eine IHK-Lösung nimmt `$host` als Zählvariable und schreibt `ne` statt `-ne`; beides läuft in PowerShell nicht (`$host` ist schreibgeschützt) – nimm einen eigenen Namen wie `$i` und vergiss die Umwandlung in JSON nicht.

### K4 – Skript statt Klicken bei vielen Geräten (Stufe 4 Beurteilen)
Du kannst begründen, warum wiederkehrende Einrichtungsarbeiten an vielen gleichartigen Geräten, etwa Switches oder Servern, per Skript über die Kommandozeile erledigt werden statt über eine grafische Oberfläche: Die Befehlsfolge wird einmal geschrieben und geprüft und läuft dann auf allen Geräten schnell, gleich und ohne Tippfehler; das Skript hält zugleich fest, was eingestellt wurde.

Erklärung:
Über eine grafische Oberfläche richtet man ein einzelnes Gerät bequem ein – bei 50 Geräten wird das langsam und fehleranfällig.
- **Schnell:** Das Skript arbeitet die Befehle in Sekunden ab, auf Wunsch für alle Geräte nacheinander.
- **Einheitlich:** Jedes Gerät bekommt genau dieselbe Konfiguration; vergessene Häkchen gibt es nicht.
- **Nachvollziehbar:** Das Skript ist zugleich Dokumentation und kann in der Versionsverwaltung liegen.
- **Wiederholbar:** Nach einem Austausch oder Zurücksetzen ist ein Gerät in Minuten wieder eingerichtet.
Voraussetzung: Das Skript wird vorher an einem Testgerät geprüft – ein Fehler darin träfe sonst alle Geräte.
Beispiel: 30 neue Access Points sollen dieselben VLANs, denselben Zeitserver und dasselbe Syslog-Ziel bekommen; ein Skript mit der Liste ihrer IP-Adressen erledigt das in einem Durchlauf.

## Lehrnotiz: Abläufe automatisieren: Skripte und CI/CD

**Aufteilung:**
- Warum Skript statt Klicken: K4
- Ein Skript schreiben, erst Netz durchsuchen, dann Ablauf überwachen: K3
- CI/CD-Pipeline: K1
- Vorteile automatisierter Bereitstellung: K2

**Schon geprüft:** In Prüfungen: K1 (2022W), K2 (2022W), K3 (2024W) · Noch nicht geprüft: K4

**Kerngedanken:**
- Skript und Pipeline haben dieselbe Idee: Eine wiederkehrende Handarbeit wird einmal als Befehlsfolge festgelegt und läuft danach jedes Mal gleich ab.
- Die Schleifengrenzen kommen aus der Aufgabe. 1 bis 254 gilt für die Hostadressen eines /24-Netzes (die ersten drei Oktette sind fest, 0 ist die Netzadresse, 255 die Broadcastadresse). Nennt die Aufgabe andere Werte, etwa sechs Geräte, läuft die Schleife über diese.
- JSON ist ein textbasiertes Standardformat für strukturierte Daten, das andere Programme einfach maschinell einlesen können. Deshalb wird das Ergebnis so ausgegeben.
- NULL heißt „keine Antwort“. Ein gültiger Wert 0 ist kein NULL und gehört in das Ergebnis.

**Typische Missverständnisse:**
- Viele denken, jemand starte die Pipeline von Hand; richtig ist: Ein Ereignis wie ein Commit oder Pull Request löst sie aus.
- Viele denken, CI und CD seien dasselbe; richtig ist: CI ist das Zusammenführen und Testen, CD das Ausliefern.

**Fachwörter:**
- CI/CD-Pipeline: automatische Kette aus Build, Test, Deploy
- Commit: gespeicherter Änderungsstand in der Versionsverwaltung
- Pull Request: Änderungsvorschlag, vor dem Zusammenführen geprüft
- Build: Code wird übersetzt
- Deploy: Auslieferung auf Test- und Produktivumgebung
- Unit-Tests: automatische Tests einzelner Funktionen
- JSON-Array: geordnete Liste von Werten in eckigen Klammern, hier von Objekten mit IP- und MAC-Adresse
- NULL: kein Ergebnis vorhanden

**So fragt die IHK:**
- CI/CD kam in einer Infrastruktur-Aufgabe vor. Erst war zu beschreiben, wie automatisierte Kompilierung und Bereitstellung umgesetzt werden (2 Punkte). Die Lösung nennt Pipelines im Rahmen von CI/CD, ausgelöst durch Ereignisse wie einen Pull Request oder das Taggen eines Commits.
- Danach waren zwei Vorteile gegenüber der Bereitstellung von Hand zu nennen (4 Punkte). Die Lösung listet die vier Vorteile aus dem Stoff.
- Das Skript kam in einer Netzwerk-Aufgabe vor: Operator „schreiben“, 8 Punkte, eine halbe Seite freie Fläche. Vorgegeben waren die Funktion und der Aufbau des JSON-Arrays. Ausdrücklich erlaubt waren Pseudocode oder eine bekannte Skriptsprache.
- Die Lösung zählt die Punkte Ergebnis-Array, Schleife 1 bis 254, Adresse zusammensetzen, Funktion aufrufen, auf NULL prüfen, Eintrag anhängen. Die Logik zählt, nicht die Syntax; ein Folgefehler wird nur einmal abgezogen.
- Zur Begründung „Skript statt Oberfläche“ (K4) gibt es noch keine echte Aufgabe. Zu erwarten ist „Begründen Sie …“ mit 2 bis 4 Punkten.

**Fallen:**
- Skript statt Klicken: Nur „schneller“ schreiben. Erwartet werden auch „einheitlich, ohne Tippfehler“ und „dokumentiert, wiederholbar“. „Die Kommandozeile ist professioneller“ zählt nicht.
- Skript statt Klicken: Die Voraussetzung weglassen, dass das Skript vorher an einem Testgerät geprüft wird.
- Skript schreiben: Die Schleife von 0 bis 255 laufen lassen.
- Skript schreiben: Die Ergebnisliste in der Schleife anlegen; sie wird dann bei jedem Durchlauf geleert.
- Skript schreiben: Das Ergebnis des Funktionsaufrufs nicht in einer Variablen merken oder die Prüfung auf NULL vergessen.
- Skript schreiben: Die Ausgabe in die Schleife setzen statt danach.
- Skript schreiben: Kommt eine weitere Bedingung hinzu, etwa „nur Werte über einem Grenzwert“, zuerst auf NULL prüfen und erst danach vergleichen. Ein Vergleich mit NULL liefert sonst ein falsches Ergebnis oder einen Fehler.
- Skript schreiben: Wer PowerShell wählt, schreibt den Vergleich mit Bindestrich (`-ne`, nicht `!=`). Gewertet wird die Logik; wer bei der Syntax unsicher ist, nimmt Pseudocode.
- Überwachen: Nur den Fehlerfall protokollieren oder die Warnung auch bei Erfolg senden.
- Pipeline: Nur „die Pipeline testet und liefert aus“ schreiben. Bei „beschreiben“ gehören Auslöser, Build, Test und Deploy in dieser Reihenfolge dazu, die Testumgebung vor der Produktivumgebung.
- Vorteile: „Geht schneller“ ohne weitere Aussage zählt nicht; verlangt sind verschiedene Vorteile.
