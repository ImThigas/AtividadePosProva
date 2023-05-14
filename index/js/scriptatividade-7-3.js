function preencherMatriz() {
    matriz = [];
    for (var i = 0; i < 3; i++) {
    matriz[i] = [];
    for (var j = 0; j < 3; j++) {
        var numero = parseInt(prompt("Digite o número da posição [" + (i+1) + "][" + (j+1) + "]:"));
        matriz[i][j] = numero;
    }
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    var resultado = "Matriz:\n";
    for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
        resultado += matriz[i][j] + " ";
    }
    resultado += "\n";
    }
    document.getElementById("resultadoMatriz").textContent = resultado;
}

function imprimirDiagonalPrincipal(matriz) {
    var resultado = "Elementos da Diagonal Principal: ";
    for (var i = 0; i < matriz.length; i++) {
    resultado += matriz[i][i] + " ";
    }
    document.getElementById("resultadoDiagonalPrincipal").textContent = resultado;
}

function imprimirDiagonalSecundaria(matriz) {
    var resultado = "Elementos da Diagonal Secundária: ";
    for (var i = 0; i < matriz.length; i++) {
    resultado += matriz[i][matriz.length - 1 - i] + " ";
    }
    document.getElementById("resultadoDiagonalSecundaria").textContent = resultado;
}