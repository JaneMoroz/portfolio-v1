import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
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

  .links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    row-gap: 3.6rem;
    margin-bottom: 4rem;
  }
  .social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    column-gap: 2rem;
    padding-top: 2.4rem;
  }
`

export default Wrapper
