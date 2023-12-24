// Operador Spread
// Espalha e transforma em um array e assim conseguimos utilizar os metodos de array para manipular elementos

const objs1 = document.getElementsByTagName("div");

const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(element => {
    element.innerHTML = "Curso"
});

console.log(objs1);
console.log(objs2);

