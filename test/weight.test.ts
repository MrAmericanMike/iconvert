import { expect, test } from "vitest";
import IConvert from "../src/main";

// GRAMS
test("Grams", () => {
	expect(IConvert(1).grams().toKilograms()).toBeCloseTo(0.001);
	expect(IConvert(1).grams().toOunces()).toBeCloseTo(0.035274);
	expect(IConvert(1).grams().toPounds()).toBeCloseTo(0.00220462);
});

// KILOGRAMS
test("Kilograms", () => {
	expect(IConvert(1).kilograms().toGrams()).toBeCloseTo(1000);
	expect(IConvert(1).kilograms().toOunces()).toBeCloseTo(35.274);
	expect(IConvert(1).kilograms().toPounds()).toBeCloseTo(2.20462);
});

// OUNCES
test("Ounces", () => {
	expect(IConvert(1).ounces().toGrams()).toBeCloseTo(28.3495);
	expect(IConvert(1).ounces().toKilograms()).toBeCloseTo(0.0283495);
	expect(IConvert(1).ounces().toPounds()).toBeCloseTo(0.0625);
});

// POUNDS
test("Pounds", () => {
	expect(IConvert(1).pounds().toGrams()).toBeCloseTo(453.592);
	expect(IConvert(1).pounds().toKilograms()).toBeCloseTo(0.453592);
	expect(IConvert(1).pounds().toOunces()).toBeCloseTo(16);
});
