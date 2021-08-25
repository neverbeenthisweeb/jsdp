const factory = require('./factory.js');

const simpleFactory = new factory.SimplePizzaFactory();

const jktPizza = simpleFactory.createJakartaPizza();
jktPizza.prepare();

const sbyPizza = simpleFactory.createSurabayaPizza();
sbyPizza.prepare();

const mlgPizza = simpleFactory.createMalangPizza();
mlgPizza.prepare();
