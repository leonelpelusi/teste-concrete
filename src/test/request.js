import Joi from 'joi';
import request from 'supertest';
import expect from 'chai';
import joiAssert from 'joi-assert';

import {
  schemaUserCreate,
  schemaUserSearch,
  schemaSessionCreate
} from './schema'

const URL;
const path;

describe('Teste da API Concrate'), function() {
  //USERS STORE
  it('Validando response da criação de sessão com Joi-Assert', function(done) {
    request(app)
    .get('/users')
    .expect('Content-Type',/json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(200);
      joiAssert(res.body, schemaUserCreate);
      done(err);
    })
  });

  it('Validando response da criação de sessão com Joi.validate', function(done) {
    request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      expect(res.status).to.be.eql(200);
      Joi.validate(res.body, schemaUserCreate, {
        abortEarly: false
      }, (err, data) => {
        if (err) throw err;
      });
      done(err);
    });
  }); 
  
  //USERS GET
  it('Validando response da criação de sessão com Joi-Assert', function(done) {
    request(app)
    .get('/users/:user_id')
    .expect('Content-Type',/json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(200);
      joiAssert(res.body, schemaUserSearch);
      done(err);
    })
  });

  it('Validando response da criação de sessão com Joi.validate', function(done) {
    request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      expect(res.status).to.be.eql(200);
      Joi.validate(res.body, schemaUserSearch, {
        abortEarly: false
      }, (err, data) => {
        if (err) throw err;
      });
      done(err);
    });
  });

  //SESSION STORE
  it('Validando response da criação de sessão com Joi-Assert', function(done) {
    request(app)
    .get('/sessions')
    .expect('Content-Type',/json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(200);
      joiAssert(res.body, schemaSessionCreate);
      done(err);
    })
  });

  it('Validando response da criação de sessão com Joi.validate', function(done) {
    request(app)
    .get('/sessions')
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      expect(res.status).to.be.eql(200);
      Joi.validate(res.body, schemaSessionCreate, {
        abortEarly: false
      }, (err, data) => {
        if (err) throw err;
      });
      done(err);
    });
  });
}