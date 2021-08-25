const transportation = require('./transportation.js');

class BaseFactory {
	constructor() {}

	create() {}

	operate() {
		const transport = this.create();
		transport.fillGas();
		transport.deliver();
	}
}

class TruckFactory extends BaseFactory {
	constructor() {
		super();
	}

	create() {
		return new transportation.Truck();
	}
}

class PlaneFactory extends BaseFactory {
	constructor() {
		super();
	}

	create() {
		return new transportation.Plane();
	}
}

module.exports = { TruckFactory, PlaneFactory };
