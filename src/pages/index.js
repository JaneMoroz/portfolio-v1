import React from "react"
import Layout from "../components/Layout"
import { NavigationButton } from "../components"
import {
  Seo,
  Menu,
  Hero,
  About,
  Projects,
  MoreProjects,
  Footer,
} from "../components"
import SimpleLocalize from "../utils/SimpleLocalize"

export default function Home(props) {
  return (
    <SimpleLocalize {...props}>
      <Layout>
        <NavigationButton />
        <Seo title={"Home"} />
        <Menu />
        <Hero />
        <About />
        <Projects />
        <MoreProjects />
        <Footer />
      </Layout>
    </SimpleLocalize>
  )
}
