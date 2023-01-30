import Navbar from './components/Navbar.jsx'
import Experience from './components/sections/Experience.jsx'
import About from './components/sections/About.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'
import { ThemeContext } from "./components/ThemeContext.jsx"
import { useContext } from "react"

function App() {

  const { loading } = useContext(ThemeContext);

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
