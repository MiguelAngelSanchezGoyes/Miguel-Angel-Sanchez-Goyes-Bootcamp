import card from "./card.module.css";

export function Film({ title, year }) {
  return (
    <div className={card.main}>
      <h2>{title}</h2>
      <p>{year}</p>
    </div>
  );
}
