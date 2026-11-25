Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: UML-Modellierung › UML-Diagramme in der Tiefe › Zustandsdiagramm

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Von der Beschreibung zum Zustandsdiagramm: (1) Du liest die Beschreibung und sammelst die Zustände des Objekts, erkennbar an Formulierungen wie „ist frei“ oder „befindet sich in Prüfung“. (2) Du legst fest, in welchem Zustand das Objekt beginnt, und führst den Übergang vom Startzustand dorthin. (3) Für jeden Zustand suchst du die Ereignisse, die ihn verlassen, und bestimmst zu jedem Ereignis den Zielzustand; jedes wird ein beschrifteter Übergangspfeil. (4) Hängt ein Übergang von einer Bedingung ab oder löst er eine Aktion aus, schreibst du sie dazu: Ereignis [Bedingung] / Aktion. (5) Endet das Objekt, führst du den letzten Übergang in den Endzustand. (6) Zum Schluss prüfst du, ob jeder Zustand erreichbar ist und jedes Ereignis der Beschreibung im Diagramm vorkommt.

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
