Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Projektmanagement und Qualität › Projektplanung und Termine › Netzplan: Zeiten, Puffer und kritischen Weg berechnen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen und dem Warum dahinter. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, vor jedem Vergleich, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, wurde das geprüft – dann reicht die Erklärung aus dem Stoff mit dem Warum dazu, ohne eigenen Ablauf. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber lösbar allein mit dem Stoff. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
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

## Stoff: Netzplan: Zeiten, Puffer und kritischen Weg berechnen

Ziel: Einen Netzplan nach dem Katalog-Anhang erstellen, alle Zeiten und Puffer berechnen, Fehler finden und den kritischen Weg bestimmen.

Das muss ich können:

### K1 – FAZ und FEZ in der Vorwärtsrechnung (Stufe 3 Anwenden)
Du kannst den frühesten Anfangszeitpunkt (FAZ) und den frühesten Endzeitpunkt (FEZ) in der Vorwärtsrechnung bestimmen; bei mehreren Vorgängern zählt der größte FEZ.

Erklärung:
In der **Vorwärtsrechnung** gehst du vom Anfang zum Ende:
- Der erste Vorgang beginnt bei 0: FAZ = 0.
- `FEZ = FAZ + Dauer`
- FAZ des nächsten Vorgangs = FEZ des Vorgängers. Bei **mehreren Vorgängern zählt der größte FEZ** – erst wenn alle fertig sind, kann es losgehen.
Beispiel: D hat die Vorgänger B (FEZ 5) und C (FEZ 8) → FAZ von D = 8.
Die Einheit gibt die Aufgabe vor (im Prüfungskatalog Arbeitstage, in echten Aufgaben oft Stunden); gerechnet wird gleich.

### K2 – SAZ und SEZ in der Rückwärtsrechnung (Stufe 3 Anwenden)
Du kannst den spätesten Anfangszeitpunkt (SAZ) und den spätesten Endzeitpunkt (SEZ) in der Rückwärtsrechnung bestimmen; bei mehreren Nachfolgern zählt der kleinste SAZ.

Erklärung:
In der **Rückwärtsrechnung** gehst du vom Ende zum Anfang:
- Beim letzten Vorgang ist SEZ = FEZ (wenn kein anderer Endtermin vorgegeben ist).
- `SAZ = SEZ − Dauer`
- SEZ eines Vorgangs = SAZ des Nachfolgers. Bei **mehreren Nachfolgern zählt der kleinste SAZ** – der Vorgang muss fertig sein, bevor der früheste Nachfolger spätestens anfangen muss.
Beispiel: B hat die Nachfolger D (SAZ 8) und E (SAZ 10) → SEZ von B = 8.

### K3 – Gesamtpuffer eines Vorgangs (Stufe 3 Anwenden · in der Prüfung vorgegeben: Formeln für GP und FP)
Du kannst den Gesamtpuffer berechnen (GP = SAZ − FAZ oder SEZ − FEZ): Um so viel darf sich ein Vorgang verzögern, ohne dass sich das Projektende verschiebt.

Erklärung:
`GP = SAZ − FAZ` (oder gleichwertig `SEZ − FEZ`)
Der Gesamtpuffer sagt, um wie viel sich ein Vorgang verzögern darf, **ohne dass sich das Projektende verschiebt**.
Beispiel: FAZ 3, SAZ 6 → GP = 3. Der Vorgang darf 3 Tage später anfangen oder 3 Tage länger dauern.
Kontrolle: Beide Formeln müssen dasselbe Ergebnis liefern – sonst steckt ein Rechenfehler im Knoten.

### K4 – Freier Puffer eines Vorgangs (Stufe 3 Anwenden · in der Prüfung vorgegeben: Formeln für GP und FP)
Du kannst den freien Puffer berechnen (FP = FAZ des Nachfolgers − FEZ des Vorgangs; bei mehreren Nachfolgern zählt der kleinste FAZ): Um so viel darf sich ein Vorgang verzögern, ohne dass sich sein Nachfolger verschiebt.

