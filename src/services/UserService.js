const logger = require('winston');

const users = [];

const matches = ( a, b ) => !( a && b) || b.match( new RegExp(a, 'i') );

class UserService {

  static createUser( user ) {
    logger.info('UserService: createUser', { name: user.name });
    logger.debug('UserService: createUser', user);
    users.push({
      id: users.length + 1,
      ...user
    });
    return Promise.resolve( users[users.length - 1] );
  }

  static getUser( id ) {
    logger.info('UserService: getUser', { id: id });
    logger.debug('UserService: getUser - returning', users[id - 1]);
    return Promise.resolve( users[id - 1] );
  };

  static getUsers( params ) {
    logger.info('UserService: getUsers', params);
    const { name, email } = params;
    const filtered = users.filter( user =>
      matches( name, user.name ) &&
      matches( email, user.email )
    );
    logger.debug('UserService: getUsers - returning', filtered);
    return Promise.resolve( filtered );
  };

  static getAllUsers( ) {
    logger.info('UserService: getAllUsers');
    logger.debug('UserService: getAllUsers - returning', { users });
    return Promise.resolve( users );
  };

}

module.exports = UserService;
