// Função para atualizar a mensagem
function atualizarMensagem(quantidade) {
    var mensagemDiv = document.getElementById("mensagem");
    var quantidadeSpan = document.getElementById("quantidade");

    if (quantidade > 2) {
        quantidade--; // Decrementar a quantidade
        quantidadeSpan.textContent = quantidade;

        // Definir um novo timeout aleatório entre 1 e 5 segundos
        var tempoAleatorio = Math.floor(Math.random() * 7000) + 4000; // Entre 1000 e 5000 milissegundos (1 a 5 segundos)
        setTimeout(function() { atualizarMensagem(quantidade); }, tempoAleatorio);
    } else {
        // Quando a quantidade chegar a 2, exibir a mensagem final
        mensagemDiv.textContent = "ÚLTIMO KIT, GARANTA AGORA!";
    }
}

// Iniciar o processo de contagem regressiva
atualizarMensagem(14);