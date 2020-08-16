module.exports = (sequelize, DataTypes) => {
  const oauth_infos = sequelize.define("oauth_infos", {
    provider: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    providerId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expires_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expires_in: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_issued_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
  });
  oauth_infos.associate = (models) => {
    oauth_infos.belongsTo(models.users, { foreignKey: "userId", as: "users", allowNull: false });
  };
  return oauth_infos;
}; 