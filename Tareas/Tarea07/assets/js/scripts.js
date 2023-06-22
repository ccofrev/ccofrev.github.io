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
    const rowListaPoke = await fetch(URL);
    const rowLPJson = await rowListaPoke.json();
    const dataListaPoke = rowLPJson.results;
    
    // Segunda consulta utilizando los datos de la primera consulta
    let dataPoke = []
    dataListaPoke.forEach(async poke => {
      dataPoke = await getDataPoke(poke)
      // console.log(dataPoke)
      let t =  await getAttributePoke('types', 'type', dataPoke)
      let tipos = t.map(tipo => dicTipos[tipo.name])
      document.getElementById("contenedor").innerHTML =  document.getElementById("contenedor").innerHTML + 
                                    `<div class="card">
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

async function getDataPoke(poke){
  let rowPoke = await fetch(poke.url)
  let dataPoke = await rowPoke.json()
  return dataPoke;
}

async function getAttributePoke(plural, singular, dPoke){
  let features = []
  dPoke[plural].forEach(async element =>{
    features.push(element[singular])
  })
  return features
}

getListPoke()