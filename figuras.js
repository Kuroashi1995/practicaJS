//creando una sola funcion para calcular los perímetros y areas




/*console.log("Inicialice la función calculos(figura, lado1 o radio, lado2, base, altura), recibe Cuadrado, Triangulo y Circulo");

function calculos(figura, lado1, lado2, base, altura) {
    switch(figura) {
        case "Cuadrado":
            var perimetro = lado1 * 4;
            var area = lado1 * lado1;
            console.log(`Para este ${figura}, su perímetro es de ${perimetro}cm y su área es de ${area} cm^2`);
            break;
        case "Triangulo":
            var perimetro = lado1 + lado2 + base;
            var area = (base * altura) / 2;
            console.log(`Para este ${figura}, su perímetro es de ${perimetro}cm y su área es de ${area} cm^2`);
            break;
        case "Circulo":
            var perimetro = 2 * PI * lado1;
            var area = PI * lado1 * lado1;
            console.log(`Para este ${figura}, su perímetro es de ${perimetro}cm y su área es de ${area} cm^2`);
            break;
        default:
            console.log("La figura especificada no es una de las aceptadas")
    }
}
            
//inicicializando variables para las figuras geometricas
cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("El lado del cuadrado es " + ladoCuadrado + "cm");

var perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm");

var areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("el área del cuadrado es " + areaCuadrado + "cm^2");

console.groupEnd();


//Triangulo
console.group("Triángulo");

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 6;
const alturaTriangulo = 4;

console.log("Los lados del triángulo son " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

var perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del cuadrado es " + perimetroTriangulo + "cm");

var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("el área del cuadrado es " + areaTriangulo + "cm^2");

console.groupEnd();

//circulo
console.group("Circulo");

const diametroCirculo = 15;
const PI = Math.PI;
console.log("El radio del círculo es " + diametroCirculo / 2 + "cm");

var circunferencia = diametroCirculo * PI;
console.log("La circunferencia es " + circunferencia + "cm");

var areaCirculo = PI * (diametroCirculo / 2) * (diametroCirculo / 2);
console.log("el área del circulo es " + areaCirculo + "cm^2");

console.groupEnd(); */


//aquí interactuamos con el html

function calculoshtml() {
    //inicializando variables del html
    const fig = document.getElementById("fig");
    const figura = fig.value;

    const Lado1 = document.getElementById("lado1");
    const lado1 = Number(Lado1.value);

    const Lado2 = document.getElementById("lado2");
    const lado2 = Number(Lado2.value);

    const LadoBase = document.getElementById("base");
    const base = Number(LadoBase.value);

    const Altura = document.getElementById("altura");
    const altura = Number(Altura.value);

    var Perimetro = document.getElementById("perimetro");
    var isPerimeter = Perimetro.checked;

    var Area = document.getElementById("area");
    var isArea = Area.checked;

    var Both = document.getElementById("ambos");
    var isBoth = Both.checked;

    const PI = Math.PI;

    console.log(figura);
    switch(figura) {
        case "Cuadrado":
            var perimetro = lado1 * 4;
            var area = lado1 * lado1;
            console.log(isPerimeter, isArea, isBoth, "pase por aqui");
            if(isPerimeter) {
                alert(`Para este ${figura}, su perímetro es de ${perimetro}cm`);
            } else if (isArea) {
                alert(`Para este ${figura}, su área es de ${area} cm^2`);
            } else if(isBoth) {
                alert(`Para este ${figura}, su perímetro es de ${perimetro}cm y su área es de ${area} cm^2`);
            }
            
            break;
        case "Triangulo":
            var perimetro = lado1 + lado2 + base;
            var area = (base * altura) / 2;
            console.log(isPerimeter, isArea, isBoth, "pase por aqui");
            if(isPerimeter) {
                alert(`Para este ${figura}, su perímetro es de ${perimetro}cm`);
            } else if (isArea) {
                alert(`Para este ${figura}, su área es de ${area} cm^2`);
            } else if(isBoth) {
                alert(`Para este ${figura}, su perímetro es de ${perimetro}cm y su área es de ${area} cm^2`);
            }
            break;
        case "Circulo":
            var perimetro = 2 * PI * lado1;
            var area = PI * lado1 * lado1;
            console.log(isPerimeter, isArea, isBoth, "pase por aqui");
            if(isPerimeter) {
                alert(`Para este ${figura}, su perímetro es de ${perimetro}cm`);
            } else if (isArea) {
                alert(`Para este ${figura}, su área es de ${area} cm^2`);
            } else if(isBoth) {
                alert(`Para este ${figura}, su perímetro es de ${perimetro}cm y su área es de ${area} cm^2`);
            }
            break;
            default:
            alert("La figura especificada no es una de las aceptadas")
            break;
    }
}