import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './TopHeroes.module.css';

const TopHeroes = () => {
  const heroes = useSelector((state) => state.heroes.value);

  return (
    <section className={styles.topHeroes}>
      <h2>Top Heroes</h2>
      {heroes.length > 0 ? (
        <nav>
          <ul>
            {heroes.slice(0, 4).map((hero) => (
              <li key={hero.id}>
                <Link href={`/detail/${hero.id}`}>
                  <a>{hero.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <p>No heroes!</p>
      )}
    </section>
  );
};

export default TopHeroes;
