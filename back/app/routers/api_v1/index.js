const express = require("express");
const activityRouter = require("./activity");
const organismRouter = require("./organism");
const { apiController } = require("../../controllers/v1");
const customApiError = require("../../errors/apiErrors");
const router = express.Router();

/**
 * Gère les routes commencant par /api
 * Recoit une requête HTTP et exécute le code associé
 * Ici il délègue le travail à des "sous" Router ./category.js
 */

router.all("/", apiController.home);

// On préfixe les routers de l'API
router.use("/activity", activityRouter);
router.use("/organism", organismRouter);
router.use(() => {
  throw new customApiError("API Route not found", { status: 404 });
});

module.exports = router;
