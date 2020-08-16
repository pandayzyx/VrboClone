const sql = require("../../models");
const { QueryTypes, Op } = require("sequelize");

const Review = {}

Review.getReviewForProperty = (propId) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query(
        "SELECT * from reviews JOIN user_profiles ON user_profiles.id = reviews.userProfileId WHERE propId = :propId",
        {
          replacements: {
            propId: propId,
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

module.exports = Review;
