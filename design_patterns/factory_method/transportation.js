class Truck {
	constructor() {}

	fillGas() {
		console.log('Filling gas of truck with solar');
	}

	deliver() {
		console.log('Delivering through road by truck');
	}
}

class Plane {
	fillGas() {
		console.log('Filling gas of plane with avtur');
	}

	deliver() {
		console.log('Delivering through sky by plane');
	}
}

module.exports = { Truck, Plane };
