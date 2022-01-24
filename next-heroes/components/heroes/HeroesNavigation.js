import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { removeHero } from '../../redux/slice';
import styles from './HeroesNavigation.module.css';

const HeroesNavigation = () => {
  const heroes = useSelector((state) => state.heroes.value);
  const dispatch = useDispatch();

  return (
    <nav>
      <ul className={styles.menu}>
        {heroes.map((hero) => (
          <li key={hero.id} className={styles.menuItem}>
            <Link href={`/detail/${hero.id}`}>
              <a className={styles.menuLink}>
                <span className={styles.menuId}>{hero.id}</span>
                {hero.name}
              </a>
            </Link>
            <button
              onClick={(e) => dispatch(removeHero(e.target.dataset.index))}
              data-index={hero.id}
              className={styles.menuButton}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeroesNavigation;
