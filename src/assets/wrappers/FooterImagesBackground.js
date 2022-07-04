import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  .background {
    position: absolute;
  }

  .background-1 {
    top: 70%;
    left: 30%;
    z-index: 8;
  }

  .background-2 {
    top: 30%;
    left: 10%;
    z-index: 7;
  }

  .background-3 {
    top: 55%;
    left: 50%;
    z-index: 6;
  }

  .background-4 {
    top: 60%;
    left: -5%;
    z-index: 5;
  }

  .background-5 {
    top: 20%;
    left: 70%;
    z-index: 4;
  }

  @media only screen and (max-width: 56.25em) {
    .background-2 {
      top: 30%;
      left: 0;
    }
    .background-5 {
      display: none;
    }
  }

  @media only screen and (max-width: 37.5em) {
    .background-2,
    .background-1 {
      display: none;
    }
  }
`

export default Wrapper
