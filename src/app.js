const bodyParser = require('body-parser');
const cls = require('continuation-local-storage');
const clsify = require('cls-middleware');
const express = require('express');
const health = require('./routes/health');
const schema = require('./schema');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware;
const cors = require('cors');
const config = require('../config');

module.exports = () => {

  // Create Express application
  const app = express();

  // Apply CORS to the endpoints
  app.use(cors(config.cors || {}));

  // Add the Zipkin middleware
  app.use(zipkinMiddleware({
    tracer: config.zipkin.tracer,
    serviceName: 'node-starter'
  }));

  // Add context middleware
  app.use(clsify(cls.getNamespace('zipkin')));

  // Add healthcheck routes
  app.use(health);

  // Add body parser
  app.use(bodyParser.json());

  // Add graphql shit
  app.use('/graphql', graphqlExpress({ schema }));
  app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }));

  return app;
};
