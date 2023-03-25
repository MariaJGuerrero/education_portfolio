import '../styles/card-page.css'

const CardsPage = () => {

    return(
        <div className="cardsPage-container">
            <div className="left">
                <div className="contact">
                    <div className="card mb-3" style= {{listStyle: 'none'}}>
                        <div className="card-body">
                            <h5 className="card-title">Contact</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="card mb-3" style= {{listStyle: 'none'}}>
                        <div className="card-body">
                            <h5 className="card-title">About</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="proyects">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Proyects</h5>
                            <ul className="card-text">With supporting text below as a natural lead-in to additional content.
                                <li className="card-text" style= {{listStyle: 'none'}}>proyect 1</li>
                                <li className="card-text" style= {{listStyle: 'none'}}>proyect 2</li>
                                <li className="card-text" style= {{listStyle: 'none'}}>proyect 3</li>
                                <li className="card-text" style= {{listStyle: 'none'}}>proyect 4</li>
                                <li className="card-text" style= {{listStyle: 'none'}}>proyect 5</li>
                            </ul>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsPage;