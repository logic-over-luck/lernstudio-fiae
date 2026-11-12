Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: UML-Modellierung › UML-Diagramme in der Tiefe › UML-Überblick und Anwendungsfalldiagramm

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

## Stoff: UML-Überblick und Anwendungsfalldiagramm

Ziel: Die UML-Diagramme ihrem Zweck zuordnen und aus einer umfangreichen Anforderungsbeschreibung ein vollständiges Anwendungsfalldiagramm mit include, extend samt Bedingung und Generalisierung erstellen.

Das muss ich können:

### K1 – UML-Diagramme und ihr Zweck (Stufe 2 Verstehen)
Du kannst die UML-Diagramme des Katalog-Anhangs ihrem Zweck zuordnen: Anwendungsfalldiagramm (was das System für wen leistet), Klassendiagramm (Aufbau aus Klassen und Beziehungen), Sequenzdiagramm (Nachrichten zwischen Objekten in zeitlicher Folge), Zustandsdiagramm (Zustände eines Objekts und ihre Übergänge), Aktivitätsdiagramm (Ablauf); das Klassendiagramm ist ein Struktur-, die übrigen sind Verhaltensdiagramme.

Erklärung:
- **Anwendungsfalldiagramm:** *was* das System *für wen* leistet
- **Klassendiagramm:** Aufbau aus Klassen und Beziehungen (**Strukturdiagramm**)
- **Sequenzdiagramm:** Nachrichten zwischen Objekten in **zeitlicher Folge**
- **Zustandsdiagramm:** Zustände **eines** Objekts und die Übergänge
- **Aktivitätsdiagramm:** **Ablauf** von Tätigkeiten
Alle außer dem Klassendiagramm sind **Verhaltensdiagramme**.

### K2 – Vollständiges Anwendungsfalldiagramm selbst erstellen (Stufe 3 Anwenden)
Du kannst aus einer umfangreichen Anforderungsbeschreibung ein vollständiges Anwendungsfalldiagramm selbst erstellen, nicht nur ein begonnenes ergänzen: alle Akteure und Anwendungsfälle finden und die Anwendungsfälle aus Sicht des Akteurs mit Gegenstand und Tätigkeit benennen (z. B. „Termin buchen“, nicht „Datenbank abfragen“); die Elemente (Systemgrenze, Assoziation, include, Generalisierung) kennst du aus AP1-8-3-1.

Erklärung:
Die Elemente kennst du aus AP1 (Systemgrenze, Akteure, Assoziation, include, extend, Generalisierung). Neu ist, das **ganze Diagramm selbst** aus einem längeren Text zu erstellen:
- Text durchgehen: Wer nutzt das System? → **alle Akteure**
- Was will jeder Akteur erreichen? → **Anwendungsfälle**
- Benennen aus Sicht des Akteurs mit **Gegenstand + Tätigkeit** („Termin buchen“), nicht als interner Systemvorgang („Datenbank abfragen“)
- **include** (im Text „bei jeder“, „immer“): gestrichelter Pfeil vom Basis-Anwendungsfall zum eingeschlossenen; „wenn“, „falls“, „bei Bedarf“, „optional“ heißt extend (K3)
- zum Schluss prüfen: jede Anforderung abgebildet, Systemgrenze mit Namen

### K3 – extend-Beziehung mit Bedingung und Erweiterungspunkt (Stufe 3 Anwenden)
Du kannst bei einer extend-Beziehung (aus AP1) die Bedingung als Notiz an die Beziehung schreiben und den Erweiterungspunkt im Basis-Anwendungsfall angeben, zum Beispiel „Ressourcen planen“ erweitert „Terminanfrage abschließen“ mit der Notiz „wenn Spezialtermin“.

Erklärung:
**extend** (aus AP1) = Teilablauf, der **nur unter einer Bedingung** dazukommt. Neu in PB1:
- die **Bedingung** als **Notiz** an der extend-Beziehung: „wenn Spezialtermin“, verkürzt auch in geschweiften Klammern am Pfeil
- der **Erweiterungspunkt** im Basis-Anwendungsfall unter „extension points“: die Stelle, an der die Erweiterung eingreift. In den IHK-Lösungen bis 2024 wurde nur die Bedingung gezählt; der Erweiterungspunkt steht im Anhang des Prüfungskatalogs – zeichne ihn trotzdem mit
Beispiel: „Ressourcen planen“ erweitert „Terminanfrage abschließen“. Der extend-Pfeil (gestrichelt, «extend») zeigt vom erweiternden zum Basis-Anwendungsfall – andersherum als bei include.

