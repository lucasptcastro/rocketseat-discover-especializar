const express = require("express");

const app = express();

app.listen("4000");

app.route("/").get((request, response) => response.send("oi"));
app
  .route("/:variavel")
  .get((request, response) => response.send(request.params.variavel));
app
  .route("/cidade/:variavel")
  .get((request, response) => response.send(request.params.variavel));
