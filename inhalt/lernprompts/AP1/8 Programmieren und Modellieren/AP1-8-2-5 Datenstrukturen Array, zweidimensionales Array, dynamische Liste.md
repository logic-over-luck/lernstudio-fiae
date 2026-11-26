Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Datenstrukturen: Array, zweidimensionales Array, dynamische Liste

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt. Fehlende Nummern (etwa K4) sind Absicht.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet, und für alles, was eine Erklärung im Stoff nur nebenbei erwähnt.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen. Die Begründungen nimmst du aus dem Stoff und der Lehrnotiz; ergänzt du eine eigene, kennzeichne sie mit „Hintergrund, nicht aus dem Stoff: …“. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, reicht die Erklärung aus dem Stoff. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber nur mit dem, was du mir vorher erklärt hast. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Datenstrukturen: Array, zweidimensionales Array, dynamische Liste

Ziel: Datenstrukturen nach Speicherbedarf und Geschwindigkeit der Operationen vergleichen, Array und dynamische Liste abwägen und ein zweidimensionales Array lesen.

Das muss ich können:

### K2 – Eignung: Speicherbedarf und Geschwindigkeit (Stufe 2 Verstehen)
Du kannst erklären, woran man die Eignung einer Datenstruktur misst: am Speicherbedarf und an der Geschwindigkeit der Operationen, die das Programm oft braucht, weil keine Struktur alle Operationen gleich gut beherrscht.

Erklärung:
Jede Datenstruktur ist ein Kompromiss. Gemessen wird ihre **Effizienz** an zwei Größen:
- **Speicherbedarf:** Wie viel Platz braucht sie für die Daten und für Verwaltungsangaben?
- **Geschwindigkeit je Operation:** Wie schnell geht Zugriff, Einfügen, Löschen, Suchen?
Keine Struktur ist überall die beste:
- **Array:** Zugriff über den Index sehr schnell, feste Größe, Einfügen in der Mitte aufwendig.
- **Dynamische Liste:** wächst und schrumpft zur Laufzeit; dafür braucht sie meist mehr Speicher je Element, und der Zugriff auf eine bestimmte Position ist meist langsamer.
Man wählt also nach den Operationen, die das Programm **am häufigsten** ausführt.

### K4 – Array gegenüber dynamischer Liste (Stufe 2 Verstehen)
Du kannst Stärken und Schwächen eines Arrays gegenüber einer dynamischen Liste beschreiben: Das Array bietet schnellen Zugriff über den Index, hat aber eine beim Anlegen festgelegte Größe, verschwendet zu groß angelegt Speicher und macht Einfügen und Löschen aufwendig; eine dynamische Liste wächst und schrumpft dagegen zur Laufzeit.

Erklärung:
**Array – Stärken:** sehr schneller Lese- und Schreibzugriff über den Index; einfach aufgebaut, alle Elemente vom selben Typ.
**Array – Schwächen:**
- **feste Größe**, die beim Anlegen bekannt sein muss; man kann Elemente nur überschreiben, nicht anfügen oder entfernen
- großzügig angelegt (1000 Plätze für meist 30 Einträge) **verschwendet** es Speicher
- Einfügen in der Mitte heißt: alle folgenden Elemente verschieben bzw. ein neues Array anlegen
- Suche nach einem Wert muss im schlechtesten Fall alle Elemente durchgehen
**Dynamische Liste:** wächst beim Anfügen und schrumpft beim Entfernen zur Laufzeit – passend, wenn die Anzahl vorher unbekannt ist. Achtung: Je Element braucht eine verkettete Liste sogar mehr Speicher (bei ihr ist jedes Element mit dem nächsten verkettet, es speichert also zusätzlich einen Verweis darauf); sparsam ist sie nur, weil nichts auf Vorrat angelegt wird.

### K5 – Zweidimensionales Array als Array von Zeilen (Stufe 2 Verstehen)
Du kannst erklären, dass ein zweidimensionales Array ein Array von Zeilen ist: Die Länge des äußeren Arrays ist die Anzahl der Zeilen, jede Zeile hat ihre eigene Länge, die auch verschieden sein kann, deshalb läuft eine innere Schleife bis zur Länge der jeweiligen Zeile.

Erklärung:
Ein zweidimensionales Array ist ein **Array, dessen Elemente selbst Arrays sind**.
- `tabelle[i]` ist die ganze Zeile i, `tabelle[i][j]` das Element in Zeile i, Spalte j.
- `LÄNGE(tabelle)` = Anzahl der **Zeilen**, `LÄNGE(tabelle[i])` = Anzahl der Elemente **in Zeile i**.
- Weil jede Zeile eigenständig ist, können Zeilen **unterschiedlich lang** sein.
Beim Durchlaufen geht die äußere Schleife über die Zeilen, die innere bis `LÄNGE(tabelle[i]) - 1`. Wer stattdessen die Länge der ersten Zeile für alle nimmt, greift bei kürzeren Zeilen über das Ende hinaus – ein Laufzeitfehler.
Beispiel: Umsätze je Filiale (Zeile) und Monat (Spalte); eine neue Filiale hat erst 3 Monatswerte.

## Lehrnotiz: Datenstrukturen: Array, zweidimensionales Array, dynamische Liste

