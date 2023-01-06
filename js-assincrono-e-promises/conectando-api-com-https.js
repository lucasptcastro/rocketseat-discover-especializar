const https = require("https");
const API = "https://www.google.com";

// Callback para consumir a api
https.get(API, (response) => {
  console.log(response.statusCode);
});

// Mensagem que aparece antes do callback, pois é carregado primeiro
console.log("conectando api");
