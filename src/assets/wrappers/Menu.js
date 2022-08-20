import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding: 10% 0;

  .menu-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
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

  .links {
    display: flex;
    flex-direction: column;
    row-gap: 3.6rem;
    margin-bottom: 4rem;
  }
  .social {
    display: flex;
    column-gap: 2rem;
    padding-top: 2.4rem;
  }
`

export default Wrapper
