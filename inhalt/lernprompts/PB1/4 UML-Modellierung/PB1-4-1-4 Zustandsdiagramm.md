Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: UML-Modellierung › UML-Diagramme in der Tiefe › Zustandsdiagramm

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

## Stoff: Zustandsdiagramm

Ziel: Die Zustände eines Objekts aus einer Beschreibung herauslesen und mit Übergängen aus Ereignis, Bedingung und Aktion vollständig darstellen.

Das muss ich können:

### K1 – Zustandsdiagramm aus einer Beschreibung erstellen (Stufe 3 Anwenden)
Du kannst aus einer Beschreibung die Zustände eines Objekts herauslesen und mit Startzustand, Zuständen, Übergängen und gegebenenfalls Endzustand als Zustandsdiagramm erstellen.

Erklärung:
Vorgehen:
- **Startzustand** (im Belegsatz: Startknoten; gefüllter Kreis)
- jeden Zustand als **abgerundetes Rechteck** mit Namen (meist Adjektiv/Partizip: „frei“, „belegt“, „gesperrt“)
- **Übergänge** als Pfeile
- **Endzustand** (im Belegsatz: Endknoten; Kreis mit Punkt), falls das Objekt endet
Zustände findest du in der Beschreibung an Formulierungen wie „ist …“, „befindet sich …“.

### K2 – Übergänge: Ereignis [Bedingung] / Aktion (Stufe 3 Anwenden · in der Prüfung vorgegeben: Notation im Belegsatz bzw. Katalog-Anhang)
Du kannst Übergänge in der Form „Ereignis [Bedingung] / Aktion“ beschriften, zum Beispiel „Abfahrt [Auslastung >= 70 %]“ oder „[Veranstaltung beendet] / freigeben“.

Erklärung:
Beschriftung eines Übergangs: **Ereignis [Bedingung] / Aktion** (das Ereignis löst den Übergang aus, die Bedingung muss dafür wahr sein, die Aktion wird beim Übergang ausgeführt)
- `Abfahrt [Auslastung >= 70 %]` – Ereignis mit Bedingung
- `[Veranstaltung beendet] / freigeben` – Bedingung mit Aktion
Jeder Teil darf fehlen, die Reihenfolge bleibt.

### K3 – Lückenlose Bedingungen mit Grenzwerten (Stufe 3 Anwenden)
Du kannst Bedingungen mit Grenzwerten so setzen, dass sich die Fälle nicht überschneiden und keiner fehlt (z. B. unter 50 %, 50 bis 80 %, über 80 %), und Übergänge in beide Richtungen sowie die Rückkehr in einen früheren Zustand darstellen.

Erklärung:
Bedingungen müssen **lückenlos** und **überschneidungsfrei** sein:
- `[< 50 %]`, `[>= 50 % und <= 80 %]`, `[> 80 %]`
Prüffrage: Landet jeder mögliche Wert in genau einem Fall?
Für den Wertebereich des eigenen Zustands ist kein Übergang nötig: Trifft keine Bedingung zu, bleibt das Objekt in seinem Zustand (ein Selbstübergang ist erlaubt, aber nicht verlangt).
Übergänge können in **beide Richtungen** laufen und in einen früheren Zustand **zurückführen**.

### K4 – Zustandsaktionen entry, do, exit und after (Stufe 3 Anwenden · in der Prüfung vorgegeben: Notation im Belegsatz bzw. Katalog-Anhang)
Du kannst Aktionen innerhalb eines Zustands mit entry, do und exit sowie zeitgesteuerte Übergänge mit after angeben.

Erklärung:
Im Zustand selbst:
- `entry /` Aktion beim Betreten
- `do /` Tätigkeit, solange der Zustand gilt
- `exit /` Aktion beim Verlassen
- `ereignis / aktion` (interne Transition): Das Ereignis löst die Aktion aus, der Zustand wird dabei **nicht** verlassen, entry und exit laufen also nicht erneut – anders als beim Selbstübergang (K6)
Zeitgesteuert: `after(30 min)` am Übergang – nach Ablauf der Zeit (gezählt ab dem Betreten des Zustands) wird gewechselt.

