import '../../css/Formulario/Formulario.css';
const TextArea = ({titulo, required, error, valor, actualizarValor}) => {

    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }

    return (
        <div className="inputForm ">
            <div className="inputForm inputbackground">
                <label className='labelForm' htmlFor="descripcion" >{titulo}</label>
                <textarea 
                    name="descripcion" 
                    id="descripcion" 
                    cols="30" rows="4"
                    required={required}
                    value={valor}
                    onChange={manejarCambio}>
                </textarea>
            </div>
            <span className="mensajeForm">{error}</span>
        </div>
    );
}

export default TextArea