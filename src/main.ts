let val: number;

const IConvert = (value: number) => {
	val = value;
	const API = {
		// TEMPERATURE
		centigrade() {
			return centigradeConverts;
		},
		celsius() {
			return centigradeConverts;
		},
		fahrenheit() {
			return fahrenheitConverts;
		},
		kelvin() {
			return kelvinConverts;
		},
		// DISTANCE
		millimeters() {
			return millimetersConverts;
		},
		centimeters() {
			return centimetersConverts;
		},
		decimeters() {
			return decimetersConverts;
		},
		meters() {
			return metersConverts;
		},
		kilometers() {
			return kilometersConverts;
		},
		inches() {
			return inchesConverts;
		},
		feet() {
			return feetConverts;
		},
		yards() {
			return yardsConverts;
		},
		miles() {
			return milesConverts;
		},
		// WEIGHT
		grams() {
			return gramsConverts;
		},
		kilograms() {
			return kilogramsConverts;
		},
		pounds() {
			return poundsConverts;
		},
		ounces() {
			return ouncesConverts;
		},
		// VOLUME
		liters() {
			return litersConverts;
		},
		gallons() {
			return gallonsConverts;
		},
		imperialGallons() {
			return imperialGallonsConverts;
		}
	};
	return API;
};

const centigradeConverts = {
	toFahrenheit() {
		return val * (9 / 5) + 32;
	},
	toKelvin() {
		return val + 273.15;
	}
};

const fahrenheitConverts = {
	toCentigrade() {
		return (val - 32) * (5 / 9);
	},
	toCelsius() {
		return (val - 32) * (5 / 9);
	},
	toKelvin() {
		return this.toCentigrade() + 273.15;
	}
};

const kelvinConverts = {
	toFahrenheit() {
		return this.toCentigrade() * (9 / 5) + 32;
	},
	toCentigrade() {
		return val - 273.15;
	},
	toCelsius() {
		return val - 273.15;
	}
};

const millimetersConverts = {
	toCentimeters() {
		return val / 10;
	},
	toDecimeters() {
		return val / 100;
	},
	toMeters() {
		return val / 1000;
	},
	toKilometers() {
		return val / 1000000;
	},
	toInches() {
		return val / 25.4;
	},
	toFeet() {
		return val / 304.8;
	},
	toYards() {
		return val / 914.4;
	},
	toMiles() {
		return val / 1609344;
	}
};

const centimetersConverts = {
	toMillimeters() {
		return val * 10;
	},
	toDecimeters() {
		return val / 10;
	},
	toMeters() {
		return val / 100;
	},
	toKilometers() {
		return val / 100000;
	},
	toInches() {
		return val / 2.54;
	},
	toFeet() {
		return val / 30.48;
	},
	toYards() {
		return val / 91.44;
	},
	toMiles() {
		return val / 160934;
	}
};

const decimetersConverts = {
	toMillimeters() {
		return val * 100;
	},
	toCentimeters() {
		return val * 10;
	},
	toMeters() {
		return val / 10;
	},
	toKilometers() {
		return val / 100000;
	},
	toInches() {
		return val / 0.254;
	},
	toFeet() {
		return val / 3.048;
	},
	toYards() {
		return val / 9.144;
	},
	toMiles() {
		return val / 16093.44;
	}
};

const metersConverts = {
	toMillimeters() {
		return val * 1000;
	},
	toCentimeters() {
		return val * 100;
	},
	toDecimeters() {
		return val * 10;
	},
	toKilometers() {
		return val / 1000;
	},
	toInches() {
		return val / 0.0254;
	},
	toFeet() {
		return val / 0.3048;
	},
	toYards() {
		return val / 0.9144;
	},
	toMiles() {
		return val / 1609.344;
	}
};

const kilometersConverts = {
	toMillimeters() {
		return val * 1000000;
	},
	toCentimeters() {
		return val * 100000;
	},
	toDecimeters() {
		return val * 10000;
	},
	toMeters() {
		return val * 1000;
	},
	toInches() {
		return val / 0.0000254;
	},
	toFeet() {
		return val / 0.0003048;
	},
	toYards() {
		return val / 0.0009144;
	},
	toMiles() {
		return val / 1.609344;
	}
};

