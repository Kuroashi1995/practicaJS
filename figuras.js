//inicicializando variables para las figuras geometricas

//cuadrado
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

console.groupEnd();