"use strict";const users = require('../app/models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
require('../server');

let should = chai.should();

let server = 'http://localhost:3333'

chai.use(chaiHttp);
chai.use(require('chai-things'));

describe('It should return a error Not authorized with status 401', () => {
  it('It should return status code 401', (done) => {
    chai.request(server)
      .get('/users/1')
      .set('Authorization', 'Bearer ')
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.have.property('error').eql('Not authorized');
        done();
      });
  });
});