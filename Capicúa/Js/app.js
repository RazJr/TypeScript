let button = document.getElementById('btn');
button.addEventListener('click', numeroscapicua);

function numeroscapicua(){
    valor1=Number(document.getElementById('numero').value);
    let entero1 = Math.floor(valor1/10); //  Ej. 3333/10
    let decimal1 = valor1%10;
    let entero2 = Math.floor(entero1/10); //  Ej. 333/10
    let decimal2 = entero1%10;
    let entero3 = Math.floor(entero2/10); // Ej. 33/10
    let decimal3 = entero2%10;
    let entero4 = Math.floor(entero3/10); // Ej. 3/10
    let decimal4 = entero3%10; 
    let res1 = decimal1*1;
    let res2 = decimal2*10;
    let res3 = decimal3*100;
    let res4 = decimal4*1000;
    let total = res4+res3+res2+res1; 
    if (valor1>=1000 && valor1<=9999 &&valor1==total ) {
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El numero es Capicua</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else if(valor1>9999){
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El numero es muy grande</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }else{
        let divImprimir = `<div class="alert alert-success mt-3"> <p>El numero no es Capicua</p>   </div> ` ;
        ZonePrint.innerHTML=divImprimir;
    }
}