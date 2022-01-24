import * as dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";

export async function mongoConnect() {
  const user = process.env.DBUSER;
  const passwd = process.env.DBPASSWD;
  const dataBaseName = process.env.DBNAME;
  console.log(user, passwd);
  const uri = `mongodb+srv://${user}:${passwd}@miguelcluster0.egcdt.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;

  const mongooseConnect = await mongoose.connect(uri);

  return;
}

export async function filmsConnect() {
  const collection = process.env.LEARNING_COLLECTION;
  console.log(collection);
  await mongoConnect();

  const filmSchema = new mongoose.Schema({
    title: String,
    year: String,
    isViewed: Boolean,
  });
  filmSchema.methods.algo = function () {};

  filmSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      delete returnedObject.__v;
    },
  });

  const Film = mongoose.model(collection, filmSchema);

  return Film;
}
