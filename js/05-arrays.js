// formar de instanciar un array. Forma literal

let arrayVacio = [];

//array datos combinados (datos de tipo string, number, booleanos)

let array = ["pedro", 4, true];

let nombres = ["Ornella", "Octavio", "Leandro", "Marisol", "Gonzalo", "Facundo"];

let nombresDuplicado = ["Daniela", "Ornella", "Octavio", "Leandro", "Marisol", "Gonzalo", "Facundo"];

console.log(nombres[4]);

//arreglo de tamano (5 valores)
const arrayVacioDos = new Array(5);
console.log(arrayVacio);

//Agregar valores a un array con el constructor
const arrayElementos = new Array(10, 20, 30, 40)
console.log(arrayElementos);

//Metodo de array MUTABLES(modifican al array original)

let numbers = [2, 4, 6, 8, 10, 12]
console.log(numbers);

console.log(numbers.length);

//metodo push() Agrega un elemento a la ultima posicion
numbers.push(14)

console.log(numbers);
console.log(numbers.length);

//metodo pop() Elimina un elemento a la ultima posicion
numbers.pop()
console.log(numbers);

//metodo shift() elimina el primero
numbers.shift()
console.log(numbers);

//metodo unshift() agrega un elemento a la posicion 0
numbers.unshift(20);
console.log(numbers);

//metodo splice() tres parametros 1posicion 2cantidad de elementos y el 3 el valor que queremos agregar al array
numbers.splice(2, 3, 16, 18);
console.log(numbers);

//METODOS INMUTABLES( QUE NO NOS MODIFICA EL ARRAY ORIGINAL, HACEMOS UN DUPLICADO)

//map()
let numeritos = [1, 2, 3, 4, 5, 6, 7];

let dobles = numeritos.map(n => n * 2);

console.log(dobles);

//slice() corta el array incluyendo la primera posicion determinada en el primer parametro y excluye a la posicion determinada en el segundo parametro.
let a = [10, 20, 30, 40];

let b = a.slice(0,2);

console.log(b);

//concat() concatena
let c = [1, 2].concat([3, 4]);

console.log(c);

//find() devuelve el primer valor que cumpla con una condicion

let encontrado = numeritos.find(n => n > 4);

console.log(encontrado);

//filter() devuelve todos los valores que cumplan con la condicion

let filtrados = numeritos.filter(n => n >= 4);

console.log(filtrados);

//Spread operator

//Programa que nos pide decime cual es el mayor de las edades del array.

const edades = [49, 15, 26, 89, 27]

console.log(Math.max(...edades));

document.writeln(`El mayor del array edades es ${Math.max(...edades)} </br>`)
document.writeln(`El menor del array edades es ${Math.min(...edades)}`)











