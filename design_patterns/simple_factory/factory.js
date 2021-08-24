const pizza = require('./pizza.js');

class SimplePizzaFactory {
	constructor() {}

	createJakartaPizza() {
		return new pizza.JakartaPizza();
	}

	createSurabayaPizza() {
		return new pizza.SurabayaPizza();
	}

	createMalangPizza() {
		return new pizza.MalangPizza();
	}
}

module.exports = { SimplePizzaFactory };
