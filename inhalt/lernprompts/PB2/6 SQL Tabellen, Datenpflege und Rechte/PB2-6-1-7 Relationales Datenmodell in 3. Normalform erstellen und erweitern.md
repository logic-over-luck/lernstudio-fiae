Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: SQL: Tabellen, Datenpflege und Rechte › Datenbank aufbauen, pflegen und absichern › Relationales Datenmodell in 3. Normalform erstellen und erweitern

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

## Stoff: Relationales Datenmodell in 3. Normalform erstellen und erweitern

Ziel: Aus einem Text, Formular oder ER-Modell ein relationales Datenmodell in 3. Normalform zeichnen: Tabellen mit atomaren Attributen, Primär- und Fremdschlüssel mit PK und FK, Beziehungen mit Kardinalitäten, n:m über Zwischentabellen – und ein vorgegebenes Modell erweitern.

Das muss ich können:

### K1 – Tabellen mit atomaren Attributen ableiten (Stufe 3 Anwenden)
Du kannst aus einem Formular, einer Beispieltabelle oder einem Anforderungstext die nötigen Tabellen ableiten und jedes Attribut atomar anlegen (z. B. Name und Vorname, Straße, PLZ und Ort, Datum und Uhrzeit getrennt); Angaben, die laut Aufgabe nicht erfasst werden, lässt du weg.

Erklärung:
So gehst du vor:
- **Dinge suchen, über die etwas gespeichert wird** (Patient, Arzt, Raum, Tarif, Messstelle): Jedes bekommt eine eigene Tabelle. Stammdaten (wer, was, wo) ziehst du aus den Vorgängen (Termin, Buchung, Messwert) heraus.
- **Attribute atomar machen:** Atomar heißt: ein einzelner Wert je Zelle, der sich nicht sinnvoll weiter zerlegen lässt. Eine Zelle wie „Sommer, Hans / Hohlweg 17, 55555 Bergtal“ wird zu Name, Vorname, Straße, PLZ, Ort; „20.04.2021 – 10.00 Uhr“ wird zu Datum und Uhrzeit. (So schreiben es die IHK-Lösungen; ein Zeitpunkt in einer Spalte mit passendem Datentyp wäre ebenfalls atomar.)
- **Dieselbe Sache nur einmal:** Kommt der Arzt in zwei Vorgängen vor (Termin und Diagnose), gibt es trotzdem nur eine Tabelle Arzt.
- **Weglassen, was nicht verlangt ist:** Steht in der Aufgabe „wird nicht erfasst“ oder „weitere Attribute können vernachlässigt werden“, legst du dafür keine Spalte an.
Die Lösungshinweise geben Punkte je Tabelle mit ihren Attributen – eine vergessene Stammtabelle kostet also gleich mehrfach (Tabelle, Primärschlüssel, Fremdschlüssel, Beziehung).

### K2 – Schlüssel mit PK und FK kennzeichnen (Stufe 3 Anwenden)
Du kannst Tabellen in der Schreibweise der IHK notieren – Tabellenname, darunter oder dahinter die Attribute – und jeden Primärschlüssel mit PK und jeden Fremdschlüssel mit FK kennzeichnen; der Fremdschlüssel heißt wie der Primärschlüssel, auf den er verweist.

