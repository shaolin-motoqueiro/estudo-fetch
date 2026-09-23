const URL = "http://localhost:3000/alunos";
const saida = document.getElementById("saida");


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

// DELETE
document.getElementById("btnDelete").onclick = async () => {
  const id = document.getElementById("id").value;
  const resposta = await fetch(URL + "/" + id, {
    method: "DELETE",
  });

  const dados = await resposta.json();
  mostrar(dados);
};


function mostrar(dados) {
  saida.textContent = JSON.stringify(dados, null, 2);
}