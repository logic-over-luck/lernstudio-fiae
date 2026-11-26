Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Testszenarien und Testdaten › Testszenarien auswählen und Testdaten generieren › Testdaten auswählen und generieren: Äquivalenzklassen, Grenzwerte, Sonderfälle

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

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
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu einer vorgegebenen Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen etwa 10–12), eine Teilaufgabe nach der anderen. Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Testdaten auswählen und generieren: Äquivalenzklassen, Grenzwerte, Sonderfälle

Ziel: Testdaten systematisch bilden, die Normalfall, Grenzen, ungültige Eingaben und Sonderfälle abdecken, und wissen, wozu Testdatengeneratoren dienen.

Das muss ich können:

### K1 – Äquivalenzklassen und ihre Vertreter (Stufe 3 Anwenden)
Du kannst Äquivalenzklassen bilden: Eingaben, die die Funktion gleich behandelt, in Klassen einteilen (gültige und ungültige) und je Klasse einen Vertreter testen, zum Beispiel Testdaten aus zwei weiteren Klassen, für die −1 erwartet wird.

Erklärung:
**Äquivalenzklasse:** eine Gruppe von Eingaben, die die Funktion **gleich behandelt**. Je Klasse genügt **ein Vertreter**, weil ein weiterer Wert derselben Klasse keinen neuen Fehler zeigen würde.
- **gültige** Klassen: Eingaben, die normal verarbeitet werden
- **ungültige** Klassen: Eingaben, die abgelehnt werden (z. B. Ergebnis −1)
Beispiel Prozentwert 0–100, sonst −1:
- gültig 0 bis 100 → z. B. 40
- ungültig unter 0 → z. B. −7, erwartet −1
- ungültig über 100 → z. B. 150, erwartet −1
**Mehrere Parameter:** Ungültige Klassen je Parameter und für die Beziehung zwischen ihnen bilden. Beispiel `berechneDifferenz(alt, neu)`, −1 bei negativen Werten oder alt > neu: ungültig alt < 0 (z. B. −200 / 230), ungültig beide < 0 (z. B. −96 / −35), ungültig alt > neu (z. B. 440 / 420). Werden „weitere“ Klassen verlangt, nur solche nennen, die die vorhandenen Testfälle noch nicht abdecken.

### K2 – Normalfall, Grenzwerte und ungültige Eingaben (Stufe 4 Beurteilen)
Du kannst für eine Funktion Testdaten auswählen, die den Normalfall, die Grenzwerte und ungültige Eingaben abdecken, und die Auswahl begründen: an jeder Grenze den Grenzwert selbst sowie die Werte knapp darunter und darüber, weil Fehler wie < statt <= genau dort auffallen (in 2022S-PB2-A2-ba scheitern die Testfälle 120/120 und 0/0).

Erklärung:
Gute Testdaten decken ab:
- den **Normalfall**
- die **Grenzen:** an jeder Grenze den **Grenzwert selbst** und die Werte **knapp darunter und darüber**
- **ungültige Eingaben**
Begründung: Fehler wie `<` statt `<=` fallen **nur genau an der Grenze** auf. Ein Wert weit innen oder außen verhält sich bei beiden Schreibweisen gleich.
Beispiel aus der Prüfung 2022S: `berechneDifferenz(alt, neu)` soll für alt ≤ neu (beide nicht negativ) die Differenz liefern, der Code prüft aber `alt < neu` und `neu > 0`. Der Testfall 240/260 besteht; nur die Grenzfälle 120/120 und 0/0 (erwartet 0, geliefert −1) decken den Fehler auf.
Beispiel 1 bis 100 zulässig: 50 | 0, 1, 2 | 99, 100, 101 | „abc“.
Beispiel Versandkostenfrei ab 50 €: Testdaten 20 € und 80 € reichen **nicht** – ergänze 49,99 €, 50 € und 50,01 €.

### K3 – Testdaten aus Sonderfällen des Algorithmus (Stufe 3 Anwenden)
Du kannst aus den Sonderfällen eines Algorithmus gezielt Testdaten ableiten, die oft vergessen werden: leeres Array oder null, nur ein Element, nur positive bzw. nur negative Werte (je nach Startwert), das gesuchte Element an erster oder letzter Stelle.

Erklärung:
Sonderfälle werden beim Testen leicht vergessen – leite gezielt Testdaten daraus ab:
- **leeres Array** oder `null`
- **nur ein Element**
- **nur positive bzw. nur negative Werte** – je nach Startwert: eine Maximum-Suche mit `max = 0` liefert bei [−4, −2, −9] fälschlich 0
- gesuchtes Element an **erster** oder **letzter** Stelle (Schleifengrenzen!)
- **gleiche Werte:** der Extremwert doppelt oder alle Elemente gleich, z. B. Minimum von [10, −10, −20, −20, 30] → −20, von [7, 7, 7] → 7
Frage dich bei jedem Algorithmus: Was passiert am Rand – leer, eins, ganz vorn, ganz hinten, alles gleich?