Erklärung:
Alle sechs Aufgaben verlangen wörtlich: „Kennzeichnen Sie Primärschlüssel mit PK und Fremdschlüssel mit FK.“ Die Lösungshinweise schreiben das Kürzel in Klammern hinter das Attribut:
- `Raum: RaumID (PK), Bezeichnung`
- `Untersuchungstermin: UTNr (PK), PatientID (FK), ArztID (FK), RaumID (FK), Datum, Uhrzeit`
Regeln:
- **Jede Tabelle hat einen Primärschlüssel** – meist eine Nummer oder ID (`KundenNr`, `RaumID`).
- **Der Fremdschlüssel trägt denselben Namen** wie der Primärschlüssel der anderen Tabelle (`RaumID` → `RaumID`).
- Ist ein Attribut beides, schreibst du **(PK)(FK)** (kommt in Zwischentabellen vor).
- Zeigen **zwei Fremdschlüssel auf dieselbe Tabelle** (z. B. Start- und Zielstation einer Fahrt), können sie nicht gleich heißen: Benenne sie nach ihrer Rolle (`StartStationNr`, `EndStationNr`) und zeichne zwei Linien.
- Vorgegebene Tabellen sind als Kasten gezeichnet (oben der Name, darunter die Attribute); zeichne deine Tabellen genauso.
- **Datentypen gehören nicht ins Modell**, solange die Aufgabe sie nicht verlangt.
Für jeden richtigen PK und jeden richtigen FK gibt es eigene Punkte (je 0,5 bis 1). Unterstreichen wie in manchen Lehrbüchern reicht nicht sicher – schreib PK und FK aus.

### K3 – Beziehungen mit Kardinalitäten, FK auf der n-Seite (Stufe 3 Anwenden)
Du kannst jede Beziehung als Linie zwischen zwei Tabellen einzeichnen, die Kardinalitäten 1 und n an die Enden schreiben und den Fremdschlüssel in die Tabelle auf der n-Seite setzen; Sätze wie „jede Kontrolle findet auf einer bestimmten Fahrt statt, auf einer Fahrt mehrere Kontrollen“ übersetzt du in 1:n.

Erklärung:
Im fertigen relationalen Modell der IHK-Lösungen gibt es **nur 1:n-Beziehungen**.
- **Beide Richtungen lesen:** „Jede Kontrolle findet auf einer bestimmten Fahrt statt“ (Kontrolle → 1 Fahrt) und „auf einer Fahrt können mehrere Kontrollen durchgeführt werden“ (Fahrt → n Kontrollen) ergibt Fahrt (1) — Kontrolle (n).
- **Der Fremdschlüssel steht auf der n-Seite:** `Kontrolle: KID (PK), FID (FK)`. Merkhilfe: Die Tabelle mit „viele“ merkt sich, zu wem sie gehört.
- **Linie ziehen und beschriften:** „1“ an die Tabelle mit dem Primärschlüssel, „n“ an die Tabelle mit dem Fremdschlüssel.
- Zu jedem Fremdschlüssel gehört genau eine Linie – und umgekehrt. Zähl am Ende nach: Anzahl FK = Anzahl Beziehungen.
Für jede Beziehung mit richtiger Kardinalität gibt es 1 Punkt; eine Linie ohne 1 und n zählt nicht voll.

### K4 – n:m über Zwischentabelle auflösen (Stufe 3 Anwenden)
Du kannst eine n:m-Beziehung erkennen, auch wenn sie versteckt formuliert ist (z. B. „zu jeder Kontrolle gehören mindestens zwei Mitarbeiter“), und sie über eine Zwischentabelle mit zwei Fremdschlüsseln in zwei 1:n-Beziehungen auflösen.

Erklärung:
**Erkennen:** Zu einem A gehören mehrere B **und** zu einem B mehrere A. Die Gegenrichtung steht oft nicht im Text – prüf sie selbst: „Zu jeder Kontrolle gehören mindestens zwei Mitarbeiter“ – und ein Mitarbeiter macht viele Kontrollen → n:m (auch m:n geschrieben; beides heißt „viele zu viele“). Auch Listen in einem Formular (mehrere Tarife je Kunde, mehrere Räume je Buchung) deuten darauf hin.
**Auflösen:** Eine Zwischentabelle bekommt die Primärschlüssel beider Tabellen als Fremdschlüssel:
- `Kontrolle_Mitarbeiter: KID (PK)(FK), MID (PK)(FK)`
- Beziehungen: Kontrolle (1) — Kontrolle_Mitarbeiter (n) und Mitarbeiter (1) — Kontrolle_Mitarbeiter (n)
**Primärschlüssel der Zwischentabelle** – beide Formen stehen in IHK-Lösungen:
- **zusammengesetzt** aus beiden Fremdschlüsseln, je mit (PK)(FK) – passt, wenn jede Kombination nur einmal vorkommt
- **eigene Nummer** (z. B. `KTNr (PK)`) plus zwei FK – nötig, wenn dieselbe Kombination mehrfach vorkommen kann (derselbe Kunde bucht denselben Tarif zweimal)
Name der Zwischentabelle: beide Tabellennamen mit Unterstrich (`Kunde_Tarif`) oder ein fachlicher Name (`Tätigkeit`). Die Zahl „mindestens zwei“ lässt sich im Modell nicht abbilden – es bleibt bei „n“.

