Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Strukturierte und objektorientierte Analyse und Design

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

## Stoff: Strukturierte und objektorientierte Analyse und Design

Ziel: Mit Top-down, Bottom-up und Modularisierung entwerfen und aus einer fachlichen Beschreibung Klassen ableiten und ihre Umsetzung festlegen.

Das muss ich können:

### K1 – Top-down- und Bottom-up-Entwurf (Stufe 3 Anwenden)
Du kannst Top-down- und Bottom-up-Entwurf unterscheiden und anwenden: eine Aufgabe schrittweise in überschaubare Teilaufgaben zerlegen bzw. aus vorhandenen oder zuerst erstellten Bausteinen größere Einheiten zusammensetzen.

Erklärung:
- **Top-down:** vom Ganzen ins Detail – Aufgabe schrittweise in Teilaufgaben zerlegen, bis jede überschaubar ist.
- **Bottom-up:** aus vorhandenen oder zuerst gebauten Bausteinen größere Einheiten zusammensetzen.
In der Praxis oft gemischt.

### K2 – Modularisierung: Module mit klarer Schnittstelle (Stufe 3 Anwenden)
Du kannst Modularisierung anwenden: ein Programm in Module mit klarer Aufgabe und Schnittstelle zerlegen, damit sie wiederverwendet, getrennt getestet, arbeitsteilig entwickelt und leichter gewartet werden können.

Erklärung:
**Modul** = Baustein mit **klarer Aufgabe** und **Schnittstelle**.
Vorteile:
- **wiederverwendbar**
- **getrennt testbar**
- **arbeitsteilig** entwickelbar
- **leichter wartbar** (Änderung bleibt im Modul)

### K3 – Objektorientierte Analyse gegen objektorientierten Entwurf (Stufe 2 Verstehen)
Du kannst objektorientierte Analyse (was: Klassen, Attribute und Beziehungen aus der Fachsprache, vgl. AP1-8-3-2) und objektorientierten Entwurf (wie: Methoden, Datentypen, Datenstrukturen) unterscheiden.

Erklärung:
- **Objektorientierte Analyse (OOA):** *Was* gibt es? Klassen, Attribute, Beziehungen aus der **Fachsprache** (Substantive → Klassen).
- **Objektorientierter Entwurf (OOD):** *Wie* wird es umgesetzt? Methoden, **Datentypen**, Datenstrukturen, Muster.

### K5 – Hohe Bindung, geringe Kopplung (Stufe 3 Anwenden)
Du kannst hohe Bindung (Kohäsion: Daten und Operationen im Modul gehören eng zusammen) und geringe Kopplung (wenig Abhängigkeit von anderen Modulen) beim Zerlegen eines Programms in Module anwenden – mit dem Grund dahinter: Jede Abhängigkeit ist eine Schnittstelle, die beachtet werden muss und Fehler verursachen kann, und bei geringer Kopplung bleibt eine Änderung im Modul.

Erklärung:
Zwei Maße zeigen, wie gut ein Programm zerlegt ist:
- **Bindung (Kohäsion)** – nach innen: Wie eng gehören Daten und Operationen eines Moduls zusammen? **Hoch** ist gut: Das Modul hat eine klare Aufgabe.
- **Kopplung** – nach außen: Wie stark hängen Module voneinander ab? **Gering** ist gut: Jede Abhängigkeit ist eine Schnittstelle, die man beachten, testen und bei Änderungen nachziehen muss.
- **Abstraktion** senkt die Kopplung: Andere Module kennen nur das Verhalten (z. B. ein Interface), nicht die Umsetzung.
Beispiel: Eine Klasse `Kunde`, die auch Rechnungen druckt und Mails verschickt, hat eine geringe Bindung. Liest das Rechnungsmodul direkt die Tabellen des Lagermoduls, ist die Kopplung hoch – jede Tabellenänderung legt die Rechnung lahm.

