let matricula;
let español;
let mate;
let ciencias;
let historia;
let geo;
let resultado;

let button = document.getElementById('btn');
button.addEventListener('click', calificacion);

function calificacion(){
matricula = Number(document.getElementById('matricula').value);
 español = Number(document.getElementById('español').value);
 mate = Number(document.getElementById('matematicas').value);
 ciencias = Number(document.getElementById('ciencias').value);
 historia = Number(document.getElementById('historia').value);
 geo = Number(document.getElementById('geografia').value);

  resultado = (español + mate + ciencias + historia + geo);
  let total = resultado/5;
  
  
let alumno=document.getElementById('printaresult');
 let ImprimirResultado=document.getElementById('promedio');
    console.log(resultado);
     ImprimirResultado.innerText= 'Promedio: '+total ;
     alumno.innerText='Alumno: ' +matricula;
}