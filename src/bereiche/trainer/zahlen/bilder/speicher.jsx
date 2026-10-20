// Bilder zum Mitmachen für Speicherbedarf (Rahmen im Unterricht: <Abbildung> aus lernsystem/bausteine.jsx;
// Stil: styles/zahlen-speicher.css, Präfix zt-speicher-). Jedes Bild liefert nur seinen Inhalt; die Rechnungen
// dahinter stehen in ../rechnen.js (getestet).
//   Stufen (Bittiefe am Thermometer) · Werte (Anzahl · Bit je Wert) · Treppe (Bit → Byte → KiB → MiB)
//   Pixelraster (Auflösung und Farbtiefe) · Bildrechnung · Scan (Zoll · dpi) · Abtastung · Audiorechnung
//   Hochrechnen (je Minute → Jahr, volle TiB) · Komprimierung · Mehrbedarf · Kapazitaet (GB und GiB) · Vergleich

import { Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Icon, Knopf } from '../../../../ui/bausteine.jsx';
import { Segmente } from '../bausteine.jsx';
import { z, runde, hoch, einheitenTreppe, farbeInTiefe, abtasten, hochrechnen, verringert, mehrbedarf, volle } from '../rechnen.js';

// Zahl genau, sonst auf zwei Stellen mit „≈“
const genau = (w) => (Math.abs(w - runde(w, 2)) < 1e-9 ? z(w) : `≈ ${z(runde(w, 2), 2)}`);
const mit2 = (w) => z(runde(w, 2), 2);
// Auf zwei Stellen gerundet, ohne Nullen dahinter (25 statt 25,00)
const knapp = (w) => z(runde(w, 2));
const MIB = 1024 ** 2;
const GIB = 1024 ** 3;

// Plus/Minus mit Zahl dazwischen
function Zaehler({ name, wert, min, max, onWert, einheit }) {
  return (
    <div class="zt-speicher-zaehler">
      <span class="zt-speicher-zaehler__name">{name}</span>
      <button type="button" class="symbolknopf symbolknopf--s" aria-label={`${name} kleiner`} disabled={wert <= min} onClick={() => onWert(wert - 1)}>
        <Icon name="minus" groesse={15} />
      </button>
      <span class="zt-speicher-zaehler__wert mono">
        {wert}
        {einheit && <small> {einheit}</small>}
      </span>
      <button type="button" class="symbolknopf symbolknopf--s" aria-label={`${name} größer`} disabled={wert >= max} onClick={() => onWert(wert + 1)}>
        <Icon name="plus" groesse={15} />
      </button>
    </div>
  );
}

// Beschriftete Auswahl (Segmente mit Namen davor)
function Auswahl({ name, optionen, wert, onWahl }) {
  return (
    <div class="zt-speicher-wahl">
      <span class="zt-speicher-wahl__name">{name}</span>
      <Segmente optionen={optionen.map((o) => ({ wert: String(o.wert), text: o.text }))} wert={String(wert)} onWahl={(w) => onWahl(Number(w))} label={name} />
    </div>
  );
}

// Rechenweg: Zeilen [{ name, rechnung, ergebnis, hervor? }]
function Weg({ zeilen }) {
  return (
    <div class="zt-speicher-weg">
      {zeilen.map((r, i) => (
        <div key={i} class={`zt-speicher-weg__zeile ${r.hervor ? 'zt-speicher-weg__zeile--hervor' : ''}`}>
          <span class="zt-speicher-weg__name">{r.name}</span>
          <span class="zt-speicher-weg__rechnung mono">{r.rechnung}</span>
          <span class="zt-speicher-weg__ergebnis mono">{r.ergebnis}</span>
        </div>
      ))}
    </div>
  );
}

// ---------- Stufen: Bittiefe am Thermometer (0 bis 50 °C in 2ⁿ Stufen) ----------

const MESSWERT = 23.4;

