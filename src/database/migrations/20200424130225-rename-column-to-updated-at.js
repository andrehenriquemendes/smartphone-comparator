'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('smartphones', 'update_at', 'updated_at');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('smartphones', 'updated_at', 'update_at');

  }
};
