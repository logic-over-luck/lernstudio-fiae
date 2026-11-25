Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Fehler finden, Debugging und Unit-Tests › Code prüfen und Fehler beheben › Schreibtischtest und Fehler im Algorithmus lokalisieren

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen. Wo etwas abläuft oder funktioniert (Technik, Verfahren, Protokoll, Rechenweg), erklär zuerst Schritt für Schritt, was passiert, mit den richtigen Begriffen und dem Warum dahinter. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Die Erklärungen im Stoff sind das Minimum für die Prüfung, nicht die Grenze. Wo dort nur steht, was es gibt, erklär mir auch, wie es funktioniert, und trenn sichtbar, was die IHK lesen will und was nur Hintergrund zum Verstehen ist. Stehen in der Lehrnotiz „Abläufe zum Verstehen“, bau sie in deine Erklärung ein.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag – klein heißt wenig auf einmal, nicht oberflächlich. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Bewerte nur, was in der Aufgabe verlangt war. Stimmt der Inhalt und fehlt nur das Fachwort, zählt es als richtig: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu einer vorgegebenen Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen etwa 10–12), eine Teilaufgabe nach der anderen. Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Schreibtischtest und Fehler im Algorithmus lokalisieren

Ziel: Einen gegebenen, auch längeren oder rekursiven Algorithmus mit Testdaten von Hand ausführen, aus den Abweichungen den Fehler mit Zeilennummer bestimmen und den Code berichtigen oder ergänzen.

Das muss ich können:

### K1 – Ablaufverfolgung bei längerem und rekursivem Code (Stufe 3 Anwenden)
Du kannst über den Schreibtischtest aus AP1 hinaus eine Ablaufverfolgung für längeren Code mit einer vorgegebenen Datenverlaufstabelle durchführen und rekursive Aufrufe verfolgen: jeden Aufruf mit seinen eigenen Variablenwerten festhalten, bis zur Abbruchbedingung absteigen und die Rückkehr Aufruf für Aufruf nachvollziehen.

Erklärung:
Den Schreibtischtest kennst du aus AP1. In PB2 kommen zwei Dinge dazu:
- **längerer Code** mit einer **vorgegebenen Datenverlaufstabelle**: Du füllst die Spalten genau in der vorgegebenen Form, Zeile für Zeile oder je Schleifendurchlauf; du trägst jeden Wert ein, den eine Variable nacheinander annimmt – so, wie der Code **tatsächlich** rechnet, auch wenn es falsch ist
- **rekursive Aufrufe:** Jeder Aufruf hat **eigene** Parameter und Variablen. Du notierst je Aufruf eine Ebene, steigst bis zur **Abbruchbedingung** ab und rechnest dann **Aufruf für Aufruf zurück**
Beispiel:
`funktion summe(n)`
`  if n == 0 then return 0`
`  return n + summe(n - 1)`
- Abstieg: summe(3) → summe(2) → summe(1) → summe(0)
- summe(0) liefert 0 (Abbruch)
- Rückweg: summe(1) = 1 + 0 = 1, summe(2) = 2 + 1 = 3, summe(3) = 3 + 3 = **6**
Tipp: Rücke jede Ebene ein Stück ein oder zeichne einen Aufrufbaum, dann verlierst du den Überblick nicht.

### K2 – Fehlerursache und fehlerhafte Zeile bestimmen (Stufe 4 Beurteilen)
Du kannst aus den Abweichungen zwischen erwartetem und tatsächlichem Ergebnis die Ursache im Code analysieren und die fehlerhafte Zeile mit Zeilennummer bestimmen, auch wenn zwei Fehler zusammenwirken.

