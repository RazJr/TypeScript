
let button = document.getElementById('btn');
button.addEventListener('click', mayor);

function mayor(){
    variable1=Number(document.getElementById('numeroa').value);
    variable2=Number(document.getElementById('numerob').value);

  
    
     if (variable1>variable2){
        let ImprimirResultado=document.getElementById('leyenda');
ImprimirResultado.innerText='El numero mayor es: '+ variable1;
    }else {
      if (variable1==variable2){
        let ImprimirResultado=document.getElementById('leyenda');
        ImprimirResultado.innerText='Los numeros son iguales';

      }else{
        let ImprimirResultado=document.getElementById('leyenda');
        ImprimirResultado.innerText='El numero mayor es: '+ variable2;
      } 
  
    }

}


