// Desafios

// 1    Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo() {
    console.log("Olá, mundo!");
}

// 2    Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}`);
}

// 3    Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function retornarDobro(numero) {
    return numero * 2;
}

// 4    Criar uma função que recebe três números como parâmetros e retorna a média deles.
function retornarMediaDeTresNumeros(primeiroNumero, segundoNumero, terceiroNumero) {
    return (primeiroNumero + segundoNumero + terceiroNumero) / 3;
}
// 5    Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornarMaiorNumero(primeiroNumero, segundoNumero) {
    return primeiroNumero > segundoNumero ? primeiroNumero : segundoNumero;
}

// 6    Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function retornarQuadradoDoNumero(numero) {
    return numero * numero;
}

// testar as funções
exibirOlaMundo();
exibirOlaNome("João");
console.log(retornarDobro(5));
console.log(retornarMediaDeTresNumeros(4, 7, 8));
console.log(retornarMaiorNumero(10, 2));
console.log(retornarQuadradoDoNumero(7));