const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "sql5.freemysqlhosting.net",
  database: "sql5391554",
  user:  "sql5391554",
  port: 3306,
  password: "rVM5ZGXcwl",
});

module.exports = pool.promise();
