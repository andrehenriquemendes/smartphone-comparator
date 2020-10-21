'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('smartphones', 'kiCamera', Sequelize.FLOAT),
      queryInterface.addColumn('smartphones', 'kiConnectivity', Sequelize.FLOAT),
      queryInterface.addColumn('smartphones', 'kiBattery', Sequelize.FLOAT)
    ])  ;
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('smartphones', 'kiCamera'),
        queryInterface.removeColumn('smartphones', 'kiConnectivity'),
        queryInterface.removeColumn('smartphones', 'kiBattery')  
    ]);
  }
};
