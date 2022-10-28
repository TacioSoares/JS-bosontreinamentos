var mes = ["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro"]
var data = new Date
var res = window.document.querySelector("#res")
var botao = window.document.querySelector("#submeter")
res.innerHTML = `Hoje é dia ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}`
botao.addEventListener('click',alterar)

function alterar() {
    data = new Date(document.querySelector("#ano").value, document.querySelector("#meses").value, document.querySelector("#data").value)
    return data
}