import Link from "next/link";
import menu from "./menu.module.css";

export function Menu({ menuItems }) {
  return (
    <nav>
      <ul className={menu.ul}>
        {menuItems.map((item) => (
          <li key={item.label} className={menu.li}>
            <Link href={item.path}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
