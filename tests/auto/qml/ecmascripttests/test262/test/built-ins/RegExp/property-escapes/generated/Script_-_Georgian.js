// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Georgian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0010C7,
    0x0010CD,
    0x002D27,
    0x002D2D
  ],
  ranges: [
    [0x0010A0, 0x0010C5],
    [0x0010D0, 0x0010FA],
    [0x0010FC, 0x0010FF],
    [0x002D00, 0x002D25]
  ]
});
testPropertyEscapes(
  /^\p{Script=Georgian}+$/u,
  matchSymbols,
  "\\p{Script=Georgian}"
);
testPropertyEscapes(
  /^\p{Script=Geor}+$/u,
  matchSymbols,
  "\\p{Script=Geor}"
);
testPropertyEscapes(
  /^\p{sc=Georgian}+$/u,
  matchSymbols,
  "\\p{sc=Georgian}"
);
testPropertyEscapes(
  /^\p{sc=Geor}+$/u,
  matchSymbols,
  "\\p{sc=Geor}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0010C6,
    0x0010FB,
    0x002D26
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00109F],
    [0x0010C8, 0x0010CC],
    [0x0010CE, 0x0010CF],
    [0x001100, 0x002CFF],
    [0x002D28, 0x002D2C],
    [0x002D2E, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Georgian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Georgian}"
);
testPropertyEscapes(
  /^\P{Script=Geor}+$/u,
  nonMatchSymbols,
  "\\P{Script=Geor}"
);
testPropertyEscapes(
  /^\P{sc=Georgian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Georgian}"
);
testPropertyEscapes(
  /^\P{sc=Geor}+$/u,
  nonMatchSymbols,
  "\\P{sc=Geor}"
);
