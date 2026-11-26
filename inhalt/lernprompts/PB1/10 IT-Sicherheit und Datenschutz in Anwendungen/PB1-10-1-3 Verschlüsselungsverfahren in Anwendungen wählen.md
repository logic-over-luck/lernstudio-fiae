Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Bedrohungen, Anforderungen und Kryptografie › Verschlüsselungsverfahren in Anwendungen wählen

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

## Stoff: Verschlüsselungsverfahren in Anwendungen wählen

Ziel: Für eine Anwendung ein Verschlüsselungsverfahren vorschlagen und begründen, die hybride Transportverschlüsselung erläutern und Transport- von Ende-zu-Ende-Verschlüsselung unterscheiden.

Das muss ich können:

### K1 – Passendes Verschlüsselungsverfahren für eine Anwendung (Stufe 4 Beurteilen)
Du kannst ein Verschlüsselungsverfahren für eine Anwendung vorschlagen und begründen, zum Beispiel symmetrisch mit vorab verteiltem Schlüssel für batteriebetriebene Sensoren mit wenig Rechenleistung, deren Teilnehmer alle bekannt sind.

Erklärung:
Verfahren begründet wählen:
- **symmetrisch:** schnell, wenig Rechenleistung, aber Schlüssel muss vorab sicher verteilt sein (**Pre-Shared-Key**) → passt zu **Sensoren mit Batterie**, deren Teilnehmer bekannt sind
- **asymmetrisch:** kein gemeinsamer Geheimschlüssel nötig, aber rechenaufwendig
- **hybrid:** asymmetrisch Schlüssel aushandeln, dann symmetrisch verschlüsseln → Standard im Internet
Die Verfahren selbst kennst du aus AP1-7-3-1.
Achtung: Gefragt ist die Art des Verfahrens (symmetrisch). Wer nur einen Algorithmus wie AES nennt, verliert Punkte; schreib deshalb „symmetrisch, z. B. AES“.

### K2 – Hybride Transportverschlüsselung bei TLS und E-Mail (Stufe 2 Verstehen)
Du kannst die Art der Transportverschlüsselung bei TLS und bei der E-Mail-Übertragung nennen und erläutern: hybrid, also Sitzungsschlüssel asymmetrisch ausgehandelt (bei heute üblichem TLS per Diffie-Hellman), Server per Zertifikat geprüft, Daten symmetrisch mit dem Sitzungsschlüssel verschlüsselt.

Erklärung:
TLS und E-Mail-Transport sind **hybrid**:
- Sitzungsschlüssel wird **asymmetrisch ausgehandelt** (heute übliches TLS: Diffie-Hellman)
- der **Server** wird per **Zertifikat** geprüft
- die Daten werden **symmetrisch** mit dem Sitzungsschlüssel verschlüsselt
**Warum hybrid?** Asymmetrische Verfahren sind sehr rechenaufwendig, symmetrische schnell; hybrid vereint die Vorteile beider.
**Vorteil gegenüber rein symmetrisch:** Die Partner brauchen kein vorher vereinbartes gemeinsames Geheimnis (Pre-Shared-Secret); der Sitzungsschlüssel entsteht je Verbindung neu.
Achtung: Gefragt ist die **Art** des Verfahrens, richtig ist nur „hybrid“. Die Antwort „asymmetrisch“ oder der Protokollname „TLS“ gibt in der Prüfung 0 Punkte.

### K3 – Transport- gegen Ende-zu-Ende-Verschlüsselung (Stufe 3 Anwenden)
Du kannst Transportverschlüsselung (nur der Übertragungsweg ist geschützt) und Ende-zu-Ende-Verschlüsselung (nur Absender und Empfänger können lesen) unterscheiden und für eine Anwendung festlegen, welche nötig ist.

Erklärung:
- **Transportverschlüsselung:** nur der **Weg** ist geschützt; auf dem Server liegen die Daten lesbar (z. B. E-Mail per TLS)
- **Ende-zu-Ende:** nur **Absender und Empfänger** können lesen, auch der Anbieter nicht (z. B. Messenger)
Festlegen: Dürfen Betreiber oder Zwischenstationen die Daten sehen? Wenn nein → Ende-zu-Ende.

