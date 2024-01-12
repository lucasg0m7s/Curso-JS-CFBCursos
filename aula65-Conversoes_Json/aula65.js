const pessoa = {
    nome:"Bruno",
    canal: "CFB Cursos",
    curso: "JavaScript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variaveis",
        aula03:"Condicional"
    }
}

const s_json_pessoa = JSON.stringify(pessoa) // Converte um objeto para string JSON
const o_json_pessoa = JSON.parse(s_json_pessoa) // Converte uma string JSON em objeto 


console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)

