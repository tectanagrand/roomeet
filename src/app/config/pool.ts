import * as mysql from "mysql2/promise";

const pool = mysql.createPool({
  connectionLimit: 10,
  idleTimeout: 3 * 60,
  maxIdle: 5,
  host: "localhost",
  user: "root",
  password: "root",
  database: "mrbapp",
});

export default pool;
