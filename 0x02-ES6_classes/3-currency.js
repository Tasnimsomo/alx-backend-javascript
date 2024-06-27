export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	get code() {
		return this._code;
	}

	set code(newCode) {
		this.newCode = newCode;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this.newName = newName;
	}

	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}
