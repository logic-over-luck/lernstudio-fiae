Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: UML-Modellierung › UML-Diagramme in der Tiefe › Sequenzdiagramm

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen: gern mit Beispielen aus dem Alltag und dem Warum dahinter.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
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

## Stoff: Sequenzdiagramm

Ziel: Den Nachrichtenaustausch zwischen Objekten zeitlich darstellen: Lebenslinien, Aufrufe und Antworten, Aktivierungsbalken, Selbstaufrufe und kombinierte Fragmente.

Das muss ich können:

### K1 – Nachrichtenarten, Selbstaufrufe, Erzeugen und Zerstören (Stufe 3 Anwenden · in der Prüfung vorgegeben: Notation im Belegsatz bzw. Katalog-Anhang)
Du kannst synchrone und asynchrone Nachrichten, Antworten (mit dem Rückgabewert beschriftet), Selbstaufrufe mit versetztem Aktivierungsbalken sowie das Erzeugen (create) und Zerstören (X) von Objekten darstellen.

Erklärung:
- **synchron:** gefüllte Pfeilspitze, Aufrufer wartet
- **asynchron:** offene Pfeilspitze, Aufrufer wartet nicht
- **Antwort:** gestrichelter Pfeil zurück, mit Rückgabewert beschriftet; gibt die Methode nichts zurück (void), bleibt er unbeschriftet – in der Prüfung trotzdem zeichnen
- **Selbstaufruf:** Pfeil (synchron: durchgezogen, gefüllte Spitze) auf die eigene Lebenslinie, dort ein zweiter, leicht **versetzter** Aktivierungsbalken; an dessen Ende eine gestrichelte Antwort zurück auf den Hauptbalken
- **create:** gestrichelter Pfeil mit offener Spitze, beschriftet «create» (oder `new Klasse(…)`), direkt auf das Rechteck des neuen Objekts, das erst auf dieser Höhe beginnt; **X** am Ende der Lebenslinie = zerstört

### K2 – Aktivierungsbalken richtig setzen (Stufe 3 Anwenden)
Du kannst Aktivierungsbalken richtig setzen: Sie beginnen mit dem Aufruf und enden mit der Antwort; ein Aufruf innerhalb einer laufenden Methode erzeugt einen weiteren Balken.

Erklärung:
- Der **Aktivierungsbalken** (schmales Rechteck auf der Lebenslinie, solange eine Methode läuft) **beginnt** beim eingehenden Aufruf, **endet** mit der Antwort.
- Ruft die Methode selbst etwas auf, bleibt ihr Balken stehen; beim Aufgerufenen beginnt ein **neuer** Balken.
- Selbstaufruf: zweiter, leicht **versetzter** Balken auf derselben Lebenslinie.

### K3 – Kombinierte Fragmente alt, opt und loop (Stufe 3 Anwenden · in der Prüfung vorgegeben: Notation im Belegsatz bzw. Katalog-Anhang)
Du kannst Alternativen mit dem kombinierten Fragment alt und Bedingungen in eckigen Klammern darstellen, zum Beispiel [Daten im Cache] und [Daten nicht im Cache], sowie optionale (opt) und wiederholte (loop) Abläufe.

Erklärung:
Kombinierte Fragmente sind Rahmen um einen Teil des Ablaufs:
- **alt:** Alternativen, durch gestrichelte Linie getrennt, je mit Bedingung: `[Daten im Cache]` / `[Daten nicht im Cache]`; der letzte Bereich darf `[else]` heißen
- **opt:** wird nur ausgeführt, wenn die Bedingung gilt; sonst geschieht nichts (nur ein Bereich – bei „wenn … sonst …“ nimmst du alt)
- **loop:** wird wiederholt, z. B. `loop [für jeden Kunden]`

### K4 – Sequenzdiagramm nach Ablaufbeschreibung erstellen (Stufe 3 Anwenden)
Du kannst Teilnehmer mit Lebenslinien darstellen und ein (begonnenes) Sequenzdiagramm nach einer Ablaufbeschreibung erstellen oder ergänzen: Nachrichten von oben nach unten in zeitlicher Folge mit Methodenname und Parametern, auch für einen Webservice-Aufruf mit Request (z. B. GET /shareholders?city=Köln) und Response mit Statuscode.