### K6 – Merkmale für die Wahl einer Datenstruktur (Stufe 3 Anwenden)
Du kannst aus einer Anforderungsbeschreibung die Merkmale bestimmen, nach denen eine Datenstruktur gewählt wird (woran man ihre Eignung misst: AP1-8-2-5): ob die Anzahl der Daten feststeht oder sich laufend ändert, wie viele Daten es sind, ob über eine Position, einen Schlüssel oder in der Reihenfolge des Eingangs zugegriffen wird und welche Operation besonders schnell sein muss.

Erklärung:
Die Datenstruktur folgt aus der Anforderung, nicht aus Gewohnheit. Vier Fragen helfen:
- **Anzahl:** fest und vorher bekannt (→ Array) oder wechselnd (→ dynamische Struktur)?
- **Menge:** wenige oder sehr viele Datensätze?
- **Zugriff:** über eine Position oder Koordinate, über einen eindeutigen Schlüssel oder in Eingangsreihenfolge?
- **Häufigste Operation:** Lesen/Schreiben, Einfügen/Löschen oder Suchen – sie muss schnell sein.
In der Praxis reichen meist **Array, Liste und Hashtabelle** (Aufbau siehe AP1-8-2-5).
Beispiel: „Die Hotline soll Rückrufwünsche der Reihe nach abarbeiten“ → Anzahl wechselnd, Zugriff in Eingangsreihenfolge, oft Einfügen und Entnehmen.

### K7 – Datenstruktur aus einer Anforderung ableiten (Stufe 3 Anwenden)
Du kannst aus einer Anforderung die passende Datenstruktur ableiten: ein zweidimensionales Array bei fester, bekannter Anzahl und Zugriff über zwei Koordinaten, eine Warteschlange (oder doppelt verkettete Liste) bei wechselnder Anzahl und Abarbeitung in Eingangsreihenfolge, eine Hashtabelle bei vielen, selten geänderten Datensätzen, die schnell über einen eindeutigen Schlüssel gefunden werden sollen.

Erklärung:
Aus den Merkmalen der Anforderung folgt die Struktur – und die Begründung nennt genau diese Merkmale:
- **Zweidimensionales Array:** Anzahl fest und bekannt, Zugriff über Zeile und Spalte, vor allem Lesen und Schreiben. Beispiel: Belegung der Racks im Serverraum nach Rack und Höheneinheit.
- **Warteschlange (FIFO = first in, first out):** Anzahl unbekannt und schwankend, Abarbeitung in Eingangsreihenfolge, danach entfernen; sie wächst dynamisch, hinten anfügen und vorne entnehmen geht schnell. Beispiel: Supporttickets. Alternativ eine doppelt verkettete Liste.
- **Hashtabelle:** viele, selten geänderte Datensätze, schneller Zugriff über einen eindeutigen Schlüssel; als Wert ein Objekt mit allen Angaben. Beispiel: Gerätedaten über die Inventarnummer.
Eine Begründung ohne Bezug zur Anforderung („weil Hashtabellen schnell sind“) reicht in der Prüfung nicht.

## Lehrnotiz: Strukturierte und objektorientierte Analyse und Design

**Aufteilung:**
- Teil A – Ein Programm zerlegen: Top-down und Bottom-up K1; Modularisierung K2; Bindung und Kopplung K5
- Pause möglich nach Teil A.
- Teil B – Objektorientierte Analyse und objektorientierter Entwurf: K3
- Teil C – Datenstruktur wählen: Merkmale aus der Anforderung K6; passende Struktur ableiten und begründen K7

**Schon geprüft:** Noch nicht geprüft: K1–K3, K5–K7

