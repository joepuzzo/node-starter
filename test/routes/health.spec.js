const expect = require('chai').expect;
const request = require('supertest');
const buildApp = require('../../src/app');
const bootstrap = require('../../config/bootstrap');

describe('Health', () => {

  let app;

  before( async () => {
    await bootstrap();
    app = buildApp();
  });

  describe('Request to /management/health', () => {

    it('should retrun a 200 status code', (done) => {
      request( app )
        .get('/health')
        .end((error, res) => {
          if (error) throw error;
          expect(res.status).to.equal(200);
          done();
        });
    });

  });

});
