// Desafios

// 1    Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 2   Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadorRegressivo = 10;
while (contadorRegressivo >= 0) {
    console.log(contadorRegressivo);
    contadorRegressivo--;
}

// 3    Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroParaLoop = parseInt(prompt("Digite um número para iniciar a contagem regressiva:"));
while (numeroParaLoop >= 0) {
    console.log(numeroParaLoop);
    numeroParaLoop--;
}

// 4    Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroParaLoopProgressivo = parseInt(prompt("Digite um número para iniciar a contagem progressiva:"));
let contadorProgressivo = 0;

while (contadorProgressivo <= numeroParaLoopProgressivo) {
    console.log(contadorProgressivo);
    contadorProgressivo++;
}
