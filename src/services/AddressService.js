const logger = require('winston');

const addresses = [];

class AddressService {

  static createAddress( address, userId ) {
    logger.info('AddressService: createAddress', { userId } );
    logger.debug('AddressService: createAddress', address);
    addresses.push({
      id: addresses.length + 1,
      userId,
      ...address
    });
    return Promise.resolve( addresses[addresses.length - 1] );
  }

  static getAddressByUserId( userId ) {
    logger.info('AddressService: getAddressByUserId', { userId });
    logger.debug('AddressService: getAddressByUserId - returning', addresses[userId-1]);
    return Promise.resolve( addresses[userId-1] );
  };

}

module.exports = AddressService;
