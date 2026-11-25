Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Fehler finden, Debugging und Unit-Tests › Code prüfen und Fehler beheben › Unit-Tests schreiben und prüfen, Regressionstests

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen: gern mit Beispielen aus dem Alltag und dem Warum dahinter.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
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

## Stoff: Unit-Tests schreiben und prüfen, Regressionstests

Ziel: Aufbau und Eigenschaften guter Unit-Tests beschreiben, zu einer Anforderung selbst einen Unit-Test schreiben (auch testgetrieben), einen gegebenen Unit-Test gegen den Code prüfen und Regressionstests einordnen.

Das muss ich können:

### K2 – F.I.R.S.T.-Eigenschaften guter Unit-Tests (Stufe 2 Verstehen)
Du kannst über PB1-9-1-4 hinaus Aufbau und Eigenschaften guter Unit-Tests beschreiben: Eine Testmethode prüft eine einzelne Einheit (Methode, Klasse) mit assertEquals(erwartet, tatsächlich); gute Unit-Tests folgen F.I.R.S.T. – schnell (Fast), unabhängig voneinander (Independent), wiederholbar mit gleichem Ergebnis (Repeatable), selbstprüfend ohne manuelle Kontrolle (Self-Validating), rechtzeitig vor dem Produktivcode geschrieben (Timely).

Erklärung:
Was ein Unit-Test als Teststufe ist, kennst du aus PB1-9-1-4. Hier geht es um den **Aufbau** und die **Güte**.
**Aufbau einer Testmethode:**
- prüft **eine Einheit** (Methode oder Klasse)
- ruft sie mit festen Daten auf und vergleicht mit `assertEquals(erwartet, tatsächlich)`
`@Test`
`void summeVonDrei() {`
`  assertEquals(6, Rechner.summe(3));`
`}`
`@Test` kennzeichnet die Methode als Testmethode: Ein Test-Framework (in Java **JUnit**) findet sie, führt sie aus und meldet OK oder Fehler.
**F.I.R.S.T.** – gute Unit-Tests sind
- **Fast:** schnell, damit man sie oft laufen lässt
- **Independent:** unabhängig voneinander, Reihenfolge egal
- **Repeatable:** bei jeder Wiederholung gleiches Ergebnis (kein Zufall, keine Uhrzeit)
- **Self-Validating:** sie melden selbst OK oder Fehler
- **Timely:** rechtzeitig, vor dem Produktivcode geschrieben

### K3 – Gegebenen Unit-Test gegen Code prüfen (Stufe 4 Beurteilen)
Du kannst einen gegebenen Unit-Test gegen den Code überprüfen: jeden assertEquals-Aufruf mit der Methode von Hand nachrechnen und je Testfall eintragen, ob er besteht (OK) oder fehlschlägt (Fehler).

Erklärung:
Einen gegebenen Unit-Test prüfst du wie einen kleinen Schreibtischtest:
- je `assertEquals(erwartet, methode(...))` die Methode mit genau diesen Werten **von Hand** durchrechnen
- Ergebnis mit dem erwarteten Wert vergleichen: gleich → **OK**, sonst → **Fehler**
Beispiel (ab 10 Stück 5 %, ab 100 Stück 10 %), Code mit `>` statt `>=`:
`if (menge > 100) return 10;`
`if (menge > 10) return 5;`
`return 0;`
- `assertEquals(0, rabatt(9))` → 0 → OK
- `assertEquals(5, rabatt(10))` → 0 → Fehler
- `assertEquals(5, rabatt(99))` → 5 → OK
- `assertEquals(10, rabatt(100))` → 5 → Fehler
Achtung: Ein fehlschlagender Test kann auch einen **falschen erwarteten Wert** haben – prüfe ihn gegen die Anforderung.

### K4 – Zweck von Regressionstests (Stufe 2 Verstehen)
Du kannst den Zweck von Regressionstests erläutern: Nach jeder Änderung werden die vorhandenen Tests erneut ausgeführt, damit bereits funktionierende Teile nicht unbemerkt kaputtgehen.

Erklärung:
**Regressionstest:** Nach **jeder Änderung** werden die **vorhandenen Tests** erneut ausgeführt.
Zweck: Eine Korrektur oder Erweiterung kann an anderer Stelle etwas kaputt machen, das vorher lief (Nebenwirkung). Durch den Regressionstest fällt das auf, bevor es der Kunde merkt.
Beispiel: Du behebst einen Fehler in `rabatt()`. Der neue Test besteht – aber `rechnungErstellen()`, das `rabatt()` nutzt, liefert jetzt falsche Summen. Erst das erneute Ausführen aller Tests zeigt das.
Deshalb lohnt sich die Automatisierung: Unit-Tests laufen in Sekunden, auch nach jeder kleinen Änderung.

