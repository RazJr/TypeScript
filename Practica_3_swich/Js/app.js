let button = document.getElementById('btn');
button.addEventListener('click', viajes);

function viajes(){
    valor1=Number(document.getElementById('primeraplus').value);
    valor2=Number(document.getElementById('etn').value)
    valor3=Number(document.getElementById('chihua').value);
    valor4=Number(document.getElementById('estrella').value);
    valor5=Number(document.getElementById('kilometros').value);

    if((valor1>=1 && valor1<=20) && valor5>1){
        aux1=valor5*2.5;
        total1= aux1/valor1;
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La cantidad a pagar por persona es:  ${total1}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if ((valor2>=1 && valor2<=20) && valor5>1){
        aux2=valor5*3;
        total2=aux2/valor2;
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La cantidad a pagar por persona es:  ${total2}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if((valor3>=1 && valor3<=20) && valor5>1){
        aux3=valor3*2;
        total3=aux3/valor3;
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La cantidad a pagar por persona es:  ${total3}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if((valor4>=1 && valor4<=20) && valor5>1){
        aux4=valor4*1.5;
        total4=aux4/valor4;
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La cantidad a pagar por persona es:  ${total4}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }

    if(valor1<=0){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El camion es cancerado por no vender boletos </p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if (valor1>20){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El camion solo puede llevas a maximo 20 personas </p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if (valor2>20){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El camion solo puede llevas a maximo 20 personas </p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if (valor3>20){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El camion solo puede llevas a maximo 20 personas </p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if (valor4>20){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El camion solo puede llevas a maximo 20 personas </p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }


}