//1 - forma de criar objetos

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Silva'
}

console.log(pessoa['sobrenome'])

// 2 - forma de criar objetos

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Joana"

console.log(funcionario.nome)

function criarPessoa(nome,sobrenome,i){
    return {nome,
        sobrenome,
        idade: i,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa("Arthur","Silva",20)
const p2 = criarPessoa("João","Silva",34)

console.log(p1)
console.log(p2.nomeCompleto())