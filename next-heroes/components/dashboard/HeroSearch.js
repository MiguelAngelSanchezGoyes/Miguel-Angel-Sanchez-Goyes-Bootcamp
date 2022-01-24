import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './HeroSearch.module.css';

const HeroSearch = () => {
  const heroes = useSelector((state) => state.heroes.value);
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const newList = heroes.filter(
      (el) => input.length > 0 && el.name.toLowerCase().includes(input.toLowerCase())
    );
    setList(newList);
  }, [input, heroes]);

  return (
    <section className={styles.heroSearch}>
      <h2>Hero Search</h2>
      <label htmlFor="hero-search__input">Search:</label>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        autoComplete="off"
        type="text"
        id="hero-search__input"
      />
      {list.length > 0 && (
        <ul>
          {list.map((el) => (
            <li key={el.id}>
              <Link href={`/detail/${el.id}`}>
                <a>{el.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default HeroSearch;
