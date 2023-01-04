// Uma promessa
const promessa = new Promise((resolve, reject) => {
  return resolve("ok");
});

// O async significa que a função não vai carregar em sincronia com a página
async function start() {
  try {
    const result = await promessa;
    console.log(result);
  } catch {
    console.log("Ocorreu um erro");
  } finally {
    console.log("Rodou");
  }
}

// A função start vai esperar(await) a promessa para poder ser executada

start();
