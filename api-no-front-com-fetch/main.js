const url = "http://localhost:5500/api";

function getUser() {
  fetch(url)
    .then((result) => result.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

getUser();
