Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Objektorientierte Methoden in Pseudocode umsetzen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

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

## Stoff: Objektorientierte Methoden in Pseudocode umsetzen

Ziel: Methoden aus einem Klassendiagramm in Pseudocode implementieren: Listen von Objekten durchlaufen, prüfen, Objekte erzeugen, Fabrikmethoden und Benachrichtigungen. Pseudocode an sich kennst du aus AP1.

Das muss ich können:

### K1 – Pseudocode: Liste von Objekten durchlaufen (Stufe 3 Anwenden)
Du kannst eine Methode aus dem Klassendiagramm in Pseudocode implementieren, die eine Liste von Objekten durchläuft und je Objekt Methoden aufruft, zum Beispiel für jeden Aktionär eine Einladungsmail senden oder im Observer-Muster für jeden registrierten Beobachter update aufrufen.

Erklärung:
Muster:
- `für jedes element in liste:`
- `    element.methode(…)`
- `    eigeneListe.add(element)` – falls verlangt, das Objekt zusätzlich in eine Liste der eigenen Klasse eintragen, z. B. `eingeladeneTeilnehmer.add(a)`
Beispiele: für jeden Aktionär `sendeEinladungsmail(a.getEmailAdresse())`; im Observer für jeden Beobachter `o.update()`. Auf private Attribute eines anderen Objekts nur über dessen Getter zugreifen.
Namen von Attributen und Methoden genau aus dem Klassendiagramm übernehmen und mit dem **Methodenkopf** beginnen (Sichtbarkeit, Name, Parameter mit Typ, Rückgabetyp), z. B. `+ notifyObservers() : void`.
Pseudocode ist nicht genormt: Er muss für Dritte ohne Kenntnis der Programmiersprache verständlich sein, ausführbar muss er nicht sein. Deutsche Schlüsselwörter (wenn, solange, für jedes) zählen ebenso wie eine Java-ähnliche Schreibweise (`for`, `if`, `return`).

### K2 – Pseudocode: Prüf- und Berechnungsmethoden (Stufe 3 Anwenden)
Du kannst Prüf- und Berechnungsmethoden implementieren, zum Beispiel eine Liste von Objekten durchsuchen und true oder false zurückgeben oder in einer Unterklasse eine Methode überschreiben (calculatePreis mit 5 % Rabatt für Premium-Besucher).

Erklärung:
- **Prüfen:** Liste durchlaufen, bei Treffer `return true`, nach der Schleife `return false`. Enthält die Liste Objekte einer anderen Klasse, über deren Getter zum gesuchten Objekt gehen und mit `equals` vergleichen, z. B. `wenn vTN.getAktionaer().equals(a): return true`.
- **Überschreiben:** in der Unterklasse die Methode mit **derselben Signatur** neu schreiben, z. B. in `PremiumBesucher` (erbt von der abstrakten Klasse `Besucher`) `+ calculatePreis(basisPreis : Double) : Double` mit `return basisPreis * 0.95` für 5 % Rabatt. `super.methode(…)` nur aufrufen, wenn die Oberklasse eine fertige (nicht abstrakte) Fassung hat.

### K3 – Pseudocode: Objekte erzeugen und einfügen (Stufe 3 Anwenden)
Du kannst eine Methode implementieren, die Objekte erzeugt und in eine Liste einfügt: mit einem überladenen Konstruktor oder über eine statische Fabrikmethode, die je nach übergebenem Typ ein Objekt der passenden Unterklasse erzeugt (Mehrfachauswahl).

Erklärung:
Objekte erzeugen und einfügen:
- mit **Konstruktor**: `neu = new Kunde(name, nummer)`, dann `liste.add(neu)`
- über eine **statische Fabrikmethode** mit Mehrfachauswahl:
- `+ createBesucher(typ : String) : Besucher {static}`
- `    switch typ:`
- `        case "STANDARD": return new StandardBesucher()`
- `        case "PREMIUM": return new PremiumBesucher()`
- `        case "VIP": return new VipBesucher()`
Einen Standardfall (`default` bzw. `sonst`) schreibst du nur, wenn die Aufgabe ihn verlangt; in der Prüfungsaufgabe zu diesem Beispiel war er ausdrücklich ausgeschlossen.
Ist die Oberklasse abstrakt (hier `Besucher`), wird sie selbst nie mit `new` erzeugt; sie ist nur der Rückgabetyp.
Überladener Konstruktor = mehrere Konstruktoren mit unterschiedlichen Parametern.
Oft nur einfügen, wenn das Objekt noch fehlt – dazu vorhandene Methoden der Klasse aufrufen, statt die Prüfung neu zu schreiben:
- `wenn nicht istAngemeldeterTeilnehmer(a):`
- `    code = erstelleCode()`
- `    vTN = new Versammlungsteilnehmer(a, code)`
- `    angemeldeteTeilnehmer.add(vTN)`

