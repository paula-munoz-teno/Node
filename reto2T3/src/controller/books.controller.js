// Clase Book
class Book {
    constructor(title, type, author, price, photo, id_book, id_user) {
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
        this.id_book = id_book;
        this.id_user = id_user;
    }
}

// Inicializar el array de libros
let libros = [
    new Book("Un verso suelto", "Tapa Blanda", "Use Lahoz", 15, "assets/img/L1.jpg", 22222, 22221),
    new Book("Carol", "Tapa Blanda", "Patricia Highsmith", 18, "assets/img/L2carol.jpeg", 33333, 33331),
    new Book("Los siete Maridos de Evelyn Hugo", "Tapa Blanda", "Taylor Jenkins Reid", 20, "assets/img/L3.webp", 44444, 44441)
];


function getBooks(request, response) {
    console.log('Solicitando libros'); // Agrega este log
    let respuesta;

    if (libros.length > 0) {
        respuesta = { error: false, codigo: 200, mensaje: "Lista de libros obtenida", data: libros };
    } else {
        respuesta = { error: true, codigo: 404, mensaje: "No hay libros disponibles" };
    }

    response.send(respuesta);

}
    function getOne(request, response) {
        let id_book = parseInt(request.params.id_book); // Cambia a params
        console.log("Buscando libro con ID:", id_book); // Agrega este log
    
        let libro = libros.find(libro => libro.id_book === id_book);
        if (libro) {
            response.send({ error: false, codigo: 200, mensaje: "Libro encontrado", data: libro });
        } else {
            response.send({ error: true, codigo: 404, mensaje: "Libro no encontrado" });
        }
    }



// // Función para obtener libros
// function getBooks(request, response) {
//     let respuesta;

//     if (libros.length > 0) {
//         respuesta = { error: false, codigo: 200, mensaje: "Lista de libros obtenida", data: libros };
//     } else {
//         respuesta = { error: true, codigo: 404, mensaje: "No hay libros disponibles" };
//     }

//     response.send(respuesta);
// }

// Función para agregar un nuevo libro
function postBooks(request, response) {
    let title = request.body.title;
    let type = request.body.type;
    let author = request.body.author;
    let price = request.body.price;
    let photo = request.body.photo;
    let id_book = parseInt(request.body.id_book); // Asegúrate de convertir a número
    let id_user = request.body.id_user;

    console.log("ID del libro a agregar:", id_book); // Agrega este log

    // Verificar si el id_book ya existe
    if (libros.some(libro => libro.id_book === id_book)) {
        return response.status(400).send({
            error: true,
            codigo: 400,
            mensaje: "El ID del libro ya existe"
        });
    }

    let newBook = new Book(title, type, author, price, photo, id_book, id_user);
    libros.push(newBook);
    console.log(libros); // Verifica el array de libros

    let respuesta = { error: false, codigo: 200, mensaje: 'Libro creado', data: libros };
    response.send(respuesta);
}

// Función para actualizar un libro
function putBooks(request, response) {
    console.log('Cuerpo de la solicitud:', request.body); // Agrega este log
    let id_book = parseInt(request.body.id_book);
    console.log("ID recibido:", id_book);

    if (isNaN(id_book)) {
        return response.status(400).send({
            error: true,
            codigo: 400,
            mensaje: "ID no válido"
        });
    }

    let updatedData = request.body;
    let bookIndex = libros.findIndex(libro => libro.id_book === id_book);

    if (bookIndex === -1) {
        return response.status(404).send({
            error: true,
            codigo: 404,
            mensaje: "Libro no encontrado"
        });
    }

    // Actualizar los datos del libro
    libros[bookIndex] = { ...libros[bookIndex], ...updatedData };
    let respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Libro actualizado con éxito",
        libro: libros[bookIndex]
    };
    console.log(respuesta);
    response.send(respuesta);
    console.log(libros)
    console.log(data)
}

// // Función para eliminar un libro
// function deleteBooks(request, response) {
//     let id_book = parseInt(request.body.id_book); // Asegúrate de que el ID se esté enviando en el cuerpo
//     let libroIndex = libros.findIndex(libro => libro.id_book === id_book);

//     let respuesta;

//     if (libroIndex !== -1) {
//         libros.splice(libroIndex, 1);
//         respuesta = {
//             error: false,
//             codigo: 200,
//             mensaje: 'Libro eliminado',
//             data: libros
//         };
//     } else {
//         respuesta = {
//             error: true,
//             codigo: 404,
//             mensaje: 'Libro no encontrado'
//         };
//     }

//     response.send(respuesta);
// }

function deleteBooks(request, response) {
    let id_book = parseInt(request.params.id_book); // Cambia a params
    let libroIndex = libros.findIndex(libro => libro.id_book === id_book);

    if (libroIndex !== -1) {
        libros.splice(libroIndex, 1);
        response.send({
            error: false,
            codigo: 200,
            mensaje: 'Libro eliminado',
            data: libros // Devuelve la lista actualizada
        });
    } else {
        response.send({
            error: true,
            codigo: 404,
            mensaje: 'Libro no encontrado'
        });
    }
}



// Exportar las funciones
module.exports = { getOne, getBooks, postBooks, putBooks, deleteBooks };