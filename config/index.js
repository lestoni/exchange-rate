'use strict';

/**
 * Load Module dependencies.
 */
const env = process.env;

const PORT        = env.PORT || 8090;
const API_URL     = env.API_URL || 'http://127.0.0.1:8090';
const NODE_ENV    = env.NODE_ENV || 'development';
const HOST        = env.HOST_IP || 'localhost';

const SQLITE_URL = env.DB_URL || 'sqlite:./datastore.db';

let config = {
  API_URL: API_URL,

  ENV: NODE_ENV,

  PORT: PORT,

  HOST: HOST,

  DB_URL: SQLITE_URL,

  ECB_URL: "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"

};

module.exports = config;
