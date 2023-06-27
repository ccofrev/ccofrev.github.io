// Consumir el siguiente endpoint https://rickandmortyapi.com/api/character y realizar 
// lo siguiente:
// 1. Crear cards con la información de Nombre, Especie e Imagen 
// 2. Debe utilizar el paradigma de orientación a objetos
// 3. Debe realizar una clase con la información necesaria (nombre, especie e 
// imagen) y protegerlo con getters.
// 4. Debe realizar un método llamado .show() que debe inyectar en el DOM las cards 
// con la data necesaria. 
// 5. Debe inyectar al menos 20 personajes
// Opcional: usar bootstrap u otro framework de CSS para darle estilos


///// ACTIVIDAD 

// se define la clase personaje
class Personaje {
  constructor(nombre, especie, imagen, estado, genero) {
    this._nombre = nombre;
    this._especie = especie;
    this._imagen = imagen;
    this._estado = estado;
    this._genero = genero;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get especie() {
    return this._especie;
  }

  set especie(nuevaEspecie) {
    this._especie = nuevaEspecie;
  }

  get imagen() {
    return this._imagen;
  }

  set imagen(nuevaImagen) {
    this._imagen = nuevaImagen;
  }

  get estado() {
    return this._estado;
  }

  set estado(nuevoEstado) {
    this._estado = nuevoEstado;
  }

  get genero() {
    return this._genero;
  }

  set genero(nuevoGenero) {
    this._genero = nuevoGenero;
  }

  // Método para devolver la especie en español si es conocida. Si no lo es, se devuelve la original en inglés
  getEspecieEs(){
    const dictEspecies = {
      "Human": "Humano",
      "Mythological Creature": "Criatura mitológica",
      "Humanoid": "Humanoide",
      "Disease": "Enfermedad",
      "unknown": "Especie desconocida"
    }
    if(dictEspecies[this._especie])
      return dictEspecies[this._especie]
    else
      return this._especie
  }

  // Método para devolver el género en español si es conocido. Si no lo es, devuelve el original en inglés.
  getGeneroEs(){
    const dictGeneros = {
      "Male": "Masculino",
      "Female": "Femenino",
      "unknown": "Género Desconocido"
    }
    if(dictGeneros[this._genero])
      return dictGeneros[this._genero]
    else
      return this._genero
  }

  // Método para devolver el estado en español si es conocido. Si no lo es, devuelve el original en inglés.
  getEstadoEs(){
    const dictEstados = {
      "Alive": "Vivo",
      "Dead": "Muerto",
      "unknown": "Se desconoce si está vivo"
    }
    if(dictEstados[this._estado])
      return dictEstados[this._estado]
    else
      return this._estado
  }


  // 'consologuea' el objeto
  print() {
    console.log(this)
  }

  // show toma el contenido de un elemento del dom de id=contenedor y agrega la card del 
  // personaje
  show(contenedor) {
      
    document.getElementById(contenedor).innerHTML +=
    `<div class="card">
      <img src="${this._imagen}" alt="${this._nombre}">
      <div class="card-content">
        <h2>${this._nombre}</h2>
        <ul class="character-info">
          <li class="${this._estado==="Alive"?"Verde":(this._estado=='Dead'?"Rojo":"unknown")}"><i class="fa-solid ${this._estado==='Dead'?"fa-skull-crossbones":(this._estado=='Alive'?"fa-heart-pulse":"fa-circle-question")} fa-xs" title="${this.getEstadoEs()}"></i> ${this.getEspecieEs()}</li>
          <li class="${this._genero=="Male"?"Azul":(this._genero=="Female"?"Rojo":"unknown")}"><i class="fa-solid ${this._genero=="Male"?"fa-mars":(this._genero=="Female"?"fa-venus":"fa-circle-question")} fa-xs"></i> ${this.getGeneroEs()}</li>
        </ul>
      </div>
    </div>`;
  }
}


// función que obtiene información de un personaje y lo carga en una instancia de
// la clase "Personaje", el parámetro es el id asignado a cada personaje por el sitio
// corresponde a un entero positivo.
async function getPersonaje(id) {

  const URL = `https://rickandmortyapi.com/api/character/${id}`
  try {
    // Consulta a la API
    const rawPersonaje = await fetch(URL);
    const PersonajeJson = await rawPersonaje.json();
    
    // se crea objeto personaje y se devuelve como resultado de la función
    const personaje = new Personaje(PersonajeJson.name, PersonajeJson.species, PersonajeJson.image, PersonajeJson.status, PersonajeJson.gender);
    return personaje;
    
  } catch (error) {
    console.error('Error:', error);
  }
}


// se inyectan 20 personajes
for(let i=1; i<=20; i++)
  getPersonaje(i).then(personaje => {
    personaje.show('contenedor')
    personaje.print()
  })