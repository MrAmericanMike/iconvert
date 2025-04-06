import { expect, test } from "vitest";
import IConvert from "../src/main";

// LITERS
test("Liters", () => {
	expect(IConvert(10).liters().toGallons()).toBeCloseTo(2.64172);
	expect(IConvert(1).liters().toMilliliters()).toBeCloseTo(1000);
	expect(IConvert(1).liters().toCups()).toBeCloseTo(4.16667);
	expect(IConvert(1).liters().toImperialCups()).toBeCloseTo(3.51951);
});
