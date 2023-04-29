import { useState } from 'react'
import './App.css'
import About from './components/about'
import CardsPage from './components/cards-page'
import Contact from './components/contact'
import Introduction from './components/introduction'
import Proyects from './components/proyects'
import { sections } from './models/types'

function App() {
  const [activeSection, setActiveSection] = useState<sections>()
  return (
    <div className="App">
      <Introduction />
      <CardsPage setActiveSection={setActiveSection}/>
      <Contact isActiveSection={activeSection === 'contact'} />
      <About isActiveSection={activeSection === 'about'} />
      <Proyects isActiveSection={activeSection === 'proyects'} />

    </div>
  )
}

export default App
