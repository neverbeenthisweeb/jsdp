const factory = require('./factory.js');

const truckFactory = new factory.TruckFactory();
truckFactory.operate();

const planeFactory = new factory.PlaneFactory();
planeFactory.operate();
