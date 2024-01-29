// Expressões regulares são usadas para alterar o comportamento de uma função

// modificador 'i' ignora o case-sensitive 
// modificador 'g' globaliza o parâmetro, assim aplicando a função em todas as correspondencias 

let nome = new String("Bruno Pinho Campos 1978") 
let email = "bruno@bruno.com.br" 
let numeros = "1, 10, 100, 1000"

console.log(nome)

console.log(nome.search(/pinho/i)) 

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig, "Teste"))

console.log(nome.match(/[a-g|h-z|0-9]/ig))

// Metacaracteres
console.log(nome.match(/\d/ig)) // números
console.log(nome.match(/\s/ig)) // espaços
console.log(nome.match(/\bP/ig)) // DWORD

// Quantificadores
console.log(nome.match(/o+|s+/ig)) // Separa de acordo com o grupo que o caractere faz parte
console.log(numeros.match(/10*/ig)) // Retorna a ocorrencia do primeiro digito, no caso '1', e as correspondencias do '10' junto com a string toda ao qual o 10 faz parte
console.log(numeros.match(/10?/ig)) // Retorna a ocorrencia do primeiro digito, no caso '1', e apenas se tem o 10




