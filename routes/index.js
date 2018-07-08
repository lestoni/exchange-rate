'use strict';

/**
 * Load Module Dependencies
 */
const Router         = require('koa-router');

const exchangeRouter = require('./exchange');
const transactionLogRouter = require('./transaction-log');

let worker = require('../controllers/worker')();

worker.start();

const appRouter = new Router();

appRouter.use(`/api/exchange`, exchangeRouter.routes(), exchangeRouter.allowedMethods());

appRouter.use(`/api/transaction-logs`, transactionLogRouter.routes(), transactionLogRouter.allowedMethods());

// Export App Router
module.exports = appRouter;