### K5 – Unit-Test zur Anforderung, auch testgetrieben (Stufe 3 Anwenden)
Du kannst zu einer Anforderung einen Unit-Test schreiben: Testfälle für Normalfall, Grenzen und Fehlerfälle als assertEquals(erwartet, methode(...)) aufschreiben, auch bevor der Code existiert (Test Driven Development: erst ein fehlschlagender Test, dann gerade so viel Code, dass er besteht, dann aufräumen – Red, Green, Refactor).

Erklärung:
Zu einer Anforderung schreibst du Testfälle für
- den **Normalfall**
- die **Grenzen** (Grenzwert und Nachbar)
- die **Fehlerfälle**
Beispiel: `gebuehr(alter)` liefert 0 für 0–17, 10 ab 18, −1 für negative Werte.
`assertEquals(10, gebuehr(30));  // Normalfall`
`assertEquals(0, gebuehr(17));   // Grenze`
`assertEquals(10, gebuehr(18));  // Grenze`
`assertEquals(0, gebuehr(0));    // untere Grenze`
`assertEquals(-1, gebuehr(-1));  // Fehlerfall`
**Arrays und Listen** testest du zusätzlich mit: Extremwert an erster und an letzter Stelle, doppelten Werten, nur positiven bzw. nur negativen Werten, nur einem Element sowie `null` bzw. einem leeren Array.
Das erwartete Ergebnis eines Fehlerfalls kann auch eine **Ausnahme** sein, z. B. „Exception – Array nicht auswertbar“; in JUnit 5: `assertThrows(IllegalArgumentException.class, () -> minimum(null));`
**Test Driven Development (TDD):** die Tests **vor** dem Code schreiben.
- **Red:** Test schreiben, er schlägt fehl
- **Green:** gerade so viel Code, dass er besteht
- **Refactor:** aufräumen, die Tests müssen weiter bestehen

### K6 – TDD als Entwurfsstrategie (Stufe 2 Verstehen)
Du kannst erläutern, warum testgetriebene Entwicklung eher eine Entwurfs- als eine Teststrategie ist: Die Tests entstehen vor dem Code und legen fest, was er leisten muss, sie steuern so Schritt für Schritt die Entwicklung und geben sofort Rückmeldung – anders als Tests, die erst nach der Implementierung geschrieben werden.

Erklärung:
Beim klassischen Vorgehen wird erst programmiert und danach getestet; der Test prüft, was schon da ist. Bei **TDD** dreht sich die Reihenfolge um (**Test First**):
- Der Test beschreibt vorab, **was** eine Methode leisten soll – Eingaben, erwartete Ergebnisse, Fehlerfälle – und ist damit eine ausführbare Spezifikation
- Wer zuerst den Test schreibt, muss sich vorher über **Schnittstelle** und Verhalten klar werden; der Code wird dadurch von selbst testbar und klein geschnitten
- Jeder kleine Schritt wird sofort geprüft, Fehler fallen auf, solange der Code noch frisch ist
TDD steuert also den **Entwurf**; dass am Ende viele Tests vorliegen, ist ein Nebeneffekt. Verbreitet ist es vor allem in agilen Vorgehensmodellen.
Beispiel: Bevor `berechneRabatt` existiert, legt der Test fest, dass ab 100 € Bestellwert 5 % abgezogen werden und ein negativer Betrag abgewiesen wird.

### K7 – TDD: Vor- und Nachteile (Stufe 4 Beurteilen)
Du kannst den Einsatz testgetriebener Entwicklung beurteilen: Vorteile sind hohe Codequalität, eine einfache Fehleranalyse dank gezielter Tests und kein überflüssiger Code; Nachteile sind, dass nur einzelne Units geprüft werden (Integrations- und Systemtest bleiben nötig), dass viele kleine Tests gepflegt werden müssen und veralten können und dass der Blick auf die Gesamtarchitektur fehlt.

Erklärung:
TDD bringt viel, ersetzt aber weder den Architekturentwurf noch die höheren Teststufen.
**Vorteile**
- hohe **Codequalität:** jede Funktion ist durch Tests abgesichert, spätere Änderungen sind risikoarm
- leichte **Fehleranalyse:** ein fehlschlagender Test zeigt genau die betroffene Einheit
- **kein überflüssiger Code:** geschrieben wird nur, was ein Test verlangt
- weniger Wartungsaufwand, weil Fehler früh auffallen
**Nachteile**
- prüft nur **Units**; das Zusammenspiel der Komponenten braucht Integrations- und Systemtests
- **viele kleine Tests** müssen bei Änderungen mitgepflegt werden, veraltete Tests bleiben oft liegen
- **kein Gesamtblick:** Schritt für Schritt entstehen gut getestete Einzelteile, eine tragfähige Architektur muss trotzdem bewusst entworfen werden
Beispiel: Ein Team baut den Warenkorb eines Shops per TDD fehlerarm auf – dass der angebundene Bezahldienst unter Last zu langsam antwortet, zeigt erst ein System- oder Lasttest.

## Lehrnotiz: Unit-Tests schreiben und prüfen, Regressionstests

