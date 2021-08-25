const factory = require('./factory.js');
const config = require('./config.js');

function preparePizza(pizza) {
	pizza.prepare();
}

const simpleFactory = new factory.SimplePizzaFactory();

// prepare Jakarta pizza
const jktPizza = simpleFactory.createPizza(config.pizzaTypes.jakarta);
preparePizza(jktPizza);

// prepare Surabaya pizza
const sbyPizza = simpleFactory.createPizza(config.pizzaTypes.surabaya);
preparePizza(sbyPizza);

// prepare Malang pizza
const mlgPizza = simpleFactory.createPizza(config.pizzaTypes.malang);
preparePizza(mlgPizza);

// prepare invalid pizza
try {
	const _ = simpleFactory.createPizza('invalid-pizza-type');
} catch (error) {
	console.warn(`Error when creating pizza: ${error.message}`);
}
