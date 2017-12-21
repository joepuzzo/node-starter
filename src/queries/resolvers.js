const logger = require('winston');
const UserService = require('../services/UserService');

const user = async (_, { id }) => {
  logger.info('Query: user', { id: id });
  const user = await UserService.getUser( id );
  logger.debug('Query: user - returning', user);
  return user;
};

const users = async (_, params) => {
  logger.info('Query: users', params);
  const users = await UserService.getUsers( params );
  logger.debug('Query: users - returning', users);
  return users;
};

const allUsers = async () => {
  logger.info('Query: allUsers');
  const users = await UserService.getAllUsers();
  logger.debug('Query: allUsers - returning', { users });
  return users;
};

module.exports = {
  user,
  users,
  allUsers
};
