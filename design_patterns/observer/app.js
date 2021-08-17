const publisher = require('./publisher.js');
const subscriber = require('./subscriber.js');

const pb = new publisher.Publisher();

// notify no subscriber
pb.notifySubscribers();

// notify A
pb.addSubscriber(new subscriber.SubscriberA());
pb.notifySubscribers();

// notify A and B
pb.addSubscriber(new subscriber.SubscriberB());
pb.notifySubscribers();
