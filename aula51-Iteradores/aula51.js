// Permite operar os elementos do array e obter um resultado com esses elementos

const p_array = document.getElementById("array")
const btnReduzir = document.getElementById("btnReduzir")
const resultado = document.getElementById("resultado")

const elementos_array = [1,2,3,4,5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click", (evt)=>{
    dobro.push(elementos_array[0] * 2)
    resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao)=>{
        ant.push(anterior) // Valor anterior é o resultado do retorno
        atu.push(atual) // Valor atual é o elemento que esta sendo iterado
        dobro.push(atual * 2)
        return atual + anterior
    })
    resultado.innerHTML += "<br/>V.anterior: "+ant+"<br/>V.atual: "+atu+"<br/>Dobro: "+dobro

})