### K4 – Nutzen grafischer Modelle mit UML (Stufe 2 Verstehen)
Du kannst erläutern, wozu Software mit einer einheitlichen grafischen Sprache wie der UML modelliert wird: Ein Modell stellt den Entwurf kompakt und mit eindeutig festgelegten Symbolen dar, sodass Auftraggeber und Entwickler dasselbe darunter verstehen, Missverständnisse vor der Programmierung auffallen und die Diagramme später als Dokumentation dienen.

Erklärung:
Text allein lässt viel Spielraum: Unter „Kunde verwaltet Termine“ stellen sich zwei Leser oft Verschiedenes vor. Ein Modell zwingt dazu, Beteiligte, Abläufe und Beziehungen ausdrücklich festzulegen.
- **kompakt**: Ein Diagramm zeigt auf einer Seite, wofür man sonst mehrere Seiten Text braucht
- **eindeutig**: Jedes Symbol hat eine feste Bedeutung; weil die UML ein Standard (der OMG) ist, lesen Menschen und Werkzeuge sie gleich
- **Kommunikation**: Der Auftraggeber prüft am Diagramm, ob das Gewünschte gemeint ist – ein Fehler im Diagramm kostet wenig, einer im fertigen Programm viel
- **Planung und Dokumentation**: Dieselben Diagramme sind Vorlage für die Umsetzung und helfen später neuen Teammitgliedern bei der Einarbeitung
Beispiel: Im Anwendungsfalldiagramm eines Ticketsystems sieht die Fachabteilung sofort, dass „Ticket eskalieren“ fehlt – lange bevor eine Zeile Code geschrieben ist.

### K5 – Struktur- gegen Verhaltensdiagramme (Stufe 2 Verstehen)
Du kannst erklären, was Struktur- und Verhaltensdiagramme der UML unterscheidet (welches Diagramm wohin gehört: K1): Strukturdiagramme zeigen statisch, woraus ein System besteht und wie seine Teile zusammenhängen, Verhaltensdiagramme zeigen dynamisch, was das System tut und was über die Zeit geschieht – Abläufe, Nachrichten und Zustandswechsel.

Erklärung:
Die UML-Diagramme fallen in zwei Gruppen – je nachdem, ob sie den **Aufbau** oder das **Geschehen** zeigen.
- **Strukturdiagramme (statisch)**: welche Teile es gibt und wie sie verbunden sind, wie eine Momentaufnahme – z. B. das **Klassendiagramm** mit Klassen, Attributen und Beziehungen
- **Verhaltensdiagramme (dynamisch)**: was passiert – Abläufe, Nachrichten, Zustandswechsel: **Aktivitäts-**, **Sequenz-** und **Zustandsdiagramm**
- Merkhilfe: Strukturdiagramme beantworten „Woraus besteht es?“, Verhaltensdiagramme „Was tut es?“ – deshalb zählt auch das **Anwendungsfalldiagramm** zum Verhalten: Es zeigt, was das System für seine Akteure leistet
Beispiel Onlineshop: Das Klassendiagramm zeigt, dass eine `Bestellung` mehrere `Positionen` hat; das Sequenzdiagramm zeigt, in welcher Reihenfolge `Warenkorb`, `Bestellung` und `Zahlungsdienst` beim Bezahlen Nachrichten austauschen.

### K6 – Zusammenhang der Diagramme eines Entwurfs (Stufe 2 Verstehen)
Du kannst erläutern, wie die UML-Diagramme eines Entwurfs zusammenhängen: Aus den Anwendungsfällen ergeben sich Methoden der Klassen, ein Aktivitäts- oder Sequenzdiagramm beschreibt den Ablauf eines einzelnen Anwendungsfalls genauer, und die Übergänge im Zustandsdiagramm eines Objekts werden durch Methoden seiner Klasse ausgelöst.

