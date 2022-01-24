const baseURL = 'http://localhost:3800';
const storeURL = `${baseURL}/films`;

export function getFilms() {
  return fetch(storeURL).then((resp) => resp.json());
}

export function setFilm(film) {
  return fetch(storeURL, {
    method: 'POST',
    body: JSON.stringify(film),
    headers: {
      'content-type': 'application/json',
    },
  }).then((resp) => resp.json());
}

export function updateFilm(film) {
  return fetch(`${storeURL}/${film.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ isViewed: !film.isViewed }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((resp) => resp.json());
}

export function removeFilm(id) {
  return fetch(`${storeURL}/${id}`, { method: 'DELETE' });
}
