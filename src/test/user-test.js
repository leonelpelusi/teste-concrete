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
  
  it('It should return a new user with status code 200', (done) => {
    const user = {
      "name": "Leonel",
      "email": "leonel" + Math.floor(Math.random() * 1000) + "@concrete.com",
      "password": "123456",
      "phones": [
        {
          "numeber": "123456789",
          "ddd": "13"
        }
      ]
    }  
    
    chai.request(server)
      .post('/users')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        global.newuser = res.body;
        done()
      });
  });

  it('It should return a infos of user created at last test with status code 200', (done) => {
    chai.request(server)
      .get('/users/' + newuser.id)
      .send({ mail : newuser.email })
      .set('Authorization', 'Bearer ' + newuser.token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('name');
        res.body.should.have.property('email');
        res.body.should.have.property('phones');
        res.body.should.have.property('password_hash');
        res.body.should.have.property('token');
        done();
      });
  });

  it('It should return a new session of a user already created with status code 200', (done) => {
    const user = {
      "email": "leonel@concrete.com",
      "password": "123456"
    }

    chai.request(server)
      .post('/sessions')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object'); 
        res.body.should.have.property('id');
        res.body.should.have.property('name');
        res.body.should.have.property('email');
        res.body.should.have.property('phones');
        res.body.should.have.property('password_hash');
        res.body.should.have.property('token');
        done();
      });
  });
}

);