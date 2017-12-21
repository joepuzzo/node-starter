const fs = require('fs');
const https = require('https');
const http = require('http');
const logger = require('winston');
const bootstrap = require('./config/bootstrap');
const config = require('./config');
const buildApp = require('./src/app');

function startApp() {
  logger.info('Starting application');

  const app = buildApp();

  // Define server options
  const options = {
    key: fs.readFileSync('./config/ssl/private.key'),
    cert: fs.readFileSync('./config/ssl/primary.crt')
  };

  // Create the https server
  https.createServer(options, app).listen(config.https.port, () => {
    logger.info('Https server is now running on port', config.https.port);
  });

  // Create the http server
  http.createServer(app).listen(config.http.port, () => {
    logger.info('Http server is now running on port', config.http.port);
  });
}

async function start() {
  try {
    await bootstrap();
    startApp();
  } catch (e) {
    logger.error('An error occured when attempting to start application', e);
  }
}

start();
