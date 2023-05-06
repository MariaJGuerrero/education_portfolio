import '../styles/proyects.css'

const Proyects = ({ isActiveSection} : {isActiveSection: boolean}) => {

    return(
        <div id="proyects" className={`proyectsPage-container ${isActiveSection ? 'proyects-in' : 'proyectsPage-container'}`}>
            <section className='proyects-section'>
                <h2 className='title'>My Proyects</h2>
                <table className="list-container  table" style={{listStyle: 'none'}}>
                    <tbody>
                        <tr className="proyect-container">
                            <td className='image-container'>
                                <img className='image' src="/images/tablas.jpeg" alt="tablas multiplicar" />
                            </td>
                            <td className='text'>
                                <h4>Multipligamos</h4>
                                App que inventé para aprender las tablas de multiplicar de una forma lúdica.
                                <span> React | CSS | Javascript</span> 
                            </td>
                        </tr>
                        <tr className="proyect-container">
                            <td className='image-container'>
                                <img className='image' src="" alt="" />
                            </td>
                            <td className='text'>
                                <h4>To-Do list</h4>
                                Proyecto final del curso de React de Openbootcamp.
                                <span>React | CSS | Javascript</span>
                            </td>
                        </tr>
                        <tr className="proyect-container">
                            <td className='image-container'>
                                <img className='image' src="" alt="" />
                            </td>
                            <td className='text'>
                                <h4>Blog</h4>
                                Simulación de un blog. Api (Json Placeholder)
                                <span> React | CSS | Javascript | Peticiones API REST </span>
                            </td>
                        </tr>
                        <tr className="proyect-container">
                            <td className='image-container'>
                                <img className='image' src="" alt="" />
                            </td>
                            <td className='text'>
                                <h4>Shopping-list app</h4>
                                App que gestiona diferentes listas.
                                <span> React | Material UI | Typescript | Peticiones API REST | Auth Token </span>
                            </td>
                        </tr>
                        <tr className="proyect-container">
                            <td className='image-container'>
                                <img className='image' src="" alt="" />
                            </td>
                            <td className='text'>
                                <h4>Next proyect?</h4>
                                ¿Cuál será mi siguiente proyecto?
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </div>
    )
}


export default Proyects;