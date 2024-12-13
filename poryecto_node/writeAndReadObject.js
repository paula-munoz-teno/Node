
// const fs = require('fs');

// function writeAndRead(path, obj) {
//     // Escribir el objeto en el archivo
//     fs.writeFileSync(path, JSON.stringify(obj, null, 2));

//     // Leer el archivo y mostrar su contenido
//     const data = fs.readFileSync(path, 'utf-8');
//     console.log('Contenido del archivo:', data);
// }

// module.exports = { writeAndRead };


// //then/catch

// const fs = require('fs/promises');

// function writeAndRead(path, obj) {
//     fs.writeFile(path, JSON.stringify(obj, null, 2))
//         .then(() => {
//             console.log(`Escrito en ${path}:`, obj);
//             return fs.readFile(path, 'utf-8');
//         })
//         .then((data) => {
//             console.log(`Contenido de ${path}:`, JSON.parse(data));
//         })
//         .catch((error) => {
//             console.error('Error al escribir o leer el archivo:', error);
//         });
// }

// module.exports = { writeAndRead };


//async/await
// const fs = require('fs/promises');

// async function writeAndRead(path, obj) {
//     try {
//         await fs.writeFile(path, JSON.stringify(obj, null, 2));
//         console.log(`Escrito en ${path}:`, obj);
//         const data = await fs.readFile(path, 'utf-8');
//         console.log(`Contenido de ${path}:`, JSON.parse(data));
//     } catch (error) {
//         console.error('Error al escribir o leer el archivo:', error);
//     }
// }

// module.exports = { writeAndRead };