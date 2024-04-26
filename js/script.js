console.log("Hello World!")

let elH1 = document.getElementById("titulo")

console.log(elH1.innerHTML)

let elButton = document.getElementById("btn")

elButton.addEventListener("click", () => {
    let nrAleatorio = Math.round(Math.random())

    document.body.style.backgroundColor = `#F${nrAleatorio}F0${nrAleatorio}F`
})

console.error("ERRO")
console.info("INFO")
console.warn("AVISO")

