Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Entwicklungsumgebung und Werkzeuge › Bibliotheken, Automatisierung und cyber-physische Systeme › Cyber-physische Systeme: Sensoren, Aktoren, Abfragerhythmus

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

## Stoff: Cyber-physische Systeme: Sensoren, Aktoren, Abfragerhythmus

Ziel: Cyber-physische Systeme beschreiben und um Sensoren, Aktoren und Regeln erweitern und einen Abfragerhythmus planen. Funknetze für Sensoren stehen in PB1-11, Verschlüsselung für Sensoren in PB1-10.

Das muss ich können:

### K1 – Cyber-physisches System: Begriff (Stufe 2 Verstehen)
Du kannst beschreiben, was ein cyber-physisches System ist: Software, die über Sensoren Messwerte aus der physischen Welt erfasst, verarbeitet und über Aktoren auf sie einwirkt, meist vernetzt.

Erklärung:
**Cyber-physisches System** = Software + physische Welt:
- **Sensoren** erfassen Messwerte (Temperatur, Feuchte, Bewegung)
- **Software** verarbeitet und entscheidet
- **Aktoren** wirken zurück (Ventil, Motor, Lampe)
- meist **vernetzt** (Internet der Dinge)

### K2 – Cyber-physisches System um Sensoren und Aktoren erweitern (Stufe 3 Anwenden)
Du kannst ein cyber-physisches System um geeignete Sensoren, Aktoren und eine Regel erweitern, zum Beispiel Bodenfeuchtesensor und Ventil für eine Bewässerung, das bei Unterschreiten eines Schwellwerts öffnet und wieder schließt, sobald der Boden feucht genug ist; der Zugriff erfolgt über die Schnittstelle bzw. Bibliothek des Herstellers, die Messwerte liest und Stellbefehle sendet.

Erklärung:
Erweitern nach dem Muster **Sensor – Regel – Aktor**:
- Bodenfeuchtesensor misst
- Regel: **wenn** Feuchte < Schwellwert, **dann** Ventil öffnen, **sonst** Ventil schließen (in der Praxis oft mit zwei Schwellwerten, damit das Ventil nicht ständig auf- und zuschaltet)
- Ventil (Aktor) bewässert
Sensor auswählen nach: Messgröße und Messbereich, Genauigkeit, Energiebedarf, Umgebungsbedingungen (K7), Anschluss und verfügbarer Bibliothek des Herstellers.
Physisch hängen Sensor und Aktor an einer Hardwareschnittstelle des Mikrocontrollers (kleiner Rechner auf einem einzigen Chip mit Prozessor und Speicher), z. B. digitalen Ein-/Ausgängen (GPIO) oder seriellen Bussen wie I2C oder SPI.
Angesprochen werden Sensor und Aktor über die **Schnittstelle/Bibliothek des Herstellers** (Wert lesen, Stellbefehl senden), z. B. mit `leseTemperatur()`.

### K3 – Abfragerhythmus für Sensoren planen (Stufe 3 Anwenden)
Du kannst einen Abfragerhythmus planen: so oft, wie sich der Messwert bedeutsam ändert, abgewogen gegen Energiebedarf, Datenmenge und Übertragungskosten, zum Beispiel Bodenfeuchte alle 15 Minuten statt jede Sekunde.

Erklärung:
Abfragerhythmus abwägen:
- so oft, wie sich der Wert **bedeutsam ändert**
- gegen **Energiebedarf** (Batterie), **Datenmenge** und **Übertragungskosten**
Beispiel: Bodenfeuchte ändert sich langsam → alle 15 Minuten genügt; ein Rauchmelder muss dagegen sofort melden.

### K4 – Merkmale eines cyber-physischen Systems (Stufe 2 Verstehen)
Du kannst über Sensor, Verarbeitung und Aktor hinaus die Merkmale eines cyber-physischen Systems beschreiben: Es ist im Netz eindeutig identifizierbar, entscheidet selbst vor Ort über Steuern oder Regeln, ist mit anderen Maschinen, IT-Systemen, Geschäftspartnern und Menschen vernetzt und passt sein Verhalten an, etwa das Messintervall oder aus Daten gelernte Fehlermuster.

