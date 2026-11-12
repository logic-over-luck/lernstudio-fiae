Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › JSON und CSV

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

## Stoff: JSON und CSV

Ziel: JSON und CSV aufbauen, Tabellendaten in JSON umwandeln und die Einsatzbereiche der Austauschformate zuordnen.

Das muss ich können:

### K1 – Aufbau von JSON (Stufe 3 Anwenden · in der Prüfung vorgegeben: JSON-Syntax (2023W))
Du kannst den Aufbau von JSON anwenden: Objekte in geschweiften Klammern mit Paaren aus Name und Wert, Arrays in eckigen Klammern, Werte als Zeichenkette, Zahl, Wahrheitswert, null, Objekt oder Array.

Erklärung:
- **Objekt:** `{ "name": "Weingut Klein", "ort": "Mainz" }`
- **Array:** `[ 1, 2, 3 ]`
- **Werte:** Zeichenkette (in `"…"`), Zahl, `true`/`false`, `null`, Objekt, Array
- Namen stehen immer in **doppelten Anführungszeichen**, Paare durch **Komma** getrennt (kein Komma nach dem letzten)

### K2 – Tabellendaten in JSON umwandeln (Stufe 3 Anwenden · in der Prüfung vorgegeben: JSON-Syntax)
Du kannst Datensätze aus Tabellen oder Ergebnisse eines Programms in JSON umwandeln: ein Objekt je Datensatz mit den Spalten als Namen, mehrere Datensätze als Array in vorgegebener Struktur.

Erklärung:
Tabelle → JSON:
- **ein Objekt je Datensatz**, Spaltennamen werden zu **Namen**
- mehrere Datensätze als **Array**
- **Datentyp je Spalte** wählen: Zahlen, auch Nummern-Schlüssel und Fremdschlüssel, ohne Anführungszeichen (`"id": 1`, `"weingut_id": 1`); Text und Ziffernfolgen, mit denen nicht gerechnet wird (PLZ, Telefonnummer), als Zeichenkette (`"plz": "01067"`) – sonst geht die führende Null verloren
- Fremdschlüssel bleiben als eigene Paare erhalten, solange nicht eingebettet wird
Beispiel: `[ {"ip": "192.168.0.5", "mac": "00:1A:2B:3C:4D:5E"}, {"ip": "192.168.0.9", "mac": "…"} ]`
Die vorgegebene Struktur genau einhalten.

### K3 – Dokumente in JSON einbetten (Stufe 3 Anwenden)
Du kannst zusammengehörige Dokumente in JSON als Array in ein übergeordnetes Dokument einfügen, zum Beispiel die Verkaufsstellen in das Dokument des Weinguts; eingebettet wird, worauf meist gemeinsam zugegriffen wird, statt es wie in Tabellen über Schlüssel zu verknüpfen.

Erklärung:
**Einbetten** statt verknüpfen:
`{ "name": "Weingut Klein", "verkaufsstellen": [ {"ort": "Mainz"}, {"ort": "Wiesbaden"} ] }`
- eingebettet wird, worauf **meist gemeinsam** zugegriffen wird
- in Tabellen wäre das eine eigene Tabelle mit Fremdschlüssel; beim Einbetten **entfällt der Fremdschlüssel** (`weingut_id`), weil die Zugehörigkeit durch die Verschachtelung feststeht – auch die eigene `id` der Verkaufsstelle kann dann entfallen

### K4 – Aufbau einer CSV-Datei (Stufe 3 Anwenden)
Du kannst den Aufbau einer CSV-Datei anwenden: eine Zeile je Datensatz, Werte durch ein Trennzeichen (Komma oder Semikolon) getrennt, meist mit Kopfzeile; Werte, die das Trennzeichen enthalten, stehen in Anführungszeichen.

Erklärung:
CSV-Aufbau:
- **eine Zeile je Datensatz**
- Werte durch **Trennzeichen** getrennt (Komma oder, in Deutschland üblich, **Semikolon**)
- meist **Kopfzeile** mit Spaltennamen
- Werte mit Trennzeichen darin in **Anführungszeichen**: `"Müller; GmbH";Mainz`

### K5 – Austauschformate und ihr Einsatzbereich (Stufe 2 Verstehen)
Du kannst Austauschformate ihrem Einsatzbereich zuordnen: CSV für einfache Tabellen und den Austausch mit Tabellenkalkulationen, JSON für Webschnittstellen und Dokumentdatenbanken, XML für Dokumente mit strenger Struktur und Schemaprüfung.

Erklärung:
- **CSV:** einfache Tabellen, Austausch mit Tabellenkalkulation
- **JSON:** Webschnittstellen (REST-APIs, über die Programme per HTTP Daten abrufen – siehe PB1-7-1-4), Dokumentdatenbanken
- **XML:** Dokumente mit **strenger Struktur** und **Schemaprüfung** (z. B. eRechnung, Behördenaustausch)

