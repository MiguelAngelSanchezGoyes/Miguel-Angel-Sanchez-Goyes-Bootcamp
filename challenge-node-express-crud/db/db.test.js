import { mongoConnect } from "./db.js";
import * as dotenv from "dotenv";
dotenv.config();

describe("given a connection with MongoDB", () => {
  const initialDbName = process.env.DBNAME;
  test("then should exist ", async () => {
    const { mongoClient, dbCoders } = await mongoConnect();
    expect(mongoClient).toBeTruthy();
    console.log(dbCoders);
    expect(dbCoders).toBeTruthy();
    expect(dbCoders.databaseName).toBe(initialDbName);
    mongoClient.close();
  });
});
