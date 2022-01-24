import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilmModel from '../../models/FilmModel';
import * as action from '../../redux/films/action-creator';

export function FilmAdd() {
  const [newFilmState, setNewFilmState] = useState(new FilmModel());
  const dispatch = useDispatch();

  const addFilm = (film) => {
    dispatch(action.addFilm(film));
    console.log(film);
  };
  const handleChange = (evt, control) => {
    setNewFilmState({ ...newFilmState, [control]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addFilm(newFilmState);
    setNewFilmState(new FilmModel());
  };

  const template = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="film-title">Title </label>
        <input
          type="text"
          className="form-control"
          name="film-title"
          id="film-title"
          value={newFilmState.title}
          onChange={(ev) => handleChange(ev, 'title')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="film-year">Year </label>
        <input
          type="text"
          className="form-control"
          name="film-year"
          id="film-year"
          value={newFilmState.year}
          onChange={(ev) => handleChange(ev, 'year')}
        />
      </div>

      <button type="submit">ADD </button>
    </form>
  );
  return template;
}
