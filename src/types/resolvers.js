const logger = require('winston');
const AddressService = require('../services/AddressService');

const address = async (user) => {
  logger.info('Type: address', user.id);
  const addr = await AddressService.getAddressByUserId( user.id );
  logger.info('Type: address - returning', addr);
  return addr;
};

module.exports = {
  User: {
    address
  }
};
