import { expect, test } from "vitest";
import IConvert from "../main";

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

// KELVIN to FAHRENHEIT
test("Kelvin to Fahrenheit", () => {
	expect(IConvert(10).kelvin().toFahrenheit()).toBeCloseTo(-441.67);
	expect(IConvert(-40).kelvin().toFahrenheit()).toBeCloseTo(-531.67);
});

// KELVIN to CENTIGRADE / CELSIUS
test("Kelvin to Centigrade/Celsius", () => {
	expect(IConvert(10).kelvin().toCentigrade()).toBeCloseTo(-263.15);
	expect(IConvert(10).kelvin().toCelsius()).toBeCloseTo(-263.15);
	expect(IConvert(-40).kelvin().toCentigrade()).toBeCloseTo(-313.15);
	expect(IConvert(-40).kelvin().toCelsius()).toBeCloseTo(-313.15);
});