Erklärung:
Die Diagramme eines Entwurfs sind keine Einzelstücke, sondern **Sichten auf dasselbe System** – was in einem steht, muss zu den anderen passen.
- **Anwendungsfall → Klasse**: Jeder Anwendungsfall braucht mindestens eine Methode, die ihn ausführt („Fahrrad ausleihen“ → `ausleihen()` in `Fahrrad`)
- **Anwendungsfall → Aktivitäts- oder Sequenzdiagramm**: Ein Anwendungsfall ist nur ein Name; seinen Ablauf beschreibt ein Aktivitätsdiagramm (Schritte, Verzweigungen) oder ein Sequenzdiagramm (welche Objekte sich welche Nachrichten schicken)
- **Zustandsdiagramm → Klasse**: Der Zustand steht in einem Attribut (z. B. `status`), jeder Übergang wird durch eine Methode ausgelöst (`sperren()`, `freigeben()`)
Nutzen: Passen die Diagramme nicht zusammen – etwa ein Übergang ohne passende Methode –, steckt im Entwurf eine Lücke.
Beispiel Fahrradverleih: „Fahrrad ausleihen“ im Anwendungsfalldiagramm, `ausleihen()` in der Klasse `Fahrrad`, Übergang verfügbar → ausgeliehen im Zustandsdiagramm.

### K7 – Assoziation als zu bauende Schnittstelle (Stufe 2 Verstehen)
Du kannst erklären, was ein Anwendungsfalldiagramm für die Umsetzung bedeutet: Jede Verbindung zwischen einem Akteur und einem Anwendungsfall ist eine Schnittstelle, die gebaut werden muss – eine Benutzeroberfläche für einen Menschen oder eine technische Schnittstelle zu einem externen System; wird die Software umfangreich, teilt man sie auf mehrere Anwendungsfalldiagramme auf.

Erklärung:
Das Anwendungsfalldiagramm zeigt nicht nur, **was** das System leistet, sondern auch, **wo es nach außen offen ist**.
- Jede Linie Akteur–Anwendungsfall heißt: Hier tauscht jemand von außen Daten mit dem System aus, also braucht es dafür einen Zugang
- **menschlicher Akteur** → Benutzeroberfläche (Maske, Dialog, Webseite); **externes System** → technische Schnittstelle (z. B. REST-API, Dateiimport)
- Die Linien ergeben eine erste Liste der zu bauenden Oberflächen und Schnittstellen – nützlich für Aufwandsschätzung und Planung
- Bei großen Systemen wird ein einziges Diagramm unübersichtlich; man teilt es nach Teilbereichen oder Akteuren auf
Beispiel Webshop: Kunde – „Bestellung aufgeben“ braucht eine Bestellseite, Zahlungsdienst – „Zahlung prüfen“ eine Anbindung an dessen API.

## Lehrnotiz: UML-Überblick und Anwendungsfalldiagramm

**Aufteilung:**
- Wozu modellieren: K4
- Fünf Diagramme, zwei Gruppen: K1, K5
- Ganzes Anwendungsfalldiagramm aus einem Text: K2
- extend mit Bedingung und Erweiterungspunkt: K3
- Was aus dem Diagramm für Entwurf und Umsetzung folgt: K6, K7

**Schon geprüft:** In Prüfungen: K2 (2021W, 2024S, 2025W), K3 (2021W, 2024S, 2025W) · Noch nicht geprüft: K1, K4–K7

**Kerngedanken:**
- Der Text verrät die Beziehung durch Signalwörter: „bei jeder“, „immer“, „dabei wird stets“ heißt include; „wenn“, „falls“, „wünscht“, „bei Bedarf“, „optional“ heißt extend.
- Bei extend ist der Basis-Anwendungsfall der, der auch ohne die Erweiterung vollständig abläuft; bei include der, der den eingeschlossenen als festen Teil immer mit ausführt. Bei include zeigt der Pfeil vom Basis- zum eingeschlossenen Anwendungsfall, bei extend vom erweiternden zum Basis-Anwendungsfall.
- Auch ein fremdes System ist ein Akteur; man erkennt es an Wendungen wie „wickelt ein externer … ab“ oder „meldet automatisch“.
- „Kann alles, was … kann“ heißt Generalisierung zwischen Akteuren: Der spezielle Akteur erbt die Linien des allgemeinen und bekommt nur seine zusätzlichen.

**Typische Missverständnisse:**
- Viele denken, zu einem eingeschlossenen Anwendungsfall gehöre eine eigene Linie vom Akteur; richtig ist: Der Akteur hängt am Basis-Anwendungsfall, der eingeschlossene ist nur über include verbunden.
- Viele denken, Sequenz- und Aktivitätsdiagramm zeigten dasselbe; richtig ist: Das Sequenzdiagramm zeigt, wer wem welche Nachricht schickt, das Aktivitätsdiagramm, welche Tätigkeit auf welche folgt.

