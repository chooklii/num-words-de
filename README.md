# num-words-de

> Convert numbers to German words | Zahlen in deutsche Zahlwörter umwandeln

[![npm version](https://img.shields.io/npm/v/num-words-de)](https://www.npmjs.com/package/num-words-de)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Inspired by [num-words](https://github.com/salmanm/num-words).

- ✅ TypeScript support
- ✅ Numbers up to 12 digits (billions / Milliarden)
- ✅ German indefinite article forms (*ein, eine, einer, eines, einem*)

---

# 🇬🇧 English

## Description

`num-words-de` converts numbers (up to 12 digits) into their German word representation. TypeScript is supported.

> Numbers with more than 12 digits are returned unchanged.

## Installation

```bash
npm i num-words-de
```

## Examples

| Input          | Output                                                   |
| -------------- | -------------------------------------------------------- |
| `1`            | Eins                                                     |
| `10`           | Zehn                                                     |
| `13`           | Dreizehn                                                 |
| `1000`         | Eintausend                                               |
| `22222`        | Zweiundzwanzigtausendzweihundertzweiundzwanzig           |
| `1345000000`   | Eine Milliarde dreihundertfünfundvierzig Millionen       |

## Usage

```js
// CommonJS
const { numToWord } = require('num-words-de');
numToWord(1); // "Eins"

// ES Module / TypeScript
import { numToWord } from 'num-words-de';
numToWord(1); // "Eins"
```

## Parameters

`numToWord(number, params?)` – The second argument is an optional object:

| Parameter          | Type      | Default | Description                                                              |
| ------------------ | --------- | ------- | ------------------------------------------------------------------------ |
| `uppercase`        | `boolean` | `true`  | Capitalize first letter (`true`) or return lowercase (`false`)           |
| `indefinite_eine`  | `boolean` | `false` | Return *eine* for the number 1 (feminine nominative/accusative)          |
| `indefinite_einer` | `boolean` | `false` | Return *einer* for the number 1 (feminine genitive/dative)               |
| `indefinite_eines` | `boolean` | `false` | Return *eines* for the number 1 (neuter/masculine genitive)              |
| `indefinite_einem` | `boolean` | `false` | Return *einem* for the number 1 (masculine/neuter dative)                |
| `indefinite_ein`   | `boolean` | `false` | Return *ein* for the number 1 (neuter nominative/accusative)             |

> The indefinite forms only affect the number **1**. For all other numbers they are ignored.

```js
numToWord(1);                                             // "Eins"
numToWord(10, { uppercase: false });                      // "zehn"
numToWord(1, { indefinite_eine: true });                  // "Eine"
numToWord(1, { indefinite_einer: true });                 // "Einer"
numToWord(1, { indefinite_eines: true });                 // "Eines"
numToWord(1, { indefinite_einem: true });                 // "Einem"
numToWord(1, { indefinite_ein: true });                   // "Ein"
numToWord(1, { indefinite_einem: true, uppercase: false }); // "einem"
numToWord(3, { indefinite_eine: true });                  // "Drei"
```

## Error Handling

- Non-numeric input returns the original value and logs `console.error`.
- Numbers > 12 digits return the original value and logs `console.error`.

No exceptions are thrown – displaying the input is preferred over crashing the application.

## Contributing

Found a bug? Feel free to open an [Issue](https://github.com/chooklii/num-words-de/issues) – please include the input value.

---

# 🇩🇪 Deutsch

## Beschreibung

`num-words-de` wandelt Zahlen (bis zu 12 Stellen) in das entsprechende deutsche Zahlenwort um. TypeScript wird unterstützt.

> Zahlen mit mehr als 12 Stellen werden unverändert als Zahl zurückgegeben.

## Installation

```bash
npm i num-words-de
```

## Beispiele

| Eingabe        | Ausgabe                                                  |
| -------------- | -------------------------------------------------------- |
| `1`            | Eins                                                     |
| `10`           | Zehn                                                     |
| `13`           | Dreizehn                                                 |
| `1000`         | Eintausend                                               |
| `22222`        | Zweiundzwanzigtausendzweihundertzweiundzwanzig           |
| `1345000000`   | Eine Milliarde dreihundertfünfundvierzig Millionen       |

## Verwendung

```js
// CommonJS
const { numToWord } = require('num-words-de');
numToWord(1); // "Eins"

// ES Module / TypeScript
import { numToWord } from 'num-words-de';
numToWord(1); // "Eins"
```

## Parameter

`numToWord(number, params?)` – Das zweite Argument ist ein optionales Objekt:

| Parameter          | Typ       | Standard | Beschreibung                                                    |
| ------------------ | --------- | -------- | --------------------------------------------------------------- |
| `uppercase`        | `boolean` | `true`   | Erster Buchstabe groß (`true`) oder alles klein (`false`)       |
| `indefinite_eine`  | `boolean` | `false`  | Zahl 1 wird zu *eine* (z. B. „eine Katze")                     |
| `indefinite_einer` | `boolean` | `false`  | Zahl 1 wird zu *einer* (z. B. „einer von vielen")              |
| `indefinite_eines` | `boolean` | `false`  | Zahl 1 wird zu *eines* (z. B. „eines Tages")                   |
| `indefinite_einem` | `boolean` | `false`  | Zahl 1 wird zu *einem* (z. B. „mit einem Stück")               |
| `indefinite_ein`   | `boolean` | `false`  | Zahl 1 wird zu *ein* (z. B. „ein Haus")                        |

> Die Indefinitformen wirken sich nur auf die Zahl **1** aus. Bei anderen Zahlen werden sie ignoriert.

```js
numToWord(1);                                             // "Eins"
numToWord(10, { uppercase: false });                      // "zehn"
numToWord(1, { indefinite_eine: true });                  // "Eine"
numToWord(1, { indefinite_einer: true });                 // "Einer"
numToWord(1, { indefinite_eines: true });                 // "Eines"
numToWord(1, { indefinite_einem: true });                 // "Einem"
numToWord(1, { indefinite_ein: true });                   // "Ein"
numToWord(1, { indefinite_einem: true, uppercase: false }); // "einem"
numToWord(3, { indefinite_eine: true });                  // "Drei"
```

## Fehlerbehandlung

- Nicht-numerische Eingaben geben den Originalwert zurück und loggen `console.error`.
- Zahlen > 12 Stellen geben den Originalwert zurück und loggen `console.error`.

Es werden keine Exceptions geworfen – die Eingabe wird bevorzugt angezeigt, statt die Anwendung abstürzen zu lassen.

## Mitwirken

Fehler gefunden? Erstelle gerne ein [Issue](https://github.com/chooklii/num-words-de/issues) – bitte den Eingabewert angeben.

---

## License / Lizenz

[MIT](LICENSE) © Chooklii
