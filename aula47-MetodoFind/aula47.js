// Método Find() pesquisa um elemento em um array e retorna true se achar e caso não ache retorna undefined 

const txt_pesquisar = document.getElementById("txt_pesquisar")
const p_array = document.getElementById("array")
const btnPesquisar = document.getElementById("btnPesquisar")
const resultado = document.getElementById("resultado")

const elementos_array = ["html", "css", "js"]
p_array.innerHTML = "[" + elementos_array + "]"

btnPesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML = "Valor não encontrado"
    const retorno = elementos_array.find((e, i)=>{
        if(e == txt_pesquisar.value.toLowerCase()){
            resultado.innerHTML = "Valor encontrado " + e + " na posição " + i
            return e
        }
    })
    console.log(retorno)
})