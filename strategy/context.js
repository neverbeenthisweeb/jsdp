class Context {
	constructor() {
		this.strategy = null;
	}

	executeStrategy() {
		if (this.strategy == null) {
			throw new Error('strategy is missing');
		}
		this.strategy.execute();
	}

	setStrategy(strategy) {
		this.strategy = strategy;
	}
}

module.exports = { Context };
