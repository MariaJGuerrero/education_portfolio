import { useState } from 'react'
import './App.css'
import Nav from './components-pure/nav'
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
    <div className="App">
      <Introduction />
      {activeSection 
      ? 
        <button className='button'  onClick={()=>{reverse()}}><Nav /></button> 
      : 
        undefined 
      }
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
