const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
  });

  describe('DIVIDE', function() {
    it('should return the quotient of rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 4.6, 1.8)).to.equal(2.5);
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 4.6, 0.2)).to.equal('Error');
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for invalid type', function() {
      expect(function() { calculateNumber('INVALID', 1.4, 4.5); }).to.throw(Error);
    });
  });
});
