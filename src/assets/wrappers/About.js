import styled from "styled-components"

const Wrapper = styled.section`
  position: relative;

  .background {
    position: absolute;
    top: 30%;
    left: 80%;
    z-index: -1;
  }

  @media only screen and (max-width: 56.25em) {
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
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid var(--color-program);
      padding: 1.2rem 2.4rem;
      color: var(--color-program);

      span {
        text-transform: lowercase;
      }
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
        margin: 0.5rem 0.3rem;
      }
    }
  }
`

export default Wrapper
