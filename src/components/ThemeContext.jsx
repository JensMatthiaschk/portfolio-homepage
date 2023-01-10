import { useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = (props) => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const [currentTheme, setCurrentTheme] = useState()
    const [sectionActive, setSectionActive] = useState()

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme === "dark" || localTheme === "light") {
            setCurrentTheme(localTheme)
            document.body.classList.toggle(`${localTheme}` + "-theme");
        } else if (prefersDarkScheme.matches) { setCurrentTheme("dark") }
        else { setCurrentTheme("light") }
    }, [])

    console.log(`${currentTheme}` + "-theme")


    return (
        <ThemeContext.Provider value={{
            currentTheme, setCurrentTheme,
            sectionActive, setSectionActive
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider