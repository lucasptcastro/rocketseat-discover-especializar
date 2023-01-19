const url = "http://localhost:5500/api";

const user = {
  name: "Alvo Dumbledore",
  avatar: "https://picsum.photos/200/300",
  city: "Godric's Hollow",
};

const updatedUser = {
  name: "Harry Potter",
  avatar: "https://picsum.photos/200/300",
  city: "Godric's Hollow",
};

// Função para listar todos os usuário da API
function getUsers() {
  fetch(url)
    .then((result) => result.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

// Função para litar um usuário específico da API
function getUser(id) {
  fetch(`${url}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      (userName.textContent = data.name),
        (userCity.textContent = data.city),
        (userAvatar.src = data.avatar);
    })
    .catch((error) => console.error(error));
}

// Função para adicionar um usuário na API
function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

// Função para atualizar um usuário na API
function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

// Função para deletar um usuário na API
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

updateUser(updatedUser, 5);

getUsers();
addUser(user);
getUser(5);
deleteUser(3);
