const caixa = document.querySelector("#caixa")

let cores= ["Azul", "Verde", "Vermelho", ["claro", "escuro"]]
let cursos = ["HTML", "CSS", "JS", cores]

// cursos[0] = 2

// cursos.push("C++") // Adicioona elementos no final do array
// cursos.unshift("Python") // Adicioona elementos no começo do array
// cursos.pop() // Retira elementos no final do array
// cursos.shift() // Retira elementos no começo do array

console.log(cursos[3][3][1])

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})
