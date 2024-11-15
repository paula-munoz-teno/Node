//   //R1 redactar el R2T1 con promesas tanto then/catch como async/await


// //CON CALLBAKCS
 
// // 1 Crea un objeto con las siguientes propiedades: name, surname, age.

// // 2 Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// // objeto e imprimelo por consola.

// // 3Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// // ejecutar el archivo de nuevo.


// //0. IMPORTO MÉTODOS REQUERIDOS
// const fs = require('fs');



// // // 1. Crear el objeto
// const person = {
//     name: "Paula",
//     surname: "Muñoz Teno",
//     age: 22
// };


// // 2. Guardar el objeto en un archivo JSON (writeFile)
// //Esto me permote guardar el objeto en el documento person.json(pero no lo veo, para ello necesito el read)
// fs.writeFile('person.json', JSON.stringify(person), (err) => {
//     if (err) {
//         console.error('Error al guardar el archivo:', err);
//         return;
//     }
//     console.log('Archivo guardado correctamente.');

// //person,json: path to file (donde se guarda)
// //JSON.stringify(person): qué se guarda 

//     // 3. Leer el archivo JSON (readfile)
//     fs.readFile('person.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error al leer el archivo:', err);
//             return;
//         }
//         else{console.log(data)}

//     });
// });



// // CON PROMESA THEN/CATCH

// const fs = require("fs/promises"); 

// //ponemos writefile con el nombre dle fichero y el objeto creado 

// fs.writeFile("person.json",
//      JSON.stringify({name:"Paula", surename: "Muñoz Teno", age: 22}))
// //en el then no se pone nada porque el único param que había es el error y
// //el error se obvia va por catch
// .then(()=>{
//     console.log("Se ha creado el fichero");
//     return fs.readFile("person.json", "utf8");

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



// // CON PROMESA ASYNC/AWAIT

// const fs = require("fs/promises");

// writeAndRead = async () => {
//     try{
//     await fs.writeFile("person.json", JSON.stringify({name:"Paula", surename: "Muñoz Teno", age: 22}))
//     console.log("El fichero se ha leido correctamente");
//     const dato = await fs.readFile("person.json", "utf8");
//     console.log("el fichero se ha leido correctamente");
//     console.log(dato);
//     }

//    //Aync: genera la función asíncrona
//    //await: delante de cada método asíncrono se pone la palabra await 
// catch(error){
//     console.log(error)
// }    
// }


//Hay que incovar a la función para que tenga lugar

// writeAndRead();




//R3 
// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.

// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.

// • Este ejercicio debe hacerse en una única ejecución de JavaScript


// // me aseguro que puedo emplear em método readline 
// const readline = require('readline');
// const fs = require('fs');


// //Crear la interfaz de readline
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// //Solicito valores de los atributos del objeto mediante el método question del módulo redline 
//         rl.question('What is your name? ', (name) => {

//             rl.question('What is your surename?', (surename) => {

//                 rl.question('What is your age?', (age) => {
//                     //creo objeto
//                     const persona = {
//                         name: name,
//                         surename:surename,
//                         age: age, 
//                     };

//     // dsos param la pregunta y la callback 

//             //Guardo el objeto en el archivo JSON
//                         fs.writeFile('person.json', JSON.stringify(persona), (err) => {
//                         if (err) {
//                             console.error('Error al guardar el archivo:', err);
//                             return;
//                         }
//                         console.log('Archivo guardado correctamente.');
                   
//                         fs.readFile('person.json', 'utf8', (err, data) => {
//                                     if (err) {
//                                         console.error('Error al leer el archivo:', err);
//                                         return;
//                                     }
//                                     else{console.log(data)}
                        
//                             // Cerrar la interfaz readline
//                             rl.close();
//                         });
                       
//                     });
                  
//                 } );   
          
//             } );
      
//         });


// CON PROMESA THEN/CATCH
const fs = require("fs/promises"); 

const readlinePromises = require('readline/promises');
const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

let person ={};

rl.question("What is your name?")
.then((name)=>{
    person.name = name 
return rl.question("What is your surname?")
})
.then((surname)=>{
    person.surame=surname
return rl.question("What is your age?")
})
.then((age) =>{
    person.age =age

rl.close();
return fs.writeFile("person.json",
    JSON.stringify({person}))
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


})


// // //CON PROMESA ASYNC/AWAIT

// const fs = require("fs/promises");

// const readlinePromises = require('readline/promises');
// const rl = readlinePromises.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// }); 

// let person = {}

// readlineWritAndRead = async () => {
//     try{
//     person.name = await rl.question("What is your name?")
//     //el question tiene un dato que se guarda en esa variable 
//     person.surname = await rl.question("What is your surname?")
//     person.age = await rl.question("What is your age?")
//     await fs.writeFile("person.json", JSON.stringify({person}))
//     console.log("Se ha creado el fichero");
//     const dato = await fs.readFile("person.json", "utf8");
//     console.log("el fichero se ha leido correctamente");
//     console.log(dato);
//     }

//    //Aync: genera la función asíncrona
//    //await: delante de cada método asíncrono se pone la palabra await 
// catch(error){
//     console.log(error)
// } 

// }
    
// readlineWritAndRead();








