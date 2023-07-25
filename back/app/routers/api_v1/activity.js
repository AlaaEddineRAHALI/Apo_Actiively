const express = require("express");
const router = express.Router();
const validator = require("../../validations/validator");
const searchSchema = require("../../validations/schemas/searchSchema");
const controller = require("../../controllers/v1/activityController");
const controllerHandler = require("../../helpers/controllerHandler");
/**
 * GET /api/v1/activity/{id}
 * @summary Get one activity by id
 * @tags GET
 * @param {number} id.path
 * @return {object} 200 - success response
 * @return {object} 400 - Bad request
 * */
router.route("/:id").get(controllerHandler(controller.getOneActivty));
/**
 * POST /api/v1/activity/search
 * @tags POST
 * @summary Find all activities filtered by keyword & zip_code
 * @param {object} request.body
 * @return {object} 200 - Success response
 * @return {object} 400 - Bad request
 * */
router
  .route("/search")
  .post(validator(searchSchema), controllerHandler(controller.getAllByKeyword));

module.exports = router;
