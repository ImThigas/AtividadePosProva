function imprimirImpares(numero) {
        document.getElementById("resultadoImpares").innerHTML = "Números ímpares menores ou iguais a " + numero + ": ";
    for (var i = 1; i <= numero; i += 2) {
        document.getElementById("resultadoImpares").innerHTML += i + " ";
    }
}
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        document.getElementById("resultadoParImpar").innerHTML = numero + " é um número par.";
    } else {
        document.getElementById("resultadoParImpar").innerHTML = numero + " é um número ímpar.";
    }
}