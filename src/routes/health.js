const express = require('express');
const logger = require('winston');

const router = express.Router();

// /health

router.get('/health', (req, res) => {
  logger.info('Recieved health check request');
  res.send({ status: 'UP' });
});

module.exports = router;
