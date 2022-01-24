import { filmsConnect } from "./db.js";
import { ObjectId } from "mongodb";

export async function getAllFilms() {
  const { mongoClient, filmsCollection } = await filmsConnect();
  const cursor = filmsCollection.find();
  const result = await cursor.toArray();
  mongoClient.close();
  return result;
}

export async function getFilmById(id) {
  const dbId = ObjectId(id);
  const { mongoClient, filmsCollection } = await filmsConnect();
  const result = await filmsCollection.findOne({ _id: dbId });
  mongoClient.close();
  return result;
}

export async function insertFilm(film) {
  const { mongoClient, filmsCollection } = await filmsConnect();
  const result = await filmsCollection.insertOne(film);
  mongoClient.close();
  return result;
}

export async function updateFilm(id, partialfilm) {
  const dbId = ObjectId(id);
  const { mongoClient, filmsCollection } = await filmsConnect();
  const result = await filmsCollection.updateOne(
    { _id: dbId },
    { $set: { ...partialfilm } }
  );
  mongoClient.close();
  return result;
}

export async function deleteFilm(id) {
  const dbId = ObjectId(id);
  const { mongoClient, filmsCollection } = await filmsConnect();
  const result = await filmsCollection.deleteOne({ _id: dbId });
  mongoClient.close();
  return result;
}