Erklärung:
Vorgehen nach Ablaufbeschreibung:
- Teilnehmer oben nebeneinander, darunter **Lebenslinien** (senkrechte gestrichelte Linien)
- Nachrichten **von oben nach unten** in zeitlicher Folge mit Methodenname und Parametern
- bei Webservices: Request `GET /shareholders?city=Köln` als synchrone Nachricht (durchgezogen, gefüllte Spitze), Response als gestrichelte Antwort zurück mit **Statuscode** (`200 OK`) und Daten
Begonnene Diagramme in der Prüfung genau an den vorhandenen Stil anpassen.

### K5 – Synchrone gegen asynchrone Nachricht (Stufe 2 Verstehen)
Du kannst synchrone und asynchrone Nachrichten im Sequenzdiagramm unterscheiden: Bei einer synchronen Nachricht (gefüllte Pfeilspitze) wartet der Sender, bis der Empfänger fertig ist und antwortet; bei einer asynchronen (offene Pfeilspitze) arbeitet er sofort weiter, etwa nachdem er einen Druckauftrag in eine Warteschlange gestellt hat.

Erklärung:
Der Unterschied liegt darin, **ob der Sender wartet**.
- **synchron**: durchgezogene Linie mit **gefüllter** Pfeilspitze; der Sender wartet, bis die Antwort (gestrichelte Linie) zurückkommt – typisch für einen Methodenaufruf, dessen Ergebnis man braucht, z. B. `pruefeLogin(name, pw)`
- **asynchron**: durchgezogene Linie mit **offener** Pfeilspitze; der Sender stößt nur an und arbeitet weiter, er erwartet keine Antwort, deshalb folgt kein gestrichelter Antwortpfeil (meldet sich der Empfänger später, ist das eine eigene Nachricht) – z. B. Benachrichtigung verschicken, Protokolleintrag schreiben
- Folge im Diagramm: Nach einer synchronen Nachricht geht es beim Sender erst nach der Antwort weiter; nach einer asynchronen können seine nächsten Nachrichten sofort folgen
Faustregel: synchron, wenn das Ergebnis für den nächsten Schritt nötig ist; asynchron, wenn eine langsame Aufgabe den Ablauf nicht aufhalten soll.

## Lehrnotiz: Sequenzdiagramm

**Aufteilung:**
- Warten oder weiterarbeiten – vorab kurz, was Teilnehmer und Lebenslinie sind: K5
- Nachrichten, Antworten, Selbstaufruf, Erzeugen und Zerstören: K1
- Aktivierungsbalken: K2
- Fragmente für Alternative, Option und Wiederholung: K3
- Ganzes Diagramm nach Ablaufbeschreibung, auch Webservice: K4

**Schon geprüft:** In Prüfungen: K1 (2022S), K2 (2022S), K3 (2024S), K4 (2022S, 2024S) · Noch nicht geprüft: K5

**Kerngedanken:**
- Ein Aktivierungsbalken zeigt die Zeit, in der eine Methode läuft. Wer auf eine Antwort wartet, ist also selbst noch aktiv.
- Der Text sagt, welches Fragment passt: „für jede …“ heißt loop, „wenn …“ ohne „sonst“ heißt opt, „wenn … sonst …“ heißt alt. Fragmente dürfen ineinander stecken.
- Beim Webservice ist der Request eine synchrone Nachricht vom Client zum Server. Die Response ist die Antwort darauf. Sie steht unter allem, was der Server zur Bearbeitung des Requests tut (etwa eine Datenbankabfrage), weil sie erst danach zurückgeht.
- Die Lebenslinie zeigt nur die Reihenfolge, keine Dauer: Was später geschieht, steht weiter unten.

**Typische Missverständnisse:**
- Viele denken, jedes „wenn“ im Text sei ein alt-Fragment; richtig ist: Geschieht im anderen Fall nichts, ist es opt mit nur einem Bereich.
- Viele denken, asynchron heiße nur „andere Pfeilspitze“; richtig ist: Der Sender wartet nicht. Deshalb folgt keine gestrichelte Antwort direkt auf den Pfeil, und seine nächste Nachricht kann sofort folgen. Meldet sich der Empfänger später, ist das eine eigene Nachricht.
- Viele denken, die Response sei eine neue Nachricht des Servers; richtig ist: Sie ist eine Antwort, also gestrichelt, beschriftet mit Statuscode und Daten.

**Fachwörter:**
- Lebenslinie: senkrechte gestrichelte Linie unter einem Teilnehmer
- Aktivierungsbalken: schmales Rechteck, solange eine Methode läuft
- synchron: Sender wartet auf die Antwort
- asynchron: Sender stößt an, arbeitet weiter
- Selbstaufruf: Objekt ruft eigene Methode auf
- kombiniertes Fragment: Rahmen mit alt, opt oder loop
- Statuscode: Zahl in der Response, z. B. 200

