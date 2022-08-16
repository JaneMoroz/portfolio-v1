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
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      font-size: 3rem;
      color: var(--color-light-pink);
    }
  }
`
export default Wrapper
