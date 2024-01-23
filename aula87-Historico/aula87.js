const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click", (evt)=>{
    // window.location = "https://google.com"
    // window.location.replace("https://google.com.BR") // Deleta a URL corrente do histórico
    // window.location.assign("https://google.com.BR") // Não deleta a URL corrente do histórico
    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    // window.history.go(1)
    window.location = url.value
})