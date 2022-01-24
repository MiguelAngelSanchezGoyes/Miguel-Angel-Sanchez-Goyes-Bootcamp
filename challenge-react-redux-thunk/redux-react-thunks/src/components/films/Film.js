import { useDispatch } from 'react-redux';
import * as action from '../../redux/films/action-creator';
import './film.css';

export function Film({ item }) {
  const dispatch = useDispatch();

  const toggleViewedFilm = () => {
    dispatch(action.toggleFilm(item));
  };

  const deleteFilm = () => {
    dispatch(action.deleteFilms(item.id));
  };

  const template = (
    <li className="task-container">
      <input
        type="checkbox"
        checked={item.isViewed}
        id={`task-is-completed-${item.id}`}
        onChange={() => {
          toggleViewedFilm(item);
        }}
      />
      {item.year} | {item.title}
      <span
        role="button"
        tabIndex="-1"
        className="task__delete-button"
        onClick={() => {
          deleteFilm(item);
        }}
      >
        X
      </span>
    </li>
  );
  return template;
}
