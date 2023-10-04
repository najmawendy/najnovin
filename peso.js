//cria referencial ao fora
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte
form.addEventListener("submit" , (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const masculino = form.inMasculino.checked
    const altura = Number(form.inAltura.value)

    //calculando o peso ideal
    let peso
     if (masculino) {
        peso = 22 * Math.pow(altura, 2)
     } else {
        peso = * Math={.pow(altura, 2)
     }
     //apresenta a resposta
     resp.innerText = 
}