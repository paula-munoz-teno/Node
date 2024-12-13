//exporto
const { writeAndRead } = require('./writeAndReadObject');
const { readConsole } = require('./readConsole');

// Usar readConsole para obtener datos del usuario
readConsole((user) => {
    // Escribir y leer el objeto en un archivo
    writeAndRead('./miFichero.json', user);
});