import Nav from "../components-pure/nav";
import '../styles/proyects.css'

const Proyects = ({ isActiveSection} : {isActiveSection: boolean}) => {

    return(
        <div id="proyects" className={`proyectsPage-container ${isActiveSection ? 'proyects-in' : ''}`}>
             <header className='contact-header'>
                <Nav id='#proyects' />
            </header>
            <section>
                <h2 className='title'>My Proyects</h2>
                <ul className="list-container" style={{listStyle: 'none'}}>
                   <li className="proyect-container"><h4>Proyect 1</h4>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                   <li className="proyect-container"><h4>proyect 2</h4>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                   <li className="proyect-container"><h4>Proyect 3</h4>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                   <li className="proyect-container"><h4>Proyect 4</h4>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                   <li className="proyect-container"><h4>Proyect 5</h4>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                   <li className="proyect-container"><h4>Proyect 6</h4>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                </ul>
            </section>

        </div>
    )
}

export default Proyects;