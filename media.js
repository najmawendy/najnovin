const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

form.addEventListener("submit"),(e) =>{
    e.preventDefaunt()

    const nome = form.inNome.value
    const nota1 = Number(form.inNota1.value)
    const Nota2 = Number (form.inNota2.value)
    const media = (nota1 + nota2)/2
    resp1.innerText = 'Média das Notas ${media.tofixed(2)}'


    
}