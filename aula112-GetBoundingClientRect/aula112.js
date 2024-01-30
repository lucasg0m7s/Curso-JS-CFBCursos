const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

const info = (el)=>{
    let DOMRECT = el.getBoundingClientRect()
    posx.innerHTML = `posx: ${DOMRECT.x}`
    posy.innerHTML = `posy: ${DOMRECT.y}`
    largura.innerHTML = `largura: ${DOMRECT.width}`
    altura.innerHTML = `altura: ${DOMRECT.height}`
}

q1.addEventListener("click", (evt)=>{
    info(evt.target)
})

q2.addEventListener("click", (evt)=>{
    info(evt.target)
})