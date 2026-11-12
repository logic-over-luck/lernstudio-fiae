Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Datenmodellierung und Datenhaltung › Datenmodelle und Datenhaltung › ER-Modell aus Anforderungen erstellen und erweitern

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

## Stoff: ER-Modell aus Anforderungen erstellen und erweitern

Ziel: Aus einer umfangreichen Beschreibung ein vollständiges ER-Modell erstellen, auch mit rekursiven Beziehungen, und Anforderungen in passende Attribute übertragen. Ein bestehendes Modell erweitern kennst du aus AP1-8-4-1.

Das muss ich können:

### K1 – ER-Modell eines ganzen Anwendungssystems (Stufe 3 Anwenden · in der Prüfung vorgegeben: ER-Notation im Belegsatz (z. B. 2024S))
Du kannst für ein ganzes Anwendungssystem ohne Vorlage ein ER-Modell erstellen und dabei Modellierungsentscheidungen treffen, die über die Elemente aus AP1-8-4-1 hinausgehen: mehrere Beziehungen mit unterschiedlicher Bedeutung zwischen denselben Entitätstypen (Arzt betreut Patient, Arzt wird ein Termin zugewiesen) und einen Vorgang mit eigenen Beziehungen als eigenen Entitätstyp statt als Beziehung (Termin mit Patient, Arzt und Terminart).

Erklärung:
Die Elemente (Entitätstyp, Attribut, Beziehung, Kardinalität, Primärschlüssel, Beziehungsattribut) kennst du aus AP1. Neu ist das **ganze Modell ohne Vorlage** mit zwei Entscheidungen:
- **mehrere Beziehungen** zwischen denselben Entitätstypen, wenn sie Verschiedenes bedeuten: Arzt „betreut“ Patient und Arzt „wird zugewiesen“ Termin
- ein **Vorgang als eigener Entitätstyp**, wenn er eigene Beziehungen zu weiteren Entitätstypen hat (Termin mit Patient, Arzt und Terminart) oder zwischen denselben Partnern mehrfach vorkommt und einzeln geführt werden muss: Ein Aktionär stellt in einer Versammlung mehrere Fragen, jede mit eigenem Zeitpunkt und Status → Entitätstyp Frage mit Aktionär 1 : n und Versammlung 1 : n. Ein einfacher Vorgang mit wenigen Angaben darf dagegen eine m:n-Beziehung mit Beziehungsattributen bleiben (Sektor „erhält“ Pflanzenschutzmittel mit Menge und Datum)
Die Notation steht im Belegsatz.
Lies den Hinweis zu Schlüsseln und Attributen genau: Bei „Verzichten Sie auf weitere Attribute“ ergänzt du keine IDs, bei „ergänzen Sie sinnvolle Primärschlüssel“ bekommt jeder Entitätstyp ein unterstrichenes Schlüsselattribut.

### K2 – Rekursive Beziehungen im ER-Modell (Stufe 3 Anwenden)
Du kannst rekursive Beziehungen einer Entität zu sich selbst modellieren, zum Beispiel „Arzt vertritt Arzt“ als m:n-Beziehung mit Start- und Enddatum als Beziehungsattributen.

Erklärung:
**Rekursive Beziehung** = eine Entität steht mit sich selbst in Beziehung.
- „Arzt **vertritt** Arzt“ (m:n) mit Beziehungsattributen `start`, `ende`
- „Mitarbeiter **ist Vorgesetzter von** Mitarbeiter“ (1:n)
Im Modell: **eine Raute** („vertritt“) mit **zwei Linien** zum selben Rechteck; an jede Linie Kardinalität und Rolle, Beziehungsattribute an die Raute.

### K3 – Anforderungen in Attribute übertragen (Stufe 3 Anwenden)
Du kannst Anforderungen aus Sicht der Beteiligten in eine passende Datenstruktur übertragen, zum Beispiel die Reihenfolge von Fragen über einen Erstellzeitpunkt und ein Zurückziehen ohne Löschen über ein Attribut istZurückgezogen.

