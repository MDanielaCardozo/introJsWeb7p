//Condicionales simples

/* if(condicion){
    codigo a ejecutar si se cumple la condicion
} */

//Condicionales doble

/* if(condicion){
   codigo a ejecutar si se cumple la condicion
}else{
  codigo a ejecutar si no se cumple la condicion
} */

  //OPTIONAL CHAINING

  //() ? {} : {}

  /*  */

  //Pedir al usuario que nos diga la edad y evaluar si es mayor de 18 anios

  const edad = parseInt(prompt('Ingrese su edad'));
 console.log(edad);

 console.log(isNaN("hola"));
 console.log(isNaN("18"));
 console.log(isNaN(18));
 
 
 
  
if(isNaN(edad)) {
    document.writeln("Edad no valida, vuelva a ingresar su edad.")
}else {
    if(edad >= 18) {
    document.writeln("Sos mayor de edad 😎")
} else {
    document.writeln("Sos menor de edad 😁")
}
}

console.log();
