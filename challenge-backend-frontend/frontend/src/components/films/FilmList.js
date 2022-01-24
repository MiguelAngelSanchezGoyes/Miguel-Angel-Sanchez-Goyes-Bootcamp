import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilmAdd } from './FilmAdd';
import { Card } from '../core/card';
import { Film } from './Film';
import * as action from '../../redux/films/action-creator';
import './filmlist.css';

export function FilmList() {
  const { films } = useSelector((state) => state.filmStore);

  const dispatch = useDispatch();

  useEffect(() => dispatch(action.loadFilms()), [dispatch]);

  console.log(films);
  const htmlFilms = films.map((item) => <Film key={item.id} item={item} />);
  console.log(films);
  console.log(htmlFilms);

  const template = (
    <div className="tasks-container">
      <h2>Film list</h2>
      <div id="formAddTask">
        <Card title="Add film">
          <FilmAdd />
        </Card>
      </div>
      <ul className="list-container">{htmlFilms}</ul>
    </div>
  );
  return template;
}
