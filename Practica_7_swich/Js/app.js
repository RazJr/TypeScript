let button = document.getElementById('btn');
button.addEventListener('click', presupuesto);

function presupuesto(){
    valor1=Number(document.getElementById('presupuesto').value);
    valor2=Number(document.getElementById('articulo1').value);
    valor3=Number(document.getElementById('articulo2').value);
    valor4=Number(document.getElementById('articulo3').value);
    valor5=Number(document.getElementById('articulo4').value);

    total = valor2+valor3+valor4+valor5;

    if(total>valor1){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El precio está fuera de presupuesto</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(total<valor1){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El precio está dentro del presupuesto</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }
}