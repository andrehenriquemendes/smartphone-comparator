'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('smartphones', 'create_at', 'created_at');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('smartphones', 'created_at', 'create_at');

  }
};
