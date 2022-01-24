export default class FilmModel {
  constructor(id = 0, year = '', title = '', isViewed = false) {
    this.id = id;
    this.year = year;
    this.title = title;

    this.isViewed = isViewed;
  }
}
