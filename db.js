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

pool
  .connect()
  .then((client) => {
    console.log("Conectado ao banco fetch (PostgreSQL)!");
    client.release();
  })
  .catch((erro) => {
    console.error("Erro ao conectar no banco:", erro.message);
  });

export default pool;