**Kerngedanken:**
- Wie ein Modul innen arbeitet, ist nach außen verborgen. Andere müssen nur seine Schnittstelle kennen; deshalb können mehrere Entwickler gleichzeitig und unabhängig arbeiten, sobald die Schnittstellen feststehen.
- In der Analyse sind Substantive nur Kandidaten für Klassen oder Attribute, Verben Kandidaten für Methoden oder Beziehungen. Danach wird gestrichen: Doppeltes, das System selbst, reine Gestaltungswünsche.
- Probe für Analyse oder Entwurf: Könnte ein Fachmensch ohne Programmierkenntnisse es so sagen, ist es Analyse. Kommen Datentypen, Signaturen oder Datenstrukturen vor, ist es Entwurf. Die Reihenfolge ist Analyse, dann Entwurf, dann Programmieren.
- Bei „beschreiben“ und „beurteilen“ zählt die Begründung am Fall, nicht das bloße Fachwort: Vorteil oder Maß nennen und sagen, was es für dieses Programm bedeutet.

**Typische Missverständnisse:**
- Viele denken, ein Modul sei einfach eine Datei. Richtig ist: Ein Modul ist ein Baustein mit klarer Aufgabe und festgelegter Schnittstelle.
- Viele denken, man lege schon in der Analyse Methoden mit Parametern und Datentypen fest. Richtig ist: Die Analyse hält fest, was es fachlich gibt (Klassen, Attribute, Beziehungen). Methoden, Datentypen und Datenstrukturen legt erst der Entwurf fest.

**Fachwörter:**
- Top-down: vom Ganzen schrittweise in Teilaufgaben zerlegen
- Bottom-up: aus Bausteinen das Ganze zusammensetzen
- Modul: Baustein mit klarer Aufgabe und Schnittstelle
- Bindung (Kohäsion): Zusammenhalt innerhalb eines Moduls
- Kopplung: Abhängigkeit zwischen Modulen
- Objektorientierte Analyse (OOA): was es fachlich gibt
- Objektorientierter Entwurf (OOD): wie es technisch umgesetzt wird
- Warteschlange (FIFO): Abarbeitung in Eingangsreihenfolge

**So fragt die IHK:**
- K3 wurde nur indirekt geprüft: Aus einem Sachverhalt war ein Klassendiagramm zu zeichnen. Die Aufgabe gehört zum Klassendiagramm-Stichpunkt; dahinter steckt die Analyse der Fachsprache. Die übrigen Inhalte wurden bisher nicht eigens abgefragt.
- Aus dem Prüfungskatalog leiten sich diese Aufgaben ab: den Unterschied zwischen Top-down und Bottom-up beschreiben (2–4 Punkte) oder eine Funktion zerlegen.
- Ebenso zu erwarten: Vorteile der Modularisierung am Fall beschreiben (je Vorteil 1 Punkt) oder einen Entwurf nach Bindung und Kopplung beurteilen.
- Bei den Datenstrukturen ist eine Struktur zu wählen und zu begründen (je Struktur und Begründung 1–2 Punkte).

**Fallen:**
- Teil A: Die Richtungen vertauschen; Top-down beginnt beim Gesamtsystem, Bottom-up bei den Bausteinen.
- Teil A: Beim Zerlegen auf der ersten Ebene stehen bleiben, statt bis zu direkt umsetzbaren Teilen zu gehen.
- Teil A: Beim Zerlegen technische Klassen aufzählen statt Teilaufgaben.
- Teil A: Module ohne Schnittstelle angeben oder so schneiden, dass sich ihre Aufgaben überschneiden.
- Teil A: Vorteile der Modularisierung nur aufzählen, ohne sie am Fall zu begründen.
- Teil A: „Hoch“ und „gering“ vertauschen; gut sind hohe Bindung und geringe Kopplung.
- Teil A: Einen Entwurf nur nach einem der beiden Maße beurteilen.
- Teil A: Nur „die Klasse ist zu groß“ schreiben; die IHK erwartet beide Maße beim Namen und die Folge der Abhängigkeit.
- Teil B: In der Analyse schon Datentypen und Methodensignaturen festlegen.
- Teil B: Alle Substantive ungefiltert als Klassen übernehmen.
- Teil C: Gleich eine Struktur nennen, ohne vorher die Merkmale aus dem Text zu holen.
- Teil C: Ein Array wählen, obwohl die Anzahl schwankt.