### K6 – Testdatengeneratoren statt echter Personendaten (Stufe 3 Anwenden)
Du kannst Testdatengeneratoren einsetzen: große Mengen passender, auch zufälliger oder grenznaher Testdaten nach festgelegten Regeln (Wertebereich, Format, Verteilung) automatisch erzeugen lassen, statt echte personenbezogene Daten zu verwenden.

Erklärung:
**Testdatengenerator:** erzeugt automatisch große Mengen passender Testdaten nach festgelegten **Regeln**:
- **Wertebereich** (z. B. Alter 18–99)
- **Format** (z. B. Postleitzahl fünfstellig, E-Mail-Muster)
- **Verteilung** (gleichmäßig, zufällig, gehäuft an Grenzen)
Einsatz: für Last- und Performancetests, für viele Grenz- und Zufallswerte – und **statt echter personenbezogener Daten**, deren Verwendung im Test in der Regel gegen Zweckbindung und Datenminimierung der DSGVO (Art. 5 Abs. 1 lit. b und c) verstößt und nur mit Rechtsgrundlage oder nach Anonymisierung zulässig ist.
Beispiel: 100.000 Kundendatensätze für einen Lasttest werden generiert statt aus der Produktivdatenbank kopiert.

### K8 – Arten von Testdatengeneratoren (Stufe 2 Verstehen)
Du kannst Testdatengeneratoren nach ihrer Grundlage unterscheiden: datenbankbasierte erzeugen Datenbestände aus dem Datenbankschema, codebasierte leiten Testdaten aus dem Quelltext ab (White-Box), schnittstellenbasierte aus den Wertebereichen der Parameter, etwa über Äquivalenzklassen und Grenzwerte (Black-Box), und spezifikationsbasierte erzeugen aus der Spezifikation Testdaten samt erwarteten Ergebnissen.

Erklärung:
**Prinzip:** Ein Generator braucht eine Vorlage, aus der er weiß, welche Daten gültig und sinnvoll sind – nach dieser Vorlage werden die Arten unterschieden.
- **datenbankbasiert:** liest Tabellen, Datentypen, Schlüssel und Beziehungen und füllt die Datenbank mit passenden Datensätzen (z. B. 10.000 Kunden mit gültigen Fremdschlüsseln für den Lasttest)
- **codebasiert:** analysiert den Quelltext und wählt Werte so, dass möglichst viele Zweige durchlaufen werden (White-Box)
- **schnittstellenbasiert:** liest die Parameter mit ihren Wertebereichen und bildet Vertreter der Äquivalenzklassen und Grenzwerte (Black-Box)
- **spezifikationsbasiert:** liefert zusätzlich das **erwartete Ergebnis**, weil die Spezifikation beschreibt, was herauskommen soll
Manche Werkzeuge beherrschen mehrere Arten.

## Lehrnotiz: Testdaten auswählen und generieren: Äquivalenzklassen, Grenzwerte, Sonderfälle

**Hinweis aus dem Lernplan:** Den Extremwertetest erklären steht in PB1-9-1-3; hier wird er beim Bilden der Testdaten angewendet. Sonderfälle im Code abfangen steht in PB2-1-1-1; hier geht es um die Testdaten dazu. Testdaten für eine Überdeckung anpassen steht in PB2-4-1-1-K6.

**Aufteilung:**
- Äquivalenzklassen bilden: K1
- Normalfall, Grenzwerte, ungültige Eingaben: K2 – die Klassen zeigen, wo die Grenzen liegen
- Sonderfälle eines Algorithmus: K3
- Testdatengeneratoren: Einsatz K6, danach die Arten K8

**Schon geprüft:** In Prüfungen: K1 (2022S) · Noch nicht geprüft: K2, K3, K6, K8

**Kerngedanken:**
- Eine Klassengrenze liegt überall dort, wo die Funktion ihr Verhalten ändert. Genau an diesen Stellen liegen auch die Grenzwerte; Äquivalenzklassen und Grenzwerte gehören deshalb zusammen.
- Testdaten ohne erwartetes Ergebnis sind noch kein Testfall. Das erwartete Ergebnis kommt aus der Anforderung.
- Bei Sonderfällen wie einem leeren Array legt die Anforderung fest, was richtig ist. Schweigt sie dazu, macht der Testfall diese Lücke sichtbar.
- Abgrenzung: Hier entstehen Testdaten aus Anforderung, Wertebereichen und Randfällen. Testdaten, die eine bestimmte Überdeckung des Codes erreichen sollen, gehören zum Nachbarthema Testabdeckung.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K3 – Warum der Startwert 0 bei der Maximum-Suche nur mit negativen Werten auffällt: (1) Die Maximum-Suche setzt die Variable max vor der Schleife auf den Startwert 0. (2) Die Schleife vergleicht jedes Element mit max und überschreibt max nur, wenn das Element größer ist. (3) Bei [−4, −2, −9] sind die Vergleiche −4 > 0, −2 > 0 und −9 > 0 alle falsch, also wird max nie überschrieben. (4) Die Funktion gibt den Startwert 0 zurück, obwohl 0 gar nicht im Array steht; richtig wäre −2. (5) Enthält das Array mindestens einen positiven Wert, überschreibt dieser den Startwert, und der Fehler bleibt im Test unsichtbar. (6) Bei der Minimum-Suche mit Startwert 0 ist es umgekehrt: Nur ein Array aus ausschließlich positiven Werten deckt den Fehler auf.

