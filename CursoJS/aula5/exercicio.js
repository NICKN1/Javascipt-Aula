/* 
Junior Arrais tem 24 anos, pesa 80kg
tem 1,85 de altura e seu IMC é de 000000000
Junior nasceu em 1996
*/
const nome = 'Junior';
const sobrenome = 'Arrais';
const idade = 24;
const peso = 80;
const alturaEmM = 1.85;

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = 2020 - idade;

console.log('O índice de massa corporal é:',indiceMassaCorporal);
console.log('O ano de nascimento é:',anoNascimento);

//pode usar o + para unir os valores no console log
console.log(nome + ' ' + sobrenome, 'tem', idade, 'anos, pesa', peso,
    'kg.');

// usando template strings

console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}. 
${nome} nasceu em ${anoNascimento}.`);

