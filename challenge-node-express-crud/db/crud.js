import { learnConnect } from "./db.js";
import { ObjectId } from "mongodb";

export async function getAllBooks() {
  const { mongoClient, learningCollection } = await learnConnect();
  const cursor = learningCollection.find();
  const result = await cursor.toArray();
  mongoClient.close();
  return result;
}

export async function getBookById(id) {
  const dbId = ObjectId(id);
  const { mongoClient, learningCollection } = await learnConnect();
  const result = await learningCollection.findOne({ _id: dbId });
  mongoClient.close();
  return result;
}

export async function insertBook(book) {
  const { mongoClient, learningCollection } = await learnConnect();
  const result = await learningCollection.insertOne(book);
  mongoClient.close();
  return result;
}

export async function updateBook(id, partialBook) {
  const dbId = ObjectId(id);
  const { mongoClient, learningCollection } = await learnConnect();
  const result = await learningCollection.updateOne(
    { _id: dbId },
    { $set: { ...partialBook } }
  );
  mongoClient.close();
  return result;
}

export async function deleteBook(id) {
  const dbId = ObjectId(id);
  const { mongoClient, learningCollection } = await learnConnect();
  const result = await learningCollection.deleteOne({ _id: dbId });
  mongoClient.close();
  return result;
}
