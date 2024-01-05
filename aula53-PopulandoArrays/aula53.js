const btnAdicao = document.getElementById("btnAdicao")
const btnSubtracao = document.getElementById("btnSubtracao")
const btnMulti = document.getElementById("btnMulti")
const btnDivisao = document.getElementById("btnDivisao")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")
const botoes = [btnAdicao, btnSubtracao, btnMulti, btnDivisao]

const operacoes = [
    (numero1, numero2) => {
        let res = 0
        res = parseInt(numero1) + parseInt(numero2)
        resultado.innerHTML = numero1 + " + " + numero2 + " = " + res
    },
    (numero1, numero2) => {
        let res = 0
        res = numero1 - numero2
        resultado.innerHTML = numero1 + " - " + numero2 + " = " + res
    },
    (numero1, numero2) => {
        let res = 0
        res = numero1 * numero2
        resultado.innerHTML = numero1 + " × " + numero2 + " = " + res
    },
    (numero1, numero2) => {
        let res = 0
        res = numero1 / numero2
        resultado.innerHTML = numero1 + " ÷ " + numero2 + " = " + res
    },
]

botoes.map((el) => {
    el.addEventListener("click", () => {
        if(num1.value != "" && num2.value != "")
        {
            if (el.id == "btnAdicao") {
                operacoes[0](num1.value, num2.value)
            }
            else if (el.id == "btnSubtracao") {
                operacoes[1](num1.value, num2.value)
            }
            else if (el.id == "btnMulti") {
                operacoes[2](num1.value, num2.value)
            }
            else if (el.id == "btnDivisao") {
                operacoes[3](num1.value, num2.value)
            }
        }else{
            alert("Os campos não podem estar vazios")
        }
    })
})