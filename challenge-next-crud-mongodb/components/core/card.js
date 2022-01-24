import card from "./card.module.css";

export function Card({ link, title, children }) {
  return (
    <a href={link} className={card.main}>
      <h2>{title} &rarr;</h2>
      <p>{children}</p>
    </a>
  );
}
