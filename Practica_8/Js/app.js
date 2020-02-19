let ladoa;
let ladob;
let ladoc;
let respuesta;
let a;
let b;
let c;
let d;
let respuesta2;


let button = document.getElementById('btn');
button.addEventListener('click', area);

function area(){
ladoa=Number(document.getElementById('ladoa').value);
ladob=Number(document.getElementById('ladob').value);
ladoc=Number(document.getElementById('ladoc').value);

respuesta = (ladoa + ladob + ladoc)/2;
respuesta2 = Math.sqrt(respuesta*(respuesta-ladoa)*(respuesta-ladob)*(respuesta*ladoc));

let ImprimirResultado=document.getElementById('printaresult');
console.log(respuesta2);
ImprimirResultado.innerText=respuesta2;

}