# Stoff-Meldungen der Drehbuch-Agenten (Paket 6, 10.11.2026)

Was den Agenten beim Schreiben der Lernprompts am Stoff aufgefallen ist. **39 Klarstellungen in Erklärungen sind eingetragen**
(Liste: archiv/2026-11-09_nachzug-arbeitsmappe/p6/_meldungen_eingetragen.jsonl). Alles andere hier ist **noch offen** oder nur
zur Kenntnis: Zuschnitt der Aussagen, Belegzuordnung, Karten an der Nachbar-Aussage, Lücken, die eine Quelle brauchen.
Die Liste ist eine Arbeitsliste (Umlaute teils als ae/oe/ue), kein Inhalt.

- PB2-2-1-3 (Agent PB2-2-1): IHK-Lösung 2022W-PB2-A2-c hat ungenaue Schleifengrenzen („von l.size() bis 0“ bei „Position 0 ist das Listenende“). Stoff richtig; optional Satz im hinweis.
- PB2-5-1-4 hinweis: 2023W-PB2-A4-c ist laut IHK-Lösung ein UPDATE … FROM mit drei INNER JOINs, keine Unterabfrage → Beleg/Hinweis bei PB2-5-1-4 prüfen (gehört zu PB2-6-1-2).
- PB2-5-1-4-K5 / 2023W-PB2-A4-d: IHK-Beispieltabelle zeigt beim Kunden ohne Rechnung 0, die Lösung liefert NULL → Satz im hinweis.
- PB2-5-1-4 hinweis / PB2-5-1-2-K4, 2022S-PB2-A4-bd: zweite IHK-Lösung (Unterabfragen in FROM) braucht LEFT JOIN statt INNER JOIN, damit Zähler ohne Stand bleiben → Satz im hinweis.
- PB2-5-1-4-K5 Aussagetext: `AVG(RgPos_EinzelPreis * RgPos_Mg) AS Umsatz` ist Durchschnitt je Position, nicht Umsatz je Kunde (so in der IHK-Lösung) → anmerken (Aussage ändern hieße Prompt neu bauen: `python p6bau.py PB2-5-1`).
- PB1-1-1-1 (Agent PB1-1-1): IHK-Loesung 2022S-PB1-A1-a nennt Prince2 als agiles Modell; der Stoff nennt es zu Recht nicht. Optional Satz im hinweis.
- PB1-4-1-3 K1/K5 (Agent PB1-4-1 A): beide Aussagen behandeln synchron/asynchron; Ueberschneidung, kein Fehler (Zuschnitt bleibt).
- PB1-4-1-1 K3: Erweiterungspunkt wird im Stoff verlangt, in keiner IHK-Musterloesung gezeichnet (dort zaehlt die Notiz mit Bedingung). Nur zur Kenntnis.
- PB1-3-2-2-K3: PowerShell-Empfehlung $null -ne $mac statt $mac -ne $null (nur Stil).
- PB1-4-1-4-K6 (Agent PB1-4-1 B): Raute (Verzweigung) im Zustandsdiagramm steht nicht in der Notation des Belegsatzes; mehrere Uebergaenge mit demselben Ereignis und je einer Bedingung sind gleichwertig -> Satz in Erklaerung K6 ergaenzen.
- PB1-5-1-5 (Agent PB1-5-1 B): Pseudocode-Schreibweise in Stoff und Karten mischt deutsche und englische Schluesselwoerter; kein Fehler (IHK wertet jede verstaendliche Schreibweise).
- PB1-6-1-2 (Agent PB1-6-1 A): ta leer; 2023S-PB1-A4-cb und 2025W-PB1-A4-c (relationales Modell zeichnen) haengen nur an PB1-6-1-3 -> Belegzuordnung pruefen (aendert Wichtigkeit).
- PB1-6-1-3: art Wissen, aber K3 laesst ein relationales Modell zeichnen -> Art pruefen.
- PB1-7-1-3 K2/K8 (Agent PB1-7-1 A): beide unterscheiden Data Lake und Data Warehouse, Karte K2-2 entspricht K8; Ueberschneidung, Zuschnitt bleibt.
- PB1-8-1-2 Karte K2-1 (Agent PB1-8-1): Antwort nennt Tastatur und Alternativtexte, die zu K3 gehoeren; Karte gehoert eher zu K3 (verschieben aendert ID, daher nur notiert).
- PB1-8-1-1 Karte K3-7: fragt die alten Grundsatz-Namen der Fassung 2006 (Lernfoerderlichkeit, Individualisierbarkeit) ab; in Erklaerung K3 ergaenzen.
- PB1-9-1-3 Karte K3-1 (Agent PB1-9-1 A): Antwort „Fehler genauer eingrenzen“ ist Stoff von K7; Karte haengt an K3 (nur notiert).
- PB1-9-1-4-K6: IHK nennt Black-/White-Box in 2021W-PB1-A4-d „Testarten“, der Stoff „Testverfahren“ -> Satz ergaenzen, dass die IHK die Begriffe nicht trennscharf verwendet.
- PB1-9-1-6 Karte K6-1 (Agent PB1-9-1 B): Antwort beginnt mit Inhaltsverzeichnis, Erklaerung nennt „Deckblatt, Inhaltsverzeichnis“ -> Karte angleichen.
- PB1-9-1-4-K1: Karte K1-7 („meist in dessen Einsatzumgebung“) und K1-3 („betriebsnahe Umgebung“) genauer als die Erklaerung -> Erklaerung angleichen.
- PB1-10-1-2-K2 (Agent PB1-10-1): „ueber die Grundmassnahmen aus AP1 hinaus“ – Offline-/unveraenderbare Sicherung lehrt schon AP1-7-3-5-K5; Wortlaut ggf. abschwaechen (Aussage, daher nur notiert).
- PB1-10-1-4-K5: Erklaerung empfiehlt SHA-256 fuer Pruefsummen; ergaenzen „gegen Manipulation nur zusammen mit Signatur oder MAC“ (passt zu K3).
- PB1-10-2-4-K2 (Agent PB1-10-2): „Unternehmen intern und extern“ nicht erklaert -> Halbsatz ergaenzen.
- PB1-10-2-2-K2: Drittland-Einschraenkung (EU/EWR, angemessenes Niveau) steht nur auf Karte K2-2 -> in Erklaerung uebernehmen; „Testdaten statt echter Daten“ steht in Erklaerung/Karte, nicht in der Aussage (so lassen).

