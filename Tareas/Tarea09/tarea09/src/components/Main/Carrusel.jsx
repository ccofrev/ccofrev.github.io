import React, { useState } from 'react';


const Carrusel = ({ images }) => {

    const [slideIndex, setSlideIndex] = useState(0);
    
    return (
        <>
            <div className="carousel">
                <div id="carouselExampleCaptions" className="carousel slide">

                    {/* <div className="carousel-indicators">
                        {images.map((image, index) => (
                            <button type="button" data-bs-target="#carouselExampleCaptions" key={index} data-bs-slide-to={index} className={index===0?'active':'none'} aria-current={index===0} aria-label={`Slide ${index}`}></button>
                        ))}
                    </div> */}

                    {/* <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div className="carousel-item" key={index}>
                                <img className={`d-block w-100${index===0?' active':''}`} src={image.src} alt={image.alt}/>
                                <img className={`${index===0?' active':''}`} src={image.src} alt={image.alt}/>
                                <div className={`carousel-caption d-none d-md-block`}>
                                    <h5>{image.titulo}</h5>
                                    <p>{image.subtitulo}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://ccofrev.github.io/Tareas/Tarea03/assets/img/g1.png" class="d-block w-100" alt="gato"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Gato triste</h5>
                            <p>Este gato parece estar triste.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://ccofrev.github.io/Tareas/Tarea03/assets/img/g2.png" class="d-block w-100" alt="gato"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Gato en el veterinario</h5>
                            <p>Es importante mantener a los gatos con sus vacunas al día.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://ccofrev.github.io/Tareas/Tarea03/assets/img/g3.png" class="d-block w-100" alt="gato"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Gato descansando</h5>
                            <p>Los gatos descansan gran parte del día.</p>
                        </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>
        </>
    )
};

export default Carrusel;
