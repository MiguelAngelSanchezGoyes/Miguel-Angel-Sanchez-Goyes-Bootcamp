export default class UserHttpClient {
  static aUsers = [];
  static urlBase = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0";
  static urlUsers = `${this.urlBase}/users`;

  static getOneUser(url) {
    return fetch(url).then((res) => {
      return res.json();
    });
  }

  static getAllUsers() {
    return fetch(this.urlUsers).then((res) => {
      return res.json();
    });
  }

  static setUser(user) {
    return fetch(this.urlUsers, {
      method: "POST",
      body: JSON.stringify(user),
    }).then((res) => {
      return res.json();
    });
  }

  static updateUser(user, id) {
    return fetch(`${this.urlUsers}/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
    }).then((res) => {
      return res.json();
    });
  }

  static deleteUser(id) {
    return fetch(`${this.urlUsers}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  }
}