### K5 – Zustands- gegen Aktivitätsdiagramm (Stufe 2 Verstehen)
Du kannst Zustandsdiagramm und Aktivitätsdiagramm nach ihrem Zweck unterscheiden: Ein Zustandsdiagramm zeigt, welche Zustände ein einzelnes Objekt annimmt und durch welche Ereignisse es wechselt, und passt deshalb zu Objekten mit einem Statusattribut (z. B. eine Bestellung: offen, bezahlt, versandt) oder zum Verhalten einer Oberfläche; ein Aktivitätsdiagramm zeigt dagegen die Abfolge der Schritte eines Ablaufs.

Erklärung:
Beide Diagramme zeigen Verhalten, aber aus verschiedener Sicht.
- **Zustandsdiagramm**: Blick auf **ein Objekt** – in welchem Zustand ist es, welches Ereignis bringt es in welchen anderen? Zwischen zwei Ereignissen *ist* das Objekt einfach in seinem Zustand
- **Aktivitätsdiagramm**: Blick auf **einen Ablauf** – welche Schritte folgen aufeinander, wer macht was, wo wird verzweigt?
- Das Zustandsdiagramm passt, wenn ein Objekt ein **Statusattribut** hat und dasselbe Ereignis je nach Zustand anders wirkt (eine Bestellung lässt sich nur stornieren, solange sie nicht versandt ist), oder für **Oberflächen**, die je nach Zustand andere Schaltflächen freigeben
- Das Aktivitätsdiagramm passt für Geschäftsprozesse und Anwendungsfälle mit mehreren Schritten und Beteiligten
Beispiel: Den Lebenslauf eines Tickets (neu → in Bearbeitung → gelöst → geschlossen) zeigt ein Zustandsdiagramm, den Ablauf „Ticket bearbeiten“ mit Rückfrage beim Kunden ein Aktivitätsdiagramm.

### K6 – Selbstübergang und Verzweigung (Stufe 3 Anwenden)
Du kannst im Zustandsdiagramm einen Selbstübergang darstellen, der vom Zustand zurück in denselben Zustand führt (z. B. jeder weitere Artikel im Zustand „Warenkorb gefüllt“), und eine Verzweigung (Raute), an der ein Übergang je nach Bedingung in verschiedene Zielzustände führt.

Erklärung:
Zwei Sonderfälle von Übergängen, die in Prüfungsdiagrammen oft fehlen:
- **Selbstübergang**: Pfeil, der am selben Zustand beginnt und endet. Das Ereignis wird verarbeitet, der Zustand bleibt gleich; beschriftet wird er wie jeder Übergang, z. B. `artikelHinzufuegen / summeErhoehen`. Der Zustand wird dabei verlassen und neu betreten, exit- und entry-Aktionen laufen also erneut
- **Verzweigung** (Raute): Ein Ereignis führt zur Raute, von dort gehen mehrere Pfeile mit Bedingungen in eckigen Klammern zu verschiedenen Zielzuständen, z. B. nach `bezahlen` [Zahlung ok] → bezahlt, [Zahlung abgelehnt] → Zahlung fehlgeschlagen
- Die Bedingungen an der Raute müssen zusammen alle Fälle abdecken und dürfen sich nicht überschneiden
Gleichwertig ohne Raute: mehrere Übergänge mit demselben Ereignis und je einer Bedingung direkt vom Zustand aus; so zeichnen es die IHK-Lösungen. Die Raute steht nicht in der Notationshilfe der IHK zum Zustandsdiagramm, nur im Lehrbuch – in der Prüfung ist die Form ohne Raute die sichere Wahl.
Beispiel Warenkorb: Im Zustand „gefüllt“ führt „Artikel hinzufügen“ per Selbstübergang zurück nach „gefüllt“; „Artikel entfernen“ führt über eine Raute nach „leer“ [letzter Artikel] oder nach „gefüllt“ [weitere Artikel].

