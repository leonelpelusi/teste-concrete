"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);
var _supertest = require('supertest'); var _supertest2 = _interopRequireDefault(_supertest);
var _chai = require('chai'); var _chai2 = _interopRequireDefault(_chai);
var _joiassert = require('joi-assert'); var _joiassert2 = _interopRequireDefault(_joiassert);



var _schema = require('./schema');

const app = 'localhost:3333';

describe('Teste da API Concrate'), function() {
  //USERS STORE
  it('Validando response da criação de sessão com Joi-Assert', function(done) {
    _supertest2.default.call(void 0, app)
    .get('/users')
    .expect('Content-Type',/json/)
    .end(function(err, res) {
      _chai2.default.call(void 0, res.status).to.be.eql(200);
      _joiassert2.default.call(void 0, res.body, _schema.schemaUser);
      done(err);
    })
  });

  // it('Validando response da criação de sessão com Joi.validate', function(done) {
  //   request(app)
  //   .get('/users')
  //   .expect('Content-Type', /json/)
  //   .end(function (err, res) {
  //     expect(res.status).to.be.eql(200);
  //     Joi.validate(res.body, schemaUser, {
  //       abortEarly: false
  //     }, (err, data) => {
  //       if (err) throw err;
  //     });
  //     done(err);
  //   });
  // }); 
  
  // //USERS GET
  // it('Validando response da criação de sessão com Joi-Assert', function(done) {
  //   request(app)
  //   .get('/users/:user_id')
  //   .expect('Content-Type',/json/)
  //   .end(function(err, res) {
  //     expect(res.status).to.be.eql(200);
  //     joiAssert(res.body, schemaUser);
  //     done(err);
  //   })
  // });

  // it('Validando response da criação de sessão com Joi.validate', function(done) {
  //   request(app)
  //   .get('/users')
  //   .expect('Content-Type', /json/)
  //   .end(function (err, res) {
  //     expect(res.status).to.be.eql(200);
  //     Joi.validate(res.body, schemaUser, {
  //       abortEarly: false
  //     }, (err, data) => {
  //       if (err) throw err;
  //     });
  //     done(err);
  //   });
  // });

  // //SESSION STORE
  // it('Validando response da criação de sessão com Joi-Assert', function(done) {
  //   request(app)
  //   .get('/sessions')
  //   .expect('Content-Type',/json/)
  //   .end(function(err, res) {
  //     expect(res.status).to.be.eql(200);
  //     joiAssert(res.body, schemaUser);
  //     done(err);
  //   })
  // });

  // it('Validando response da criação de sessão com Joi.validate', function(done) {
  //   request(app)
  //   .get('/sessions')
  //   .expect('Content-Type', /json/)
  //   .end(function (err, res) {
  //     expect(res.status).to.be.eql(200);
  //     Joi.validate(res.body, schemaUser, {
  //       abortEarly: false
  //     }, (err, data) => {
  //       if (err) throw err;
  //     });
  //     done(err);
  //   });
  // });
}