export function Stufen({ start = 1 }) {
  const [n, setN] = useState(start);
  const stufen = 2 ** n;
  const breite = 50 / stufen;
  const stufe = Math.min(stufen - 1, Math.floor(MESSWERT / breite));
  const zeichnen = stufen <= 64;
  return (
    <>
      <div class="zt-speicher-skala" aria-hidden="true">
        <div class={`zt-speicher-skala__band ${zeichnen ? '' : 'zt-speicher-skala__band--fein'}`}>
          {zeichnen &&
            Array.from({ length: stufen }, (_, i) => <span key={i} class={i === stufe ? 'zt-speicher-skala--an' : ''} />)}
        </div>
        <span class="zt-speicher-skala__messung" style={{ left: `${(MESSWERT / 50) * 100}%` }} />
        <div class="zt-speicher-skala__achse mono">
          <span>0 °C</span>
          <span>25 °C</span>
          <span>50 °C</span>
        </div>
      </div>
      <div class="zt-speicher-gross">
        <span class="mono">
          {n} Bit → 2{hoch(n)} = <b>{z(stufen)}</b> Stufen
        </span>
        <span class="zt-speicher-gross__klein">
          Eine Stufe: 50 °C ÷ {z(stufen)} = {genau(breite)} °C · gemessen {z(MESSWERT)} °C, gespeichert als Stufe {z(stufe)} ({knapp(stufe * breite)} bis{' '}
          {knapp((stufe + 1) * breite)} °C)
        </span>
      </div>
      <Zaehler name="Bittiefe" wert={n} min={1} max={12} onWert={setN} einheit="Bit" />
      <span class="zt-bild__hinweis">{zeichnen ? 'Grün: die Stufe, in der die Messung landet.' : 'Die Stufen sind jetzt zu fein zum Zeichnen.'}</span>
    </>
  );
}

// ---------- Werte: Anzahl der Werte · Bit je Wert ----------

const TEMPERATUREN = [21.5, 21.6, 21.8, 22.1, 22.0, 21.9, 22.3, 22.6];

export function Werte({ anzahl: startAnzahl = 3, tiefe: startTiefe = 8 }) {
  const [anzahl, setAnzahl] = useState(startAnzahl);
  const [tiefe, setTiefe] = useState(startTiefe);
  return (
    <>
      <div class="zt-speicher-werte">
        {TEMPERATUREN.slice(0, anzahl).map((t, i) => {
          const stufe = Math.floor((t / 50) * 2 ** tiefe);
          return (
            <div key={i} class="zt-speicher-wert">
              <span class="zt-speicher-wert__name mono">{z(t)} °C</span>
              <span class="zt-speicher-wert__bits" style={{ gridTemplateColumns: `repeat(${Math.min(tiefe, 8)}, 1fr)` }}>
                {[...stufe.toString(2).padStart(tiefe, '0')].map((b, j) => (
                  <span key={j} class={b === '1' ? 'zt-speicher-bit--an' : ''}>
                    {b}
                  </span>
                ))}
              </span>
            </div>
          );
        })}
      </div>
      <div class="zt-summe">
        {anzahl} {anzahl === 1 ? 'Wert' : 'Werte'} · {tiefe} Bit =<b>{z(anzahl * tiefe)} Bit</b>
      </div>
      <div class="zt-speicher-regler">
        <Zaehler name="Werte" wert={anzahl} min={1} max={TEMPERATUREN.length} onWert={setAnzahl} />
        <Auswahl name="Bittiefe" optionen={[4, 8, 16].map((b) => ({ wert: b, text: `${b} Bit` }))} wert={tiefe} onWahl={setTiefe} />
      </div>
    </>
  );
}

// ---------- Treppe: Bit → Byte → KiB → MiB, Stufe für Stufe ----------

const ZEITRAEUME = [
  { wert: 1, text: '1 Tag' },
  { wert: 7, text: '1 Woche' },
  { wert: 365, text: '1 Jahr' },
];

