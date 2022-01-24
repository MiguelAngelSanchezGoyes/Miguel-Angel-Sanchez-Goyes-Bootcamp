import detail from "./detail.module.css";

export function Detail({ book }) {
  return (
    <div className={detail.main}>
      <h2>📖 {book.title}</h2>
      <p>{book.authors}</p>
    </div>
  );
}
