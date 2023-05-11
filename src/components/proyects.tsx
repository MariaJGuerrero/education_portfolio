import { useState } from 'react'
import { proyectsArrayType } from '../models/types'
import '../styles/proyects.css'
import { proyectsArray } from '../utils/proyects-array'


const Proyects = ({ isActiveSection} : {isActiveSection: boolean}) => {

    const [isActiveCard, setIsActiveCard] = useState()

     let proyects: proyectsArrayType = proyectsArray

    return(
        <div id="proyects" className={`proyectsPage-container ${isActiveSection ? 'proyects-in' : 'proyectsPage-container'}`}>
            <main>
                <h2 className='title'>My Proyects</h2>
                <section className='cards-section'>
                    <button>anterior</button>
                    {proyects.map((proyect)=> 
                        <div className={`card border-light bg-light mb-3 ${isActiveCard ? 'proyect-card-active' : 'proyect-card-no-active'}`} style={{width: '40rem'}}>
                            <img src={proyect.image} className="card-img-top image" alt="multiplicar" />
                            <div className="card-body">
                                <h5 className="card-title">{proyect.title}</h5>
                                <p className="card-text">
                                    {proyect.description} 
                                </p>
                                <p className="card-text"> {proyect.tecnologies}</p>
                            </div>
                        </div>
                     )}
                     <button>posterior</button>
                </section>
            </main>
        </div>
    )
}


export default Proyects;