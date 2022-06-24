import React from "react"
import styled from "styled-components"
import background1 from "../assets/images/Background-1.svg"
import background2 from "../assets/images/Background-2.svg"
import background3 from "../assets/images/Background-3.svg"
import background4 from "../assets/images/Background-4.svg"
import background5 from "../assets/images/Background-5.svg"
import background6 from "../assets/images/Background-6.svg"
import light from "../assets/images/Light.svg"

const Hero = () => {
  return (
    <Wrapper>
      <section className="hero container">
        <div className="hero-text">
          <button className="btn dark-light-mode-btn">
            <img src={light} alt="dark/light mode button" />
          </button>
          <div className="text-box">
            <h1>
              Hi, my name is <span>Jane</span>.
            </h1>
            <h1>I build things for the web.</h1>
            <h4>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences.{" "}
            </h4>
            <button className="btn btn-outlined">resume</button>
          </div>
        </div>
        <div className="hero-images">
          <div className="background background-1">
            <img src={background1} alt="background 1" />
          </div>
          <div className="background background-2">
            <img src={background2} alt="background 2" />
          </div>
          <div className="background background-3">
            <img src={background3} alt="background 3" />
          </div>
          <div className="background background-4">
            <img src={background4} alt="background 4" />
          </div>
          <div className="background background-5">
            <img src={background5} alt="background 5" />
          </div>
          <div className="background background-6">
            <img src={background6} alt="background 6" />
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 75rem;
  width: 100%;
  background-color: var(--color-background-2);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

  .hero {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    height: 100%;
    padding: 0 3.2rem;

    .dark-light-mode-btn {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(10%, -50%);
    }
  }

  .hero-images {
    position: relative;
    height: 100%;
    width: 100%;

    .background {
      position: absolute;
    }

    .background-1 {
      top: 0;
      right: 0;
      transform: translate(60%, 150%);
      z-index: 6;
    }

    .background-2 {
      top: 0;
      left: 0;
      transform: translate(20%, 180%);
      z-index: 5;
    }

    .background-3 {
      top: 0;
      left: 0;
      transform: translate(-10%, 140%);
      z-index: 4;
    }

    .background-4 {
      top: 0;
      left: 0;
      transform: translate(0, 10%);
      z-index: 3;
    }

    .background-5 {
      top: 0;
      left: 0;
      transform: translate(50%, -60%);
      z-index: 2;
    }

    .background-6 {
      top: 0;
      left: 0;
      transform: translate(100%, 200%);
      z-index: 1;
    }
  }
`

export default Hero
