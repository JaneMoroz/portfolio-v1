import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import MoreProjects from "../components/MoreProjects"
import Footer from "../components/Footer"

const getStorageTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

export default function Home() {
  const [theme, setTheme] = useState(getStorageTheme)

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <Layout>
      <Hero theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Projects />
      <MoreProjects />
      <Footer />
    </Layout>
  )
}
