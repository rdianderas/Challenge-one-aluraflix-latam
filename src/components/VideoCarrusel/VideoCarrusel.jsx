import {obtenerDatos } from '../../api/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/VideoCarrusel/VideoCarrusel.css';

const VideoCarrusel=({ url, color, nombreCategoria })=>{

    const [videos,setVideos] = useState([])
    const [solicitarDatosVideos,setSolicitarDatosVideos] = useState(false)

    useEffect(()=>{
        obtenerDatos('/videos', setVideos)
        setSolicitarDatosVideos(false)
    },[solicitarDatosVideos])

    let colorCard = {
        border: `2px solid ${color}`, 
        backgroundColor: `${color}`   
    }
    return (
        <>
        {
            videos.map(video => {
                const { id, url, image, categorie } = video
                if(categorie === nombreCategoria){
                    return (
                    <div className='videoContenedor' key={id}>
                        <Link to={`${url}`} target="_blank" rel="noopener noreferrer" >
                            
                            <div className='cardVideo' style={ colorCard } key={id}>
                                <img src={`${image}`} alt="Imagen video card" key={id}/>
                                
                            </div>
                        </Link>
                    </div>
                    
                    );
                }   
            })
        }
    </>
    );
}
export default VideoCarrusel;