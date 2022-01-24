import { mongoConnect, filmsPopulate } from "./db.js";

describe("given a connection with MongoDB", () => {
  const initialDbName = process.env.DBNAME;
  test("then should exist ", async () => {
    const { mongoClient, db } = await mongoConnect();
    expect(mongoClient).toBeTruthy();
    console.log(db);
    expect(db).toBeTruthy();
    expect(db.databaseName).toBe(initialDbName);
    mongoClient.close();
  });

  describe("when a collection is defined", () => {
    test("then it should be crated and populated", async () => {
      //Arrange
      //Act
      const result = await filmsPopulate();
      console.log(result);
      //Assert
      expect(result).toBeTruthy();
      expect(result.acknowledged).toBe(true);
      expect(result.insertedCount).toBe(9);
    });
  });
});
