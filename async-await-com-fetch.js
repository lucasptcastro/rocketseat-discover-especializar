async function start() {
  const url = "https://api.github.com/users/lucasptcastro";
  const user = await fetch(url).then((repos) => repos.json());
  const userRepos = await fetch(user.repos_url).then((response) =>
    response.json()
  );
  console.log(userRepos);
}

start().catch((error) => console.log(error));

// Uma forma mais legível e compacta de usar a promise com o fetch
