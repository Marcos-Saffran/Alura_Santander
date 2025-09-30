let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 0 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h2', 'Você acertou! O número secreto é ' + numeroSecreto);
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('h2', 'O número secreto é maior que ' + chute);
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('h2', 'O número secreto é menor que ' + chute);
    }
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}