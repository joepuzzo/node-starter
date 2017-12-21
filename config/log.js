/**
 * Log Configuration
 * This file configures the default winston logger.
 * To do this, we simply reconfigure winston.
 */
const { getNamespace } = require('continuation-local-storage');

// Grab the default winston logger
const winston = require('winston');

// Pull in our configuration
const config = require('./');

// Define function for adding trace data
const trace = (level, msg, meta) => {
  const ctx = getNamespace('zipkin');
  if (ctx) {
    const traceinfo = ctx.get('zipkin');
    return traceinfo ? Object.assign(meta, {
      'X-B3-TraceId': traceinfo._traceId.value,
      'X-B3-SpanId': traceinfo._spanId,
    }) : meta;
  }

  return meta;
};

// Define configuration
const log = () => {
  // Configure the winston logger
  winston.configure({
    transports: [
      new (winston.transports.Console)(config.log.console)
      // Add other transports here
      /*
       * See:
       * https://github.com/winstonjs/winston/blob/master/docs/transports.md
       */
    ],
    rewriters: [
      trace
    ]
  });
};

// Export configuration functions for each environment
module.exports = {
  spec: log,
  dev: log,
  test: log,
  prod: log
};
