'use strict';

module.exports = (sequelize, DataTypes) => {
  let Exchanger = sequelize.define('Exchanger', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    source: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    
    rates: {
      type: DataTypes.JSON,
      defaultValue: {}
    }
  });

  return Exchanger;
};
