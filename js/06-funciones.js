//Funciones tradicionales

function saludar() {
    //todas las lineas de codigo que queremos que ejecute esa funcion
    //document.writeln("Hola mundo 🌎")
};

saludar();

//funciones con parametros
function saludarPersona(nombre, apellido) {
    //el codigo que ejecuta esta funcion
    //document.writeln(`<p>Hola ${nombre}, ${apellido}!`)
}

saludarPersona("Leandro", "Blanca")

//Expresion de una funcion
const sumar = function (a, b) {
    return a + b;
}

console.log(sumar(25, 15));

//Arrow function 
const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 5));

const decirHola = () => console.log("Hola a todos!");

decirHola()

function valorAleatorio(min, max) {
    const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    document.writeln(`<p>El numero aleatorio creado es: ${aleatorio}</p>`)
}

const max = parseInt(prompt("Ingresa un numero maximo"));
const min = parseInt(prompt("Ingresa un numero minimo"));

valorAleatorio(max, min)