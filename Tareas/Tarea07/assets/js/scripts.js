// 1. Mostrar en consola la secuencia de Fibonacci: 
// a. Entre los números 0 y 1000.
// b. Números pares entre 0 y 1000.
// c. Números impares entre 0 y 1000.
// Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase
// 2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas. 
// 3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo 
// fuego. 


///// ACTIVIDAD 1 

function fibonacci(tope) {
  var salida = [0, 1];
  
  while (salida[salida.length - 1] + salida[salida.length - 2] <= tope)
    salida.push(salida[salida.length - 1] + salida[salida.length - 2])
  return salida
}


fibonacci1000 = fibonacci(1000)
fibonacci1000pares = fibonacci1000.filter((val)=>val%2===0)
fibonacci1000impares = fibonacci1000.filter((val)=>val%2===1)

// 1a
console.log("Fibonacci hasta 1000", fibonacci1000)
document.getElementById("parte1a").innerHTML = fibonacci1000.join(', ')

// 1b
console.log("Fibonacci hasta 1000 solo pares", fibonacci1000pares)
document.getElementById("parte1b").innerHTML = fibonacci1000pares.join(', ')
// 1c
console.log("Fibonacci hasta 1000 solo impares", fibonacci1000impares)
document.getElementById("parte1c").innerHTML = fibonacci1000impares.join(', ')


//// ACTIVIDAD 2
let pokemon1 =
[
 'Pikachu',
 'Charmander',
 'Bulbasaur',
 'Squirtle'
]

arrPokeMayus = pokemon1.map((poke=>poke.toUpperCase()))
console.log(arrPokeMayus)
document.getElementById("parte2").innerHTML = arrPokeMayus.join(', ')


/// ACTIVIDAD 3
let pokemon2 = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]
   
   arrPokeFuego = pokemon2.filter(poke=>poke.tipo==='Fuego').map((pok=>pok.nombre)) 
   console.log(arrPokeFuego)
   document.getElementById("parte3").innerHTML = arrPokeFuego.join(', ')
   