### K6 – Datenformat: offen oder proprietär (Stufe 2 Verstehen)
Du kannst erklären, was ein Datenformat festlegt – wie die Daten in einer Datei aufgebaut sind und wie ein Programm sie interpretieren muss – und warum offene Standardformate mit veröffentlichter Spezifikation wie CSV, XML oder JSON den Austausch zwischen sonst unverträglichen Programmen ermöglichen, während ein proprietäres Format meist nur die Software seines Herstellers zuverlässig verarbeitet.

Erklärung:
Ein **Datenformat** ist die Vereinbarung, wie die Bytes einer Datei zu verstehen sind: welche Struktur die Daten haben und was jedes Stück bedeutet. Nur wer das Format kennt, kann die Daten verarbeiten.
- **offenes Standardformat:** Die Spezifikation ist veröffentlicht, jeder darf Programme bauen, die es lesen und schreiben (CSV, XML, JSON, ods – das offene Tabellenformat OpenDocument). Einfache Textformate versteht fast jedes Programm.
- **proprietäres Format:** vom Hersteller für die eigene Software, Spezifikation oft geheim oder lizenzpflichtig. Andere Programme können es nur nachbauen, oft mit Fehlern bei Sonderfällen; man wird vom Hersteller abhängig.
Beispiel: Ein Webshop soll Bestellungen an die Buchhaltung geben. Exportiert er CSV oder JSON, kann jede Buchhaltungssoftware sie einlesen; ein internes Binärformat des Shops müsste erst mühsam entschlüsselt werden.

### K7 – JSON serialisieren und parsen (Stufe 2 Verstehen)
Du kannst beschreiben, wie ein Programm Daten über JSON austauscht: Beim Export wird seine Datenstruktur (Liste, Objekt) in JSON-Text umgewandelt (serialisiert) und in eine Datei geschrieben; beim Import wird der Text eingelesen, wieder in verschachtelte Listen und Objekte umgewandelt (geparst) und ein einzelner Wert über Schlüssel und Index angesprochen, etwa der Mieter des ersten Vertrags.

Erklärung:
Im Programm liegen Daten als Objekte und Listen im Arbeitsspeicher; in eine Datei oder über das Netz geht aber nur **Text**. Deshalb wird in beide Richtungen umgewandelt:
- **Serialisieren (Export):** Datenstruktur → JSON-Text, mit einer Funktion der JSON-Bibliothek. Wahlweise eingerückt (für Menschen lesbar) oder kompakt (klein für die Übertragung). Danach schreiben und die Datei schließen.
- **Parsen (Import):** JSON-Text einlesen → verschachtelte Listen und Objekte. Ist der Text kein gültiges JSON, meldet der Parser einen Fehler.
- **Zugriff:** von außen nach innen, Schlüssel für Objekte, Index für Arrays (der Index beginnt bei 0, `[0]` ist das erste Element): `daten["vertraege"][0]["mieter"]`.
Beispiel: Eine Mietverwaltung exportiert alle Verträge als JSON, ein Abrechnungsprogramm in einer anderen Programmiersprache liest sie wieder ein – JSON ist das neutrale Zwischenstück.

## Lehrnotiz: JSON und CSV

**Aufteilung:**
- JSON aufbauen: K1
- Tabellen in JSON umwandeln: K2
- Zusammengehöriges einbetten: K3
- JSON im Programm (serialisieren, parsen, zugreifen): K7
- CSV aufbauen: K4
- Was ein Datenformat ist, offen oder proprietär: K6
- Welches Format wofür: K5

**Schon geprüft:** In Prüfungen: K2 (2023W, 2024W), K3 (2023W) · Noch nicht geprüft: K1, K4–K7

**Kerngedanken:**
- CSV kennt keine Verschachtelung, nur flache Zeilen und Spalten. Datensätze mit Unterlisten (eine Bestellung mit mehreren Positionen) passen deshalb nicht in CSV, wohl aber in JSON oder XML.
- Beim Umwandeln wird aus NULL der Tabelle `null`, aus ja/nein `true`/`false`. Datum und Uhrzeit werden zur Zeichenkette, weil JSON keinen Datumstyp hat.
- Beim Einbetten entfällt nur der Fremdschlüssel, der auf das übergeordnete Dokument zeigt. Ein Schlüssel, der auf andere Daten verweist (etwa Stammdaten), bleibt stehen.
- Die Zählung in einem Array beginnt bei 0. Das zweite Element hat also den Index 1.

**Typische Missverständnisse:**
- Viele denken, „offen“ heiße „kostenlos“; richtig ist: Entscheidend ist die veröffentlichte Spezifikation, die jeder umsetzen darf.
- Viele denken, Serialisieren und Parsen seien dasselbe; richtig ist: Serialisieren macht aus der Datenstruktur Text (Export), Parsen macht aus Text wieder die Datenstruktur (Import).

