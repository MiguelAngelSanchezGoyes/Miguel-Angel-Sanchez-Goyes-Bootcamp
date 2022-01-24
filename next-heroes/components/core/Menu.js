import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = ({ menuElements }) => {
  return (
    <nav className={styles.menu}>
      <ul>
        {menuElements.map((el, i) => (
          <li key={`${i} ${el.text}`} className="header-menu__item">
            <Link href={el.link}>
              <a>{el.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
