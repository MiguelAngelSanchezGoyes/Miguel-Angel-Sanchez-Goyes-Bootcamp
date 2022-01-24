import { filmsConnect } from "./db.js";
import { ObjectId } from "mongodb";

export async function getAllFilms(Film) {
  const result = await Film.find({});

  return result;
}

export async function getFilmById(Film, id) {
  const result = await Film.findById(id);
  return result;
}

export async function insertFilm(Film, film) {
  const newFilm = new Film(film);

  const result = await newFilm.save();
  return result;
}

export async function updateFilm(Film, id, partialFilm) {
  const result = await Film.findByIdAndUpdate(id, partialFilm, { new: true });

  return result;
}

export async function deleteFilm(Film, id) {
  const result = await Film.findByIdAndDelete(id);
  return result;
}