Erklärung:
So findest du die Ursache:
- **Erwartetes Ergebnis** aus der Aufgabenbeschreibung bestimmen, nie aus dem Code ablesen – sonst übernimmst du den Fehler
- **Tatsächliches Ergebnis** per Schreibtischtest ermitteln
- Testfälle mit Abweichung vergleichen: **Wie groß** ist die Abweichung, **bei welchen Daten** tritt sie auf, bei welchen nicht?
- Die Zeile, ab der ein Wert erstmals vom Erwarteten abweicht, benennst du **mit Zeilennummer**
**Zwei Fehler zusammen:** Erklärt ein Fehler nicht die ganze Abweichung, suche weiter.
Beispiel: Zählen der Werte **größer** 5, Code beginnt mit `anzahl = 1` (Zeile 1) und prüft `werte[i] >= grenze` (Zeile 3).
- [1, 2] liefert 1 statt 0 → Abweichung ohne passenden Wert → Startwert in Zeile 1
- [5, 8] liefert 3 statt 1 → 1 vom Startwert, 1 weil die 5 mitgezählt wird → Vergleich in Zeile 3

### K3 – Mehrere Fehler korrigieren, fehlende Teile ergänzen (Stufe 3 Anwenden)
Du kannst über das Korrigieren einzelner Zeilen aus AP1 hinaus mehrere Fehler in einem längeren Code zusammenhängend korrigieren und fehlende Code-Teile ergänzen, zum Beispiel Vergleichsoperatoren so anpassen, dass ein gegebener Unit-Test besteht, oder den vergessenen Verarbeitungsblock für die letzte Gruppe nach der Schleife einfügen (Gruppenwechsel: PB2-1).

Erklärung:
In AP1 korrigierst du einzelne Zeilen. In PB2 musst du oft **mehrere Stellen zusammenhängend** ändern oder **fehlenden Code ergänzen**.
- **Vergleichsoperatoren** so anpassen, dass ein gegebener Unit-Test besteht: Gehört der Grenzwert laut Anforderung bzw. erwartetem Testergebnis dazu, wird er eingeschlossen – `>` wird zu `>=`, `<` wird zu `<=` –, und zwar in **allen** betroffenen Zeilen. Beispiel: Die Tests erwarten `berechneDifferenz(120, 120)` = 0 und `berechneDifferenz(0, 0)` = 0, der Code prüft aber `zaehlerstandNeu > 0` und `zaehlerstandAlt < zaehlerstandNeu`; beide Bedingungen schließen den Grenzfall aus und werden zu `zaehlerstandNeu >= 0` und `zaehlerstandAlt <= zaehlerstandNeu`
- **Fehlenden Block ergänzen:** Beim Gruppenwechsel (PB2-1) wird eine Gruppe erst ausgewertet, wenn die nächste beginnt. Für die **letzte Gruppe** kommt kein Wechsel mehr – also gehört der **komplette** Auswerteblock noch einmal **nach die Schleife**: die Ausgabe der Gruppe **und** die Übernahme ihrer Werte in die Gesamtwerte (Summe, Zähler, Minimum, Maximum). Fehlt die Übernahme, fehlt die letzte Gruppe auch in der Gesamtauswertung
Beispiel Gruppenwechsel:
`aktKunde = liste[0].kunde; summe = 0; gesamt = 0`
`for i = 0 to laenge(liste) - 1`
`  if liste[i].kunde != aktKunde then`
`    ausgabe(aktKunde, summe)`
`    gesamt = gesamt + summe`
`    aktKunde = liste[i].kunde; summe = 0`
`  end if`
`  summe = summe + liste[i].betrag`
`end for`
`ausgabe(aktKunde, summe)   // ergänzt: letzter Kunde`
`gesamt = gesamt + summe      // ergänzt: auch in die Gesamtsumme`
`ausgabe(gesamt)`
Prüfe nach jeder Korrektur alle Testfälle erneut – eine Änderung darf keinen anderen Fall kaputt machen.

### K4 – Typische inhaltliche Fehler im Code (Stufe 3 Anwenden)
Du kannst in gegebenem Code typische inhaltliche Fehler finden, die über die Fehlerquellen aus AP1-8-2-4 hinausgehen: falscher Startwert (z. B. 0 statt des ersten Elements beim Minimum), die letzte Gruppe wird nach der Schleife nicht mehr ausgewertet, falsche Variable im Ausdruck (Monats- statt Jahreszähler), überflüssige Anweisung, die ein Flag wieder zurücksetzt, fehlende Rückgabe (return), Ausgabe vor statt nach dem rekursiven Aufruf (Ergebnis in umgekehrter Reihenfolge).

