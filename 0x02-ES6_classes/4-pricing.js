export default class Pricing {
	constructor (amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(newAmount) {
		this._amount = newAmount;
	}

	get currency() {
		return this._currency;
	}

	set currency(newCurrency) {
		this._currency = newCurrency;
	}

	displayFullPrice() {
		return `${this.amount} ${this.currency._name} (${this.currency._code})`;
    }

	static covertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}