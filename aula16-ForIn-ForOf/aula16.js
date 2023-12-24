const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

// for(let i = 0; i < num.length; i++){
//     console.log(num[i])
// }

// Percorre coleções

// Percorre os elementos
for(o of objs){
    console.log(o.innerHTML = "Curso")
}

// Percorre as posições
for(o in objs){
    console.log(o)
}