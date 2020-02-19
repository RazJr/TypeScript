let button = document.getElementById("btn");
button.addEventListener("click", Tiposdetriangulos);

function Tiposdetriangulos() {
  valor1 = Number(document.getElementById("ladoa").value);
  valor2 = Number(document.getElementById("ladob").value);
  valor3 = Number(document.getElementById("ladoc").value);
  //variable resultado
  let ImprimirResultado = document.getElementById("leyenda");

  let auxAB = valor1 + valor2;
  let auxAC = valor1 + valor3;
  let auxBC = valor2 + valor3;

  if (valor1 == valor2 && valor2 == valor3) {
    ImprimirResultado.innerText = "El triangulo es: Equilatero";
  } else if (
    (valor1 == valor2 && valor2 != valor3) ||
    (valor2 == valor3 && valor3 != valor1) ||
    (valor1 == valor3 && valor3 != valor2)
  ) {
    ImprimirResultado.innerText = "El triangulo es: Isosceles";
  } else if (valor1 != valor2 && valor2 != valor3) {
    ImprimirResultado.innerText = "El triangulo es: Escaleno";
  }
if (auxAB == valor3) {
      ImprimirResultado.innerText = "El triangulo es: No es triangulo";
      console.log(`no`);   
  }

if(auxAC == valor2){
    ImprimirResultado.innerText = "El triangulo es: No es triangulo";
}
if(auxBC == valor1){
    ImprimirResultado.innerText = "El triangulo es: No es triangulo";
}
}
