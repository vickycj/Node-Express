'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      typo: {
        type: Sequelize.STRING
      },
      actor_id: {
        type: Sequelize.INTEGER
      },
      actor_login: {
        type: Sequelize.INTEGER
      },
      avatar_url: {
        type: Sequelize.TEXT
      },
      repo_id: {
        type: Sequelize.INTEGER
      },
      repo_name: {
        type: Sequelize.STRING
      },
      repo_url: {
        type: Sequelize.TEXT
      },
      created_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};