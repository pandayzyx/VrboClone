module.exports = (sequelize, DataTypes) => {
  const user_profiles = sequelize.define("user_profiles", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profileImgSrc: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  });
  user_profiles.associate = (models) => {
    user_profiles.hasMany(models.reviews);
  };
  return user_profiles;
};
