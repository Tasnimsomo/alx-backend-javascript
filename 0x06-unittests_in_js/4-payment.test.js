const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function() {
    // Create a stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the stub and spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should stub Utils.calculateNumber and verify console.log', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub is being called with correct arguments
    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledOnceWith('The total is: 10')).to.be.true;
  });
});