**Hinweis aus dem Lernplan:** Das Lehrbuch (FS2 2.2.1) nennt bei der verketteten Liste „geringen Speicherplatzbedarf“ und bei der Hashtabelle „weniger Speicher als Arrays“; richtig ist: Je Element braucht eine Liste mehr Speicher als ein Array (Wert plus Verweis), sparsamer ist sie nur, weil nichts auf Vorrat angelegt wird; eine Hashtabelle braucht in der Regel mehr Speicher als ein Array mit denselben Werten.

**Aufteilung:**
- Woran man eine Datenstruktur misst: K2
- Array oder dynamische Liste abwägen: K4
- Zweidimensionales Array lesen: K5

**Schon geprüft:** Noch nicht geprüft: K2, K4, K5

**Kerngedanken:**
- Die Entscheidung hängt an zwei Fragen: Steht die Anzahl der Elemente vorher fest, und was tut das Programm am häufigsten – über die Position lesen und überschreiben (spricht für das Array) oder einfügen und entfernen (spricht für die dynamische Liste)?
- Einfügen ist im Array teuer, weil die Elemente lückenlos hintereinander liegen: Dazwischen ist kein freier Platz, und ist das Array voll, muss ein größeres angelegt und alles umkopiert werden.
- Eine begründete Entscheidung nennt die häufige Operation oder die Anzahl aus der Situation und die dazu passende Eigenschaft der Struktur. Beim Array gehört dazu, warum seine Schwächen in diesem Fall nicht stören.
- `tabelle[i][j]` liest man in zwei Zügen: erst die Zeile i holen (selbst ein Array), dann darin das Element j. Beide Indizes zählen ab 0. Array und Index selbst sind Thema des Stichpunkts über die Bausteine eines Programms.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K4 – Zugriff auf Position i: Array und verkettete Liste: (1) Ein Array belegt einen zusammenhängenden Speicherblock, und alle Elemente haben denselben Typ und damit dieselbe Größe. (2) Beim Zugriff auf Index i berechnet das Programm die Speicheradresse des Elements: Startadresse des Arrays plus i mal Elementgröße. (3) Das Programm liest oder schreibt direkt an dieser Adresse, deshalb dauert der Zugriff unabhängig von i und der Array-Länge gleich lang. (4) In einer verketteten Liste liegen die Elemente verstreut im Speicher, und jedes Element speichert zusätzlich einen Verweis auf das nächste. (5) Für Position i beginnt das Programm beim ersten Element und folgt i-mal dem Verweis, der Aufwand wächst also mit der Position. (6) Zum Einfügen an einer bereits gefundenen Stelle setzt die verkettete Liste nur zwei Verweise neu, kein Element wird verschoben.

**Typische Missverständnisse:**
- Viele denken, die dynamische Liste sei die modernere und deshalb immer bessere Wahl; richtig ist: Entschieden wird nach den häufigsten Operationen, und bei fester Anzahl mit Zugriff über die Position ist das Array die bessere Wahl.
- Viele denken, `LÄNGE(tabelle)` zähle alle Werte der Tabelle; richtig ist: Es zählt nur die Zeilen, die Zahl der Werte steckt in den Längen der einzelnen Zeilen.

**Fachwörter:**
- Effizienz: Speicherbedarf und Geschwindigkeit einer Datenstruktur
- Speicherbedarf: Platz für Daten und Verwaltungsangaben
- Index: Positionsnummer eines Elements im Array
- dynamische Liste: wächst und schrumpft zur Laufzeit
- zweidimensionales Array: Array, dessen Elemente Arrays sind
- Laufzeitfehler: Abbruch während der Ausführung

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es keine eigene echte Aufgabe. Der Prüfungskatalog nennt „Variablen, Datentypen und -strukturen“.
- Denkbar sind kurze Teilaufgaben wie „Entscheiden Sie sich für eine Datenstruktur und begründen Sie“ oder „Erläutern Sie Vor- und Nachteile“ (2–4 Punkte, je Argument ein Punkt).
- Zweidimensionale Arrays kommen in echten Schreibtischtest-Aufgaben vor: eine Tabelle mit Zeilen und Spalten, Index ab 0, die Zeilen unterschiedlich weit belegt, dazu verschachtelte Schleifen. Wer Zeile und Spalte oder die Zeilenlänge falsch liest, rechnet dort falsch.

**Fallen:**
- Die Wahl nur mit „die Liste ist flexibler“ begründen, ohne die beiden Messgrößen; besonders der Speicherbedarf wird vergessen.
- Eine Struktur nennen, ohne die Entscheidung zu begründen.
- Bei einem Array-Vorschlag nur die Nachteile aufzählen und die Stärke (schneller Zugriff über den Index) weglassen – oder nur eine Schwäche nennen, wo mehrere verlangt sind.
- Annehmen, man könne in ein Array „einfach einfügen“.
- Zeile und Spalte vertauschen: Der erste Index wählt die Zeile, der zweite das Element darin.
- Bei einer festen Grenze der inneren Schleife nur an den Abbruch bei kürzeren Zeilen denken: Ist eine Zeile länger als die Grenze, gibt es dort keinen Fehler, aber ihre hinteren Werte werden still ausgelassen.
- Einen Fehler in der Schleifengrenze nur feststellen, ohne die Ursache (jede Zeile hat ihre eigene Länge) und die berichtigte Zeile anzugeben.
