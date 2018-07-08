'use strict';
/**
 * Load Module Dependencies.
 */
const Router            = require('koa-router');

const transactionLogController = require('../controllers/transaction-log');

const router  = new Router();

/**
 * @api {get} /api/transaction-logs Get Transaction Logs Collecton
 * @apiVersion 1.0.0
 * @apiName GetTransactionLogsCollection
 * @apiGroup TransactionLog
 *
 * @apiDescription Calcuate the equivalent exchange rate between currencies
 *
 * @apiParam {String} from_currency Currency Converting From
 * @apiParam {String} to_currency Currency Converting To
 * @apiParam {Number} amount Currency Amount
 *
 * @apiParamExample Request Example:
 *  {
 *    "from_currrency": "EUR",
 *    "to_currency": "USD",
 *    "amount": 100.0
 *  }
 *
 * @apiSuccess {Number} value Exchange Rate Value
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "equivalent" : 129.00
 *  }
 *
 */
router.get('/', transactionLogController.getCollection);

/**
 * @api {get} /api/transaction-logs/:id Get A Transaction Log
 * @apiVersion 1.0.0
 * @apiName GetTransactionLog
 * @apiGroup TransactionLog
 *
 * @apiDescription Calcuate the equivalent exchange rate between currencies
 *
 * @apiParam {String} from_currency Currency Converting From
 * @apiParam {String} to_currency Currency Converting To
 * @apiParam {Number} amount Currency Amount
 *
 * @apiParamExample Request Example:
 *  {
 *    "from_currrency": "EUR",
 *    "to_currency": "USD",
 *    "amount": 100.0
 *  }
 *
 * @apiSuccess {Number} value Exchange Rate Value
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "equivalent" : 129.00
 *  }
 *
 */
router.get('/:id', transactionLogController.getOne);

// Expose User Router
module.exports = router;
