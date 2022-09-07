import React from "react";

export default function ListProfessionals() {


  return (
    <>

        <section class="main-section-list">


                <ul class="ul-titles">
                        <li class="empty-li"></li>
                        <li>Nombre</li>
                        <li class="hide-contact">Contacto</li>
                        <li class="hide">Profesión</li>
                </ul>

                <ul>
                        <li>
                                <ul id="accordion">
                                        <li>
                                                <label for='first' class="ul-data">
                                                        <p class="id-li">ID</p>
                                                        <p>Sara Valentina</p>
                                                        <p class="hide-contact">92758932</p>
                                                        <p class="hide">medico</p>
                                                        <p class="edit-button"><button type="button">Editar</button></p>
                                                        <span class="more-span"><i class="fa-solid fa-ellipsis"></i></span>
                                                </label>

                                                <input type="radio" name="accordion" id='first'></input>
                                                <div class="content">
                                                        <p><span>Nombre y Apellido </span>valentina</p>
                                                        <p><span>DNI </span>7868788</p>
                                                        <p><span>Email </span>email</p>
                                                        <p><span>Número de teléfono </span>348222</p>
                                                        <p><span>Fecha de Nacimiento </span>832472</p>
                                                        <p><span>Sure </span> holaaa</p>
                                                        <p><span>Matrícula </span>kdjflksml </p>
                                                        <p><span>CBU </span>32752529872382 </p>
                                                        <p><span>Fee </span>6798</p>
                                                        <p><span>Profesión </span>profesionnn</p>
                                                </div>
                                        </li>
                                </ul>
                        </li>
                </ul>

        </section>
      
      

    </>

  )
}
















