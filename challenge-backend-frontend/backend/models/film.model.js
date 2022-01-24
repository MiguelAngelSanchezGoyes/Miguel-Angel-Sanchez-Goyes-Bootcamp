require("dotenv").config();
const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  title: String,
  year: String,
  review: String,
  isViewed: Boolean,
});

filmSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
