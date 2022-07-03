import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import MoreProjects from "../components/MoreProjects"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import SEO from "../components/SEO"

// Get theme from the local storage
const getStorageTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

export default function Home({ data }) {
  const [theme, setTheme] = useState(getStorageTheme)
  const [menu, setMenu] = useState(false)
  const [showMoreProjects, setShowMoreProjects] = useState(false)

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
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <Layout>
      <SEO title={"Home"} />
      <Menu menu={menu} toggleMenu={toggleMenu} />
      <Hero theme={theme} toggleTheme={toggleTheme} toggleMenu={toggleMenu} />
      <About theme={theme} />
      <Projects
        showMoreProjects={showMoreProjects}
        toggleMoreProjects={toggleMoreProjects}
      />
      <MoreProjects
        showMoreProjects={showMoreProjects}
        toggleMoreProjects={toggleMoreProjects}
      />
      <Footer theme={theme} />
    </Layout>
  )
}
