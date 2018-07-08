'use strict';

module.exports = (sequelize, DataTypes) => {
  let TransactionLog = sequelize.define('TransactionLog', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    from_currency: {
      type: DataTypes.STRING
    },

    to_currency: {
      type: DataTypes.STRING
    },

    amount: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    },

    rate: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    },

    equivalent: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    }
  });

  return TransactionLog;
};
