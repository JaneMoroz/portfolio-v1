import styled from "styled-components"

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: max-content 3fr;
  align-items: center;
  column-gap: 3.2rem;
  margin-top: 2.4rem !important;
  margin-bottom: 5.6rem;

  .background {
    position: absolute;
    top: 100%;
    left: 0;
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
    scroll-snap-type: y mandatory;
    max-height: 50rem;

    ::-webkit-scrollbar {
      height: 2px;
      width: 2px;
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
    height: 75rem;

    .image-box {
      position: relative;
      width: 100%;
      height: 100%;
      max-height: 50rem;
      overflow: hidden;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

      img {
        height: 100%;
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
      background: var(--color-background-2);
      color: var(--color-text-main);
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
    display: flex;
    flex-direction: column;
    max-height: 100%;

    .projects-nav {
      flex-direction: row;
      overflow-x: auto;
      width: 100%;
      scroll-snap-type: x mandatory;
      padding: 1.6rem 2.4rem;
    }

    .projects-nav::before {
      display: none;
    }

    .project {
      margin: 0;
    }
  }
`

export default Wrapper
