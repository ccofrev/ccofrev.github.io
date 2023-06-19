// 1. Consumir el siguiente endpoint https://pokeapi.co/api/v2/pokemon/ y mostrar en 
// el front lo siguiente:
// a) Cards que contengan los 20 primeros pokemones (imagen y nombre del pokemon)
// b) Utilizar Async / Await para trabajar las promesas de forma asíncrona
// c) Usar Axios o Fetch para realizar la solicitud al endpoint mencionado
// d) Ocupar Try / Catch para el manejo de errores


///// ACTIVIDAD 

// const listaPokemones = async (desde=0, hasta=20) => {
//   try{
//       // const URL = "https://pokeapi.co/api/v2/pokemon/"
//       const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${desde}&limit=${hasta-desde}`
//       const dataRow = await fetch(URL)
//       const data = await dataRow.json()
//       return data
//   }catch(error){
//       console.log("hubo error", error)
//   }finally{
//       console.log("esto siempre se ejecuta")
//   }
// }

// const getPokesInfo = async (dataresults) => {
//   const salida = await dataresults.map(async poke => {
//     const dataRowPoke = await fetch(poke.url)
//     const dataPoke = await dataRowPoke.json()
//     return await dataPoke.name
//     });
// }

// const lista = listaPokemones()
// console.log(lista)
// listaFull.forEach(element => {
//   console.log(element.name)
// });


async function getListPoke() {
  const URL = 'https://pokeapi.co/api/v2/pokemon/'
  try {
    // Primera consulta a la API
    const rowListaPoke = await fetch(URL);
    const rowLPJson = await rowListaPoke.json();
    const dataListaPoke = rowLPJson.results;
    
    // Segunda consulta utilizando los datos de la primera consulta
    //salida = []
    // console.log(await getDataPoke(dataListaPoke[0]))
    let htmlContent = ''
    let dataPoke = []
    dataListaPoke.forEach(async poke => {
      //salida.push(getDataPoke(poke))
      dataPoke = await getDataPoke(poke)
      console.log(dataPoke)
      document.getElementById("contenedor").innerHTML =  document.getElementById("contenedor").innerHTML + `<div class="card">
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