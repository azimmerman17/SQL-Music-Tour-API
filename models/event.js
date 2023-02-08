'use strict';
const {
  Model
} = require('sequelize');
const meet_greet = require('./meet_greet');
const set_time = require('./set_time');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, Stage_events, Meet_greet, Set_time }) {
      // stages
      Event.belongsToMany(Stage, {
        foreignKey: 'event_id',
        as: 'stages', 
        through: Stage_events
      })

      // meet-greet
      Event.hasMany(Meet_greet, {
        foreignKey: 'meet_greet_id',
        as: 'meet_greet'
      })

      // set time
      Event.hasMany(Set_time, {
        foreignKey: 'Set_time_id',
        as: 'set_times'
      })
    }
  }

  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: false
  })
  return Event;
};