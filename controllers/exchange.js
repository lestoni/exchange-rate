'use strict';
/**
 * Load Module Dependencies.
 */
const debug   = require('debug')('api:exchange-controller');
const moment  = require('moment');

const CustomError     = require('../lib/errors').CustomError;
const assertCurrency  = require('../lib/errors').assertCurrency;
const parseFloat      = require('../lib/utils').parseFloat;
const db              = require('../db');

/**
 * Calculate Exchange Rate
 *
 * @desc Get the Exchange Rate Between Currencies
 *
 * @param {Object} ctx Koa Instance Context
 * @param {Function} next Middleware dispatcher
 */
exports.calculate = async (ctx, next) => {
  const body = ctx.request.body;

  debug(`Calculate Exchange Rate of ${body.from_currency} to ${body.to_currency}`);

  ctx.checkBody('from_currency')
     .notEmpty('from_currency Value is Empty');
  ctx.checkBody('to_currency')
      .notEmpty('to_currency Value is Empty');
  ctx.checkBody('amount')
      .notEmpty('amount Value is Empty')
      .isFloat('amount Value is Not Number');

  if(ctx.errors) {
    return ctx.throw(new CustomError({
      validation_errors: ctx.errors,
      message: 'Payload Failed Validation',
      user_message: '',
      status: 400,
      type: 'EXCHANGE_RATE_VALIDATION_ERROR'
    }))
  }

  try {
    let exchangeRates = await db.Exchanger.findOne({});
    let rate          = 0.0;
    let equivalent    = 0.0;
    let baseCurrency  = 'EUR';
    let fromCurrency  = body.from_currency.toUpperCase();
    let toCurrency    = body.to_currency.toUpperCase();

    // Case 1: Convert From Euro
    if(fromCurrency == baseCurrency) {
      let toCurrencyRate    = exchangeRates.rates[toCurrency];
      assertCurrency(toCurrencyRate, toCurrency)

      rate = toCurrencyRate;
      equivalent = parseFloat(body.amount * toCurrencyRate);

    // Case 2: Convert To Euro
    } else if(toCurrency == baseCurrency) {
      let fromCurrencyRate    = exchangeRates.rates[fromCurrency];
      assertCurrency(fromCurrencyRate, fromCurrency);

      rate = fromCurrencyRate;
      equivalent = parseFloat(body.amount / fromCurrencyRate);

    // Case 3: Convert Between Currencies
    } else {
      let fromCurrencyRate    = exchangeRates.rates[fromCurrency];
      assertCurrency(fromCurrencyRate, fromCurrency);

      let toCurrencyRate    = exchangeRates.rates[toCurrency];
      assertCurrency(toCurrencyRate, toCurrency);

      equivalent = parseFloat((body.amount / toCurrencyRate) * fromCurrencyRate);

      rate = equivalent / (body.amount / fromCurrencyRate);

    }

    let transactionLog = await db.TransactionLog.create({
      from_currency: body.from_currency,
      to_currency: body.to_currency,
      rate: rate,
      amount: body.amount,
      equivalent: equivalent
    });

    ctx.body = {
      equivalent: equivalent
    };

  } catch(ex) {
    return ctx.throw(new CustomError({
      message: ex.message,
      user_message: ex.user_message,
      status: ex.status,
      type: 'EXCHANGE_RATE_ERROR'
    }));

  }
};
