'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('smartphones', 'linkAmazon', Sequelize.ARRAY(Sequelize.STRING));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('smartphones', 'linkAmazon');
  }
};
