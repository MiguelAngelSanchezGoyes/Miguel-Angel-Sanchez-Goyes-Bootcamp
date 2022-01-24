import { learnConnect } from "./db.js";
import * as learningSrv from "./crud.js";

describe("given a connection with a MongoDB", () => {
  describe("when a collection is defined and populated", () => {
    // Arrange
    let mongoClient;
    let learningCollection;
    let first_Id;
    let initialCount;
    beforeEach(async () => {
      // Arrange
      const result = await booksPopulate();
      first_Id = result.insertedIds["0"];
      initialCount = result.insertedCount;
      // Act
      ({ mongoClient, learningCollection } = await learnConnect());
    });

    afterEach(() => {
      mongoClient.close();
    });

    test("should connect to the collection", async () => {
      //Assert
      expect(learningCollection).toBeTruthy();
    });

    test("should get all the items", async () => {
      // Arrange
      //Act
      const result = await learningSrv.getAllBooks();
      //Assert
      expect(result.length).toBe(initialCount);
    });

    test("should get one item by id", async () => {
      const result = await learningSrv.getBookById(first_Id.valueOf());
      expect(result).toHaveProperty("_id");

      expect(result.title).toBe("Software");
    });

    test("should add a new item", async () => {
      // Arrange
      const newBook = {
        title: "Hyperion",
        year: "1989",
        txtAuthors: "Dan Simmons",
      };
      //Act
      const result = await learningSrv.insertBook(newBook);
      //Assert
      expect(result.acknowledged).toBe(true);
      expect(result).toHaveProperty("insertedId");
    });

    test("should update a item", async () => {
      // Arrange
      const newBook = {
        title: "Hyperion",
        year: "1989",
        txtAuthors: "",
      };
      //Act
      const result = await learningSrv.updateBook(first_Id.valueOf(), newBook);
      //Assert
      expect(result.acknowledged).toBe(true);
      expect(result.matchedCount).toBe(1);
      expect(result.modifiedCount).toBe(1);
    });

    test("should delete a item", async () => {
      // Arrange
      //Act
      const result = await learningSrv.deleteBook(first_Id.valueOf());
      //Assert
      expect(result.acknowledged).toBe(true);
      expect(result.deletedCount).toBe(1);
    });
  });
});
