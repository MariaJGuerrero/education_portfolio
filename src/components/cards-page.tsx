import { useState } from 'react';
import { sections, setActiveSections } from '../models/types';
import '../styles/card-page.css'


const CardsPage = ({ setActiveSection, setMoveOut, moveOut }: {setActiveSection: setActiveSections, setMoveOut: React.Dispatch<React.SetStateAction<boolean>>, moveOut: boolean }) => {

    

    const clickHandler = (section: sections ) => {
        setMoveOut(true)
        setActiveSection(section)
    }
    
    return(
        <>
            <div id='cardsPage' className="cardsPage-container">
                <div className={` ${moveOut ? 'cards-left-out' : 'left'}`}>
                    <div className="contact">
                        <div className="card border-light bg-transparent mb-3" style= {{listStyle: 'none'}}>
                            <div className="card-body">
                                <h5 className="card-title">Contact</h5>
                                <p className="card-text">
                                    <span style={{color: 'blueviolet', margin: 10}}>
                                        <svg style={{margin: 10}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                                        </svg>
                                    </span>
                                    <span style={{color: 'blueviolet', margin: 10}}>
                                        <svg style={{margin: 10}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                        </svg>
                                    </span>
                                </p>
                                <a onClick={()=> clickHandler('contact') } className="card-link">
                                    <svg style={{color:'blueviolet' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="about">
                        <div className="card border-light bg-transparent mb-3" style= {{listStyle: 'none'}}>
                            <div className="card-body">
                                <h5 className="card-title">About</h5>
                                <p className="card-text">Me considero una persona curiosa a la que le gustan los desafíos. ¿Tendrás algún desafío para mí?</p>
                                <a onClick={()=> clickHandler('about')} className="card-link">
                                    <svg style={{color:'blueviolet' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` ${moveOut ? 'cards-right-out' : 'right'}`}>
                    <div className="proyects">
                        <div className="card  border-light bg-transparent">
                            <div className="card-body">
                                <h2 className="card-title">Proyects</h2>
                                <ul className="card-text"><h6>Algunos proyectos en los que he trabajado:</h6>
                                    <li className="card-text" style= {{listStyle: 'none'}}>Multipligamos</li>
                                    <li className="card-text" style= {{listStyle: 'none'}}>To-Do list</li>
                                    <li className="card-text" style= {{listStyle: 'none'}}>Blog</li>
                                    <li className="card-text" style= {{listStyle: 'none'}}>Shopping-list app</li>
                                    <li className="card-text" style= {{listStyle: 'none'}}>?</li>
                                </ul>
                                <a onClick={()=> clickHandler('proyects')} className="card-link">
                                    <svg style={{color:'blueviolet' }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsPage;