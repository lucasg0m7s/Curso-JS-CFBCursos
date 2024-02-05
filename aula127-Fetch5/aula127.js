const texto = document.getElementById("texto")

const endpoint = "texto.txt"

fetch(endpoint)
.then(res => res.json())
.then(res => {
    console.log(res)
    console.log(res.canal)
    console.log(res.curso)
})