Erklärung:
`FP = FAZ des Nachfolgers − FEZ des Vorgangs` – bei mehreren Nachfolgern nimmst du den **kleinsten** FAZ.
Der freie Puffer sagt, um wie viel sich ein Vorgang verzögern darf, **ohne dass sich sein Nachfolger verschiebt**.
Beispiel: C endet frühestens an Tag 5, Nachfolger E kann frühestens an Tag 7 beginnen → FP = 2.
Immer gilt: `FP ≤ GP`. Der letzte Vorgang hat keinen Nachfolger – dort ist FP = GP.

### K5 – Kritischer Weg im Netzplan (Stufe 3 Anwenden)
Du kannst den kritischen Weg bestimmen: die Vorgänge ohne Gesamtpuffer; seine Länge ist die kürzestmögliche Projektdauer.

Erklärung:
Der kritische Weg (in IHK-Aufgaben meist **kritischer Pfad**) ist die durchgehende Folge der Vorgänge mit **GP = 0** vom Start bis zum Ende.
- Verzögert sich ein Vorgang auf dem kritischen Weg, verschiebt sich das ganze Projekt.
- Seine Länge (FEZ des letzten Vorgangs) ist die kürzestmögliche Projektdauer.
Es kann auch mehrere kritische Wege geben. Prüfe, dass der Weg lückenlos über Pfeile verbunden ist.

### K6 – Netzplan aus einer Vorgangsliste (Stufe 3 Anwenden)
Du kannst einen Netzplan aus einer Vorgangsliste erstellen, zum Beispiel fehlende Vorgangsknoten ergänzen.

Erklärung:
Arbeite in fester Reihenfolge:
- Knoten mit Nummer, Bezeichnung und Dauer aus der Vorgangsliste übernehmen und die Pfeile nach den Vorgängern ziehen.
- Vorwärts rechnen: FAZ und FEZ.
- Rückwärts rechnen: SEZ und SAZ.
- Zum Schluss GP und FP.
Im Prüfungskatalog stehen FAZ und FEZ über dem Kasten (links, rechts), SAZ und SEZ darunter; im Kasten oben der Vorgang, unten Dauer | GP | FP.
Halte dich genau an die Knotenlegende aus der Aufgabe – die Felder stehen dort, wo die Legende sie zeigt.

### K7 – Fehler in einem fertigen Netzplan (Stufe 3 Anwenden · in der Prüfung vorgegeben: Legende und Vorgangstabelle)
Du kannst in einem fertigen Netzplan fehlerhafte Zeiten oder Puffer finden und korrigieren.

Erklärung:
Rechne jeden Wert nach, statt nur zu schauen, ob er plausibel aussieht. Die häufigsten Fehler:
- FAZ bei mehreren Vorgängern: Es wurde nicht der **größte** FEZ genommen.
- SEZ bei mehreren Nachfolgern: Es wurde nicht der **kleinste** SAZ genommen.
- GP oder FP vertauscht oder falsch subtrahiert.
Wichtig: Ist ein Wert falsch, sind oft alle davon abhängigen Werte auch falsch – rechne danach weiter vorne bzw. hinten neu.

### K8 – Wann Gesamtpuffer und freier Puffer gleich sind (Stufe 2 Verstehen)
Du kannst erklären, wann Gesamtpuffer und freier Puffer eines Vorgangs gleich sind: wenn alle seine Nachfolger auf dem kritischen Weg liegen (oder er der letzte Vorgang ist). Hat er auch einen nichtkritischen Nachfolger, kann der freie Puffer kleiner sein, denn er zählt bis zum kleinsten FAZ der Nachfolger, der Gesamtpuffer bis zum kleinsten SAZ; teilen sich mehrere nichtkritische Vorgänge hintereinander einen Puffer, hat nur der letzte von ihnen freien Puffer.

