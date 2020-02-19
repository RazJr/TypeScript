let tiempo;
let velocidad;
let resultado;

let button = document.getElementById('btn1');
button.addEventListener('click', distancia);

function distancia(){
    tiempo = Number(document.getElementById('tiempo').value);
    velocidad = Number(document.getElementById('velocidad').value);

    resultado = velocidad * tiempo;

    let ImprimirResultado=document.getElementById('printaresult');
    console.log(resultado);
    ImprimirResultado.innerText=resultado + ' km/h';

}

