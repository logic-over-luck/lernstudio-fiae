Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › Daten heterogener Quellen zusammenführen: Data Lake, Open Data

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: Daten heterogener Quellen zusammenführen: Data Lake, Open Data

Ziel: Daten aus verschiedenen Quellen bereinigen, vereinheitlichen und zusammenführen, einen Data Lake einsetzen und Open Data über Schnittstellen nutzen.

Das muss ich können:

### K1 – Daten heterogener Quellen zusammenführen (Stufe 3 Anwenden)
Du kannst Daten heterogener Quellen zusammenführen: auslesen, bereinigen und vereinheitlichen (Formate, Schreibweisen, Einheiten), in die Zielstruktur umformen und einspielen.

Erklärung:
Schritte beim Zusammenführen:
- **auslesen** aus allen Quellen
- **bereinigen** (Dubletten, Fehler, Lücken; Felder mit mehreren Werten aufteilen)
- **vereinheitlichen**: Formate (Datum), Schreibweisen, Einheiten (kg/g)
- in die **Zielstruktur umformen**: auf Tabellen, Spalten und Datentypen des Ziels abbilden, z. B. „Name“ in Vorname und Nachname teilen oder Werte auf mehrere Tabellen verteilen
- **einspielen**

### K2 – Data Lake für eine Auswertung (Stufe 3 Anwenden)
Du kannst einen Data Lake (Speicher, der Daten aus vielen Quellen im Rohformat aufnimmt) für eine Auswertung einsetzen: festlegen, ob Daten zunächst roh im Data Lake gesammelt oder schon vor dem Speichern aufbereitet und in ein Data Warehouse geladen werden.

Erklärung:
**Data Lake** = Speicher, der Daten aus vielen Quellen **im Rohformat** aufnimmt (strukturiert und unstrukturiert).
Entscheidung beim Einsatz:
- **erst roh** im Data Lake **sammeln**, später je Auswertung aufbereiten (flexibel, die Struktur entsteht erst beim Auswerten)
- oder **vor dem Speichern aufbereiten** und mit festem Schema in ein **Data Warehouse** laden (sofort auswertbar, aber weniger flexibel)

### K3 – Open Data über API nutzen (Stufe 3 Anwenden)
Du kannst Open Data nutzen: frei zugängliche Daten über eine API-Schnittstelle oder als Datei abrufen und in die eigene Anwendung einbinden, zum Beispiel Wetter- oder Fahrplandaten.

Erklärung:
**Open Data** = Daten, die für alle frei zugänglich, kostenlos und maschinenlesbar sind und frei weiterverwendet werden dürfen, höchstens mit Auflagen wie der Namensnennung (z. B. von Behörden, Wetterdiensten, Verkehrsbetrieben).
Nutzen:
- über eine **API** abrufen oder als **Datei** herunterladen
- in die eigene Anwendung einbinden (Wetter in der Bewässerungs-App, Fahrplan in der Event-App)
Lizenz und Aktualität beachten.

### K4 – Open Data gegen Closed Data (Stufe 2 Verstehen)
Du kannst Open Data und Closed Data an vier Merkmalen unterscheiden – Zugang (für alle oder nur für Berechtigte), maschinelle Verarbeitbarkeit, Kosten und Nutzungsrechte –, auch bei Zwischenformen wie frei zugänglichen Daten, die nur auf Papier vorliegen; weil auch Open Data Auflagen wie die Namensnennung haben können, ist vor der Nutzung fremder Daten immer die Lizenz zu klären.

Erklärung:
Open Data ist kein Ja oder Nein, sondern das eine Ende einer Skala. Eingeordnet wird nach vier Merkmalen:
- **Zugang:** jeder – oder nur bestimmte Personen und Organisationen
- **maschinell verarbeitbar:** offenes, strukturiertes Format (CSV, JSON) – oder nur als Scan oder Ausdruck
- **Kosten:** kostenlos – oder nur gegen Entgelt
- **Rechte:** beliebig nutzbar und weitergebbar – oder Nutzung und Weitergabe verboten
Dazwischen liegen viele Mischformen, z. B. öffentlich, aber nur als PDF-Scan oder Ausdruck. Auflagen wie die Namensnennung oder die Pflicht, Bearbeitungen unter derselben Lizenz weiterzugeben, machen Daten nicht geschlossen – auch Open Data dürfen sie haben.
Praxis: Bevor deine App z. B. Haltestellendaten eines Verkehrsverbunds einbindet, klärst du die Lizenz und hältst fest, woher die Daten stammen; bei personenbezogenen Daten dokumentierst du zusätzlich, auf welcher Grundlage du sie verwendest.

