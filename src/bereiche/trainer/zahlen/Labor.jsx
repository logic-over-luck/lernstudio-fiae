// Zahlen-Labor (Reiter „Visualisieren“ der Zahlensysteme): eine Zahl in allen vier Systemen auf einmal.
// Eingabe in einer wählbaren Basis, Bits zum Antippen, +1/−1 und ·2/÷2 zum Beobachten. Die Bits lassen sich in
// Vierer- oder Dreiergruppen teilen; jede Gruppe hat dieselbe Farbe wie ihre Hex- bzw. Oktalziffer.

import { useState } from 'preact/hooks';
import { Icon, Knopf } from '../../../ui/bausteine.jsx';
import { z, hoch, bitGruppen, leseBasis } from './rechnen.js';
import { Segmente } from './bausteine.jsx';
import { GRUPPEN_FARBEN } from './bilder/zahlensysteme.jsx';

const MAX = 0xffff;
const BASEN = [
  { basis: 10, name: 'Dezimal' },
  { basis: 2, name: 'Binär' },
  { basis: 8, name: 'Oktal' },
  { basis: 16, name: 'Hex' },
];
const UNGUELTIG = { 10: 'keine Dezimalzahl', 2: 'keine Binärzahl (nur 0 und 1)', 8: 'keine Oktalzahl (nur 0 bis 7)', 16: 'keine Hexadezimalzahl (0 bis 9, A bis F)' };

const alsText = (n, basis) => n.toString(basis).toUpperCase();

