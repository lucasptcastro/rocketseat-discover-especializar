fetch("https://api.github.com/users/lucasptcastro")
  .then((response) => response.json())
  .then((repos) => fetch(repos.repos_url))
  .then((data) => data.json())
  .then((d) => console.log(d));

/* Retorna um JSON com o índice dos repositórios do github */
