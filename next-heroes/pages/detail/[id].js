import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { updateHero } from '../../redux/slice';
import Header from '../../components/core/Header';
import styles from './id.module.css';

const Detail = () => {
  const heroes = useSelector((state) => state.heroes.value);
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const hero = heroes.find((el) => +el.id === +id);
  const [input, setInput] = useState(hero.name);

  const handleSave = () => {
    dispatch(updateHero({ currentHero: hero.id, newName: input }));
    router.back();
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Header />
      <section className={styles.details}>
        <h2 className={styles.title}>{input.toUpperCase()} details</h2>
        <p>id: {hero.id}</p>
        <label className={styles.label} htmlFor="details__input">
          Hero name:
        </label>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          autoComplete="off"
          type="text"
          id="details__input"
          className={styles.input}
        />
        <div className={styles.buttonWrapper}>
          <button className={styles.button} id="details__back-btn" onClick={handleGoBack}>
            go back
          </button>
          <button className={styles.button} id="details__save-btn" onClick={handleSave}>
            save
          </button>
        </div>
      </section>
    </>
  );
};

export default Detail;
