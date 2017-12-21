const logger = require('winston');
const UserService = require('../services/UserService');
const AddressService = require('../services/AddressService');

const createUser = async (_, { userInput }) => {
  logger.info('Mutation: createUser', { name: userInput.name } );
  logger.debug('Mutation: createUser', userInput);
  const user = await UserService.createUser( { name: userInput.name, email: userInput.email } );
  const address = await AddressService.createAddress( userInput.address, user.id );
  return { ...user, address }
};

module.exports = {
  createUser
};