### K5 – Attribute der Beziehung in die Zwischentabelle (Stufe 3 Anwenden)
Du kannst Attribute, die zur Beziehung gehören und nicht zu einer der beiden Tabellen (z. B. Zeitraum, Datum und Dauer, Funktion), in die Zwischentabelle legen.

Erklärung:
Frag bei jedem Attribut: **Wovon hängt es ab?**
- Beginn und Ende eines gebuchten Tarifs hängen weder nur vom Kunden noch nur vom Tarif ab, sondern von **diesem Kunden mit diesem Tarif** → Zwischentabelle: `Kunde_Tarif: KTNr (PK), KundenNr (FK), TarifNr (FK), Beginn, Ende`
- Datum und Dauer einer erbrachten Serviceleistung → `Tätigkeit: TätigkeitsID (PK), SLID (FK), MitarbeiterNr (FK), Datum, Dauer`
- Mengen wie „3 x Beamer“ je Buchung gehören genauso an die Beziehung.
Das Attribut der Beziehung kann selbst ein Fremdschlüssel sein: Übt jeder Arzt bei einer Operation genau eine Funktion aus und stehen die Funktionen in einer eigenen Tabelle, kommt `FunktionID (FK)` in die Zwischentabelle Operation–Arzt (Aufgabe 2025S; dazu gibt es keine amtliche Lösung, das ist die naheliegende Umsetzung).

### K6 – 3. Normalform: Arten und Kenndaten auslagern (Stufe 3 Anwenden)
Du kannst ein Modell in die 3. Normalform bringen, indem du Angaben, die nicht direkt vom Primärschlüssel ihrer Tabelle abhängen (z. B. die Einheit einer Messgröße, Hersteller und Bezeichnung eines Gerätetyps, Telefon eines Ansprechpartners), in eine eigene Tabelle mit 1:n-Beziehung auslagerst.

Erklärung:
„In der 3. Normalform“ steht in jeder dieser Aufgaben. Praktisch heißt das: **Jedes Nichtschlüssel-Attribut hängt direkt vom Primärschlüssel seiner Tabelle ab** – nicht von einem anderen Attribut (transitive Abhängigkeit). Die Regeln selbst lernst du in PB1-6-1-3.
Typische Fälle aus den Lösungen:
- **Einheit** (°C) hängt von der Messgröße (Temperatur) ab, nicht vom einzelnen Messwert → `Messgröße: MessgrößenNr (PK), Bezeichnung, Einheit`; in Messwerte steht nur `MessgrößenNr (FK)`.
- **Bezeichnung und Hersteller** gelten für alle Geräte desselben Typs → `Kenndaten_Messgerät: KDM_Nr (PK), Bezeichnung, Hersteller`; Herstellungsdatum, Anschaffungsdatum und letzte Prüfung bleiben beim einzelnen Messgerät.
- **Telefon und Mail** hängen am Ansprechpartner, nicht am Kunden → eigene Tabelle Ansprechpartner, im Kunden nur der Fremdschlüssel.
- **Arten** (Raumart, Vorkommnisart, Maßnahmenart, Operationsart) bekommen eigene Tabellen. Hat eine Art keine eigenen Eigenschaften und nennt die Aufgabe sie nur als Angabe, zählt auch ein einfaches Attribut – andere richtige Lösungen werden gewertet.
Faustregel: Was sich bei vielen Datensätzen wörtlich wiederholen würde **und** eigene Eigenschaften hat, wird eine eigene Tabelle; die bisherige Tabelle bekommt den Fremdschlüssel (n-Seite).

