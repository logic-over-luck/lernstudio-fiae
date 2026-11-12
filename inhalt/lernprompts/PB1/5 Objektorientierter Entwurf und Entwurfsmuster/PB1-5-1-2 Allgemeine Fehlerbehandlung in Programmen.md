Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Allgemeine Fehlerbehandlung in Programmen

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

## Stoff: Allgemeine Fehlerbehandlung in Programmen

Ziel: Fehlerfälle erkennen und mit Ausnahmen oder festgelegten Rückgabewerten behandeln.

Das muss ich können:

### K1 – Ausnahme (Exception) und ihr Zweck (Stufe 2 Verstehen)
Du kannst erklären, was eine Ausnahme (Exception) ist und wozu sie dient: einen Fehlerfall vom normalen Ablauf trennen und an eine Stelle weitergeben, die ihn behandeln kann.

Erklärung:
Eine **Ausnahme (Exception)** ist ein Objekt, das einen Fehlerfall meldet.
- trennt den Fehlerfall vom **normalen Ablauf**
- wird **weitergereicht**, bis eine Stelle sie behandelt
Beispiel: Datei nicht gefunden → `FileNotFoundException` → Aufrufer zeigt eine Meldung an.

### K2 – Fehlerbehandlung mit try, catch und finally (Stufe 3 Anwenden)
Du kannst Fehlerbehandlung mit try, catch und finally anwenden: den gefährdeten Code in try, die Behandlung je Ausnahmeart in catch, Aufräumarbeiten wie das Schließen einer Datei in finally.

Erklärung:
- `try { … }` – Code, der fehlschlagen kann
- `catch (Ausnahmeart e) { … }` – Behandlung, **je Ausnahmeart** ein eigener Block möglich
- `finally { … }` – läuft **immer**, z. B. Datei oder Verbindung schließen

### K3 – Fehlerfälle einer Methode: Ausnahme oder Rückgabecode (Stufe 3 Anwenden)
Du kannst für eine Methode festlegen, wie sie auf Fehlerfälle (Laufzeitfehler aus AP1, z. B. ungültige Eingabe, nicht erreichbare Datei oder Datenbank) reagiert: die Eingabe prüfen und eine Ausnahme auslösen oder einen festgelegten Rückgabe- bzw. Exit-Code liefern.

Erklärung:
Für jede Methode festlegen, was bei Fehlern passiert:
- **Eingabe prüfen** (ungültig, leer, außerhalb des Bereichs)
- dann **Ausnahme auslösen** (`throw`) **oder** festgelegten **Rückgabe-/Exit-Code** liefern (z. B. `-1`, `false`, Exit-Code 1)
Typische Fehlerfälle: ungültige Eingabe, Datei oder Datenbank nicht erreichbar.

### K4 – Eingaben umwandeln und Fehler abfangen (Stufe 3 Anwenden)
Du kannst festlegen, wie ein Programm Eingaben aus Textfeldern verarbeitet: den Text vor dem Rechnen in eine Zahl umwandeln, eine fehlschlagende Umwandlung (Buchstaben, leeres Feld, Komma statt Punkt) als Ausnahme abfangen und dem Benutzer verständlich melden, statt das Programm abbrechen zu lassen.

Erklärung:
Alles, was jemand in ein Textfeld tippt, kommt als **Text** an (AP1-8-2-6). Zum Rechnen muss es umgewandelt werden – und genau dort scheitert es oft.
- die Umwandlung in einen `try`-Block, die passende Ausnahme (z. B. Zahlformatfehler) im `catch` abfangen
- im `catch` eine **verständliche Meldung** zeigen („Bitte eine Zahl eingeben“) und nicht mit einem Ersatzwert weiterrechnen
- typische Auslöser: Buchstaben, leeres Feld, Komma statt Punkt als Dezimaltrennzeichen
- das Ergebnis für die Anzeige wieder in Text umwandeln
Beispiel: Ein Rabattrechner bekommt „12,5“ – je nach Sprache scheitert die Umwandlung; das Programm meldet das freundlich, statt abzustürzen.

### K5 – Fehlercode gegen Ausnahme (Stufe 2 Verstehen)
Du kannst Fehlercodes als Rückgabewert und Ausnahmen vergleichen: Ein Fehlercode trägt wenig Information und muss nach jedem Aufruf abgefragt werden, sonst bleibt der Fehler unbemerkt; eine Ausnahme liefert Art und Meldung des Fehlers, wird bis zu einer behandelnden Stelle weitergereicht und hält den Normalablauf frei von Prüfabfragen.

Erklärung:
Es gibt zwei Wege, einem Aufrufer einen Fehler mitzuteilen:
- **Fehlercode** (z. B. `0` = in Ordnung, `-1` = Fehler, in C üblich): einfach, aber nur eine Zahl ohne Einzelheiten; der Aufrufer **muss nach jedem Aufruf prüfen** – vergisst er es, läuft das Programm mit falschen Daten weiter.
- **Ausnahme:** ein Objekt mit **Art und Meldung** des Fehlers; sie wird automatisch bis zu einer Stelle weitergereicht, die sie behandelt, und bleibt deshalb nicht unbemerkt.
- Mit Ausnahmen steht der Normalablauf ohne eingestreute `if (fehler)`-Abfragen da; die Fehlerbehandlung sammelt sich im `catch`.
Beispiel: `speichern()` liefert `-2` – heißt das „Datei gesperrt“ oder „Platte voll“? Eine Ausnahme `DateiGesperrt` mit Dateinamen sagt es direkt.
Fehlercodes bleiben an Systemgrenzen üblich, etwa als Exit-Code eines Programms für ein Skript.

