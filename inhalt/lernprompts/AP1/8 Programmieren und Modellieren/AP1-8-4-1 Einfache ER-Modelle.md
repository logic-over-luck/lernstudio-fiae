Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Daten, Masken und Abläufe modellieren › Einfache ER-Modelle

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

## Stoff: Einfache ER-Modelle

Ziel: Ein begonnenes ER-Modell nach einer Textbeschreibung um Entitäten, Attribute, Schlüssel, Beziehungen und Kardinalitäten ergänzen.

Das muss ich können:

### K1 – ER-Sinnbilder: Rechteck, Raute, Ellipse (Stufe 3 Anwenden)
Du kannst Entitäten als Rechtecke, Beziehungen als Rauten und Attribute als Ellipsen darstellen.

Erklärung:
In der Chen-Notation:
- **Entität:** **Rechteck** – genau genommen der Entitätstyp, also alle gleichartigen Dinge, über die Daten gespeichert werden (Kunde, Artikel, Bestellung); in der Prüfung heißt das Rechteck meist kurz „Entität“.
- **Beziehung:** **Raute** zwischen zwei Entitäten (z. B. „bestellt“).
- **Attribut:** **Ellipse**, mit einer Linie an der Entität (z. B. Name, Preis).

### K2 – Entitäten, Attribute und Beziehungen aus Text (Stufe 3 Anwenden)
Du kannst aus einer Textbeschreibung Entitäten, ihre Attribute und die Beziehungen zwischen ihnen ableiten.

Erklärung:
Lies den Text und such:
- **Substantive** für Dinge oder Personen → **Entitäten**
- deren **Eigenschaften** → **Attribute**
- **Verben**, die Entitäten verbinden → **Beziehungen**
Beispiel: „Ein Kunde mit Name und Adresse bestellt Artikel. Jeder Artikel hat eine Bezeichnung und einen Preis.“
→ Entitäten Kunde, Artikel; Beziehung „bestellt“; Attribute Name, Adresse bzw. Bezeichnung, Preis.

### K3 – Primärschlüssel je Entität (Stufe 3 Anwenden)
Du kannst im ER-Diagramm für jede Entität den Primärschlüssel ergänzen.

Erklärung:
Der **Primärschlüssel** ist das Attribut (oder die Kombination), das **jeden Datensatz eindeutig** kennzeichnet – nie leer, nie doppelt.
Im ER-Diagramm wird er **unterstrichen**.
Beispiele: Kundennummer bei Kunde, Artikelnummer bei Artikel.
Der Name eignet sich nicht – zwei Kunden können gleich heißen.
Nennt der Text kein sicher eindeutiges Merkmal, ergänzt du selbst eine Nummer als Primärschlüssel, z. B. Auftrags-ID. In Prüfungslösungen steht statt der Unterstreichung auch „(PS)“ oder „PK“ am Namen.

### K4 – Kardinalitäten 1:1, 1:n und m:n (Stufe 3 Anwenden)
Du kannst die Kardinalitäten 1:1, 1:n und m:n aus dem Text bestimmen.

Erklärung:
Frag **in beide Richtungen**: Mit wie vielen der anderen Seite ist einer verbunden?
- **1:1** – ein Mitarbeiter hat genau einen Dienstausweis, ein Ausweis gehört zu genau einem Mitarbeiter.
- **1:n** – ein Kunde hat viele Bestellungen, eine Bestellung gehört zu genau einem Kunden. (1 an der Seite von Kunde, n an der Seite von Bestellung.)
- **m:n** – ein Schüler belegt viele Kurse, ein Kurs hat viele Schüler.

### K5 – Attribute richtig zuordnen, Fremdschlüssel optional (Stufe 3 Anwenden)
Du kannst ein ER-Modell so ergänzen, dass jedes Attribut bei der richtigen Entität steht und keine Angabe doppelt gespeichert wird; einen Fremdschlüssel kannst du bei einer 1:n-Beziehung auf der n-Seite markieren, verlangt ist er im ER-Diagramm aber nicht, sondern erst im relationalen Modell.

Erklärung:
Drei Regeln:
- **Jedes Attribut zur Entität, die es beschreibt.** Der Kundenname gehört zu Kunde – stünde er bei Bestellung, würde er bei jeder Bestellung wiederholt.
- **Nichts doppelt speichern.**
- **Fremdschlüssel sind im ER-Diagramm nicht verlangt:** Die Raute zeigt die Verknüpfung schon. Markierst du ihn trotzdem, dann bei 1:n auf der **n-Seite** (Kundennummer bei Bestellung), z. B. als „Kundennummer (FK)“ oder „Kundennummer#“. Pflicht wird er erst im relationalen Modell, also in der Tabelle.

### K6 – ER-Modell um Entität erweitern (Stufe 3 Anwenden)
Du kannst ein bestehendes ER-Modell um eine Entität mit ihrer Beziehung erweitern.

