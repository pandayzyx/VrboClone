const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const prop_geos = sequelize.define("prop_geos", {
    description: {
      type: Sequelize.TEXT('long'),
    },
    latitude: {
      type: DataTypes.DECIMAL(9,6),
    },
    longitude: {
      type: DataTypes.DECIMAL(9,6),
    },
    imgsrc: {
      type: DataTypes.STRING,
    },
    propId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  });
  prop_geos.associate = (models) => {
    prop_geos.belongsTo(models.properties, {
      foreignKey: "propId",
      as: "properties",
      allowNull: false,
    });
  };
  
  return prop_geos;
};
