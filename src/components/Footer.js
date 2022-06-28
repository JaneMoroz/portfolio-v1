import React from "react"
import styled from "styled-components"
import smallHill from "../assets/images/illustrations/small-hill.svg"
import bigHill from "../assets/images/illustrations/big-hill.svg"
import girl from "../assets/images/illustrations/girl.svg"
import plant from "../assets/images/illustrations/plant.svg"
import tree from "../assets/images/illustrations/tree.svg"
// import trees from "../assets/images/trees.svg"
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
        {/* plant */}
        <div className="background background-1">
          <img src={plant} alt="plant" />
        </div>
        {/* girl */}
        <div className="background background-2">
          <img src={girl} alt="girl" />
        </div>
        {/* small hill right */}
        <div className="background background-3">
          <img src={smallHill} alt="small hill" />
        </div>
        {/* big hill left */}
        <div className="background background-4">
          <img src={bigHill} alt="big hill" />
        </div>
        {/* tree */}
        <div className="background background-5">
          <img src={tree} alt="tree" />
        </div>
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
  height: 65rem;
  width: 100%;
  background-color: var(--color-background-2);
  -webkit-clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  overflow: hidden;

  .footer {
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

  .background {
    position: absolute;
  }

  .background-1 {
    top: 100%;
    left: 0;
    transform: translate(150%, -120%);
    z-index: 8;
  }

  .background-2 {
    top: 0;
    left: 0;
    transform: translate(10%, 40%);
    z-index: 7;
  }

  @media only screen and (max-width: 37.5em) {
    .background-1,
    .background-2,
    .background-5 {
      display: none;
    }
  }

  .background-3 {
    top: 0;
    left: 100%;
    transform: translate(-60%, 70%);
    z-index: 6;
  }

  .background-4 {
    top: 0;
    left: 0;
    transform: translate(-50%, 80%);
    z-index: 5;
  }

  .background-5 {
    top: 0;
    left: 100%;
    transform: translate(-100%, 20%);
    z-index: 4;
  }
`

export default Footer
