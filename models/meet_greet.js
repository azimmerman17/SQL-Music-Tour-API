'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meet_greet.init({
    meet_greet_id: {
      autoIncrement: true,
      primaryKey: true,
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
    meet_start_time: {
      allowNull: false,
      type: DataTypes.DATE
    },
    meet_end_time: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Meet_greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return Meet_greet;
};