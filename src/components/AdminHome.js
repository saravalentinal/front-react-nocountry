import React from 'react'

export default function AdminHome() {

  return (
    <>

            <h1 class="welcome">Bienvenida, Mariana Rojas</h1>

            <section class="main-section-home">

                    <article class="article-patients">

                            <div class="img-text">
                                    <figure>
                                            <img src="./img/patient.jpg" alt="Imágen de un paciente" class="imagen"></img>
                                            <h2 class="h2-patients">PACIENTES</h2>
                                    </figure>

                            </div>
                            
                            <div class="div-buttons-home">

                                            <a href="patient"><button type="button" class="first-child-button">Ver Lista</button></a>
                                            <a href="patient-form"><button type="button" class="last-child-button">Cargar Nuevo</button></a>
                            </div>

                    </article>


                    <article class="article-professionals">

                            <div class="img-text">
                                    <figure>
                                            <img src="./img/doctorgirl.jpg" alt="Imágen de un profesional"></img>
                                            <h2 class="h2-professionals">PROFESIONALES</h2>
                                    </figure>
                            </div>

                                            
                            <div class="div-buttons-home">

                                            <a href="professional"><button type="button" class="first-child-button">Ver Lista</button></a>
                                            <a href="professional-form"><button type="button" class="last-child-button">Cargar Nuevo</button></a>

                            </div>

                    </article>

            </section>
    </>

  )
}