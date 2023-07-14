import React, { Component } from 'react'

export class Pilares extends Component {
  render() {
    return (
        <>
            <section className="columns">
            <div className="column">
                <h2>Conducta</h2>
                <p>Los gatos tienen una personalidad única y pueden ser muy territoriales. A menudo disfrutan de estar solos y pueden ser muy independientes, pero también pueden ser muy afectuosos y leales con sus dueños.</p>
            </div>
            <div className="column">
                <h2>Cuidado</h2>
                <p>Los gatos necesitan cuidados regulares, como cepillado y limpieza de la caja de arena. También es importante llevarlos al veterinario para chequeos regulares y para mantener al día sus vacunas.</p>
            </div>
            <div className="column">
                <h2>Alimentación</h2>
                <p>Los gatos son carnívoros y necesitan una dieta rica en proteínas. Los alimentos comerciales para gatos son una buena opción, pero también se pueden alimentar con comida casera, siempre y cuando se asegure una dieta equilibrada.</p>
            </div>
            <div className="column">
                <h2>Salud</h2>
                <p>Los gatos pueden desarrollar problemas de salud, como infecciones urinarias, problemas dentales y enfermedades respiratorias. Es importante estar atentos a cualquier cambio en su comportamiento o apetito y llevarlos al veterinario si es necesario.</p>
            </div>
            </section>
        </>
    )
  }
}

export default Pilares