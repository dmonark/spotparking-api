module.exports = (sequelize, DataTypes) => {
  const parking = sequelize.define('parking', {
    spot: {
			type: DataTypes.INTEGER,
			allowNull: false
    },
		plate: {
			type: DataTypes.STRING,
			allowNull: false
		},
    color: {
			type: DataTypes.ENUM,
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
			type: DataTypes.DATE
		}
  });
  parking.associate = function(models) {
    // associations can be defined here
  };
  return parking;
};