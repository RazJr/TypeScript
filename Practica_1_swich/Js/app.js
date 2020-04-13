let button = document.getElementById("btn");
button.addEventListener("click", personas);

function personas() {
  variable1 = Number(document.getElementById("personas").value);
  const ZonePrint = document.getElementById("ZonePrint");
  let divImprimir = "";
  let test = 250;

  switch (true) {
    case test > 200 && test < 300:
      console.log("test ", test);
      // variable1<200;
      //  divImprimir = `<div class="alert alert-success mt-3"> <p>El costo por persona es de $95 </p> </div>`;
      // ZonePrint.innerHTML=divImprimir;
      break;
  }
}
