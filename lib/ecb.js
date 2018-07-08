'use strict';
/**
 * Load Module Dependencies.
 */
const debug        = require('debug')('api:ecb-middleware');
const fetch        = require('node-fetch');

const config          = require('../config');
const parseXML        = require('./utils').parseXML;

 /**
  * Refresh Exchange Rate Info
  *
  * @desc Query ECB for the latest exchange rates in XML
  *
  * @return {Object} data Parsed Exchange Rate
  */
 module.exports = async ()=> {
   let res      = await fetch(config.ECB_URL)
   let xmlInfo  = await res.text();

   let xmlParsed = await parseXML(xmlInfo);

   let source         = xmlParsed['gesmes:Envelope']['gesmes:Sender'][0]['gesmes:name'][0];
   let lastUpdated    = xmlParsed['gesmes:Envelope']['Cube'][0]['Cube'][0]['$']['time'];
   let exchangeRates  = xmlParsed['gesmes:Envelope']['Cube'][0]['Cube'][0]['Cube'];

   let rates          = {};

   for(let rate of exchangeRates) {
     rates[rate['$']['currency']] =  Number(rate['$']['rate'])
   }

   let data = {
     source: source,
     updatedAt: lastUpdated,
     rates: rates
   }

   return data;

 }
