import styled from "styled-components"

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: max-content 3fr;
  justify-items: center;
  column-gap: 3.2rem;
  margin-top: 4.8rem !important;
  margin-bottom: 5.6rem;

  .background {
    position: absolute;
    top: 90%;
    left: 0;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    z-index: -1;
  }

  @media only screen and (max-width: 56.25em) {
    .background {
      display: none;
    }
  }

  .projects-nav {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    margin-left: 1.6rem;
    overflow-y: auto;
    -ms-scroll-snap-type: y mandatory;
    scroll-snap-type: y mandatory;
    max-height: 50rem;
    margin-top: 3.2rem;

    ::-webkit-scrollbar {
      height: 7px;
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-background-2);
    }

    .btn {
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 300;
      line-height: 1.5;
      width: 100%;
      white-space: nowrap;
      text-align: start;
      color: var(--color-text-secondary);
      padding: 0.8rem 1.6rem;
      transition: all 0.3s;
    }

    .btn:hover,
    .btn.active-btn {
      color: var(--color-text-main);
      background-color: var(--color-background-2);
    }
  }

  .projects-nav::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 5px;
    background: var(--color-background-2);
  }

  .project {
    position: relative;
    padding: 3.2rem 0;
    height: 80rem;
    width: 100%;

    .image-box {
      position: relative;
      overflow: hidden;
      height: 100%;
      width: 100%;
      max-height: 50rem;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

      .img {
        width: 100%;
        object-fit: cover;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--color-accent-pink-transparent);
      }
    }

    .text-box {
      width: 100%;
      padding: 1.6rem 3.2rem;
      color: var(--color-text-secondary);
      line-height: 1.5;

      .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.6rem;
      }

      .buttons {
        display: flex;
        column-gap: 1.6rem;
      }

      p {
        padding-bottom: 1.6rem;
      }

      .tech-tags {
        display: flex;
        column-gap: 1rem;
        justify-content: end;
        white-space: nowrap;
        flex-wrap: wrap;
      }
    }
  }

  .btn {
    grid-column: 1/-1;
    justify-self: center;
  }

  @media only screen and (max-width: 75em) {
    .project {
      margin: 2.4rem;
    }
  }

  @media only screen and (max-width: 56.25em) {
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;

    .project {
      height: 90rem;
      margin: 0;
      .image-box {
        max-height: 60rem;
      }
    }

    .projects-nav {
      flex-direction: row;
      overflow-x: auto;
      width: 100%;
      -ms-scroll-snap-type: x mandatory;
      scroll-snap-type: x mandatory;
      padding: 1.6rem 2.4rem;
      margin-top: 0;
    }

    .projects-nav::before {
      display: none;
    }
  }

  @media only screen and (max-width: 37.5em) {
    .project {
      height: 80rem;
      .image-box {
        max-height: 40rem;
      }
      .img {
        height: 100%;
      }
    }
  }
`

export default Wrapper
