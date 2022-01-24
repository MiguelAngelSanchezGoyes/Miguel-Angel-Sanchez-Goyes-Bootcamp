import card from "./card.module.css";

export function Card({ title, authors }) {
  return (
    <div className={card.main}>
      <h2>📕 {title}</h2>
      <p>{authors}</p>
    </div>
  );
}