**Typische Missverständnisse:**
- Viele denken, es gebe immer nur eine gültige und eine ungültige Klasse; richtig ist: Behandelt die Funktion gültige Eingaben unterschiedlich (z. B. zwei Tarife), ist jede Behandlung eine eigene Klasse, und ungültige gibt es meist unterhalb und oberhalb.
- Viele denken, „schnittstellenbasiert“ habe mit dem Code zu tun; richtig ist: Gemeint sind die Parameter und ihre Wertebereiche von außen (Black-Box), in den Quelltext schaut nur der codebasierte Generator.

**Fachwörter:**
- Äquivalenzklasse: Eingaben, die die Funktion gleich behandelt
- Vertreter: ein Testwert stellvertretend für seine Klasse
- Grenzwert: Wert genau am Rand einer Klasse
- Testdatengenerator: erzeugt automatisch Testdaten nach Regeln
- datenbankbasiert: Daten aus dem Datenbankschema erzeugt
- schnittstellenbasiert: aus Wertebereichen der Parameter abgeleitet
- spezifikationsbasiert: liefert Testdaten samt erwartetem Ergebnis

**So fragt die IHK:**
- Belegt ist eine Teilaufgabe (4 Punkte) aus einer Unit-Test-Aufgabe: Zu einer Methode mit zwei Parametern, die bei ungültigen Werten −1 liefert, waren in einer vorgegebenen Antworttabelle (Nr. | Parameter 1 | Parameter 2 | Ergebnis) Testdaten aus zwei weiteren Äquivalenzklassen anzugeben, für die −1 erwartet wird.
- Gezählt wurden 2 Punkte je vollständig richtigem Beispiel; die Lösungen waren beispielhaft (z. B. ein Wert negativ, beide negativ). Klassen, die der vorhandene Test schon abdeckt, zählen nicht.
- In derselben Aufgabe zeigten sich die Fehler genau an Testfällen mit Grenz- und Sonderwerten (gleiche Werte, Nullwerte).
- Grenzwerte, Sonderfälle und Testdatengeneratoren waren noch keine eigene Teilaufgabe. Zu erwarten wären „Geben Sie Testdaten an …“, „Begründen Sie …“, „Beurteilen Sie die Auswahl …“ mit 2–4 Punkten, oft als Tabelle.
- Testdaten zählen nur mit passendem erwartetem Ergebnis.

**Fallen:**
- Die Grenzen einer Klasse falsch ziehen oder einen Vertreter der falschen Klasse zuordnen.
- Einen Vertreter ohne erwartetes Ergebnis oder mit falschem Ergebnis angeben.
- Nur den Grenzwert selbst nennen, ohne die Nachbarwerte darunter und darüber.
- Bei Geldbeträgen die Nachbarwerte einen Euro statt einen Cent neben die Grenze legen.
- Die ungültige Eingabe vergessen oder die Auswahl nicht begründen.
- Bei mehreren Parametern den Grenzwert eines Parameters mit einem ungültigen Wert des anderen kombinieren: Dann ist nicht erkennbar, was geprüft wird.
- Sonderfälle nur als Stichwort („Randfälle testen“) nennen statt als konkrete Testdaten mit erwartetem Ergebnis.
- Nur „normale“ Arrays mit einigen gemischten Werten testen.
- Nicht erkennen, welcher Testfall einen Fehler aufdeckt: Dazu jeden Testfall einmal von Hand durch den Code spielen.
- Den Einsatz eines Generators nur mit „geht schneller“ begründen: Der Datenschutzgrund gehört dazu (echte Daten wurden für den Betrieb erhoben, nicht für Tests, und sind im Test nicht nötig).
- Die Regeln des Generators weglassen oder nur unkonkret nennen („realistische Daten“) statt je Feld Wertebereich, Format oder Verteilung.
- Bei der Art des Generators die Grundlage nicht nennen (Schema, Quelltext, Parameter, Spezifikation); beim datenbankbasierten gehört dazu, dass er aus dem Schema Datentypen, Schlüssel und Beziehungen übernimmt, sodass z. B. alle Fremdschlüssel auf vorhandene Datensätze zeigen.
