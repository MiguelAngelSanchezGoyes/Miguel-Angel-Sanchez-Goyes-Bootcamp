import './card.css';

export function Card({ title, children }) {
  const template = (
    <div>
      <h3>{title}</h3>
      <div className="card">{children}</div>
    </div>
  );
  return template;
}
