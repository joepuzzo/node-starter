const nock = require('nock');
const UserService = require('../../src/services/UserService');

const config = require('../../config');

describe.skip('User Service', () => {
  it('should make the correct request on call to get users', (done) => {
    const request = nock('http://some-api')
      .get('/users')
      .reply(200);

    CustomerService.getCustomers()
      .then(() => {
        request.isDone();
        done();
    });
  });

});
