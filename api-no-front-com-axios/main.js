const url = "http://localhost:5500/api";

const newUser = {
  name: "Alvo Dumbledore",
  avatar: "https://picsum.photos/id/237/200/300",
  city: "Godric's Hollow",
};

const updatedUser = {
  name: "Tom Riddle",
  avatar: "https://picsum.photos/id/237/200/300",
  city: "Orfanotrofio Wool",
};

// Função para listar todos os usuário da API
function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((error) => console.error(error));
}

// Função para adicionar um usuário na API
function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

// Função para litar um usuário específico da API
function getUser(id) {
  axios.get(`${url}/${id}`).then((response) => {
    userName.textContent = response.data.name;
    userCity.textContent = response.data.city;
    userID.textContent = `ID: ${response.data.id}`;
    userAvatar.src = response.data.avatar;
  });
}

// Função para atualizar um usuário na API
function updateUser(id, updatedUser) {
  axios
    .put(`${url}/${id}`, updatedUser)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

// Função para deletar um usuário na API
function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

getUsers();
addNewUser(newUser);
getUser(2);
updateUser(4, updatedUser);
deleteUser(5);
