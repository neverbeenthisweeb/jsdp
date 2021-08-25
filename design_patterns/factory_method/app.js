const factory = require('./factory.js');

function operateTransport(transportFactory) {
	transportFactory.operate();
}

const truckFactory = new factory.TruckFactory();
operateTransport(truckFactory);

const planeFactory = new factory.PlaneFactory();
operateTransport(planeFactory);
