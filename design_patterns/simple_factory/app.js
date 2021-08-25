const factory = require('./factory.js');
const config = require('./config.js');

const simpleFactory = new factory.SimplePizzaFactory();

// prepare Jakarta pizza
const jktPizza = simpleFactory.createPizza(config.pizzaTypes.jakarta);
jktPizza.prepare();

// prepare Surabaya pizza
const sbyPizza = simpleFactory.createPizza(config.pizzaTypes.surabaya);
sbyPizza.prepare();

// prepare Malang pizza
const mlgPizza = simpleFactory.createPizza(config.pizzaTypes.malang);
mlgPizza.prepare();

// prepare invalid pizza
try {
	const _ = simpleFactory.createPizza('invalid-pizza-type');
} catch (error) {
	console.warn(`Error when creating pizza: ${error.message}`);
}
