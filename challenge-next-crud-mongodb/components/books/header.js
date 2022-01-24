import header from "./header.module.css";
export function Header() {
  return (
    <div>
      <h2 className={header.title}>Books</h2>
      <p className={header.description}>Showing books</p>
    </div>
  );
}
