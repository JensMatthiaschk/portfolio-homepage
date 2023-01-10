import Navbar from './components/NavBar.jsx'
import Experience from './components/sections/Experience.jsx'
import About from './components/sections/About.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'
import { useInView } from 'react-intersection-observer';

function App() {

  const { ref: aboutSectionRef, inView: aboutSectionIsVisible } = useInView();
  const { ref: experienceSectionRef, inView: experienceSectionIsVisible } = useInView();
  const { ref: projectsSectionRef, inView: projectsSectionIsVisible } = useInView();
  const { ref: contactSectionRef, inView: contactSectionIsVisible } = useInView();

  // useEffect(() => {
  //   const localTheme = localStorage.getItem("theme");
  //   if (localTheme === "dark" || localTheme === "light") {
  //     setCurrentTheme(localTheme)
  //     document.body.classList.toggle(`${localTheme}` + "-theme");
  //   } else if (prefersDarkScheme.matches) { setCurrentTheme("dark") }
  //   else { setCurrentTheme("light") }
  // }, [])



  return (
    <div className="App w-full overflow-hidden">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
