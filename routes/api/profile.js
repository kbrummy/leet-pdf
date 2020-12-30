const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/profile"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create)

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(profileController.findById)
//// TODO: creating records is usually handled through a PUT request, not a POST request
  .post(profileController.create)


module.exports = router;
