let button = document.getElementById('btn');
button.addEventListener('click', hermanomayor);

function hermanomayor(){
    nombre1=document.getElementById('nombre');
    nombre2=document.getElementById('nombre2');
    variable1=Number(document.getElementById('edad').value);
    variable2=Number(document.getElementById('edad2').value);
     if (variable1>variable2){
        let ImprimirResultado=document.getElementById('leyenda');
ImprimirResultado.innerText='El hermano mayor es: ' + nombre1.value;
    }else {
        let ImprimirResultado=document.getElementById('leyenda');
        ImprimirResultado.innerText='El hermano mayor es : '+ nombre2.value;
    }
      } 
  
    

