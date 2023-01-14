const express = require("express");

const app = express();

app.listen("4000");

// Se não for passado um parâmetro, vai retornar "oi"
app.route("/").get((request, response) => response.send("oi"));

// O parâmetro é passado na rota e mostrado no insomnia através do request.params.variavel
app
  .route("/:variavel")
  .get((request, response) => response.send(request.params.variavel));
app
  .route("/cidade/:variavel")
  .get((request, response) => response.send(request.params.variavel));