### K8 – Data Warehouse und Data Lake im Vergleich (Stufe 2 Verstehen)
Du kannst Data Warehouse und Data Lake unterscheiden: Ein Data Warehouse ist eine zentrale Datenbank, in die Daten mehrerer Quellen vor dem Laden aufbereitet und in ein festes, strukturiertes Modell übernommen werden, optimiert für Berichte und Analysen; ein Data Lake nimmt sehr große Mengen auch unstrukturierter Daten aus vielfältigen Quellen im Rohformat auf, und ihre Struktur wird erst bei der Auswertung festgelegt.

Erklärung:
Beide sind **materialisierte** Integration: Die Daten aus vielen Quellen werden in einen zentralen Speicher kopiert. Der Unterschied liegt darin, **wann** die Struktur festgelegt wird.
- **Data Warehouse:** Daten werden beim Laden bereinigt, vereinheitlicht und in ein festes Schema gebracht. Ergebnis: verlässliche Kennzahlen, schnelle Berichte, OLAP-Auswertungen (Zahlen nach mehreren Merkmalen zugleich, z. B. Umsatz nach Filiale und Monat) und Data Mining (automatische Suche nach Mustern). Für neue Fragen, für die das Schema nicht gebaut ist, muss es erweitert werden.
- **Data Lake:** Daten aller Art (Tabellen, Logdateien, JSON, Bilder, Sensordaten) werden roh gespeichert, die Struktur entsteht erst bei der Auswertung. Flexibel und günstig für Big Data (sehr große, vielfältige Datenmengen), ohne Pflege droht aber ein unübersichtlicher „Datensumpf“.
Beispiel: Der Monatsumsatz je Filiale kommt aus dem Data Warehouse; Klickdaten und Produktfotos für ein späteres KI-Projekt liegen im Data Lake.

### K9 – Strukturierte, semi- und unstrukturierte Daten (Stufe 2 Verstehen)
Du kannst strukturierte Daten (festes Format, etwa die Zeilen einer Datenbanktabelle), semistrukturierte Daten (nur teilweise feste Struktur, etwa eine E-Mail mit festem Kopf und freiem Text oder JSON- und XML-Dokumente ohne festes Schema) und unstrukturierte Daten (etwa Freitext, Bild, Video, Tonaufnahme) an Beispielen unterscheiden; unstrukturierte Daten sind am schwersten automatisch auszuwerten.

Erklärung:
Der **Strukturgrad** entscheidet, wie leicht ein Programm Daten auswerten kann – und wo man sie ablegt.
- **strukturiert:** jedes Feld hat festen Platz und Typ, z. B. Tabelle `Kunde(Nr, Name, PLZ)` oder CSV mit Kopfzeile. Direkt per Abfrage auswertbar.
- **semistrukturiert:** ein Teil ist geordnet, der Rest frei, oder die Struktur steckt in den Daten selbst – E-Mail (Absender, Datum, Betreff fest; Text frei), JSON oder XML ohne Schema, Webseiten.
- **unstrukturiert:** kein vorgegebenes Format – Fließtext, Fotos, Sprachaufnahmen, Videos. Auswertbar nur mit aufwendigen Verfahren wie Texterkennung oder KI.
Der weitaus größte Teil aller gespeicherten Daten ist unstrukturiert. Ein Data Lake nimmt alle drei Arten auf, ein Data Warehouse erwartet strukturierte Daten.

## Lehrnotiz: Daten heterogener Quellen zusammenführen: Data Lake, Open Data

**Aufteilung:**
- Strukturgrad von Daten: K9
- Daten aus mehreren Quellen zusammenführen: K1
- Data Warehouse und Data Lake unterscheiden: K8
- Entscheiden, wohin die Daten kommen: K2
- Open Data einordnen: K4
- Open Data nutzen: K3

**Schon geprüft:** Noch nicht geprüft: K1–K4, K8, K9

**Kerngedanken:**
- Beim Zusammenführen zählen die Schritte nur, wenn sie an den vorliegenden Daten gezeigt werden: welche Dublette, welches Datumsformat, welche Einheit, welche Spalte geteilt oder zugeordnet wird.
- Eine Lücke wird nicht geraten oder erfunden. Man fragt an der Quelle nach oder kennzeichnet den Wert als fehlend.
- Zum Umformen gehört auch, Texte auf die Schlüssel des Ziels abzubilden (Bezeichnung auf Nummer) und neue Primärschlüssel zu vergeben. Beim Einspielen müssen die Datensätze schon existieren, auf die Fremdschlüssel verweisen.
- Faustregel für die Entscheidung: Steht die Auswertung fest und sind die Daten strukturiert, kommen sie aufbereitet ins Data Warehouse. Sind die Fragen noch offen und die Daten vielfältig oder unstrukturiert, kommen sie erst roh in den Data Lake.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K3 – Ablauf eines Open-Data-Abrufs über eine API: (1) Die Anwendung sendet eine HTTP-Anfrage (GET) an die Adresse der API und gibt als Parameter an, welche Daten sie braucht, etwa Ort und Zeitraum. (2) Der Server des Anbieters antwortet mit einem Statuscode und den Daten in einem strukturierten Format, meist JSON oder XML. (3) Die Anwendung prüft den Statuscode und behandelt Fehler, etwa wenn der Dienst nicht erreichbar ist. (4) Die Anwendung liest die Antwort ein (Parsen) und entnimmt die Felder, die sie benötigt. (5) Die Anwendung formt die Werte in ihre eigenen Datenstrukturen um, gleicht Formate und Einheiten an und speichert sie oder zeigt sie an. (6) Die Anwendung wiederholt den Abruf in passenden Abständen, damit die Daten aktuell bleiben, und nennt die Quelle, wenn die Lizenz es verlangt. Vereinfacht: Viele Anbieter verlangen zusätzlich eine Registrierung mit API-Schlüssel und begrenzen die Zahl der Abrufe.

