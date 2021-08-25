const chair = require('./chair.js');
const lamp = require('./lamp.js');

class WoodenFactory {
	constructor() {}

	createChair() {
		return new chair.WoodenChair();
	}

	createLamp() {
		return new lamp.WoodenLamp();
	}
}

class PlasticFactory {
	constructor() {}

	createChair() {
		return new chair.PlasticChair();
	}

	createLamp() {
		return new lamp.PlasticLamp();
	}
}

module.exports = { WoodenFactory, PlasticFactory };
