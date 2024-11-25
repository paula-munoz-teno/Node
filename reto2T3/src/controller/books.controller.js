//funcionalidad

//la variable que queremos definir. Incialmente vacía ya que el libro y el cliente de la API 
//lo irán rellenando 
let libros = null;
 // libros = [{id: 33, title: "Jose", type: "tapa blanda", author: Ana Mena},
//  {id: 33, title: "Jose", type: "tapa blanda", author: Ana Mena},
//  {id: 33, title: "Jose", type: "tapa blanda", author: Ana Mena}}




//F1(ESTA MEJOR)



function getBooks(request, response)
{
    let respuesta;
    let campo = request.query.campo;

    if (libros != null && campo) 
        respuesta = libro[campo];
    //queremos el valor de la variable campo
    else if (libros != null)
        respuesta = libros;
    else
        respuesta = {error: true, codigo: 200, mensaje: "El array libros no existe"}
    
    response.send(respuesta);   
}

function postBooks(request, response)
{
    let respuesta; 
    console.log(request.body)
    if (libros === null)
    {
        libros     = [{id: request.body[0].id,
                       title: request.body[0].title, 
                       type: request.body[0].type,
                       author: request.body[0].author,

                    },
                    {id: request.body[1].id,
                        title: request.body[1].title, 
                        type: request.body[1].type,
                        author: request.body[1].author,
 
                     },
                     {id: request.body[2].id,
                        title: request.body[2].title, 
                        type: request.body[2].type,
                        author: request.body[2].author,
 
                     }]
        
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Librso creado',data: libros};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'Libros ya existe'};

    response.send(respuesta);
}


function putBooks(request, response) {
    let respuesta;

    // Asegúrate de que libros esté inicializado como un array vacío
    if (!libros) {
        libros = [];
    }

    if (libros.length > 0) {
        // Iterar sobre el cuerpo de la solicitud
        for (let i = 0; i < request.body.length; i++) {
            const libro = request.body[i];
            if (libros[i]) {
                libros[i].id = libro.id || libros[i].id;
                libros[i].title = libro.title || libros[i].title;
                libros[i].type = libro.type || libros[i].type;
                libros[i].author = libro.author || libros[i].author;
            }
        }

        respuesta = { error: false, codigo: 200, mensaje: 'Libros actualizados', data: libros };
    } else {
        respuesta = { error: true, codigo: 404, mensaje: 'El array libros está vacío' };
    }

    response.send(respuesta);
}

function deleteBooks(request, response)
{
    let respuesta
    if (libros != null)
    {    
        libros     = null;
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'libros borrado',data: libros};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                        mensaje: 'El array libros no existe',data: libros};

    response.send(respuesta);
};

module.exports = {getBooks, postBooks, putBooks, deleteBooks};


















//HOLA




// function putBooks(request, response)
// {
//     let respuesta
//     if (libros !=  null)
        
//     {

//         // libros[0].id = request.body.id1,
//         // libros[0].title      = request.body.title1,
//         // libros[0].type   = request.body.type1,
//         // libros[0].author = request.body.author1,

//         // libros[1].id = request.body.id1;
//         // libros[1].title      = request.body.title1,
//         // libros[1].type   = request.body.type1,
//         // libros[1].author = request.body.author1,

//         // libros[2].id = request.body.id1,
//         // libros[2].title      = request.body.title1,
//         // libros[2].type   = request.body.type1,
//         // libros[2].author = request.body.author1,

//         libros[0].id = request.body[0].id1;
//         libros[0].title      = request[0].body.title1;
//         libros[0].type   = request.body[0].type1;
//         libros[0].author = request.body[0].author1;

//        libros[1].id = request.body[1].id2;
//         libros[1].title = request.body[1].title2; 
//         libros[1].type = request.body[1].type2;
//         libros[1].author = request.body[1].author2;

        
//         libros[2].id = request.body[1].id3;
//         libros[2].title = request.body[1].title3;
//         libros[2].type = request.body[1].type3;
//         libros[2].author = request.body[1].author3;


    

//         respuesta           = {error: false, codigo: 200, 
//                                 mensaje: 'Libros actualizado',data: libros};
//     }


//     else
//         respuesta = {error: true, codigo: 200, 
//                         mensaje: 'El array libros no existe',data: libros};

//     response.send(respuesta);
        
//         };

