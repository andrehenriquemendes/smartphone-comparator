'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('smartphones', 'batterylife', {type: Sequelize.ARRAY(Sequelize.STRING)});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('smartphones', 'batterylife', {type: Sequelize.STRING});
  }
};
