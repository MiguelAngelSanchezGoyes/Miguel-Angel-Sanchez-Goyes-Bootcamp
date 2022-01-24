let films;

const fetchFilm = () => {
  const promises = [];

  for (let i = 1; i < 13; i++) {
    const url = `http://localhost:3800/films/${i}`;
    promises.push(fetch(url).then((res) => res.json()));

    Promise.all(promises).then((results) => {
      const film = results.map((data) => ({
        title: data.title,
        id: data.id,
        year: data.year,
      }));
      displayFilm(film);
    });
  }
};

const displayFilm = (film) => {
  console.log(film);

  console.log(films);
};

fetchFilm();
films = fetchFilm();
console.log("sdff" + films);
