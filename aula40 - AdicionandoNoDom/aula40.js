// Criando elementos

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]


cursos.map((el, chave)=>{
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = el
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    caixa1.appendChild(novoElemento)
})

// const novoElemento = document.createElement("div")
// novoElemento.setAttribute("id", "c7")
// novoElemento.setAttribute("class", "curso c1")
// novoElemento.innerHTML = "ReactNative"





