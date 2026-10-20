// Lernsystem (trainer/lernsystem/): Prüfer für Zwischenfragen und die Struktur-Prüfung eines Unterrichts.

import test from 'node:test';
import assert from 'node:assert/strict';
import { binaerText, hexText, ganzeZahl, istZahl, istBinaer, istHex, istText } from '../src/bereiche/trainer/lernsystem/pruefen.js';
import { pruefeUnterricht, teilZurArt, artenVon } from '../src/bereiche/trainer/lernsystem/struktur.js';

test('Eingaben lesen', () => {
  assert.equal(binaerText('0011 0100'), '110100');
  assert.equal(binaerText('0b0'), '0');
  assert.equal(binaerText('12'), null);
  assert.equal(hexText('0xff'), 'FF');
  assert.equal(hexText('00AC'), 'AC');
  assert.equal(hexText('2Ah'), '2A');
  assert.equal(hexText('G1'), null);
  assert.equal(ganzeZahl('1.024'), 1024);
  assert.equal(ganzeZahl(' 255 '), 255);
  assert.equal(ganzeZahl('2,5'), null);
});

test('Prüfer: richtig, gezielter Hinweis, falsch', () => {
  const p = istZahl(5.93, { 6: 'Zu früh gerundet.' }, 0.005);
  assert.equal(p('5,93'), true);
  assert.equal(p('5,93 MiB'), true);
  assert.equal(p('5.93'), true);
  assert.equal(p('6'), 'Zu früh gerundet.');
  assert.equal(p('7'), false);
  assert.match(p('abc'), /Zahl/);
  assert.equal(istZahl(1024)('1.024'), true);
  assert.equal(istBinaer('110100')('0011 0100'), true);
  assert.match(istBinaer('110100')('0010 1100'), /spiegelverkehrt/);
  assert.equal(istHex('AC', { CA: 'Reihenfolge!' })('ca'), 'Reihenfolge!');
  assert.equal(istHex('FF')('0xff'), true);
  assert.equal(istText(['rwxr-x---'])('RWX R-X ---'), true);
  assert.equal(istText(['gerade'], { ungerade: 'Zähl die Einsen.' })('Ungerade'), 'Zähl die Einsen.');
});

test('Struktur-Prüfung findet Regelverstöße', () => {
  const kapitel = [
    { id: 'a', name: 'A', worum: 'w', kurz: 'k', braucht: [], lernziele: ['x'], pruefung: ['y'], begriffe: ['eins'], teile: [{ id: 't1', titel: 'T', arten: ['r1'] }] },
    { id: 'b', name: 'B', worum: 'w', kurz: 'k', braucht: ['c'], lernziele: ['x'], pruefung: [], begriffe: ['zwei'], teile: [{ id: 't2', titel: 'T' }] },
  ];
  const begriffe = { eins: { wort: 'Eins', glossar: 'Eins' }, zwei: { wort: 'Zwei', glossar: 'Fehlt' } };
  const quelltext = "t1: () => [<SoHeisstDas begriff=\"eins\">…</SoHeisstDas>, <B id=\"drei\" />],\n";
  const fehler = pruefeUnterricht({ kapitel, begriffe, arten: [{ id: 'r1' }, { id: 'r2' }], glossar: new Set(['Eins']), quelltext });
  for (const erwartet of [/braucht c/, /Prüfungssatz/, /Teil t2: kein Inhalt/, /r2: wird von 0/, /„Fehlt“ fehlt im Glossar/, /zwei: steht im Kapitelkopf/, /<B id="drei">/])
    assert.ok(fehler.some((f) => erwartet.test(f)), `erwartet: ${erwartet}\n${fehler.join('\n')}`);
  assert.equal(teilZurArt(kapitel, 'r1').teil.id, 't1');
  assert.deepEqual(artenVon(kapitel[0]), ['r1']);
});
