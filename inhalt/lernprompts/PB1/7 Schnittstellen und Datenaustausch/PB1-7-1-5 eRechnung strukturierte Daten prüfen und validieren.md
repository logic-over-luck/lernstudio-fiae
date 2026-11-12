Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › eRechnung: strukturierte Daten prüfen und validieren

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

## Stoff: eRechnung: strukturierte Daten prüfen und validieren

Ziel: Ziel und Aspekte der eRechnung erläutern und Wege beurteilen, mit denen eine Implementierung der Spezifikation entspricht.

Das muss ich können:

### K1 – Hauptziel der eRechnung (Stufe 2 Verstehen)
Du kannst das Hauptziel einer eRechnung erläutern: Sie wird automatisch verarbeitet; eine für Menschen lesbare Darstellung ist zweitrangig.

Erklärung:
Hauptziel der **eRechnung**: **automatische Verarbeitung** beim Empfänger (Buchhaltung, Prüfung, Zahlung).
Die für Menschen lesbare Darstellung ist **zweitrangig**.

### K2 – Aspekte einer digitalen Rechnung (Stufe 2 Verstehen)
Du kannst Aspekte einer digitalen Rechnung erläutern: Sie liegt digital vor (z. B. als PDF) und hat einen visuellen Aspekt (für Menschen lesbar) und einen Datenaspekt (maschinell verarbeitbar); bei der eRechnung ist der Datenaspekt strukturiert (z. B. XRechnung, ZUGFeRD), ein reines PDF gilt seit 2025 nicht als eRechnung.

Erklärung:
- **digitale Rechnung:** liegt digital vor, z. B. als PDF
- **visueller Aspekt:** für Menschen lesbar
- **Datenaspekt:** maschinell verarbeitbar
Bei der **eRechnung** ist der Datenaspekt **strukturiert** (XRechnung als XML, ZUGFeRD als PDF mit eingebettetem XML). Ein reines PDF zeigt die Rechnung nur an; seine Inhalte sind nicht strukturiert, ein Programm müsste sie erst herauslesen. Deshalb gilt es seit **2025** nicht mehr als eRechnung.
PDF-Rechnungen sind damit nicht sofort verboten: Sie gelten als „sonstige Rechnung“ und dürfen in der Übergangszeit weiter verschickt werden (Fristen siehe Kür, Stand 2026).

### K3 – Implementierung gegen die Spezifikation prüfen (Stufe 1 Wiedergeben)
Du kannst Möglichkeiten nennen, mit denen eine Implementierung der Protokoll-Spezifikation entspricht: Test-Rechnungen bei einem zertifizierten Validator prüfen, Unit-Tests, eine zertifizierte Bibliothek nutzen, formale Validierung mit Schemadateien (XSD).

Erklärung:
So prüft man, ob eine Umsetzung (Implementierung) der Spezifikation entspricht, also der verbindlichen Beschreibung des Formats:
- Test-Rechnungen bei einem **zertifizierten Validator** prüfen
- **Unit-Tests** (automatische Tests, die einzelne Funktionen mit festen Beispielwerten prüfen)
- eine **zertifizierte Bibliothek** nutzen
- formale **Validierung mit Schemadateien (XSD)**
Die XSD-Prüfung allein reicht nicht: Sie prüft Aufbau, Pflichtfelder und Datentypen, aber keine Rechenfehler wie eine falsche Summe (siehe PB1-7-1-1 K5).

### K4 – Online-Validator: was zu beachten ist (Stufe 2 Verstehen)
Du kannst erläutern, was beim Nutzen eines Online-Validators zu beachten ist: keine echten Firmen- oder Kundendaten hochladen, nur Testdaten; die Ergebnisse können fehlerhaft sein, wenn das Werkzeug nicht geprüft und zertifiziert ist.

Erklärung:
Beim **Online-Validator**:
- **keine echten Firmen- oder Kundendaten** hochladen, nur **Testdaten** (Datenschutz, Geschäftsgeheimnis): Kundendaten sind personenbezogen (DSGVO), und fremde Werkzeuge und Testumgebungen sind oft schwächer geschützt und für mehr Personen zugänglich – deshalb anonymisieren oder künstliche Testdaten erzeugen
- Ergebnisse können falsch sein, wenn das Werkzeug **nicht geprüft und zertifiziert** ist
- klären, **was** das Werkzeug prüft: nur einzelne Daten oder die vollständige Spezifikation? Eine bloße Anzeige der Inhalte ist noch keine Validierung

## Lehrnotiz: eRechnung: strukturierte Daten prüfen und validieren

**Aufteilung:**
- Hauptziel der eRechnung: K1
- Aspekte einer digitalen Rechnung, eRechnung gegen reines PDF: K2
- Wege, die Umsetzung gegen die Spezifikation zu prüfen: K3
- Online-Validator richtig nutzen: K4