Erklärung:
Ein Sensor mit Anzeige ist noch kein CPS. Ein CPS zeichnet sich zusätzlich aus durch:
- **Identifikation:** Jedes Gerät ist im Netz eindeutig ansprechbar, etwa über Adresse oder Gerätekennung.
- **Dezentrale Entscheidung:** Es wertet Messwerte selbst aus und steuert oder regelt vor Ort, ohne auf einen zentralen Rechner zu warten.
- **Vernetzung:** mit anderen Maschinen, mit IT-Systemen im Betrieb, mit Lieferanten und Kunden und mit Menschen (z. B. Nachricht aufs Tablet).
- **Adaption:** Es passt sich an, etwa durch ein kürzeres Messintervall bei auffälligen Werten oder durch aus Messreihen gelernte Fehlerbilder.
Beispiel: Ein Kühlcontainer regelt seine Temperatur selbst, meldet Abweichungen an die Spedition, ist über seine Kennung jederzeit auffindbar und misst häufiger, sobald die Temperatur steigt.

### K5 – Steuern gegen Regeln (Stufe 2 Verstehen)
Du kannst Steuern und Regeln unterscheiden: Eine Steuerung wirkt nach festen Vorgaben auf den Prozess, ohne das Ergebnis zurückzumelden (Bewässerung jeden Morgen zehn Minuten), eine Regelung misst den Istwert laufend, vergleicht ihn mit dem Sollwert und greift über ein Stellglied ein, bis die Abweichung verschwindet (Ventil öffnet, bis die Bodenfeuchte den Sollwert erreicht).

Erklärung:
Der Unterschied liegt in der **Rückmeldung**.
- **Steuerung (offene Wirkungskette):** Vorgabe → Steuerung → Stellglied → Prozess. Ob das Ziel erreicht wird, prüft niemand. Einfach und günstig, aber Störungen wie Regen oder Hitze bleiben unbemerkt.
- **Regelung (geschlossener Regelkreis):** Sollwert vorgeben → Sensor misst den Istwert → Vergleich bildet die Abweichung → Regler (im CPS das Programm) stellt über das Stellglied (der Aktor: Heizung, Ventil, Lüfter) nach → der neue Istwert fließt zurück (Rückkopplung).
Eine Regelung reagiert also auf Störungen, braucht dafür aber einen Sensor für genau die Größe, die eingehalten werden soll.
Beispiel Serverraum: Eine Steuerung schaltet die Klimaanlage nach Zeitplan ein; eine Regelung hält die Temperatur auf 22 °C, egal wie viel Abwärme die Server gerade erzeugen.

### K6 – Sensor passend zur Messaufgabe (Stufe 3 Anwenden)
Du kannst für eine Messaufgabe einen geeigneten Sensor festlegen, zum Beispiel Ultraschall für Füllstand oder Abstand (misst die Laufzeit des Echos, weitgehend unabhängig von Farbe und Material), Infrarot-Bewegungsmelder für Anwesenheit, CO2-Sensor für die Luftqualität, Vibrationssensor für die Laufruhe einer Maschine.

Erklärung:
Zuerst klärst du, **welche physikalische Größe** sich ändert, wenn das gesuchte Ereignis eintritt; dann wählst du den Sensor, der genau diese Größe zuverlässig erfasst.
- **Ultraschall:** sendet einen Schallimpuls und misst die Zeit bis zum Echo → Abstand, Füllstand; Farbe, Transparenz und Material spielen kaum eine Rolle; nur schallschluckende Oberflächen wie Schaumstoff oder Watte schwächen das Echo.
- **Infrarot-Bewegungsmelder:** reagiert auf Änderungen der Wärmestrahlung, also auf Menschen, die sich bewegen → Anwesenheit, Licht- und Heizungssteuerung; für still sitzende Personen braucht man einen empfindlicheren Präsenzmelder.
- **Licht-, Temperatur-, Feuchtesensor:** Raumautomation, Schimmelvorbeugung.
- **CO2-Sensor:** Luftqualität, Lüften in Besprechungsräumen.
- **Druck-, Kraft-, Vibrationssensor:** Prozessüberwachung, Belastung von Bauteilen, Laufruhe von Maschinen.
Beispiel: Der Füllstand eines Behälters mit dunklem Granulat soll gemessen werden – ein optischer Sensor wird von der Farbe gestört, Ultraschall nicht.

