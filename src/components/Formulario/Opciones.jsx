import { useState, useEffect } from "react";
import { obtenerDatos } from "../../api/api";

const Opciones = ({titulo, required, error, valor, actualizarValor}) => {
    const [categorias,setCategorias] = useState([])

    useEffect(()=>{
        obtenerDatos('/categories',setCategorias)
    },[])

    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }
        return (
            <div className="inputForm ">
                <div className="inputForm inputbackground">
                    <label className='labelForm' htmlFor="categoria">{titulo}</label>
                    <select name="categoria" id="categoria" required={required} value={valor} onChange={manejarCambio}>
                        <option value="" disabled defaultValue='' hidden>** Escoja una categoria **</option>
                        {
                            categorias.map((categoria, i) => {
                                return(
                                    <option value={categoria.name} key={i}>{categoria.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <span className="mensajeForm">{error}</span>
            </div>
        )
}

export default Opciones