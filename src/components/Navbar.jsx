import { useState, useEffect, useContext, createContext } from 'react'
import LinkButtons from './LinkButtons.jsx';
import NavButtons from './NavButtons.jsx';
import { ThemeContext } from './ThemeContext.jsx';
import { Link } from 'react-scroll';

export default function Navbar() {

    const btn = document.querySelector(".btn-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)


    function handleToggle() {
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light-theme");
            let theme = document.body.classList.contains("light-theme") ? "light" : "dark";
            localStorage.setItem("theme", theme);
            setCurrentTheme(theme)
        } else {
            document.body.classList.toggle("dark-theme");
            let theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("theme", theme);
            setCurrentTheme(theme)
        }
    };

    return (
        <>
            <LinkButtons />
            <NavButtons />
            <div className="navbar bg-transparent z-40">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0"
                            className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex="0"
                            className={currentTheme === 'dark' ? "menu menu-compact dropdown-content mt-3 p-2 bg-base-100 shadow rounded-box w-52" : "menu menu-compact dropdown-content mt-3 p-2 bg-stone-200 shadow rounded-box w-52"}>
                            <li><Link to="About" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                            <li><Link to="Experience" spy={true} smooth={true} offset={0} duration={500}>Experience</Link></li>
                            <li><Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>
                            <li><Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
                            <li>
                                <button className="btn-toggle" onClick={handleToggle}>
                                    {currentTheme === "dark" &&
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                        || currentTheme === "light" &&
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex lg:w-screen">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="About" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li><Link to="Experience" spy={true} smooth={true} offset={0} duration={500}>Experience</Link></li>
                        <li><Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>
                        <li><Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
                        {currentTheme === "dark" &&
                            <li>
                                <button className="btn-toggle" onClick={handleToggle}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path strokeLinecap="round"
                                            strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </button>
                            </li>
                            || currentTheme === "light" &&
                            <li>
                                <button className="btn-toggle" onClick={handleToggle}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                </button>
                            </li>}
                    </ul>
                </div>
            </div>
        </>
    )
}