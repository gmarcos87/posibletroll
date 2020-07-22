var cantidadDeCaracteresNumericosParaSerConsideradoUnTroll = 5

function esUnNombreDeUsuarie (texto) {
    return texto.length > 0 && texto[0] == "@"
}

function esUnPosibleTroll(nombreDeUsuarie) {
    var resultadoDeLaRegexp = /(\d+)"*$/.exec(nombreDeUsuarie)
    //No si no tiene números al final del nombre
    if (resultadoDeLaRegexp === null) return false 
    //Si porque tiene números al final y es de más de X cantidad de caracteres
    return resultadoDeLaRegexp[0].length > cantidadDeCaracteresNumeriosParaSerConsideradoUnTroll 
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


