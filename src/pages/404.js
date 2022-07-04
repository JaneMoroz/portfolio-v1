import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../assets/wrappers/404"
import { Seo } from "../components"
import { cat } from "../assets/images"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <Seo title={"Error Page"} />
      <Wrapper>
        <section>
          <span>404</span>
          <h1>Page not found!</h1>
          <Link to="/" className="btn btn-outlined">
            back to home page
          </Link>
        </section>
        <div className="background">
          <img src={cat} alt="cat" />
        </div>
      </Wrapper>
    </Layout>
  )
}

export default Error
