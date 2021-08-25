const factory = require('./factory.js');

function sitOnChair(chair) {
	chair.sitOn();
}

function calibrateLamp(lamp) {
	lamp.calibrate();
}

const woodenFactory = new factory.WoodenFactory();
const woodenChair = woodenFactory.createChair();
sitOnChair(woodenChair);
const woodenLamp = woodenFactory.createLamp();
calibrateLamp(woodenLamp);

const plasticFactory = new factory.PlasticFactory();
const plasticChair = plasticFactory.createChair();
sitOnChair(plasticChair);
const plasticLamp = plasticFactory.createLamp();
calibrateLamp(plasticLamp);
