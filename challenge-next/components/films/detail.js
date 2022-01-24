import detail from "./detail.module.css";

export function Detail({ film }) {
  return (
    <div className={detail.main}>
      <h2>{film.title}</h2>
      <p>{film.year}</p>
    </div>
  );
}
