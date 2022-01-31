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

    return {factDesc , precioReal};
}
