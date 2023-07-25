const express = require("express");

const router = express.Router();
const validator = require("../../validations/validator");
const searchSchema = require("../../validations/schemas/searchSchema");
const controller = require("../../controllers/v1/activityController");
const controllerHandler = require("../../helpers/controllerHandler");

router.route("/:id").get(controllerHandler(controller.getOneActivty));
router
  .route("/search")
  .post(validator(searchSchema), controllerHandler(controller.getAllByKeyword));

module.exports = router;