### K7 – Bauform nach Einsatzbedingungen (Stufe 3 Anwenden)
Du kannst Sensoren und Bauform eines cyber-physischen Systems passend zu den Einsatzbedingungen festlegen: robust gegen Hitze, Kälte, Schmutz, Öl, Vibration oder Feuchte in der Industrie, unauffällig gestaltet im Wohn- und Bürobereich, mit Funk und Batterie dort, wo es weder Netz- noch Stromanschluss gibt.

Erklärung:
Ein Sensor, der im Labor tadellos misst, kann an der Maschine nach einer Woche ausfallen. Darum gehören die **Einsatzbedingungen** in die Anforderungen.
- **Industrie:** Hitze, Kälte, Staub, ölhaltige Luft, Erschütterung, Spritzwasser → geschlossenes, robustes Gehäuse und Sensoren für den passenden Temperaturbereich.
- **Wohn- und Bürobereich:** klein, leise, unauffällig; das Aussehen entscheidet mit über die Akzeptanz.
- **Fernüberwachung:** kein Kabel möglich → Funk (Netzwerke für Sensoren: PB1-11) und Batterie; dann zählt der Energiebedarf, also auch der Abfragerhythmus (K3).
Beispiel: Ein Füllstandssensor in einem abgelegenen Silo ist Staub und Frost ausgesetzt und hat keinen Anschluss – also robustes Gehäuse, Batterie und Funk mit großer Reichweite.

### K8 – Datenweg vom Sensor zum Dashboard (Stufe 2 Verstehen)
Du kannst den Datenweg eines einfachen vernetzten cyber-physischen Systems beschreiben: Sensoren am Mikrocontroller liefern Messwerte, dessen eingebautes Funkmodul schickt sie per WLAN über TCP/IP (bei Bluetooth über ein Gateway wie Smartphone oder Hub) an einen zentralen Server, der sie speichert, aufbereitet und als Dashboard etwa auf Smartphones anzeigt.

Erklärung:
Fast jedes vernetzte CPS folgt demselben Muster aus vier Stationen:
- **Erfassen:** Sensoren hängen an einem Mikrocontroller und werden im Messtakt ausgelesen.
- **Senden:** Der Mikrocontroller schickt die Werte über sein Funkmodul per WLAN ins Netz (TCP/IP), etwa per HTTP oder MQTT (schlankes Nachrichtenprotokoll für viele kleine Messwerte); per Bluetooth erreichen sie das Netz nur über ein Gateway wie Smartphone oder Hub.
- **Sammeln und aufbereiten:** Ein zentraler Server im Haus oder in der Cloud speichert die Werte, bildet Mittelwerte und prüft Grenzwerte.
- **Anzeigen:** Ein Dashboard im Browser oder in einer App zeigt aktuelle Werte und Verläufe, auch unterwegs.
Beispiel: Raumluftsensoren in Klassenräumen melden CO2 und Temperatur an einen Schulserver; die Hausmeisterin sieht auf dem Tablet, wo gelüftet werden muss.

### K9 – Aufbau eines Mikrocontroller-Programms (Stufe 2 Verstehen)
Du kannst den Aufbau eines Steuerprogramms für einen Mikrocontroller beschreiben: ein globaler Teil mit eingebundenen Bibliotheken, Konstanten, Variablen und Sensorobjekten, ein Einrichtungsteil, der einmal beim Start läuft und die Anschlüsse als Ein- oder Ausgang festlegt, und eine Endlosschleife lesen – prüfen – ausgeben – warten, deren Wartezeit den Abfragerhythmus bestimmt.

Erklärung:
Ein Mikrocontroller hat kein Betriebssystem, das Programme startet und beendet – sein eines Programm läuft, solange Strom anliegt.
- **Globaler Teil:** Bibliotheken für die Sensoren einbinden, Konstanten (Grenzwerte, Anschlussnummern) und Variablen anlegen, Sensorobjekte erzeugen.
- **Einrichten (einmal):** Anschlüsse als Eingang oder Ausgang festlegen, Ausgabe und Funkverbindung starten.
- **Endlosschleife:** Messwert lesen → prüfen bzw. auswerten → Aktor schalten oder Wert senden → warten.
- Die **Wartezeit** in der Schleife ist der Messtakt – hier setzt du den geplanten Abfragerhythmus (K3) um.
Pseudocode:
`SOLANGE wahr`
`  wert ← sensor.lesen()`
`  WENN wert > grenze DANN`
`    luefter.ein()`
`  SONST`
`    luefter.aus()`
`  ENDE WENN`
`  warte(60 s)`
`ENDE SOLANGE`

