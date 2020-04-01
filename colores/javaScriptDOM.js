let contenedor = document.getElementById("container")
console.log(contenedor)

function numAleatorio() {
    let aleatorio = (Math.random()*255).toFixed(0)
    return aleatorio
}
function losRgb() {
   let numRgb =`rgb(${numAleatorio()}, ${numAleatorio()}, ${numAleatorio()})`
   return numRgb 
}

for (let index = 0; index < 27; index++) {
    let caja = document.createElement("div")
    let contador = document.createElement("p")
    let parrafo = document.createElement("p")

    let color =losRgb()
    let fondo = losRgb()
    
    let palabra = prompt("inserte una palabra que inicie con una letra del abecedario en orden alfabetico")
    let impresa = document.createTextNode(palabra)
    let numero = document.createTextNode(index+1)

    contenedor.appendChild(caja)
    caja.appendChild(contador)
    contador.appendChild(numero)
    caja.appendChild(parrafo)  
    parrafo.appendChild(impresa)

    caja.classList.add("caja")
    caja.style.color=color
    caja.style.backgroundColor=fondo
    contador.style.textAlign="right"
    caja.style.display="inline-block"
    parrafo.style.textAlign="center"
    parrafo.style.margin="30%"
}