Erklärung:
Anforderungen in Attribute und Beziehungen übersetzen:
- Reihenfolge wichtig → **Zeitstempel** (`erstelltAm`) oder eine fortlaufende Nummer
- „zurückziehen, aber nicht löschen“ → **Statusattribut** `istZurückgezogen : Boolean` (alternativ ein Zeitstempel `zurückgezogenAm`)
- „als beantwortet markieren, Zeitpunkt dokumentieren“ → **ein** Attribut `beantwortetAm` (Zeitstempel; leer = noch offen) – es ersetzt Markierung und Zeitpunkt zugleich
- „ein Dokument kann für mehrere Versammlungen relevant sein“ → m:n-Beziehung Versammlung – Dokument
- „letzter Bearbeiter soll sichtbar sein“ → Beziehung „bearbeitet zuletzt“ zu Benutzer (Benutzer 1 : n Frage); erst im relationalen Modell wird daraus ein Fremdschlüssel
Frage dich: Welche Information braucht die Anwendung später, um die Anforderung zu erfüllen?

## Lehrnotiz: ER-Modell aus Anforderungen erstellen und erweitern

**Aufteilung:**
- Ganzes Modell ohne Vorlage: Vorgang als Entitätstyp oder als Beziehung, mehrere Beziehungen zwischen denselben Entitätstypen: K1
- Rekursive Beziehungen mit Rollen und Beziehungsattributen: K2
- Anforderungen der Beteiligten in Attribute und Beziehungen übersetzen, auch als Erweiterung eines Modells: K3

**Schon geprüft:** In Prüfungen: K1 (2021W, 2023W, 2025S), K2 (2021W), K3 (2024S)

**Kerngedanken:**
- Eine Raute kann nicht mit einer weiteren Raute verbunden werden. Hat ein Vorgang eigene Beziehungen zu weiteren Entitätstypen, wird er deshalb ein Rechteck mit je einer eigenen 1:n-Beziehung. Eine Raute mit drei Linien (ternäre Beziehung) ist in der Chen-Notation zulässig, aber schwer zu lesen; der Stoff verlangt hier den Entitätstyp.
- Bei einer rekursiven Beziehung gehen zwei Linien vom selben Rechteck zur Raute. Ein zweites Rechteck für die Rolle (etwa „Vorgesetzter“) wäre falsch, weil dieselben Daten dann doppelt geführt würden.
- Hat ein einzelnes Objekt keinen Partner (die oberste Leitung hat keinen Vorgesetzten), ändert das die Kardinalität nicht.
- Hier entsteht nur das ER-Modell. Tabellen mit Fremdschlüsseln sind das Nachbarthema (Relationales Modell).

**Typische Missverständnisse:**
- Viele denken, für „Vorgesetzter“ oder „Vertreter“ brauche man ein Attribut oder ein eigenes Rechteck; richtig ist eine Raute, die das Rechteck mit sich selbst verbindet.
- Viele denken, „letzter Bearbeiter“ sei ein Textattribut mit dem Namen; richtig ist eine Beziehung zum schon vorhandenen Entitätstyp, sonst steht der Name doppelt im Modell.

**Fachwörter:**
- Entitätstyp: Zusammenfassung gleichartiger Objekte, das Rechteck
- Rekursive Beziehung: Entität steht mit sich selbst in Beziehung
- Rolle: Beschriftung, wer auf welcher Seite steht
- Beziehungsattribut: Merkmal der Verbindung, hängt an der Raute
- Kardinalität: mit wie vielen Entitäten der anderen Seite eine Entität verbunden sein kann (1, n, m)
- Zeitstempel: Datum und Uhrzeit eines Ereignisses
- Statusattribut: hält einen Zustand fest, z. B. Boolean

