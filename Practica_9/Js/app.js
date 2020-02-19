let x1;
let y1;
let x2;
let y2;
let respuesta;

let button = document.getElementById('btn');
button.addEventListener('click', distancia);

function distancia(){
    x1=Number(document.getElementById('lado1x').value);
    y1=Number(document.getElementById('lado1y').value);
    x2=Number(document.getElementById('lado2x').value);
    y2=Number(document.getElementById('lado2y').value);

    respuesta = Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(y1-y2, 2));

    let ImprimirResultado=document.getElementById('printaresult');
console.log(respuesta);
ImprimirResultado.innerText=respuesta;
}