### K7 – Vorgegebenes Modell erweitern (Stufe 3 Anwenden)
Du kannst ein vorgegebenes Datenmodell um neue Anforderungen erweitern: vorhandene Tabellen bleiben, wie sie sind, ihre Primärschlüssel verwendest du als Fremdschlüssel in den neuen Tabellen, und du ergänzt fehlende Fremdschlüssel und Beziehungen.

Erklärung:
In drei der sechs Aufgaben ist ein Teil des Modells schon da (eine Tabelle, vier Tabellen ohne Beziehungen oder ein ER-Modell).
- **Vorhandenes nicht umbauen:** Tabellen nicht umbenennen, nicht doppelt anlegen, vorhandene Attribute stehen lassen.
- **Vorhandene Primärschlüssel weiterverwenden:** Ist `Diagnose: DiagnoseID (PK), ICD_10_GM_Code, Kurzbeschreibung` vorgegeben, bekommt die neue Tabelle Patientendiagnose `DiagnoseID (FK)`; Beziehung Diagnose (1) — Patientendiagnose (n).
- **Anforderung für Anforderung abarbeiten:** Jeder Satz der Aufgabe ergibt eine Tabelle, ein Attribut oder eine Beziehung. Hak ihn ab, wenn er im Modell steht.
- **Auch vorhandene Tabellen brauchen manchmal einen neuen Fremdschlüssel**, wenn sie auf der n-Seite einer neuen Beziehung stehen.
- „Pro Operation wird nur eine Anästhesieform verwendet, dieselbe Anästhesieform bei mehreren Operationen“ → Anästhesieform (1) — Operation (n), Fremdschlüssel in Operation.
Punkte gibt es für das Neue; für eine vorgegebene Tabelle gibt es keinen Tabellenpunkt.

### K8 – ER-Modell erweitern und in Tabellen überführen (Stufe 3 Anwenden)
Du kannst ein ER-Modell um Entitätstypen und Beziehungen mit Kardinalitäten erweitern und es in ein relationales Modell überführen: Aus jedem Entitätstyp wird eine Tabelle, eine 1:n-Beziehung wird zum Fremdschlüssel auf der n-Seite, eine m:n-Beziehung zur Zwischentabelle mit den Attributen der Beziehung.

Erklärung:
Einmal (2022W) war beides verlangt: erst das ER-Modell erweitern, dann einen Teil in Tabellen überführen. ER-Modelle selbst lernst du in PB1-6-1-1.
**ER-Modell erweitern:** Rechteck = Entitätstyp, Raute = Beziehung (mit Verb), an den Linien 1, n oder m. Im ER-Modell **bleibt m:n stehen**; Attribute der Beziehung hängen an der Raute. Punkte: je Entitätstyp 1, je Beziehung mit Kardinalität 1. Steht da „Attribute müssen nicht eingetragen werden“, trägst du auch keine ein.
**Überführen:**
- Entitätstyp → Tabelle, Schlüsselattribut → (PK)
- 1:n → Fremdschlüssel in der Tabelle auf der n-Seite
- m:n → Zwischentabelle mit zwei Fremdschlüsseln und den Attributen der Raute
- zusammengesetzte Attribute aufteilen (Anschrift → Straße, PLZ, Ort)
Beispiel: Mitarbeiter (m) – erbringt [Datum, Dauer] – (n) Serviceleistung wird zu
- `Mitarbeiter: MitarbeiterNr (PK), Name, Vorname, Straße, PLZ, Ort, Telefon`
- `Tätigkeit: TätigkeitsID (PK), SLID (FK), MitarbeiterNr (FK), Datum, Dauer`
- `Serviceleistung: SLID (PK), Bezeichnung`
- Mitarbeiter (1) — Tätigkeit (n), Serviceleistung (1) — Tätigkeit (n)
Werden danach Datentypen verlangt: Dauer → Integer, Name und Bezeichnung → VarChar, **PLZ → VarChar** (keine Zahl, wegen führender Null).

