import '../../css/Banner/Banner.css';
import ImagenVideo from '../../img/VideoPrincipal.png'
const Banner = () =>{

    return (
         <section className="banner">
            <div className="bannerContenido">
                <div className="contenidoLeft">
                    <div className="categoria">Front End</div>
                    <h2 className='categoriaTitulo'>Challenge React</h2>
                    <p className='categoriaDescripcion'>
                        Este challenge es una forma de aprendizaje. 
                        Es un mecanismo donde podrás comprometerte en la 
                        resolución de un problema para poder aplicar todos 
                        los conocimientos adquiridos en la formación React.
                    </p>
                </div>
                <div className="contenidoRight">
                    <a href='https://www.youtube.com/watch?v=ov7vA5HFe6w&t'
                        target='_blank'>
                            <div className="video">
                                <img src={ ImagenVideo } alt="Imagen Video" />
                            </div>
                        </a>
                </div>
               
            </div>
            
         </section>
    )
    
}

export default Banner