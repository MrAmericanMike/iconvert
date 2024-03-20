import { expect, test } from "vitest";
import IConvert from "../main";

// MILLIMETERS
test("Millimeters", () => {
	expect(IConvert(1).millimeters().toCentimeters()).toBeCloseTo(0.1);
	expect(IConvert(1).millimeters().toDecimeters()).toBeCloseTo(0.01);
	expect(IConvert(1000).millimeters().toMeters()).toBeCloseTo(1);
	expect(IConvert(100000).millimeters().toKilometers()).toBeCloseTo(0.1);
	expect(IConvert(100).millimeters().toFeet()).toBeCloseTo(0.328084);
	expect(IConvert(100).millimeters().toInches()).toBeCloseTo(3.93701);
	expect(IConvert(1000).millimeters().toYards()).toBeCloseTo(1.09361);
	expect(IConvert(10000).millimeters().toMiles()).toBeCloseTo(0.00621371);
});

// CENTIMETERS
test("Centimeters", () => {
	expect(IConvert(1).centimeters().toMillimeters()).toBeCloseTo(10);
	expect(IConvert(1).centimeters().toDecimeters()).toBeCloseTo(0.1);
	expect(IConvert(1).centimeters().toMeters()).toBeCloseTo(0.01);
	expect(IConvert(1).centimeters().toKilometers()).toBeCloseTo(0.00001);
	expect(IConvert(1).centimeters().toFeet()).toBeCloseTo(0.0328084);
	expect(IConvert(1).centimeters().toInches()).toBeCloseTo(0.393701);
	expect(IConvert(1).centimeters().toYards()).toBeCloseTo(0.0109361);
	expect(IConvert(10000).centimeters().toMiles()).toBeCloseTo(0.0621371);
});

// DECIMETERS
test("Decimeters", () => {
	expect(IConvert(1).decimeters().toMillimeters()).toBeCloseTo(100);
	expect(IConvert(1).decimeters().toCentimeters()).toBeCloseTo(10);
	expect(IConvert(1).decimeters().toMeters()).toBeCloseTo(0.1);
	expect(IConvert(1).decimeters().toKilometers()).toBeCloseTo(0.0001);
	expect(IConvert(1).decimeters().toFeet()).toBeCloseTo(0.328084);
	expect(IConvert(1).decimeters().toInches()).toBeCloseTo(3.93701);
	expect(IConvert(100).decimeters().toYards()).toBeCloseTo(10.9361);
	expect(IConvert(1000).decimeters().toMiles()).toBeCloseTo(0.0621371);
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
	expect(IConvert(100).meters().toMiles()).toBeCloseTo(0.0621371);
});

// KILOMETERS
test("Kilometers", () => {
	expect(IConvert(1).kilometers().toMillimeters()).toBeCloseTo(1000000);
	expect(IConvert(1).kilometers().toCentimeters()).toBeCloseTo(100000);
	expect(IConvert(1).kilometers().toDecimeters()).toBeCloseTo(10000);
	expect(IConvert(1).kilometers().toMeters()).toBeCloseTo(1000);
	expect(IConvert(1).kilometers().toFeet()).toBeCloseTo(3280.84);
	expect(IConvert(0.1).kilometers().toInches()).toBeCloseTo(3937.01);
	expect(IConvert(1).kilometers().toYards()).toBeCloseTo(1093.61);
	expect(IConvert(1).kilometers().toMiles()).toBeCloseTo(0.621371);
});

// INCHES
test("Inches", () => {
	expect(IConvert(1).inches().toMillimeters()).toBeCloseTo(25.4);
	expect(IConvert(1).inches().toCentimeters()).toBeCloseTo(2.54);
	expect(IConvert(1).inches().toDecimeters()).toBeCloseTo(0.254);
	expect(IConvert(1).inches().toMeters()).toBeCloseTo(0.0254);
	expect(IConvert(1).inches().toKilometers()).toBeCloseTo(0.0000254);
	expect(IConvert(1).inches().toFeet()).toBeCloseTo(0.0833333);
	expect(IConvert(1).inches().toYards()).toBeCloseTo(0.0277778);
	expect(IConvert(1000).inches().toMiles()).toBeCloseTo(0.0157828);
});

// FEET
test("Feet", () => {
	expect(IConvert(1).feet().toMillimeters()).toBeCloseTo(304.8);
	expect(IConvert(1).feet().toCentimeters()).toBeCloseTo(30.48);
	expect(IConvert(1).feet().toDecimeters()).toBeCloseTo(3.048);
	expect(IConvert(1).feet().toMeters()).toBeCloseTo(0.3048);
	expect(IConvert(1).feet().toKilometers()).toBeCloseTo(0.0003048);
	expect(IConvert(1).feet().toInches()).toBeCloseTo(12);
	expect(IConvert(1).feet().toYards()).toBeCloseTo(0.333333);
	expect(IConvert(100).feet().toMiles()).toBeCloseTo(0.0189394);
});

// YARDS
test("Yards", () => {
	expect(IConvert(1).yards().toMillimeters()).toBeCloseTo(914.4);
	expect(IConvert(1).yards().toCentimeters()).toBeCloseTo(91.44);
	expect(IConvert(1).yards().toDecimeters()).toBeCloseTo(9.144);
	expect(IConvert(1).yards().toMeters()).toBeCloseTo(0.9144);
	expect(IConvert(1).yards().toKilometers()).toBeCloseTo(0.0009144);
	expect(IConvert(1).yards().toInches()).toBeCloseTo(36);
	expect(IConvert(1).yards().toFeet()).toBeCloseTo(3);
	expect(IConvert(100).yards().toMiles()).toBeCloseTo(0.0568182);
});

// MILES
test("Miles", () => {
	expect(IConvert(1).miles().toMillimeters()).toBeCloseTo(1609344);
	expect(IConvert(1).miles().toCentimeters()).toBeCloseTo(160934);
	expect(IConvert(1).miles().toDecimeters()).toBeCloseTo(16093.44);
	expect(IConvert(1).miles().toMeters()).toBeCloseTo(1609.344);
	expect(IConvert(1).miles().toKilometers()).toBeCloseTo(1.609344);
	expect(IConvert(1).miles().toInches()).toBeCloseTo(63360);
	expect(IConvert(1).miles().toFeet()).toBeCloseTo(5280);
	expect(IConvert(1).miles().toYards()).toBeCloseTo(1760);
});
