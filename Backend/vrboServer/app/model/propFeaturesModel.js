const sql = require("../../models");
const { QueryTypes, Op } = require("sequelize");

const PropertyFeatures = {}

PropertyFeatures.getAllFeatures = (propId) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query("SELECT * from prop_features WHERE propId = :propId", {
        replacements: {
          propId: propId,
        },
        type: QueryTypes.SELECT,
      })
      .then((features) => {
        const res_features = [];
        Object.keys(features[0]).forEach((key) => {
          if (
            key != "id" &&
            key != "propId" &&
            key != "createdAt" &&
            key != "updatedAt"
          ) {
            if (features[0][key]) {
              res_features.push(key);
            }
          }
        });
        resolve(res_features);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = PropertyFeatures