**Aufteilung:**
- Aufbau einer Testmethode und Güte guter Tests: K2
- Gegebene Tests von Hand gegen den Code prüfen: K3
- Regressionstests: K4
- Testfälle selbst schreiben, auch vor dem Code: K5
- Testgetriebene Entwicklung als Entwurfsstrategie: K6
- Einsatz testgetriebener Entwicklung beurteilen: K7

**Schon geprüft:** In Prüfungen: K2 (2022S, 2025W), K3 (2022S), K4 (2024S) · Noch nicht geprüft: K5–K7

**Kerngedanken:**
- Die IHK-Lösung zur Frage „Was ist ein Unit-Test?“ lautet: Einzelne Teile oder Einheiten einer Anwendung, die Units, werden auf ihre Funktionalität geprüft. Dass man sie dabei isoliert prüft, also getrennt vom Rest des Systems, gehört fachlich dazu, steht aber nicht in der Lösung.
- Der erwartete Wert eines Testfalls kommt immer aus der Anforderung, nie aus dem vorhandenen Code. Das gilt auch für selbst geschriebene Tests zu Code, der schon existiert.
- Ein Test, der vom aktuellen Datum abhängt, wird wiederholbar, indem das Datum als Parameter übergeben und im Test fest vorgegeben wird.
- Bei „beurteilen“ stehen Vor- und Nachteile nicht in der Aufgabe. Verlangt ist das Wissen über testgetriebene Entwicklung, bezogen auf die Situation (z. B. viele Schnittstellen zu anderen Systemen), und eine begründete Entscheidung.

**Typische Missverständnisse:**
- Viele denken, ein Regressionstest sei ein neuer Test für den gerade behobenen Fehler; richtig ist: Die vorhandenen Tests werden erneut ausgeführt.
- Viele denken, „Timely“ heiße pünktlich fertig; richtig ist: Der Test wird vor dem Produktivcode geschrieben.

**Fachwörter:**
- Unit-Test: prüft eine einzelne Einheit isoliert
- Testmethode: ruft die Einheit auf, vergleicht das Ergebnis
- assertEquals(erwartet, tatsächlich): Vergleich, bei Abweichung schlägt der Test fehl
- Regressionstest: vorhandene Tests nach jeder Änderung erneut
- Grenzen: Stellen, an denen sich das Verhalten ändert
- Fehlerfälle: ungültige Eingaben mit festgelegter Reaktion
- Test Driven Development (TDD): Tests vor dem Code schreiben
- Red, Green, Refactor: fehlschlagen, bestehen, aufräumen

**So fragt die IHK:**
- Unit-Tests kommen regelmäßig vor, meist als Teil einer Aufgabe zu einer gegebenen Methode.
- Belegt: Unit-Test beschreiben oder erklären (rund 3 Punkte).
- Belegt: eine gegebene Testklasse mit mehreren `assertEquals`-Aufrufen gegen den Code prüfen und je Test „OK“ oder „Fehler“ eintragen; danach den Code so ändern, dass die Tests bestehen.
- Belegt: eine große Testtabelle zu einer Array-Methode mit den Spalten „Testdaten – erwartetes Testergebnis – Testergebnis“ (rund 10 Punkte, je Zeile 2 Punkte). Die Lösung nutzt Extremwerte an verschiedenen Stellen, nur positive und gemischte Werte, ein Element und `null` mit erwarteter Ausnahme.
- Belegt: den Zweck von Regressionstests erläutern.
- Operatoren: „beschreiben“, „erläutern“, „ergänzen“, „tragen Sie ein“, „erstellen“.
- TDD und F.I.R.S.T. wurden bisher nicht wörtlich abgefragt. Sie stehen im Prüfungskatalog unter Testverfahren; zu erwarten wäre „beschreiben“ oder „beurteilen“ mit 2–4 Punkten.

**Fallen:**
- Bei `assertEquals` die Reihenfolge vertauschen: Erst steht der erwartete, dann der tatsächliche Wert; vertauscht nennt die Fehlermeldung die Werte falsch herum. Eine optionale Meldung kommt in JUnit 5 als letzter Parameter (in JUnit 4 als erster).
- Einen Unit-Test nur mit „testet den Code“ beschreiben, ohne einzelne Einheit, feste Testdaten und Vergleich.
- Beim Prüfen „OK“ eintragen, weil die Methode irgendeinen Wert liefert, statt ihn mit dem erwarteten Wert zu vergleichen.
- Bei jedem fehlschlagenden Test sofort den Code ändern; ist der erwartete Wert im Test falsch, macht das richtigen Code kaputt.
- Den Zweck des Regressionstests nur mit „zur Sicherheit“ angeben, ohne die Nebenwirkungen auf Methoden, die den geänderten Code nutzen.
- Nur Normalfälle testen, eine Grenze nur auf einer Seite prüfen, die untere Grenze oder den Fehlerfall vergessen.
- Bei TDD gleich den ganzen Code schreiben statt nur so viel, dass der aktuelle Test besteht.
- Beim Beurteilen nur eine Seite abwägen oder ohne Bezug zur Situation und ohne Entscheidung enden.