Erklärung:
Zur Erinnerung: Der **Gesamtpuffer (GP)** sagt, wie weit sich ein Vorgang verschieben darf, ohne das **Projektende** zu verschieben; der **freie Puffer (FP)**, wie weit, ohne einen **Nachfolger** zu verschieben.
`FP = kleinster FAZ der Nachfolger − FEZ` · `GP = SEZ − FEZ = kleinster SAZ der Nachfolger − FEZ`
- Sind **alle** Nachfolger kritisch, ist bei ihnen FAZ = SAZ – dann sind GP und FP gleich.
- Hat ein Vorgang **auch einen nichtkritischen Nachfolger**, der früher beginnen kann, ist FP kleiner als GP. Beispiel (wie Vorgang D in einer Prüfung): D hat FEZ 10, Nachfolger E ist kritisch (FAZ = SAZ = 15), Nachfolger F nicht (FAZ 10, SAZ 17). FP = 10 − 10 = **0**, GP = 15 − 10 = **5**. Ein kritischer Nachfolger allein reicht also nicht.
- Liegen **mehrere nichtkritische Vorgänge hintereinander**, teilen sie sich einen Puffer. Beispiel: A → B → C (kritisch), B beginnt direkt nach A, A und B haben je GP = 3. A hat FP = 0, B als letzter vor C hat FP = 3.
Der freie Puffer ist nie größer als der Gesamtpuffer.

## Lehrnotiz: Netzplan: Zeiten, Puffer und kritischen Weg berechnen

**Aufteilung:**
- Vorwärtsrechnung: K1
- Rückwärtsrechnung: K2
- Gesamtpuffer und kritischer Weg: K3, K5
- Freier Puffer: K4
- Pause möglich nach dem freien Puffer.
- Warum Gesamtpuffer und freier Puffer auseinanderfallen: K8
- Einen Netzplan vervollständigen: K6 – hier kommt alles Vorige an einem Stück zusammen
- Fehler in einem fertigen Netzplan finden: K7

**Schon geprüft:** In Prüfungen: K1 (2021H, 2025F), K2 (2021H, 2025F), K3 (2021H, 2025F), K4 (2021H, 2025F, 2026F), K5 (2021H, 2025F), K6 (2021H, 2025F), K7 (2026F) · Noch nicht geprüft: K8

**Kerngedanken:**
- Der Netzplan zählt Zeitpunkte, also abgelaufene Zeit ab 0, nicht Kalendertage. Darum ist der FEZ eines Vorgangs ohne Zuschlag der FAZ seines Nachfolgers.
- Ob ein Vorgang für den Endtermin gefährlich ist, sagt nicht seine Dauer und nicht seine Lage am Ende, sondern nur, ob er Spielraum hat. Genau das rechnet der Netzplan aus.
- Die Rückwärtsrechnung startet beim Projektende, also beim größten FEZ der Endvorgänge, sofern kein anderer Endtermin vorgegeben ist. Sie kann deshalb erst beginnen, wenn die Vorwärtsrechnung für alle Knoten steht.
- In der Prüfung tragen leere Knoten oft keinen Vorgangsbuchstaben. Welcher Vorgang dorthin gehört, ergibt sich aus den Pfeilen und den Vorgängern in der Vorgangstabelle.

**Typische Missverständnisse:**
- Viele denken, der längste oder der letzte Vorgang sei automatisch der kritische. Richtig ist: Kritisch ist, wer keinen Gesamtpuffer hat; auch ein langer Vorgang kann Puffer haben.
- Viele denken, zwei nichtkritische Vorgänge hintereinander mit je gleichem Gesamtpuffer hätten zusammen das Doppelte. Richtig ist: Es ist derselbe Puffer; verbraucht ihn der erste, hat der zweite keinen mehr.

**Fachwörter:**
- FAZ: frühester Anfangszeitpunkt eines Vorgangs
- FEZ: frühester Endzeitpunkt eines Vorgangs
- SAZ: spätester Anfangszeitpunkt ohne Verschiebung des Projektendes
- SEZ: spätester Endzeitpunkt ohne Verschiebung des Projektendes
- Gesamtpuffer (GP): Spielraum, bis das Projektende rutscht
- freier Puffer (FP): Spielraum, bis ein Nachfolger rutscht
- kritischer Weg: durchgehende Folge der Vorgänge ohne Gesamtpuffer; die IHK schreibt auch „kritischer Pfad“
- Vorgangsknoten: Kästchen eines Vorgangs mit allen Werten

