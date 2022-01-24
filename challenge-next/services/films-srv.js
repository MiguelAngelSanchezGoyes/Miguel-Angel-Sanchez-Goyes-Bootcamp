import { FILMS } from "../model/films.data";

export function createFilmSrv() {
  const films = FILMS;

  const getAllFilms = () => {
    return FILMS;
  };
  const getFilmData = (id) => {
    return films.find((item) => +item.id === +id);
  };

  return {
    getAllFilms,
    getFilmData,
  };
}
