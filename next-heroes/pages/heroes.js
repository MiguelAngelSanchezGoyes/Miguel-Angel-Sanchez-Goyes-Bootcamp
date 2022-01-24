import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHero } from '../redux/slice';
import Header from '../components/core/Header';
import HeroesNavigation from '../components/heroes/HeroesNavigation';
import styles from './heroes.module.css';

const Heroes = () => {
  const [input, setInput] = useState('');
  const heroes = useSelector((state) => state.heroes.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const lastId = heroes.at(-1)?.id;
    const newId = lastId ? lastId + 1 : 1;
    dispatch(addHero({ id: newId, name: input }));
    setInput('');
  };

  return (
    <>
      <Header />
      <section className={styles.heroList}>
        <h2 className={styles.title}>My Heroes</h2>
        <form onSubmit={handleSubmit} className="hero-list__form">
          <label htmlFor="hero-list__input">Hero Name:</label>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            autoComplete="off"
            id="hero-list__input"
            className={styles.input}
            type="text"
          />
          <button className={styles.addBtn}>Add hero</button>
        </form>
        <HeroesNavigation />
      </section>
    </>
  );
};

export default Heroes;
