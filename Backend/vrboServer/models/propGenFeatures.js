module.exports = (sequelize, DataTypes) => {
    const prop_gen_features = sequelize.define("prop_gen_features", {
      Telephone: {
        type: DataTypes.BOOLEAN,
      },
      "Air Conditioning": {
        type: DataTypes.BOOLEAN,
      },
      Heating: {
        type: DataTypes.BOOLEAN,
      },
      "Lines Provided": {
        type: DataTypes.BOOLEAN,
      },
      "Washing Machine": {
        type: DataTypes.BOOLEAN,
      },
      "Clothes Dryer": {
        type: DataTypes.INTEGER,
      },
      "Parking": {
        type: DataTypes.BOOLEAN,
      },
      "Towels Provided": {
        type: DataTypes.BOOLEAN,
      },
      "FitnessRoom/ Equipment": {
        type: DataTypes.BOOLEAN,
      },
      "Iron & Board": {
        type: DataTypes.BOOLEAN,
      },
      "Hair Dryer": {
        type: DataTypes.BOOLEAN,
      },
      "Elevator": {
        type: DataTypes.BOOLEAN,
      },
      "Living Room": {
        type: DataTypes.BOOLEAN,
      },
      "Bed linens provided": {
        type: DataTypes.BOOLEAN,
      },
      "Iron and board": {
        type: DataTypes.BOOLEAN,
      },
      "Crib": {
        type: DataTypes.BOOLEAN,
      },
      "Kids high chair": {
        type: DataTypes.BOOLEAN,
      },
      propId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true
      }
    });
    prop_gen_features.associate = (models) => {
      prop_gen_features.belongsTo(models.properties, { foreignKey: "propId", as: "properties", allowNull: false });
    };
    return prop_gen_features;
  };
    