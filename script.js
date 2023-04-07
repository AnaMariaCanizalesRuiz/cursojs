const titulo = document.querySelector('h1');
const parrafo = document.querySelector('p');
const parrafoId = document.getElementById('parrafoId');
const input = document.querySelector('input');
const pid = document.getElementById('pid');

console.log('Hola mundo <3 ');

console.log(parrafoId);

console.log({
    titulo,
});

console.log(input.value);

titulo.innerHTML='Equis';
parrafo.innerText='soy p';

console.log(titulo.getAttribute('class'));
titulo.setAttribute('class','soyclasssetatribute');

input.value="hola soy value";

const img = document.createElement('img');
img.setAttribute('src','https://i.pinimg.com/originals/75/35/42/753542cb26a4c66d0ae7f8b0c756327c.png')
console.log(img);
pid.append(img);




