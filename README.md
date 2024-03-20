# IConvert

Units conversion library.

## Temperature

Celsius, Centigrade,Fahrenheit, Kelvin

## Distance

Millimeters, Centimeters, Decimeters, Meters, Kilometers
Inches, Feet, Yards, Miles

## Usage

```js
import IConvert from "iconvert";

console.log(IConvert(25).millimeters().toCentimeters()); // 2.5

console.log(IConvert(1).centimeters().toMillimeters()); // 10

console.log(IConvert(12).inches().toFeet()); // 1

console.log(IConvert(1).meters().toYards()); // 1.09361

console.log(IConvert(10).centigrade().toFahrenheit()); // 50
```

## WIP

Planned to add more units.

---

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NPM Package](https://img.shields.io/npm/v/iconvert?label=npm)](https://www.npmjs.com/package/iconvert)
