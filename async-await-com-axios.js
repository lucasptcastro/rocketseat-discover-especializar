import axios from "axios";

async function fetchRepos() {
  try {
    const user = await axios.get("https://api.github.com/users/lucasptcastro");
    const repos = await axios.get(user.data.repos_url);
    console.log(repos.data);
  } catch (error) {
    console.log(error);
  }
}

fetchRepos();

/* 

Forma mais compacta e legível, 
com tratamento de erro, 
de consumir uma api utilizando 
axios ao invés de fetch

*/
