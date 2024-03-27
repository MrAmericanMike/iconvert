# IConvert

Units conversion library.

## Temperature

Celsius, Centigrade, Fahrenheit, Kelvin

## Distance

Millimeters, Centimeters, Decimeters, Meters, Kilometers, Inches, Feet, Yards, Miles

## Weight

Grams, Kilograms, Pounds, Ounces

## Usage

```js
import IConvert from "iconvert";

console.log(IConvert(25).millimeters().toCentimeters()); // 2.5

console.log(IConvert(1).centimeters().toMillimeters()); // 10

console.log(IConvert(12).inches().toFeet()); // 1

console.log(IConvert(1).meters().toYards()); // 1.09361

console.log(IConvert(10).centigrade().toFahrenheit()); // 50

console.log(IConvert(1).kilograms().toPounds()); // 2.20462
```

## WIP

Planned to add more units.

---

## Issues, Ideas, Suggestions, Questions

Open an [issue](https://github.com/MrAmericanMike/iconvert/issues) we will take a look at it.

---

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NPM Package](https://img.shields.io/npm/v/iconvert?label=npm)](https://www.npmjs.com/package/iconvert)
