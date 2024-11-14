


//El código se está yendo hacia la derecha
// (código spagueti) aspecto que se querría evitar, 
// por eso surgen las promesas

//CON PROMESAS 
//Hay que hacer lo mismo pero, importando la versión de promesas
//Esto nos lo indican o, si no, buscamos  en google 
//EJ: writefile con promesas 

// const fs = require("fs/promises"); 

// //ponemos writefile con el nombre dle fichero y el objeto creado 

// fs.writeFile("ejemplo.json",
//      JSON.stringify({nombre:"Pepe", apellido: "Garcia"}))
// //en el then no se pone nada porque el único param que había es el error y
// //el error se obvia va por catch
// .then(()=>{
//     console.log("Se ha creado el fichero");
//     return fs.readFile("ejemplo.json", "utf8");

// })
// .then((dato =>{
//     console.log("El fichero se ha leido correctamente");
//     console.log(dato);
// }
// ))
// //este then sabe que viene de la función de encima 

// .catch((error)=>{
//     console.log("Ha habido un error");
//     console.log(error);
//     //esto te indica que error ha pasado
// })

//Solo hay un catch que recoge TODOS los errores de los then que están por encima 

//ya no hace falta callback, ahora tenemos dos métodos: .then y .catch
//Si la función funciona se va a ir por la parte del then 
     //Una llamada asíncrona debe de estar al final y con el return delante
     //para captar el resultado de la llamda
//Si no, por la parte del catch

//Cuando hay un error en un código se para la ejecución. 
//Al solventar el primero, saltará el segundo


//ASYNC Y AWAIT

const fs = require("fs/promises");

writeAndRead = async () => {
    try{
    await fs.writeFile("ejemplo.json", JSON.stringify({nombre:"Pepe", apellido: "Garcia"}))
    console.log("El fichero se ha leido correctamente");
    const dato = await fs.readFile("ejemplo.json", "utf8");
    console.log("el fichero se ha leido correctamente");
    console.log(dato);
    }

   //Aync: genera la función asíncrona
   //await: delante de cada método asíncrono se pone la palabra await 
catch(error){
    console.log(error)
}    
}


//Hay que incovar a la función para que tenga lugar

writeAndRead();


//AWAIT EXPRESSION SOLO SE PERMITE EN FUNCIONES ASÍNCRONAS 
//Entonces, al escribir de manera tradicional hay que poner async 

//El error dentro de async y away se hace dentro de lo que se denomina excepciones
//Se pone en bloque try(líneas candidatas a que se producca un error)


//VENTAJAS TRY-CATCH VS THEN CATCH
//En then y catch es más difícil diferencias errores si hay más posibles errores 

//Capturar el error permite hacer algo para que no pete el programa + dar información más fidedigna 
//al usuario 

//ASYNC AWAY nos permite ahorrarnos las callbacks 
//SOLO HACE FALTA UN CATCH POR PROMESA pero el del try se puede encapsular para saber qué está ocurriendo



// R1


const fs = require("fs/promises"); 

//ponemos writefile con el nombre dle fichero y el objeto creado 

fs.writeFile("person.json",
     JSON.stringify({name:"Paula", surename: "Muñoz Teno", age: 22}))
//en el then no se pone nada porque el único param que había es el error y
//el error se obvia va por catch
.then(()=>{
    console.log("Se ha creado el fichero");
    return fs.readFile("person.json", "utf8");

})
.then((dato =>{
    console.log("El fichero se ha leido correctamente");
    console.log(dato);
}
))
//este then sabe que viene de la función de encima 

.catch((error)=>{
    console.log("Ha habido un error");
    console.log(error);
    //esto te indica que error ha pasado
})