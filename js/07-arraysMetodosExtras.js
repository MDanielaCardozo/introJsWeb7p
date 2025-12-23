//Crear un programa que tenga un array de peliculas. Queremos pedirle al usuario que realice alguna de las siguientes opciones: 1- encontrar una peli en array 2- filtrar peliculas que contengan algun nombre 3- mostrar todas las peliculas del array.

function mostrarMensaje(mensaje) {
    document.writeln(`<p>${mensaje}</p>`)
}

const peliculas = ["El señor de los anillos", "Jurassic Park", "John Wick", "Jurassic Park: El mundo perdido", "Interestellar", "Jurassic World"];

const opcion = parseInt(prompt("Seleccionar una opcion: 1- encontrar una peli en array 2- filtrar peliculas que contengan algun nombre 3- mostrar todas las peliculas del array."))

switch (opcion) {
    case 1:
        //pedir al usuario la peli que quiere buscar
        const peliBuscada = prompt("Ingrese la pelicula que quieres buscar");
        //buscar la pelicula y mostrar por pantalla si la encontre, si no mostrar un mensaje de no encontrada
        const coincidencia = peliculas.find((pelicula) => pelicula.toLowerCase() === peliBuscada.toLowerCase())

        console.log(coincidencia);
        if (coincidencia) {
            mostrarMensaje(`Pelicula encontrada 🎬 ${peliBuscada}`)
        } else {
            mostrarMensaje("No encontramos la peli que seleccionaste.")
        }
        
        break;
    case 2: 
    const peli = prompt("Ingrese la pelicula que quieres buscar");
    const peliculasFiltradas = peliculas.filter((pelicula) => pelicula.toLowerCase().includes(peli.toLowerCase()))    

    console.log(peliculas[1].toLowerCase().includes(peli.toLowerCase()));
    

    default:
        break;
}