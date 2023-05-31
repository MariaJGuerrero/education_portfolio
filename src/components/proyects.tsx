import { useState } from 'react'
import { proyectsArrayType } from '../models/types'
import '../styles/proyects.css'
import { proyectsArray } from '../utils/proyects-array'


const Proyects = ({ isActiveSection} : {isActiveSection: boolean}) => {

    const [move, setMove] = useState< string>()

    let proyects: proyectsArrayType = proyectsArray

    
    const clickingArrows = (direction: string)=> {
        
        if(direction === 'left'){
            setMove('.move-left') 
        }else{
            setMove('.move-right') 
        }
    }

    return(
        <div id="proyects" className={`proyectsPage-container ${isActiveSection ? 'proyects-in' : 'proyectsPage-container'}`}>
            <main>
                <h2 className='title'>My Proyects</h2>
                <section className='cards-section'>
                    <button className='cards-buttons' onClick={()=> clickingArrows('left')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </button>
                    {proyects.map((proyect)=> 
                        <div className={`card border-light bg-light mb-3 proyect-card ${move}`} style={{minWidth: '35rem'}}>
                            <div className='image-container'>
                            <img style={{maxWidth: '75%'}} src={proyect.image} className="card-img-top image" alt="captura de pantalla" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{proyect.title}</h5>
                                <p className="card-text">
                                    {proyect.description} 
                                </p>
                                <p className="card-text"> {proyect.tecnologies}</p>
                            </div>
                        </div>
                     )}
                     <button style={{ marginLeft: '95vw' }} className='cards-buttons' onClick={()=> clickingArrows('right')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                     </button>
                </section>
            </main>
        </div>
    )
}


export default Proyects;