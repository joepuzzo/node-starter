/**
 * AWS KMS Key Configuration
 *
 * Configuration file for decrypting encrypted values
 */

const logger = require('winston');
const AWS = require('aws-sdk');
const config = require('./');

// Function that decrypts encrypted values
// and puts them into the configuration
async function getKeys() {
  logger.info('Key configuration');
  const kms = new AWS.KMS({
    accessKeyId: config.aws.accessKeyId,
    sessionToken: config.aws.sessionToken,
    secretAccessKey: config.aws.secretAccessKey,
    region: config.aws.region
  });

  const dycrypt = (cipher) => {
    logger.log('Dycrypting a cipher');
    const params = {
      CiphertextBlob: new Buffer(cipher, 'base64')
    };
    return kms.decrypt(params).promise();
  };

  try {
    const [
      systemPassword
    ] = await Promise.all([
      dycrypt(config.system.password)
    ]);

    logger.debug('BEFORE:', config.system.password);

    // Overrite keys with unencrypted values
    config.system.password = systemPassword.Plaintext.toString();
    logger.info('Sucessfully decrypted ciphers');

    logger.debug('AFTER:', config.system.password);
  }
  catch (e) {
    logger.error('An error occured when attempting to decrypt value', e);
    throw e;
  }
}

// Define Dev environment configuration
const dev = () => {
  logger.info('Key configuration');
};

// Define Spec environment configuration
const spec = () => {
  logger.info('Key configuration');
};

// Export configuration functions for each environment
module.exports = {
  spec,
  dev,
  test: getKeys,
  prod: getKeys
};
