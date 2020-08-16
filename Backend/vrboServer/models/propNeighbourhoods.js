module.exports = (sequelize, DataTypes) => {
  const prop_neighbourhoods = sequelize.define("prop_neighbourhoods", {
    OceanLakes: {
      type: DataTypes.BOOLEAN,
    },
    MyrtleBeachResort: {
      type: DataTypes.BOOLEAN,
    },
    KingstonPlantation: {
      type: DataTypes.BOOLEAN,
    },
    OceanCreekResort: {
      type: DataTypes.BOOLEAN,
    },
    propId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });
  prop_neighbourhoods.associate = (models) => {
    prop_neighbourhoods.belongsTo(models.properties, {
      foreignKey: "propId",
      as: "properties",
      allowNull: false,
    });
  };
  return prop_neighbourhoods;
};
