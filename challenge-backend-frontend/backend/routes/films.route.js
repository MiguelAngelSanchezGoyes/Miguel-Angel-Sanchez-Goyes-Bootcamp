const express = require("express");
const router = express.Router();
const {
  getAllFilms,
  getFilmById,
  addFilm,
  updateFilm,
  deleteFilm,
} = require("../controllers/films.controller.js");

router.get("/", getAllFilms);
router.get("/:id", getFilmById);
router.post("/", addFilm);
router.patch("/:id", updateFilm);
router.delete("/:id", deleteFilm);

module.exports = router;
