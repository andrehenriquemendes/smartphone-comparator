'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('smartphones', 'linkMagalu', Sequelize.ARRAY(Sequelize.STRING));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('smartphones', 'linkMagalu');
  }
};
