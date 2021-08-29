class PunchingBag {
	constructor() {
		this.punchingBag;
		this.punchCount = 0;
	}

	static newPunchingBag() {
		if (!this.punchingBag) {
			this.punchingBag = new PunchingBag();
		}
		return this.punchingBag;
	}

	punch() {
		this.punchCount += 1;
	}
}

module.exports = { PunchingBag };
