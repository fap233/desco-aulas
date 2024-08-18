const readline = require('readline');

// Cria uma interface para leitura de dados da entrada padrão (stdin) e escrita na saída padrão (stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para solicitar a escolha da bebida e mostrar a mensagem correspondente
function escolherBebida() {
    rl.question('Escolha uma bebida (café, leite, chá): ', (escolha) => {
        escolha = escolha.toLowerCase();
        let valor;

        // Avalia a escolha usando o switch
        switch (escolha) {
            case 'café':
                valor = 3.50;
                break;
            case 'leite':
                valor = 2.50;
                break;
            case 'chá':
                valor = 2.00;
                break;
            default:
                // Caso a escolha seja inválida
                console.log("Escolha inválida. A escolha deve ser feita entre café, leite ou chá.");
                rl.close();
                return; // Encerra a função se a escolha for inválida
        }

        // Exibe a mensagem personalizada com o nome da bebida e o valor formatado
        console.log(`Você escolheu ${escolha.charAt(0).toUpperCase() + escolha.slice(1)}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
        rl.close();
    });
}

// Chama a função para solicitar a escolha da bebida
escolherBebida();