import Menu from './Menu';
import styles from './Header.module.css';

const Header = () => {
  const menuElements = [
    { text: 'Dashboard', link: '/' },
    { text: 'Heroes', link: '/heroes' },
  ];

  return (
    <header className={styles.header}>
      <h1>Tour of Heroes</h1>
      <Menu menuElements={menuElements} />
    </header>
  );
};

export default Header;
