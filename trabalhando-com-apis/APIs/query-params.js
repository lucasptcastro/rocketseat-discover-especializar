const { response } = require("express");
const express = require("express");

const app = express();

app.listen("4000");

// Mostra as variáveis passadas como parâmetro através da query
app
  .route("/variaveis/")
  .get((request, response) => response.send(request.query));
