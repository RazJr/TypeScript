let num1;
let resul;


let button = document.getElementById('btn1');
button.addEventListener('click', resultado);

function resultado(){
    num1 = Number(document.getElementById('areacirculo').value);
     
    let radioelevado = Math.pow(num1, 2);
    resul = radioelevado * Math.PI;
    
    let ImprimirResultado=document.getElementById('printaresult');
    console.log(resul);
     ImprimirResultado.innerText=resul;

}