import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;
  h2 {
    text-align: center;
    margin-top: 5.6rem;
    margin-bottom: 1.6rem;
  }

  .project {
    position: relative;
    padding: 3.2rem 0;
    height: 100%;
    width: 100%;

    .image-box {
      position: relative;
      width: 75rem;
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
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0, 50%);
      max-width: 55rem;

      h5 {
        margin-bottom: 0.3rem;
      }

      h3,
      .tech-tags {
        margin-bottom: 1.6rem;
      }

      p span {
        color: var(--color-dark-pink);
      }

      .tech-tags {
        text-align: center;
        display: flex;
        column-gap: 1rem;
        font-size: 1.4rem;
      }

      .details {
        padding: 1.8rem 3.6rem;
        margin-bottom: 1rem;
        background: var(--color-background-2);
        color: var(--color-text-main);
        line-height: 1.5;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
      }

      .buttons {
        display: flex;
        column-gap: 1.6rem;
      }
    }
  }

  .project-right {
    h5,
    h3,
    buttons {
      text-align: end;
    }

    .tech-tags,
    .buttons {
      justify-content: end;
    }
  }

  .project-left {
    .image-box {
      margin-left: auto;
    }

    .text-box {
      left: 0;
      transform: translate(0, 50%);
    }
  }

  @media only screen and (max-width: 75em) {
    .project {
      padding: 3.2rem 2.4rem;
      .image-box {
        width: 65rem;
        max-height: 45rem;
      }
    }

    .project-right {
      .text-box {
        transform: translate(-2.4rem, 50%);
      }
    }

    .project-left {
      .text-box {
        transform: translate(2.4rem, 50%);
      }
    }
  }

  @media only screen and (max-width: 56.25em) {
    .project {
      padding: 0;
      .image-box {
        width: 100%;
        max-height: 60rem;
        margin-bottom: 2.8rem;
      }

      .text-box {
        position: relative;
        max-width: 100%;
        margin-bottom: 3.6rem;
      }
    }

    .project-right {
      .text-box {
        transform: translate(0, 0);

        h3,
        h5,
        .tech-tags,
        .buttons {
          padding: 0 2.4rem;
        }
      }
    }

    .project-left {
      .text-box {
        transform: translate(0, 0);

        h3,
        h5,
        .tech-tags,
        .buttons {
          padding: 0 2.4rem;
        }
      }
    }
  }

  @media only screen and (max-width: 37.5em) {
    .project {
      .image-box {
        margin-bottom: 0;
        max-height: 40rem;
      }

      .text-box {
        padding: 1.2rem 2.4rem;
        background: var(--color-background-2);
        .details {
          display: none;
        }
        h3,
        .tech-tags {
          color: var(--color-text-main);
        }
      }
    }
  }
`

export default Wrapper
