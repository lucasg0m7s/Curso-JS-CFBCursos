// getElementsByClassName() retorna um HTML collection igual o getElementsByTagName()


const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[6]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)


cursosC2.map((e)=>{
    e.classList.add("destaque") // Adicionando uma classe aos elementos obtidos pelo getElementsByClassName
})







