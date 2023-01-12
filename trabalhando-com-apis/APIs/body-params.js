const express = require("express");

const app = express();

app.listen("4000");

//middleware
app.use(express.json());

// Recebe e mostra no console do insomnia as informações com os parâmetros
app.route("/").patch((request, response) => {
  const { nome, cidade } = request.body;
  response.send(`meu nome é ${nome} e moro na cidade ${cidade}`);
});