## Lehrnotiz: Zustandsdiagramm

**Aufteilung:**
- Wozu ein Zustandsdiagramm, Abgrenzung zum Aktivitätsdiagramm: K5
- Zustände im Text finden und das Grundgerüst zeichnen: K1
- Übergänge beschriften: K2
- Bedingungen mit Grenzwerten, Hin- und Rückwege: K3
- Selbstübergang und Verzweigung: K6
- Innenleben eines Zustands und Zeit, mit dem Vergleich interne Transition gegen Selbstübergang: K4

**Schon geprüft:** In Prüfungen: K1 (2022W, 2023S, 2024W), K2 (2022W, 2024W), K3 (2023S, 2024W) · Noch nicht geprüft: K4–K6

**Kerngedanken:**
- Ein Zustand ist eine Lage, in der das Objekt verweilt, bis ein Ereignis eintritt. Das Ereignis selbst („ausleihen“, „melden“) ist kein Zustand, sondern der Auslöser eines Übergangs.
- Die drei Teile der Beschriftung haben feste Rollen: Das Ereignis stößt den Übergang an, die Bedingung muss wahr sein, damit er stattfindet, die Aktion wird beim Übergang ausgeführt. Im Text zeigt oft „nur“ auf eine Bedingung und „dabei“ auf eine Aktion.
- Bei `after(Dauer)` zählt die Zeit ab dem Betreten des Zustands. Tritt vorher ein anderes Ereignis ein, gilt dessen Übergang.

**Typische Missverständnisse:**
- Viele denken, auch die Statuswechsel eines Objekts seien „ein Ablauf“ und gehörten ins Aktivitätsdiagramm. Richtig ist: Wartet ein Objekt auf Ereignisse und reagiert je nach Zustand anders, ist es ein Zustandsdiagramm; das Aktivitätsdiagramm zeigt eine Folge von Arbeitsschritten.
- Viele denken, ein Ereignis, bei dem das Objekt im Zustand bleibt, sei immer ein Selbstübergang. Richtig ist: Dürfen exit und entry dabei nicht erneut laufen, weil sonst mitten im Zustand etwas aus- und wieder eingeschaltet würde, ist es eine interne Transition.

**Fachwörter:**
- Zustand: Lage, in der das Objekt verweilt
- Übergang: Pfeil von einem Zustand zum nächsten
- Ereignis: löst den Übergang aus
- Bedingung: muss wahr sein, in eckigen Klammern
- Aktion: wird beim Übergang ausgeführt
- Selbstübergang: Pfeil zurück in denselben Zustand
- interne Transition: Aktion im Zustand, ohne ihn zu verlassen
- Verzweigung: Raute mit Bedingungen zu verschiedenen Zielzuständen

**So fragt die IHK:**
- Dreimal vorgekommen, jeweils mit dem Operator „erstellen“ und 10 bis 15 Punkten, auf freier Fläche mit vorgegebenem Startknoten. Die Notation liegt im Belegsatz bei, die Übergangsform dort als `operation[bedingung]/verhalten`.
- Form 1: Aus Spiegelstrichen („ist frei“, „kann gesperrt werden“) Zustände und Übergänge fast nur mit Ereignissen herauslesen, vereinzelt eine Bedingung mit Aktion. Gezählt wird je Zustand 1 Punkt und je Übergang 1 Punkt.
- Form 2: Drei Zustände nach Wertebereichen eines Messwerts (Prozentgrenzen), der regelmäßig aktualisiert wird. Verlangt sind alle Übergänge zwischen den Zuständen mit lückenlosen Bedingungen.
- Form 3: Vier Zustände mit Start- und Endzustand, ein gemeinsames Ereignis mit Bedingungen nach Grenzwerten. Einzelne Übergänge sind ausdrücklich ausgeschlossen. Start und Ende zählen je 0,5 Punkte, jeder Zustand 1, jeder Übergang mit Bedingung 1.
- Bewertet werden Zustände, Pfeilrichtung, Ereignis und Bedingung je Übergang und die Grenzwerte. Die Lösungen sind „beispielhaft“.
- entry/do/exit, `after` und die Raute standen bisher in keiner IHK-Lösung. Die Wahl zwischen Zustands- und Aktivitätsdiagramm wurde nicht eigens gefragt.

