const carro = document.getElementById("carro")
const btn_rodar = document.getElementById("btn_rodar")
const btn_parar = document.getElementById("btn_parar")

const init = () => {
    carro.style = "position: relative; left: 0px; width: 100px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null
let batida = false

const move = () => {
    if(!batida){
        if (parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10 * 1) + "px"
            anima = setTimeout(move, 20, 1)
        }else{
            batida = true
            anima = setTimeout(move, 20, 1)
        }
    }
    else
    {
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10 * -1) + "px"
            anima = setTimeout(move, 20, -1)
        }
        else{
            batida = false
            anima = setTimeout(move, 20, 1)
        }
    }
}

btn_parar.addEventListener("click", () => {
    clearTimeout(anima)
})

btn_rodar.addEventListener("click", () => {
    move()
})


// window.onload = init
window.addEventListener("load", init())
window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})
