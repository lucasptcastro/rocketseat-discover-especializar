const url = "http://localhost:5500/api";

// Função para listar todos os usuário da API
function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((error) => console.error(error));
}

getUsers();
