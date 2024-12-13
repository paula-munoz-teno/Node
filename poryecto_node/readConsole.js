// const readline = require('readline');

// function readConsole(callback) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question('Introduce tu nombre: ', (name) => {
//         rl.question('Introduce tu apellido: ', (surname) => {
//             rl.question('Introduce tu edad: ', (age) => {
//                 const user = { name, surname, age: parseInt(age) };
//                 callback(user);
//                 rl.close();
//             });
//         });
//     });
// }

// module.exports = { readConsole };



//tehn/catch
// readConsole.js
// readConsole.js
// const readline = require('readline/promises');
// const { stdin: input, stdout: output } = require('process');

// function readConsole(callback) {
//     const rl = readline.createInterface({ input, output });

//     rl.question('¿Cuál es tu nombre? ')
//         .then((name) => {
//             return rl.question('¿Cuál es tu apellido? ').then((surname) => {
//                 return { name, surname }; // Retornar un objeto con name y surname
//             });
//         })
//         .then(({ name, surname }) => {
//             return rl.question('¿Cuál es tu edad? ').then((age) => {
//                 const user = { name, surname, age: parseInt(age) };
//                 callback(user);
//                 rl.close();
//             });
//         })
//         .catch((error) => {
//             console.error('Error al leer la consola:', error);
//             rl.close(); 
//         });
// }

// module.exports = { readConsole };



// // //async/await
// const readline = require('readline/promises');
// const { stdin: input, stdout: output } = require('process');

// async function readConsole(callback) {
//     const rl = readline.createInterface({ input, output });

//     try {
//         const name = await rl.question('¿Cuál es tu nombre? ');
//         const surname = await rl.question('¿Cuál es tu apellido? ');
//         const age = await rl.question('¿Cuál es tu edad? ');
//         const user = { name, surname, age: parseInt(age) };
//         callback(user);
//     } catch (error) {
//         console.error('Error al leer la consola:', error);
//     } finally {
//         rl.close();
//     }
// }

// module.exports = { readConsole };