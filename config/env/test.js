/**
 * Test environment settings
 */

module.exports = {

  env: 'test',

  aws: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    sessionToken: process.env.sessionToken,
    region: 'us-east-1'
  },

  cors: {},

  system: {
    password: 'PASSWORD'
  },

  log: {
    console: {
      level: 'debug',
      json: true,
      timestamp: true
    }
  },

  zipkin: {
    logger: {
      endpoint: 'http://<a-url>:9411/api/v1/spans'
    },
    recorder: 'none'
  }

};
