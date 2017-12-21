/**
 * Bootstrap file is uesd to do any sort of setup before
 * the application is started. Examples include decrypting
 * ciphers, connecting to dadabases, or performing some
 * generic setup.
 */
const logger = require('winston');

const key = require('./key');
const log = require('./log');
const zipkin = require('./zipkin');
const env = require('./').env;

async function bootstrap() {
  // Call any syncronous configurations
  log[env]();
  zipkin[env]();
  logger.info('Successfully called syncronous bootstrap functions');

  try {
    // Call any asyncrounous configurations
    await Promise.all([
      key[env]()
    ]);
    logger.info('Successfully called async bootstrap functions');
  }
  catch (e) {
    // Somthing went wrong
    logger.error(
      'An error occured when attempting to call async bootstrap functions',
      e
    );
    throw e;
  }
}

module.exports = bootstrap;
