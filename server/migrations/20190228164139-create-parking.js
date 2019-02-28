module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('parkings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spot: {
				allowNull: false,
        type: Sequelize.INTEGER
      },
      plate: {
				allowNull: false,
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.ENUM,
				allowNull: false,
        values: [
          'white',
          'black',
					'blue',
					'red'
        ],
        defaultValue: 'white'
      },
      outAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parkings');
  }
};