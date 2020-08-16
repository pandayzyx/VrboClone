const Review = require("../model/reviewModel");

exports.getReviewsForProperty = (req, res) => {
  const propId = req.query.propId;

  if (propId != null && propId != undefined) {
    Review.getReviewForProperty(propId)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ errmsg: "Internal Server Error" });
      });
  } else {
    res.send({
      message: "please send property id as a query",
      "sample Format": "api.vrbo.com/reviews?propId=3",
    });
  }
};
