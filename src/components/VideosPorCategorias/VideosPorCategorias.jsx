import '../../css/VideosPorCategorias/VideosPorCategorias.css';
import {obtenerDatos } from '../../api/api';
import { useEffect, useState } from "react"
import VideoCarrusel from '../VideoCarrusel/VideoCarrusel';
const VideosPorCategorias = () =>{
    const [categorias,setCategorias] = useState([]);
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        obtenerDatos('/categories',setCategorias)
        obtenerDatos('/videos',setVideos)
    },[])
    return (
        <section className="listaCategorias">
           {/* <h1 className="tituloCategoria">Lista Categorias videos</h1>
            <p className="textoCategoria">AluraFlix plataforma para registrar y ver nuestros videos favoritos</p> */}
            <div className="listas">
                {
                     categorias.map((categoria) => {
                        const {id, name, description, color} = categoria

                        if (videos.some( video => video.categorie === name)){
                            let colorLista = {
                                backgroundColor: color
                            }
    
                            return (
                                <div className="categorias__contenido categoriaContenedor" key={id}>
                                    <div className="tituloCategoria">
                                        <div className="nombreCategorias" style={ colorLista }>{ name }</div>
                                        <div className="descripcionCategoria">{ description }</div>
                                    </div>
                                    <div className="listaVideosCategorias">
                                        <VideoCarrusel url='/videos' nombreCategoria={name} color={ color }/>
                                    </div>
                                </div>
                            );
                        }
                     })
                }
                
            </div>
        </section>
   )
   
}
export default VideosPorCategorias