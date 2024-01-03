// Retorna true ou false de acordo com a regra que passarmos ao método. Sua função é iterar por todos os elementos do array e verificar a condição, se todos corresponderem retorna true, se apenas um não corresponder retorna false

const txt_pesquisar = document.getElementById("txt_pesquisar")
const p_array = document.getElementById("array")
const btnVerificar = document.getElementById("btnVerificar")
const resultado = document.getElementById("resultado")

const elementos_array = [21,25,19,20,19,18,22]
p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener("click", (evt)=>{
    const retorno = elementos_array.every((e, i)=>{
        if(e < 18){
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18
    })
    if(retorno){
        resultado.innerHTML = "Ok"
    }
    console.log(ret)
})