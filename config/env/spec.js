/**
 * Dev environment settings
 */

module.exports = {

  env: 'spec',

  cors: {},

  eis: {
    password: 'PASSWORD'
  },

  log: {
    console: {
      level: 'error',
      timestamp: true,
      json: true
    }
  },

  zipkin: {
    logger: {
      endpoint: 'http://zipkin:9411/api/v1/spans'
    },
    recorder: 'none'
  }

};
