  //R1 redactar el R2T1 con promesas tanto then/catch como async/await


//CON CALLBAKCS
const person = {
    name: "Paula",
    surname: "Muñoz Teno",
    age: 22
};


const fs = require;  
// 2. Guardar el objeto en un archivo JSON (writeFile)
//Esto me permote guardar el objeto en el documento person.json(pero no lo veo, para ello necesito el read)
fs.writeFile('person.json', JSON.stringify(person), (err) => {
    if (err) {
        console.error('Error al guardar el archivo:', err);
        return;
    }
    console.log('Archivo guardado correctamente.');

//person,json: path to file (donde se guarda)
//JSON.stringify(person): qué se guarda 

    // 3. Leer el archivo JSON (readfile)
    fs.readFile('person.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        else{console.log(data)}

    });
});


// CON PROMESA THEN/CATCH

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



// //R3 
// // • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// // módulo readline de node y solicita los valores del name, surname y age a través de la consola.

// // • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// // readline.

// // • Este ejercicio debe hacerse en una única ejecución de JavaScript


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


