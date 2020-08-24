// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços nos nomes das constantes
/* Utilizamos camelCase (Começa com letra minúscula e depois maiúscula)
   Ex: let nomeCompleto = 'João Inácio';
*/ 
/* Constantes são case-sensitive (Os tamanhos das letras diferenciam
    o tamanho das variáveis)
    Ex: let nomeCliente = 'João';
        let nomecliente = 'Pedro';
*/
// Não podemos redeclarar constantes, não podendo mudar seu valor
// NÃO UTILIZE VAR, UTILIZE CONST.
// Dentro de aspas Strings, fora de aspas Number

const primeiroNumero = 5; // para ser reconhecido como string, coloca aspas ''
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);

console.log(typeof primeiroNumero); // Para descobrir o tipo da variável criada


