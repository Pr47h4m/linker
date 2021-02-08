const db = require("../utils/database");

module.exports = class User {
  constructor({ id, tagline, imageUrl, links }) {
    this.id = id;
    this.tagline = tagline;
    this.imageUrl = imageUrl;
    this.links = links;
  }

  save() {
    db.execute("INSERT INTO users (id, tagline, imageUrl, links) VALUES (?, ?, ?, ?)", [
      this.id,
      this.tagline,
      this.imageUrl,
      JSON.stringify(this.links),
    ])
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
  }

  static fetch(username) {
      return db.execute('SELECT * FROM users WHERE users.id = ?', [username]);
  }

};
