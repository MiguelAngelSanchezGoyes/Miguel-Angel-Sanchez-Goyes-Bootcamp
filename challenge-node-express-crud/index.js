import express from "express";
import * as crud from "./db/crud.js";
const app = express();
const port = process.env.PORT || 3009;

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

// Middelwares

app.use(express.json());

app.use((req, res, next) => {
  console.log("Midelware");
  next();
});

// Routing

app.get("/tasks", (req, res) => {
  crud.getAllBooks().then((resp) => {
    res.json(resp);
  });
});

app.post("/tasks", (req, res) => {
  crud.insertBook(req.body).then((result) => {
    const newTask = { ...req.body, _id: result.insertedId };
    res.json(newTask);
  });
});

app.get("/task/:id", (req, res) => {
  crud.getBookById(req.params.id).then((result) => res.json(result));
});

app.patch("/task/:id", (req, res) => {
  crud
    .updateBook(req.params.id, req.body)
    .then((result) => {
      console.log(result);
      return crud.getBookById(req.params.id);
    })
    .then((updateTask) => {
      res.json(updateTask);
    });
});

app.delete("/task/:id", (req, res) => {
  crud.deleteBook(req.params.id).then((result) => {
    res.json({ deleteId: req.params.id });
  });
});

app.listen(port, () => {
  console.log(`Server listening in http:localhost:${port}`);
});
