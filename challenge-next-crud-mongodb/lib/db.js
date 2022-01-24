import { MongoClient } from "mongodb";
/* const MongoClient = require('mongodb')
Es lo mismo pero necesito añadir en el pack.json esto ("type": "module",), ahora puedo hacer (node db.js) */
import dataFilms from "../model/films.json";

export async function mongoConnect() {
  const user = process.env.DBUSER;
  const passwd = process.env.DBPASSWD;
  const dataBaseName = process.env.DBNAME;
  console.log(user, passwd);
  const connectSting = `mongodb+srv://${user}:${passwd}@miguelcluster0.egcdt.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;

  const mongoClient = new MongoClient(connectSting);
  const mongoConnect = await mongoClient.connect();
  const db = mongoConnect.db();

  /* Necesito devilver el cliente y la base de datos conectada */
  return { mongoClient, db };
}

export async function filmsConnect() {
  const collection = process.env.FILMS_COLLECTION;
  const { mongoClient, db } = await mongoConnect();
  const filmCollection = db.collection(collection);
  return { mongoClient, filmCollection };
}

export async function filmsPopulate() {
  const collection = process.env.FILMS_COLLECTION;
  const { mongoClient, db } = await mongoConnect();
  const list = await db.listCollections({ name: collection }).toArray();
  if (list.length) {
    await db.dropCollection(collection);
  }
  const filmCollection = db.collection(collection);
  const result = await filmCollection.insertMany(dataFilms.films);
  mongoClient.close;
  return result;
}
