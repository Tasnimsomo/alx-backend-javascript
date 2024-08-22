const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should use Utils.calculateNumber with correct arguments', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.returnValues[0]).to.equal(Utils.calculateNumber('SUM', 100, 20));
    
    calculateNumberSpy.restore();
  });
});
