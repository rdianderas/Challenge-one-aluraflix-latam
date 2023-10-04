import LogoFooter from '../../img/LogoFooter.png';
import '../../css/Footer/Footer.css';
const Footer = () =>{

    return (
          <footer>
            <div className='logoFooter'>
                <img className='footerImagen' src={LogoFooter} alt="Logo AluraFlix" />
            </div>
            <div className="copyRight">
                <span>Todos los derechos reservados <strong>Rut Dianderas</strong></span>
            </div>
          </footer>
    )
    
}

export default Footer