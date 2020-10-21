'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('smartphone', 'create_at', Sequelize.DATE);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('smartphone', 'create_at');
  }
}