export function Treppe() {
  const [tage, setTage] = useState(1);
  const [sichtbar, setSichtbar] = useState(1);
  const bit = 86400 * 16 * tage;
  const treppe = einheitenTreppe(bit, 'MiB');
  const fertig = sichtbar >= treppe.length;
  return (
    <>
      <Auswahl
        name="Sensor, 1 Wert je Sekunde, 16 Bit"
        optionen={ZEITRAEUME}
        wert={tage}
        onWahl={(t) => {
          setTage(t);
          setSichtbar(1);
        }}
      />
      <div class="zt-speicher-treppe">
        {treppe.slice(0, sichtbar).map((s, i) => (
          <div key={`${tage}-${i}`} class="zt-speicher-treppe__stufe erscheinen" style={{ '--stufe': i }}>
            {s.schritt && <span class="zt-speicher-treppe__schritt mono">{s.schritt}</span>}
            <span class="zt-speicher-treppe__wert mono">
              {genau(s.wert)} <b>{s.einheit}</b>
            </span>
          </div>
        ))}
      </div>
      <div class="zt-bild__knoepfe">
        <Knopf variante={fertig ? 'zweit' : 'primaer'} groesse="s" icon="step-forward" disabled={fertig} onClick={() => setSichtbar(sichtbar + 1)}>
          {fertig ? 'Fertig' : 'Nächste Stufe'}
        </Knopf>
        {sichtbar > 1 && (
          <Knopf variante="geist" groesse="s" icon="rotate-ccw" onClick={() => setSichtbar(1)}>
            Von vorn
          </Knopf>
        )}
      </div>
    </>
  );
}

// ---------- Pixelraster: Auflösung und Farbtiefe ändern, die Rechnung läuft mit ----------

// Das Motiv: Himmel mit Sonne über einem Hügel, u und v von 0 bis 1
function motiv(u, v) {
  const sonne = Math.hypot(u - 0.72, (v - 0.3) * 1.2);
  if (sonne < 0.14) return [255, 214, 92];
  const huegel = 0.62 + 0.08 * Math.sin(u * 6 + 0.5);
  if (v > huegel) {
    const tiefe = (v - huegel) / (1 - huegel);
    return [Math.round(70 - 40 * tiefe), Math.round(160 - 70 * tiefe), Math.round(80 - 40 * tiefe)];
  }
  const h = v / huegel;
  return [Math.round(60 + 190 * h), Math.round(120 + 70 * h), Math.round(210 - 90 * h)];
}

const FARBTIEFEN = [1, 4, 8, 16, 24];
const TIEFE_TEXT = { 1: 'schwarz oder weiß', 4: '16 Graustufen', 8: '3 Bit Rot, 3 Bit Grün, 2 Bit Blau', 16: '5 Bit Rot, 6 Bit Grün, 5 Bit Blau', 24: 'je 8 Bit Rot, Grün, Blau' };

export function Pixelraster({ breite: b0 = 8, hoehe: h0 = 6, tiefe: t0 = 24, aufloesung = false, farbtiefe = false }) {
  const [breite, setBreite] = useState(b0);
  const [hoehe, setHoehe] = useState(h0);
  const [tiefe, setTiefe] = useState(t0);
  const pixel = breite * hoehe;
  return (
    <>
      <div class="zt-speicher-raster" style={{ gridTemplateColumns: `repeat(${breite}, 1fr)`, aspectRatio: `${breite} / ${hoehe}` }} aria-label={`Bild aus ${breite} × ${hoehe} Pixeln`} role="img">
        {Array.from({ length: pixel }, (_, i) => {
          const [r, g, b] = farbeInTiefe(motiv(((i % breite) + 0.5) / breite, (Math.floor(i / breite) + 0.5) / hoehe), tiefe);
          return <span key={i} style={{ background: `rgb(${r}, ${g}, ${b})` }} />;
        })}
      </div>
      <div class="zt-speicher-regler">
        {aufloesung && (
          <>
            <Zaehler name="Breite" wert={breite} min={2} max={16} onWert={setBreite} einheit="px" />
            <Zaehler name="Höhe" wert={hoehe} min={2} max={12} onWert={setHoehe} einheit="px" />
          </>
        )}
        {farbtiefe && <Auswahl name="Farbtiefe" optionen={FARBTIEFEN.map((t) => ({ wert: t, text: `${t} Bit` }))} wert={tiefe} onWahl={setTiefe} />}
      </div>
      {farbtiefe ? (
        <>
          <div class="zt-summe">
            2{hoch(tiefe)} =<b>{z(2 ** tiefe)} Farben</b>
          </div>
          <span class="zt-bild__hinweis">
            {tiefe} Bit je Pixel: {TIEFE_TEXT[tiefe]} · {z(pixel)} Pixel · {tiefe} Bit = {z(pixel * tiefe)} Bit
          </span>
        </>
      ) : (
        <div class="zt-summe">
          {breite} · {hoehe} =<b>{z(pixel)} Pixel</b>
        </div>
      )}
    </>
  );
}

