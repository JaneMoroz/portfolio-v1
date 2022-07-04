import React, { useState, useContext, createContext, useEffect } from "react"
import { getStorageTheme, saveStorageTheme } from "../utils/storage"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-theme")
  const [menu, setMenu] = useState(false)
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  useEffect(() => {
    setTheme(getStorageTheme())
  }, [])

  // Toggle theme handler
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  // Menu button handler
  const toggleMenu = () => {
    setMenu(!menu)
  }

  // Show more projects button handler
  const toggleMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects)
  }

  useEffect(() => {
    document.documentElement.className = theme
    saveStorageTheme(theme)
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        menu,
        toggleMenu,
        showMoreProjects,
        toggleMoreProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
