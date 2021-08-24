const factory = require('./factory.js');

const simpleFactory = new factory.SimplePizzaFactory();

const jktPizza = simpleFactory.createJakartaPizza();
console.log(jktPizza.constructor.name);

const sbyPizza = simpleFactory.createSurabayaPizza();
console.log(sbyPizza.constructor.name);

const mlgPizza = simpleFactory.createMalangPizza();
console.log(mlgPizza.constructor.name);
