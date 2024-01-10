const Pessoa={
    nome: "",
    idade: "",
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

const res = document.querySelector(".res")
const btn_add = document.getElementById("btn_add")

btn_add.addEventListener("click", ()=>{
    Pessoa.setNome(document.getElementById("f_nome").value)
    Pessoa.setIdade(document.getElementById("f_idade").value)

    const div = document.createElement("div")
    div.setAttribute("class", "pessoa")
    div.innerHTML = `Nome: ${Pessoa.getNome()}<br/>Idade: ${Pessoa.getNome()}`
    res.appendChild(div)
})
