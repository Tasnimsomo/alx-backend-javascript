const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
	it('should return the sum of rounded numbers', function() {
		assert.strictEqual(calculateNumber(1, 3), 4);
		assert.strictEqual(calculateNumber(1, 3.7), 5);
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});

	it('should handle negative numbers', function() {
		assert.strictEqual(calculateNumber(-1, -3), -4);
		assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
	});

	it('should handle zero', function() {
		assert.strictEqual(calculateNumber(0, 0), 0);
		assert.strictEqual(calculateNumber(0, -1.2), -1);
		assert.strictEqual(calculateNumber(0.1, 0), 0);
	});
});
