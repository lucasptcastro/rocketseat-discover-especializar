/*  ==========================================================

"user: string | null" = o "user" pode ser string ou nulo
"user ?? "Usário padrão"" = se o "user" for nulo, vai retornar "Usuário padrão"

any: aceita qualquer tipagem

*/

function showTicket(user: string | null, ticket: any) {
  console.log(
    `Olá ${user ?? "Usário padrão"}. Seu número de bilhete é ${ticket}`
  );
}
showTicket(null, 123);

/* ==========================================================

Tipagem explícita: indica a tipagem ao lado da variável
Tipagem inferida: indica a tipagem no valor da variável

*/

let user: string = "Lucas"; // Tipagem explícita
let newUser: "Felipe"; // Tipagem inferida

/* ==========================================================

Tipos primitivos:

*/

let loading: boolean = false;
let email: string = "teste@gmail.com";
let prince: number = 10.5;

/* ==========================================================

Matrizes (dá para usar das duas formas abaixo):

*/

let numbers: number[] = [1, 2, 3, 4, 5];
let users: Array<string> = ["Lucas", "Felipe", "Vanessa"];

/* ==========================================================

Funções:

*/

// O tipo "void" significa que a função não tem retorno
function showMessage(message: string): void {
  console.log(message);
}

// O tipo "number" significa que a função vai retornar  um número
function sumNumbers(a: number, b: number): number {
  return a + b;
}

/* ==========================================================

O operador union "|" serve como um "ou", ou seja:
o parametro "id" pode receber um number ou uma string

*/
function printUserId(id: number | string) {
  console.log(`O ID do usuário é: ${id}`);
}
