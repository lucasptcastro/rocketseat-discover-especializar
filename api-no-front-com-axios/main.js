const url = "http://localhost:5500/api";

const newUser = {
  name: "Alvo Dumbledore",
  avatar: "https://picsum.photos/id/237/200/300",
  city: "Godric's Hollow",
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

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

function getUser(id) {
  axios.get(`${url}/${id}`).then((response) => {
    userName.textContent = response.data.name;
    userCity.textContent = response.data.city;
    userID.textContent = `ID: ${response.data.id}`;
    userAvatar.src = response.data.avatar;
  });
}

getUsers();
// addNewUser(newUser);
getUser(1);