## Lehrnotiz: Relationales Datenmodell in 3. Normalform erstellen und erweitern

**Aufteilung:**
- Tabellen finden, Attribute atomar: K1
- Schreibweise mit PK und FK: K2
- 1:n-Beziehungen und Platz des Fremdschlüssels: K3
- 3. Normalform: K6 – Pause möglich nach der 3. Normalform
- n:m und Attribute der Beziehung: K4, K5
- ER-Modell erweitern und überführen: K8
- Vorgegebenes Modell erweitern: K7 – hier kommt alles Vorige zusammen

**Schon geprüft:** In Prüfungen: K1 (2021W, 2022S), K2 (2023W, 2024W), K3 (2021W, 2024W), K4 (2022S, 2024W), K5 (2022S, 2022W, 2025S), K6 (2022S, 2023W), K7 (2021W, 2025S), K8 (2022W)

**Kerngedanken:**
- Der Vorgang auf einem Formular (Buchung, Termin, Ausleihe) wird selbst eine Tabelle und braucht einen eigenen Primärschlüssel, auch wenn das Formular keine Nummer dafür nennt.
- Ein Vorgang, der zwei Stammtabellen verbindet, ist oft schon die Zwischentabelle einer n:m-Beziehung.
- Probe für die 3. Normalform: Wäre der Wert bei einem anderen Datensatz derselben Art oder desselben Typs derselbe? Dann gehört er in die Tabelle der Art. Sonst müsste man ihn bei einer Änderung in vielen Zeilen ändern, und eine vergessene Zeile ergibt widersprüchliche Daten.

**Typische Missverständnisse:**
- Viele denken, bei 1:n trage die 1-Seite ihre vielen Partner ein; richtig ist: Dann stünden mehrere Werte in einer Zelle, deshalb steht der Fremdschlüssel in der Tabelle, deren Zeilen genau einen Partner haben (n-Seite).
- Viele denken, m:n werde in beiden Modellen gleich gezeichnet; richtig ist: Im ER-Modell bleibt die Raute mit m und n stehen (dort keine Zwischentabelle zeichnen), im relationalen Modell gibt es keine direkte Linie zwischen den beiden Tabellen, nur die Zwischentabelle mit zwei 1:n-Linien.

**Fachwörter:**
- atomar: ein Wert je Zelle, nicht weiter zerlegbar
- Primärschlüssel: kennzeichnet jeden Datensatz eindeutig
- Fremdschlüssel: verweist auf Primärschlüssel einer anderen Tabelle
- Kardinalität: wie viele Partner auf der anderen Seite
- Zwischentabelle: löst n:m in zwei 1:n auf
- 3. Normalform: Nichtschlüssel-Attribute hängen nur vom Primärschlüssel ab
- transitive Abhängigkeit: Attribut hängt von einem anderen Nichtschlüssel-Attribut ab
- Entitätstyp: Rechteck im ER-Modell, wird zur Tabelle

