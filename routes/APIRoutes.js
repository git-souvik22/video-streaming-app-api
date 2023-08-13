const express = require("express");
const router = express.Router();
const { videobrodcast, Videoplayer } = require("../controller/MovieController");

router.get("/api", videobrodcast);
router.get("/api/get-film-year/:year", videobrodcast);
router.get("/api/get-movie-id/:id", videobrodcast);
router.get("/video", Videoplayer);

module.exports = router;
