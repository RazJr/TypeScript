let button = document.getElementById("btn");
button.addEventListener("click", estatus);

function estatus(){
    variable1=Number(document.getElementById('español').value);
    variable2=Number(document.getElementById('mate').value);
    variable3=Number(document.getElementById('ciencias').value);
    variable4=Number(document.getElementById('history').value);
    let ImprimirResultado=document.getElementById('leyenda');

    respuesta = (variable1+variable2+variable3+variable4);
    let total =respuesta/4;
    // let cadena= `la calificcion es: ${variable1}`;
    const ZonePrint=document.getElementById('ZonePrint');

    if(total>=9 && total<=10){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>Estatus del alumno: Aprobado </p> </div>`;
        ZonePrint.innerHTML=divImprimir;
    }else if(total>10){
        let divImprimir = `<div class="alert alert-danger mt-3"> <p>Estatus del alumno: No existe en la tabla de Calificaciones </p> </div>`;
        ZonePrint.innerHTML=divImprimir;
    } else if(total>6 && total<9){
        let divImprimir = `<div class="alert alert-warning mt-3"> <p>Estatus del alumno: Regural </p> </div>`;
        ZonePrint.innerHTML=divImprimir;
    } else if(total<=6 && total>=0){
        let divImprimir = `<div class="alert alert-danger mt-3"> <p>Estatus del alumno: Reprobado </p> </div>`;
        ZonePrint.innerHTML=divImprimir;
    }else if(total<0){
        let divImprimir = `<div class="alert alert-danger mt-3"> <p>Estatus del alumno: No existe en la tabla de Calificaciones </p> </div>`;
        ZonePrint.innerHTML=divImprimir;
    }

}