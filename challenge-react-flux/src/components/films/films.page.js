import { FilmList } from "./film.list";
import { Card } from "../core/card";

export function FilmPage() {
  const title = "FILMS OF THE YEAR";
  const template = (
    <div>
      <h2>{title}</h2>
      <Card title="FilmList">
        <FilmList />
      </Card>
    </div>
  );
  return template;
}