**Schon geprüft:** In Prüfungen: K1 (2025W), K2 (2025W), K3 (2025W), K4 (2025W)

**Kerngedanken:**
- Automatische Verarbeitung heißt: Die Software des Empfängers liest die Rechnung ein, prüft und bucht sie, ohne dass jemand Werte abtippt. Das spart Arbeit und vermeidet Tippfehler; diese Begründung gehört zum Erläutern dazu.
- Strukturiert heißt: Jeder Wert steht in einem festen Feld mit Bedeutung (etwa „Nettobetrag“). In einem reinen PDF sieht ein Programm nur Text an Positionen.
- Eine XRechnung ist reines XML und wird für Menschen erst über ein Anzeigeprogramm lesbar. Bei ZUGFeRD macht das eingebettete XML die Datei zur eRechnung, nicht das PDF darum.
- Die Prüfwege ergänzen sich. Die Validierung mit XSD prüft Aufbau, Pflichtfelder und Datentypen, findet aber keine logischen Fehler wie eine falsch berechnete Summe; dafür braucht es zusätzlich inhaltliche Plausibilitätsprüfungen und Unit-Tests. Vertieft wird das im Nachbarstichpunkt zur Schemavalidierung.
- Abgrenzung: Fristen zur eRechnung-Pflicht sind nicht Kern dieses Stichpunkts und werden nicht von sich aus vertieft.

**Typische Missverständnisse:**
- Viele denken, jede digital verschickte Rechnung sei eine eRechnung; richtig ist: Jede eRechnung ist digital, aber nur der strukturierte Datenaspekt macht eine digitale Rechnung zur eRechnung.
- Viele denken, das Ziel der eRechnung sei „papierlos“ oder „schneller verschickt“; richtig ist: Das leistet auch ein PDF, Hauptziel ist die automatische Verarbeitung beim Empfänger.

**Fachwörter:**
- eRechnung: Rechnung mit strukturiertem Datenaspekt
- visueller Aspekt: für Menschen lesbar
- Datenaspekt: maschinell verarbeitbar
- XRechnung: eRechnung als reines XML
- ZUGFeRD: PDF mit eingebettetem XML
- zertifizierter Validator: geprüftes Werkzeug zur Prüfung gegen die Spezifikation
- Schemadateien (XSD): Regeln für Aufbau und Datentypen
- Testdaten: künstliche oder anonymisierte Daten

**So fragt die IHK:**
- Das Thema kam bisher in einer Prüfung vor, in zwei aufeinanderfolgenden Aufgaben (zusammen rund 30 Punkte). Operatoren: erläutern, nennen, erklären.
- Erste Aufgabe, Material war ein englischer Text einer EU-Stelle zur elektronischen Rechnung:
  - Hauptziel erläutern (3 Punkte). Gezählt wurden automatische Verarbeitung und „menschenlesbare Darstellung zweitrangig“.
  - Zwei Aspekte einer digitalen Rechnung erläutern (6 Punkte). Gezählt wurden digitales Format, visueller Aspekt für den Menschen, Datenaspekt für den Computer.
- Zweite Aufgabe zur Umsetzung des Formats:
  - Drei Möglichkeiten nennen, wie die Implementierung der Protokoll-Spezifikation entspricht (3 Punkte, vier Lösungen zugelassen).
  - Zwei Punkte zur Nutzung einer Website zum Hochladen von eRechnungen erläutern (6 Punkte). Gezählt wurden: keine Echtdaten wegen Vertraulichkeit, Ergebnisse ohne Zertifizierung womöglich fehlerhaft, Teil- oder Vollprüfung. Andere Antworten waren möglich.
  - An einer XML-Rechnung erklären, warum Schemavalidierung allein nicht reicht (gehört zu PB1-7-1-1).
- Die Antworten muss man aus dem englischen Material ableiten können. Bei „erläutern“ gibt es Punkte nur mit Begründung.

**Fallen:**
- Beim Hauptziel nur eine Hälfte nennen. Verlangt sind beide: automatische Verarbeitung und „menschenlesbare Darstellung zweitrangig“.
- Beim reinen PDF nur „zählt nicht“ oder „ist nicht erlaubt“ schreiben, ohne den fehlenden strukturierten Datenaspekt als Grund.
- Nur einen der Aspekte erläutern, wo zwei verlangt sind.
- Als Prüfmöglichkeit „gründlich testen“ schreiben, ohne zu sagen, wie.
- Beim Online-Validator Stichworte liefern statt erläuterter Punkte („…, weil …“).
- „Datenschutz“ nennen, ohne die Folge: deshalb nur Testdaten oder anonymisieren.
