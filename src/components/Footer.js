import React from "react"
import Wrapper from "../assets/wrappers/Footer"
import { FooterImagesBackground } from "./"
import { socialLinks } from "../assets/data/links"
import { useGlobalContext } from "../context/context"
import { FormattedMessage } from "react-intl"

const Footer = () => {
  const { page } = useGlobalContext()
  return (
    <Wrapper id="contact">
      <div className="footer container">
        <h2 className={page === "/ru" || page === "/ru/" ? "no-cursive" : ""}>
          <FormattedMessage id="contact-title" defaultMessage="contact" />
        </h2>
        {/* form */}
        <form
          action="https://formspree.io/f/xrgjvbkn"
          method="POST"
          className="form"
        >
          <div className="form-row">
            <input
              name="name"
              type="text"
              placeholder={page === "/ru" || page === "/ru/" ? "имя" : "name"}
            />
          </div>
          <div className="form-row">
            <input
              name="email"
              type="email"
              placeholder={
                page === "/ru" || page === "/ru/" ? "имейл" : "email"
              }
            />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder={
                page === "/ru" || page === "/ru/" ? "сообщение" : "message"
              }
            />
          </div>
          <button type="submit" className="btn btn-outlined">
            <FormattedMessage id="submit-btn" defaultMessage="submit" />
          </button>
        </form>
        {/* background images */}
        <FooterImagesBackground />
        {/* social buttons */}
        <div className="social">
          {socialLinks.map((socialLink, index) => {
            const { icon, link, label, newTab } = socialLink
            if (newTab) {
              return (
                <a
                  key={index}
                  href={link}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-icon"
                >
                  {icon}
                </a>
              )
            }
            return (
              <a
                key={index}
                href={link}
                aria-label={label}
                className="btn btn-icon"
              >
                {icon}
              </a>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
