/* eslint-disable arrow-body-style */
import { filmActionTypes } from './action-type';
import * as http from '../../services/http-film';

export const loadFilms = () => {
  return (dispatch) => {
    http.getFilms().then((listFilms) => {
      dispatch({
        type: filmActionTypes.load,
        films: listFilms,
      });
    });
  };
};

export const addFilm = (film) => {
  return (dispatch) => {
    http.setFilm(film).then((addedFilm) =>
      dispatch({
        type: filmActionTypes.add,
        film: addedFilm,
      })
    );
  };
};

export const toggleFilm = (item) => {
  return (dispatch) => {
    http.updateFilm(item).then((filmUpdated) =>
      dispatch({
        type: filmActionTypes.toggle,
        id: filmUpdated.id,
      })
    );
  };
};

export const deleteFilms = (id) => {
  return (dispatch) => {
    http.removeFilm(id).then((resp) => {
      if (resp.ok) {
        dispatch({
          type: filmActionTypes.remove,
          id,
        });
      }
    });
  };
};