Erklärung:
- Neue **Entität** als Rechteck mit **Primärschlüssel** und Attributen einzeichnen.
- **Beziehung** als Raute zur bestehenden Entität ziehen und benennen.
- **Kardinalität** eintragen.
Beispiel: Das Modell Kunde – Bestellung soll erfassen, welcher Mitarbeiter die Bestellung bearbeitet: neue Entität `Mitarbeiter` (Personalnummer unterstrichen, Name), Beziehung „bearbeitet“, Mitarbeiter 1 – n Bestellung.

### K7 – Attribute an der Beziehung (Stufe 3 Anwenden)
Du kannst Attribute, die erst durch die Beziehung entstehen, an der Beziehung einzeichnen, zum Beispiel Anzahl und Einstelldatum zwischen Pflanze und Gewächshaus.

Erklärung:
Manche Angaben gehören **weder** zur einen **noch** zur anderen Entität allein, sondern entstehen erst **durch die Beziehung**. Diese Attribute hängst du **an die Raute**.
Beispiele:
- **Menge** bei Bestellung – enthält – Artikel: Die Menge ist keine Eigenschaft des Artikels und nicht der Bestellung allein, sondern „wie viele von diesem Artikel in dieser Bestellung“.
- **Anzahl und Einstelldatum** bei Pflanze – steht in – Gewächshaus: wie viele Töpfe dieser Pflanze seit wann in diesem Gewächshaus stehen.

### K8 – Zweck eines ER-Modells (Stufe 2 Verstehen)
Du kannst erklären, wozu ein ER-Modell dient: Es stellt die bei der Analyse erhobenen Daten und ihre Beziehungen grafisch und unabhängig von einer bestimmten Datenbanksoftware dar, damit sich Auftraggeber und Entwickler vor der Umsetzung auf das Datenmodell verständigen können.

Erklärung:
Das **ER-Modell** (Entity-Relationship-Modell) entsteht in der **Planungsphase**, im konzeptionellen Entwurf.
- Es zeigt, **welche Dinge** gespeichert werden (Entitätstypen), **welche Merkmale** sie haben (Attribute) und **wie sie zusammenhängen** (Beziehungen mit Kardinalitäten).
- Es ist **unabhängig** von der späteren Datenbanksoftware.
- Als Grafik verstehen es auch Fachleute ohne Datenbankwissen: Fehler im Verständnis fallen auf, **bevor** Tabellen angelegt sind.
Beispiel: Die Leiterin der Werkstatt sieht im Modell, dass ein Auftrag nur einem Fahrzeug zugeordnet ist, und merkt an, dass Sammelaufträge vorkommen.

### K9 – Entität gegenüber Entitätstyp (Stufe 2 Verstehen)
Du kannst Entität und Entitätstyp unterscheiden: Eine Entität ist ein einzelnes, konkretes Objekt wie die Kundin mit der Kundennummer 4711, der Entitätstyp fasst gleichartige Entitäten mit denselben Attributen zusammen, zum Beispiel Kunde – ähnlich wie Objekt und Klasse.

Erklärung:
- **Entität:** ein bestimmtes, unterscheidbares Ding der realen Welt – die Kundin Anna Berg, der Laptop mit Inventarnummer L-0815.
- **Entitätstyp:** die Zusammenfassung aller gleichartigen Entitäten mit denselben Attributen – Kunde, Gerät.
Im ER-Diagramm wird der **Entitätstyp** als Rechteck gezeichnet, nicht jede einzelne Entität.
In der späteren Tabelle wird der Entitätstyp zur **Tabelle**, jede Entität zu einem **Datensatz** (Zeile).
Vergleich mit der Objektorientierung: Entitätstyp ≈ Klasse, Entität ≈ Objekt.

## Lehrnotiz: Einfache ER-Modelle

**Aufteilung:**
- Wozu ein ER-Modell und was gezeichnet wird: K8, K9, K1
- Vom Text zum Diagramm: K2, K3
- Kardinalitäten: K4 – Pause möglich nach den Kardinalitäten
- Attribute an den richtigen Platz: K5, K7
- Ein Modell erweitern: K6 – hier kommt alles Vorige an einem Stück zusammen

**Schon geprüft:** In Prüfungen: K1 (neuere Prüfung), K2 (neuere Prüfung), K3 (neuere Prüfung), K4 (2022H, 2023H), K5 (2022H, 2023H, 2024H), K6 (2024H), K7 (neuere Prüfung) · Noch nicht geprüft: K8, K9

**Kerngedanken:**
- Nennt der Text kein Merkmal, das sicher eindeutig ist, ergänzt man selbst eine Nummer als Primärschlüssel; das erwartet die IHK, auch wenn es nicht in der Aufgabe steht.
- Das Rechteck heißt genau genommen Entitätstyp; in der Prüfung steht dafür meist kurz „Entität“, beides ist richtig.
- Probe für ein Attribut an der Beziehung: Hängt der Wert davon ab, welche beiden Partner zusammenkommen (diese Bestellung und dieser Artikel), gehört er an die Raute. Ist er für einen Partner immer gleich, egal mit wem er verbunden ist (der Preis eines Artikels), gehört er zu dessen Entität.
- Der Betrieb, dem die Datenbank gehört, ist selbst keine Entität. Wie aus dem Modell Tabellen mit Fremdschlüsseln werden, ist ein eigenes Thema (Relationale Tabellen).

