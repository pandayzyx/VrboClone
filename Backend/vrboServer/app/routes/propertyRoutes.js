const router = require("express").Router();
const property = require('../controller/propertyController');

router.get("/", property.getPropertiesWithPagination);
router.get("/getTotalCost", property.getTotalCost);
router.get("/:id", property.getProperty);

module.exports = router;
