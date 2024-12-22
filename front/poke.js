// https://pokeapi.co/api/v2/pokemon/nombre del pokemon


//Clientes que conocemos hasta ahora:
//cliente angular httpclientangular
//navegadores
//Bootsrap
//XHTMLttpRequest
//fetch

// class Pokemon
// {
//     constructor(nombre, imagen, habilidades)
//     {
//         this.nombre = nombre;
//         this.imagen = imagen;
//         this.habilidades=habilidades;
//     }


// }


class Pokemon {
    constructor(nombre, imagen, habilidades) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.habilidades = habilidades;
    }
}

async function buscarPokemon() {
    const nombrePokemon = document.getElementById("name2").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }
        const data = await response.json();

        const nombre = data.name;
        const imagen = data.sprites.front_default;
        const habilidades = data.abilities.map(ability => ability.ability.name).join(", ");

        const pokemon = new Pokemon(nombre, imagen, habilidades);
        mostrarPokemon(pokemon);
    } catch (error) {
        console.error(error);
        mostrarError(error.message);
    }
}

function mostrarPokemon(pokemon) {
    const pokemonInfo = document.getElementById("pokemonInfo");
    pokemonInfo.innerHTML = `
        <h4>${pokemon.nombre}</h4>
        <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
        <p><strong>Habilidades:</strong> ${pokemon.habilidades}</p>
    `;
}

function mostrarError(mensaje) {
    const pokemonInfo = document.getElementById("pokemonInfo");
    pokemonInfo.innerHTML = `<p style="color: red;">${mensaje}</p>`;
}
// document.getElementById("pokemonForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evitar el envío del formulario
//     const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); // Obtener el nombre del Pokémon
//     buscarPokemon(pokemonName); // Llamar a la función para buscar el Pokémon
// });

// async function buscarPokemon(nombre) {
//     let url = `https://pokeapi.co/api/v2/pokemon/${nombre}`; // URL de la API

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Pokémon no encontrado");
//         }
//         const data = await response.json();
//         mostrarPokemon(data); // Mostrar la información del Pokémon
//     } catch (error) {
//         alert(error.message); // Mostrar error si no se encuentra el Pokémon
//     }
// }

// function mostrarPokemon(data) {
//     const nombre = data.name.charAt(0).toUpperCase() + data.name.slice(1); // Capitalizar el nombre
//     const imagen = data.sprites.front_default; // Obtener la imagen
//     const habilidades = data.abilities.map(ability => ability.ability.name); // Obtener habilidades

//     // Crear la tabla para mostrar la información
//     const tabla = `
//         <h3>${nombre}</h3>
//         <img src="${imagen}" alt="${nombre}">
//         <table class="table">
//             <thead>
//                 <tr>
//                     <th>Habilidades</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 ${habilidades.map(habilidad => `<tr><td>${habilidad}</td></tr>`).join('')}
//             </tbody>
//         </table>
//     `;

//     // Insertar la tabla en el DOM
//     document.getElementById("pokemonInfo").innerHTML = tabla;
// }