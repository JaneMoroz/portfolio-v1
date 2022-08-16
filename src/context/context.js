import React, { useState, useContext, createContext, useEffect } from "react"
import { getStorageTheme, saveStorageTheme } from "../utils/storage"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState(undefined)
  const [theme, setTheme] = useState(undefined)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  // Get theme from the local storage
  useEffect(() => {
    setTheme(getStorageTheme())
  }, [])

  // Set theme and save it to the local storage when it gets changed
  useEffect(() => {
    document.documentElement.className = theme
    saveStorageTheme(theme)
  }, [theme])

  useEffect(() => {
    setPage(window.location.pathname)
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
    setMenuIsOpen(!menuIsOpen)
  }

  // Show more projects button handler
  const toggleMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects)
  }

  return (
    <AppContext.Provider
      value={{
        page,
        theme,
        toggleTheme,
        menuIsOpen,
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
