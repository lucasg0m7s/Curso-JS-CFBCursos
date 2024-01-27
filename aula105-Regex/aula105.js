let nome = new String("Bruno Pinho Campos")

console.log(nome.startsWith("Bruno")) // Verifica se a string começa com o parâmetro informado retornando true ou false

console.log(nome.endsWith("Campos")) // Verifica se a string termina com o parâmetro informado retornando true ou false

console.log(nome.includes("Pinho")) // Verifica se a string contém o parâmetro informado retornando true ou false

console.log(nome.repeat(4)) // Repete a string de acordo com o parâmetro informado

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))

console.log(String.fromCodePoint(66, 114, 117, 110, 111)) // Retorna o caractere pelo seu código

let nome_ts = "Bruno"

console.log(`Nome: ${nome_ts}`) // Interpolação usando template string