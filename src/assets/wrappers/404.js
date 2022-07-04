import styled from "styled-components"

const Wrapper = styled.main`
  height: 100vh;
  min-height: 70rem;
  background: var(--color-background-2);
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2.4rem;
    padding-bottom: 3.2rem;
  }

  span {
    font-size: 6.4rem;
    font-family: var(--accent-font);
    color: var(--color-dark-pink);
    text-transform: capitalize;
  }

  .background {
    position: absolute;
    top: 60%;
    right: 10%;
  }
`

export default Wrapper
