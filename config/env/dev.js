/**
 * Dev environment settings
 */

module.exports = {

  env: 'dev',

  cors: {},

  eis: {
    password: 'foobarbaz'
  },

  log: {
    console: {
      level: 'debug',
      timestamp: true,
      json: true
    }
  },

  zipkin: {
    logger: {
      endpoint: 'http://zipkin:9411/api/v1/spans'
    },
    recorder: 'batch'
  }

};
