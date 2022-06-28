import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import MoreProjects from "../components/MoreProjects"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

const getStorageTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

export default function Home() {
  const [theme, setTheme] = useState(getStorageTheme)
  const [menu, setMenu] = useState(false)

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  const toggleMenu = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <Layout>
      <Menu menu={menu} toggleMenu={toggleMenu} />
      <Hero theme={theme} toggleTheme={toggleTheme} toggleMenu={toggleMenu} />
      <About />
      <Projects />
      <MoreProjects />
      <Footer />
    </Layout>
  )
}