**So fragt die IHK:**
- Vier Aufgaben, jeweils ein großer Block mit 10–16 Punkten.
- Dreimal „erstellen“ bzw. „vervollständigen/ergänzen“: Aus einer Situationsbeschreibung von 6–9 Sätzen entsteht ein ganzes ER-Modell in Chen-Notation auf freier Fläche, teils ist ein Entitätstyp vorgegeben.
- Einmal „erweitern“: Ein vorgegebenes Modell wird um Anforderungen aus Nutzersicht ergänzt (Reihenfolge, markieren mit Zeitpunkt, zurückziehen ohne Löschen, für mehrere relevant).
- Gezählt wird je Entitätstyp (1–1,5 P), je Beziehung mit Kardinalität (1–1,5 P, teils 0,5 P je Kardinalität), je Attribut (0,5–1 P) und eigens die Attribute an einer m:n-Beziehung (1–2 P).
- Typische Prüfsteine: ein Vorgang als eigener Entitätstyp mit mehreren 1:n-Beziehungen, zwei verschiedene Beziehungen zwischen denselben Entitätstypen, eine rekursive m:n-Beziehung mit Start- und Enddatum.
- Primärschlüssel sind mal ausdrücklich nicht erforderlich, mal „sinnvoll zu ergänzen“. Oft steht dabei „Verzichten Sie auf weitere Attribute außer den genannten“.
- Die Lösungen sagen „Andere Lösungen sind möglich“. Bewertet wird die Modellierungsentscheidung, nicht der Name der Raute.

**Fallen:**
- Zwei Bedeutungen in eine Raute legen, sodass man nicht mehr sieht, welche gemeint ist.
- Umgekehrt jeden Vorgang reflexartig zum Entitätstyp machen, auch wenn er nur wenige Angaben und keine weiteren Beziehungen hat.
- Einen Vorgang mit drei Partnern als Raute zwischen zwei von ihnen zeichnen; dann fehlt die Verbindung zum dritten.
- Die Angaben des Vorgangs (Datum, Dauer) an eine Raute hängen statt an das Rechteck des Vorgangs.
- Bei den 1:n-Beziehungen eines Vorgangs die Seiten vertauschen; das n gehört zum Vorgang.
- Attribute erfinden, obwohl die Aufgabe weitere Attribute ausschließt, oder Primärschlüssel weglassen, obwohl die Aufgabe sie ausdrücklich verlangt.
- Bei der rekursiven Beziehung die Rollen weglassen; dann ist nicht erkennbar, welche Seite welche ist.
- Beziehungsattribute einer rekursiven Beziehung an das Rechteck hängen, obwohl sie für ein bestimmtes Paar gelten.
- Eine rekursive m:n-Beziehung als 1:n angeben, weil nur eine Richtung geprüft wurde.
- „Zurückziehen“ oder „Stornieren“ durch Löschen lösen, obwohl die Anforderung das Aufbewahren verlangt.
- Nur ein Ja/Nein-Attribut setzen, wo auch der Zeitpunkt verlangt ist.
- „Kann für mehrere relevant sein“ als 1:n zeichnen, ohne die Rückrichtung zu lesen.
- Einen neuen Vorgang, der eigene Beziehungen hat oder zwischen denselben Partnern mehrfach einzeln geführt werden muss, bei der Erweiterung nur als Raute statt als Entitätstyp ergänzen.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird (Chen-Notation, wie die IHK sie verwendet):
- Entitätstyp: Rechteck mit Namen. Beziehung: Raute mit Namen, je eine Linie zu den beteiligten Rechtecken. Attribut: Ellipse an Rechteck oder Raute.
- Kardinalität: 1, n oder m an der Linie, jeweils bei der Entität, die so oft vorkommt.
- Mehrere Beziehungen zwischen denselben Entitätstypen: je Bedeutung eine eigene Raute mit eigenem Namen.
- Rekursive Beziehung: eine Raute, zwei Linien zum selben Rechteck, an jeder Linie Rolle und Kardinalität. Beziehungsattribute hängen an der Raute.
- Primärschlüssel: unterstrichen oder mit „(PK)“, wenn die Aufgabe ihn verlangt. Ein ergänzter Primärschlüssel ist kein Fehler.
- Fremdschlüssel: gehören nicht ins ER-Modell, sie entstehen erst im relationalen Modell. Auf der n-Seite eingezeichnet, sind sie kein Fehler.
- Namen der Rauten sind frei, solange sie passen.
- Gleichwertige Varianten: Zeitstempel statt Boolean, fortlaufende Ganzzahl statt Zeitpunkt für die Reihenfolge. Ein zusätzliches Ja/Nein-Attribut neben dem Zeitstempel ist überflüssig, aber kein Fehler.
- Beschreibung in Textform ist möglich: `Entität A (1) – beziehung – (n) Entität B`, Attribute als Liste dahinter, bei rekursiven Beziehungen die Rolle in der Klammer.
