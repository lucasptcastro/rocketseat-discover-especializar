const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then((result) => result.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

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

updateUser(updatedUser, 5);

getUsers();
getUser(5);
