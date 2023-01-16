const express = require("express");
const axios = require("axios");

const app = express();

app.listen("4000");

// Carrega a maniatura do meu avatar do github lá no resultado do insomnia
app.route("/").get((request, response) => {
  axios
    .get("https://api.github.com/users/lucasptcastro")
    .then((result) => response.send(`<img src="${result.data.avatar_url}"/>`))
    .catch((error) => console.error(error));
});
