const logger = require('winston');
const { Tracer, BatchRecorder } = require('zipkin');
const CLSContext = require('zipkin-context-cls');
const { HttpLogger } = require('zipkin-transport-http');

const config = require('./');

class ConsoleRecorder {
  record(rec) {
    logger.info(rec.annotation.toString());
  }
  toString() {
    return 'consoleTracer';
  }
}

class NoRecorder {
  record() {}
  toString() {
    return 'noTracer';
  }
}

const recorders = {
  batch: new BatchRecorder({
    logger: new HttpLogger({
      endpoint: config.zipkin.logger.endpoint
    })
  }),
  console: new ConsoleRecorder(),
  none: new NoRecorder()
};

const zipkin = () => {
  const ctxImpl = new CLSContext();
  const tracer = new Tracer({
    ctxImpl,
    recorder: recorders[config.zipkin.recorder],
    traceId128Bit: true
  });
  config.zipkin.tracer = tracer;
};

// Export configuration functions for each environment
module.exports = {
  spec: zipkin,
  dev: zipkin,
  test: zipkin,
  prod: zipkin
};
