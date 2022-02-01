//Preparación de la fórmula para prueba con constantes

/*const precioOriginal = 100;
const descuento = 15;

const procentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * procentajePrecioConDescuento) / 100;
console.log({
    precioOriginal,
    descuento,
    procentajePrecioConDescuento,
    precioConDescuento
})*/

//funcion descuento
function descuento(precio, descuento) {
    //calculando el factor de descuento
    var factDesc = (100 - descuento) / 100;
    //calculando el precio real a pagar
    var precioReal = precio * factDesc;

    return precioReal;
}

//Interactuamos con el html
function onclickPriceDescuento() {
    const Precio = document.getElementById("InputPrice");
    const price = Precio.value;

    const Desc = document.getElementById("InputDescuento");
    const desc = Desc.value;
    
    var Texto = document.getElementById("Result");

    var Paga = descuento(price, desc);
    
    Texto.innerText = `El precio con descuento es ${Paga}Gs.`
}