// Tipos de dados primitivos: String, Number, undefined, null, boolean (symbol)

const nome = 'João'; //string
const nome1 = "João"; //string
const nome2 = `João`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined = não aponta pra local nenhum da memória
const sobreNomeAluno = null; // Nulo = não aponta pra local na memória
/* 
existe diferenças entre undefined e null 
quando você não configura a variável o motor automaticamente
define o valor por indefinido (undefined).
quando você quer dar um valor nulo àlguma variável 
usa-se null
*/
const aprovado = true; //Boolean, dados lógicos. true or false
console.log(typeof aprovado, aprovado); //Para ver o tipo de cada variável

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2