class Publisher {
	constructor() {
		this.subscribers = [];
	}

	addSubscriber(subscriber) {
		this.subscribers.push(subscriber);
	}

	removeSubscriber(subscriber) {
		this.subscribers.pop(subscriber);
	}

	notifySubscribers() {
		for (const s of this.subscribers) {
			s.update();
		}
	}
}

module.exports = { Publisher };
