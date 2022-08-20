import styled from "styled-components"

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

  @media only screen and (max-width: 37.5em) {
    .social {
      position: relative;
      top: 0;
      left: 0;
      flex-direction: row;
      column-gap: 2.4rem;
      margin-top: 1.8rem;
    }
  }
`

export default Wrapper
