// Retorna true se um ou mais elementos coincidirem com a condição

const txt_pesquisar = document.getElementById("txt_pesquisar")
const p_array = document.getElementById("array")
const btnVerificar = document.getElementById("btnVerificar")
const resultado = document.getElementById("resultado")

const elementos_array = [16,12,10,17,15,13,19]
p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener("click", (evt)=>{
    const retorno = elementos_array.some((e, i)=>{
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