### K4 – Schlüsseltausch nach Diffie-Hellman (Stufe 2 Verstehen)
Du kannst das Prinzip des Diffie-Hellman-Schlüsselaustauschs erklären: Beide Seiten tauschen nur öffentliche Werte aus und berechnen daraus zusammen mit ihrem jeweils geheimen Wert denselben Sitzungsschlüssel, der selbst nie übertragen wird, sodass ein Mithörer ihn nicht kennt.

Erklärung:
Das Grundproblem symmetrischer Verfahren ist der **Schlüsseltausch**: Wie einigen sich zwei Seiten über eine abhörbare Leitung auf einen gemeinsamen Schlüssel?
**Diffie-Hellman** löst das, ohne den Schlüssel zu senden:
- Jede Seite wählt einen geheimen Wert und schickt nur einen daraus berechneten öffentlichen Wert.
- Jede Seite verrechnet den fremden öffentlichen Wert mit dem eigenen Geheimnis – beide erhalten dasselbe Ergebnis.
- Ein Mithörer sieht nur die öffentlichen Werte; daraus den Schlüssel zu berechnen ist praktisch unmöglich.
Bildlich: Beide mischen eine gemeinsame Grundfarbe mit ihrer Geheimfarbe, tauschen die Mischungen und geben ihre Geheimfarbe noch einmal dazu – am Ende haben beide dieselbe Farbe.
Wichtig: Diffie-Hellman prüft nicht, **wer** am anderen Ende ist; deshalb prüft TLS den Server zusätzlich per Zertifikat (PB1-10-1-3-K2).

### K5 – Nur anerkannte Kryptoverfahren und Bibliotheken (Stufe 4 Beurteilen)
Du kannst begründen, warum eine Anwendung nur anerkannte, aktuell empfohlene Kryptoverfahren aus gepflegten Bibliotheken einsetzt (Orientierung gibt eine Technische Richtlinie des BSI) und keine selbst erfundenen, selbst programmierten oder veralteten: Eigenentwicklungen enthalten fast immer Schwachstellen, und auch in bewährten Verfahren und ihren Umsetzungen werden Lücken gefunden, die eine gepflegte Bibliothek per Update schließt.

Erklärung:
Ob ein Verfahren sicher ist, zeigt sich erst, wenn viele Fachleute jahrelang vergeblich versucht haben, es zu brechen. Ein selbst erdachtes Verfahren hat diese Prüfung nie bestanden.
- **Nicht selbst erfinden:** Eigene „geheime“ Algorithmen sind meist schnell geknackt; Sicherheit darf nur vom Schlüssel abhängen, nicht von der Geheimhaltung des Verfahrens.
- **Nicht selbst programmieren:** Auch ein bewährtes Verfahren wie AES lässt sich falsch umsetzen, etwa mit schwachem Zufall oder wiederverwendeten Startwerten.
- **Gepflegte Bibliothek:** Lücken werden dort gefunden und per Update geschlossen.
- **Aktuelle Empfehlungen:** Das BSI nennt in der TR-02102 geeignete Verfahren und Schlüssellängen; veraltete wie DES oder MD5 fallen heraus.
Beispiel: Statt Kundendaten mit einer selbst geschriebenen XOR-Routine zu „verschlüsseln“, nutzt du AES aus der Kryptobibliothek der Plattform.

### K6 – OpenPGP und S/MIME im Vergleich (Stufe 2 Verstehen)
Du kannst OpenPGP und S/MIME als Verfahren der Ende-zu-Ende-Verschlüsselung von E-Mails vergleichen: Beide arbeiten mit Schlüsselpaaren und sind untereinander nicht kompatibel; bei OpenPGP bestätigen sich die Nutzer gegenseitig die Echtheit der Schlüssel (Web of Trust), bei S/MIME beglaubigt eine Zertifizierungsstelle das Zertifikat – das kostet meist etwas, wird aber von den meisten Mailprogrammen ohne Zusatzsoftware unterstützt.

