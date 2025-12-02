//Comentarios de una linea de codigo

/* Comentario 
de varias 
lineas */

//Tipos de variables

let number = 3; //Variable mutable, respeta scope local o global

var nombre = 'Jose'; //Variable mutable, no respeta scope local o global

const apellido = 'Diaz' //Variable inmutable, respeta scope 

console.log("Hola mundo");
console.info("Hola mundo");
console.warn("Hola mucho");
console.error("Hola mundo");

/* document.writeln("Hola mundo"); */
/* document.writeln("<h1 class='text-blue'>Hola mundo</h1>"); */

const taiga = "https://tree.taiga.io/";

console.log(taiga);

//VAR mutable, no es recomendable el uso porque no respeta bloque, scope (ambito) global y local. variable mutable.

var a = 1;

a = 2;

var a = 3;

// LET mutable, uso recomendable porque respeta el bloque {}, scope local y global.

let b =10;

b = 20;

/* let b =30; */


// CONST inmutable, respeta bloque {}

const c = 100;

/* c = 200 */

const numeros = [1, 2, 3];

numeros.push(4);

console.log(numeros);

let curso = "Fullstack MERN"

document.writeln('<br/>Curso ' + curso )

curso = "Nextjs";

document.writeln(`<br/>Curso ${curso}`)

//solicitar al usuario su nombre que cargue por pantalla

const nombreUsuario = prompt("Ingresa tu nombre");

console.log(nombreUsuario);

document.writeln(`<br/> Bienvenido ${nombreUsuario} 👩🏽‍💻`)














