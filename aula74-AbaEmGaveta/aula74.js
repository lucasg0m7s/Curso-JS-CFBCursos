const teclasNum = [...document.querySelectorAll(".num")] 
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector("#display")
const tCopy = document.getElementById("tCopy")
const tLimpar = document.getElementById("tLimpar")
const tIgual = document.getElementById("tIgual")
const teste = document.getElementById("teste")

let sinal = false
let decimal = false

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false
        if(evt.target.innerHTML == ",")
        {
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0")
                {
                    display.innerHTML = "0,"
                }
                else
                {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }
        else
        {
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal = true 
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "X"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tLimpar.addEventListener("click",()=>{
    sinal = false
    decimal = false
    display.innerHTML = 0
})

tIgual.addEventListener("click",()=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tCopy.addEventListener("click",()=>{
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select()
    // teste.setSelectionRange(0,99999) // Mobile
    // navigator.clipboard.writeText(teste.value)
})