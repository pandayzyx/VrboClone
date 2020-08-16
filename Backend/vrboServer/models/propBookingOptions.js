module.exports = (sequelize, DataTypes) => {
    const prop_bookopts = sequelize.define("prop_bookopts", {
      freeCancellation: {
        type: DataTypes.BOOLEAN,
      },
      instantConfirmation: {
        type: DataTypes.BOOLEAN,
      },
      dayConformation: {
        type: DataTypes.BOOLEAN,
      },
      propId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true
      }
    });
    prop_bookopts.associate = (models) => {
      prop_bookopts.belongsTo(models.properties, { foreignKey: "propId", as: "properties", allowNull: false });
    };
    return prop_bookopts;
  };
  