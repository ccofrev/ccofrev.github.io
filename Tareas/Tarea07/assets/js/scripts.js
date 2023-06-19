// 1. Consumir el siguiente endpoint https://pokeapi.co/api/v2/pokemon/ y mostrar en 
// el front lo siguiente:
// a) Cards que contengan los 20 primeros pokemones (imagen y nombre del pokemon)
// b) Utilizar Async / Await para trabajar las promesas de forma asíncrona
// c) Usar Axios o Fetch para realizar la solicitud al endpoint mencionado
// d) Ocupar Try / Catch para el manejo de errores


///// ACTIVIDAD 

async function getListPoke() {
  const URL = 'https://pokeapi.co/api/v2/pokemon/'
  try {
    // Primera consulta a la API
    const rowListaPoke = await fetch(URL);
    const rowLPJson = await rowListaPoke.json();
    const dataListaPoke = rowLPJson.results;
    
    // Segunda consulta utilizando los datos de la primera consulta
    let htmlContent = ''
    let dataPoke = []
    dataListaPoke.forEach(async poke => {
      dataPoke = await getDataPoke(poke)
      console.log(dataPoke)
      document.getElementById("contenedor").innerHTML =  document.getElementById("contenedor").innerHTML + 
                                    `<div class="card">
                                      <img src=${dataPoke.sprites.other.dream_world.front_default} alt=${dataPoke.name}>
                                      <h3>${dataPoke.name.toUpperCase()}</h3>
                                    </div>`;
      });

  } catch (error) {
    console.error('Error:', error);
  }
}

async function getDataPoke(poke){
  let rowPoke = await fetch(poke.url)
  let dataPoke = await rowPoke.json()
  return dataPoke;
}

getListPoke()