import { useState } from "react";
import Input from "../components/Formulario/Input";
import Opciones from "../components/Formulario/Opciones";
import TextArea from "../components/Formulario/TextArea";
import ButtonForm from "../components/Formulario/BotonForm";

const NuevoVideo = () =>{

    const[nombre,setNombre] = useState('')
    const[urlVideo,setUrlVideo] = useState('')
    const[urlImagen,setUrlImagen] = useState('')
    const[categoria,setCategoria] = useState('')
    const[descripcion,setDescripcion] = useState('')
    

    const manejarLimpiar = () => {
        setNombre('')
        setUrlVideo('')
        setUrlImagen('')
        setCategoria('** Escoja una categoria **')
        setDescripcion('')
    }

    const manejarEnvio = (e) =>{
        e.preventDefault()
        const id = uuidv4()
        let datosAEnviar = {
            title: nombre,
            url: urlVideo,
            image: urlImagen,
            description: descripcion,
            categorie: categoria,
            id
        }
        enviarDatos('/videos',datosAEnviar)
        manejarLimpiar()
    }

    const EstilosBtnNuevaCategoria = {
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '254px',
        height: '54px',
        borderRadius: '4px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const EstilosBtnGuardar = {
        display: 'inline-block',
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
    }

    const EstilosBtnLimpiar = {
        display: 'inline-block',
        color: '#000000',
        background: '#9E9E9E',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
    }




    return (
           <>
            <main className="nuevovideo">
                <div className="formContenido">
                    <h2 className="tituloFormulario">Nuevo Video</h2>
                    
                    <form className='form' action="" onSubmit={manejarEnvio}>
                        
                        <Input 
                            titulo='Título'
                            mensaje="" 
                            required={true} 
                            valor={nombre} 
                            actualizarValor={setNombre} 
                        />
                        
                        <Input 
                            titulo='Link del video' 
                            mensaje="" 
                            required={true} 
                            valor={urlVideo} 
                            actualizarValor={setUrlVideo} 
                        />

                        <Input 
                            titulo='Link de la imagen del video' 
                            mensaje="" 
                            required={true} 
                            valor={urlImagen} 
                            actualizarValor={setUrlImagen} 
                        />

                        <Opciones 
                            titulo='Categoría' 
                            mensaje="" 
                            required={true} 
                            valor={categoria} 
                            actualizarValor={setCategoria} 
                        />

                        <TextArea 
                            titulo='Descripción' 
                            mensaje='' 
                            required={true} 
                            valor={descripcion} 
                            actualizarValor={setDescripcion} 
                        />

                        <div className="botonera">
                            <div className="botones">
                                <ButtonForm tipo='submit' titulo='Guardar' styles={EstilosBtnGuardar} />
                                <ButtonForm tipo='reset' titulo='Limpiar' styles={EstilosBtnLimpiar} manejarClic={()=>manejarLimpiar()}/>
                            </div>
                            {/* <ButtonLink to='/nuevacategoria' titulo='Nueva Categoría' styles={EstilosBtnNuevaCategoria}/> */}
                        </div>

                    </form>

                </div>
            </main>
        </>
    )
    
}

export default NuevoVideo