// Função map serve para iterar entre todos os elementos de uma coleção

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e * 2

let num = ['1', '2','3', '4', '5'].map(dobrar)

console.log(num)


//-----------------------------------

// const el = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el,({innerHTML})=>{ return innerHTML})
// console.log(val)

//-----------------------------------

// let el = document.getElementsByTagName("div")
// el = [...el]
// el.map((elemento, indice)=>{
//     elemento.innerHTML = "CFB CURSOS"
//     console.log(elemento.innerHTML)
// })

//-----------------------------------

// const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

// let c = cursos.map((elemento, indice) =>{
//     return elemento
// })

// console.log(c)