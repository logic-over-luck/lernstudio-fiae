Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Tabellen, Datenpflege und Rechte › Datenbank aufbauen, pflegen und absichern › Datenqualität vor einem Import prüfen

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.
- Stimmt der Inhalt und fehlt nur das Fachwort, zählt die Antwort als richtig: Nenn mir das Wort in einem Satz und geh weiter.
- Zeig Lösungen nie, bevor ich geantwortet habe.

**Was feststeht**
- Der Stoff ist verbindlich, und jede Aussage muss drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“, statt still etwas anderes beizubringen. Steht bei einer Aussage „in der Prüfung vorgegeben“, muss ich das nur anwenden.
- Sag mir bei jedem Thema in einem Halbsatz, ob es schon in einer Prüfung vorkam (Lehrnotiz „Schon geprüft“). Was schon geprüft wurde, übst du gründlicher.
- Schreibe ich „kann ich“, stell nur eine Aufgabe. Schreibe ich „Pause“, fass in zwei Zeilen zusammen, wo wir stehen; später mache ich im selben Chat weiter.
- Am Ende stellst du eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu vorgegebener Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen 10–12), eine Teilaufgabe nach der anderen. Nimm vor allem das hinein, was unterwegs nicht saß, und das, was schon geprüft wurde. Davor gibt es keine eigene Wiederholungsrunde.
- Abhaken: Hat die Abschlussaufgabe mindestens zwei Drittel der Punkte, schreib: „✅ Kannst du abhaken: <Titel des Stichpunkts>“. Sonst nenn, was noch wackelt, und übe genau das mit mir.

Antworte auf Deutsch.

## Stoff: Datenqualität vor einem Import prüfen

Ziel: Einen gelieferten Datenbestand auf Qualitätsmängel prüfen, Folgen eines Imports benennen, einen Importweg aufzeigen und den Import beurteilen. Daten heterogener Quellen bereinigen und zusammenführen kennst du aus PB1-7-1-3.

Das muss ich können:

### K1 – Qualitätsmängel im Datenbestand und Folgen (Stufe 2 Verstehen)
Du kannst Qualitätsmängel in einem Datenbestand beschreiben und je eine Folge des Imports nennen, zum Beispiel uneinheitliche Formate (Datum), mehrere Werte in einem Feld, fehlende oder ungültige Werte, Dubletten, unterschiedliche Schreibweisen → falsche Auswertungen, abgelehnte Datensätze, verletzte Schlüssel.

Erklärung:
Typische Mängel in gelieferten, oft von Hand gepflegten Beständen – und je eine Folge beim Import:
- **uneinheitliche Formate** (Datum mal 01.02.2025, mal 2025-02-01) → Datensätze werden abgelehnt oder falsch gelesen
- **mehrere Werte in einem Feld** („0221 123456, 0171 987654“) → passt nicht in eine Spalte mit einem Wert, einzelne Nummern nicht suchbar
- **fehlende oder ungültige Werte** (leere Pflichtfelder, Buchstabe in der PLZ, Datum 31.4. oder Datum ohne Jahr) → Import bricht ab oder falsche Daten gelangen in den Bestand
- **Dubletten** → Personen werden doppelt geführt, Schlüssel verletzt
- **unterschiedliche Schreibweisen** („Köln“, „Koeln“) → Gruppierungen und Zählungen werden falsch
- **Bezug über Namen statt Schlüssel** (Mitarbeiter „Müller“ statt Mitarbeiternummer) → Namen sind nicht eindeutig, Datensätze werden doppelt geführt, falsch oder gar nicht zugeordnet
- **verschiedene Texte für denselben Sachverhalt** („Kein Ticket“, „Ohne Fahrkarte“, „Kein Fahrschein“) → Auswertungen wie „wie oft kein Ticket?“ zählen falsch

### K2 – Wege zum Import mangelhafter Daten (Stufe 2 Verstehen)
Du kannst Wege aufzeigen, mangelhafte Daten dennoch zu importieren: die Daten vorher von Hand verbessern oder ein Importprogramm mit allen nötigen Fehlerbehandlungen schreiben, das fehlerhafte Datensätze abweist und protokolliert; das Bereinigen und Vereinheitlichen selbst kennst du aus PB1-7-1-3.

