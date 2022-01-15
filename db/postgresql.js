const { Pool, Client } = require("pg");
const connectionString = "postgresql://weelam:password@localhost:5432/bindr";
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bindr",
  password: "password",
  port: 5432,
});

// client idk what this stuff is
// const client = new Client({
//   connectionString,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

module.exports = {
  query: (text, params) => pool.query(text, params),
};
