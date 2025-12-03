//Programa en el que le pedimos al usuario que nos ingrese el dia de la semana en que esta. En funcion del dia devolverle un msj.

const diaSemana = parseInt(prompt("Ingresa un numero de la semana: 1-Lunes 2-Martes 3-Miercoles 4-Jueves 5-Viernes 6-Sabado 7-Domingo."));

switch (diaSemana) {
    case 1:
        document.writeln("Lunes 🛠️")
        break;
    case 2:
        document.writeln("Martes 👩🏽‍💻")
        break;
    case 3:
        document.writeln("Miercoles 🪐")
        break;
    case 4:
        document.writeln("Jueves 😈")
        break;
    case 5:
        document.writeln("Viernes 🎉")
        break;
    case 6:
        document.writeln("Sabado 🎉🎉")
        break;       
    case 7:
        document.writeln("Domingo 😴")
        break;                    
    default:
        document.writeln('Ingresaste una opcion erronea.')
        break;
}