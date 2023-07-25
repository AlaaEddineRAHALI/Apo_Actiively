const express = require("express");
const router = express.Router();
const registerSchema = require("../../validations/schemas/organismSchema");
const loginSchema = require("../../validations/schemas/loginSchema");
const createActivitySchema = require("../../validations/schemas/activitySchema");
const validator = require("../../validations/validator");
const controllerHandler = require("../../helpers/controllerHandler");
const controller = require("../../controllers/v1/organismController");
const activitiesController = require("../../controllers/v1/activityController");
const { validateToken } = require("../../middlewares/JWT");

router
  /**
   * POST /api/v1/register
   * @tags POST
   * @summary Register an organism
   * @param {object} request.body - application/json
   * @return {object} 200 - Organism with email "current email" successfully created !
   * @return {object} 400 - Bad request
   */
  .route("/register")

  .post(validator(registerSchema), controllerHandler(controller.register));
router
  .route("/login")
  /**
   * POST /api/v1/login
   * @tags POST
   * @summary Login an organism
   * @param {object} request.body - application/json
   * @return {object} 200 - Logged-in !
   * @return {object} 400 - Bad request
   */
  /**
   * POST /api/v1/login
   * @tags POST
   * @summary Login an organism
   * @param {object} request.body - application/json
   * @return {object} 200 - Logged-in !
   * @return {object} 400 - Bad request
   * @example response - 200
   */
  .post(validator(loginSchema), controllerHandler(controller.login));
router
  .route("/profile")
  /**
   * GET /api/v1/organism/profile
   * @tags GET
   * @summary Get the profile of an organism
   * @param {object} request.body - application/json
   * @security authorization
   * @return {object} 200 - successfully response
   * @return {object} 400 - Bad request
   */
  .get(validateToken, controllerHandler(controller.profile));
router
  .route("/profile/edit")
  /**
   * PATCH /api/v1/organism/profile/edit
   * @tags PATCH
   * @summary Edit an organism
   * @param {object} request.body - application/json
   * @security authorization
   * @return {object} 200 - Organism updated !
   * @return {object} 400 - Bad request
   */
  .patch(validateToken, controllerHandler(controller.updateProfile));
router
  .route("/profile/delete")
  /**
   * DELETE /api/v1/organism/profile/delete
   * @tags DELETE
   * @summary Delete the profile of an organism currently logged in
   * @param {object} request.body - application/json
   * @security authorization
   * @return {object} 200 - Organism with id {id} with related activities deleted !
   * @return {object} 400 - Bad request
   */
  .delete(validateToken, controllerHandler(controller.deleteProfile));
router
  .route("/create")
  /**
   * POST /api/v1/organism/create
   * @tags POST
   * @summary Create an activity (organism connected)
   * @description The name as the UNIQUE constraint
   * @param {object} request.body - application/json
   * @return {object} 400 - Bad request
   * @return {object} 200 - Activity with id {id} successfully created !
   */
  .post(
    validateToken,
    validator(createActivitySchema),
    controllerHandler(activitiesController.postOneActivity)
  );
router
  .route("/activities")
  /**
   * GET /api/v1/organism/activities
   * @tags GET
   * @summary Get all activities from the connected organism
   * @security authorization
   * @return {object} 200 - response success
   * @return {object} 400 - Bad request
   * */
  .get(
    validateToken,
    controllerHandler(activitiesController.getOrganismActivities)
  );
router
  .route("/activity/:id")
  /**
   * GET /api/v1/organism/activity/{id}
   * @summary Get one activity by id (organism connected)
   * @tags GET
   * @param {number} id.path
   * @security authorization
   * @return {Activity} 200 - success response - application/json
   * @return {object} 400 - Bad request
   */
  .get(
    validateToken,
    controllerHandler(activitiesController.getOneOrganismActivity)
  );
router
  .route("/activity/:id/delete")
  /**
   * DELETE /api/v1/organism/activity/{id}/delete
   * @summary delete one activity by id (organism connected)
   * @tags DELETE
   * @param {number} id.path
   * @security authorization
   * @return {Activity} 200 - success response - application/json
   * @return {object} 400 - Bad request
   */
  .delete(
    validateToken,
    controllerHandler(activitiesController.deleteOneActivity)
  );
router
  .route("/activity/:id/edit")
  /**
   * PATCH /api/v1/organism/activity/{id}/edit
   * @tags PATCH
   * @summary Update an activity (organism connected)
   * @description The name as the UNIQUE constraint
   * @param {object} request.body - application/json
   * @security authorization
   * @return {object} 400 - Bad request
   * @return {object} 200 - Activity with id {id} successfully updated!
   * */
  .patch(
    validateToken,
    controllerHandler(activitiesController.updateOneActivity)
  );

module.exports = router;
