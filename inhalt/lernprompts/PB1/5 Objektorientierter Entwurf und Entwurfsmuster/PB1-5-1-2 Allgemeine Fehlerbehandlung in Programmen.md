Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Allgemeine Fehlerbehandlung in Programmen

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
