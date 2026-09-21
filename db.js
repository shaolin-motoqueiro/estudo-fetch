// Conexão com o PostgreSQL SEM ORM — usando Pool do pacote pg
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "crud",
  port: 5432,
});

export default pool;
