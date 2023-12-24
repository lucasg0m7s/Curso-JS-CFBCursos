// Expressão Break encerra a execução do loop
// Expressão Continue para a iteração e pula para o teste lógico

let n = 0;
let max = 1000;
let pares = 0;

// while(n < max){
//     console.log("CFB Cursos - " + n)
//     if(n > 10)
//     {
//         break
//     }
//     n++
// }

// console.log("Fim do programa")

for(let i = n; i < max; i++){
    if(i%2 != 0){
        continue
    }
    pares++
}
console.log("Quantidade de pares: " + pares)
console.log("Fim do programa")