### K10 – Ungültige Messwerte abfangen (Stufe 3 Anwenden)
Du kannst ein CPS-Programm um die Prüfung ungültiger Messwerte erweitern: Liefert der Sensor keinen Zahlenwert (NaN), etwa weil er nicht richtig angeschlossen ist, oder einen physikalisch unmöglichen Wert, meldet das Programm einen Fehler und verwendet den Wert weder zum Schalten noch zum Speichern.

Erklärung:
Sensoren liefern nicht immer gültige Werte: Kabel locker, Sensor defekt, Störung bei der Übertragung.
- **NaN** (Not a Number) ist ein besonderer Gleitkommawert für „kein gültiges Ergebnis“; viele Sensorbibliotheken liefern ihn, wenn das Lesen scheitert.
- Auch eine Zahl kann unsinnig sein, etwa 150 % Luftfeuchte oder –80 °C im Büro → Plausibilitätsprüfung mit Grenzen.
- Ungültige Werte dürfen weder einen Aktor schalten noch Mittelwerte verfälschen.
- Stattdessen: Fehler melden (Anzeige, Protokoll, Nachricht), Wert verwerfen, im nächsten Durchlauf neu messen; bei Dauerfehlern einen sicheren Zustand einnehmen.
Pseudocode: `wert ← sensor.lesen(); WENN istNaN(wert) ODER wert < -40 ODER wert > 85 DANN meldeFehler("Sensor prüfen") SONST verarbeite(wert)`
Die Grenzen –40 und 85 °C stehen hier beispielhaft für den Messbereich des Sensors laut Datenblatt.

## Lehrnotiz: Cyber-physische Systeme: Sensoren, Aktoren, Abfragerhythmus

**Aufteilung:**
- Teil A – Das System verstehen und planen
  - Begriff und Merkmale: K1, K4
  - Steuern gegen Regeln: K5
  - Sensor und Bauform festlegen: K6, K7
  - Ein System erweitern nach dem Muster Sensor – Regel – Aktor: K2
  - Datenweg: K8
- Pause möglich nach Teil A.
- Teil B – Das Programm auf dem Mikrocontroller
  - Abfragerhythmus planen und im Programm umsetzen: K3, K9
  - Ungültige Messwerte abfangen: K10

**Schon geprüft:** Noch nicht geprüft: K1–K10

**Kerngedanken:**
- Die Begriffe des Regelkreises lassen sich auf das cyber-physische System übertragen: Der Regler ist das Programm, das Stellglied ist der Aktor. Eine Schwellwert-Regel mit Sensor ist schon eine einfache Regelung, weil der neue Messwert in den nächsten Vergleich zurückfließt.
- Die Bibliothek des Herstellers verbirgt Hardware und Übertragungsprotokoll hinter fertigen, getesteten Funktionen. Das Programm ruft nur „Wert lesen“ und „Aktor schalten“ auf; das spart Zeit und vermeidet Fehler.
- Messen und vor allem Senden kosten Energie; zwischen den Messungen kann ein Gerät in den Stromsparmodus gehen. Häufig messen heißt nicht häufig senden: Bei schnellen Vorgängen wird oft gemessen, aber nur bei einem Ereignis gesendet.
- Vergleiche wie <, > oder = mit NaN sind immer falsch (nur ≠ ist wahr). Ohne Prüfung landet das Programm deshalb im SONST-Zweig und schaltet zum Beispiel den Lüfter aus, obwohl es heiß sein kann. Die Grenzen der Plausibilitätsprüfung ergeben sich aus dem Messbereich des Sensors oder aus dem, was physikalisch möglich ist.

**Typische Missverständnisse:**
- Viele denken, eine Regelung laufe automatisch und eine Steuerung von Hand; richtig ist: Beide laufen automatisch, der Unterschied ist allein die Rückkopplung. Eine Zeitschaltuhr ist eine Steuerung.
- Viele denken, so oft wie möglich zu messen sei immer besser; richtig ist: Das kostet Batterie, Datenmenge und Übertragung ohne Nutzen. Umgekehrt ist ein langer Takt bei schnellen Vorgängen gefährlich.
- Viele denken, „vernetzt“ und „entscheidet vor Ort“ seien dasselbe; richtig ist: Vernetzung ist der Datenaustausch mit anderen, dezentrale Entscheidung heißt handeln, ohne einen zentralen Rechner zu fragen.

