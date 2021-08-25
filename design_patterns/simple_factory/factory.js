const config = require('./config.js');
const pizza = require('./pizza.js');

class SimplePizzaFactory {
	constructor() {}

	createPizza(pizzaType) {
		switch (pizzaType) {
			case config.pizzaTypes.jakarta:
				return new pizza.JakartaPizza();
			case config.pizzaTypes.surabaya:
				return new pizza.SurabayaPizza();
			case config.pizzaTypes.malang:
				return new pizza.MalangPizza();
			default:
				throw new Error('invalid pizza type');
		}
	}
}

module.exports = { SimplePizzaFactory };
