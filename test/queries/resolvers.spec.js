const { graphql } = require('graphql');
const schema = require('../../src/schema');
const sinon = require('sinon');
const { expect } = require('chai');
const UserService = require('../../src/services/UserService');
const AddressService = require('../../src/services/AddressService');
const bootstrap = require('../../config/bootstrap');

describe('The query', () => {

  const sandbox = sinon.sandbox.create();

  before( async () => {
    await bootstrap();
  });

  afterEach(() => {
    sandbox.restore();
  });

  const getUser = ( user = {} ) => {
    const defaultUser = {
      name: 'Walmart',
      email: 'wal@mart.com'
    };
    return Object.assign({}, defaultUser, user );
  };

  const getAddress = ( address = {} ) => {
    const defaultAddress = {
      street: 'foo dr',
      city: 'Dover',
      state: 'NH',
      zip: '03824'
    };
    return Object.assign({}, defaultAddress, address );
  }

  describe('user', () => {
    it('should return user when user service returns a user', async () => {
      const user = getUser({id: '1'});
      const address = getAddress({id: '1'});
      sandbox.stub(UserService, 'getUser').returns(Promise.resolve( user ));
      sandbox.stub(AddressService, 'getAddressByUserId').returns(Promise.resolve( address ));
      const query = `
      {
        user(id: 1) {
          id
          name
          email
          address {
            id
            street
            city
            state
            zip
          }
        }
      }`;
      const result = await graphql(schema, query, {}, {});
      expect(result.data.user).to.deep.equal( { ...user, address } );
    });
  });
});
