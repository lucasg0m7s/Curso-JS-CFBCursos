// Template Strings - Forma mais prática de escrever strings com variáveis

const caixa = document.querySelector("#caixa")

carros = ["Polo", "Golf", "T-Cross", "HRV"]

let ul = `<ul>`
carros.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul += `</ul>`

// const curso = "Js"
// const canal = "CFB Cursos"
// const frase = `Este é o<br> curso de ${curso} do<br> canal ${canal}`

// console.log(frase)


caixa.innerHTML = ul