// ---------- Bildrechnung: Auflösung und Farbtiefe wählen, Rechenweg bis MiB ----------

const AUFLOESUNGEN = [
  [1024, 768],
  [1920, 1080],
  [3840, 2160],
];

export function Bildrechnung() {
  const [nr, setNr] = useState(1);
  const [tiefe, setTiefe] = useState(24);
  const [b, h] = AUFLOESUNGEN[nr];
  const px = b * h;
  const t = einheitenTreppe(px * tiefe, 'MiB');
  return (
    <>
      <div class="zt-speicher-regler">
        <Auswahl name="Auflösung" optionen={AUFLOESUNGEN.map(([x, y], i) => ({ wert: i, text: `${z(x)} × ${z(y)}` }))} wert={nr} onWahl={setNr} />
        <Auswahl name="Farbtiefe" optionen={[8, 16, 24, 32].map((x) => ({ wert: x, text: `${x} Bit` }))} wert={tiefe} onWahl={setTiefe} />
      </div>
      <Weg
        zeilen={[
          { name: 'Pixel', rechnung: `${z(b)} · ${z(h)}`, ergebnis: z(px) },
          { name: 'Bit', rechnung: `${z(px)} · ${tiefe} Bit`, ergebnis: `${z(t[0].wert)} Bit` },
          { name: 'Byte', rechnung: '÷ 8', ergebnis: `${z(t[1].wert)} Byte` },
          { name: 'KiB', rechnung: '÷ 1.024', ergebnis: `${genau(t[2].wert)} KiB` },
          { name: 'MiB', rechnung: '÷ 1.024', ergebnis: `${genau(t[3].wert)} MiB`, hervor: true },
        ]}
      />
    </>
  );
}

// ---------- Scan: Zoll · dpi = Pixel ----------

const FOTO = [4, 6];

export function Scan() {
  const [dpi, setDpi] = useState(300);
  const [b, h] = FOTO.map((zoll) => zoll * dpi);
  const lupe = dpi / 25; // Pixel auf 1/25 Zoll (≈ 1 mm)
  return (
    <>
      <Auswahl name="Scanner" optionen={[75, 150, 300, 600].map((d) => ({ wert: d, text: `${d} dpi` }))} wert={dpi} onWahl={setDpi} />
      <div class="zt-speicher-scan">
        <div class="zt-speicher-scan__foto" aria-hidden="true">
          {Array.from({ length: FOTO[0] * FOTO[1] }, (_, i) => (
            <span key={i} class={`zt-speicher-scan__zoll ${i === 0 ? 'zt-speicher-scan--lupe' : ''}`} />
          ))}
          <span class="zt-speicher-scan__mass zt-speicher-scan__mass--b mono">4 Zoll</span>
          <span class="zt-speicher-scan__mass zt-speicher-scan__mass--h mono">6 Zoll</span>
        </div>
        <div class="zt-speicher-scan__lupe">
          <div class="zt-speicher-scan__punkte" style={{ gridTemplateColumns: `repeat(${lupe}, 1fr)` }} aria-hidden="true">
            {Array.from({ length: lupe * lupe }, (_, i) => (
              <span key={i} />
            ))}
          </div>
          <span class="zt-bild__hinweis">
            Lupe: 1⁄25 Zoll (≈ 1 mm) – darin {lupe} × {lupe} Pixel
          </span>
        </div>
      </div>
      <Weg
        zeilen={[
          { name: 'Breite', rechnung: `4 Zoll · ${dpi} dpi`, ergebnis: `${z(b)} px` },
          { name: 'Höhe', rechnung: `6 Zoll · ${dpi} dpi`, ergebnis: `${z(h)} px` },
          { name: 'Pixel', rechnung: `${z(b)} · ${z(h)}`, ergebnis: z(b * h) },
          { name: 'Byte', rechnung: '· 24 Bit ÷ 8', ergebnis: `${z(b * h * 3)} Byte` },
          { name: 'MiB', rechnung: '÷ 1.024²', ergebnis: `${genau((b * h * 3) / MIB)} MiB`, hervor: true },
        ]}
      />
    </>
  );
}

// ---------- Abtastung: eine Schwingung messen und auf Stufen legen ----------

