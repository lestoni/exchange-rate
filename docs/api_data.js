define({ "api": [
  {
    "type": "post",
    "url": "/api/exchange",
    "title": "Calcuate Exchange Rate",
    "version": "1.0.0",
    "name": "Calculate",
    "group": "Exchange",
    "description": "<p>Calcuate the equivalent exchange rate between currencies</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_currency",
            "description": "<p>Currency Converting From</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_currency",
            "description": "<p>Currency Converting To</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Currency Amount</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"from_currrency\": \"EUR\",\n  \"to_currency\": \"USD\",\n  \"amount\": 100.0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Exchange Rate Value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"equivalent\" : 129.00\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/exchange.js",
    "groupTitle": "Exchange"
  },
  {
    "type": "get",
    "url": "/api/transaction-logs/:id",
    "title": "Get A Transaction Log",
    "version": "1.0.0",
    "name": "GetTransactionLog",
    "group": "TransactionLog",
    "description": "<p>Get A Transaction Log With the Given Id</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Transaction Log Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "from_currency",
            "description": "<p>Currency Converting From</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to_currency",
            "description": "<p>Currency Converting To</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Currency Amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "equivalent",
            "description": "<p>Converted Currency Equivalent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created At Timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated At Timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"id\": \"3a8a1973-c724-431d-b464-07fd9d55ab4c\",\n    \"from_currency\": \"usd\",\n    \"to_currency\": \"EUR\",\n    \"amount\": 65000,\n    \"rate\": 1.1724,\n    \"equivalent\": 55441.83,\n    \"createdAt\": \"2018-07-08T12:43:44.398Z\",\n    \"updatedAt\": \"2018-07-08T12:43:44.398Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transaction-log.js",
    "groupTitle": "TransactionLog"
  },
  {
    "type": "get",
    "url": "/api/transaction-logs",
    "title": "Get Transaction Logs Collecton",
    "version": "1.0.0",
    "name": "GetTransactionLogsCollection",
    "group": "TransactionLog",
    "description": "<p>Get A Collection of Transaction Logs</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Transaction Log Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "from_currency",
            "description": "<p>Currency Converting From</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to_currency",
            "description": "<p>Currency Converting To</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Currency Amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "equivalent",
            "description": "<p>Converted Currency Equivalent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created At Timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated At Timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[\n   {\n       \"id\": \"3a8a1973-c724-431d-b464-07fd9d55ab4c\",\n       \"from_currency\": \"usd\",\n       \"to_currency\": \"EUR\",\n       \"amount\": 65000,\n       \"rate\": 1.1724,\n       \"equivalent\": 55441.83,\n       \"createdAt\": \"2018-07-08T12:43:44.398Z\",\n       \"updatedAt\": \"2018-07-08T12:43:44.398Z\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transaction-log.js",
    "groupTitle": "TransactionLog"
  }
] });
