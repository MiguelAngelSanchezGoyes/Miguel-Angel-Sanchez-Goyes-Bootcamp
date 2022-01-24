import header from "./header.module.css";
export function Header() {
  return (
    <div>
      <h2 className={header.title}>Films</h2>
      <p className={header.description}>Showing Films</p>
    </div>
  );
}