const KURVE = (t) => 0.72 * Math.sin(2 * Math.PI * 2 * t) + 0.22 * Math.sin(2 * Math.PI * 5 * t + 0.6);
const SVG_B = 320;
const SVG_H = 150;
const px = (t) => 10 + t * (SVG_B - 20);
const py = (w) => SVG_H / 2 - w * (SVG_H / 2 - 10);

export function Abtastung() {
  const [anzahl, setAnzahl] = useState(16);
  const [tiefe, setTiefe] = useState(3);
  const proben = abtasten(KURVE, anzahl, tiefe);
  const stufen = 2 ** tiefe;
  const kurve = Array.from({ length: 161 }, (_, i) => `${i ? 'L' : 'M'}${px(i / 160).toFixed(1)} ${py(KURVE(i / 160)).toFixed(1)}`).join(' ');
  const treppe = proben.map((p, i) => `${i ? 'L' : 'M'}${px(p.t).toFixed(1)} ${py(p.gespeichert).toFixed(1)} H${px(p.t + 1 / anzahl).toFixed(1)}`).join(' ');
  return (
    <>
      <svg class="zt-speicher-welle" viewBox={`0 0 ${SVG_B} ${SVG_H}`} role="img" aria-label={`Schwingung, ${anzahl} Messungen mit je ${tiefe} Bit`}>
        {stufen <= 16 &&
          Array.from({ length: stufen + 1 }, (_, i) => {
            const y = py((i / stufen) * 2 - 1);
            return <line key={i} class="zt-speicher-welle__stufe" x1={px(0)} x2={px(1)} y1={y} y2={y} />;
          })}
        <path class="zt-speicher-welle__kurve" d={kurve} />
        <path class="zt-speicher-welle__treppe" d={treppe} />
        {proben.map((p, i) => (
          <circle key={i} class="zt-speicher-welle__punkt" cx={px(p.t)} cy={py(p.gespeichert)} r={anzahl > 32 ? 2 : 3} />
        ))}
      </svg>
      <div class="zt-speicher-regler">
        <Auswahl name="Messungen" optionen={[8, 16, 32, 64].map((x) => ({ wert: x, text: String(x) }))} wert={anzahl} onWahl={setAnzahl} />
        <Auswahl name="Bit je Messung" optionen={[1, 2, 3, 4, 8].map((x) => ({ wert: x, text: `${x} Bit` }))} wert={tiefe} onWahl={setTiefe} />
      </div>
      <div class="zt-summe">
        {anzahl} Messwerte · {tiefe} Bit =<b>{z(anzahl * tiefe)} Bit</b>
      </div>
      <span class="zt-bild__hinweis">
        Grau: der echte Schall · grün: was gespeichert wird ({z(stufen)} Stufen{stufen > 16 ? ', zu fein für Linien' : ''})
      </span>
    </>
  );
}

// ---------- Audiorechnung: Abtastrate · Abtasttiefe · Kanäle · Sekunden ----------

const DAUERN = [
  { wert: 10, text: '10 s' },
  { wert: 60, text: '1 min' },
  { wert: 180, text: '3 min' },
  { wert: 300, text: '5 min' },
];

export function Audiorechnung() {
  const [rate, setRate] = useState(44100);
  const [tiefe, setTiefe] = useState(16);
  const [kanaele, setKanaele] = useState(2);
  const [sekunden, setSekunden] = useState(60);
  const jeSekunde = rate * kanaele;
  const bit = jeSekunde * tiefe * sekunden;
  return (
    <>
      <div class="zt-speicher-regler">
        <Auswahl name="Abtastrate" optionen={[22050, 44100, 48000, 96000].map((r) => ({ wert: r, text: `${z(r / 1000)} kHz` }))} wert={rate} onWahl={setRate} />
        <Auswahl name="Abtasttiefe" optionen={[8, 16, 24].map((x) => ({ wert: x, text: `${x} Bit` }))} wert={tiefe} onWahl={setTiefe} />
        <Auswahl
          name="Kanäle"
          optionen={[
            { wert: 1, text: 'Mono' },
            { wert: 2, text: 'Stereo' },
          ]}
          wert={kanaele}
          onWahl={setKanaele}
        />
        <Auswahl name="Dauer" optionen={DAUERN} wert={sekunden} onWahl={setSekunden} />
      </div>
      <Weg
        zeilen={[
          { name: 'Werte je s', rechnung: `${z(rate)} · ${kanaele}`, ergebnis: z(jeSekunde) },
          { name: 'Bit', rechnung: `${z(jeSekunde)} · ${tiefe} Bit · ${sekunden} s`, ergebnis: `${z(bit)} Bit` },
          { name: 'Byte', rechnung: '÷ 8', ergebnis: `${z(bit / 8)} Byte` },
          { name: 'MiB', rechnung: '÷ 1.024²', ergebnis: `${genau(bit / 8 / MIB)} MiB`, hervor: true },
        ]}
      />
    </>
  );
}