**Fallen:**
- Den Zweck nur mit „zeigt Verhalten“ begründen; das gilt für beide Diagramme.
- Tätigkeiten wie im Aktivitätsdiagramm als Kästen aneinanderreihen.
- Den Endzustand vergessen, obwohl der Text sagt, dass das Objekt nicht mehr geführt wird.
- Einen Übergang nur einmal zeichnen, obwohl dasselbe Ereignis laut Text aus mehreren Zuständen möglich ist.
- Die Pfeilrichtung vertauschen.
- Übergänge zeichnen, die der Text ausschließt (zum Beispiel wenn ein Wert nur sinken kann).
- Die Bedingung ohne eckige Klammern schreiben, die Aktion vor das Ereignis setzen oder die Bedingung als eigenen Zustand zeichnen.
- Ein Ereignis erfinden, wo der Text nur eine Bedingung nennt.
- Übergänge „Transaktionen“ nennen. Richtig ist Transition oder Zustandsübergang.
- An derselben Grenze `>` und `<` verwenden (Lücke) oder `>=` und `<=` (Überschneidung).
- Bei Zuständen nach Wertebereichen die Übergänge vergessen, die eine Stufe überspringen.
- In der Bedingung einen zweiten, mit „oder“ genannten Grund weglassen oder die falsche Größe vergleichen.
- Weder Selbstübergang noch interne Transition zeichnen, wo der Text sagt, dass das Objekt im Zustand „bleibt“, und dabei eine Aktion nennt.
- Einen Zählwert, der sich nur erhöht, als eigenen Zustand zeichnen.
- Statt einer Verzweigung zwei Pfeile mit verschiedenen Ereignissen zeichnen, obwohl es ein Ereignis mit zwei Ausgängen ist.
- Eine einmalige Aktion als `do` notieren statt als `entry` oder `exit`.
- `after` in den Zustand schreiben statt an den Übergang.
- Die Wahl der internen Transition begründen, ohne die Folge zu nennen (exit und entry liefen sonst erneut).

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird (wie im Belegsatz und in den IHK-Lösungen):
- Startknoten (im Stoff: Startzustand): ausgefüllter Kreis mit Pfeil zum ersten Zustand, in der Prüfung meist vorgegeben.
- Zustand: Rechteck mit abgerundeten Ecken, der Name steht darin. Aktionen des Zustands stehen unter dem Namen, durch eine Linie abgetrennt: `entry / aktion`, `do / aktion`, `exit / aktion`, `ereignis / aktion`.
- Übergang: Pfeil vom Ausgangs- zum Zielzustand, beschriftet `ereignis [bedingung] / aktion`.
- Selbstübergang: Pfeil vom Zustand zurück auf denselben Zustand. Bei Aufgaben mit Wertebereichen ist er erlaubt, wird aber nicht gezählt.
- Zeitereignis: `after(Zeitdauer)` als Auslöser am Übergang.
- Verzweigung (nicht im Belegsatz der IHK, nur im Lehrbuch): Raute mit einem Eingang (trägt das Ereignis) und mehreren Ausgängen mit `[Bedingung]`. Für den Restfall gilt auch `[sonst]`. Gleichwertig sind mehrere Übergänge mit demselben Ereignis direkt vom Zustand.
- Endknoten (im Stoff: Endzustand): ausgefüllter Kreis mit Ring. Ein Endknoten mit mehreren eingehenden Pfeilen und mehrere Endknoten sind beide richtig. Ein Zwischenzustand davor (etwa „gelöscht“) gilt ebenfalls.
- Namen von Zuständen und Ereignissen gelten sinngemäß.