**Fachwörter:**
- Systemgrenze: Rechteck um die Anwendungsfälle, mit Systemnamen
- Akteur: Rolle oder fremdes System außerhalb
- Assoziation: Linie zwischen Akteur und Anwendungsfall
- include: Anwendungsfall wird immer mit ausgeführt
- extend: kommt nur unter einer Bedingung dazu
- Erweiterungspunkt: Stelle im Basis-Anwendungsfall, an der erweitert wird
- Generalisierung: spezieller Akteur erbt vom allgemeinen
- Verhaltensdiagramm: zeigt, was das System tut

**So fragt die IHK:**
- Standardaufgabe: dreimal „erstellen“ (14, 14 und 18 Punkte) aus vier bis sechs Anforderungssätzen. Vorgegeben war höchstens eine leere Fläche oder ein Rahmen mit Titel; die Notation liegt im Belegsatz bei.
- Gezählt wird je Element: Systemgrenze mit Namen 1 Punkt, je Akteur mit passender Beziehung 1, je Anwendungsfall 1, je include- oder extend-Beziehung 1, Generalisierung zwischen Akteuren 1, Assoziationen je 0,5.
- Jede Lösung hatte mindestens eine extend-Beziehung mit Notiz („wenn …“). Typisch ist ein include, das mehrere Anwendungsfälle teilen (Login).
- Knappe Namen wie „Login“ wurden akzeptiert; „Andere Lösungen sind möglich“ steht immer dabei.
- Einmal (6 Punkte) wurde ein fertiges Diagramm nur gelesen, um User Stories zu schreiben.
- Zu K1, K4, K5, K6 und K7 gibt es keine echte Aufgabe. Denkbar sind kleine Teilaufgaben („Nennen Sie …“, „Erläutern Sie …“, 2–4 Punkte).

**Fallen:**
- Beim Nutzen der UML nur „übersichtlich“ schreiben oder zwei Gründe mit gleicher Bedeutung nennen. Bei „erläutern“ braucht jeder Grund seine Begründung.
- Zustands- und Aktivitätsdiagramm vertauschen: Zustände eines einzelnen Objekts gegen eine Folge von Tätigkeiten.
- Das externe System als Akteur übersehen oder einen Akteur in die Systemgrenze zeichnen.
- Die Systemgrenze unbeschriftet lassen; der Name bringt einen eigenen Punkt.
- Einen Anwendungsfall nur mit dem Gegenstand benennen, ohne Tätigkeit.
- Statt der Generalisierung alle Linien des allgemeinen Akteurs beim speziellen noch einmal ziehen.
- Trotz „wenn“ oder „wünscht“ im Text include zeichnen, oder die include-Richtung auf extend übertragen.
- Die Bedingung an der extend-Beziehung weglassen oder den Erweiterungspunkt in den erweiternden Anwendungsfall schreiben.
- Eine fehlende Methode zu einem Anwendungsfall oder Übergang nur „Fehler“ nennen, ohne zu sagen, dass dann nichts im Programm ihn ausführen kann.
- Eine Assoziation nur als „Verbindung“ beschreiben, ohne zu sagen, was gebaut werden muss; die Schnittstelle zum externen System wird gern vergessen.
- Für den Ablauf eines Anwendungsfalls ein Klassen- oder Zustandsdiagramm nennen.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird:
- Systemgrenze: Rechteck mit dem Namen des Systems. Anwendungsfälle stehen als Ellipsen innen, Akteure außen.
- Akteur: Strichmännchen mit Namen. Ein externes System ist ein Rechteck mit «actor».
- Assoziation: durchgezogene Linie ohne Pfeil zwischen Akteur und Anwendungsfall.
- «include»: gestrichelter Pfeil, Spitze beim eingeschlossenen Anwendungsfall.
- «extend»: gestrichelter Pfeil, Spitze beim Basis-Anwendungsfall. „<<extends>>“ wurde nicht abgezogen.
- Bedingung: Notiz (Rechteck mit Eselsohr) an der extend-Beziehung, als kurzer Wenn-Satz oder als „condition: {…}“; verkürzt in geschweiften Klammern am Pfeil.
- Erweiterungspunkt: im Basis-Anwendungsfall in einem abgetrennten Bereich unter „extension points“; die Notiz kann ihn zusätzlich nennen. Keine IHK-Lösung zeichnete ihn: mit üben, bei der Bewertung ist die Notiz entscheidend.
- Generalisierung: durchgezogene Linie mit hohlem Dreieck am allgemeinen Akteur.
- Andere sinnvolle Namen gelten.
