const Valor_Padrao = 0

let valor = 0

console.log(valor)

function add(v){
    valor += v
}

add(10)

console.log(valor)

function soma(n1 = Valor_Padrao, n2 = Valor_Padrao){
    let res
    res = n1 + n2
    return res
}

let resultado_soma = soma(5)
console.log(resultado_soma)





