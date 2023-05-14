function lerVetor() {
    vetor = [];
        for (var i = 1; i <= 10; i++) {
        var numero = parseInt(prompt("Digite o número da posição " + i + ":"));
        vetor[i - 1] = numero;
      }
      return vetor;
}
function imprimirVetorInicioFim(vetor) {
    var resultado = "Vetor do início para o fim: ";
      for (var i = 0; i < vetor.length; i++) {
        resultado += vetor[i] + ", ";
      }
      document.getElementById("resultadoInicioFim").innerHTML = resultado;
}
function imprimirVetorFimInicio(vetor) {
    var resultado = "Vetor do fim para o início: ";
      for (var i = vetor.length - 1; i >= 0; i--) {
        resultado += vetor[i] + ", ";
      }
      document.getElementById("resultadoFimInicio").innerHTML = resultado;
}