// Indica que vai usar o framework express
const express = require("express");

// Chama a função express
const app = express();

// Indica a porta em que a aplicação vai rodar
app.listen("4000");

// Middleware:
app.use(express.json());

let author = "Lucas";

// Mostra qual o resultado atual da variável "author"
app.route("/").get((request, response) => response.send(author));

// Recebe o resultado da atualização da variável "author" que foi realizada no insomnia
app.route("/").put((request, response) => {
  author = request.body.author;
  response.send(author);
});
