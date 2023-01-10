// Indica que vai usar o framework express
const express = require("express");

// Chama a função express
const app = express();

// Indica a porta em que a aplicação vai rodar
app.listen("4000");

// Cria o conteúdo que será exibido em uma determinada rota
app.route("/").get((request, response) => response.send("rota base"));
app.route("/sobre").get((request, response) => response.send("rota nova"));
app
  .route("/sobre/lucas")
  .get((request, response) => response.send("rota dentro de outra"));
