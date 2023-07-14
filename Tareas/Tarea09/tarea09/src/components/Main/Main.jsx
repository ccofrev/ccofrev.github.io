import React from 'react'
import Carrusel from './Carrusel'
import Titular from './Titular'
import Pilares from './Pilares'



function Main() {
  const images = [
    { src: 'https://ccofrev.github.io/Tareas/Tarea03/assets/img/g1.png', alt: 'Imagen 1', titulo: 'Gato triste', subtitulo: 'Este gato parece estar triste' },
    { src: 'https://ccofrev.github.io/Tareas/Tarea03/assets/img/g2.png', alt: 'Imagen 2', titulo: 'Gato en el veterinario', subtitulo: 'Es importante mantener a los gatos con sus vacunas al día' },
    { src: 'https://ccofrev.github.io/Tareas/Tarea03/assets/img/g3.png', alt: 'Imagen 3', titulo: 'Gato descansando', subtitulo: 'Los gatos descansan gran parte del día' }
  ];
  return (
    <>
        <Carrusel images={images} />
        <Titular/>
        <Pilares/>
    </>
  )
}

export default Main