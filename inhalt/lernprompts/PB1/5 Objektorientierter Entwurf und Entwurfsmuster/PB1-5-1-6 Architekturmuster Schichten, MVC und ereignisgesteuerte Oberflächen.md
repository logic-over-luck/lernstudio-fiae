Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Architekturmuster: Schichten, MVC und ereignisgesteuerte Oberflächen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen. Wo etwas abläuft oder funktioniert (Technik, Verfahren, Protokoll, Rechenweg), erklär zuerst Schritt für Schritt, was passiert, mit den richtigen Begriffen und dem Warum dahinter. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Die Erklärungen im Stoff sind das Minimum für die Prüfung, nicht die Grenze. Wo dort nur steht, was es gibt, erklär mir auch, wie es funktioniert, und trenn sichtbar, was die IHK lesen will und was nur Hintergrund zum Verstehen ist. Stehen in der Lehrnotiz „Abläufe zum Verstehen“, bau sie in deine Erklärung ein.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag – klein heißt wenig auf einmal, nicht oberflächlich. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
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

## Stoff: Architekturmuster: Schichten, MVC und ereignisgesteuerte Oberflächen

Ziel: Architekturmuster von Entwurfsmustern und Algorithmen abgrenzen, Schichtenarchitektur und MVC mit Vor- und Nachteilen erläutern und die Ereignisbehandlung einer Oberfläche als Observer erklären.

Das muss ich können:

### K1 – Architekturmuster, Entwurfsmuster, Algorithmus (Stufe 2 Verstehen)
Du kannst Architekturmuster, Entwurfsmuster und Algorithmus unterscheiden: Ein Architekturmuster legt den Aufbau der ganzen Anwendung fest (z. B. Schichten, MVC), ein Entwurfsmuster löst ein wiederkehrendes Teilproblem im Detailentwurf (z. B. Observer), und ein Algorithmus ist eine eindeutige Handlungsvorschrift, während ein Muster nur ein anpassbarer Lösungsplan ist.

Erklärung:
Muster gibt es auf verschiedenen Ebenen:
- **Architekturmuster:** Grundaufbau und Zusammenspiel der Komponenten der **ganzen** Anwendung – z. B. Schichtenarchitektur, Client-Server (viele Clients schicken Anfragen an einen zentralen Server, der sie beantwortet), MVC.
- **Entwurfsmuster:** bewährte Lösung für ein **Teilproblem** einzelner Klassen – z. B. Observer, Singleton, Factory Method.
- Noch feiner sind **Idiome**: typische Schreibweisen einer bestimmten Programmiersprache.
- Ein **Algorithmus** legt Schritt für Schritt eindeutig fest, was zu tun ist; ein **Muster** ist ein Bauplan, den man an die eigene Lage anpasst.
Beispiel: Ein Webshop ist in drei Schichten gebaut (Architekturmuster); der Lagerbestand benachrichtigt per Observer die Nachbestellung (Entwurfsmuster); die Bestellmenge berechnet ein Algorithmus.

### K2 – Schichtenarchitektur: Vor- und Nachteile (Stufe 2 Verstehen)
Du kannst Vor- und Nachteile einer Schichtenarchitektur (Aufbau: PB1-5-1-4-K7) erläutern: Jede Schicht spricht nur über eine festgelegte Schnittstelle mit der darunterliegenden, deshalb gibt es wenige Abhängigkeiten, Änderungen bleiben meist in einer Schicht und eine Schicht lässt sich austauschen; dafür ist sie langsamer, weil Daten durch mehrere Schichten gereicht und umgewandelt werden.

Erklärung:
In einer Schichtenarchitektur (z. B. Präsentation – Logik – Daten, siehe PB1-5-1-4-K7) spricht jede Schicht nur mit der direkt darunterliegenden, und zwar über eine **festgelegte Schnittstelle**.
- **Vorteile:** wenige, klar geregelte Abhängigkeiten; eine Änderung wirkt selten über ihre Schicht hinaus; eine Schicht ist **austauschbar** (z. B. andere Datenbank, zusätzliche App-Oberfläche); Teams können parallel an verschiedenen Schichten arbeiten.
- **Nachteil:** Jede Anfrage läuft durch alle Schichten, Daten werden mehrfach weitergereicht und umgewandelt – das kostet **Geschwindigkeit**.
Beispiel: Ein Onlineshop wechselt das Datenbanksystem – nur die Datenzugriffsschicht wird umgebaut, Oberfläche und Geschäftslogik bleiben, wie sie sind.

