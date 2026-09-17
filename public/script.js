const URL = "http://localhost:3000/alunos";
const saida = document.getElementById("saida");

function mostrar(dados) {
  saida.textContent = JSON.stringify(dados, null, 2);
}

// GET
document.getElementById("btnGet").onclick = async () => {
  const resposta = await fetch(URL);
  const dados = await resposta.json();
  mostrar(dados);
};

// POST
document.getElementById("btnPost").onclick = async () => {
  const nome = document.getElementById("nomePost").value;
  const email = document.getElementById("emailPost").value;

  const resposta = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
  });

  const dados = await resposta.json();
  mostrar(dados);
};

// PUT
document.getElementById("btnPut").onclick = async () => {
  const id = document.getElementById("idPut").value;
  const nome = document.getElementById("nomePut").value;
  const email = document.getElementById("emailPut").value;

  const resposta = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
  });

  const dados = await resposta.json();
  mostrar(dados);
};

// PATCH
document.getElementById("btnPatch").onclick = async () => {
  const id = document.getElementById("idPatch").value;
  const nome = document.getElementById("nomePatch").value;

  const resposta = await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome }),
  });

  const dados = await resposta.json();
  mostrar(dados);
};

// DELETE
document.getElementById("btnDelete").onclick = async () => {
  const id = document.getElementById("idDelete").value;

  const resposta = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });

  const dados = await resposta.json();
  mostrar(dados);
};
