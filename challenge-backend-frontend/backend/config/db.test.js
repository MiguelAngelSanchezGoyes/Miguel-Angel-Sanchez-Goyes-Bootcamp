require("dotenv").config();
const mongoConnect = require("./db.js");
const mongoose = require("mongoose");

describe("given a connection with MongoDB", () => {
  afterAll(() => {
    mongoose.disconnect();
  });

  test("then should exist our DB ", async () => {
    process.env.DBUSER = "Miwelord13";
    const connect = await mongoConnect();
    expect(connect).toBeTruthy();
    expect(connect.connections).toBeTruthy();
    const Film = require("../models/film.model.js");
    expect(Film.collection.modelName).toBe("Film");
  });
});
