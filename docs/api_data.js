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
    "filename": "routes/transaction-log.js",
    "groupTitle": "TransactionLog"
  }
] });