### K3 – MVC: Vor- und Nachteile (Stufe 2 Verstehen)
Du kannst Vor- und Nachteile von MVC (Aufbau: PB1-5-1-4-K6) erläutern: Mehrere Views zeigen dieselben Daten und bleiben automatisch auf demselben Stand, und Views lassen sich austauschen oder hinzufügen, ohne Model und Fachlogik anzufassen; dafür ist der Aufbau komplexer als eine einfache Oberfläche, und MVC sitzt meist innerhalb der Präsentationsschicht einer Schichtenarchitektur.

Erklärung:
MVC trennt Daten und Fachlogik (Model), Darstellung (View) und Steuerung (Controller); die Rollen stehen in PB1-5-1-4-K6.
- **Vorteile:** Mehrere Views zeigen dasselbe Model und werden bei Änderungen automatisch aktualisiert (das Model benachrichtigt sie, oft per Observer); Views lassen sich **austauschen oder ergänzen**, ohne das Model anzufassen; Oberfläche und Logik können getrennt entwickelt werden.
- **Nachteil:** mehr Klassen und Beziehungen – bei einer kleinen Oberfläche ist das **Mehraufwand und Komplexität**.
- **Einordnung:** MVC gliedert meist die Präsentationsschicht; darunter liegen Geschäftslogik und Datenzugriff.
Beispiel: Ein Monitoring-Tool zeigt dieselben Serverdaten als Tabelle und als Diagramm; ändert sich ein Messwert, aktualisieren sich beide Views. Eine Smartphone-Ansicht kommt als neue View hinzu.

### K4 – Ereignisbehandlung per Listener als Observer (Stufe 2 Verstehen)
Du kannst erklären, wie eine grafische Oberfläche auf Benutzeraktionen reagiert: Ein Ereignisbehandler (Listener-Objekt oder Callback-Funktion) wird beim Bedienelement angemeldet, und die GUI-Bibliothek ruft ihn erst auf, wenn das Ereignis eintritt, etwa ein Klick; das ist eine Anwendung des Observer-Musters mit dem Bedienelement als Subjekt.

Erklärung:
Eine GUI-Anwendung (GUI = grafische Benutzeroberfläche mit Fenstern, Buttons, Eingabefeldern) ist **ereignisgesteuert**: Code läuft nicht von oben nach unten, sondern dann, wenn der Benutzer etwas tut.
- Beim Bedienelement wird ein Ereignisbehandler **angemeldet** – ein Listener-Objekt, das ein vorgegebenes Interface implementiert, oder eine übergebene Funktion (Callback).
- Tritt das Ereignis ein (Klick, Auswahl, Regler bewegt), **ruft die Bibliothek** (die GUI-Bibliothek stellt die fertigen Bedienelemente bereit) den Behandler auf; er liest den Zustand der Elemente und aktualisiert die Oberfläche.
- Das ist das **Observer-Muster**: Bedienelement = Subjekt, Listener = Beobachter, seine Methode = `update()`. Mehrere Listener an einem Element sind möglich.
Beispiel: Der Button „Speichern“ bekommt einen Listener; bei jedem Klick ruft die Bibliothek dessen Methode auf, die die Eingaben prüft und speichert.

## Lehrnotiz: Architekturmuster: Schichten, MVC und ereignisgesteuerte Oberflächen

**Aufteilung:**
- Ebenen unterscheiden (ganze Anwendung, Teilproblem, feste Vorschrift): K1
- Schichtenarchitektur mit Vor- und Nachteilen: K2
- MVC mit Vor- und Nachteilen und Einordnung in die Schichten: K3
- Ereignisbehandlung an der Oberfläche als Observer: K4

**Schon geprüft:** Noch nicht geprüft: K1–K4

