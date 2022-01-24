import header from "./header.module.css";
import { Menu } from "./menu";

export function Header() {
  return (
    <header className={header.container}>
      <h1>Learning Next</h1>
      <Menu />
    </header>
  );
}
