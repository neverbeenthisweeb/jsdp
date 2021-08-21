class Chocolate {
	constructor(beverage) {
		this.beverage = beverage;
		this.price = 1_500;
	}

	describe() {
		return `Chocolate (${this.price}) + ${this.beverage.describe()}`;
	}

	getCost() {
		return this.price + this.beverage.getCost();
	}
}

class Cheese {
	constructor(beverage) {
		this.beverage = beverage;
		this.price = 2_000;
	}

	describe() {
		return `Cheese (${this.price}) + ${this.beverage.describe()}`;
	}

	getCost() {
		return this.price + this.beverage.getCost();
	}
}

class Salt {
	constructor(beverage) {
		this.beverage = beverage;
		this.price = 500;
	}

	describe() {
		return `Salt (${this.price}) + ${this.beverage.describe()}`;
	}

	getCost() {
		return this.price + this.beverage.getCost();
	}
}

module.exports = { Chocolate, Cheese, Salt };
