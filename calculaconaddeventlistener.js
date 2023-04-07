const btn=document.getElementById('botonDeCalcular');
const numero1=document.getElementById('nu1');
const numero2=document.getElementById('nu2');
let showresultadp=document.getElementById('nuResultado');
const formulario=document.querySelector('#Formulario');

let resultadoSuma;


formulario.addEventListener('keypress',sumar);

function sumar(){
    //event.preventDefault();
    resultadoSuma= parseInt(numero1.value)+parseInt(numero2.value);
    showresultadp.innerText="Resultado: "+resultadoSuma;
}



formulario.addEventListener('mousemove',sumar2);

function sumar2(){
    //event.preventDefault();
    //sresultadoSuma= parseInt(numero1.value)+parseInt(numero2.value);
    showresultadp.innerText="Moviendo el mouse <3";
}



/* const h1=document.querySelector('h1');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input1=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
btn.addEventListener('click',sumarInputValues)
function sumarInputValues(event){
    const sumaInputs=input1.value+input2.value;
    pResult.innerText="Resultado: "+sumaInputs;} */