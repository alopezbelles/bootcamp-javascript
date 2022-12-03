//EJERCICIO 1
//Crea una función que reciba un número y devuelva el doble de ese número.

// function numero(a){
//     return a*2
// };

// console.log(numero(5))
// console.log(numero(4))


//lo mismo en f.flecha
// numeroArrow = (a) => a*2;

// console.log(numeroArrow(5));

//---------------------------------------------------------------

//EJERCICIO 2
//Crea una función que reciba un número y devuelva el cuadrado de ese número.

// function cuadrado(num){
//     return Math.pow(num,2)
// };

// console.log(cuadrado(2))
// console.log(cuadrado(8))

//lo mismo en f.flecha

// cuadradoArrow = (num) => Math.pow(num,2);

// console.log(cuadradoArrow(2));

//---------------------------------------------------------------

//EJERCICIO 3
// Crea una función que calcule el área de un rectángulo y la muestre por consola.

// function area(base,altura) {
//     return base*altura
// };

// let resultado = area(2,5);
// console.log(resultado)

//lo mismo en flecha 

// areaArrow = (base,altura) => base*altura;

// console.log(areaArrow(4,8));

//---------------------------------------------------------------

//EJERCICIO 4
//Crea una función que reciba un número y muestre por consola si es par o impar.

// function parImpar(num){
//     if (num % 2 == 0) {
//         return "par";
//     }else{
//         return "impar";
//     }
// };

// console.log(parImpar(5))
// console.log(parImpar(4))
// console.log(parImpar(6))
// console.log(parImpar(9))

//lo mismo en flecha

// parImparArrow = (num) => {if (num % 2 == 0) { return "par"; }else{return "impar";}};

// console.log(parImparArrow(5))
//-----------------------------------------------------------------

//EJERCICIO 5
//Crea una función que reciba un array de personas y 
//devuelva un array con las personas mayores de edad

// const personas = [
//     { nombre: 'Juan', edad: 18 },
//     { nombre: 'María', edad: 16 },
//     { nombre: 'Pedro', edad: 20 },
//     { nombre: 'Pablo', edad: 15 },
//     { nombre: 'Laura', edad: 19 },
// ];

// function mayoresEdad(personas) {

//     let mayores = [];

//     for (let i = 0; i < personas.length; i++) {
//         if (personas[i].edad >= 18) {
//             mayores.push(personas[i])
//         }
//     }
//     return mayores;
// }

// console.log(mayoresEdad(personas));


///////CUAL ES LA PERSONA MÁS JOVEN DEL ARRAY?////////////


// function masJoven(personas) {

//     let masJoven = personas[0]
//     for (let i = 1; i < personas.length; i++) {
//         if (personas[i].edad < masJoven.edad) {
//             masJoven = personas[i];
//         };
//     }
//     return masJoven;
// }

// console.log(masJoven(personas));


/////CUAL ES LA PERSONA MÁS MAYOR DEL ARRAY?//////////////

// function masMayor(personas){
//     let masMayor = personas[0]
//     for (let i = 1; i < personas.length; i++) {
//         if (personas[i].edad > masMayor.edad) {
//             masMayor = personas[i]
//         }  

//     }
//     return masMayor;
// }

// console.log(masMayor(personas));



//-----------------------------------------------------------------

//EJERCICIO 6

// Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.

// let pockemon = [
//     {
//         nombre: 'pickachu',
//         tipo: "electrico"
//     },

//     {
//         nombre: 'squertle',
//         tipo: "agua"
//     },

//     {
//         nombre: 'charmander',
//         tipo: "fuego"
//     }, 

//     {
//         nombre: 'charizard',
//         tipo: "fuego"
    
//     }

// ];

// function nombrePokemon(pockemon){

//     for (let i = 0; i < pockemon.length; i++) {
//         console.log(pockemon[i].nombre);

// }}

// nombrePokemon(pockemon);


// También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.

// function pockemonFuego(pockemon){

//     for (let i = 0; i < pockemon.length; i++) {
//         if(pockemon[i].tipo === "fuego"){
//             console.log(pockemon[i].nombre);
//         }
//     }
// }

// pockemonFuego(pockemon);

