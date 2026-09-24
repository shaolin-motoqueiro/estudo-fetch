# Estudo Fetch

Projeto didático que liga **frontend → backend → PostgreSQL**, usando `fetch` no navegador e SQL direto (sem ORM).

## O que faz

CRUD simples de **alunos** (nome e email):

| Ação | Método | Rota |
|------|--------|------|
| Listar | GET | `/alunos` |
| Cadastrar | POST | `/alunos` |
| Remover | DELETE | `/alunos/:id` |

## Como funciona

1. O HTML em `public/` tem botões que disparam o `fetch`
2. O Express (`server.js`) recebe a requisição e executa SQL no Postgres
3. A conexão com o banco fica em `db.js` (pacote `pg`)
4. A resposta JSON volta para a tela

## Subir

```bash
npm start
```

Abre em `http://localhost:3000`.
