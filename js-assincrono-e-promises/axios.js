import axios from "axios";

axios
  .get("https://api.github.com/users/lucasptcastro")
  .then((response) => console.log(response.data));

/* 

Biblioteca para consumir api de forma mais compacta e dinâmica 

*/
