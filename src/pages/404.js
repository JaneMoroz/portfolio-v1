import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../assets/wrappers/404"
import { Seo } from "../components"
import { cat } from "../assets/images"
import SimpleLocalize from "../utils/SimpleLocalize"
import LinkTranslated from "../utils/LinkTranslated"
import { FormattedMessage } from "react-intl"

const Error = props => {
  return (
    <SimpleLocalize {...props}>
      <Layout>
        <Seo title={"Error Page"} />
        <Wrapper>
          <section>
            <span>404</span>
            <h1>
              <FormattedMessage
                id="not-found"
                defaultMessage="Page not found!"
              />
            </h1>
            <LinkTranslated href="/" className="btn btn-outlined">
              <FormattedMessage
                id="back-to-home-btn"
                defaultMessage="back to home page"
              />
            </LinkTranslated>
          </section>
          <div className="background">
            <img src={cat} alt="cat" />
          </div>
        </Wrapper>
      </Layout>
    </SimpleLocalize>
  )
}

export default Error
