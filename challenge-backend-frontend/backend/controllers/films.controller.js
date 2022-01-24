const Film = require("../models/film.model.js");

async function getAllFilms(req, res, next) {
  try {
    const result = await Film.find({});
    res.send(result);
  } catch (err) {
    next(err);
  }
}

function getFilmById(req, res, next) {
  Film.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
}

function addFilm(req, res, next) {
  const film = req.body;
  if (!film.title) {
    next(new Error());
  }
  film.isViewed = film.isViewed ? film.isViewed : false;
  const newFilm = new Film(film);
  newFilm
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
}

function updateFilm(req, res, next) {
  Film.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updateFilm) => {
      res.json(updateFilm);
    })
    .catch((err) => next(err));
}

function deleteFilm(req, res, next) {
  Film.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (result) {
        res.status(202).json({ deleteId: req.params.id });
      } else {
        res.status(404).json({ message: "Film not found" });
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  getAllFilms,
  getFilmById,
  addFilm,
  updateFilm,
  deleteFilm,
};