## Lehrnotiz: Objektorientierte Methoden in Pseudocode umsetzen

**Aufteilung:**
- Liste durchlaufen und je Objekt Methoden aufrufen: K1
- Prüfmethoden mit true/false und überschriebene Berechnungen: K2
- Objekte erzeugen und einfügen (Konstruktor, „nur wenn noch nicht da“, statische Fabrikmethode): K3 – hier kommen die ersten beiden Themen zusammen

**Schon geprüft:** In Prüfungen: K1 (2022S, 2024S), K2 (2023S, 2024S), K3 (2023S, 2024S)

**Kerngedanken:**
- Das Klassendiagramm gibt fast alles vor: Methodenkopf, Namen, Typen, Reihenfolge der Konstruktorparameter und vorhandene Hilfsmethoden werden abgeschrieben. Selbst zu entscheiden ist nur der Rumpf.
- `return` beendet die Methode sofort. Deshalb darf `return false` erst nach der Schleife stehen: Erst wenn alle Elemente geprüft sind, steht fest, dass keines passt.
- Bewertet wird die Logik, nicht die Schreibweise. Gleichwertig sind zum Beispiel:
  - eine Ergebnisvariable (vor der Schleife `false`, beim Treffer `true`, am Ende zurückgeben) statt des frühen `return`
  - eine Zählschleife mit `get(i)` statt „für jedes“
  - „wenn / sonst wenn“ statt `switch`
- Abgrenzung: Die statische Fabrikmethode mit Mehrfachauswahl ist die einfache Fabrik. Das Muster Factory Method mit eigenen Erzeugerklassen gehört zum Stichpunkt Entwurfsmuster.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Aufruf einer überschriebenen Methode zur Laufzeit: (1) Eine Variable vom Typ der Oberklasse Besucher verweist auf ein Objekt einer Unterklasse, zum Beispiel PremiumBesucher. (2) Der Aufrufer ruft über diese Variable calculatePreis(basisPreis) auf; erlaubt ist das, weil Besucher die Methode mit dieser Signatur deklariert. (3) Beim Aufruf stellt die Laufzeitumgebung die tatsächliche Klasse des Objekts fest; der Typ der Variable entscheidet nicht. (4) Sie sucht die Methode mit genau dieser Signatur zuerst in der Klasse des Objekts und führt die dort überschriebene Fassung aus. (5) Findet sie dort keine Methode mit dieser Signatur, sucht sie in der Oberklasse weiter und führt deren Fassung aus. (6) Weicht die Signatur in der Unterklasse ab, entsteht nur eine zusätzliche Methode; die geerbte Methode ist dann nicht überschrieben.

**Typische Missverständnisse:**
- Viele denken, zu „wenn Treffer: return true“ gehöre in der Schleife ein „sonst: return false“; richtig ist: Dann bricht die Methode schon beim ersten Element ab, das nicht passt.
- Viele denken, ein geschütztes Attribut (`#`) eines anderen Objekts dürfe man direkt setzen; richtig ist: `#` gilt für Unterklassen. Eine fremde Klasse nimmt Getter und Setter.

**Fachwörter:**
- Methodenkopf: Sichtbarkeit, Name, Parameter mit Typ, Rückgabetyp
- Signatur: Name und Parameter einer Methode
- Getter: Methode, die einen Attributwert liefert
- Überschreiben: geerbte Methode in der Unterklasse neu schreiben
- überladener Konstruktor: mehrere Konstruktoren mit unterschiedlichen Parametern
- statische Fabrikmethode: liefert je nach Parameter das passende Objekt
- Mehrfachauswahl: Verzweigung mit mehreren Fällen (`switch`)

