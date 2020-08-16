module.exports = (sequelize, DataTypes) => {
  const prop_location = sequelize.define("prop_location", {
    Oceanfront: {
      type: DataTypes.BOOLEAN,
    },
    Beachfront: {
      type: DataTypes.BOOLEAN,
    },
    Beach: {
      type: DataTypes.BOOLEAN,
    },
    Ocean: {
      type: DataTypes.BOOLEAN,
    },
    Lake: {
      type: DataTypes.BOOLEAN,
    },
    Mountains: {
      type: DataTypes.BOOLEAN,
    },
    Downtown: {
      type: DataTypes.BOOLEAN,
    },
    Village: {
      type: DataTypes.BOOLEAN,
    },
    Rural: {
      type: DataTypes.BOOLEAN,
    },
    Ski_in: {
      type: DataTypes.BOOLEAN,
    },
    GolfCourse: {
      type: DataTypes.BOOLEAN,
    },
    BeachView: {
      type: DataTypes.BOOLEAN,
    },
    Waterfront: {
      type: DataTypes.BOOLEAN,
    },
    propId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });
  prop_location.associate = (models) => {
    prop_location.belongsTo(models.properties, {
      foreignKey: "propId",
      as: "properties",
      allowNull: false,
    });
  };
  return prop_location;
};
