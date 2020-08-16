const sql = require("../../models");
const { QueryTypes } = require("sequelize");

const OauthInfos = {};

OauthInfos.createRow = (
  provider,
  providerId,
  accessToken,
  imageUrl,
  expires_at,
  expires_in,
  first_issued_at,
  userId
) => {
  return new Promise((resolve, reject) => {
    sql.oauth_infos
      .create({
        provider: provider,
        providerId: providerId,
        accessToken: accessToken,
        imageUrl: imageUrl,
        expires_at: expires_at,
        expires_in: expires_in,
        first_issued_at: first_issued_at,
        userId: userId,
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

OauthInfos.updateInfo = (
  email,
  accessToken,
  providerId,
  imageUrl,
  expires_at,
  expires_in,
  first_issued_at
) => {
  return new Promise((resolve, reject) => {
    sql.sequelize
      .query(
        "UPDATE oauth_infos SET accessToken = $accessToken, providerId = $providerId, imageUrl = $imageUrl, expires_at = $expires_at, expires_in = $expires_in, first_issued_at = $first_issued_at WHERE userId = (SELECT id FROM users WHERE email = $email)",
        {
          bind: {
            email: email,
            accessToken: accessToken,
            providerId: providerId,
            imageUrl: imageUrl,
            expires_at: expires_at,
            expires_in: expires_in,
            first_issued_at: first_issued_at,
          },
          type: QueryTypes.UPDATE,
        }
      )
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

module.exports = OauthInfos;
