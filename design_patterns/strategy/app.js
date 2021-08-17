const context = require('./context.js');
const strategy = require('./strategy.js');

const ctx = new context.Context();

// execute context with strategy A
ctx.setStrategy(new strategy.StrategyA());
ctx.executeStrategy();

// execute context with strategy B
ctx.setStrategy(new strategy.StrategyB());
ctx.executeStrategy();

// execute context with no strategy
try {
	ctx.setStrategy(null);
	ctx.executeStrategy();
} catch (error) {
	console.error(`Error when executing strategy: ${error.message}`);
}
