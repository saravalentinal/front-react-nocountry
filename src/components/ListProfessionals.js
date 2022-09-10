import React, { useState, useCallback } from 'react'
import axios from 'axios'

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6IlJPTEVfQURNSU4iLCJzdWIiOiJFdmluY2VyZSIsImlhdCI6MTY2MjgyMDI2NCwiZXhwIjoxNjYyODIyMDY0fQ.m42v3S9q6r_EUxGo5ug6jt4xOgInZIzeNdxVY3d144s'
const apiUrl = 'http://localhost:8080'

axios.interceptors.request.use(
        config => {
             config.headers.authorization = `Bearer ${accessToken}`;
             return config;
        },
        error => {
             return Promise.reject(error);
        }
     )

export default function ListProfessionals() {
 
        const [posts, setPosts] = useState([]);
        const [requestError, setRequestError] = useState();

/*         useEffect(() => {
            axios.get('http://localhost:8080/admin/professional/')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []) */

        const fetchData = useCallback(async () => {
        try{
            const result = await axios.get(`${apiUrl}/public/authenticate/`);
            setPosts(result.data);
        } catch(err){
            setRequestError(err.message);
        }
        
        });


  return (
    <>

        <section className="main-section-list">

                <button onClick={() => fetchData()}>Get users</button>

                <p>{requestError}</p>
                
                <ul className="ul-titles">
                        <li className="empty-li"></li>
                        <li>Nombre</li>
                        <li className="hide-contact">Contacto</li>
                        <li className="hide">Profesión</li>
                </ul>

                <ul>
                        <li>
                                <ul id="accordion">
                                        { posts.map(item => (
                                                <li key = {item.id}>
                                                <label htmlFor={item.name} className="ul-data">
                                                        <p className="id-li">{item.id}</p>
                                                        <p>{item.name}</p>
                                                        <p className="hide-contact">{item.phoneNumber}</p>
                                                        <p className="hide">{item.profession}</p>
                                                        <p className="edit-button"><button type="button">Editar</button></p>
                                                        <span className="more-span"><i className="fa-solid fa-ellipsis"></i></span>                  
                                                </label>

                                                <input type="radio" name="accordion" id={item.name}></input>
                                                <div className="content">
                                                        <p><span>Nombre y Apellido </span>{item.name} {item.lastName}</p>
                                                        <p><span>DNI </span>{item.dni}</p>
                                                        <p><span>Email </span>{item.email}</p>
                                                        <p><span>Número de teléfono </span>{item.phoneNumber}</p>
                                                        <p><span>Fecha de Nacimiento </span>{item.dateBirth}</p>
                                                        <p><span>Sure </span> {item.sure}</p>
                                                        <p><span>Matrícula </span>{item.tuition} </p>
                                                        <p><span>CBU </span>{item.cbu} </p>
                                                        <p><span>Fee </span>{item.fee}</p>
                                                        <p><span>Profesión </span>{item.profession}</p>
                                                </div>
                                        </li> ))
                                        }
                                </ul>
                        </li>
                </ul>

        </section>
      
      

    </>

  )
}
















