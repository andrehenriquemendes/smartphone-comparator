'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('smartphone', 'smartphones');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('smartphones', 'smartphone');
  }
};
