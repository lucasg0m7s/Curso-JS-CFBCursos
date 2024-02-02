const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
const btn_texto = document.getElementById("btn_texto")


const obterDados = ()=>{
    const endpoint = "https://7f6b143f-a8b1-4848-ba5e-1c98292b71a2-00-u4mlvujqih2e.kirk.replit.dev/"

    fetch(endpoint)
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)
        p_temp.innerHTML = "Temperatura: " + dados.temperatura
        p_nivel.innerHTML = "Nivel: " + dados.nivel
        p_press.innerHTML = "Pressão: " + dados.pressao
    
    })
}

// let intervalo = setInterval(obterDados, 1000)

let dados = {
    nome: "Bruno",
    canal: "CFBCursos",
    curso: "JS"
}

const gravarDados = ()=>{
    const endpoint = "https://7f6b143f-a8b1-4848-ba5e-1c98292b71a2-00-u4mlvujqih2e.kirk.replit.dev/"
    
    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(ret => {
        console.log(ret)
    })
}

btn_texto.addEventListener("click", evt => gravarDados())