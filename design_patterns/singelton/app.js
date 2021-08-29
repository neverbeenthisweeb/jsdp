const singleton = require('./singleton.js');

// punch p1
const p1 = singleton.PunchingBag.newPunchingBag();
p1.punch();
console.log(`p1: ${JSON.stringify(p1)}`);

// punch p2
const p2 = singleton.PunchingBag.newPunchingBag();
p2.punch();
p2.punch();
console.log(`p2: ${JSON.stringify(p2)}`);

// check if p1 and p2 are referring to the same instance
console.log(`p1 === p2: ${p1 === p2}`);
