// Indica que vai usar o framework express
const express = require("express");

// Chama a função express
const app = express();

// Indica a porta em que a aplicação vai rodar
app.listen("4000");

// Routa com identiicador (ID) do dado que será apagado da API
app.route("/:identificador").delete((request, response) => {
  response.send(request.params.identificador);
  // Aqui ficaria o código para apagar algum dado da api
});
