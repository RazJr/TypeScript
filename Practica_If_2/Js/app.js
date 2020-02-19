const button = document.getElementById('btn');
button.addEventListener('click', estastusalumno);

function estastusalumno(){
    variable1=Number(document.getElementById('español').value);
    variable2=Number(document.getElementById('mate').value);
    variable3=Number(document.getElementById('ciencias').value);
    variable4=Number(document.getElementById('history').value);

    respuesta = (variable1+variable2+variable3+variable4);
    let total =respuesta/4;
    
    if (total>8){
        let ImprimirResultado=document.getElementById('leyenda');
ImprimirResultado.innerText='Estaus del alumno: Aprobado';
    }else{
        let ImprimirResultado=document.getElementById('leyenda');
        ImprimirResultado.innerText='Estaus del alumno: Reprobado';

        const audioramon = document.getElementById('ramon');
        audioramon.play();
    }

}