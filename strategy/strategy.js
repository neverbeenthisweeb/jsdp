class StrategyA {
	constructor() {}

	execute() {
		console.log('Strategy A is executed.');
	}
}

class StrategyB {
	constructor() {}

	execute() {
		console.log('Strategy B is executed.');
	}
}

module.exports = { StrategyA, StrategyB };
