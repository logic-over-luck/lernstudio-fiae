// Bilder zum Mitmachen für Bit, Byte und Präfixe (Rahmen im Unterricht: <Abbildung> aus lernsystem/bausteine.jsx;
// Stil: styles/zahlen-praefixe.css, Präfix zt-praefixe-). Jedes Bild liefert nur seinen Inhalt; gerechnet wird in ../rechnen.js.
//   Zeichen (ein Wort als Bytes) · Dreiergruppen (Komma springt je Präfix um drei Stellen) · Treppe (Stufen von 1.000 oder 1.024)
//   Familien (dezimal oder binär?) · GleicheMenge (GB ↔ GiB über Byte) · Takt (Hertz als Takte je Sekunde) · Rate (Mbit/s → MB/s)

import { Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Icon } from '../../../../ui/bausteine.jsx';
import { Segmente } from '../bausteine.jsx';
import { z, hoch, runde, leseZahl, dreiergruppen, umrechnen, praefixAbstand, zeichenBytes, BIN_EINHEITEN, DEZ_EINHEITEN } from '../rechnen.js';

const PRAEFIX = ['', 'k', 'M', 'G', 'T'];
const mit2 = (wert) => z(runde(wert, 2), 2);

// ---------- Zeichen: jedes Zeichen eines Wortes ist ein Byte ----------

export function Zeichen({ start = 'Hallo' }) {
  const [text, setText] = useState(start);
  const [entfernt, setEntfernt] = useState(false);
  const bytes = zeichenBytes(text);
  const n = bytes.length;
  const eingabe = (e) => {
    const roh = e.currentTarget.value;
    const sauber = [...roh].filter((c) => c.codePointAt(0) < 128).join('').slice(0, 8);
    setEntfernt(sauber.length < [...roh].slice(0, 8).length);
    setText(sauber);
    e.currentTarget.value = sauber;
  };
  return (
    <>
      <label class="zt-bild__eingabe">
        Wort
        <input class="feld feld--mono" value={text} maxLength={8} spellcheck={false} autoComplete="off" aria-label="Wort mit bis zu 8 Zeichen" onInput={eingabe} />
      </label>
      <div class="zt-praefixe-zeichen">
        {bytes.map((b, i) => (
          <div key={i} class="zt-praefixe-byte">
            <b class="mono">{b.zeichen === ' ' ? '␣' : b.zeichen}</b>
            <span class="mono">
              {b.bits.slice(0, 4)} {b.bits.slice(4)}
            </span>
          </div>
        ))}
      </div>
      <p class="zt-praefixe-summe mono">
        {n} Zeichen = {n} Byte = {n} · 8 = <b>{z(n * 8)} Bit</b>
      </p>
      <span class={`zt-bild__hinweis ${entfernt ? 'zt-bild__hinweis--warn' : ''}`}>
        {entfernt ? 'Umlaute und ß brauchen mehr als ein Byte – hier gehen nur A–Z, a–z, Ziffern und Satzzeichen.' : 'Tipp ein eigenes Wort ein (bis 8 Zeichen). Jedes Zeichen belegt 8 Bit.'}
      </span>
    </>
  );
}

// ---------- Dreiergruppen: jede Gruppe ist eine Präfixstufe, das Komma springt um drei Stellen ----------

