console.log('Olá, mundo!');

let nome = "João";
const idade = 30;
console.log(nome);
console.log(idade);

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Ana"));

function soma(a, b) {
   return a + b; 
  
}

console.log(soma(5, 3)); // Deve imprimir 8
console.log(soma(10, -2)); // Deve imprimir 8

function descricaoPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos.` 
 }

const pessoa = { nome: "Carlos", idade: 28 };
console.log(descricaoPessoa(pessoa)); // Deve imprimir "Carlos tem 28 anos."

