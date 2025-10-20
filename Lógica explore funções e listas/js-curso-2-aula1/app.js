let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 0 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas == 1 ? ' tentativa' : ' tentativas';
        let mensagemTentativas = `Você descobriu o número secreto: ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
        } else if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
        }
        tentativas++;
        limparCampoDeChute();
    }
    console.log(numeroSecreto);
}

function limparCampoDeChute() {
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

