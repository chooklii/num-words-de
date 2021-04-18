<h1>num-words-de</h1>

Convert an number / integer to the equivalent word in the german language.

_Zahlen in den das entsprechende Zahlenwort der deutschen Sprache konvertieren_

This Package is inspired by https://github.com/salmanm/num-words and extends the idea for the german language.

Note: This package does not support numbers larger than 12 digits. If a higher number is given it will return the input value.

# Install

```js
npm i num-words-de
```

# Example

```js
1 -> Eins
10 -> Zehn
13 -> Dreizehn
1000 -> Eintausend
12345 -> Zwölftausenddreihundertvierundfünfzig
1345000000 -> Eine Milliarde dreihundertfünfundvierzig Millionen
```

# Usage

```js
const numToWord = require('num-words-de')

or

import {numToWord} from "num-words-de"

numToWord(1) // eins
```

# Parameter

The params are taken within a params-object. The object contains following parameters

```
{
    uppercase: true,
    indefinite_eine: false,
    indefinite_einer: false,
    indefinite_eines: false,
    indefinite_einem: false
}
```

`uppercase (default true)` -> If return string is upper or lowercase

```js
numToWord(10) // Zehn
numToWord(10, {uppercase:false}) // zehn
```

Due to some special cases with _Indefinitivpronomen_ following cases for the number _one_ are supported. If multiple of these values are true they are taken in the bottom order and the first one will be executed.

`indefinite_eine (default false)` -> If number one should be converted into _eine_

`indefinite_einer (default false)` -> If number one should be converted into _einer_

`indefinite_eines (default false)` -> If number one should be converted into _eines_

`indefinite_einem (default false)` -> If number one should be converted into _einem_

```js
numToWord(1) // Eins
numToWord(10, {indefinite_eine:true}) // Zehn
numToWord(1, {indefinite_eine:true}) // Eine
numToWord(1, {indefinite_einer:true}) // Einer
numToWord(1, {indefinite_eines:true}) // Eines
numToWord(1, {indefinite_einem:true}) // Einem
numToWord(1, {indefinite_einem:true}) // Einem
numToWord(1, {indefinite_einem:true, uppercase:false}) // einem
```



# Contributing

If you are able to detect an issue feel free to create an issue. Please add the input value when doing so.