Erklärung:
Über die Fehler aus AP1 (Schleifengrenze, vertauschter Vergleich) hinaus tauchen in PB2 immer wieder diese Fehlerbilder auf:
- **falscher Startwert:** `min = 0` statt `min = werte[0]` – bei nur positiven Werten kommt 0 heraus
- **letzte Gruppe vergessen:** nach der Schleife fehlt die Auswertung der letzten Gruppe
- **falsche Variable:** `jahresSumme / anzahlMonat` statt `/ anzahlJahr`
- **überflüssige Anweisung:** ein `else gefunden = false` setzt das **Flag** (Merker: Variable mit wahr/falsch, die einen Treffer festhält) bei jedem späteren Element zurück
- **fehlende Rückgabe:** die Methode berechnet das Ergebnis (z. B. `passwordOK`), gibt es aber gar nicht oder nicht in jedem Zweig zurück – fehlt die Rückgabe ganz, ergänzt du sie am Ende, z. B. `return passwordOK`
- **Rekursion falsch herum:** `ausgabe(n)` steht **vor** `zeige(n - 1)` → Ausgabe 3 2 1 statt 1 2 3
Vorgehen: Lies den Code mit genau diesen Fragen im Kopf – Startwerte? Was passiert nach der Schleife? Stimmen die Variablen im Ausdruck? Gibt es jeden Rückgabeweg?

## Lehrnotiz: Schreibtischtest und Fehler im Algorithmus lokalisieren

**Aufteilung:**
- Ablauf verfolgen, erst Datenverlaufstabelle zu längerem Code, dann Rekursion: K1
- Aus Abweichungen die fehlerhaften Zeilen bestimmen: K2
- Typische Fehlerbilder erkennen: K4
- Mehrere Stellen berichtigen und fehlenden Code ergänzen: K3 – hier kommt alles Vorige zusammen

**Schon geprüft:** In Prüfungen: K1 (2022W, 2023S), K2 (2023S, 2025W), K3 (2022S), K4 (2021W, 2022W, 2025W)

**Kerngedanken:**
- In die Datenverlaufstabelle kommt, was der Code tatsächlich tut, auch wenn es falsch ist – nicht, was herauskommen sollte.
- Bei Rekursion darf man den Parameter nicht einfach überschreiben: Jeder Aufruf bekommt eine eigene Zeile oder Ebene, denn nach der Rückkehr rechnet der aufrufende Aufruf mit seinem eigenen alten Wert weiter, nicht mit dem der tiefsten Ebene.
- Beim Gruppenwechsel läuft im Durchlauf mit dem Wechsel erst der Wechselblock (Ausgabe, Übernahme, Zurücksetzen), danach wird das aktuelle Element verarbeitet.
- Jede Abweichung wird einzeln betrachtet: Welcher Fehler erklärt genau diese Größe? Bei Minimum oder Maximum deutet ein Ergebnis, das in den Daten gar nicht vorkommt, auf den Startwert; bei Zählern und Summen eine Abweichung, die auch bei Daten auftritt, in denen kein Wert passt. Fehlt genau der Anteil der letzten Gruppe, fehlt der Block nach der Schleife.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K4 – Ausgabereihenfolge bei Ausgabe vor oder nach dem rekursiven Aufruf: (1) Steht ausgabe(n) vor zeige(n - 1), gibt jeder Aufruf seinen Wert schon beim Abstieg aus, bevor er den nächsten Aufruf startet: 3 2 1. (2) Steht zeige(n - 1) vor ausgabe(n), ruft zeige(3) zuerst zeige(2) auf und hat seine eigene Ausgabe noch nicht ausgeführt. (3) zeige(2) ruft ebenso zeige(1) auf und zeige(1) ruft zeige(0) auf; bis hierhin wurde noch nichts ausgegeben. (4) zeige(0) erfüllt die Abbruchbedingung (hier n = 0) und kehrt ohne Ausgabe zu zeige(1) zurück. (5) zeige(1) läuft hinter dem rekursiven Aufruf weiter, gibt seinen eigenen Wert 1 aus und kehrt zu zeige(2) zurück. (6) Danach gibt zeige(2) die 2 und zuletzt zeige(3) die 3 aus; die Ausgabe auf dem Rückweg ergibt 1 2 3.

