import styled from "styled-components"

const Wrapper = styled.section`
  height: 75rem;
  width: 100%;
  background-color: var(--color-background-2);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  overflow: hidden;

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
      top: 1rem;
      left: 1rem;
      transform: translate(10%, -50%);
    }
  }

  @media only screen and (max-width: 56.25em) {
    h1 {
      font-size: 2.4rem;

      span {
        font-size: 2.8rem;
      }
    }

    h4 {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 37.5em) {
    height: 85rem;
    .btn-outlined {
      margin-top: 2rem;
    }
    .hero {
      grid-template-columns: 3fr 1fr;
    }
    h4 {
      display: none;
    }
  }
`

export default Wrapper
