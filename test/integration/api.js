
/**
 * Load Module Dependencies
 */
const chai    = require('chai');
const request = require('supertest');

const app     = require('../../app');
const config  = require('../../config');
const db      = require('../../db');

const expect = chai.expect;
const server = request(app.listen(config.PORT));
const sample = require('../fixtures/sample');

before((done)=>{
  db.Exchanger.upsert(sample.exchanger)
    .then(()=> done())
    .catch((err)=> done(err));
});

after((done) => {
  db.Exchanger.destroy({where:{}})
    .then(()=> done())
    .catch((err)=> done(err));
})

describe('Exchange Currency', () => {

  it('POST /api/exchange should return equivalent exchange from EUR to USD', (done) => {
    let exchangeRequest = {
      from_currency: 'EUR',
      to_currency: 'USD',
      amount: 100.00
    };

    server
        .post('/api/exchange')
        .send(exchangeRequest)
        .expect(200)
        .end((err, res) => {
            if(err) return done(err);

            expect(res.body).to.be.an('object');
            expect(res.body.equivalent).to.be.a('number');
            expect(res.body.equivalent).to.equal(117.24);

            done();
        });

  });

  it('POST /api/exchange should return equivalent exchange from USD to EUR', (done) => {
    let exchangeRequest = {
      from_currency: 'USD',
      to_currency: 'EUR',
      amount: 100.00
    };

    server
        .post('/api/exchange')
        .send(exchangeRequest)
        .expect(200)
        .end((err, res) => {
            if(err) return done(err);

            expect(res.body).to.be.an('object');
            expect(res.body.equivalent).to.be.a('number');
            expect(res.body.equivalent).to.equal(85.3);

            done();
        });

  });

  it('POST /api/exchange should return equivalent exchange between other currencies', (done) => {
    let exchangeRequest = {
      from_currency: 'JPY',
      to_currency: 'USD',
      amount: 100.00
    };

    server
        .post('/api/exchange')
        .send(exchangeRequest)
        .expect(200)
        .end((err, res) => {
            if(err) return done(err);

            expect(res.body).to.be.an('object');
            expect(res.body.equivalent).to.be.a('number');
            expect(res.body.equivalent).to.equal(11058.51);

            done();
        });

  });

  it('POST /api/exchange should fail when currencies are not supported', (done) => {
    let exchangeRequest = {
      from_currency: 'KES',
      to_currency: 'USD',
      amount: 100.00
    };

    server
        .post('/api/exchange')
        .send(exchangeRequest)
        .expect(400)
        .end((err, res) => {
            if(err) return done(err);

            expect(res.body.status).to.equal(400);
            expect(res.body.message).to.equal('KES is not supported');
            expect(res.body.type).to.equal('EXCHANGE_RATE_ERROR');

            done();
        });

  });

  it('POST /api/exchange should return request payload validation errors', (done) => {
    let exchangeRequest = {};

    server
        .post('/api/exchange')
        .send(exchangeRequest)
        .expect(400)
        .end((err, res) => {
            if(err) return done(err);

            expect(res.body.status).to.equal(400);
            expect(res.body.type).to.equal('EXCHANGE_RATE_VALIDATION_ERROR');
            expect(res.body.validation_errors).to.have.lengthOf(sample.validation_errors.length)
            expect(res.body.validation_errors[0]).to.deep.equal(sample.validation_errors[0]);
            expect(res.body.validation_errors[1]).to.deep.equal(sample.validation_errors[1]);
            expect(res.body.validation_errors[2]).to.deep.equal(sample.validation_errors[2]);

            done();
        });

  });

});

describe('Transaction Logs', () => {
  let log = null;

  before((done)=>{
    db.TransactionLog.destroy({where:{}})
      .then(()=>done())
      .catch((err)=>done(err));
  });

  after((done) => {
    log = null;
    db.TransactionLog.destroy({where:{}})
      .then(()=>done())
      .catch((err)=>done(err));
  })

  it('GET /api/transaction-logs should return transaction Logs Collection ', (done) => {

    server
        .get('/api/transaction-logs')
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(0);

          done();
        });

  });

  it('POST /api/exchange should create a transaction log', (done) => {
    let exchangeRequest = {
      from_currency: 'USD',
      to_currency: 'EUR',
      amount: 100.00
    };

    server
        .post('/api/exchange')
        .send(exchangeRequest)
        .expect(200)
        .end((err, res) => {
            if(err) return done(err);

            db.TransactionLog.findAll({})
              .then((logs)=> {
                expect(logs).to.be.an('array');
                expect(logs.length).to.equal(1);
                expect(logs[0]).to.be.an('object');
                expect(logs[0].equivalent).to.be.a('number');
                expect(logs[0].equivalent).to.equal(85.3);

                log = logs[0];

                done();

              }).catch((err)=>{
                done(err);
              });
        });

  });

  it('GET /api/transaction-logs/:logId should return a transaction Log ', (done) => {

    server
        .get(`/api/transaction-logs/${log.id}`)
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);

          expect(res.body).to.be.an('object');
          expect(res.body.id).to.equal(log.id);
          expect(res.body.equivalent).to.equal(log.equivalent);
          expect(res.body.rate).to.equal(log.rate);
          expect(res.body.from_currency).to.equal(log.from_currency);
          expect(res.body.to_currency).to.equal(log.to_currency);

          done();
        });

  });


});

describe('Not Found', () => {

  it('it should return 404 if not found', (done) => {

    server
        .get('/api/notfound')
        .expect(404)
        .end((err, res) => {
          if(err) return done(err);

          done();
        });

  });


});
