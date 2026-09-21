-- Rode este arquivo no pgAdmin (Query Tool)
-- antes de iniciar o servidor.
--
-- 1) Crie o banco "fetch" pelo pgAdmin (botão direito em Databases > Create)
-- 2) Conecte no banco fetch e rode o CREATE TABLE abaixo

CREATE TABLE IF NOT EXISTS alunos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

INSERT INTO alunos (nome, email) VALUES
  ('Ana Silva', 'ana@email.com'),
  ('Bruno Costa', 'bruno@email.com'),
  ('Carla Souza', 'carla@email.com');