## PB1-11-2 Teil A
- PB1-11-2-1-K4: Karte K4-1 nennt beim Primaerbereich "10 Gbit/s und mehr", Erklaerung nur "sehr hohe Raten". Erklaerung ergaenzen "(z. B. 10 Gbit/s und mehr)".
- PB1-11-2-1-K1: Erklaerung "MAN: Stadt", "WAN: Laender"; Karte K1-1 "Stadt oder Region", "ein Land oder mehrere Laender". Erklaerung an Karte angleichen.

## PB1-11-1
- PB1-11-1-3-K4: Beispiel nslookup -type=AAAA example.de -> example.de ist nicht reserviert; besser example.com.
- PB1-11-1-1-K4: fast deckungsgleich mit AP1-6-1-3-K10 (Stateful Inspection); evtl. Hinweis mit Verweis.
- PB1-11-1-3-K2: Drehbuch nutzt "nicht verlaengerte Adresse wird wieder frei" - Halbsatz in Erklaerung aufnehmen.

## PB1-12-1 Teil B
- PB1-12-1-4-K2: evtl. "Leistungsfaktor (oft als cos phi angegeben)" ergaenzen.
- PB1-12-1-5-K3: "nimmt der Controller die Hot-Spare auf" -> "der Controller bzw. das Betriebssystem" (Software-RAID).
- PB1-12-1-5-K1: Drehbuch-Falle "RAID 6 mit 4 Platten = 50 % Kapazitaet" (aus n-2 abgeleitet), nur zur Kenntnis.

## PB1-11-2 Teil B
- PB1-11-2-4-K3 gegen K5: K3 "IPsec verschluesselt und authentifiziert", Transportmodus "nur die Nutzdaten"; K5: AH verschluesselt nicht. Vorschlag K3: "verschluesselt (mit ESP) und authentifiziert"; Transportmodus "der urspruengliche Kopf bleibt sichtbar". (pruefen, eintragen)
- PB1-11-2-3: K4 steckt in K9, K3/K6 ODBC doppelt (Zuschnitt, nicht aendern - nur notieren).
- PB1-11-2-3-K2: Karte K2-1 nennt SMB auch fuer Drucker, Erklaerung nur Dateien -> angleichen.
- PB1-11-2-3-K2 Stufe 4, Karten nur Stufe 1-2 (notieren).

