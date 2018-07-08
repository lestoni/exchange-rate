'use strict';

/**
 * Load Module Dependencies
 */
const chai = require('chai');

const db = require('../../db');
const sample = require('../fixtures/sample');

let expect = chai.expect;

before((done) => {
  db.Exchanger.destroy({where:{}})
    .then(()=> done())
    .catch((err)=> done(err));
})

describe('Exchanger Model', ()=> {
  let exchanger = null;

  it('should load Exchanger model', ()=> {

    expect(db.Exchanger).to.be.ok;
  });

  it('should CREATE Exchanger Instance', (done) => {
    db.Exchanger.create(sample.exchanger)
      .then((doc)=> {
        expect(doc).to.be.an('object');
        expect(doc.source).to.equal(sample.exchanger.source);
        expect(doc.rate).to.deep.equal(sample.exchanger.rate);

        exchanger = doc;

        done();
      })
      .catch((err)=>{
        done(err);
      })
  });

  it('should GET Exchanger Instance', (done) => {
    db.Exchanger.findById(exchanger.id)
      .then((doc)=> {
        expect(doc).to.be.an('object');
        expect(doc.source).to.equal(exchanger.source);
        expect(doc.rate).to.deep.equal(exchanger.rate);

        done();
      })
      .catch((err)=>{
        done(err);
      })
  });
});
