const Property = require("../model/propertyModel");
const PropertyGenFeatures = require("../model/propertyGenFeaturesModel");
const PropertyFeatures = require("../model/propFeaturesModel");
const PropertyLocations = require("../model/PropLocationsModel");

exports.getPropertiesWithPagination = (req, res) => {
  let pageNum = req.query.pageNum;
  let rating = req.query.rating;
  let category = req.query.category;
  let propFeatures = req.query.propFeatures;
  let locationtype = req.query.locationtype;
  let neighbourhoods = req.query.neighbourhoods;
  let bookOptions = req.query.bookOptions;
  let locationJoin = "";
  let featureJoin = "";
  let neighbourJoin = "";
  let bookOptionJoin = "";
  let query = ``;
  let whereClause = "";

  if (pageNum != undefined && pageNum > 0) {
    pageNum = (pageNum - 1) * 20;
  } else {
    pageNum = 0;
  }

  if (rating === undefined) {
    rating = [1, 2, 3, 4, 5];
  } else {
    rating = rating.split(",");
  }

  if (category === undefined) {
    category = ["Apartment", "House", "Villa", "Cottage", "test"];
  } else {
    category = category.split(",");
  }

  if (locationtype != undefined) {
    locationJoin =
      "JOIN prop_locations ON prop_locations.propId = properties.id";
    locationtype = locationtype.split(",");
    locationtype.forEach(
      (location) => (whereClause += ` AND prop_locations.${location} = true`)
    );
  }

  if (propFeatures != undefined) {
    featureJoin = "JOIN prop_features ON properties.id = prop_features.propId";
    propFeatures = propFeatures.split(",");
    propFeatures.forEach(
      (feature) => (whereClause += ` AND prop_features.${feature} = true`)
    );
  }

  if (bookOptions != undefined) {
    bookOptionJoin =
      "JOIN prop_bookopts ON prop_bookopts.propId = properties.id";
    bookOptions = bookOptions.split(",");
    bookOptions.forEach(
      (bookopt) => (whereClause += ` AND prop_bookopts.${bookopt} = true`)
    );
  }

  if (neighbourhoods != undefined) {
    neighbourJoin =
      "JOIN prop_neighbourhoods ON prop_neighbourhoods.propId = properties.id";
    neighbourhoods = neighbourhoods.split(",");
    neighbourhoods.forEach(
      (neighbourhood) =>
        (whereClause += ` AND prop_neighbourhoods.${neighbourhood} = true`)
    );
  }

  query = `SELECT * from properties JOIN prop_geos ON properties.id = prop_geos.propId ${featureJoin} ${locationJoin} ${neighbourJoin} ${bookOptionJoin} WHERE properties.rating IN (:rating) AND properties.category IN (:category) `;
  query += whereClause;

  let result;

  Property.getPropertyCount(
    featureJoin,
    locationJoin,
    neighbourJoin,
    bookOptionJoin,
    whereClause,
    rating,
    category
  )
    .then((response) => {
      result = response[0];
      return Property.getAllProperties(query, rating, category, pageNum);
    })
    .then((response) => {
      result.properties = response;
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errormsg: "Internal Server Error" });
    });
};

exports.getTotalCost = (req, res) => {
  const arrivalDate = req.query.arrivalDate;
  const destinationDate = req.query.destinationDate;
  const adultsCount = req.query.adultsCount;
  const childrenCount = req.query.childrenCount;
  const propId = req.query.propId;

  const startDate = new Date(arrivalDate);
  const endDate = new Date(destinationDate);

  const timeDiff = endDate.getTime() - startDate.getTime();

  const Difference_In_Days = timeDiff / (1000 * 3600 * 24);

  Property.getPricePerNightOfProperty(propId)
    .then((result) => {
      const price = Number(result[0].pricePerNight);
      let total = ((Number(adultsCount) + Number(childrenCount)) / 3) * price;
      total = Difference_In_Days * price;
      res.send({ totalPrice: total });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errmsg: "Internal Server Error" });
    });
};

exports.getProperty = (req, res) => {
  const id = req.params.id;

  let finalResult;

  Property.getPropertyWithGeos(id)
    .then((result) => {
      finalResult = result[0];
      return PropertyFeatures.getAllFeatures(id);
    })
    .then((result) => {
      finalResult.features = result;
      return PropertyLocations.getAllLocations(id);
    })
    .then((result) => {
      finalResult.locations = result;
      return PropertyGenFeatures.getAllGenFeatures(id);
    })
    .then((result) => {
      finalResult.genFeatures = result;
      result.bookedDates = [{ startDate: "08/02/2020", endDate: "08/09/2020" }];
      res.send(finalResult);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errmsg: "Internal Server Error" });
    });
};
