// 1. Consumir el siguiente endpoint https://pokeapi.co/api/v2/pokemon/ y mostrar en 
// el front lo siguiente:
// a) Cards que contengan los 20 primeros pokemones (imagen y nombre del pokemon)
// b) Utilizar Async / Await para trabajar las promesas de forma asíncrona
// c) Usar Axios o Fetch para realizar la solicitud al endpoint mencionado
// d) Ocupar Try / Catch para el manejo de errores


///// ACTIVIDAD 

async function getListPoke(desde=0, hasta=20) {
  // const URL = 'https://pokeapi.co/api/v2/pokemon/'
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${desde}&limit=${hasta-desde}`

  // se define un diccionario para traducir los tipos
  // la api ofrece estos valores en diferentes idiomas pero se consideró más complejo 
  // ir a buscar las traducciones que definir el diccionario.
  const dicTipos = {
    'normal':'normal',
    'fire':'fuego',
    'grass':'planta',
    'bug': 'bicho', 
    'dragon':'dragón', 
    'electric':'eléctrico', 
    'fairy':'hada', 
    'fighting':'lucha', 
    'flying':'volador', 
    'ghost':'fantasma', 
    'ground':'tierra', 
    'ice':'hielo', 
    'poison':'veneno', 
    'psychic':'psíquico', 
    'rock':'roca', 
    'steel':'acero', 
    'water':'agua',
    'dark':'siniestro'
  }

  try {
    // Primera consulta a la API
    const rawListaPoke = await fetch(URL);
    const rawLPJson = await rawListaPoke.json();
    const dataListaPoke = rawLPJson.results;
    
    // Segunda consulta utilizando los datos de la primera consulta y funciones auxiliares
    let dataPoke = []
    dataListaPoke.forEach(async poke => {
      dataPoke = await getDataPoke(poke)
      // console.log(dataPoke)
      let t =  await getAttributePoke('types', 'type', dataPoke)
      let tipos = t.map(tipo => dicTipos[tipo.name])

      // se inyectan las cards para cada pokemon, directo en el elemento "contenedor"
      document.getElementById("contenedor").innerHTML +=  `<div class="card">
                                                            <img src=${dataPoke.sprites.other.dream_world.front_default} alt=${dataPoke.name}>
                                                            <h3>${dataPoke.name.toUpperCase()}</h3>
                                                            <ul>
                                                              <li><strong>Experiencia base:</strong> ${dataPoke.base_experience}</li>
                                                              <li><strong>Estatura:</strong> ${dataPoke.height}</li>
                                                              <li><strong>Peso:</strong> ${dataPoke.weight}</li>
                                                              <li><strong>Tipo${tipos.length>1?'s':''}:</strong> ${tipos.join(', ')}</li>
                                                            </ul>
                                                          </div>`;
      });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Funcion auxiliar para obtener datos de pokemon individual desde lista general
// en la lista se comparte la url para obtener los datos del pokemon individual
async function getDataPoke(poke){
  let rawPoke = await fetch(poke.url)
  let dataPoke = await rawPoke.json()
  return dataPoke;
}

// Función auxiliar para obtener características, como el tipo 
// de pokemon que puede ser múltiple. Por ejemplo el tipo (type)
// se usa plural='types' singular='type' y dPoke corresponde a la data
// del pokemon en formato json.
async function getAttributePoke(plural, singular, dPoke){
  let features = []
  dPoke[plural].forEach(async element =>{
    features.push(element[singular])
  })
  return features
}

getListPoke()