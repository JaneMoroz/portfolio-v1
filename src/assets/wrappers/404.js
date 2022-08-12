import styled from "styled-components"

const Wrapper = styled.main`
  height: 100vh;
  min-height: 70rem;
  background: var(--color-background-2);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
