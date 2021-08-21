// Use Case:
// We run a beverages business.
// We sell Coca-Cola and Fanta.
// We provide additional condiments.

const component = require('./component.js');
const decorator = require('./decorator.js');

// prepare order 1
let order1 = new component.CocaCola();
order1 = new decorator.Chocolate(order1);
order1 = new decorator.Chocolate(order1);
order1 = new decorator.Cheese(order1);
console.log(`order1_description: ${order1.describe()}`);
console.log(`order1_cost: ${order1.getCost()}`);

// prepare order 2
let order2 = new component.CocaCola();
order2 = new decorator.Cheese(order2);
order2 = new decorator.Cheese(order2);
order2 = new decorator.Cheese(order2);
order2 = new decorator.Salt(order2);
console.log(`order2_description: ${order2.describe()}`);
console.log(`order2_cost: ${order2.getCost()}`);
