import React from "react"
import styled from "styled-components"
import FooterImagesBackground from "./FooterImagesBackground"
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = ({ theme }) => {
  return (
    <Wrapper id="contact">
      <div className="footer container">
        <h2>jane.contact</h2>
        {/* form */}
        <form className="form">
          <div className="form-row">
            <input type="text" placeholder="name" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="email" />
          </div>
          <div className="form-row">
            <textarea placeholder="message" />
          </div>
          <button className="btn btn-outlined">submit</button>
        </form>
        {/* background images */}
        <FooterImagesBackground theme={theme} />
        {/* social buttons */}
        <div className="social">
          <button className="btn btn-icon">
            <FaEnvelope />
          </button>
          <button className="btn btn-icon">
            <FaGithub />
          </button>
          <button className="btn btn-icon">
            <FaLinkedinIn />
          </button>
          <button className="btn btn-icon">
            <FaTwitter />
          </button>
          <button className="btn btn-icon">
            <FaDiscord />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 75rem;
  width: 100%;
  background-color: var(--color-background-2);
  -webkit-clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  overflow: hidden;

  .footer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  h2 {
    text-align: center;
    color: var(--color-text-main);
    margin-bottom: 2.4rem;
  }

  .form {
    z-index: 9;
  }

  .btn {
    align-self: center;
    z-index: 10;
  }

  .social {
    position: absolute;
    top: 10%;
    left: 95%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    z-index: 100;

    .btn-icon {
      color: var(--color-text-main);
    }
  }
`

export default Footer
