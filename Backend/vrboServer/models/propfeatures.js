module.exports = (sequelize, DataTypes) => {
  const prop_features = sequelize.define("prop_features", {
    pool: {
      type: DataTypes.BOOLEAN,
    },
    privatepool: {
      type: DataTypes.BOOLEAN,
    },
    wifi: {
      type: DataTypes.BOOLEAN,
    },
    washer: {
      type: DataTypes.BOOLEAN,
    },
    allowPets: {
      type: DataTypes.BOOLEAN,
    },
    maxGuestCount: {
      type: DataTypes.INTEGER,
    },
    dryer: {
      type: DataTypes.BOOLEAN,
    },
    stove: {
      type: DataTypes.BOOLEAN,
    },
    oven: {
      type: DataTypes.BOOLEAN,
    },
    air_con: {
      type: DataTypes.BOOLEAN,
    },
    parking: {
      type: DataTypes.BOOLEAN,
    },
    tv: {
      type: DataTypes.BOOLEAN,
    },
    hot_tub: {
      type: DataTypes.BOOLEAN,
    },
    bed_linens: {
      type: DataTypes.BOOLEAN,
    },
    outdoor_grill: {
      type: DataTypes.BOOLEAN,
    },
    dishwasher: {
      type: DataTypes.BOOLEAN,
    },
    fire_place: {
      type: DataTypes.BOOLEAN,
    },
    microwave: {
      type: DataTypes.BOOLEAN,
    },
    propId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
  });
  prop_features.associate = (models) => {
    prop_features.belongsTo(models.properties, { foreignKey: "propId", as: "properties", allowNull: false });
  };
  return prop_features;
};

// const temp = {
//   propId: 2,
//   pool: true,
//   privatepool: true,
//   wifi: true,
//   washer: true,
//   dryer: true,
//   stove: true,
//   oven: true,
//   air_con: true,
//   parking: true,
//   tv: true,
//   hot_tub: true,
//   bed_linens: true,
//   outdoor_grill: true,
//   dishwasher: true,
//   fire_place: true,
//   microwave: true,
// };
