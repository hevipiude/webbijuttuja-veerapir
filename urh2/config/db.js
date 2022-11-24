require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

let sql = "SELECT * FROM athlete;";

pool.execute(sql, function (err, result) {
  if (err) throw err;

  result.forEach((res) => {
    console.log(res.nickname);
  });
});

module.exports = pool.promise();
