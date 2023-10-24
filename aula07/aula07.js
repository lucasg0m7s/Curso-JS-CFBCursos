/* Operadores lógicos
&& -> and e V + F = F
|| -> or ou V + F = V
! -> not não INVERTE O RETORNO DA OPERAÇÃO
*/

let n1, n2, n3, n4

n1 = 10
n2 = 5
n3 = 15
n4 = 2

//console.log(!((n1>n2)&&(n1>n3)))

if(!(n1 > n2) && (n3 > n4)){
    console.log("verdadeiro")
}else{
    console.log("falso")
}

