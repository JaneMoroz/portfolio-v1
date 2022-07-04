import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .background {
    position: absolute;
  }

  // small hill with plant
  .background-1 {
    top: 60%;
    left: 20%;
    z-index: 7;
  }

  // girl-1
  .background-2 {
    top: 45%;
    left: 30%;
    z-index: 6;
  }

  // girl-2
  .background-2-dark-mode {
    top: 35%;
    left: 15%;
    z-index: 6;
  }

  // big hill
  .background-3 {
    top: 45%;
    left: -5%;
    z-index: 5;
  }

  // tree
  .background-4 {
    top: 10%;
    left: 0;
    z-index: 4;
  }

  // big cloud
  .background-5 {
    top: 15%;
    left: 5%;
    z-index: 3;
  }

  // sun/moon
  .background-6 {
    top: -80%;
    left: 60%;
    z-index: 2;
  }

  // small cloud
  .background-7 {
    top: 2%;
    left: -5%;
    z-index: 1;
  }

  @media only screen and (max-width: 56.25em) {
    .background-1 {
      top: 65%;
      left: -160%;
    }

    .background-2 {
      left: 0;
    }

    .background-2-dark-mode {
      left: 0;
    }

    .background-3 {
      top: 50%;
      left: -85%;
    }

    .background-4 {
      display: none;
    }

    .background-5 {
      display: none;
    }

    .background-7 {
      top: 10%;
      left: -5%;
    }
  }

  @media only screen and (max-width: 37.5em) {
    .background-1 {
      top: 70%;
      left: -550%;
    }

    .background-2 {
      top: 50%;
      left: -90%;
    }

    .background-2-dark-mode {
      top: 45%;
      left: -90%;
    }

    .background-3 {
      top: 55%;
      left: -300%;
    }

    .background-6 {
      left: -60%;
    }

    .background-7 {
      top: 10%;
      left: -150%;
    }
  }
`

export default Wrapper
