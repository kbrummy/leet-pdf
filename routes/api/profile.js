const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/profile"
router.route("/")
//   .get(profileController.findAll)
  .post(profileController.create);

// Matches with "/api/profile/:id"
router
  .route("/")
//   .get(profileController.findById)
//   .put(profileController.update)
//   .delete(profileController.remove);
.post(profileController.create)


module.exports = router;
