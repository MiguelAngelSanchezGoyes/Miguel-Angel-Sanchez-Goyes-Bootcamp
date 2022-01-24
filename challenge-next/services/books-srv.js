import { BOOKS } from "../model/books.data";

export function createBookSrv() {
  const books = BOOKS;

  const getAllBooks = () => {
    return BOOKS;
  };
  const getBookData = (id) => {
    return books.find((item) => +item.id === +id);
  };

  return {
    getAllBooks,
    getBookData,
  };
}