Erklärung:
Bei der Ende-zu-Ende-Verschlüsselung (PB1-10-1-3-K3) verschlüsselt der Absender mit dem öffentlichen Schlüssel des Empfängers, intern hybrid. Die Kernfrage ist: **Woher weiß ich, dass dieser Schlüssel wirklich dem Empfänger gehört?**
- **OpenPGP:** Nutzer erzeugen ihre Schlüssel selbst und bestätigen sich gegenseitig (**Web of Trust**). Kostenlos, aber das Vertrauen muss man selbst aufbauen; oft ist Zusatzsoftware nötig.
- **S/MIME:** Eine **Zertifizierungsstelle** stellt ein Zertifikat aus, wie bei TLS. Meist kostenpflichtig, dafür in gängigen Mailprogrammen eingebaut und in Firmen zentral verwaltbar.
- Beide können auch signieren. Sie sind nicht kompatibel: Absender und Empfänger brauchen dasselbe Verfahren.
Beispiel: Ein Unternehmen mit eigener Zertifikatsverwaltung wählt S/MIME; ein Open-Source-Projekt mit verstreuten Freiwilligen eher OpenPGP.

## Lehrnotiz: Verschlüsselungsverfahren in Anwendungen wählen

**Hinweis aus dem Lernplan:** Symmetrische Verschlüsselung beschreiben (2021W-PB1-A4-aa), ein alternatives Verfahren mit Vor- und Nachteil (2021W-PB1-A4-ab) und den Vorteil asymmetrischer Verfahren (2025W-PB1-A3-ab) erklärt AP1-7-3-1. Bei TLS und E-Mail gibt die Antwort „asymmetrisch“ laut Lösung 2025W-PB1-A3-aa keine Punkte; erwartet ist „hybrid“. Das Lehrbuch beschreibt als Diffie-Hellman das Verschlüsseln mit dem öffentlichen Schlüssel des Partners; das ist asymmetrische Verschlüsselung. Richtig ist: Beim Diffie-Hellman-Verfahren berechnen beide Seiten aus ausgetauschten öffentlichen Werten denselben Schlüssel, ohne ihn zu übertragen.

**Aufteilung:**
- Verfahren für eine Anwendung begründet wählen: K1
- Warum TLS und E-Mail-Transport hybrid arbeiten: K2
- Schlüssel vereinbaren, ohne ihn zu senden: K4
- Transport- oder Ende-zu-Ende-Verschlüsselung festlegen: K3
- Ende-zu-Ende bei E-Mail, zwei Verfahren im Vergleich: K6
- Nur anerkannte Verfahren aus gepflegten Bibliotheken: K5

**Schon geprüft:** In Prüfungen: K1 (2021W, 2023S), K2 (2022W, 2025W) · Noch nicht geprüft: K3–K6

**Kerngedanken:**
- Gewählt wird nach Gerät und Teilnehmern. Begründen heißt, eine Eigenschaft des Verfahrens mit einer Eigenschaft des Falls zu verbinden: Wenig Rechenleistung spricht für symmetrisch. Sind alle Teilnehmer bekannt, ist das Verteilen des Schlüssels zumutbar. Unbekannte oder wechselnde Teilnehmer verlangen hybrid.
- Beim Vorschlagen eines Verfahrens und bei der Frage nach der Art der Verschlüsselung (TLS, E-Mail-Transport) ist die Art gefragt (symmetrisch, asymmetrisch, hybrid), nicht ein Protokoll oder ein Algorithmus.
- Diffie-Hellman schützt nur gegen Mithörer. Ohne Zertifikat könnte ein Angreifer in der Mitte mit beiden Seiten je einen eigenen Schlüssel aushandeln.

**Typische Missverständnisse:**
- Viele denken, bei Diffie-Hellman werde der Schlüssel mit dem öffentlichen Schlüssel des Partners verschlüsselt verschickt; richtig ist: Es wird nichts verschlüsselt übertragen, beide berechnen den Schlüssel selbst.
- Viele denken, Ende-zu-Ende sei immer die bessere Wahl; richtig ist: Ist der Server selbst der Empfänger und muss die Daten verarbeiten, genügt Transportverschlüsselung.

