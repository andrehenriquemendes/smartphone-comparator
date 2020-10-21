'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('smartphone', 'update_at', Sequelize.DATE);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('smartphone', 'update_at');
  }
}
