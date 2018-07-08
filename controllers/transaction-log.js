'use strict';
/**
 * Load Module Dependencies.
 */
const debug   = require('debug')('api:transaction-log-controller');
const moment  = require('moment');

const CustomError     = require('../lib/errors').CustomError;
const db              = require('../db');

/**
 * Get Transaction Logs
 *
 * @desc Retrieve Collection of Transaction Logs
 *
 * @param {Object} ctx Koa Instance Context
 * @param {Function} next Middleware dispatcher
 */
exports.getCollection = async (ctx, next) => {

  debug(`Get Transaction Logs`);

  try {
    let transactionLogs = await db.TransactionLog.findAll({});

    ctx.body = transactionLogs

  } catch(ex) {
    return ctx.throw(new CustomError({
      message: ex.message,
      status: ex.status,
      type: 'GET_TRANSACTION_LOGS_ERROR'
    }));

  }

};

/**
 * Get A Transaction Log
 *
 * @desc Retrieve A Transaction Log with the Given Id
 *
 * @param {Object} ctx Koa Instance Context
 * @param {Function} next Middleware dispatcher
 */
exports.getOne = async (ctx, next) => {

  debug(`Get Transaction Logs`);

  try {
    let transactionLog = await db.TransactionLog.findById(ctx.params.id);

    ctx.body = transactionLog;

  } catch(ex) {
    return ctx.throw(new CustomError({
      message: ex.message,
      status: ex.status,
      type: 'GET_TRANSACTION_LOG_ERROR'
    }));

  }

};
