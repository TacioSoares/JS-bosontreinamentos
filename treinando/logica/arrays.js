function calcula(v,r) {
    var i = v/r
    return i
}

var v = prompt("Informe qual a tensão")
var r = prompt("Informe qual a resistência")

corrente = calcula(v,r)
document.write(`A corrente mede ${corrente}A`)