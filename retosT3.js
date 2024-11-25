//R1
// Los retos se deben hacer en la rama dia3 subir los cambios y hacer el merge con la rama master.

// Crea un servidor web con el módulo express que realice las siguientes tareas:
// 1. Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el
// cliente.OK

// 2. Debe mostrar por consola la url, método y el user-agent por el que se está haciendo la petición.OK

// 3. Le retorne al usuario un mensaje del tipo application/json con el status code 200
// y un mensaje coneste contenido: { ok: true, message: ‘Recibido!’ }

// 4. Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode: 200 y un
// mensaje con este contenido: { ok: true, message: ‘Adios!’ }

// 5. Comprobar su funcionamiento con Postman.


//Como usar middleware
const express = require("express")
const app = express()

app.use("/", function (request, response, next)
{
    console.log("Petición recibida del cliente")
    next();
});

app.use("/ruta", function (request, response, next)
{
    console.log("Petición recibida del cliente de /ruta")
    next();
});


app.listen(4000)






// const express = require("express")
// const app = express()

// app.get("/", function (request, response)
// {
//     console.log("Petición recibida del cliente")
//     console.log(request.url)
//     console.log(request.method)
//     //método
//     console.log(request.headers["user-agent"])
//     //navegador
//     //console.log(request)
//     response.status(200).send({ ok: true, message: 'Recibido!' });
// });


// app.get("/bye", function (request, response)
// {
//     console.log("Petición recibida del cliente")
//     console.log(request.url)
//     console.log(request.method)
//     //método
//     console.log(request.headers["user-agent"])
//     //navegador
//     //console.log(request)
//     response.status(200).send( {ok: true, message: 'Adios!'} );
// });

// app.listen(4000)


