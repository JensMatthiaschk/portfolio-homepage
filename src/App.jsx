import Navbar from './components/Navbar.jsx'
import Experience from './components/sections/Experience.jsx'
import About from './components/sections/About.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'

function App() {

  return (
    <div className="App h-full overflow-hidden">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
