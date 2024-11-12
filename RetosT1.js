
//R1 
//FUDAMENTACIÓN: https://developer.mozilla.org/es/docs/Web/API/Window/setTimeout

// • Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
// • Pasados tres segundos, se debe imprimir “Mensaje 2”.
// • Y después de que se imprima este mensaje, que se imprima “Mensaje 3”


// console.log("Mensaje 1");

//   setTimeout(() => {
//     console.log("Mensaje 2");
//     console.log("Mensaje 3")
//   }, 3000);
 

  // Salida:
  
  // Mensaje1 
  // Mensaje 2 (tras 3 segundos)
  // Mensaje 3(después del 2)
  



  //R2 
//FUNDAMENTACIÓN:   
// https://www.geeksforgeeks.org/node-js-fs-writefile-method/
// https://www.geeksforgeeks.org/node-js-fs-readfile-method/

  
// 1 Crea un objeto con las siguientes propiedades: name, surname, age.

// 2 Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.

// 3Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.


//0. IMPORTO MÉTODOS REQUERIDOS
// const fs = require('fs');



// // 1. Crear el objeto
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



//R3 
// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.

// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.

// • Este ejercicio debe hacerse en una única ejecución de JavaScript


// me aseguro que puedo emplear em método readline 
const readline = require('readline');
const fs = require('fs');


//Crear la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Solicito valores de los atributos del objeto mediante el método question del módulo redline 
        rl.question('What is your name? ', (name) => {

            rl.question('What is your surename?', (surename) => {

                rl.question('What is your age?', (age) => {
                    //creo objeto
                    const persona = {
                        name: name,
                        surename:surename,
                        age: age, 
                    };

            //Guardo el objeto en el archivo JSON
                        fs.writeFile('person.json', JSON.stringify(persona), (err) => {
                        if (err) {
                            console.error('Error al guardar el archivo:', err);
                            return;
                        }
                        console.log('Archivo guardado correctamente.');
                   
                        fs.readFile('person.json', 'utf8', (err, data) => {
                                    if (err) {
                                        console.error('Error al leer el archivo:', err);
                                        return;
                                    }
                                    else{console.log(data)}
                        
                            // Cerrar la interfaz readline
                            rl.close();
                        });
                       
                    });
                  
                } );   
          
            } );
      
        });


