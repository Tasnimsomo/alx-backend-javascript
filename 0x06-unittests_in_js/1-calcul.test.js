const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the sum of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.5), 5);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the difference of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
        });
    });

    describe('DIVIDE', function() {
        it('should return the division of rounded numbers', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 4.6, 1.8), 2.5);
	    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
        });

        it('should return "Error" when dividing by 0', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 4.6, 0.2), 'Error');
        });
    });

    describe('Invalid type', function() {
        it('should throw an error for invalid type', function() {
            assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
        });
    });
});

