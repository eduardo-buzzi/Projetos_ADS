//Faça um algoritmo que imprima na tela a tabuada de 1 até 10.

function imprimirTabuadaPrimitiva() {
  var i = 1;
  while (i <= 10) {
    console.log("Tabuada do " + i + ":");
    var j = 1;
    while (j <= 10) {
      var resultado = i * j;
      console.log(i + " x " + j + " = " + resultado);
      j = j + 1;
    }
    console.log("---");
    i = i + 1;
  }
}

imprimirTabuadaPrimitiva();