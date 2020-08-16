module.exports = (sequelize, DataTypes) => {
  const properties = sequelize.define("properties", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sleeps: {
      type: DataTypes.STRING,
    },
    bedRooms: {
      type: DataTypes.STRING,
    },
    bathRooms: {
      type: DataTypes.STRING,
    },
    halfBaths: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    minStay: {
      type: DataTypes.STRING,
    },
    pricePerNight: {
      type: DataTypes.STRING,
    },
    totalPrice: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  return properties;
};


// {
//     "title": "BRAND NEW LISTING in SEASIDE!! - WEST INDIAN – 15% Off August!! - 90-Seconds to Beach, 2 Minutes...",
//     "category": "house",
//     "sleeps": 2,
//     "bedRooms": 4,
//     "bathRooms": 3,
//     "halfBaths": 3,
//     "area":  "737 sq.ft",
//     "minStay": '3-5 nights',
//     "pricePerNight":  304,
//     "totalPrice": 6166,
//     "rating": 4
//   }