Erklärung:
Mangelhafte Daten lassen sich auf zwei Wegen trotzdem importieren:
- **vorher von Hand verbessern:** Formate vereinheitlichen, Felder aufteilen, Dubletten zusammenführen – sinnvoll bei kleinen Beständen
- **Importprogramm mit allen nötigen Fehlerbehandlungen:** prüft jeden Datensatz, wandelt um, wo es eindeutig geht (z. B. Datumsformate), **weist fehlerhafte Datensätze ab** und **protokolliert** sie zur Nachbearbeitung – sinnvoll bei großen oder wiederkehrenden Lieferungen
Wie du Daten bereinigst und vereinheitlichst, kennst du aus PB1-7-1-3.

### K3 – Importfähigkeit: für oder gegen den Import (Stufe 4 Beurteilen)
Du kannst beurteilen, ob ein Datenbestand ohne Nacharbeit importiert werden kann, und für oder gegen den Import argumentieren, etwa mit Aufwand der Bereinigung gegen Nutzen der Daten.

Erklärung:
**Beurteilen** heißt: entscheiden und begründen.
- **Ohne Nacharbeit** importierbar ist ein Bestand nur, wenn Formate, Pflichtfelder, Schlüssel und Aufbau zur Zieltabelle passen.
- **Für den Import:** Die Daten werden gebraucht (z. B. Kundenhistorie), eine Neuerfassung wäre teurer, die Mängel lassen sich größtenteils automatisch beheben.
- **Gegen den Import:** Die Bereinigung kostet mehr, als die Daten wert sind; viele Mängel sind nur von Hand lösbar; die Daten sind veraltet.
Antwortmuster: Entscheidung + zwei konkrete Gründe aus dem Fall, z. B. „Nicht ohne Nacharbeit: Datumsformate uneinheitlich, Telefonnummern zu zweit in einem Feld. Der Import lohnt sich trotzdem, weil sonst 2.000 Bestandskunden neu erfasst werden müssten.“

### K4 – Datenqualität als Eignung für den Zweck (Stufe 2 Verstehen)
Du kannst erklären, was Datenqualität bedeutet: wie gut sich Daten für den Zweck einer Anwendung eignen; aus mangelhaften Daten lassen sich keine verlässlichen Informationen gewinnen, und Fehler wie doppelte Kundenadressen oder veraltete Anschriften verursachen unmittelbar Kosten.

Erklärung:
**Prinzip:** Datenqualität ist keine absolute Größe, sondern hängt vom Zweck ab: Dieselben Daten können für eine Statistik genügen und für den Versand von Rechnungen unbrauchbar sein.
- Daten sind der Rohstoff für Informationen und Entscheidungen – schlechte Daten führen zu falschen Auswertungen
- Mängel kosten direkt Geld: Briefe an alte Adressen kommen zurück, doppelte Kunden bekommen jede Werbung zweimal, falsche Bestände führen zu Fehlbestellungen
- Deshalb wird vor einem Import geprüft, ob die Daten für den geplanten Zweck taugen (PB2-6-1-5-K3)
Beispiel: Für eine Auswertung „Kunden je Bundesland“ reicht die PLZ; für den Rechnungsversand muss die vollständige, aktuelle Anschrift stimmen.

### K5 – Vollständigkeit, Korrektheit, Aktualität, Genauigkeit (Stufe 2 Verstehen)
Du kannst die Qualitätskriterien Vollständigkeit (alle geforderten Felder enthalten gültige Werte), Korrektheit (die Werte stimmen mit der Wirklichkeit überein, z. B. kein Platzhalter-Geburtsdatum 01.01.1900), Aktualität (die Werte bilden den heutigen Stand ab) und Genauigkeit (die Werte liegen in der geforderten Exaktheit vor, z. B. Preise auf den Cent) je an einem Beispiel erklären.