// ---------- Hochrechnen: je Minute → Stunde → Tag → Jahr, auf Wunsch mit Speicher und vollen TiB ----------

export function Hochrechnen({ speicher = false }) {
  const [jeMinute, setJeMinute] = useState(20);
  const [stunden, setStunden] = useState(8);
  const [tage, setTage] = useState(250);
  const kette = hochrechnen(jeMinute, [
    { name: 'je Stunde', faktor: 60, text: '· 60 min' },
    { name: 'je Tag', faktor: stunden, text: `· ${stunden} h` },
    { name: 'im Jahr', faktor: tage, text: `· ${tage} Tage` },
  ]);
  const byteJeBild = 2e6 * 3; // 2 Megapixel, 24 Bit = 3 Byte je Pixel
  const byte = kette[2].menge * byteJeBild;
  const tib = byte / 1024 ** 4;
  return (
    <>
      <div class="zt-speicher-regler">
        <Auswahl name="Bilder je Minute" optionen={[10, 20, 30].map((x) => ({ wert: x, text: String(x) }))} wert={jeMinute} onWahl={setJeMinute} />
        <Auswahl name="Stunden je Tag" optionen={[6, 8, 10].map((x) => ({ wert: x, text: `${x} h` }))} wert={stunden} onWahl={setStunden} />
        <Auswahl name="Arbeitstage" optionen={[220, 250, 365].map((x) => ({ wert: x, text: String(x) }))} wert={tage} onWahl={setTage} />
      </div>
      <div class="zt-speicher-kette">
        <div class="zt-speicher-kette__glied">
          <span class="zt-speicher-kette__name">je Minute</span>
          <span class="zt-speicher-kette__menge mono">{z(jeMinute)}</span>
        </div>
        {kette.map((k) => (
          <Fragment key={k.name}>
            <span class="zt-speicher-kette__faktor mono">
              <Icon name="arrow-right" groesse={13} /> {k.text}
            </span>
            <div class="zt-speicher-kette__glied">
              <span class="zt-speicher-kette__name">{k.name}</span>
              <span class="zt-speicher-kette__menge mono">{z(k.menge)}</span>
            </div>
          </Fragment>
        ))}
      </div>
      {speicher && (
        <Weg
          zeilen={[
            { name: 'je Bild', rechnung: '2.000.000 Pixel · 3 Byte', ergebnis: `${z(byteJeBild)} Byte` },
            { name: 'im Jahr', rechnung: `· ${z(kette[2].menge)} Bilder`, ergebnis: `${z(byte)} Byte` },
            { name: 'TiB', rechnung: '÷ 1.024⁴', ergebnis: `${genau(tib)} TiB` },
            { name: 'volle TiB', rechnung: 'aufrunden', ergebnis: `${z(volle(tib))} TiB`, hervor: true },
          ]}
        />
      )}
    </>
  );
}

// ---------- Komprimierung: um p % oder auf p % verringert ----------

const ROH = 1920 * 1080 * 3; // Full HD, 24 Bit

