'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      // Band
      Set_time.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })

      Set_time.belongsTo(Event), {
        foreignKey: 'event_id',
        as: 'event'
      }

      Set_time.belongsTo(Stage, {
        foreignKey:'stage_id',
        as: 'stage'
      })
    }
  }
  Set_time.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    band_id: {
      allowNull: false,
      type: DataTypes.INTEGER

    },
    event_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    band_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    start_time: {
      allowNull: false,
      type: DataTypes.DATE
    },
    end_time: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'stage',
    timestamps: false
  });
  return Set_time;
};