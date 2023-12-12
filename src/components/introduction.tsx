import { useState } from 'react'
import '../styles/introduction.css' 


const Introduction = () => {

    const [moveOut, setMoveOut] = useState(false)

    const clickHandler = () => {
        setMoveOut(true)
    }
    return(
        <div className={`introduction-container ${moveOut ? 'introduction-container-out' : ''}`}>
            <header className='introduction-header'>
                <h1 className='title' style={{color: 'white'}}><span style={{color: '#6499E9'}}>&lt;h1&gt;</span>M. José Guerrero<span style={{color: '#6499E9'}}>&lt;/h1&gt;</span></h1>
                <h4 className='frontend'><span style={{color: '#6499E9'}}>&lt;p&gt;</span>Frontend Developer<span style={{color: '#6499E9'}}>&lt;/p&gt;</span></h4>
            </header>
            <section className='introduction-section'>
                <h6 className='portfolio'>
                    <span style={{color: '#6499E9'}}>&lt;a <span style={{color: '#9BB8CD'}}>onClick=</span><span className='llaves' style={{color: 'blue'}}>&#123;</span><span className='parentesis' style={{color: '#FEFFAC'}}>&#40; &#41;</span><span className='flecha'>=&gt;</span><span style={{color: '#FEFFAC'}}>clickHandler&#40; &#41;</span><span className='llave' style={{color: 'blue'}}>&#125;</span>&gt;</span>
                        <button style={{border: 'none', backgroundColor: 'transparent'}} onClick={()=>clickHandler()}>
                            Portfolio
                        </button>
                    <span style={{color: '#6499E9'}}>&lt;/a&gt;</span>
                </h6>
            </section>
            
        </div>
    )
}

export default Introduction;