## PB1-12-1 Teil A
- PB1-12-1-3-K3: Aussage verlangt Geschwindigkeit je RAID-Level, Erklaerung nennt sie nur fuer RAID 0 und 10. Je einen Satz fuer RAID 1 und 5 ergaenzen (RAID 1: siehe Hinweis PB1-12-1-5).
- PB1-12-1-3-K4: Aussage "in TiB umrechnen wie in AP1", Stoff nennt keine Umrechnung -> Erklaerung ergaenzen (aus AP1 uebernehmen).
- PB1-12-1-3-K2: Karte K2-2 Beispiele (gespiegelte Platten, zweiter Switch) gegen Aussage (doppelte Netzteile, Cluster, zweite Leitung, zweites RZ) -> angleichen.
- PB1-12-1-1 Hinweis/K3: funktional/nicht funktional doppelt mit PB1-1 (nur notieren).

## PB1-12-2 Teil B
- PB1-12-2-3-K2: Kunde bei IaaS/PaaS nur "Daten", bei SaaS "Daten und Benutzer"; Benutzerverwaltung bleibt ueberall beim Kunden -> ergaenzen.
- PB1-12-2-3 Hinweis: Proxmox/Paravirtualisierung gehoeren zur Kuer, nicht zu einer Aussage (notieren).
- PB1-12-2-3-K3: Aussage "mit Kosten begruenden", Erklaerung sagt nicht, wie sich Kosten unterscheiden -> Satz ergaenzen (nur mit Quelle).

## PB1-12-2 Teil A
- PB1-12-2-1-K8: "praeventiv bzw. proaktiv" = zustandsorientiert; Satz ergaenzen, dass es vom periodischen Vorgehen getrennt ist.
- PB1-12-2-2-K8 / PB1-6-1-4-K5: Kreisverweis; in K8 "Begriffe aus PB1-6-1-4-K5" -> "Datenbank-Abwaegung siehe PB1-6-1-4-K5".

## WISO-1-1
- WISO-1-1-2-K2: fristlose Kuendigung aus wichtigem Grund (Par. 22 Abs. 2 Nr. 1 BBiG, beide Seiten) fehlt in Aussage/Erklaerung, steht nur auf Karte K2-2 -> Satz in Erklaerung ergaenzen.
- WISO-1-1-1-K2/K7: Erklaerung K2 enthaelt K7-Inhalte; Aussage K2 ohne Ausbildungsstaette/Ueberstundenausgleich (Zuschnitt - notieren, evtl. Erklaerung kuerzen mit Verweis).
- WISO-1-1-1-K3: Pruefungswortlaut 2026S-WISO-A3 "Vertrag spaetestens abgeschlossen" (Loesung: Tag vor Beginn) -> Satz in Erklaerung ergaenzen.

## WISO-1-2
- WISO-1-2-1-K3: "mehr als fuenf Unterrichtsstunden" -> "von mindestens je 45 Minuten, einmal in der Woche" (Par. 15 BBiG). K6 Blockwoche: "mindestens 25 Stunden an mindestens fuenf Tagen".
- WISO-1-2-1-K1 Verwechslung: Kammer "ueberwacht und prueft nur" -> "ueberwacht, beraet und prueft" (vgl. WISO-1-2-3-K1).
- WISO-1-2-3-K2: "wiederholt" -> "wiederholt oder schwer" (Par. 29 BBiG).
- WISO-1-2-3-K1: Verkuerzung = gemeinsamer Antrag, Verlaengerung = Antrag Azubi (Par. 8 BBiG) - Ungenauigkeit.

## WISO-1-3 Teil A
- WISO-1-3-3-K1: Drehbuch-Material enthaelt vollen Auszug Par. 622 Abs. 1, 2 Nr. 1-7 BGB (wie in 2023S-A18, 2025S-A18, 2025W-A15); Stoff nennt Fristen nur beispielhaft -> evtl. Auszug in Erklaerung aufnehmen.
- WISO-1-3-2-K7: Satz liest sich, als gaelte die 4-Wochen-Wartezeit auch fuer Feiertage; gilt nur bei Krankheit (Par. 3 Abs. 3 EntgFG) -> klarstellen.

