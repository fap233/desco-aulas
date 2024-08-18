let numeros = [-2,-1,0,1,2,3,4,5,6,7,8,9,10]
let resultado = numeros.filter(item => item % 2 == 0)
console.log(resultado)



const soma = (a, b) => a + b;
console.log (soma (2,3))


let idade = 17;
let podeDirigir = idade >= 18 ? 'Sim' : 'Não';
console.log(podeDirigir)

let pessoa = { nome: 'Carlos' };
let nome = pessoa?.nome;

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    exibirDetalhes: function() {
      return `${this.marca} ${this.modelo}`;
    }
  }; 
  console.log (carro)