export function Dreiergruppen({ wert, einheit, start = 0 }) {
  const gruppen = dreiergruppen(wert);
  const n = gruppen.length;
  const [stufe, setStufe] = useState(start);
  const stufen = Array.from({ length: Math.min(n, PRAEFIX.length) }, (_, s) => s);
  return (
    <>
      <div class="zt-praefixe-gruppen mono" role="img" aria-label={`${z(wert)} ${einheit}, Komma vor Stufe ${stufe}`}>
        {gruppen.map((g, i) => {
          const r = n - 1 - i;
          const komma = r === stufe && stufe > 0;
          return (
            <Fragment key={i}>
              <span class={`zt-praefixe-gruppe ${r < stufe ? 'zt-praefixe-gruppe--hinten' : ''}`}>
                <b>{g}</b>
                <small>{r ? PRAEFIX[r] : einheit}</small>
              </span>
              {r > 0 && <span class={`zt-praefixe-trenner ${komma ? 'zt-praefixe-trenner--komma' : ''}`}>{komma ? ',' : '.'}</span>}
            </Fragment>
          );
        })}
      </div>
      <p class="zt-praefixe-summe mono">
        = <b>{z(wert / 1000 ** stufe)} {PRAEFIX[stufe]}{einheit}</b>
      </p>
      <Segmente optionen={stufen.map((s) => ({ wert: s, text: `${PRAEFIX[s]}${einheit}` }))} wert={stufe} onWahl={setStufe} label="Einheit wählen" />
      <span class="zt-bild__hinweis">Wähl eine Einheit: Jede Stufe rückt das Komma um eine Dreiergruppe nach links.</span>
    </>
  );
}

// ---------- Treppe: Byte, k, M, G, T – jede Stufe das 1.000- oder 1.024-Fache der vorigen ----------

export function Treppe({ basis, start = 1 }) {
  const binaer = basis === 1024;
  const einheiten = binaer ? BIN_EINHEITEN : DEZ_EINHEITEN;
  const b = binaer ? '1.024' : '1.000';
  const [stufe, setStufe] = useState(start);
  return (
    <>
      <div class="zt-praefixe-treppe" role="group" aria-label="Stufen der Präfixe">
        {[4, 3, 2, 1, 0].map((s) => (
          <button
            key={s}
            type="button"
            class={`zt-praefixe-stufe ${s === stufe ? 'zt-praefixe-stufe--an' : ''}`}
            style={{ '--stufe': s }}
            aria-pressed={s === stufe}
            onClick={() => setStufe(s)}
          >
            <b class="mono">1 {einheiten[s]}</b>
            <span class="mono">{s ? `= ${b} ${einheiten[s - 1]}` : 'Grundeinheit'}</span>
          </button>
        ))}
      </div>
      <p class="zt-praefixe-summe mono">
        1 {einheiten[stufe]}
        {stufe > 0 && (
          <>
            {' '}
            = {b}
            {stufe > 1 && hoch(stufe)} Byte = {binaer ? `2${hoch(10 * stufe)}` : `10${hoch(3 * stufe)}`} Byte
          </>
        )}
        <br />= <b>{z(basis ** stufe)} Byte</b>
      </p>
      <span class="zt-bild__hinweis">
        Tipp eine Stufe an. Eine Stufe nach unten: · {b}, eine nach oben: ÷ {b}.
      </span>
    </>
  );
}

// ---------- Familien: dezimal oder binär? Erst überlegen, dann aufdecken ----------

const FAELLE = [
  { text: 'Größe einer Datei', binaer: true, bsp: '4,5 MiB' },
  { text: 'Angabe auf der Verpackung einer SSD', binaer: false, bsp: '1 TB' },
  { text: 'Speicherbedarf einer Bildersammlung in der Prüfung', binaer: true, bsp: '1,82 TiB' },
  { text: 'Geschwindigkeit eines Internetanschlusses', binaer: false, bsp: '250 Mbit/s' },
  { text: 'Taktfrequenz eines Prozessors', binaer: false, bsp: '3,4 GHz' },
];

