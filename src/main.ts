let val: number;

const IConvert = (value: number) => {
	val = value;
	const API = {
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
		meters() {
			return metersConverts;
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
	toFeet() {
		return val / 0.3048;
	},
	toInches() {
		return val / 0.0254;
	},
	toYards() {
		return val / 0.9144;
	},
	toMiles() {
		return val / 1609.344;
	}
};

export = IConvert;