**So fragt die IHK:**
- Zwei echte Aufgaben mit gleichem Aufbau (ein Systemhaus plant für einen Kunden einen Umzug bzw. eine Website).
- Vorgegeben: eine Vorgangstabelle mit Dauer in Stunden und Vorgängern, daneben ein angefangener Netzplan mit Legende. Einige Knoten sind voll, einige teilweise ausgefüllt, mehrere ganz leer und ohne Vorgangsbuchstaben.
- Operator „eintragen“ (alle fehlenden FAZ, FEZ, SAZ, SEZ, GP, FP), 9 bzw. 14 Punkte: 2 Punkte je voll ergänztem Knoten, 1 Punkt je teilweise ergänztem. Die Formeln für GP und FP stehen als Hinweis in der Aufgabe.
- Kritischer Pfad: 1 Punkt, „markieren“ oder „nennen“, als Folge der Buchstaben.
- In beiden Lösungen gibt es Ketten nichtkritischer Vorgänge, bei denen der erste FP = 0 und der letzte FP = GP hat (K8). Genau dort entstehen die typischen Punktverluste.
- Was eine Verzögerung für das Projektende bedeutet, wird als Folgeaufgabe gefragt und gehört zu einem anderen Stichpunkt.
- 2026F, Fehlersuche (K7), 6 Punkte, „korrigieren“ und „eintragen“: fertiger Netzplan mit sieben Vorgängen, Legende mit den Formeln für GP und FP und Vorgangstabelle (Dauer, Vorgänger). Ein Fehler ist als Beispiel schon berichtigt; drei weitere falsche Zahlen sind zu finden und in eine Tabelle „Prozessschritt | Fehler bei | Korrektur“ einzutragen. Die Fehler lagen bei SAZ und SEZ eines nichtkritischen Vorgangs und beim GP seines Vorgängers, der zwei Nachfolger hat: Dessen SEZ ist der kleinste SAZ der Nachfolger, sein FP bleibt 0. Lösungshinweise liegen nicht vor.

**Fallen:**
- Den ersten Vorgang bei 1 statt bei 0 beginnen lassen.
- Die Projektdauer als Summe aller Dauern berechnen statt als FEZ des letzten Vorgangs.
- Den kritischen Weg unvollständig angeben, zum Beispiel ohne den ersten oder den letzten Vorgang.
- Die Bedeutung des Gesamtpuffers auf den Nachfolger beziehen statt auf das Projektende.
- Beim freien Puffer den SAZ statt den FAZ des Nachfolgers einsetzen; bei einem einzigen Nachfolger hat man dann in Wahrheit den Gesamtpuffer gerechnet.
- Den Gesamtpuffer ungeprüft als freien Puffer übernehmen; bei mehreren Nachfolgern den größten FAZ nehmen.
- Soll ein Unterschied zwischen GP und FP erläutert werden: nur die Werte nennen ohne Erklärung oder nur erklären ohne die Werte.
- Beim Vervollständigen einen leeren Knoten mitten in der Kette überspringen, obwohl seine Werte die Nachbarn bestimmen.
- Bei der Fehlersuche nur nach auffälligen Zahlen suchen: Ein Fehler bei SAZ oder SEZ sieht oft plausibel aus und lässt einen kritischen Vorgang unkritisch erscheinen.
- Die Einheit wechseln: Die IHK gibt die Dauer in Stunden an, gerechnet wird genauso wie mit Tagen.

**Material:**
Knotenlegende, wie der Prüfungskatalog sie zeigt. Maßgeblich bleibt immer die Legende der jeweiligen Aufgabe.

```
FAZ                     FEZ
┌────────┬───────────────┐
│Vorgang │ Beschreibung  │
├────────┼───────┬───────┤
│ Dauer  │  GP   │  FP   │
└────────┴───────┴───────┘
SAZ                     SEZ
```

- Oben links über dem Knoten FAZ, oben rechts FEZ; unten links SAZ, unten rechts SEZ.
- Im Knoten oben Vorgang und Beschreibung, unten Dauer, GP und FP.
- Pfeile führen vom Vorgänger zum Nachfolger.
