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
 * @apiDescription Get A Collection of Transaction Logs
 *
 * @apiSuccess {String} id Transaction Log Id
 * @apiSuccess {String} from_currency Currency Converting From
 * @apiSuccess {String} to_currency Currency Converting To
 * @apiSuccess {Number} amount Currency Amount
 * @apiSuccess {Number} equivalent Converted Currency Equivalent
 * @apiSuccess {String} createdAt Created At Timestamp
 * @apiSuccess {String} updatedAt Updated At Timestamp
 *
 * @apiSuccessExample Response Example:
 * [
 *    {
 *        "id": "3a8a1973-c724-431d-b464-07fd9d55ab4c",
 *        "from_currency": "usd",
 *        "to_currency": "EUR",
 *        "amount": 65000,
 *        "rate": 1.1724,
 *        "equivalent": 55441.83,
 *        "createdAt": "2018-07-08T12:43:44.398Z",
 *        "updatedAt": "2018-07-08T12:43:44.398Z"
 *    }
 * ]
 *
 */
router.get('/', transactionLogController.getCollection);

/**
 * @api {get} /api/transaction-logs/:id Get A Transaction Log
 * @apiVersion 1.0.0
 * @apiName GetTransactionLog
 * @apiGroup TransactionLog
 *
 * @apiDescription Get A Transaction Log With the Given Id
 *
 * @apiSuccess {String} id Transaction Log Id
 * @apiSuccess {String} from_currency Currency Converting From
 * @apiSuccess {String} to_currency Currency Converting To
 * @apiSuccess {Number} amount Currency Amount
 * @apiSuccess {Number} equivalent Converted Currency Equivalent
 * @apiSuccess {String} createdAt Created At Timestamp
 * @apiSuccess {String} updatedAt Updated At Timestamp
 *
 * @apiSuccessExample Response Example:
 *    {
 *        "id": "3a8a1973-c724-431d-b464-07fd9d55ab4c",
 *        "from_currency": "usd",
 *        "to_currency": "EUR",
 *        "amount": 65000,
 *        "rate": 1.1724,
 *        "equivalent": 55441.83,
 *        "createdAt": "2018-07-08T12:43:44.398Z",
 *        "updatedAt": "2018-07-08T12:43:44.398Z"
 *    }
 *
 */
router.get('/:id', transactionLogController.getOne);

// Expose Transaction Log Router
module.exports = router;
