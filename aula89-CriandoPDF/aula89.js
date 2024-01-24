const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt)=>{
    alert("Olá como você está?")
})

btn_confirm.addEventListener("click", (evt)=>{
    confirm("Você está aprendendo muito?") ? console.log("Botão OK pressionado") : console.log("Botão Cancelar pressionado")
})

btn_prompt.addEventListener("click", (evt)=>{
    const nome = prompt("Digite seu nome:", "Digite seu nome aqui")
    if(nome == null){
        console.log("Botão CANCELAR pressionado")
    }else{
        console.log("Nome digitado: " + nome)
    }
})