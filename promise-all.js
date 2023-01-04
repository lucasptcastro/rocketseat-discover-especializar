import axios from "axios";

//Faz várias promises de forma simultânea

Promise.all([
  axios.get("https://api.github.com/users/lucasptcastro"),
  axios.get("https://api.github.com/users/lucasptcastro/repos"),
  axios.get("https://api.github.com/users/lucasptcastro/followers"),
])
  .then((responses) => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
    console.log(responses[2].data.length);
  })
  .catch((error) => console.log(`Ocorreu um erro. Erro: ${error.message}`));
