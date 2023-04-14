import '../styles/introduction.css' 


const Introduction = () => {

    return(
        <div className='introduction-container'>
            <header className='introduction-header'>
                <h1>M. José Guerrero</h1>
                <h4>Frontend Developer</h4>
            </header>
            <section className='introduction-section'>
                <h6>Portfolio</h6>
                <a onClick={()=>document.querySelector('#cardsPage')?.scrollIntoView()}>
                    <svg style={{color:'blueviolet' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </a>
            </section>
            
        </div>
    )
}

export default Introduction;