**Fachwörter:**
- hybrid: Schlüssel asymmetrisch aushandeln, Daten symmetrisch verschlüsseln
- Sitzungsschlüssel: symmetrischer Schlüssel für eine Verbindung
- Pre-Shared-Secret: vorab vereinbartes gemeinsames Geheimnis
- Transportverschlüsselung: nur der Übertragungsweg ist geschützt
- Ende-zu-Ende: nur Absender und Empfänger lesen
- Diffie-Hellman: Schlüssel berechnen, ohne ihn zu senden
- Web of Trust: Nutzer bestätigen sich gegenseitig Schlüssel
- Zertifizierungsstelle: beglaubigt Zertifikate

**So fragt die IHK:**
- Sechs Teilaufgaben in vier Prüfungen. Am häufigsten: die Art des Verfahrens bei TLS oder beim E-Mail-Transport nennen (1 Punkt, erwartet „hybrid“) und erläutern.
- Erläutert wurde einmal der Vorteil (3 Punkte: kein vorab vereinbartes gemeinsames Geheimnis) und einmal der Ablauf (4 Punkte: im Handshake asymmetrisch, nach Einigung auf den Schlüssel symmetrisch, weil asymmetrisch sehr rechenaufwendig ist).
- Einmal war für batteriebetriebene Geräte mit wenig Rechenleistung ein Verfahren vorzuschlagen und zu begründen (4 Punkte). Erwartet war symmetrisch, weil wenig Rechenleistung da ist und alle Teilnehmer bekannt sind.
- Einmal war ein symmetrisches Verfahren zu beschreiben (2 Punkte) und eine Alternative mit Vor- und Nachteil anzugeben (6 Punkte).
- Transport gegen Ende-zu-Ende, Diffie-Hellman, OpenPGP und S/MIME sowie die BSI-Empfehlung kamen noch nicht eigens vor. Zu erwarten sind „Erläutern Sie …“ oder „Nehmen Sie Stellung …“ mit 2–4 Punkten.

**Fallen:**
- Wahl: Einen Algorithmus wie AES statt der Art des Verfahrens nennen; das kostet Punkte.
- Wahl: „Symmetrisch, weil schneller“ schreiben, ohne zu sagen, warum die Schlüsselverteilung hier zumutbar ist.
- Wahl: Bei vorher unbekannten Teilnehmern symmetrisch vorschlagen (Verteilung ungelöst) oder asymmetrisch, ohne den Rechenaufwand zu bedenken.
- Wahl: „Hybrid“ nur halb begründen. Es gehören beide Gründe dazu: kein vorab verteilbarer Schlüssel und asymmetrisch allein zu aufwendig.
- TLS: Den Protokollnamen als Art des Verfahrens nennen; das gibt 0 Punkte.
- TLS: Als Vorteil gegenüber rein symmetrisch nur „schneller“ nennen oder beim Erläutern nicht beide Teile mit ihrer Rolle und dem Grund angeben.
- Schlüsseltausch: Die Rolle des Zertifikats weglassen.
- Transport oder Ende-zu-Ende: Nur „ist sicherer“ schreiben, statt zu sagen, wer Empfänger ist und wer nur auf dem Weg liegt.
- E-Mail: Web of Trust und Zertifizierungsstelle vertauschen oder „S/MIME ist sicherer“ als Begründung geben. Die Unterschiede sind Bestätigung der Schlüssel, Kosten und Software.
- E-Mail: Nicht vorab klären, welches Verfahren die Gegenseite nutzt.
- Bibliotheken: „Wir nehmen eine Bibliothek“ für ausreichend halten, obwohl sie veraltet ist.
- Bibliotheken: In einer Lage mit zwei Problemen (eigene Umsetzung und veraltetes Verfahren) nur eines ansprechen oder die Orientierung am BSI weglassen.
