import React from "react"
import styled from "styled-components"
import {
  FaWindowClose,
  FaWindowMaximize,
  FaWindowMinimize,
  FaChevronRight,
} from "react-icons/fa"
import mouse from "../assets/images/illustrations/mouse.svg"

const About = () => {
  const techTags = [
    "react",
    "redux",
    "javascript",
    "typescript",
    "node.js",
    "express.js",
    "bootstrap",
    "styled-components",
    "gatsby",
    "sass",
    ".net",
  ]
  return (
    <Wrapper id="about" className="about container">
      {/* mouse */}
      <div className="background">
        <img src={mouse} alt="mouse" />
      </div>
      <h2>jane.about</h2>
      {/* program */}
      <div className="program">
        {/* program header */}
        <div className="program-header">
          <span>jane.exe</span>
          <div className="program-btns">
            <FaWindowMinimize />
            <FaWindowMaximize />
            <FaWindowClose />
          </div>
        </div>
        {/* program body */}
        <div className="program-body">
          {/* technologies */}
          <div className="program-el">
            <div className="question">
              <FaChevronRight className="icon" />
              <h5>
                jane.<span>technologies</span>
              </h5>
            </div>
            <div className="answer">
              {techTags.map((tag, index) => {
                return (
                  <span key={index} className="tech-tag">
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>
          {/* hobbies */}
          <div className="program-el">
            <div className="question">
              <FaChevronRight className="icon" />
              <h5>
                jane.<span>hobbies</span>
              </h5>
            </div>
            <div className="answer">
              <p>hiking, yoga, playing video games and board games</p>
            </div>
          </div>
          {/* dream */}
          <div className="program-el">
            <div className="question">
              <FaChevronRight className="icon" />
              <h5>
                jane.<span>dream</span>
              </h5>
            </div>
            <div className="answer">
              <p>
                i have a dream of building something that makes people’s lives
                easier and better
              </p>
            </div>
          </div>
          {/* last */}
          <div className="program-el">
            <div className="question">
              <FaChevronRight className="icon" />
              <span className="console"></span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-90%, 80%);
    z-index: -1;
  }

  @media only screen and (max-width: 75em) {
    .background {
      transform: translate(-85%, 50%);
    }
  }

  @media only screen and (max-width: 56.25em) {
    .background {
      left: 0;
      transform: translate(0%, 70%) rotate(45deg);
    }
  }

  @media only screen and (max-width: 37.5em) {
    .background {
      display: none;
    }
  }

  h2 {
    text-align: center;
    margin-top: 3.2rem;
  }

  .program {
    background: var(--color-background-1);
    border: 2px solid var(--color-program);
    max-width: 80rem;
    margin: 4.8rem auto;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

    .program-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid var(--color-program);
      padding: 1.2rem 2.4rem;
      color: var(--color-program);
    }

    .program-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
    }

    .program-body {
      padding: 3.2rem;
    }

    .program-el {
      margin-bottom: 3.6rem;
      .question {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        margin-bottom: 1rem;

        .icon {
          color: var(--color-green);
        }

        .console {
          display: inline-block;
          background: var(--color-text-secondary);
          height: 2rem;
          width: 1rem;
        }
      }

      .tech-tag {
        display: inline-block;
        text-transform: uppercase;
        border: 1px solid var(--color-text-secondary);
        border-radius: 10px;
        padding: 0.6rem 1.2rem;
        margin: 0.3rem;
      }
    }
  }
`

export default About
