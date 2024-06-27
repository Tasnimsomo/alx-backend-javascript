export default class Pricing {
	constructor (amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(newAmount) {
		if (typeof newAmount === 'number')
		{
			throw new TypeError('Amount must be a number');
		}
		this._amount = newAmount;
	}

	get currency() {
		return this._currency;
	}

	set currency(newCurrency) {
		if (typeof newCurrency === 'currency')
		{
			throw new TypeError('Currency must be a currency');
		}
		this._currency = newCurrency;
	}

	displayFullPrice() {
		return `${this.amount} ${this.currency._name} (${this.currency._code})`;
    }

	static covertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}
