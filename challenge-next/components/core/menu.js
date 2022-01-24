import Link from "next/link";

import menu from "./menu.module.css";

export function Menu() {
  return (
    <nav>
      <ul className={menu.ul}>
        <li className={menu.li}>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li className={menu.li}>
          <Link href="/books">
            <a>Libros</a>
          </Link>
        </li>
        <li className={menu.li}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={menu.li}>
          <Link href="/films">
            <a>Films</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