Erklärung:
Diese vier Kriterien fragen, ob **jeder einzelne Wert** brauchbar ist:
- **Vollständigkeit:** Fehlt in 15 von 100 Kundendatensätzen die E-Mail-Adresse, obwohl sie Pflicht ist, ist der Bestand unvollständig
- **Korrektheit:** Der Wert muss stimmen, nicht nur formal gültig sein – ein Geburtsdatum 01.01.1900 ist ein gültiges Datum, aber meist ein Platzhalter
- **Aktualität:** Die Anschrift eines umgezogenen Kunden ist korrekt erfasst worden, aber heute falsch
- **Genauigkeit:** Die Werte liegen so exakt vor wie nötig – ein Preis „ca. 20 €“ oder Koordinaten auf 10 km genau reichen für eine Rechnung bzw. Navigation nicht
Wichtig für die Prüfung: Korrekt ist mehr als gültig; eine Prüfung auf das Datumsformat findet den Platzhalter nicht.

### K6 – Eindeutig, redundanzfrei, konsistent, einheitlich (Stufe 2 Verstehen)
Du kannst die Qualitätskriterien Eindeutigkeit (jeder Datensatz lässt sich eindeutig zuordnen, keine Dubletten), Redundanzfreiheit (keine Information mehrfach gespeichert), Konsistenz (keine Widersprüche innerhalb eines Datensatzes, z. B. Menge × Einzelpreis ≠ Gesamtbetrag, und zu anderen Datensätzen oder Quellen) und Einheitlichkeit (gleiche Werte im gleichen Format, z. B. jedes Datum nach ISO 8601) je an einem Beispiel erklären.

Erklärung:
Diese Kriterien fragen, ob die Daten **untereinander** zusammenpassen – genau hier scheitern Importe am häufigsten:
- **Eindeutigkeit:** „Müller, Hauptstr. 5“ und „Mueller, Hauptstraße 5“ sind derselbe Kunde → Dublette
- **Redundanzfreiheit:** Die Kundenanschrift steht nicht zusätzlich in jeder Bestellung (sonst Widersprüche nach einer Änderung, vgl. Normalisierung PB1-6)
- **Konsistenz:** 3 × 10 € mit Gesamtbetrag 35 € widerspricht sich; ebenso ein Auftrag für einen Kunden, den es nicht gibt
- **Einheitlichkeit:** Datum mal als 03.05.2026, mal als 2026-05-03 – Sortieren und Vergleichen scheitern; einheitlich wäre z. B. überall ISO 8601 (Jahr-Monat-Tag: 2026-05-03)
Die Kriterien aus PB2-6-1-5-K5 (Vollständigkeit, Korrektheit, Aktualität, Genauigkeit) und diese zusammen bilden die übliche Prüfliste vor einem Import.

## Lehrnotiz: Datenqualität vor einem Import prüfen

**Aufteilung:**
- Was Datenqualität heißt: K4
- Mängel im Bestand finden und Folgen nennen: K1
- Kriterien für den einzelnen Wert: K5
- Kriterien für das Zusammenpassen der Daten: K6
- Mangelhafte Daten trotzdem importieren: K2
- Den Import beurteilen, hier kommt alles Vorige zusammen: K3

**Schon geprüft:** In Prüfungen: K1 (2024W), K2 (2024W), K3 (2024W) · Noch nicht geprüft: K4–K6

**Kerngedanken:**
- Die Mängel stehen im Auszug der Aufgabe, die Folgen nicht. Die Folge leitet man aus der Zieltabelle ab: Was macht sie mit genau diesem Wert (Pflichtfeld, Datentyp, ein Wert je Feld, Schlüssel)?
- Eine vollständige Antwort zu einem Mangel hat drei Teile: Mangel benennen, mit einem Beispiel aus dem Auszug belegen, konkrete Folge beim Import nennen.
- Ein Programm kann nur umwandeln, was eindeutig ist. Bei Widersprüchen oder fehlenden Werten sieht man dem Datensatz nicht an, was stimmt; das muss ein Mensch klären. Deshalb wird protokolliert statt still übersprungen, sonst ist der Bestand unbemerkt unvollständig.
- Beim Beurteilen zählt neben „ja“ und „nein“ auch ein Teilimport (etwa nur die neueren Datensätze), wenn er mit dem Fall begründet ist.

