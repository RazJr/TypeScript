let preguntas;
let correctas;
let incorrectas;
let blanco;
let respuesta;
let respuesta2;

let button = document.getElementById('btn1');
button.addEventListener('click', calificacion);

function calificacion(){
    preguntas = Number(document.getElementById('preguntas').value);
    correctas = Number(document.getElementById('correcto').value);
    incorrectas = Number(document.getElementById('incorrecto').value);
    blanco = Number(document.getElementById('blanco'));

    let cali = correctas * 4;

    respuesta = (cali - incorrectas ) / preguntas;
    respuesta2 = respuesta * 10;

    let ImprimirResultado=document.getElementById('printaresult');
    console.log(respuesta2);
    ImprimirResultado.innerText=respuesta2;
}
