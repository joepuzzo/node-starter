/**
 * Prod environment settings
 */

module.exports = {

  env: 'prod',

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
      level: 'info',
      json: true,
      timestamp: true
    }
  },

  zipkin: {
    logger: {
      endpoint: 'http://<url>:9411/api/v1/spans'
    },
    recorder: 'none'
  }

};
