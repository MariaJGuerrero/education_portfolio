import { useState } from 'react'
import '../styles/introduction.css' 


const Introduction = () => {

    const [moveOut, setMoveOut] = useState(false)

    const clickHandler = () => {
        setMoveOut(true)
    }
    return(
        <div className={`introduction-container ${moveOut ? 'introduction-container-out' : ''}`}>
                <h1 className='title'>M. José Guerrero</h1>
                <h4 className='title'>Educadora</h4>   
                <button className='button entry' onClick={()=> clickHandler()}><span className='text_button'>Entrar</span></button>
        </div>
    )
}

export default Introduction;