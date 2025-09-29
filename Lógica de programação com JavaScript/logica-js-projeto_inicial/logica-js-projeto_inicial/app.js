alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}. Tente novamente!`);
        } else {
            alert(`O número secreto é maior que ${chute}. Tente novamente!`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// se tentativas for maior que 1, palavraTentativa recebe 'tentativas', senão recebe 'tentativa'

alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`); // usando template string - usar a crase ``

