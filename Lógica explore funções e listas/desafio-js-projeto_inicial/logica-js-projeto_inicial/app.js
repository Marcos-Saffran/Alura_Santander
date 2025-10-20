// Desafios

//     Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso) {
    const imc = peso / (altura * altura);
    return imc;
}
console.log(calcularIMC(1.75, 70)); // Exemplo de uso

//     Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0) {
        return 1;
    }
    return numero * calcularFatorial(numero - 1);
}
console.log(calcularFatorial(5)); // Exemplo de uso

//     Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorDolar) {
    const cotacaoDolar = 4.80;
    return (valorDolar * cotacaoDolar).toFixed(2);
}
console.log(converterDolarParaReal(10)); // Exemplo de uso

//     Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function mostrarAreaPerimetroSalaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
}
mostrarAreaPerimetroSalaRetangular(3, 4); // Exemplo de uso

//     Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function mostrarAreaPerimetroSalaCircular(raio) {
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
}
mostrarAreaPerimetroSalaCircular(5); // Exemplo de uso

//     Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
mostrarTabuada(5); // Exemplo de uso