## Lehrnotiz: Allgemeine Fehlerbehandlung in Programmen

**Aufteilung:**
- Was eine Ausnahme ist und wozu sie dient: K1
- try, catch und finally: K2
- Eingaben aus Textfeldern absichern: K4
- Fehlerverhalten einer Methode festlegen: K3
- Fehlercode und Ausnahme im Vergleich: K5

**Schon geprüft:** Noch nicht geprüft: K1–K5

**Kerngedanken:**
- Wo eine Ausnahme entsteht, bricht der normale Ablauf sofort ab. Steht die Stelle in einem try-Block mit passendem catch, geht es dort weiter. Sonst laufen die restlichen Anweisungen dieser Methode nicht mehr (ein finally-Block schon), und die Ausnahme geht an die aufrufende Methode, von dort notfalls weiter nach oben.
- Behandelt wird eine Ausnahme dort, wo man den Zusammenhang kennt, meist in der Oberfläche. Eine Methode tief im Programm weiß nicht, wer sie aufruft; sie meldet den Fehlerfall nur und zeigt selbst keine Meldung an.
- Ein catch-Block läuft nur im Fehlerfall, der finally-Block mit und ohne Fehler. Die Reihenfolge ist: try bis zum Fehler, passender catch, dann finally.
- Hier geht es um Fehlerfälle zur Laufzeit, mit denen ein richtiges Programm rechnen muss. Das Suchen von Programmierfehlern (Debugging) ist ein anderes Thema.

**Typische Missverständnisse:**
- Viele denken, eine Ausnahme sei ein Fehler im Code. Richtig ist: Sie ist die Meldung eines Fehlerfalls zur Laufzeit, der behandelt werden kann.
- Viele denken, eine nicht abgefangene Ausnahme werde ignoriert. Richtig ist: Sie wird weitergereicht, und fängt sie bis ganz oben niemand ab, bricht das Programm mit einer Fehlermeldung ab.
- Viele denken, nach dem catch gehe es im try-Block weiter. Richtig ist: Die restlichen Anweisungen im try-Block werden übersprungen.

**Fachwörter:**
- Ausnahme (Exception): Objekt, das einen Fehlerfall meldet
- try: umschließt Code, der fehlschlagen kann
- catch: behandelt eine bestimmte Ausnahmeart
- finally: läuft immer, für Aufräumarbeiten
- throw: löst eine Ausnahme aus
- Fehlercode: festgelegter Rückgabewert als Fehlersignal
- Exit-Code: Fehlercode eines ganzen Programms

**So fragt die IHK:**
- Das Thema wurde in diesem Prüfungsbereich noch nicht eigens geprüft; es gibt keine echte Aufgabe. Im Prüfungskatalog steht es bei den Programmiermethoden.
- Zu erwarten ist eine Aufgabe wie die übrigen Entwurfsaufgaben: Vorgegeben sind eine Methode aus dem Klassendiagramm und eine Beschreibung der Fehlerfälle.
- Mögliche Teile sind „Erläutern Sie …“ (2–4 Punkte, etwa was eine Ausnahme ist) und „Implementieren Sie in Pseudocode …“ mit try, catch und finally (5–7 Punkte). Dort zählen die Bestandteile: gefährdeter Code im try, catch je Ausnahmeart, finally zum Aufräumen, Eingabeprüfung.
- Dazu kann „Beschreiben“ oder „Beurteilen Sie …“ für Fehlercode gegen Ausnahme kommen, je Argument ein Punkt.
- Es zählt die Logik, nicht die Schreibweise. Die Struktur muss durch Einrückung erkennbar sein.

**Fallen:**
- Das Schließen von Datei oder Verbindung ans Ende des try-Blocks stellen; im Fehlerfall wird es dann übersprungen.
- Nur einen gemeinsamen catch schreiben, obwohl je Ausnahmeart eine andere Reaktion verlangt ist.
- Einen Teil des gefährdeten Codes außerhalb des try-Blocks lassen, etwa die Schleife oder bei mehreren Eingabefeldern eine der Umwandlungen.
- Soll bei einem Fehler nur ein Element einer Schleife übersprungen werden, gehört try/catch in die Schleife. Steht es außen herum, bricht die ganze Verarbeitung ab.
- Soll eine Ausnahme an den Aufrufer weitergereicht werden, darf die Methode sie nicht selbst abfangen und einen normalen Wert zurückgeben.
- Beim Festlegen des Fehlerverhaltens nur „Eingabe prüfen“ oder „Fehler ausgeben“ schreiben, ohne zu sagen, was der Aufrufer dann bekommt.
- Einen der genannten Fehlerfälle ohne Reaktion lassen.
- Die Eingabeprüfung erst nach der eigentlichen Arbeit der Methode schreiben statt an ihrem Anfang.
- Als Fehlercode einen Wert wählen, der auch ein gültiges Ergebnis sein kann, zum Beispiel 0. Auch ein Wert wie −1 kann unbemerkt in eine Rechnung eingehen.
- Beim Vergleich nur eine Seite beschreiben oder die Argumente nicht auf den Fall beziehen.
