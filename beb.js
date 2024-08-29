// Função para solicitar a escolha da bebida
function escolherBebida() {
    // Solicita a escolha da bebida ao usuário
    let bebida = prompt("Escolha uma bebida: café, leite ou chá").toLowerCase();
    
    // Variável para armazenar o valor da bebida
    let valor;

    // Avalia a escolha usando a estrutura switch
    switch (bebida) {
        case 'café':
            valor = 5.00;
            break;
        case 'leite':
            valor = 4.00;
            break;
        case 'chá':
            valor = 3.00;
            break;
        default:
            // Caso a escolha seja inválida
            console.log("Escolha inválida. A bebida deve ser café, leite ou chá.");
            return; // Encerra a função se a escolha for inválida
    }
    
    // Exibe a mensagem personalizada com o nome da bebida e o valor formatado
    console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}`);
}

// Chama a função para solicitar a escolha da bebida
escolherBebida();
