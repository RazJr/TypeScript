let button = document.getElementById('btn');
button.addEventListener('click', regalo);

function regalo(){
   let valor1=Number(document.getElementById('presupuesto').value);

    if (valor1>=1 && valor1<=10){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>Estas jodido y solo te Alcanza una tarjeta  </p>  <img src="./../Templates/descarga.jfif">   </div> ` ;
        ZonePrint.innerHTML=divImprimir;

    }else if(valor1>10 && valor1<=100){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>Solo te alcansan unos chocolates  </p>     </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(valor1>100 && valor1<=250){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>Solo te alcansan unas flores  </p>     </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(valor1>250){
        let divImprimir = `<div class="alert alert-success mt-3"> <img src="./../Templates/may.png">     </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(valor1 == 0){
        let divImprimir = `<div class="alert alert-success mt-3">   <img src="./../Templates/4135156.jpg">   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }

}