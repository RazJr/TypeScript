let button = document.getElementById('btn');
button.addEventListener('click', descuento);

function descuento(){
    valor1=Number(document.getElementById('traje').value);
    valor2=Number(document.getElementById('cantidad').value);
    const ZonePrint=document.getElementById('ZonePrint');
    


    if(valor1>=3600 && valor2==1){
       total=Math.floor(valor1*16)/100;
       aux1=valor1-total;
       let divImprimir = `<div class="alert alert-success mt-3"> <p>La cantidad a pagar del traje es:  ${aux1}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(valor1>=3600 && valor2>1){
        total2= valor1*valor2;
        porcentaje1=Math.floor(total2*16)/100;
        aux2=total2-porcentaje1;
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La cantidad a pagar de los trajes es:  ${aux2}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if (valor1<3600 && valor2==1){    
        total3= Math.floor(valor1*7)/100;
        aux3=valor1-total3;
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La cantidad a pagar del traje es:  ${aux3}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(valor1<3600 && valor2>1){
        total4=valor1*valor2;
        porcentaje2=Math.floor(total4*7)/100;
        aux4=total4-porcentaje2;
        let divImprimir = `<div class="alert alert-success mt-3"> <p>La cantidad a pagar de los trajes es:  ${aux4}</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }
}