**So fragt die IHK:**
- Zweimal vorgekommen, beide Male „ergänzen“ mit gezeichneter Vorlage: Teilnehmer mit Lebenslinien und ein langer Balken beim Aufrufer sind vorgegeben. Zu ergänzen sind Nachrichten, Antworten und Balken nach einer Ablaufbeschreibung in vier bis fünf Sätzen.
- Einmal (9 Punkte) war ein Beobachter-Ablauf fortzusetzen, «create»-Pfeile waren schon vorhanden. Verlangt waren ein Selbstaufruf mit versetztem Balken, Aufrufe in beide Richtungen, ein Rückgabewert als Datentyp und alle gestrichelten Antworten. Es gab je 0,5 Punkte für jede Nachricht oder Antwort, jeden Balken und jede Beschriftung.
- Einmal (11 Punkte) eine Webservice-Abfrage: GET-Request mit Endpunkt und Query-Parameter, alt-Fragment mit zwei Bedingungen, Response mit Statuscode 200 und Daten. Je Pfeil mit Beschriftung 1,5 Punkte, alt 1, Bedingungen je 0,5; Balken waren optional.
- Beide Lösungen waren rein synchron. Asynchrone Nachrichten, opt und loop stehen im Notationsanhang des Katalogs und können ebenso kommen.
- Gezählt werden Linienart, Spitze und Beschriftung; die Notation liegt im Belegsatz bei.

**Fallen:**
- Gefüllte und offene Spitze verwechseln.
- Bei der Frage „synchron oder asynchron“ nur die Spitze nennen, ohne zu sagen, ob der Sender wartet und warum.
- Beim Selbstaufruf die gestrichelte Antwort auf den Hauptbalken vergessen; erst danach antwortet das Objekt seinem Aufrufer.
- Das X vergessen, wenn der Text sagt, dass ein Objekt nicht mehr gebraucht und zerstört wird.
- Dem ersten Aufrufer, der bis zur letzten Antwort wartet, keinen durchgehenden Balken geben.
- Einem Aufgerufenen gar keinen Balken geben oder seinen Balken über seine Antwort hinaus verlängern.
- Balken weglassen, weil sie manchmal optional sind: Teils zählen sie einzeln, zeichnen schadet nie.
- Im Fragment die Bedingungen in eckigen Klammern vergessen (eigene Punkte) oder bei alt die gestrichelte Trennlinie.
- Bedingungen bei alt so schreiben, dass sie sich nicht ausschließen.
- Ein opt, das für jeden Durchlauf gilt, außerhalb des loop-Rahmens zeichnen.
- Im Request den Query-Parameter oder bei Methoden die Parameter weglassen; in der Response den Statuscode.
- Einen Selbstaufruf als Nachricht an einen anderen Teilnehmer zeichnen.
- In einer Vorlage eigene Teilnehmernamen erfinden, statt die vorhandenen zu nutzen.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird (wie im Belegsatz):
- Teilnehmer: Rechteck oben mit Namen, z. B. `k:Kunde` oder `:Kunde`; darunter die Lebenslinie.
- Synchrone Nachricht: durchgezogene Linie, gefüllte Spitze, beschriftet mit Methodenname und Parametern.
- Asynchrone Nachricht: durchgezogene Linie, offene Spitze.
- Antwort: gestrichelte Linie, offene Spitze, beschriftet mit dem Rückgabewert; bei void unbeschriftet.
- Selbstaufruf: Pfeil auf die eigene Lebenslinie, zweiter leicht versetzter Balken, gestrichelte Antwort zurück auf den Hauptbalken.
- Erzeugen: gestrichelter Pfeil mit offener Spitze, «create» oder `new Klasse(…)`, direkt auf das Rechteck des neuen Objekts; dieses beginnt erst auf dieser Höhe. Zerstören: X am Ende der Lebenslinie.
- Fragment: Rahmen mit alt, opt oder loop links oben, Bedingung in eckigen Klammern. Bei alt trennt eine gestrichelte Linie die Bereiche, jeder hat eine Bedingung; `[else]` ist erlaubt.
- Die Reihenfolge der Teilnehmer ist nicht vorgeschrieben. Andere sinnvolle Beschriftungen gelten; ein konkreter Parameterwert ist nicht nötig.
- Textform im Chat: Nachrichten von oben nach unten nummerieren, Balken als „von Nachricht n bis m“ angeben.
