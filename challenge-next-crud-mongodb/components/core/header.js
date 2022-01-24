import header from "./header.module.css";
import { Menu } from "./menu";

export function Header() {
  const menuItems = [
    { path: "/", label: "Inicio" },
    { path: "/books", label: "Libros" },
    { path: "/about", label: "About" },
  ];
  return (
    <header className={header.container}>
      <h1>Learning Next</h1>
      <Menu menuItems={menuItems} />
    </header>
  );
}