**Typische Missverständnisse:**
- Viele denken, eine veraltete Anschrift sei ein Mangel der Korrektheit; richtig ist: Korrekt heißt, der Wert stimmte bei der Erfassung, aktuell heißt, er stimmt heute noch.
- Viele denken, Eindeutigkeit und Einheitlichkeit seien dasselbe, weil beide „gleich machen“; richtig ist: Eindeutigkeit betrifft Datensätze (zwei sind eigentlich einer), Einheitlichkeit betrifft Format und Schreibweise.

**Fachwörter:**
- Dublette: derselbe Sachverhalt als zwei Datensätze
- Pflichtfeld: Feld, das einen Wert haben muss
- Fehlerbehandlung: prüfen, umwandeln, abweisen und protokollieren
- Korrektheit: Wert stimmt mit der Wirklichkeit überein
- Aktualität: Wert bildet den heutigen Stand ab
- Konsistenz: keine Widersprüche zwischen den Werten
- Einheitlichkeit: gleiche Angaben im gleichen Format

**So fragt die IHK:**
- Das Thema kam bisher einmal vor, als zweiter Teil einer Datenmodell-Aufgabe (13 Punkte). Ein von Hand erfasster Bestand mit über 1.000 Zeilen sollte ins neue System. Der Auszug zeigte uneinheitliche und unmögliche Datumsangaben, Mitarbeiternamen statt Nummern, verschiedene Texte für dasselbe Vorkommnis und fehlende Einträge.
- Gefragt wurde in drei Stufen:
  - Drei Probleme beschreiben und je eine Folge des Imports nennen: 9 Punkte, 3 je Problem mit Folge.
  - Einen Weg aufzeigen, die Daten dennoch zu importieren: 2 Punkte. Es zählt von Hand verbessern oder ein Importprogramm mit Fehlerbehandlung.
  - Den Import beurteilen und dafür oder dagegen argumentieren: 2 Punkte. Beide Richtungen zählen, wenn sie begründet sind.
- Operatoren: beschreiben, nennen, aufzeigen, beurteilen, argumentieren.
- Die Qualitätskriterien (Vollständigkeit, Korrektheit usw.) wurden nicht abgefragt. Mit ihnen benennt man Mängel aber genau; eine Zuordnungsaufgabe wäre naheliegend.

**Fallen:**
- Nur den Mangel nennen ohne Folge, oder eine allgemeine Folge schreiben („Daten sind schlecht“, „sieht unordentlich aus“).
- Denselben Mangel zweimal nennen, etwa zwei Beispiele für dasselbe uneinheitliche Datumsformat als zwei Mängel. Uneinheitliches Format und unmögliches Datum (31.4.) sind dagegen zwei verschiedene Mängel.
- Ein Platzhalter-Datum als Mangel der Vollständigkeit einordnen (es ist Korrektheit) oder einen „ca.“-Wert als Mangel der Korrektheit (es ist Genauigkeit).
- Eine mehrfach gespeicherte Information als Mangel der Eindeutigkeit einordnen (es ist Redundanzfreiheit). Ist derselbe Vorgang zweimal erfasst, zählt Eindeutigkeit, mit passender Begründung auch Redundanzfreiheit.
- Redundanz nur mit „steht doppelt“ erklären, ohne die Folge: Nach einer Änderung an einer Stelle widersprechen sich die Daten.
- Als Importweg „Daten löschen“ oder „Import abbrechen“ nennen. Gefragt ist, wie die Daten trotzdem hineinkommen.
- Beim Importprogramm das Protokoll vergessen oder die Wahl des Wegs nicht mit Größe und Wiederholung der Lieferung begründen.
- Beim Beurteilen nur „ja“ oder „nein“ schreiben, allgemeine Gründe ohne Bezug zum Fall nennen („Daten sind wichtig“) oder die Teilfrage „ohne Nacharbeit importierbar?“ nicht beantworten.
