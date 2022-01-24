import * as dotenv from "dotenv";

dotenv.config();

import { MongoClient } from "mongodb";

export async function mongoConnect() {
  const user = process.env.DBUSER;
  const passwd = process.env.DBPASSWD;
  const dataBaseName = process.env.DBNAME;

  const connectSting = `mongodb+srv://${user}:${passwd}@miguelcluster0.egcdt.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;

  const mongoClient = new MongoClient(connectSting);
  const mongoConnect = await mongoClient.connect();
  const dbCoders = mongoConnect.db();

  return { mongoClient, dbCoders };
}

export async function learnConnect() {
  const collection = process.env.LEARNING_COLLECTION;
  const { mongoClient, dbCoders } = await mongoConnect();
  const learningCollection = dbCoders.collection(collection);
  return { mongoClient, learningCollection };
}