export function Komprimierung() {
  const [p, setP] = useState(30);
  const [art, setArt] = useState(0); // 0: um p %, 1: auf p %
  const bleibt = art === 0 ? 100 - p : p;
  const neu = verringert(ROH, 100 - bleibt) / MIB;
  return (
    <>
      <div class="zt-speicher-regler">
        <Auswahl
          name="Angabe"
          optionen={[
            { wert: 0, text: `um ${p} % verringert` },
            { wert: 1, text: `auf ${p} % verringert` },
          ]}
          wert={art}
          onWahl={setArt}
        />
        <Auswahl name="p" optionen={[10, 30, 50, 75, 90].map((x) => ({ wert: x, text: `${x} %` }))} wert={p} onWahl={setP} />
      </div>
      <div class="zt-speicher-balken">
        <div class="zt-speicher-balken__zeile">
          <span class="zt-speicher-balken__name">vorher</span>
          <span class="zt-speicher-balken__spur">
            <span class="zt-speicher-balken__fuellung" style={{ width: '100%' }} />
          </span>
          <span class="zt-speicher-balken__wert mono">{mit2(ROH / MIB)} MiB</span>
        </div>
        <div class="zt-speicher-balken__zeile">
          <span class="zt-speicher-balken__name">nachher</span>
          <span class="zt-speicher-balken__spur">
            <span class="zt-speicher-balken__fuellung zt-speicher-balken__fuellung--neu" style={{ width: `${bleibt}%` }} />
          </span>
          <span class="zt-speicher-balken__wert mono">{mit2(neu)} MiB</span>
        </div>
      </div>
      <div class="zt-summe">
        {mit2(ROH / MIB)} · {z(bleibt / 100)} =<b>{mit2(neu)} MiB</b>
      </div>
      <span class="zt-bild__hinweis">
        {art === 0 ? `Um ${p} % verringert: ${p} % fallen weg, ${bleibt} % bleiben.` : `Auf ${p} % verringert: nur ${p} % bleiben.`}
      </span>
    </>
  );
}

// ---------- Mehrbedarf: alt gegen neu, der Zuwachs bezogen auf alt ----------

export function Mehrbedarf() {
  const [alt, setAlt] = useState(16);
  const [neu, setNeu] = useState(24);
  const neuWahl = [16, 24, 32, 48].filter((x) => x > alt);
  const neuWert = neuWahl.includes(neu) ? neu : neuWahl[0];
  const prozent = mehrbedarf(alt, neuWert);
  const max = 48;
  return (
    <>
      <div class="zt-speicher-regler">
        <Auswahl name="bisher" optionen={[8, 16, 24].map((x) => ({ wert: x, text: `${x} Bit` }))} wert={alt} onWahl={setAlt} />
        <Auswahl name="künftig" optionen={neuWahl.map((x) => ({ wert: x, text: `${x} Bit` }))} wert={neuWert} onWahl={setNeu} />
      </div>
      <div class="zt-speicher-balken">
        <div class="zt-speicher-balken__zeile">
          <span class="zt-speicher-balken__name">alt</span>
          <span class="zt-speicher-balken__spur">
            <span class="zt-speicher-balken__fuellung" style={{ width: `${(alt / max) * 100}%` }} />
          </span>
          <span class="zt-speicher-balken__wert mono">{alt} Bit</span>
        </div>
        <div class="zt-speicher-balken__zeile">
          <span class="zt-speicher-balken__name">neu</span>
          <span class="zt-speicher-balken__spur">
            <span class="zt-speicher-balken__fuellung" style={{ width: `${(alt / max) * 100}%` }} />
            <span class="zt-speicher-balken__fuellung zt-speicher-balken__fuellung--mehr" style={{ width: `${((neuWert - alt) / max) * 100}%` }} />
          </span>
          <span class="zt-speicher-balken__wert mono">{neuWert} Bit</span>
        </div>
      </div>
      <div class="zt-summe">
        ({neuWert} − {alt}) ÷ {alt} · 100 =<b>{genau(prozent)} %</b>
      </div>
      <span class="zt-bild__hinweis">Orange: der Zuwachs. Er wird mit dem alten Balken verglichen, nicht mit dem neuen.</span>
    </>
  );
}

// ---------- Kapazität: dieselben Byte, gezählt in GB und in GiB ----------

const KAPAZITAETEN = [
  { wert: 16, text: '16 GB' },
  { wert: 64, text: '64 GB' },
  { wert: 512, text: '512 GB' },
  { wert: 4000, text: '4 TB' },
];

// Striche eines Lineals: alle `schritt` Einheiten (zu je `groesse` Byte) bis `byte`
function striche(byte, groesse, schritt) {
  const n = Math.floor(byte / (groesse * schritt) + 1e-9);
  return Array.from({ length: n + 1 }, (_, i) => ({ wert: i * schritt, links: ((i * schritt * groesse) / byte) * 100 }));
}

