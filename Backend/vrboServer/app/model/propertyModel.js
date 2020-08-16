const sql = require("../../models");
const { QueryTypes, Op } = require("sequelize");

const Property = {}

Property.getPropertyCount = (
  featureJoin,
  locationJoin,
  neighbourJoin,
  bookOptionJoin,
  whereClause,
  rating,
  category
) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query(
        `SELECT COUNT(*) AS propCount FROM properties ${featureJoin} ${locationJoin} ${neighbourJoin} ${bookOptionJoin} WHERE properties.rating IN (:rating) AND properties.category IN (:category) ${whereClause}`,
        {
          replacements: {
            rating: rating,
            category: category,
          },
          type: QueryTypes.SELECT,
        }
      )
      .then((result) => resolve(result))
      .catch((err) => {
        reject(err);
      });
  });
};

Property.getAllProperties = (query, rating, category, pageNum) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query(`${query} LIMIT :offset, 20;`, {
        replacements: {
          rating: rating,
          category: category,
          offset: pageNum,
        },
        type: QueryTypes.SELECT,
      })
      .then((result) => resolve(result))
      .catch((err) => {
        reject(err);
      });
  });
};

Property.getPricePerNightOfProperty = (propId) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query("SELECT pricePerNight from properties WHERE id = :propId", {
        replacements: {
          propId: propId,
        },
        type: QueryTypes.SELECT,
      })
      .then((result) => resolve(result))
      .catch((err) => {
        reject(err);
      });
  });
};

Property.getPropertyWithGeos = (id) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query(
        `SELECT * from properties JOIN prop_geos ON properties.id = prop_geos.propId JOIN prop_neighbourhoods ON prop_neighbourhoods.propId = properties.id JOIN prop_bookopts ON prop_bookopts.propId = properties.id WHERE properties.id = :id`,
        {
          replacements: {
            id: id,
          },
          type: QueryTypes.SELECT,
        }
      )
      .then((result) => resolve(result))
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = Property;
