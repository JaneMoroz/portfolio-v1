import React from "react"
import Wrapper from "../assets/wrappers/Footer"
import { FooterImagesBackground } from "./"
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = () => {
  return (
    <Wrapper id="contact">
      <div className="footer container">
        <h2>jane.contact</h2>
        {/* form */}
        <form
          action="https://formspree.io/f/xrgjvbkn"
          method="POST"
          className="form"
        >
          <div className="form-row">
            <input name="name" type="text" placeholder="name" />
          </div>
          <div className="form-row">
            <input name="email" type="email" placeholder="email" />
          </div>
          <div className="form-row">
            <textarea name="message" placeholder="message" />
          </div>
          <button type="submit" className="btn btn-outlined">
            submit
          </button>
        </form>
        {/* background images */}
        <FooterImagesBackground />
        {/* social buttons */}
        <div className="social">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-icon"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