export function Kapazitaet() {
  const [gb, setGb] = useState(64);
  const byte = gb * 1e9;
  const tera = gb >= 1000;
  const [dez, bin, groesseDez, groesseBin] = tera ? ['TB', 'TiB', 1e12, 1024 ** 4] : ['GB', 'GiB', 1e9, GIB];
  const angabe = byte / groesseDez;
  const binaer = byte / groesseBin;
  const schritt = tera ? 1 : gb / 8;
  return (
    <>
      <Auswahl name="Herstellerangabe" optionen={KAPAZITAETEN} wert={gb} onWahl={setGb} />
      <div class="zt-speicher-lineal" aria-hidden="true">
        <div class="zt-speicher-lineal__skala zt-speicher-lineal__skala--oben">
          {striche(byte, groesseDez, schritt).map((s) => (
            <span key={s.wert} style={{ left: `${s.links}%` }}>
              <small class="mono">{z(s.wert)}</small>
            </span>
          ))}
        </div>
        <div class="zt-speicher-lineal__band" />
        <div class="zt-speicher-lineal__skala zt-speicher-lineal__skala--unten">
          {striche(byte, groesseBin, schritt).map((s) => (
            <span key={s.wert} style={{ left: `${s.links}%` }}>
              <small class="mono">{z(s.wert)}</small>
            </span>
          ))}
        </div>
        <div class="zt-speicher-lineal__legende">
          <span>oben in {dez} (1.000{hoch(tera ? 4 : 3)} Byte)</span>
          <span>unten in {bin} (1.024{hoch(tera ? 4 : 3)} Byte)</span>
        </div>
      </div>
      <Weg
        zeilen={[
          { name: 'Byte', rechnung: `${z(angabe)} · 1.000${hoch(tera ? 4 : 3)}`, ergebnis: `${z(byte)} Byte` },
          { name: bin, rechnung: `÷ 1.024${hoch(tera ? 4 : 3)}`, ergebnis: `${genau(binaer)} ${bin}`, hervor: true },
        ]}
      />
      <span class="zt-bild__hinweis">Dieselben Byte – nur ist ein {bin} größer als ein {dez}, darum passen weniger hinein.</span>
    </>
  );
}

// ---------- Vergleich: Bedarf gegen Speicherkapazität, beides in derselben Einheit ----------

export function Vergleich() {
  const [anzahl, setAnzahl] = useState(2600);
  const [karte, setKarte] = useState(16);
  const bedarf = 1920 * 1080 * 3 * anzahl;
  const kapazitaet = karte * 1e9;
  const max = Math.max(bedarf, kapazitaet);
  const passt = bedarf <= kapazitaet;
  const zeile = (name, byte, klasse) => (
    <div class="zt-speicher-balken__zeile">
      <span class="zt-speicher-balken__name">{name}</span>
      <span class="zt-speicher-balken__spur">
        <span class={`zt-speicher-balken__fuellung ${klasse}`} style={{ width: `${(byte / max) * 100}%` }} />
      </span>
      <span class="zt-speicher-balken__wert mono">
        {mit2(byte / GIB)} GiB
        <small>{mit2(byte / 1e9)} GB</small>
      </span>
    </div>
  );
  return (
    <>
      <div class="zt-speicher-regler">
        <Auswahl name="Full-HD-Bilder, 24 Bit" optionen={[1000, 2000, 2600, 3000].map((x) => ({ wert: x, text: z(x) }))} wert={anzahl} onWahl={setAnzahl} />
        <Auswahl name="Speicherkarte" optionen={[8, 16, 32].map((x) => ({ wert: x, text: `${x} GB` }))} wert={karte} onWahl={setKarte} />
      </div>
      <div class="zt-speicher-balken">
        {zeile('Bedarf', bedarf, passt ? 'zt-speicher-balken__fuellung--gut' : 'zt-speicher-balken__fuellung--fehler')}
        {zeile('Karte', kapazitaet, '')}
      </div>
      <p class={`zt-speicher-urteil ${passt ? 'zt-speicher-urteil--gut' : 'zt-speicher-urteil--fehler'}`} role="status">
        <Icon name={passt ? 'circle-check' : 'circle-x'} groesse={16} />
        {passt ? 'Die Karte reicht.' : 'Die Karte reicht nicht.'} {mit2(bedarf / GIB)} GiB {passt ? '≤' : '>'} {mit2(kapazitaet / GIB)} GiB
      </p>
    </>
  );
}
