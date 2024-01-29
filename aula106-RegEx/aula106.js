// Expressões regulares são usadas para alterar o comportamento de uma função

// modificador 'i' ignora o case-sensitive 
// modificador 'g' globaliza o parâmetro, assim aplicando a função em todas as correspondencias 

let nome = new String("Bruno Pinho Campos") 
console.log(nome)

console.log(nome.search(/pinho/i)) 

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig, "Teste"))


