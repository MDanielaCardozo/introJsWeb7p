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
numbers.splice(2, 3, 16);
console.log(numbers);