## WISO-1-3 Teil B
- WISO-1-3-4-K6: Urlaubsstaffel Par. 19 JArbSchG (30/27/25 Werktage) fehlt in Erklaerung, nur Karte K6-1 nennt 27 -> aufnehmen.
- WISO-1-3-6-K8: Bruchteile unter halbem Tag und "Beginn bis 1. Juli -> voller Urlaub" fehlen -> Satz ergaenzen (mit Quelle).
- WISO-1-3-5-K10: Zaehl-/Rundungsregel Pflichtplaetze und Hoehe Ausgleichsabgabe fehlen (Luecke, nur wenn geprueft).
- WISO-1-3-5-K6: "nach sechs Monaten Beschaeftigung" -> "wenn das Arbeitsverhaeltnis laenger als sechs Monate besteht".
- Drehbuch WISO-1-3-5 setzt im Fall "160 zaehlende Arbeitsplaetze" (statt 185 Beschaeftigte) - ok, nur notiert.

## WISO-1-8
- WISO-1-8-3-K2: Karte K2-3 "wenn es dem Ausbildungsziel dient" fehlt in Erklaerung -> aufnehmen.
- WISO-1-8-1-K3: Beispiele Karte K3-1 (VHS, Hochschule, privater Traeger) gegen Erklaerung (Hersteller-Seminar, Akademie) -> angleichen.
- WISO-1-8-1-K5: Karte K5-2 "Fachwirt" gegen Erklaerung "Bachelor Professional" -> angleichen.
- WISO-1-8-2-K2/K5: Lernkompetenz/Selbstkompetenz ueberschneiden sich -> Abgrenzungssatz.

## WISO-1-4
- WISO-1-4-1-K6: Staffel Par. 9 BetrVG nur bis 50; Drehbuch-Material bis "101 bis 200 -> 7" (aus 2022W-WISO-A12) -> Staffel bis 200 in Erklaerung aufnehmen.
- WISO-1-4-1-K2/K6: Leiharbeitnehmer "erst nach mehr als drei Monaten Einsatz" -> Gesetzeswortlaut "wenn sie laenger als drei Monate im Betrieb eingesetzt werden" (Par. 7 S. 2 BetrVG).
- WISO-1-4-2 hinweis: verweist auf 2022S-WISO-A13, nicht in ta (pruefen).
- WISO-1-4-2-K7: Schichtarbeit und Teilzeit in Aussage, nicht erklaert -> je ein Satz.

## WISO-1-5
- WISO-1-5-2-K2: "letztes Mittel" als Bedingung jedes Streiks widerspricht K5 (Warnstreik) und K6 (vier Voraussetzungen) -> nur auf unbefristeten Streik beziehen.
- WISO-1-5-1-K3/K4: "auf Antrag" -> "auf gemeinsamen Antrag" (wie K8).
- WISO-1-5-1-K8: Zahlen ("wenige Hundert", "etwa die Haelfte tarifgebunden") ohne Stand/Quelle -> Faktencheck-Liste.

## WISO-1-6
- WISO-1-6-3 K3/K5: Beitragssaetze AV (Drehbuch nimmt 2,6 % "laut Aufgabe") und RV 18,6 % stehen nicht in der Erklaerung -> mit "Stand 2026" aufnehmen (Faktencheck).
- WISO-1-6-2-K6: Minijob "Pauschalbeitraege (KV, RV, Steuer)" -> "Pauschalbeitraege zur KV und RV, dazu ggf. Pauschalsteuer".
- WISO-1-6-2-K4: BBG "in allen Zweigen mit Beitraegen" -> "in KV, PV, RV, AV" (nicht Unfallversicherung).
- WISO-1-6-1-K3: Kirchensteuersatz fehlt (nur falls gefragt).

## WISO-1-7
- WISO-1-7-2-K2: vier Eisenhower-Gruppen unter "Eisenhower-Prinzip" einruecken (Darstellung).
- WISO-1-7-1-K4: Mindmap-Beispiel "Unfallversicherung -> Berufsgenossenschaft" vereinfacht (nur notiert).

## WISO-2-2 Teil B
- WISO-2-2-4-K3 Aussage: "Gesellschafter" bei GmbH ungenau (Registerblatt: Geschaeftsfuehrer/Prokuristen; Gesellschafterliste im Registerordner). Erklaerung ist richtig. Aussage-Wortlaut nicht aendern ohne Prompt-Neubau (p6install baut neu) - pruefen.
- WISO-2-2-4-K1: Hinweis ergaenzen: IHK-Antwort "Personengesellschaften -> A" gilt als richtig (2023W-WISO-A5).
- WISO-2-2-5-K4: Matrix - Vorteil/Kompetenzstreit nur in Karte K4-4; Aussage/Erklaerung vereinheitlichen.
- WISO-2-2-5-K2 Karte K2-1: "Einliniensystem mit Stabsstellen" gegen "Liniensystem mit Stabsstellen".
- WISO-2-2-6 kurz: "tauchen oft als Auswahl auf" widerspricht leerer Belegliste -> "bisher nicht eigenstaendig geprueft".

