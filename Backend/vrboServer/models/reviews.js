const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define("reviews", {
    reviewby: {
      type: DataTypes.STRING,
    },
    ratings: {
      type: DataTypes.INTEGER,
    },
    review: {
      type: Sequelize.TEXT('medium'),
    },
    publishedat: {
      type: DataTypes.STRING,
    },
    propId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userProfileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  reviews.associate = (models) => {
    reviews.belongsTo(models.properties, {
      foreignKey: "propId",
      as: "properties",
      allowNull: false,
    });
    reviews.belongsTo(models.user_profiles, {
      foreignKey: "userProfileId",
      as: "user_profiles",
      allowNull: false,
    });
  };
  return reviews;
};
