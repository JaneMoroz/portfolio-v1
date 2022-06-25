import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import MoreProjects from "../components/MoreProjects"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <MoreProjects />
    </Layout>
  )
}