**So fragt die IHK:**
- In sechs von neun Prüfungen war das relationale Modell die Aufgabe 3 mit 16 bis 25 Punkten.
- Vorgegeben war ein Dokument (Übersicht, Bestätigung, Beispieltabellen mit Zellen wie „Name, Vorname / Anschrift“) oder ein Anforderungstext aus Einzelsätzen. Dreimal war ein Teil des Modells schon da: eine Tabelle, Tabellen ohne Beziehungen oder ein ER-Modell, das erst erweitert und dann teilweise überführt wurde.
- Operatoren: erstellen, erweitern, einzeichnen, bestimmen, kennzeichnen. Die Kennzeichnung mit PK und FK wird immer verlangt, die 3. Normalform fast immer; manchmal steht „Weitere Attribute können vernachlässigt werden“.
- Gezählt wird einzeln: je Tabelle mit allen Attributen 1 Punkt (große 2), je PK und je FK 0,5 bis 1, je Beziehung mit Kardinalität 1, einmal 0,5 je Attribut. Fast immer steht dabei „Auch andere Lösungen sind möglich“.
- Punkte gehen typisch verloren bei versteckten n:m-Beziehungen, bei Arten und Typen, die eigene Tabellen brauchen, und bei Attributen der Beziehung.
- Einmal folgten Datentypen für drei Attribute (3 Punkte). Zu 2025S gibt es keine amtliche Lösung.

**Fallen:**
- Alle Angaben des Formulars in die Vorgangstabelle packen, statt die Stammdaten herauszuziehen.
- Der Vorgangstabelle keinen Primärschlüssel geben, weil das Formular keine Nummer nennt.
- 1 und n an der Linie vertauschen.
- Beim Auslagern in eine Art- oder Typtabelle den Fremdschlüssel in der alten Tabelle vergessen.
- Angaben des einzelnen Stücks (eigenes Datum, eigener Preis, eigener Bestand) mit in die Typtabelle schieben.
- Nur eine von mehreren transitiven Abhängigkeiten auflösen.
- Eine Menge oder ein Datum der Beziehung in eine der beiden Stammtabellen legen. Umgekehrt bleibt ein Wert, der für den Partner immer gilt (sein Preis, sein Stundensatz), in dessen Stammtabelle.
- Der Zwischentabelle einen Schlüssel nur aus den beiden Fremdschlüsseln geben, obwohl dieselbe Kombination wiederkommen kann (an mehreren Tagen). Dann nimmt man eine eigene Nummer; ein Schlüssel aus beiden Fremdschlüsseln plus Datum zählt auch, solange die Kombination höchstens einmal am Tag vorkommt.
- Eine Mehrfachangabe (mehrere Klassen, mehrere Merkmale je Datensatz) als ein Attribut in die Stammtabelle schreiben statt als eigene Tabelle mit Zwischentabelle.
- Beim Überführen die Attribute der Raute vergessen oder in eine der beiden Tabellen legen.
- Beim Erweitern den Fremdschlüssel in die neue Tabelle auf der 1-Seite setzen statt in die vorhandene Tabelle auf der n-Seite.

**Material:**
Regeln, nach denen eine Zeichnung geprüft wird (Schreibweise der IHK-Lösungen):
- Tabelle: Kasten mit dem Namen oben und den Attributen darunter. Die Textzeile `Tabelle: Attribut (PK), Attribut (FK), …` zählt genauso.
- Primärschlüssel: „(PK)“ hinter dem Attribut, in jeder Tabelle. Bei einem zusammengesetzten Schlüssel trägt jedes Teilattribut „(PK)“.
- Fremdschlüssel: „(FK)“ hinter dem Attribut; ist ein Attribut beides, steht „(PK)(FK)“.
- Beziehung: Es gibt keine Rauten und keine m:n-Linien. In Textform: `A (1) — B (n)`.
- ER-Teil (nur wenn verlangt): Rechteck, Raute mit Verb, 1, n oder m an den Linien. Attribute werden nur eingetragen, wenn die Aufgabe es verlangt.
- Gleichwertig sind: andere Namen; ein fachlich eindeutiges Merkmal (Kennzeichen, Kürzel) als Primärschlüssel statt einer Nummer; eine eigene Nummer statt eines zusammengesetzten Schlüssels in der Zwischentabelle.
- Nicht bewertet werden Datentypen (wenn nicht verlangt), Anordnung und Sauberkeit. Ein Folgefehler zählt nur einmal: Ein falscher Primärschlüssel, der folgerichtig als Fremdschlüssel weiterverwendet wird, kostet nur an der ersten Stelle.
