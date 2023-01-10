// Indica que vai usar o framework express
const express = require("express");

// Chama a função express
const app = express();

// Indica a porta em que a aplicação vai rodar
app.listen("4000");

// Middleware:
app.use(express.json());

// Manda informações para a api que pode ser acessada pelo insomnia
app.route("/").post((request, response) => response.send(request.body));
