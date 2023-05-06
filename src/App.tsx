import { useState } from 'react'
import './App.css'
import House from './components-pure/nav'
import About from './components/about'
import CardsPage from './components/cards-page'
import Contact from './components/contact'
import Introduction from './components/introduction'
import Proyects from './components/proyects'
import { sections } from './models/types'

function App() {
  const [activeSection, setActiveSection] = useState<sections>()
  const [moveOut, setMoveOut] = useState(false)

  const reverse = () => {
    setActiveSection(undefined)
    setMoveOut(false)
  }


  return (
    <div className="App" style={{position: 'relative', minHeight: '100vh'}}>
      <Introduction />
      {/*<div className='button-container'>*/}
        {activeSection 
          ? <div className='button'  onClick={()=>{reverse()}} style={{marginLeft: 20}} ><House /></div> 
          : undefined 
        }
      {/*</div>*/}
      <CardsPage 
        setActiveSection={setActiveSection}
        setMoveOut={setMoveOut}
        moveOut={moveOut}
      />
      <Contact isActiveSection={activeSection === 'contact'} />
      <About isActiveSection={activeSection === 'about'} />
      <Proyects isActiveSection={activeSection === 'proyects'} />
      
    </div>
  )
}

export default App
