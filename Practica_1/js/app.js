/**
 * Se declaran las variables que se utilizaran en el codigo 
 */

let numero1;            //de esta manera de declaran las variables 
let numero2;
let resultado;


/**
 * Se declara variable button y se le asigna el boton de calcular
 */


let button=document.getElementById('btn1');
button.addEventListener('click', suma );
function suma(){
    numero1 = Number( document.getElementById('ipNum1').value);
    numero2 =Number( document.getElementById('ipNum2').value);
    
     resultado = numero1 + numero2;    

     let ImprimirResultado=document.getElementById('printresult');
     ImprimirResultado.innerText=resultado;
}