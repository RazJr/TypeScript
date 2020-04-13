let button = document.getElementById('btn');
button.addEventListener('click', numeroaleatorio);

function numeroaleatorio(){
    valor1=Number(document.getElementById('numero1').value);
    valor2=Number(document.getElementById('numero2').value);
    valor3=Number(document.getElementById('numero3').value);

    if (valor1>valor2 && valor2>valor3){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La numeracion queda asi:  ${valor1}, ${valor2},${valor3}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(valor2>valor1 && valor1>valor3){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La numeracion queda asi:  ${valor2},${valor1},${valor3}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(valor3>valor2 && valor2>valor3){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La numeracion queda asi:  ${valor3},${valor2},${valor1}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;

    }

 
}