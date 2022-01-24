import { Link } from "react-router-dom";
import { FILMS } from "../../models/film.data";

export function FilmList() {
  const listItems = FILMS.map((item) => (
    <li key={item.label}>
      <Link className="header-menu__item" to={item.year}>
        {item.title}
      </Link>
    </li>
  ));

  const template = (
    <nav>
      <ul className="header-menu">{listItems}</ul>
    </nav>
  );
  return template;
}
