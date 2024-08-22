const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done() to signal that the async test is complete
      })
      .catch((error) => {
        done(error); // If there's an error, pass it to done()
      });
  });

  it('should do nothing when success is false', function(done) {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
    done(); // Call done() to signal that the test is complete
  });
});
