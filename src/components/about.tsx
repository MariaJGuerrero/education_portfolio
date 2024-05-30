import { useRef } from 'react';
import '../styles/about.css'
import Modal from '../utils/modal';

const About = ({ isActiveSection} : {isActiveSection: boolean}) => {

    const dialogRef = useRef<HTMLDialogElement>(null)


    return(
        <div id='about' className={`about-container ${isActiveSection ? 'about-in' : 'about-container'}`}>
            <section className='about-section'>
                <h2 className='title'>About me</h2>
                <div className="imgAndText-container">
                    <p className="text">
                        ¡Hola! ¿Cómo estás? Soy Marijose, Educadora, Desarrolladora Frontend (amateur) y persona curiosa.
                        Una de las cosas que más curiosidad me ha generado desde siempre es la infancia ¿Cómo ven los niños el mundo?,
                        ¿Cuáles con sus necesidades?, ¿Cúal es la mejor forma de fomentar todo su potencial?... Por eso decidí estudiar edcucación.
                    </p>
                    <div className="img1">
                        <img className='cv-photo' src="/images/foto_cv.jpg" alt="woman photo" />
                    </div>
                </div>
                <div className="imgAndText-container">
                    <p className="text">
                        Me considero responsable y organizada pero sin perder el sentido del humor, capaz de adaptarme rápidamente y de aprovechar cada oportunidad que se me presenta.
                        
                        por eso, y como persona curiosa que soy, también despertaron mi interés otras cosas como las nuevas tecnologías, los idiomas o el desarrollo web entre otros. 
                        Explorar todas estas áreas me dió las herramientas para ser una persona independiente y resolutiva 
                        <span>
                            <button onClick={()=> {dialogRef.current?.showModal()}} type="button" className="btn modal-button">
                                (saber más)
                            </button>
                            <dialog ref={dialogRef}>
                                <Modal dialogRef={dialogRef.current}></Modal>
                            </dialog>
                        </span>
                        pero como mi gran pasión es la educación, 
                        siempre vuelvo a ella conectándolo todo <span><a href='https://multipligamos.netlify.app' target="_blank">multipligamos app</a></span>
                    </p>
                    <p className="text">
                        Así que  sigo investigando y leyendo y preguntando sobre este mundo apasionante que es la infancia, para seguir mejorando como profesional y como persona
                        porque creo firmemente en el potencial de los/as niños/as y porque quiero contribuir de forma positiva a su desarrollo y bienestar.
                    </p>
                    <img className="img2" src="/images/captura-codigo.png" alt="code" />
                    {/*<video className="video" src="/Presentacion_23.mp4" width="300" height="440" controls></video>*/}
                    <p className="text">
                        Si tienes por ahí algún reto, desafío, proyecto... házmelo saber, me encantará escucharte y 
                        contarte cómo puedo contribuir en él.
                    </p>
                    <p className="text">¡Qué tengas muy buen día!</p>  
                </div>
            </section>    
        </div>
    )
}

export default About;