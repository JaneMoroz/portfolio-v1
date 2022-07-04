import React from "react"
import Layout from "../components/Layout"
import {
  Seo,
  Menu,
  Hero,
  About,
  Projects,
  MoreProjects,
  Footer,
} from "../components"

export default function Home() {
  return (
    <Layout>
      <Seo title={"Home"} />
      <Menu />
      <Hero />
      <About />
      <Projects />
      <MoreProjects />
      <Footer />
    </Layout>
  )
}
