const router = require("express").Router();
const review = require("../controller/reviewController");

router.get("/", review.getReviewsForProperty);

module.exports = router;
