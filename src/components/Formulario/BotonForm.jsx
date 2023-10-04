import '../../css/Formulario/Formulario.css';
const ButtonForm = ({tipo, titulo, styles, manejarClic}) => {
    return <button className='btn_form' type={tipo} 
        onClick={manejarClic}
        style={styles}>
           {titulo}
        </button>
}

export default ButtonForm