const inchesConverts = {
	toMillimeters() {
		return val * 25.4;
	},
	toCentimeters() {
		return val * 2.54;
	},
	toDecimeters() {
		return val * 0.254;
	},
	toMeters() {
		return val / 39.3701;
	},
	toKilometers() {
		return val / 39370.1;
	},
	toFeet() {
		return val / 12;
	},
	toYards() {
		return val / 36;
	},
	toMiles() {
		return val / 63360;
	}
};

const feetConverts = {
	toMillimeters() {
		return val * 304.8;
	},
	toCentimeters() {
		return val * 30.48;
	},
	toDecimeters() {
		return val * 3.048;
	},
	toMeters() {
		return val * 0.3048;
	},
	toKilometers() {
		return val / 3280.84;
	},
	toInches() {
		return val * 12;
	},
	toYards() {
		return val / 3;
	},
	toMiles() {
		return val / 5280;
	}
};

const yardsConverts = {
	toMillimeters() {
		return val * 914.4;
	},
	toCentimeters() {
		return val * 91.44;
	},
	toDecimeters() {
		return val * 9.144;
	},
	toMeters() {
		return val * 0.9144;
	},
	toKilometers() {
		return val / 1093.61;
	},
	toInches() {
		return val * 36;
	},
	toFeet() {
		return val * 3;
	},
	toMiles() {
		return val / 1760;
	}
};

const milesConverts = {
	toMillimeters() {
		return val * 1609344;
	},
	toCentimeters() {
		return val * 160934;
	},
	toDecimeters() {
		return val * 16093.44;
	},
	toMeters() {
		return val * 1609.344;
	},
	toKilometers() {
		return val * 1.609344;
	},
	toInches() {
		return val * 63360;
	},
	toFeet() {
		return val * 5280;
	},
	toYards() {
		return val * 1760;
	}
};

const gramsConverts = {
	toKilograms() {
		return val / 1000;
	},
	toOunces() {
		return val / 28.3495;
	},
	toPounds() {
		return val / 453.592;
	}
};

const kilogramsConverts = {
	toGrams() {
		return val * 1000;
	},
	toOunces() {
		return val * 35.274;
	},
	toPounds() {
		return val * 2.20462;
	}
};

const ouncesConverts = {
	toGrams() {
		return val * 28.3495;
	},
	toKilograms() {
		return val / 35.274;
	},
	toPounds() {
		return val / 16;
	}
};

const poundsConverts = {
	toGrams() {
		return val * 453.592;
	},
	toKilograms() {
		return val / 2.20462;
	},
	toOunces() {
		return val * 16;
	}
};

const litersConverts = {
	toMilliliters() {
		return val * 1000;
	},
	toCentiliters() {
		return val * 100;
	},
	toDeciliters() {
		return val * 10;
	},
	toGallons() {
		return val / 3.78541;
	},
	toQuarts() {
		return val * 1.05669;
	},
	toPints() {
		return val * 2.11338;
	},
	toCups() {
		return val * 4.16667;
	},
	toImperialGallons() {
		return val / 4.546092;
	},
	toImperialQuarts() {
		return val / 1.136;
	},
	toImperialPints() {
		return val * 1.75975;
	},
	toImperialCups() {
		return val * 3.51951;
	}
};

const gallonsConverts = {
	toLiters() {
		return val * 3.78541;
	},
	toMilliliters() {
		return val * 3785.41;
	},
	toCentiliters() {
		return val * 378.541;
	},
	toDeciliters() {
		return val * 37.8541;
	},
	toQuarts() {
		return val * 4;
	},
	toPints() {
		return val * 8;
	},
	toCups() {
		return val * 15.7725;
	},
	toImperialGallons() {
		return val / 1.20095;
	},
	toImperialQuarts() {
		return val * 3.3307;
	},
	toImperialPints() {
		return val * 6.66139;
	},
	toImperialCups() {
		return val * 13.3228;
	}
};

const imperialGallonsConverts = {
	toLiters() {
		return val * 4.546092;
	},
	toDeciliters() {
		return val * 45.4609;
	},
	toCentiliters() {
		return val * 454.609;
	},
	toMilliliters() {
		return val * 4546.092;
	},
	toGallons() {
		return val * 1.20095;
	},
	toQuarts() {
		return val * 4.8038;
	},
	toPints() {
		return val * 9.6076;
	},
	toCups() {
		return val * 18.942;
	},
	toImperialQuarts() {
		return val * 4;
	},
	toImperialPints() {
		return val * 8;
	},
	toImperialCups() {
		return val * 16;
	}
};

export = IConvert;
