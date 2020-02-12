let numero1;
let numero2;
let resultado;


let button=document.getElementById('btn1');
button.addEventListener('click', multiplicacion);
function multiplicacion(){
    numero1 = Number(document.getElementById('basetriangulo').value);
    numero2 = Number(document.getElementById('alturatriangulo').value);

    resultado = (numero1 * numero2) / 2;
    
    let ImprimirResultado=document.getElementById('printaresult');
     ImprimirResultado.innerText=resultado;
}

