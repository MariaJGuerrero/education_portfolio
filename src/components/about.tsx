import '../styles/about.css'

const About = ({ isActiveSection} : {isActiveSection: boolean}) => {

    return(
        <div id='about' className={`about-container ${isActiveSection ? 'about-in' : 'about-container'}`}>
            <section className='about-section'>
                <h2 className='title'>About me</h2>
                <div className="imgAndText-container1">
                    <div className="text1">
                        <p>
                            ¡Hola! ¿Cómo estás? Soy Marijose, Desarrolladora Frontend y persona curiosa (me gusta saber el porqué de todo)
                            y gracias a esto conseguí las herramientas para ser una persona independiente y resolutiva, y también lo que me trajo a este 
                            mundillo, querer saber cómo funciona.
                        </p>
                    </div>
                    <div className="img1">
                        <img className='cv-photo' src="/images/foto_cv.jpg" alt="woman photo" />
                    </div>
                </div>
                <div className="imgAndText-container2">
                    <div className="text2">
                        <p>
                            Así que investigando, leyendo, preguntando... poco a poco me fui "enganchando" a esto de programar
                            y empecé a ponerlo en práctica con proyectos propios y con cada proyecto iba descrubriendo alguna 
                            cosa nueva que quería experimentar y me iba "enganchando" más y más...
                        </p>
                        <video src="/Presentacion_23.mp4" width="300" height="440" controls></video>
                        <p>
                            Si tienes por ahí algún reto, desafío, proyecto... házmelo saber, me encantará escucharte y 
                            contarte cómo puedo contribuir en él.
                        </p>
                    </div>
                    <div className="img2" >
                        <img src="/images/woman_pc.jpg" alt="woman at work" />
                    </div>
                    <p className="text1">¡Qué tengas muy buen día!</p>
                </div>
            </section>
        </div>
    )
}

export default About;