## WISO-2-2 Teil A
- WISO-2-2-2-K8 Zeile Kapital: "unter 25.000 EUR -> UG (haftungsbeschraenkt), siehe K11" ergaenzen.
- WISO-2-2-2-K8 Zeile Haftung: "KG nur, wenn einer voll haften soll" -> Halbsatz "(ausser GmbH & Co. KG)".
- WISO-2-2-2-K2: IHK-Formulierung 2026S-WISO-A15 "haften nur mit ihrer Stammeinlage" als in der Pruefung richtig erwaehnen.
- WISO-2-2-3-K3: Fall "nur Geschaeftsanteile genannt -> Summe = Stammkapital" (2025S-A23, 2025W-A20) als Satz ergaenzen.
- WISO-2-2-1 Belege: 2023S-WISO-A23 bei 2-2-1 und 2-2-2 (pruefen).

## WISO-2-1
- WISO-2-1-1-K1: Satz ergaenzen: Einordnung nach Taetigkeit/Wortlaut (Software herstellen = sekundaer laut 2022S-A17c; "IT-Dienstleister" = tertiaer in 2023S-A21, 2024S-A9, 2026S-A27).
- WISO-2-1-1-K8: geschlossener Markt ohne Beispiel im Stoff; Drehbuch nutzt eigene (Distributor nur an Fachhaendler, Grosshandel mit Kundenkarte) - pruefen.
- WISO-2-1-4-K1/K2: Tiefstand gegen Stagnation -> Abgrenzungssatz.
- WISO-2-1-3-K3: Rechtsstand Grundsicherungsgeld seit 1.7.2026 -> steht schon auf Faktencheck-Liste.

## WISO-2-4
- WISO-2-4-3-K3: Fall "Kosten gesenkt, zum Ergebnis nichts gesagt" fehlt (2025S-WISO-A3) -> Zeile ergaenzen (offen).
- WISO-2-4-1-K7: ROI-Formel, wenn die Aufgabe keine nennt -> klarstellen (offen).
- WISO-2-4-1-K6: Gesamtkapital = Eigenkapital + Fremdkapital als Satz aufnehmen (offen).
- WISO-2-4-2 Belege: 2025S-WISO-A7, 2026S-WISO-A23 gehoeren laut Hinweis zu AP1-2-4-1 (Wichtigkeit evtl. zu hoch).

## WISO-3-2
- WISO-3-2-3-K1 Beispiel "Gehoerschutzpflicht und Zutrittsregeln" widerspricht K2/Karte K2-2 (erst technisch) -> Beispiel anpassen (offen).
- WISO-3-2-3-K3 gegen K2: "Netzkabel ziehen" als Stufe S (Substitution) unsauber (offen).
- WISO-3-2-3-K1: Reihenfolge "dokumentieren" zuletzt - gegen IHK-Sicht pruefen (offen).
- WISO-3-2-2-K3: wer die Untersuchung zahlt / Rechtsgrundlage Angebotsvorsorge fehlt (offen).

## WISO-3-1
- WISO-3-1-1-K9: Aushang Mutterschutzgesetz "ab einer Mindestzahl" ohne Zahl (Par. 26 MuSchG: regelmaessig mehr als drei Frauen - pruefen, Faktencheck).
- WISO-3-1-3-K3: Halbsatz "Verletztengeld wird oft ueber die Krankenkasse im Auftrag der BG ausgezahlt" (offen).
- Drehbuch WISO-3-1-2 nennt die Kuer (Schwelle Sicherheitsbeauftragte, beide Staende) als "nur falls gefragt".

## WISO-3-4
- WISO-3-4-4: Beleg 2024S-WISO-A28 (Brandschutzzeichen Loeschschlauch) passt zu keiner Aussage K1-K7 (Belegzuordnung/Luecke).
- WISO-3-4-4-K3: Karte K3-2 vier Schritte, 2022S-WISO-A26 hat fuenf (zum Geraet laufen, entnehmen, Sicherung ziehen, Hebel, Schlauch aufs Feuer) (offen).
- WISO-3-4-2-K6: bei Empfaenger-Fragen BG waehlen, auch wenn Dauer fehlt (2022W-WISO-A21) -> Hinweis (offen).
- WISO-3-4-2-K3/K6: Fristbeginn Unfallanzeige gegen Wortlaut 2026S-WISO-A6 ("nach Kenntnis vom Befund des Durchgangsarztes") -> klaerender Satz (offen).
- WISO-3-4-4-K4: "viele Kunststoffe" in Klasse B -> "schmelzende Kunststoffe" (offen).
- WISO-3-4-4-K5: Loeschdecke bei brennender Kleidung - DGUV-Empfehlung pruefen (Faktencheck).

