const endpoint = "https://7f6b143f-a8b1-4848-ba5e-1c98292b71a2-00-u4mlvujqih2e.kirk.replit.dev/"

fetch(endpoint)
.then(res => res.json())
.then(dados =>{
    console.log(dados)
})
