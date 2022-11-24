const db = require("/Users/veera/Documents/Webi/urh2/config/db.js");

class Post {
  constructor(
    firstname,
    surname,
    nickname,
    birthyear,
    weight,
    photo_link,
    sport,
    acc
  ) {
    this.firstname = firstname;
    this.surname = surname;
    this.nickname = nickname;
    this.birthyear = birthyear;
    this.weight = weight;
    this.photo_link = photo_link;
    this.sport = sport;
    this.acc = acc;
  }

  async save() {
    let sql = `INSERT INTO athlete(firstname, surname, nickname, birthyear, weight, photo_link, sport, acc) VALUES('${this.firstname}', '${this.surname}', '${this.nickname}', '${this.birthyear}','${this.weight}','${this.photo_link}','${this.sport}','${this.acc}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  static findAll() {
    let sql = "SELECT * FROM athlete;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM athlete WHERE id=${id}`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM athlete WHERE id=${id}`;
    return db.execute(sql);
  }

  static updateById(id, title, body) {
    let sql = `UPDATE athlete SET title = "${title}", body = "${body}" WHERE id = ${id};`;
    let sql2 = `UPDATE athlete SET firstname = '${this.firstname}', surname = '${this.surname}', nickname =  '${this.nickname}', birthyear = '${this.birthyear}', weight = '${this.weight}', photo_link = '${this.photo_link}', sport = '${this.sport}', acc = '${this.acc}')`;

    return db.execute(sql);
  }
}

module.exports = Post;
