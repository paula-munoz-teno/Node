
const fs = require('fs');

function writeAndRead(path, obj) {
    // Escribir el objeto en el archivo
    fs.writeFileSync(path, JSON.stringify(obj, null, 2));

    // Leer el archivo y mostrar su contenido
    const data = fs.readFileSync(path, 'utf-8');
    console.log('Contenido del archivo:', data);
}

module.exports = { writeAndRead };