**Fachwörter:**
- Aktor: setzt ein Steuersignal in eine Wirkung um
- Stellglied: Bauteil, über das der Regler eingreift
- Rückkopplung: neuer Istwert fließt in den Vergleich zurück
- Schwellwert: Grenze, ab der geschaltet wird
- Adaption: System passt sein Verhalten an
- Gateway: Vermittler zwischen zwei Netzen mit verschiedenen Protokollen, z. B. Bluetooth-Sensor → WLAN/Internet
- Abfragerhythmus: wie oft ein Sensor ausgelesen wird
- NaN: besonderer Wert für „kein gültiges Ergebnis“

**So fragt die IHK:**
- Zu diesem Thema gibt es noch keine echte Aufgabe. Der Prüfungskatalog nennt cyber-physische Systeme mit Sensoren und Aktoren, ihre Erweiterung um Sensoren und Regeln und den Abfragerhythmus.
- Zu erwarten ist die Form anderer Planungsaufgaben: ein bestehendes System (Gebäude, Halle, Gerät) und dazu offene Teilaufgaben mit 2 bis 4 Punkten. Mögliche Operatoren: „beschreiben“, „unterscheiden“, „erweitern“, „begründen“, Pseudocode „ergänzen“.
- Gewertet würden ganze Sätze mit Bezug auf die Situation. Beim Pseudocode zählt die Logik (Prüfung vor dem Schalten, beide Zweige), nicht die Schreibweise.

**Fallen:**
- Teil A: Sensor und Aktor verwechseln. Relais, Lautsprecher und Stellmotor bewirken etwas; Bewegungsmelder und Feuchtefühler messen.
- Teil A: Die Merkmale eines cyber-physischen Systems nur aufzählen, ohne sie am konkreten System zu zeigen. „Hat einen Sensor“ ist kein zusätzliches Merkmal.
- Teil A: Steuerung und Regelung richtig zuordnen, aber nicht mit fehlender oder vorhandener Rückmeldung begründen.
- Teil A: Elemente des Regelkreises auslassen oder vertauschen (Sollwert, Sensor, Regler, Stellglied, Rückkopplung).
- Teil A: Den Sensor nach dem Ziel benennen („ein Füllstandssensor“) statt über die Messgröße und das Messverfahren zu begründen.
- Teil A: Bei einem Messpunkt ohne Strom- und Netzanschluss nur Funk und Batterie nennen und den sparsamen Betrieb vergessen.
- Teil A: Beim Erweitern nur Sensor und Aktor nennen, aber keine Regel; oder eine Regel, die nur in eine Richtung schaltet und nie zurück.
- Teil A: Beim Erweitern nicht beschreiben, wie die Software auf Sensor und Aktor zugreift.
- Teil A: Eine Regel mit nur einer Grenze als falsch werten. Zwei Schwellwerte sind nicht Pflicht; eine Grenze mit Zurückschalten ist ebenfalls richtig.
- Teil A: Beim Datenweg den Server weglassen („der Sensor schickt aufs Handy“) oder bei Bluetooth das Gateway vergessen.
- Teil B: Einen Abfragerhythmus als bloße Zahl ohne Begründung angeben. Es zählt die vernünftige Größenordnung, begründet mit der Änderungsgeschwindigkeit und mindestens einem Gegengewicht (Energie, Datenmenge, Übertragungskosten).
- Teil B: Langsame und schnelle Messgrößen gleich behandeln.
- Teil B: Im Programm die Anschlüsse in der Schleife festlegen statt einmal im Einrichtungsteil.
- Teil B: Die Wartezeit vergessen oder nicht als die Stelle nennen, an der der Abfragerhythmus festgelegt wird.
- Teil B: Die Prüfung auf ungültige Werte erst nach dem Schalten oder Senden einbauen.
- Teil B: Nur NaN oder nur die Grenzen prüfen; verlangt sind beide.
- Teil B: Im Fehlerfall keine Meldung ausgeben.
- Teil B: Das Warten in einen Zweig verschieben, sodass es im Fehlerfall oder im Normalfall nicht mehr erreicht wird.
