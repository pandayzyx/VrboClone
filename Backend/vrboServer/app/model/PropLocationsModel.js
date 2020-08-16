const sql = require("../../models");
const { QueryTypes, Op } = require("sequelize");

const PropertyLocations = {}

PropertyLocations.getAllLocations = (propId) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query("SELECT * from prop_locations WHERE propId = :propId", {
        replacements: {
          propId: propId,
        },
        type: QueryTypes.SELECT,
      })
      .then((locations) => {
        const res_locations = [];
        Object.keys(locations[0]).forEach((key) => {
          if (
            key != "id" &&
            key != "propId" &&
            key != "createdAt" &&
            key != "updatedAt"
          ) {
            if (locations[0][key]) {
              res_locations.push(key);
            }
          }
        });
        resolve(res_locations);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = PropertyLocations
