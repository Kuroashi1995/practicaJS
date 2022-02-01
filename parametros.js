//introduciendo los elementos para el cálculo
const lista1 =[
    100,
    200,
    300,
    500
];


function medArit(lista) {
    /*let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }*/

    const sumaLista = lista.reduce(
        function (valorAcumulado, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promLista = sumaLista / lista.length;
    return promLista;
}