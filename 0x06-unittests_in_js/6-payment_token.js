function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  // If success is false, the function does nothing (returns undefined)
}

module.exports = getPaymentTokenFromAPI;
