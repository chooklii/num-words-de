<h1>num-words-de</h1>

Convert an number / integer to the equivalent word in the german language.

This Package is inspired by https://github.com/salmanm/num-words and extends the idea for the german language.

Note: This package currently only supports numbers not larger than 6 digits. Support for larger once will be added soon

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

```

# Usage

```js
const numToWord = require('num-words-de')

const convertedNumber = numToWord(1)
```

# Contributing

If you are able to detect an issue feel free to create an issue. Please add the input value when doing so.