const express = require("express");

const postControllers = require("../controllers/postControllers");

const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllAthletes)
  .post(postControllers.createNewAthlete);

router
  .route("/:id")
  .get(postControllers.getAthleteById)
  .delete(postControllers.deleteAthleteById)
  .put(postControllers.updateAthleteById);

module.exports = router;
