'use strict';

/**
 * Load Module Dependencies
 */
const chai = require('chai');

const db = require('../../db');

let expect = chai.expect;

before((done)=>{
  db.TransactionLog.destroy({where:{}})
    .then(()=>done())
    .catch((err)=>done(err));
})

describe('Transaction Log Model', ()=> {

  it('should load Transaction Log model', ()=> {

    expect(db.TransactionLog).to.be.ok;
  });

  it('should List Transaction Logs', (done) => {

    db.TransactionLog.findAll({}).then((docs)=>{

      expect(docs).to.be.an('array')
      expect(docs).to.have.lengthOf(0);

      done();
    }).catch(done)
  });
})
