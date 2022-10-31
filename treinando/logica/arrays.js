var mes = ["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro"]
var res = window.document.querySelector("#res")
var botao = window.document.querySelector("#submeter")
botao.addEventListener('click',alterar)
data = new Date()
res.innerHTML = `Hoje é dia ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}`
function alterar() {
    data.setDate(document.querySelector("#data").value)
    data.setMonth(document.querySelector("#meses").value)
    data.setFullYear(document.querySelector("#ano").value)
    res.innerHTML = `Hoje é dia ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}`
}
 

