import '../../css/Formulario/Formulario.css';
const Input = ({titulo, required, error, valor, actualizarValor }) => {
    
    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }

    return (
        <div className="inputForm ">
            <div className="inputForm inputbackground">
            <label className='labelForm' htmlFor="">{titulo}</label>
        <input
            required={required}
            value={valor}
            onChange={manejarCambio}
        />
        </div>
            <span className="mensajeForm">{error}</span>
        </div>
   )
}

export default Input