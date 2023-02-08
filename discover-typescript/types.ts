("======================== Tipagens =========================");

//  Tipagem explícita: indica a tipagem ao lado da variável
//  Tipagem inferida: indica a tipagem no valor da variável

let user: string = "Lucas"; // Tipagem explícita
let newUser: "Felipe"; // Tipagem inferida

("==================== Tipos primitivos ====================");

let loading: boolean = false;
let email: string = "teste@gmail.com";
let prince: number = 10.5;

("======================= Matrizes =========================");

let numbers: number[] = [1, 2, 3, 4, 5];
let users: Array<string> = ["Lucas", "Felipe", "Vanessa"];

("======================== Objetos =========================");

type User = {
  name: string;
  age: number;
  height: number;
  isAdmin?: boolean; // O "?" signiica que o valor é opicional
};

function userData(user: User) {
  console.log(`Nome do usuário: ${user.name}`);
  console.log(`Idade: ${user.age}`);
  console.log(`Altura: ${user.height}`);
}

userData({ name: "Lucas", age: 21, height: 170 });

("======================= Funções ==========================");

//  O tipo "void" significa que a função não tem retorno
function showMessage(message: string): void {
  console.log(message);
}
//  O tipo "number" significa que a função vai retornar  um número
function sumNumbers(a: number, b: number): number {
  return a + b;
}

("==========================================================");

//  O operador union "|" serve como um "ou", ou seja:
//  o parametro "id" pode receber um number ou uma string

function printUserId(id: number | string) {
  console.log(`O ID do usuário é: ${id}`);
}

("==========================================================");

//  Types: criar uma variável com uma tipagem que possa ser usada
//  diversas vezes. Tem que iniciar com letra maiúscula

type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

userId = "15";
adminId = false;

("==========================================================");

//  Type Assertion: define os tipos de alguma variável

type UserResponse = {
  id: number;
  name: string;
  avatar: string;
};

// A tipagem do "{}" vai ser a de "UserResponse"
let userResponse = {} as UserResponse;
userResponse.avatar;

("==========================================================");
