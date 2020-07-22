var cantidadDeCaracteresNumeriosParaSerConsideradoUnTroll = 5

function esUnNombreDeUsuarie (texto) {
    return texto.length > 0 && texto[0] == "@"
}

function esUnPosibleTroll(nombreDeUsuarie) {
    var resultadoDeLaRegexp = /(\d+)"*$/.exec(nombreDeUsuarie)
    if (resultadoDeLaRegexp === null) return false //No tiene numeros al final del nombre
    return resultadoDeLaRegexp[0].length > cantidadDeCaracteresNumeriosParaSerConsideradoUnTroll //Tiene y más de X canitdad
}

function aplicarEstilo(elemento) {
    elemento.style.border = "1px solid red"
    elemento.style.borderRadius = "8px"
    elemento.style.padding = "0 4px"
    elemento.style.background = "red"
    elemento.style.color = "#fff"
}

function buscarSospechas() {
    var elementosSpan = document.getElementsByTagName("span")
    Array.from(elementosSpan).forEach(function(elemento) {
        var texto = elemento.innerText
        if(esUnNombreDeUsuarie(texto) && esUnPosibleTroll(texto)) {
            aplicarEstilo(elemento)
        }
    })
}

document.addEventListener("load", buscarSospechas)
document.addEventListener("scroll", buscarSospechas)
