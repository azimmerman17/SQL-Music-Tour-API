'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Set_times', {
      set_time_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      band_id: {
        allowNull: false,
        type: Sequelize.INTEGER

      },
      event_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      band_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Set_times');
  }
};