export function ZahlenLabor() {
  const [n, setN] = useState(200);
  const [basis, setBasis] = useState(10);
  const [text, setText] = useState('200');
  const [breite, setBreite] = useState(4);
  const [fehler, setFehler] = useState(null);

  const setze = (wert) => {
    setN(wert);
    setText(alsText(wert, basis));
    setFehler(null);
  };
  const tippe = (eingabe) => {
    setText(eingabe);
    const wert = leseBasis(eingabe, basis);
    if (wert === null) setFehler(eingabe.trim() ? `Das ist ${UNGUELTIG[basis]}.` : 'Gib eine Zahl ein.');
    else if (wert > MAX) setFehler('Das Labor zeigt Zahlen bis 65.535 (16 Bit, hex FFFF).');
    else {
      setFehler(null);
      setN(wert);
    }
  };
  const waehleBasis = (b) => {
    setBasis(b);
    setText(alsText(n, b));
    setFehler(null);
    // Oktal liest man in Dreiergruppen, Hex in Vierergruppen
    if (b === 8) setBreite(3);
    if (b === 16) setBreite(4);
  };

  const gruppen = bitGruppen(n, breite, 8);
  const bitzahl = gruppen.length * breite;
  const farbe = (gi) => GRUPPEN_FARBEN[(gruppen.length - 1 - gi) % GRUPPEN_FARBEN.length];
  const noetig = n ? n.toString(2).length : 1;
  const zerlegung = [...n.toString(2)].map((b, i, alle) => (b === '1' ? 2 ** (alle.length - 1 - i) : 0)).filter(Boolean);
  const ziffernFarbig = (b) => (b === (breite === 4 ? 16 : 8) ? gruppen.map((g, gi) => ({ c: g.ziffer, farbe: farbe(gi) })) : null);

  const zeile = {
    10: (
      <>
        <span class="zt-labor__zahl">{z(n)}</span>
        {zerlegung.length > 1 && <span class="zt-labor__zerlegung">= {zerlegung.map((x) => z(x)).join(' + ')}</span>}
      </>
    ),
    2: (
      <div class="zt-labor__bits">
        {gruppen.map((g, gi) => (
          <div key={gi} class={`zt-labor__gruppe zt-gruppe--${farbe(gi)}`}>
            {[...g.bits].map((b, bi) => {
              const pos = bitzahl - 1 - (gi * breite + bi);
              return (
                <div key={bi} class="zt-labor__bit">
                  <span class="zt-bits__potenz">2{hoch(pos)}</span>
                  <button type="button" class={`zt-bit ${b === '1' ? `zt-bit--${farbe(gi)}` : ''}`} aria-pressed={b === '1'} aria-label={`Bit ${z(2 ** pos)}`} disabled={pos > 15} onClick={() => setze(n ^ (2 ** pos))}>
                    {b}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    ),
  };
  for (const b of [8, 16]) {
    const farbig = ziffernFarbig(b);
    zeile[b] = (
      <span class="zt-labor__zahl">
        {farbig
          ? farbig.map((x, i) => (
              <span key={i} class={`zt-labor__ziffer--${x.farbe}`}>
                {x.c}
              </span>
            ))
          : alsText(n, b)}
      </span>
    );
  }

  return (
    <div class="zt-labor">
      <section class="flaeche zt-labor__steuerung" aria-label="Zahl eingeben">
        <div class="zt-labor__reihe">
          <Segmente optionen={BASEN.map((x) => ({ wert: String(x.basis), text: x.name }))} wert={String(basis)} onWahl={(w) => waehleBasis(Number(w))} label="Eingabe als" />
        </div>
        <div class="zt-labor__reihe">
          <input
            class={`feld feld--mono zt-labor__feld ${fehler ? 'feld--falsch' : ''}`}
            value={text}
            spellcheck={false}
            autoComplete="off"
            aria-label={`Zahl als ${BASEN.find((x) => x.basis === basis).name}`}
            onInput={(e) => tippe(e.currentTarget.value)}
          />
          <div class="zt-labor__knoepfe" role="group" aria-label="Zahl verändern">
            <Knopf groesse="s" disabled={n <= 0} onClick={() => setze(n - 1)}>
              − 1
            </Knopf>
            <Knopf groesse="s" disabled={n >= MAX} onClick={() => setze(n + 1)}>
              + 1
            </Knopf>
            <Knopf groesse="s" disabled={n * 2 > MAX} onClick={() => setze(n * 2)} title="Alle Bits rücken eine Stelle nach links">
              · 2
            </Knopf>
            <Knopf groesse="s" disabled={n <= 0} onClick={() => setze(Math.floor(n / 2))} title="Alle Bits rücken eine Stelle nach rechts, das rechte fällt weg">
              ÷ 2
            </Knopf>
          </div>
        </div>
        <p class={`zt-labor__info ${fehler ? 'zt-labor__info--fehler' : ''}`} role="status">
          <Icon name={fehler ? 'triangle-alert' : 'info'} groesse={14} />
          {fehler ?? (
            <span>
              Braucht <strong>{noetig} Bit</strong>
              {noetig <= 8 ? ', passt in 1 Byte' : `, also ${Math.ceil(noetig / 8)} Byte`} · mit {noetig} Bit geht es bis {z(2 ** noetig - 1)}
              {n % 2 === 0 ? ' · gerade: das rechte Bit ist 0' : ' · ungerade: das rechte Bit ist 1'}
            </span>
          )}
        </p>
      </section>

      <section class={`flaeche zt-labor__tafel ${fehler ? 'zt-labor__tafel--blass' : ''}`} aria-label="Die Zahl in allen Systemen">
        <div class="zt-labor__kopf">
          <span class="ueberschrift-klein">Bits gruppieren</span>
          <Segmente
            optionen={[
              { wert: '4', text: 'Vierer → Hex' },
              { wert: '3', text: 'Dreier → Oktal' },
            ]}
            wert={String(breite)}
            onWahl={(w) => setBreite(Number(w))}
            label="Bits gruppieren"
          />
        </div>
        <dl class="zt-labor__zeilen">
          {BASEN.map((x) => (
            <div key={x.basis} class={`zt-labor__zeile ${x.basis === basis ? 'zt-labor__zeile--eingabe' : ''}`}>
              <dt>
                {x.name}
                <small>Basis {x.basis}</small>
              </dt>
              <dd>{zeile[x.basis]}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
