"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("event_documentation", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      participantId: {
        type: Sequelize.INTEGER,
        references: {
          model: "participants",
          key: "id",
        },
        allowNull: false,
        foreignKey: true,
      },
      documentation: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("event_documentation");
  },
};
