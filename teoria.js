// Los retos se deben hacer en la rama dia3 subir los cambios y hacer el merge con la rama master.

// Crea un servidor web con el módulo express que realice las siguientes tareas:
// 1. Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el
// cliente.

// 2. Debe mostrar por consola la url, método y el user-agent por el que se está haciendo la petición.

// 3. Le retorne al usuario un mensaje del tipo application/json con el status code 200 y un mensaje con
// este contenido: { ok: true, message: ‘Recibido!’ }

// 4. Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode: 200 y un
// mensaje con este contenido: { ok: true, message: ‘Adios!’ }

// 5. Comprobar su funcionamiento con Postman.


//programa(cliente) le manda un mensaje al programa(servidor)
//clientes hacen peticiones HTTP (request) al servidor y estos responderán (response). 
//El módulo http de js permite la comunicación entre cliente y servidor (=lenguaje ). 
//Por tanto, podemos hacer un servidor web empleando ese protocolo 

//Los clientes: navegadores 
//servidor http para hacer las API rest

//El usuario maneja al cliente 


//Postman (herramienta) es un cliente que nos permite porbar nuestro servidor haciendo peticiones http
//navegadores solo get  

//puerto 3000. Nuestro programa servidor está en esta ubicación 


 //objeto request: peticiones (información asociada al cliente)
 //objeto response: respuestas (información con datos de respuesta del servidor )
 //solo una response por cada petición


 //Para mandar request hay que hacerlo desde la local host
 //dirección IP
// 127.0.0.1:3000
//localhost_3000


//favicon: loco del navegador (el mundito)

//si pongo 
//127.0.0.1:3000/pepe

//método es exlcusivo de la request. Estos son: get, put, post y delete 
// - get: solicitar 
// - post: añadir información
// - put: modificar información
// - delete: eliminar 

//Código del estado
//res.statusCode, va ligado a la respuesta 
// 200: todo ok
// 3: redirecciones
// 4: errores 
// response.status(200).send({ ok: true, message: 'Recibido!' });

//body es exclusivo de la request (solo en post, put, update y delete)
//Si quiero añadir, modificar o eliminar algo tengo que decir que es, ese es el body, el cuerpo del msj

//URL exclusiva de request 


//Módulo express 
//Módulo = que el http pero mejor 
//una sola respuesta por método
//express es muy específico, la url debe ser la de js 


//API REST 
//API REST: interfaz de comunicación entre aplicación front y back 
//La API emplea la misma estructura de peticiones del cliente pero para obtener datos no paginas web 

//ruta se le llama endpoint 
//nombre de ruta (url) debe ser un sustantivo que se refiera al recurso que quiero obtener 

//middlewares: hacer genérica la implementación
//se usan para hacer cambios independientemente de la ruta y del método que sea. Se hace en todas las implementaciones  
//se debe finalizar con next 

//En el fichero de ruta tengo marcado lo que ejecuto en controller
//por cada end point tengo un fichero de rutas


//la funcionalidad de la apirest es acceder a datos
//el dato al que queremos acceder es el nombre dle un endpoint que es 
//un sustantivo y aplicamos los métodos que luego en el front, lo pinta bonito









