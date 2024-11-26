
//funcionalidad

class Book {
    constructor(id, title, type, author,) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.author = author;
        
    }
}

//la variable que queremos definir. Incialmente vacía ya que el libro y el cliente de la API 
//lo irán rellenando 
let libros = [];
 // libros = [{id: 33, title: "Jose", type: "tapa blanda", author: Ana Mena},
//  {id: 33, title: "Jose", type: "tapa blanda", author: Ana Mena},
//  {id: 33, title: "Jose", type: "tapa blanda", author: Ana Mena}}
//se inicia array vacío




function getBooks(request, response) {
    // Variable para almacenar la respuesta
    let respuesta;

    // Verificar si el array de libros no está vacío
    if (libros.length > 0) {
        respuesta = { error: false, codigo: 200, mensaje: "Lista de libros obtenida", data: libros };
    } else {
        // Si no hay libros en el array
        respuesta = { error: true, codigo: 404, mensaje: "No hay libros disponibles" };
    }

    // Enviar la respuesta
    response.send(respuesta);
}



function postBooks(request, response) {
    // quiero el Obtener el título, el tipo y el autor  
    let title = request.body.title;
    let type = request.body.type;
    let author = request.body.author;
    let id = 1; // Por defecto, empezar con ID 1

    // Usar un bucle for...of para encontrar el último ID
    if (libros.length > 0) {
        for (let libro of libros) {
            // Asignar el ID al máximo encontrado
            if (libro.id >= id) {
                id = libro.id + 1; // Aumentar el ID si se encuentra un ID mayor
            }
        }
    }

    // Crear un nuevo libro usando la clase Book
    let newBook = new Book(id, title, type, author);

    // Agregar el nuevo libro al arreglo de libros
    libros.push(newBook);
    console.log(libros);

    // Crear objeto de respuesta
     respuesta = {error: false, codigo: 200, mensaje: 'Libro creado',data: libros};

    // Enviar la respuesta al cliente
    response.send(respuesta);
}




function putBooks(request, response) {
    // Obtener el ID del libro desde los parámetros de consulta
    let id = parseInt(request.query.id); 
    console.log("ID recibido:", id);

    let respuesta

    // Verificar que el ID sea un número válido
    if (isNaN(id)) {
        return response.status(400).send({
            error: true,
            codigo: 400,
            mensaje: "ID no válido"
        });
    }

    
    let updatedData = request.body; 

    
    let  bookIndex = libros.findIndex(libro => libro.id === id); // Buscar el índice del libro

    if (bookIndex === -1) {
        respuesta = {
            error: true,
            codigo: 404,
            mensaje: "Libro no encontrado"
        };
    }

    // Actualizar los datos del libro
    libros[bookIndex] = { ...libros[bookIndex], ...updatedData }; // Actualizar el libro con los nuevos datos

    // Devolver la respuesta
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Libro actualizado con éxito",
        libro: libros[bookIndex]
    };

    response.send(respuesta);
}


function deleteBooks(request, response) {
    // Obtener el ID del libro a eliminar desde los parámetros de la solicitud
    let id = parseInt(request.query.id);
    
    // Variable para almacenar la respuesta
    let respuesta;

    // Buscar el índice del libro en el array de libros
    let libroIndex = libros.findIndex(libro => libro.id === id);

    if (libroIndex !== -1) {
        // Si se encuentra el libro, eliminarlo del array
        libros.splice(libroIndex, 1);

        // Crear objeto de respuesta
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Libro eliminado',
            data: libros
        };
    } else {
        // Si no se encuentra el libro, enviar un error
        respuesta = {
            error: true,
            codigo: 404,
            mensaje: 'Libro no encontrado'
        };
    }

    // Enviar la respuesta al cliente
    response.send(respuesta);
}
//hacer un filter 

module.exports = {getBooks, postBooks, putBooks, deleteBooks};




