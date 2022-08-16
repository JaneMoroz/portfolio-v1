import React from "react"
import Layout from "../components/Layout"
import { MenuButton } from "../components"
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
        <MenuButton />
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