## WISO-4-1
- WISO-4-1-2-K3: Herkunft beleg:2026S-WISO-A23 passt nicht (oekologisches Ziel erkennen -> AP1-2-4-1) (Belegzuordnung).
- WISO-4-1-3-K1 Karte K1-1: "Produkte und Dienstleistungen" gegen Aussage "Produkte" (klein).
- WISO-4-1-3-K3: 2025S-WISO-A30 zeigt als Ablenker CE und Tiegel-Symbol "6M"; Tiegel-Symbol nirgends im Stoff (Luecke).

## WISO-5-3
- WISO-5-3-3 Karte K2-2 prueft inhaltlich K3 (nur notiert, Karten-ID bleibt).
- WISO-5-3-2 Karte K2-2 nennt Bundes-Immissionsschutzgesetz, Erklaerung nicht (klein).

## WISO-4-2
- WISO-4-2-1 ta: 2023S-WISO-A24 gehoert laut eigenem Hinweis zu WISO-4-2-2-K3; 2025S-WISO-A29 steht in Herkunft K1, fehlt in ta (Belegzuordnung).
- WISO-4-2-2 ta: 2022S-WISO-A28 ist eine Recycling-Aufgabe (duenner Beleg, Wichtigkeit evtl. zu hoch).
- WISO-4-2-2-K1 gegen K5: "Verkaufsverpackungen" passt woertlich nur zum Stand bis 11.8.2026 (Aussage; Faktencheck).
- WISO-4-2-2-K4/K5: Wer ist Verpflichteter bei vom Hersteller befuellter Verkaufsverpackung im Weiterverkauf? (Luecke)
- WISO-4-2-3-K3: Hinweis auf Schreibweise "Bundesemissionsschutzgesetz" im falschen Antworttext 2025W-WISO-A29 (optional).
- Agent hat WISO-4-2-2 und -3 nach dem Kuerzen nicht ganz gegengelesen -> Stichprobe lesen.

## WISO-3-3
- WISO-3-3-1 K2/K4/K5: "Sammelstelle" / "Sammelplatz" / IHK "Sammelpunkt" (2022W-WISO-A27) -> einen Begriff fuehren, Synonyme nennen (offen).
- WISO-3-3-1-K2: zwei Zeichen aus 2022S-WISO-A23 fehlen (gruenes Quadrat nur mit Pfeil = Richtungsangabe Rettungsweg; Verbotszeichen "Gehaeuse unter Spannung, nicht beruehren") (Luecke).
- WISO-3-3-1-K1: Satz ergaenzen "unbekannte Symbole ueber die Gruppe einordnen; im Graustufendruck entscheidet die Form" (offen).
- WISO-3-3-2-K1: IP 54 als Beispiel, Wasserziffer 4 nirgends erklaert (Luecke).
- WISO-3-3-2-K2: Symbole fuer Schutzklasse I und III fehlen (nur II) (Luecke).

## WISO-2-5
- WISO-2-5-2-K3: Tarifpartner nur fuer Metall/Elektro genannt; fuer das Systemhaus im Fall offen (Luecke / Fallblatt).
- WISO-2-5-3-K3: Gewerbeaufsicht und Amtsgericht ohne Verwaltungsebene (Luecke).
- WISO-2-5-2 / -3: ta leer, aber Antwortmoeglichkeiten in Pruefungen (Pruefungsausschuss: 2022S, 2023W, 2025W; Gewerbeaufsicht: 2022W, 2023S, 2023W, 2024S, 2025S) -> evtl. quer.

## WISO-5-2
- WISO-5-2-2-K1 (Erklaerung, Karte K1-3): "Samstag, 14.11." stimmt nur 2026 -> Wochentag weglassen (offen).
- WISO-5-2-1 ta: A28 (oeffentliches WLAN nur mit VPN) wird hier nicht gelernt (Hinweis verweist auf AP1-7-4-3) - Wichtigkeit.
