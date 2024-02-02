// sum.test.js
import { expect, test } from "vitest";
import IConvert from "./main";

// CENTIGRADE / CELSIUS to FAHRENHEIT
test("Centigrade/Celsius to Fahrenheit", () => {
	expect(IConvert(10).centigrade().toFahrenheit()).toBeCloseTo(50);
	expect(IConvert(10).celsius().toFahrenheit()).toBeCloseTo(50);
	expect(IConvert(-40).centigrade().toFahrenheit()).toBeCloseTo(-40);
	expect(IConvert(-40).celsius().toFahrenheit()).toBeCloseTo(-40);
});

// CENTIGRADE / CELSIUS to KELVIN
test("Centigrade/Celsius to Kelvin", () => {
	expect(IConvert(10).centigrade().toKelvin()).toBeCloseTo(283.15);
	expect(IConvert(10).celsius().toKelvin()).toBeCloseTo(283.15);
	expect(IConvert(-40).centigrade().toKelvin()).toBeCloseTo(233.15);
	expect(IConvert(-40).celsius().toKelvin()).toBeCloseTo(233.15);
});

// FAHRENHEIT to CENTIGRADE / CELSIUS
test("Fahrenheit to Centigrade/Celsius", () => {
	expect(IConvert(10).fahrenheit().toCentigrade()).toBeCloseTo(-12.2222);
	expect(IConvert(10).fahrenheit().toCelsius()).toBeCloseTo(-12.2222);
	expect(IConvert(-40).fahrenheit().toCentigrade()).toBeCloseTo(-40);
	expect(IConvert(-40).fahrenheit().toCelsius()).toBeCloseTo(-40);
});

// FAHRENHEIT to KELVIN
test("Fahrenheit to Centigrade/Celsius", () => {
	expect(IConvert(10).fahrenheit().toKelvin()).toBeCloseTo(260.928);
	expect(IConvert(-40).fahrenheit().toKelvin()).toBeCloseTo(233.15);
});

// METERS
test("Meters", () => {
	expect(IConvert(1).meters().toMillimeters()).toBeCloseTo(1000);
	expect(IConvert(1).meters().toCentimeters()).toBeCloseTo(100);
	expect(IConvert(1).meters().toDecimeters()).toBeCloseTo(10);
	expect(IConvert(1).meters().toKilometers()).toBeCloseTo(0.001);
	expect(IConvert(1).meters().toFeet()).toBeCloseTo(3.28084);
	expect(IConvert(1).meters().toInches()).toBeCloseTo(39.3701);
	expect(IConvert(1).meters().toYards()).toBeCloseTo(1.09361);
	expect(IConvert(1).meters().toMiles()).toBeCloseTo(0.000621371);
});
