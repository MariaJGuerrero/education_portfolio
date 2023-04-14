import Nav from '../components-pure/nav';
import '../styles/about.css'

const About = () => {

    return(
        <div id='about' className="about-container">
             <header className='contact-header'>
                <Nav />
            </header>
            <section>
                <h2 className='title'>About me</h2>
                <div className="imgAndText-container1">
                    <div className="text1">
                        <p>
                            Free, high quality, open source icon library with over 1,800 icons. 
                            Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project.
                        </p>
                    </div>
                    <div className="img1">
                        <img className='cv-photo' src="/images/foto_cv.jpg" alt="woman photo" />
                    </div>
                </div>
                <div className="imgAndText-container2">
                    <div className="text2">
                        <p>
                            Free, high quality, open source icon library with over 1,800 icons. 
                            Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project.
                        </p>
                    </div>
                    <div className="img2" >
                        <img src="/images/woman-at-work.jpg" alt="woman at work" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;