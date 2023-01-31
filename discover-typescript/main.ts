// ERROS DE TIPAGEM:

const userName = "Lucas";
userName();

function sum(a: number, b: number) {
  return a + b;
}
sum.toLowerCase();
sum("10", 5);