**Fachwörter:**
- Objekt: Name-Wert-Paare in geschweiften Klammern
- Array: Liste von Werten in eckigen Klammern
- Einbetten: Teil-Datensätze als Array ins übergeordnete Dokument
- Trennzeichen: Komma oder Semikolon zwischen CSV-Werten
- Kopfzeile: erste CSV-Zeile mit den Spaltennamen
- Serialisieren: Datenstruktur in JSON-Text umwandeln
- Parsen: JSON-Text in Listen und Objekte umwandeln
- proprietäres Format: Format eines Herstellers, Spezifikation nicht offen

**So fragt die IHK:**
- JSON kam als zusammenhängende Aufgabe (14 Punkte) beim Wechsel von einer relationalen zu einer Dokumenten-Datenbank vor. Gegeben waren zwei kleine Tabellen (übergeordnete Tabelle mit einer Zeile, abhängige Tabelle mit zwei Zeilen und Fremdschlüssel) und ein Kasten mit der JSON-Syntax.
- Erster Teil: „Wandeln Sie … in JSON um“ (7 Punkte, 3 und 4 je Tabelle). Erwartet war je Tabelle ein Array, je Zeile ein Objekt, Nummern und Fremdschlüssel als Zahl, die Postleitzahl als Zeichenkette.
- Zweiter Teil: „Fügen Sie … in ein Array ein, das Teil des … Dokuments ist“ (7 Punkte). Der Aufgabentext begründete das mit gemeinsamem Zugriff und begrenzter Anzahl. In der Lösung fehlen in den eingebetteten Objekten Fremdschlüssel und eigene Nummer.
- In einer anderen Prüfung sollte ein Skript Ergebnisse in ein JSON-Array schreiben, dessen Aufbau ein Beispielobjekt vorgab (8 Punkte). Für diesen Stichpunkt zählt daran, dass die Ausgabe genau der vorgegebenen Struktur folgt.
- CSV, Serialisieren/Parsen und die Wahl des Formats wurden bisher nicht eigens gefragt. Aus dem Prüfungskatalog sind Aufgaben wie „Erstellen Sie die CSV-Datei“ oder „Begründen Sie die Wahl des Austauschformats“ (2–4 Punkte) zu erwarten.
- Bewertet werden Struktur und Datentypen. Einrückung, Zeilenumbrüche und die Reihenfolge der Paare zählen nicht, und `12.5` ist so richtig wie `12.50`.

**Fallen:**
- JSON aufbauen: Namen ohne Anführungszeichen oder in einfachen Anführungszeichen schreiben.
- JSON aufbauen: Einen Wahrheitswert als Zeichenkette schreiben (`"true"`, `"ja"`).
- JSON aufbauen: Für einen fehlenden Wert `NULL`, `"null"` oder `""` schreiben statt `null`.
- JSON aufbauen: Eine Klammer nicht schließen.
- JSON aufbauen: Eine Dezimalzahl mit Komma schreiben (`12,50`); in JSON steht der Punkt (`12.50`).
- Umwandeln: Spaltennamen umbenennen oder eine Spalte weglassen.
- Umwandeln: Eine IP-Adresse oder eine Nummer mit Leerzeichen als Zahl schreiben wollen; beides ist eine Zeichenkette.
- Einbetten: Das Array hinter die schließende Klammer des übergeordneten Objekts hängen statt hinein.
- Einbetten: Dem Array keinen Namen geben oder das Komma vor dem neuen Paar vergessen.
- Einbetten: Die Begründung „gemeinsamer Zugriff“ weglassen, wenn eine Begründung verlangt ist.
- CSV: Die Kopfzeile vergessen, das Trennzeichen innerhalb der Datei wechseln oder die Spaltenreihenfolge nicht einhalten. Probe: Jede Zeile hat gleich viele Trennzeichen außerhalb von Anführungszeichen.
- CSV: Anführungszeichen um alle Textwerte für einen Fehler halten; sie sind erlaubt.
- CSV und JSON: Das Trennzeichen (etwa ein Semikolon) in einem Textwert stört nur in CSV. In JSON bleibt der Wert unverändert.
- Zugriff: Eine Ebene überspringen, also gleich mit dem Index beginnen, obwohl außen ein Objekt mit einem Schlüssel steht.
- Format wählen: JSON für die Tabellenkalkulation oder CSV für verschachtelte Daten wählen.
- Format wählen: Mit „JSON ist moderner“ begründen statt mit Verschachtelung oder Webschnittstelle.
- Format wählen: „Proprietär ist schlecht“ schreiben, ohne die nicht offene Spezifikation als Grund zu nennen.

**Material:**
Syntax-Kasten in der Art, wie er den JSON-Aufgaben beiliegt (nur anwenden, nicht auswendig lernen):
```
wert: "zeichenkette", zahl, true, false, null, objekt oder array
{
  "name": wert,
  "objektname": { "name": wert, ... },
  "arrayname": [ wert, wert, ... ]
}
```
