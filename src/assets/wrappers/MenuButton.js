import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;

  .menu-btn {
    background-color: var(--color-accent-pink);
    padding: 2.4rem;
    border-radius: 50%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: var(--color-light-pink);
    }
  }
`
export default Wrapper
