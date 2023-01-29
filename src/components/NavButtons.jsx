import { ThemeContext } from "./ThemeContext"
import { useContext, useState } from "react"
import { Link } from "react-scroll"
import { useTranslation } from "react-i18next"

export default function NavButtons() {

    const { currentTheme, sectionActive, setSectionActive } = useContext(ThemeContext);
    let i = '';
    const { t } = useTranslation();


    const menuDots = [
        { section: t("about.section_title", { returnObjects: true }) },
        { section: t("experience.section_title", { returnObjects: true }) },
        { section: t("projects.section_title", { returnObjects: true }) },
        { section: t("contact.section_title", { returnObjects: true }) }
    ]


    console.log("CurrentSection", sectionActive)

    return (
        <>
            {currentTheme === 'dark' ?
                <ul className="flex flex-col justify-center h-screen items-end fixed sm:right-5 right-3 lg:gap-y-3 sm:gap-y-1 gap-y-3 z-40">
                    {menuDots.map((dot, i) =>
                        <li key={`nav-dot-dm-${i}`}>
                            <Link onClick={() => setSectionActive(dot.section)} to={dot.section} spy={true} smooth={true} offset={dot.offset} duration={500}>
                                {/* <div className="text-transparent hover:text-[var(--dm-secondary-color)] hover:flex hidden items-center"> */}
                                {/* <p className="text-xs ease-in-out delay-700 duration-100 mr-2 sm:inline-block hidden hover:text-[var(--dm-secondary-color)]">{dot.section}</p> */}
                                <div dot-description={dot.section} className={sectionActive === dot.section ? "dot-section text-xs lg:w-[1rem] lg:h-[1rem] w-[0.8rem] h-[0.8rem] rounded-full bg-[var(--dm-secondary-color)] ease-in-out delay-100 duration-300 border-[1.5px] border-solid border-[var(--dm-secondary-color)] -mr-[0.1rem] sm:-mr-[0.08rem] lg:-mr-[0.05rem]"
                                    : "dot-section text-xs lg:w-[0.9rem] lg:h-[0.9rem] hover:lg:w-[1rem] hover:lg:h-[1rem] w-[0.6rem] hover:w-[0.8rem] h-[0.6rem] hover:h-[0.8rem] rounded-full hover:bg-[var(--dm-secondary-color)] ease-in-out delay-50 duration-300 bg-transparent border-[1.5px] border-solid border-[var(--dm-secondary-color)] hover:-mr-[0.1rem] hover:sm:-mr-[0.08rem] hover:lg:-mr-[0.05rem]"}>
                                </div>
                                {/* </div> */}
                            </Link>
                        </li>
                    )}
                </ul> :
                <ul className="flex flex-col justify-center h-screen items-end fixed sm:right-5 right-3 lg:gap-y-3 sm:gap-y-1 gap-y-3 z-40">
                    {menuDots.map((dot, i) =>
                        <li key={`nav-dot-lm-${i}`}>
                            <Link onClick={() => setSectionActive(dot.section)} to={dot.section} spy={true} smooth={true} offset={dot.offset} duration={500}>
                                {/* <div className="text-transparent hover:text-[var(--lm-secondary-color)] flex items-center"> */}
                                {/* <p className="text-xs ease-in-out delay-700 duration-100 mr-2 sm:inline-block">{dot.section}</p> */}
                                <div dot-description={dot.section} className={sectionActive === dot.section ? "dot-section text-xs lg:w-[1rem] lg:h-[1rem] w-[0.8rem] h-[0.8rem] rounded-full bg-[var(--lm-secondary-color)] ease-in-out delay-100 duration-300 border-[1.5px] border-solid border-[var(--lm-secondary-color)] -mr-[0.1rem] sm:-mr-[0.08rem] lg:-mr-[0.05rem]"
                                    : "dot-section text-xs lg:w-[0.9rem] lg:h-[0.9rem] hover:lg:w-[1rem] hover:lg:h-[1rem] w-[0.6rem] hover:w-[0.8rem] h-[0.6rem] hover:h-[0.8rem] rounded-full hover:bg-[var(--lm-secondary-color)] ease-in-out delay-50 duration-300 bg-transparent border-[1.5px] border-solid border-[var(--lm-secondary-color)] hover:-mr-[0.1rem] hover:sm:-mr-[0.08rem] hover:lg:-mr-[0.05rem]"}>
                                </div>
                                {/* </div> */}
                            </Link>
                        </li>
                    )}
                </ul>
            }
            {/* <div className="fixed bottom-16 right-5 sm:hidden hover:bg-grey-300 z-40">
                <Link to="About" spy={true} smooth={true} offset={50} duration={500}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg></Link>
            </div> */}
        </>
    )
}