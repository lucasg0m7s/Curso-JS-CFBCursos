// O * define a função geradora
// Funções geradoras tem o controle da execução

/*function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/
/*
function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const itc = perguntas()

console.log(itc.next().value)
console.log(itc.next('Bruno').value)
console.log(itc.next('Natação').value)
*/

function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}

const itc = contador()
for(let c of itc){
    console.log(c)
}





