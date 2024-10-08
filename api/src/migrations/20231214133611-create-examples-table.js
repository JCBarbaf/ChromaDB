'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('assistant_examples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assistantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'assistants',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prompt: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
      .then(() => queryInterface.addIndex('assistant_examples', ['assistantId'], {
        name: 'example_assistantId_fk'
      }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('assistant_examples')
  }
}
