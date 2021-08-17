class SubscriberA {
	construct() {}

	update() {
		console.log('Updating data in subscriber A.');
	}
}

class SubscriberB {
	construct() {}

	update() {
		console.log('Updating data in subscriber B.');
	}
}

module.exports = { SubscriberA, SubscriberB };
