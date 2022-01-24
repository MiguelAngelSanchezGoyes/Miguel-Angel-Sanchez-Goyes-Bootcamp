import { filmsConnect } from "./db/db.js";
import morgan from "morgan";
import express from "express";
import * as crud from "./db/crud.js";
const app = express();
const port = process.env.PORT;

const template = `
  <header>
    <h1>API con Express</h1>
  </header>
`;

const template404 = `
  <header>
    <h1>Página no encontrada</h1>
  </header>
`;

const Film = await filmsConnect();
console.log(Film);

// Middelwares

app.use(express.json());

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Midelware");
  next();
});

// Routing

app.get("/films", (req, res) => {
  crud.getAllFilms(Film).then((resp) => {
    res.json(resp);
  });
});

app.post("/films", (req, res) => {
  crud.insertFilm(Film, req.body).then((result) => {
    console.log(result);
    res.json(result);
  });
});

app.get("/films/:id", (req, res) => {
  crud.getFilmById(Film, req.params.id).then((result) => res.json(result));
});

app.patch("/film/:id", (req, res) => {
  crud
    .updateFilm(Film, req.params.id, req.body)

    .then((updateFilm) => {
      res.json(updateFilm);
    });
});

app.delete("/film/:id", (req, res, next) => {
  crud
    .deleteFilm(Film, req.params.id)
    .then((result) => {
      if (result) {
        res.status(202).json({ deleteId: req.params.id });
      } else {
        res.status(404).json({ message: "not found" });
      }
    })
    .catch((err) => {
      next(err);
    });
});

app.use((err, req, res, next) => {
  console.log("Gestion de errores");
  res.status(406).json({ name: err.name, msg: err.message });
});

app.listen(port, () => {
  console.log(`Server listening in http:localhost:${port}`);
});
