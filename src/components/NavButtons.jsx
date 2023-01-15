import { ThemeContext } from "./ThemeContext"
import { useContext, useState } from "react"
import { Link } from "react-scroll"

export default function NavButtons() {

    const { currentTheme, sectionActive, setSectionActive } = useContext(ThemeContext)
    const [dotActive, setDotActive] = useState()
    let i = ''

    const menuDots = [
        { section: "About" },
        { section: "Experience" },
        { section: "Projects" },
        { section: "Contact" }
    ]


    console.log("CurrentSection", sectionActive)

    return (
        <>
            {currentTheme === 'dark' ?
                <ul className="flex flex-col justify-center h-screen items-end fixed sm:right-5 right-3 sm:gap-y-1 gap-y-3 transition-all z-40">
                    {menuDots.map((dot, i) =>
                        <li key={i}>
                            <Link onClick={() => setSectionActive(dot.section)} to={dot.section} spy={true} smooth={true} offset={dot.offset} duration={500}>
                                <div className="text-transparent hover:text-[var(--dm-secondary-color)] flex items-center">
                                    <p className="text-xs lg:text-base ease-in-out delay-700 duration-100 mr-2 sm:inline-block hidden">{dot.section}</p>
                                    <div className={sectionActive === dot.section ? "lg:w-[1rem] lg:h-[1rem] w-[0.8rem] h-[0.8rem] rounded-full bg-[var(--dm-secondary-color)] ease-in-out delay-100 duration-300 border-[1.5px] border-solid border-[var(--dm-secondary-color)] -mr-[0.1rem] sm:-mr-[0.08rem] lg:-mr-[0.05rem] text-transparent hover:text-[var(--dm-secondary-color)]"
                                        : "lg:w-[0.9rem] lg:h-[0.9rem] hover:lg:w-[1rem] hover:lg:h-[1rem] w-[0.6rem] hover:w-[0.8rem] h-[0.6rem] hover:h-[0.8rem] rounded-full hover:bg-[var(--dm-secondary-color)] ease-in-out delay-50 duration-300 bg-transparent border-[1.5px] border-solid border-[var(--dm-secondary-color)] hover:-mr-[0.1rem] hover:sm:-mr-[0.08rem] hover:lg:-mr-[0.05rem] text-transparent hover:text-[var(--dm-secondary-color)]"}>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul> :
                <ul className="flex flex-col justify-center h-screen items-end fixed sm:right-5 right-3 sm:gap-y-1 gap-y-3 transition-all z-40">
                    {menuDots.map((dot, i) =>
                        <li key={i}>
                            <Link onClick={() => setSectionActive(dot.section)} to={dot.section} spy={true} smooth={true} offset={dot.offset} duration={500}>
                                <div className="text-transparent hover:text-[var(--lm-secondary-color)] flex items-center">
                                    <p className="text-xs lg:text-base ease-in-out delay-700 duration-100 mr-2 sm:inline-block hidden">{dot.section}</p>
                                    <div className={sectionActive === dot.section ? "lg:w-[1rem] lg:h-[1rem] w-[0.8rem] h-[0.8rem] rounded-full bg-[var(--lm-secondary-color)] ease-in-out delay-100 duration-300 border-[1.5px] border-solid border-[var(--lm-secondary-color)] -mr-[0.1rem] sm:-mr-[0.08rem] lg:-mr-[0.05rem] text-transparent hover:text-[var(--dm-secondary-color)]"
                                        : "lg:w-[0.9rem] lg:h-[0.9rem] hover:lg:w-[1rem] hover:lg:h-[1rem] w-[0.6rem] hover:w-[0.8rem] h-[0.6rem] hover:h-[0.8rem] rounded-full hover:bg-[var(--lm-secondary-color)] ease-in-out delay-50 duration-300 bg-transparent border-[1.5px] border-solid border-[var(--lm-secondary-color)] hover:-mr-[0.1rem] hover:sm:-mr-[0.08rem] hover:lg:-mr-[0.05rem] text-transparent hover:text-[var(--dm-secondary-color)]"}>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            }
        </>
    )
}