**Kerngedanken:**
- Ein Muster lässt offen, was im Einzelnen passiert: Der Observer legt zum Beispiel nicht fest, was `update()` tut. Ein Algorithmus legt jeden Schritt fest, etwa eine Preisberechnung.
- Zuordnen geht über zwei Prüffragen: Betrifft die Sache die ganze Anwendung oder nur einige Klassen? Ist jeder Schritt festgelegt oder nur der Bauplan?
- Bei „erläutern“ stehen die Vor- und Nachteile nicht in der Aufgabe. Verlangt ist das Wissen über die Architektur: Vorteil oder Nachteil nennen, den Grund dazusagen und auf die Lage des Kunden beziehen.
- Abgrenzung: Der Aufbau von Schichten, MVC und Observer wird im Stichpunkt Entwurfsmuster gelehrt. Hier geht es um Einordnung, Vor- und Nachteile und die Anwendung des Observers in der Oberfläche.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K3 – Wie mehrere Views in MVC auf demselben Stand bleiben: (1) Jede View meldet sich beim Model als Beobachter an; das Model kennt die Views nur über die gemeinsame Beobachter-Schnittstelle. (2) Der Benutzer macht in einer View eine Eingabe, und die View gibt diese Eingabe an den Controller weiter. (3) Der Controller wertet die Eingabe aus und ruft die passende Methode des Models auf. (4) Das Model ändert seine Daten und benachrichtigt anschließend alle angemeldeten Views über die Änderung. (5) Jede benachrichtigte View liest die aktuellen Daten aus dem Model und zeichnet ihre Darstellung neu.

**Typische Missverständnisse:**
- Viele denken, MVC und Schichten seien dasselbe („Model = Datenbank, Controller = Backend“); richtig ist: MVC liegt meist innerhalb der Präsentationsschicht, Geschäftslogik und Datenzugriff liegen darunter.
- Viele denken, das Programm prüfe in einer Schleife ständig, ob geklickt wurde, oder der Listener frage selbst nach; richtig ist: Der eigene Code fragt nicht nach. Die GUI-Bibliothek wartet auf Ereignisse und ruft den angemeldeten Behandler erst auf, wenn das Ereignis eintritt.

**Fachwörter:**
- Architekturmuster: Grundaufbau der ganzen Anwendung
- Entwurfsmuster: bewährte Lösung für ein Teilproblem einzelner Klassen
- Algorithmus: eindeutige Vorschrift Schritt für Schritt
- festgelegte Schnittstelle: einziger, vereinbarter Zugang zur Schicht darunter
- Präsentationsschicht: oberste Schicht, die Oberfläche
- ereignisgesteuert: Code läuft erst bei einer Benutzeraktion
- Ereignisbehandler: angemeldeter Code, der aufs Ereignis reagiert
- Callback: übergebene Funktion, die später aufgerufen wird

**So fragt die IHK:**
- Es gibt keine echte Aufgabe; der Stichpunkt stammt aus dem Lehrbuch und ergänzt die geprüften Aufgaben zu Entwurfsmustern und zur 3-Schichten-Architektur.
- Zu erwarten sind im Stil dieses Prüfungsbereichs drei Formen:
  - Architektur- und Entwurfsmuster an je einem Beispiel unterscheiden (2–4 Punkte)
  - zwei Vorteile und einen Nachteil einer Schichtenarchitektur oder von MVC erläutern (4–6 Punkte, etwa 2 je begründetem Aspekt)
  - erläutern, wie die Anwendung auf einen Klick reagiert, und das Entwurfsmuster nennen (3–4 Punkte)
- Zählen würden Begründungen mit Bezug zur Situation.

**Fallen:**
- MVC als Entwurfsmuster einordnen.
- Den Observer oder eine Berechnung zur „ganzen Anwendung“ zählen oder alles pauschal „Muster“ nennen.
- Eine Zuordnung ohne das Merkmal begründen (ganze Anwendung, Teilproblem einzelner Klassen, eindeutige Vorschrift).
- Bei den Schichten einen Vorteil nennen, ohne den Grund dazuzusagen: Die Schichten kennen sich nur über die festgelegte Schnittstelle.
- Als Nachteil der Schichten nur „mehr Programmierarbeit“ schreiben und den Geschwindigkeitsverlust vergessen.
- Bei MVC den Nachteil Komplexität oder die Einordnung in die Präsentationsschicht weglassen.
- Vor- und Nachteile nur allgemein aufzählen, ohne Bezug zur Lage.
- Auf die Frage nach dem Muster hinter der Ereignisbehandlung MVC nennen; gefragt ist der Observer.
- Den Observer nennen, aber die Rollen nicht zuordnen (Bedienelement, Listener).
- Offen lassen, wie zwei Reaktionen auf dasselbe Ereignis angebunden werden; dafür werden mehrere Behandler am selben Element angemeldet.
