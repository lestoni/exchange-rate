'use strict';

/**
 * Load Module Dependencies.
 */
const xml2js = require('xml2js');

/**
 * ParseXML Helper
 *
 * @desc Parses given xml using xml2js
 *
 * @param {String} xml XML Content
 *
 * @return {Object} result Parsed XML as Object
 */
exports.parseXML = (xml) => {
  return new Promise((resolve, reject)=> {
    xml2js.parseString(xml, (err, result) => {
      if(err) return reject(err);

      resolve(result);
    })
  })
};

/**
 * Parse Numbers to Floating Point
 *
 * @desc Parses given num as float to 2 precision
 *
 * @param {Number} num Number to Parse
 *
 * @return {Number} num in precision
 */
exports.parseFloat = (num) => {
  return Number(Number.parseFloat(num).toFixed(2));
}
