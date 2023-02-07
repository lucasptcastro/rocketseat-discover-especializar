("==========================================================");

//  "user: string | null" = o "user" pode ser string ou nulo
//  "user ?? "Usário padrão"" = se o "user" for nulo, vai retornar "Usuário padrão"

//  any: aceita qualquer tipagem

function showTicket(user: string | null, ticket: any) {
  console.log(
    `Olá ${user ?? "Usário padrão"}. Seu número de bilhete é ${ticket}`
  );
}
showTicket(null, 123);

("==========================================================");

//  Generics: a tipagem que for usada na declaração é a que vai definir a variável

//  S => State
//  T => Type
//  V => Value
//  K => Key
//  E => Element

// Se "T" não for definido como string ou number, ele será string.
// O "extends" é para poder definir mais de uma tipagem
function useState<T extends string | number = string>() {
  let state: T;

  function get() {
    return state;
  }
  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

// "T" vai passar a ser string, pois foi declarada aqui
let newState = useState<string>();
newState.get();
newState.set("Lucas");
newState.set(123);
newState.set("Teste");

("==========================================================");
