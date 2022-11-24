const db = require("/Users/veera/Documents/Webi/urh2/config/db.js");

class Athlete {
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

    const [newAthlete, _] = await db.execute(sql);
    return newAthlete;
  }

  static findAll() {
    let sql = "SELECT * FROM athlete;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM athlete WHERE id_athlete=${id}`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM athlete WHERE id_athlete=${id}`;
    return db.execute(sql);
  }

  static updateById(
    id,
    firstname,
    surname,
    nickname,
    birthyear,
    weight,
    photo_link,
    sport,
    acc
  ) {
    let sql = `UPDATE athlete SET firstname = '${firstname}', surname = '${surname}', nickname =  '${nickname}', birthyear = '${birthyear}', weight = '${weight}', photo_link = '${photo_link}', sport = '${sport}', acc = '${acc}' WHERE id_athlete = ${id};`;

    return db.execute(sql);
  }
}

module.exports = Athlete;
