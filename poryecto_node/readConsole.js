const readline = require('readline');

function readConsole(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Introduce tu nombre: ', (name) => {
        rl.question('Introduce tu apellido: ', (surname) => {
            rl.question('Introduce tu edad: ', (age) => {
                const user = { name, surname, age: parseInt(age) };
                callback(user);
                rl.close();
            });
        });
    });
}

module.exports = { readConsole };