export function Familien() {
  const [offen, setOffen] = useState([]);
  return (
    <>
      <ul class="zt-praefixe-familien">
        {FAELLE.map((f, i) => {
          const da = offen.includes(i);
          return (
            <li key={i}>
              <button type="button" class={`zt-praefixe-fall ${da ? `zt-praefixe-fall--${f.binaer ? 'bin' : 'dez'}` : ''}`} aria-expanded={da} onClick={() => setOffen(da ? offen.filter((x) => x !== i) : [...offen, i])}>
                <span>{f.text}</span>
                <span class="zt-praefixe-fall__antwort">
                  {da ? (
                    <>
                      <b>{f.binaer ? 'binär · 1.024' : 'dezimal · 1.000'}</b> <span class="mono">{f.bsp}</span>
                    </>
                  ) : (
                    <Icon name="eye" groesse={15} />
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <span class="zt-bild__hinweis">Erst überlegen, dann antippen.</span>
    </>
  );
}

// ---------- Gleiche Menge: dieselbe Bytezahl in dezimaler und binärer Einheit ----------

export function GleicheMenge({ wert, stufe: startStufe = 3, richtung = 'dez' }) {
  const [eingabe, setEingabe] = useState(String(wert).replace('.', ','));
  const [stufe, setStufe] = useState(startStufe);
  const vonDez = richtung === 'dez';
  const [von, nach] = vonDez ? [DEZ_EINHEITEN[stufe], BIN_EINHEITEN[stufe]] : [BIN_EINHEITEN[stufe], DEZ_EINHEITEN[stufe]];
  const [bVon, bNach] = vonDez ? ['1.000', '1.024'] : ['1.024', '1.000'];
  const w = leseZahl(eingabe);
  const ok = w !== null && w >= 0;
  const byte = ok ? w * (vonDez ? 1000 : 1024) ** stufe : 0;
  const erg = ok ? umrechnen(w, von, nach) : 0;
  const abstand = praefixAbstand(stufe);
  return (
    <>
      <div class="zt-bild__eingabe zt-praefixe-wahl">
        <input class="feld feld--mono" value={eingabe} spellcheck={false} autoComplete="off" aria-label={`Wert in ${von}`} onInput={(e) => setEingabe(e.currentTarget.value)} />
        <Segmente optionen={[1, 2, 3, 4].map((s) => ({ wert: s, text: (vonDez ? DEZ_EINHEITEN : BIN_EINHEITEN)[s] }))} wert={stufe} onWahl={setStufe} label="Einheit" />
      </div>
      {ok ? (
        <div class="zt-praefixe-weg mono">
          <span class="zt-praefixe-weg__nr">1</span>
          <span>
            {z(w)} {von} · {bVon}
            {hoch(stufe)} = <b>{z(byte)} Byte</b>
          </span>
          <span class="zt-praefixe-weg__nr">2</span>
          <span>
            {z(byte)} Byte ÷ {bNach}
            {hoch(stufe)} = <b class="zt-praefixe-weg__erg">{mit2(erg)} {nach}</b>
          </span>
        </div>
      ) : (
        <span class="zt-bild__hinweis zt-bild__hinweis--warn">Bitte eine Zahl eingeben.</span>
      )}
      <div class="zt-praefixe-balken" aria-label="Größe der beiden Einheiten im Vergleich">
        <span class="zt-praefixe-balken__name mono">1 {DEZ_EINHEITEN[stufe]}</span>
        <span class="zt-praefixe-balken__spur">
          <span class="zt-praefixe-balken__wert zt-praefixe-balken__wert--dez" style={{ width: `${100 / (1 + abstand / 100)}%` }} />
        </span>
        <span class="zt-praefixe-balken__name mono">1 {BIN_EINHEITEN[stufe]}</span>
        <span class="zt-praefixe-balken__spur">
          <span class="zt-praefixe-balken__wert zt-praefixe-balken__wert--bin" style={{ width: '100%' }} />
        </span>
      </div>
      <span class="zt-bild__hinweis">
        1 {BIN_EINHEITEN[stufe]} ist {z(runde(abstand, 1), 1)} % größer als 1 {DEZ_EINHEITEN[stufe]}. Größere Einheit → kleinere Zahl, die Bytezahl bleibt gleich.
      </span>
    </>
  );
}

// ---------- Takt: Hertz = Takte je Sekunde ----------

const BREITE = 300;
const HOCH = 22;
const TIEF = 62;

export function Takt({ start = 4 }) {
  const [f, setF] = useState(start);
  const p = BREITE / f;
  const x = (t) => 10 + t;
  let weg = `M ${x(0)} ${TIEF}`;
  for (let k = 0; k < f; k++) weg += ` L ${x(k * p)} ${HOCH} L ${x(k * p + p / 2)} ${HOCH} L ${x(k * p + p / 2)} ${TIEF} L ${x((k + 1) * p)} ${TIEF}`;
  return (
    <>
      <svg class="zt-praefixe-takt" viewBox="0 0 320 96" role="img" aria-label={`${f} Takte in einer Sekunde`}>
        <line class="zt-praefixe-takt__achse" x1={x(0)} y1={TIEF + 10} x2={x(BREITE)} y2={TIEF + 10} />
        <line class="zt-praefixe-takt__achse" x1={x(0)} y1={TIEF + 6} x2={x(0)} y2={TIEF + 14} />
        <line class="zt-praefixe-takt__achse" x1={x(BREITE)} y1={TIEF + 6} x2={x(BREITE)} y2={TIEF + 14} />
        <text class="zt-praefixe-takt__text" x={x(0)} y={TIEF + 28} text-anchor="start">
          0 s
        </text>
        <text class="zt-praefixe-takt__text" x={x(BREITE)} y={TIEF + 28} text-anchor="end">
          1 s
        </text>
        <path key={f} class="zt-praefixe-takt__linie" d={weg} />
        {Array.from({ length: f }, (_, k) => (
          <text key={k} class="zt-praefixe-takt__nr" x={x(k * p + p / 4)} y={HOCH - 7} text-anchor="middle">
            {k + 1}
          </text>
        ))}
      </svg>
      <p class="zt-praefixe-summe mono">
        {f} {f === 1 ? 'Takt' : 'Takte'} in 1 Sekunde = <b>{f} Hz</b>
      </p>
      <Segmente optionen={[1, 2, 4, 8].map((n) => ({ wert: n, text: `${n} Hz` }))} wert={f} onWahl={setF} label="Frequenz" />
      <span class="zt-bild__hinweis">Ein Prozessor mit 3,4 GHz schafft in derselben Sekunde 3.400.000.000 Takte.</span>
    </>
  );
}

// ---------- Rate: Mbit/s → bit/s → Byte/s → MB/s ----------

const RATEN = [16, 50, 100, 250, 1000];

export function Rate({ start = 100 }) {
  const [rate, setRate] = useState(start);
  const bit = rate * 1e6;
  return (
    <>
      <Segmente optionen={RATEN.map((r) => ({ wert: r, text: `${z(r)} Mbit/s` }))} wert={rate} onWahl={setRate} label="Übertragungsrate" />
      <div class="zt-praefixe-acht" aria-hidden="true">
        <span class="zt-praefixe-acht__bits">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} />
          ))}
        </span>
        <small>8 Bit</small>
        <Icon name="arrow-right" groesse={15} />
        <span class="zt-praefixe-acht__byte" />
        <small>1 Byte</small>
      </div>
      <div class="zt-praefixe-weg mono">
        <span class="zt-praefixe-weg__nr">1</span>
        <span>
          {z(rate)} Mbit/s = <b>{z(bit)} bit/s</b>
        </span>
        <span class="zt-praefixe-weg__nr">2</span>
        <span>
          ÷ 8 = <b>{z(bit / 8)} Byte/s</b>
        </span>
        <span class="zt-praefixe-weg__nr">3</span>
        <span>
          = <b class="zt-praefixe-weg__erg">{z(rate / 8)} MB/s</b>
        </span>
      </div>
      <span class="zt-bild__hinweis">Je 8 Bit werden zu einem Byte – die Zahl schrumpft auf ein Achtel.</span>
    </>
  );
}
