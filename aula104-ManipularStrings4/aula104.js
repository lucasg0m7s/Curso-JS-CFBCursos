let nome = new String("Bruno Pinho Campos")
let nome2 = new String("Bruno Pinho Campos")
let nome3 = new String(nome.toUpperCase())
let canal = new String("CFBCursos")

console.log(nome)

console.log(nome.charAt(0)) // Retorna o caractere de acordo com a posição indicada

console.log(nome.charCodeAt(0)) // Retorna código do caractere de acordo com a posição indicada

console.log(nome.concat(canal)) // Retorna a concatenação de duas strings

console.log(nome.indexOf("o")) // Retorna a posição do primeiro caractere indicado. Caso não encontre, retorna -1.

console.log(nome.lastIndexOf("o")) // Retorna a posição do ultimo caractere indicado. Caso não encontre, retorna -1.

console.log(nome.localeCompare(nome2)) // Compara duas strings.Retorna 0 quando as duas strings são iguais. Retorna 1 quando a segunda string é diferente e menor que a primeira e -1 quando o inverso ocorre

console.log(nome.replace("B", "P")) // Substitui o primeiro caractere ou frase pelo segundo caractere indicado. Isso apenas ocorre com a primeira frase encontrada

console.log(nome.search("Pinho")) // Retorna primeira posição do caractere ou frase indicada

console.log(nome.slice(6, 11)) // Retorna apenas a parte da string dentre as posições indicadas

let arr_nome = nome.split(" ") // Retorna um array de strings. O método separa a string em um array de strings de acordo com o caractere indicado
console.log(arr_nome)

let parte = nome.substring(6, 11) // Retorna apenas a parte da string dentre as posições indicadas
console.log(parte)

let parte2 = nome.substr(6, 5) // // Retorna apenas a parte da string dentre a posição inicial e o tamanho a partir dela
console.log(parte2)

console.log(nome.toUpperCase()) // Transforma tudo em maiúsculo 
console.log(nome3.toLowerCase()) // Transforma tudo em minúsculo

console.log(nome.valueOf()) // Retorna somente o valor da string, não o objeto

let num = 10
num = num.toString()
console.log(typeof(num)) // Converte qualquer valor em string
