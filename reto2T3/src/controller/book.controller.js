//funcionalidad

//la variable que queremos definir. Incialmente vacía ya que el libro y el cliente de la API 
//lo irán rellenando 
let libro = null; //{id: 33, title: "Jose", type: "tapa blanda", author: Ana Mena}

// function getStart(request, response)
// {
//     let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
//     response.send(respuesta);
// }

// function getBook(request, response)
// {
//     let respuesta;
//     if (libro != null) 
//         respuesta = libro;
//     else
//         respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}
    
//     response.send(respuesta);   
// }

//cuando se ha hecho un post, se ha añadido un libro, 
//el libro ya es distinto de null, por tanto, devolverá el libro

//si book es diferente a nulo, mando como respuesta
//el contenido de libro, sin embargo, si es = null, 
//le voy a mandar un mensaje diciendo error verdadero
// con mensaje el libro no existe
//para saber que ruta poner en postman ir al fichero de rutas 





//si quiero acceder a un campo concreto del elemento,
//tengo que usar un método especial, ya que get no tiene body 
//Hay dos formas: 
//- 
//-

//F1(ESTA MEJOR)
function getBook(request, response)
{
    let respuesta;
    let campo = request.query.campo;

    if (libro != null && campo) 
        respuesta = libro[campo];
    //queremos el valor de la variable campo
    else if (libro != null)
        respuesta = libro;
    else
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}
    
    response.send(respuesta);   
}

//Si existe el libro y el campo campo, le envío la respuesta del campo
//si no, le envío el libro y si no que np existe 
//campo es el parámetro
//localhost:3001/libro?campo=type&edad=23&apellidos=Garcia (con GET)
//me dará el type del libro si la edad es 23 y los apellidos garcia garcia 

//si quiero que me de más de un campo, habría que crear otro

//F2
//Poniendo otra ruta diferente 

// function getBook2(request, response)
// {
//     let campo = request.params.campo
//  if (libro != null) 
//      response.send({error: false, codigo: 200, data: libro[campo]});    
//  else  
//      response.send({error: true, codigo: 200, mensaje: "El libro no existe"});      
// }

//aquí la información está guardada en params no en query
//en postman ponemos: localhost:3001/libro/type (CON UN GET)
//más parámetros: 



// function getBook(request, response)
// {
//     let name = request.query.name;
//     let respuesta;

//     if (libro != null && (!name || name === libro.nombre))
//         respuesta = {error: false, codigo: 200, data: libro}

//     else 
//         respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}

//     response.send(respuesta);      
// }

// function getBook2(request, response)
// {
//  let name = request.params.name
//  if (libro != null && name === libro.nombre) 
//      response.send({error: false, codigo: 200, data: libro});    
//  else  
//      response.send({error: true, codigo: 200, mensaje: "El libro no existe"});      
// }



function postBook(request, response)
{
    let respuesta; 
    console.log(request.body)
    if (libro === null)
    {
        libro     = {id: request.body.id,
                       title: request.body.title, 
                       type: request.body.type,
                       author: request.body.author,

                    }
        
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Libro creado',data: libro};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'Libro ya existe'};

    response.send(respuesta);
}


//post: crear, lo que tiene que crear es el libro
//se hacen en el body de la llamada
//en el body hayq ue decirle que estructura queremos crear en postman
//body
//row
//json

//nombre de los campos debe concordar entre desarrollador y usuario de la api
//la petición y la request debe concordar 
//lo que sigue a body.X
//solo un response 

//que sea nombre y apellidos depende del objeto que has definido al inicio

function putBook(request, response)
{
    let respuesta
    if (libro !=  null)
    {
        libro.id = request.body.id1;
        libro.title      = request.body.title1;
        libro.type   = request.body.type1;
        libro.author = request.body.author1;
        respuesta           = {error: false, codigo: 200, 
                                mensaje: 'Libro actualizado',data: libro};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El libro no existe',data: libro};

    response.send(respuesta);
};

//si libro es diferente de null, libro.nombre pasará a ser el nombre1 e 
//igual con el apellido 

function deleteBook(request, response)
{
    let respuesta
    if (libro != null)
    {    
        libro     = null;
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'libro borrado',data: libro};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                        mensaje: 'El libro no existe',data: libro};

    response.send(respuesta);
};
//si necesitamos enviar información se haría dentro del body 

module.exports = {getBook, postBook, putBook, deleteBook};
// module.exports = {getStart, getBook, getBook2, postBook, putBook, deleteBook};