**Typische Missverständnisse:**
- Viele denken, ein Testfall mit richtigem Ergebnis beweise, dass der Code stimmt; richtig ist: Ein Fehler zeigt sich nur bei Daten, die ihn treffen (z. B. wenn das erste Element oder genau der Grenzwert zählen müsste).
- Viele denken, bei einem zurückgesetzten Flag müsse der then-Zweig geändert werden; richtig ist: Das überflüssige else wird gestrichen.

**Fachwörter:**
- Datenverlaufstabelle: Tabelle der Variablenwerte je Zeile oder Durchlauf
- Abbruchbedingung: Fall, in dem kein Selbstaufruf mehr folgt
- rekursiver Aufruf: Funktion ruft sich selbst auf
- Gruppenwechsel: sortierte Liste gruppenweise auswerten
- Startwert: Wert einer Variablen vor der Schleife
- Flag: Merker-Variable mit wahr oder falsch
- Rückgabe: Ergebnis mit return an den Aufrufer

**So fragt die IHK:**
- Das Thema kommt regelmäßig als Teil einer größeren Algorithmen-Aufgabe vor, früher auch als Fehlersuche in einem Struktogramm.
- Form 1: eine vorgegebene Datenverlaufstabelle zu längerem Code ausfüllen.
- Form 2: Aus einer Tabelle „Testdaten – erwartetes Ergebnis – tatsächliches Ergebnis“ die Fehler ableiten und in eine Tabelle „Position (Zeilennummer) – mögliche Korrektur“ eintragen. Das gab rund 4 Punkte für zwei Fehler, je Fehler Zeile und Korrektur. Gezählt wurden ein falscher Startwert beim Minimum und eine falsche Schleifengrenze; Schreibweisen der Schleife galten als gleichwertig.
- Form 3: Code so ändern, dass ein gegebener Unit-Test besteht (Vergleichsoperatoren).
- Form 4: Gruppenwechsel-Aufgabe mit rund 13 Punkten. Verlangt war, nach der Schleife den kompletten Auswerteblock für die letzte Gruppe zu ergänzen und im Jahresdurchschnitt den Jahres- statt des Monatszählers zu verwenden.
- Operatoren: „ausfüllen“, „ermitteln“, „geben Sie die Zeilennummer an“, „korrigieren“, „ergänzen“.
- Bewertet wird die Logik, nicht die Schreibweise. Eine Korrektur ohne Zeilenangabe bekommt keinen vollen Punkt. Folgefehler werden nur einmal abgezogen.

**Fallen:**
- Eine Fehlerzeile nur mit „sieht falsch aus“ begründen statt mit der Größe der Abweichung oder den betroffenen Daten.
- Nur nach Schleifengrenze und Vergleich suchen und die Zeilen vor und nach der Schleife (Startwerte, Auswertung, return) überlesen.
- Beim Durchschnitt nicht prüfen, wodurch laut Anforderung geteilt wird (z. B. je Element oder je Gruppe).
- Den ergänzten Block für die letzte Gruppe hinter die Gesamtausgabe oder in die Schleife setzen; er gehört nach das Schleifenende und vor die Gesamtausgabe.
- Bei einer fehlenden Rückgabe nur bemerken, dass das Ergebnis berechnet wird, aber das return nicht ergänzen.
- Eine andere richtige Korrektur als falsch werten: Beim Minimum ist z. B. auch ein sehr großer Startwert statt `werte[0]` gültig, beim zurückgesetzten Flag statt Streichen des else auch ein vorzeitiges return (oder break) beim ersten Treffer.
