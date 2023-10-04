import '../../css/Header/Header.css';
import LogoHeader from '../../img/LogoHeader.png'
import Boton from '../Boton/Boton';


const Header = () =>{
    return(
        <div className='header'>
            <div className='headerContenido contenedor'>
                <div className='Logo'>
                <a href='/' className='btnLink'>
                    <img className='headerImagen' src={LogoHeader} alt="Logo AluraFlix" />
                </a>
                </div>    
                <div className='BotonHeader'>
                    <Boton/>
                </div>
            </div>
            
        </div>
    );
}

export default Header;
