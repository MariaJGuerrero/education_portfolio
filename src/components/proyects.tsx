import { proyectsArrayType } from '../models/types'
import '../styles/proyects.css'
import { proyectsArray } from '../utils/proyects-array'

const Proyects = ({ isActiveSection }: { isActiveSection: boolean }) => {


    let proyects: proyectsArrayType = proyectsArray


    const movingProyects = (direction: string) => {
        const container = document.querySelector('.cards-section')
        if (container && direction === 'left') {
            container.scrollLeft -= 580;
        } else if (container && direction === 'right') {
            container.scrollLeft += 580;
        } else {
            alert('something is wrong')
        }

    }

    return (
        <div id="proyects" className={`proyectsPage-container ${isActiveSection ? 'proyects-in' : 'proyectsPage-container'}`}>
            <main>
                <h2 className='title'>My Experience</h2>
                <section className='button-section'>
                    <button style={{ color: 'black' }} className='cards-buttons' onClick={() => movingProyects('left')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button>
                    <button style={{ marginLeft: '95vw', color: 'black' }} className='cards-buttons' onClick={() => movingProyects('right')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button>
                </section>
                
                <section className='cards-section'>
                    {proyects.map((proyect) =>
                        <div id={proyect.id} className='card border-light bg-light mb-3 proyect-card' style={{ minWidth: '35rem' }}>
                            <h5 className="card-title">{proyect.date}</h5>
                            
                                {proyect.experiences.map((experience)=>
                                <div className="accordion accordion-flush" id={experience.id}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-${experience.id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                                <p>{experience.title}</p>
                                            </button>

                                        </h2>
                                        <div id={`flush-${experience.id}`} className="accordion-collapse collapse" data-bs-parent={`#${experience.id}`}>
                                            <div className="accordion-body"> <p>{experience.description}</p></div>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        
                    )}
                </section>

            </main>
        </div>
    )
}


export default Proyects;