import Currency from './3-currency.js'

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
		 return ` ${this._currency.name}  ${this._amount} (${this._currency.code})`;
    }

	static covertPrice(amount, conversionRate) {
		if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
			throw new TypeError('Both amount and conversionRate must be numbers');
			}
		return amount * conversionRate;
	}
}
