import { ThemeContext } from "../ThemeContext.jsx"
import { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

export default function About() {

    const { currentTheme, setCurrentTheme, sectionActive, setSectionActive } = useContext(ThemeContext)
    const { ref: aboutRef, inView: aboutIsVisible } = useInView({ threshold: 0.5 });


    useEffect(() => {
        if (aboutIsVisible === true) setSectionActive('About')
    }, [aboutIsVisible])

    return (
        <>
            <section id="About" ref={aboutRef}
                className="flex h-screen lg:ml-36 lg:pl-4 sm:ml-20 px-8 mb-20 flex-col justify-center overflow-hidden"
            >
                <h2 className="font-['Montserrat'] md:text-3xl sm:text-2xl text-xl">Hi, I'm</h2>
                <h1 className="font-['Montserrat'] md:text-8xl sm:text-5xl text-4xl font-extrabold w-auto" translate="no">Jens Matthiaschk</h1>
                <h2 className="font-['Montserrat'] md:text-6xl sm:text-4xl text-2xl md:mt-5 mt-2">web developer</h2>
                <p className="text-sm sm:text-base my-8 font-['Montserrat'] font-medium lg:w-[80%] w-[90%]">I recently transitioned from the film industry to tech and am now actively looking for new challenges and exciting projects. With code I can write my own scripts with immediate results on screen which hopefully make a positive impact and help people. I always strive for the balance between intuitive yet beautifully designed interfaces while simultaneously maximizing performance and scalebility on my applications. I'm naturally curious and am working continuously on improving myself to become a better developer on whom people and businesses can rely.</p>
                <div className="md:mt-10 sm:mt-8 mt-5 flex sm:flex-row flex-col gap-y-3">
                    <Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>
                        <button className={currentTheme === 'dark' ? "badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-dark hover:drop-shadow-[0_0_10px_var(--dm-third-color)] mr-3 transform-gpu" : "badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-light hover:drop-shadow-[0_0_10px_var(--lm-third-color)] mr-3 transform-gpu"}>
                            <p className="mr-2">View my projects</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </Link>
                    <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>
                        <button className={currentTheme === 'dark' ? "badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-dark hover:drop-shadow-[0_0_10px_var(--dm-third-color)] transform-gpu" : "badge p-4 sm:badge-lg badge-md sm:p-6 sm:text-2xl font-semibold badge-outline btn-light hover:drop-shadow-[0_0_10px_var(--lm-third-color)] transform-gpu"}>
                            <p className="mr-2">Contact</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}