**Typische Missverständnisse:**
- Viele denken, ein Data Lake sei ein besonders großes Data Warehouse; richtig ist: Der Kern ist das Rohformat, die Struktur entsteht erst beim Auswerten.
- Viele denken, was öffentlich im Internet steht, sei Open Data; richtig ist: Sichtbar heißt nicht frei verwendbar, es entscheiden alle vier Merkmale und die Lizenz.

**Fachwörter:**
- heterogene Quellen: verschiedenartige Quellen mit uneinheitlichem Aufbau
- Dublette: derselbe Datensatz kommt mehrfach vor
- Zielstruktur: Tabellen, Spalten und Datentypen des Ziels
- Data Lake: Speicher für Daten im Rohformat
- Data Warehouse: zentrale Datenbank mit festem Schema für Berichte
- Strukturgrad: wie fest das Format der Daten ist
- Open Data: frei zugängliche, kostenlose, maschinenlesbare, frei nutzbare Daten
- Lizenz: regelt, wie Daten genutzt werden dürfen

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es bisher keine echte Prüfungsaufgabe; er leitet sich aus dem Prüfungskatalog ab.
- Zu erwarten ist eine Teilaufgabe mit 3–8 Punkten innerhalb einer Projektaufgabe.
- Mögliche Form: „Beschreiben Sie die Schritte, um die Daten … zusammenzuführen“ mit zwei absichtlich uneinheitlichen Datenauszügen. Je Schritt gibt es einen Punkt, aber nur mit Bezug auf die Daten.
- Mögliche Form: „Entscheiden Sie begründet: Data Lake oder Data Warehouse“ (2–4 Punkte).
- Mögliche Formen: Daten dem Strukturgrad zuordnen und „Prüfen Sie, ob es sich um Open Data handelt“.
- Allgemeine Aufzählungen ohne Bezug zum Fall bringen höchstens Teilpunkte.

**Fallen:**
- Strukturgrad: Nur zuordnen, ohne zu begründen, warum unstrukturierte Daten schwer auszuwerten sind (keine festen Felder, auf die ein Programm zugreifen kann).
- Zusammenführen: Nur „Daten importieren“ schreiben oder die Schritte als bloße Liste aufzählen.
- Zusammenführen: Eine Dublette übersehen, weil derselbe Datensatz in beiden Quellen anders geschrieben ist.
- Zusammenführen: Bei widersprüchlichen Werten einer Dublette nicht sagen, welcher Wert übernommen wird.
- Zusammenführen: Eine Einheit übersehen, die nur im Spaltenkopf steht (Tausend, Cent).
- Zusammenführen: Einheit, Währungszeichen oder Tausenderpunkt im Wert stehen lassen, statt eine reine Zahl zu übernehmen.
- Zusammenführen: Unterschiedliche Groß- und Kleinschreibung oder Kurzformen nicht angleichen.
- Zusammenführen: Spalten mit verschiedenen Namen, aber gleichem Inhalt nicht einander zuordnen.
- Zusammenführen: Das Auslesen und das Einspielen weglassen, weil sie selbstverständlich wirken.
- Vergleich: Nur ein Unterscheidungsmerkmal nennen. Zu nennen sind der Zeitpunkt der Strukturierung und die Art der Daten. Ist eine Behauptung wie „beides ist dasselbe“ zu beurteilen, gehört auch die Gemeinsamkeit dazu: Beide sammeln Daten vieler Quellen zentral.
- Entscheidung: Alles „für alle Fälle“ in den Data Lake legen. Für feste, wiederkehrende Berichte ist das umständlich und unzuverlässig.
- Entscheidung: Fotos oder andere unstrukturierte Daten in ein festes Warehouse-Schema pressen wollen.
- Entscheidung: Mit „weil es mehr Daten sind“ begründen statt mit „Auswertung fest oder offen“ und der Art der Daten.
- Open Data: Aus einem einzigen Merkmal schließen („Open Data, weil kostenlos“), statt alle vier zu prüfen.
- Open Data: Eine Auflage wie die Namensnennung übersehen und die Quelle in der Anwendung nicht nennen.
- Open Data: Daten einmal laden und nie aktualisieren, obwohl sie sich ändern.
