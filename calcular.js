let num1i= document.getElementById('num1');
let num2i= document.getElementById('num2');
let resultadoShow= document.getElementById('resultado');
let resultado;

function btnOnClick(){
    resultado= Number(num1i.value) + parseInt(num2i.value);

    resultadoShow.innerText="Resultado: "+resultado;
}








