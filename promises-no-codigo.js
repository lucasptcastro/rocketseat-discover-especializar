/**  
 
 A promise é uma promessa de que algo irá acontecer.
 Poderá dar certo ou errado, mas irá acontecer. 
 No código, funciona basicamente como um try catch.
 
 **/

let aceitar = false;

console.log("pedir uber");

const promise = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve("pedido aceito!");
  }

  return reject("pedido negado!");
});

console.log("aguardando");

promise
  .then((result) => console.log(result)) // se der certo (try)
  .catch((error) => console.log(error)) // se der erro (catch)
  .finally(() => console.log("finalizado!")); // independente se der certo ou errado
