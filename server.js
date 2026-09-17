import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import pool from "./db.js";

// Em módulos ES, __dirname não existe — montamos assim:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORTA = 3000;

// Permite que o frontend (HTML) converse com a API
app.use(cors());

// Lê o body das requisições em JSON (POST)
app.use(express.json());

// Serve os arquivos da pasta public (o frontend)
app.use(express.static(path.join(__dirname, "public")));

// ============================================
// ROTAS — GET, POST e DELETE
// ============================================

// GET — listar todos os alunos
app.get("/alunos", async (req, res) => {
  const resultado = await pool.query("SELECT * FROM alunos");
  res.json(resultado.rows);
});

// POST — cadastrar um aluno
app.post("/alunos", async (req, res) => {
  const { nome, email } = req.body;
  const sql = "INSERT INTO alunos (nome, email) VALUES ($1, $2) RETURNING id";

  const resultado = await pool.query(sql, [nome, email]);

  res.status(201).json({
    mensagem: "Aluno cadastrado!",
    id: resultado.rows[0].id,
  });
});

// DELETE — remover um aluno
app.delete("/alunos/:id", async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM alunos WHERE id = $1";

  const resultado = await pool.query(sql, [id]);

  res.json({
    mensagem: "Aluno removido!",
    linhasAfetadas: resultado.rowCount,
  });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
