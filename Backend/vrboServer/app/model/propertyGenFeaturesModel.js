const sql = require("../../models");
const { QueryTypes, Op } = require("sequelize");

const PropertyGenFeatures = {}

PropertyGenFeatures.getAllGenFeatures = (propId) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query("SELECT * from prop_gen_features WHERE propId = :propId", {
        replacements: {
          propId: propId,
        },
        type: QueryTypes.SELECT,
      })
      .then((genFeatures) => {
        const res_genFeatures = [];
        console.log(genFeatures);
        Object.keys(genFeatures[0]).forEach((key) => {
          if (
            key != "id" &&
            key != "propId" &&
            key != "createdAt" &&
            key != "updatedAt"
          ) {
            if (genFeatures[0][key]) {
              res_genFeatures.push(key);
            }
          }
        });
        resolve(res_genFeatures);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = PropertyGenFeatures;