**So fragt die IHK:**
- Die Aufgaben kamen in drei Prüfungen vor, immer im Anschluss an ein vorgegebenes oder zuvor erstelltes Klassendiagramm. Der Operator ist „implementieren“; in den Lösungen steht „Andere Lösungen sind möglich“.
- Observer: die Benachrichtigungsmethode des Subjekts (4 Punkte: 1 Methodenkopf, 2 Schleife, 1 Methodenaufruf).
- Statische Fabrikmethode mit Mehrfachauswahl, Standardfall ausdrücklich nicht zu berücksichtigen (5 Punkte: 1 Selektor, 1 Mehrfachauswahl, 3 Rückgaben).
- Zwei überschreibende Methoden für einen Kundentyp (4 Punkte, je 2): Eine gibt den Parameter zurück, eine einen Rabattpreis.
- Eine weitere Aufgabe hatte drei Methoden zu je 5 Punkten mit dem Hinweis „Jede Liste hat add“:
  - Liste durchlaufen, je Element eine Mail über einen Getter senden und das Element in eine eigene Liste eintragen
  - Prüfmethode mit Boolean-Rückgabe über eine Liste von Objekten einer anderen Klasse (Getter, dann `equals`)
  - Anmelden: vorhandene Prüfmethode aufrufen, Code erzeugen, überladenen Konstruktor benutzen, Objekt einfügen
- Früher war auch ein Struktogramm erlaubt, heute ist Pseudocode verlangt. Die Namen müssen zum Klassendiagramm passen.

**Fallen:**
- Durchlaufen: Den Methodenkopf weglassen; das kostet einen Punkt.
- Durchlaufen: Über die falsche Liste laufen, etwa über das eigene Attribut statt über die übergebene Liste.
- Durchlaufen: `add` oder den Methodenaufruf außerhalb der Schleife schreiben; dann wird nur ein Element oder gar keins bearbeitet.
- Durchlaufen: Bei einer Zählschleife ab 0 mit eingeschlossener Obergrenze bis `size()` statt bis `size() - 1` laufen (mit `i < size()` ist `size()` richtig).
- Durchlaufen: Liegt der Wert zwei Objekte entfernt, braucht es eine Kette von Gettern (erst zum Objekt, dann zum Wert).
- Prüfen: Objekte mit `==` statt mit `equals` vergleichen; `==` ist für Zahlen.
- Prüfen: „ab einem Wert“ als `>` statt `>=` schreiben.
- Überschreiben: Den Methodenkopf ändern (anderer Parametertyp, fehlender oder anderer Rückgabetyp) oder das `return` vergessen.
- Überschreiben: Bei einem Rabatt mit dem Rabattsatz malnehmen; das ergibt nur den Rabatt, nicht den Preis.
- Erzeugen: Das Objekt erzeugen, aber nicht in die Liste einfügen.
- Erzeugen: `add` außerhalb der Bedingung schreiben; dann entstehen doppelte Einträge.
- Erzeugen: Die Konstruktorparameter in anderer Reihenfolge als im Diagramm übergeben.
- Erzeugen: Den überladenen Konstruktor mit zu wenigen Parametern nehmen, sodass ein verlangter Wert verloren geht.
- Erzeugen: Das Ergebnis einer Hilfsmethode (Nummer, Code) nicht in einer Variablen festhalten.
- Fabrikmethode: Objekte erzeugen, aber nicht zurückgeben, oder einen Fall auslassen.
- Fabrikmethode: `{static}` im Kopf weglassen.
- Fabrikmethode: Einen verlangten Standardfall vergessen. Schließt die Aufgabe ihn ausdrücklich aus, braucht es keinen.

**Material:**
Schreibweise, die als richtig gilt (Pseudocode ist nicht genormt; Java-ähnlich mit `for`, `if`, `{ }` zählt genauso):
- Erst der Methodenkopf wie im Diagramm, darunter eingerückt der Rumpf.
- Schleife: `für jedes x in liste:`
- Verzweigung: `wenn Bedingung:` / `sonst:`, Verneinung mit `nicht`
- Rückgabe: `return wert`
- Objekt erzeugen: `new Klasse(…)`
- Mehrfachauswahl: `switch wert:` mit `case "X": …`
- Listen haben `add(Object)`, `size()` und `get(i)`.
