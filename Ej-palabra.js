//Realizar un programa que le pida al usuario una palabra y que nos devuelva las vocales.

let palabra = prompt("Ingrese una palabra").toUpperCase();

console.log(palabra.length);
console.log(palabra.substring(5,9));
console.log(palabra.charAt(9));
/* 
if (
    palabra.charAt(0) === "a" ||
    palabra.charAt(0) === "e" ||
    palabra.charAt(0) === "i" ||
    palabra.charAt(0) === "o" ||
    palabra.charAt(0) === "u" 

) {
    document.writeln(palabra.charAt(0))
}

if (
    palabra.charAt(1) === "a" ||
    palabra.charAt(1) === "e" ||
    palabra.charAt(1) === "i" ||
    palabra.charAt(1) === "o" ||
    palabra.charAt(1) === "u" 

) {
    document.writeln(palabra.charAt(1))
}

if (
    palabra.charAt(2) === "a" ||
    palabra.charAt(2) === "e" ||
    palabra.charAt(2) === "i" ||
    palabra.charAt(2) === "o" ||
    palabra.charAt(2) === "u" 

) {
    document.writeln(palabra.charAt(2))
}

if (
    palabra.charAt(3) === "a" ||
    palabra.charAt(3) === "e" ||
    palabra.charAt(3) === "i" ||
    palabra.charAt(3) === "o" ||
    palabra.charAt(3) === "u" 

) {
    document.writeln(palabra.charAt(3))
}

if (
    palabra.charAt(4) === "a" ||
    palabra.charAt(4) === "e" ||
    palabra.charAt(4) === "i" ||
    palabra.charAt(4) === "o" ||
    palabra.charAt(4) === "u" 

) {
    document.writeln(palabra.charAt(4))
}

if (
    palabra.charAt(5) === "a" ||
    palabra.charAt(5) === "e" ||
    palabra.charAt(5) === "i" ||
    palabra.charAt(5) === "o" ||
    palabra.charAt(5) === "u" 

) {
    document.writeln(palabra.charAt(5))
} */


//for(inicializacion; condicion; incremento o decremento) {}


for (let caracter = 0; caracter < palabra.length; caracter++) {
    if (
        palabra.charAt(caracter) === "A" ||
        palabra.charAt(caracter) === "E" ||
        palabra.charAt(caracter) === "I" ||
        palabra.charAt(caracter) === "O" ||
        palabra.charAt(caracter) === "U" 
    ) {
        document.writeln(palabra.charAt(caracter));
    }
}





