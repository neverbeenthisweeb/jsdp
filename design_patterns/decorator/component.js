class CocaCola {
	constructor() {
		this.price = 5_500;
	}

	describe() {
		return `Coca-Cola (${this.price})`;
	}

	getCost() {
		return this.price;
	}
}

class Fanta {
	constructor() {
		this.price = 3_000;
	}

	describe() {
		return `Fanta (${this.price})`;
	}

	getCost() {
		return this.price;
	}
}

module.exports = { CocaCola, Fanta };
