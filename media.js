const lista1 = [
    100,
    200,
    500,
    700,
    40000
];


function mediana(lista1)
{
    if (lista1.length == 1) {

    const mitadLista1 = 0;
    var mediana = lista1[mitadLista1]; 
    return mediana;
    
    } else if (lista1.length % 2 == 0) {
        
        const mitadLista1a = lista1.length / 2;
        const mitadLista1b = mitadLista1a - 1;
        var mediana = (lista1[mitadLista1a] + lista1[mitadLista1b]) / 2;
        return mediana;

    } else {

        const mitadLista1 = (lista1.length - 1) / 2;
        var mediana = lista1[mitadLista1];
        return mediana;
    }    
}