**Typische Missverständnisse:**
- Viele denken, „eine Bestellung enthält mehrere Artikel“ sei schon 1:n; richtig ist, dass erst die Rückrichtung entscheidet – steht ein Artikel in vielen Bestellungen, ist es m:n.
- Viele denken, bei 1:n stehe das n bei der Entität, die „viele hat“; richtig ist, dass das n bei der Entität steht, von der es viele zu einem Partner gibt.

**Fachwörter:**
- Entitätstyp: Zusammenfassung gleichartiger Objekte, das Rechteck
- Entität: ein einzelnes, konkretes Objekt
- Attribut: Merkmal einer Entität oder Beziehung
- Beziehung: Verbindung zweier Entitäten, die Raute
- Primärschlüssel: kennzeichnet jeden Datensatz eindeutig
- Kardinalität: wie viele der anderen Seite
- Fremdschlüssel: Verweis auf einen Primärschlüssel, im ER-Diagramm freiwillig
- Chen-Notation: Rechteck, Raute, Ellipse

**So fragt die IHK:**
- Im Aufgabensatz steht eine Vorlage: zwei Entitäten als Rechtecke, eine leere Raute, leere Kästchen für die Kardinalität, keine oder nur einzelne Attribute. Manchmal liegt ein Hinweisblatt zur Chen-Notation bei.
- Dazu kommt ein Text aus der Ausgangssituation. Operatoren: vervollständigen, ergänzen, erweitern, Kardinalitäten angeben; meist 5–6 Punkte.
- Gezählt wird je ein Punkt für jede Kardinalität (mit Beziehung), für die Kennzeichnung des Primärschlüssels je Entität und je Attribut oder Entität an der richtigen Stelle. „Redundanzfrei“ steht oft ausdrücklich in der Aufgabe.
- Die Lösungshinweise sagen ausdrücklich, dass Fremdschlüssel weggelassen werden dürfen.

**Fallen:**
- Ein Attribut als eigenes Rechteck zeichnen oder eine Beziehung als bloße Linie ohne Raute.
- Ein Merkmal, das mehrfach vorkommen kann (Name, Art, Sorte), als Primärschlüssel wählen.
- Bei einer neuen Entität den Primärschlüssel vergessen, weil der Text keinen nennt.
- Die Kardinalität nur in eine Richtung prüfen oder bei 1:n die Seiten vertauschen.
- Einen Fremdschlüssel auf die 1-Seite setzen.
- Die neue Raute an die falsche bestehende Entität hängen.
- Den Primärschlüssel nennen, aber nicht kennzeichnen.
- Eine Angabe, die für alle Partner gleich ist, an die Raute hängen statt an die Entität.
- Den Zweck des ER-Modells nur mit „zur Übersicht“ angeben, ohne die Abstimmung mit dem Auftraggeber vor der Umsetzung.
- Ein einzelnes, konkretes Objekt als Entitätstyp bezeichnen.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird (Chen-Notation, wie die IHK sie verwendet):
- Entität: Rechteck, der Name steht darin. Je Entitätstyp genau ein Rechteck.
- Beziehung: Raute zwischen zwei Rechtecken, mit je einer Linie zu beiden. In der Raute steht ein Name, meist ein Verb. Der Name ist frei, solange er passt.
- Attribut: Ellipse mit dem Namen darin, mit einer Linie an seiner Entität – oder an der Raute, wenn es zur Beziehung gehört.
- Primärschlüssel: Name unterstrichen. Die IHK-Lösungen lassen auch die Kennzeichnung „(PS)“ oder „PK“ gelten. Jede Entität braucht einen.
- Kardinalität: 1, n oder m an der Linie zwischen Raute und Rechteck, jeweils bei der Entität, die so oft vorkommt. 1:1: an beiden Linien eine 1. 1:n: eine 1 und ein n. m:n: an einer Linie m, an der anderen n.
- Fremdschlüssel: nicht verlangt, sein Fehlen ist kein Fehler. Ist er eingetragen, dann bei 1:n auf der n-Seite und als Fremdschlüssel gekennzeichnet. Die IHK-Lösungen schreiben dafür „#“ hinter den Namen oder „(FK)“; jede andere eindeutige Kennzeichnung gilt ebenso.
- m:n mit eigenen Attributen: Ist in der Vorlage eine Raute vorgegeben, gehören die Attribute an die Raute. Fachlich gleichwertig, aber durch keine IHK-Lösung belegt: Die Beziehung wird eine eigene Entität mit eigenem Primärschlüssel; die beiden alten Entitäten stehen dazu je 1:n, das n liegt bei der neuen Entität.
- Nicht bewertet werden Sauberkeit und Anordnung der Zeichnung.
