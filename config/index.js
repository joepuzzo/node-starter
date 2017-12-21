/**
 * Configuration settings
 */
const dev = require('./env/dev');
const test = require('./env/test');
const prod = require('./env/prod');
const spec = require('./env/spec');
const conf = require('./default');

const env = process.env.NODE_ENV;

// Generates the configuration from configuration files
const buildConfig = () => {
  switch (env) {
    case test.env:
      return Object.assign({}, conf, test);
    case prod.env:
      return Object.assign({}, conf, prod);
    case spec.env:
      return Object.assign({}, conf, spec);
    default:
      return Object.assign({}, conf, dev);
  }
};

// Export the static config field from the Config
module.exports = Object.assign({}, buildConfig());
