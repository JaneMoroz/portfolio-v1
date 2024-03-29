import React from "react"
import Wrapper from "../../assets/wrappers/Hero"
import { HeroImagesBackground, ToggleThemeButton } from ".."
import { motion, useScroll, useTransform } from "framer-motion"
import { useGlobalContext } from "../../context/context"
import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"
import { MdOutlineLanguage } from "react-icons/md"

const Hero = () => {
  const { page } = useGlobalContext()
  // Parallax
  const { scrollYProgress } = useScroll()
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100 * 5])

  return (
    <Wrapper id="home">
      <div className="hero container">
        {/* Theme Toggle Button */}
        <ToggleThemeButton />
        {/* Start of Text */}
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hero-text"
          style={{ y: yText }}
        >
          <div className="text-box">
            <h1>
              <FormattedMessage
                id="greetings"
                defaultMessage="Hi, my name is "
              />
              <span
                className={
                  page === "/ru" || page === "/ru/" ? "no-cursive" : ""
                }
              >
                <FormattedMessage id="name" defaultMessage="Jane" />
              </span>
              .
            </h1>
            <h1 className="subTitle">
              <FormattedMessage
                id="more-info"
                defaultMessage="I build things for the web."
              />
            </h1>
            <h4>
              <FormattedMessage
                id="sub-more-info"
                defaultMessage="I’m a web developer who is passionate about technology, learning
              new things and creating truly beautiful and efficient digital
              products."
              />
            </h4>
            <div className="btns-container">
              <a
                href={
                  page === "/ru" || page === "/ru/"
                    ? "/ишунина-евгения-cv.pdf"
                    : "/ishunina-evgeniya-cv.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outlined"
              >
                <FormattedMessage id="cv-btn" defaultMessage="resume" />
              </a>
              <Link
                to={page === "/ru" || page === "/ru/" ? "/" : "/ru"}
                className="btn btn-language"
                aria-label={
                  page === "/ru" || page === "/ru/"
                    ? "Изменить язык"
                    : "Change language"
                }
              >
                <MdOutlineLanguage />
              </Link>
            </div>
          </div>
        </motion.div>
        {/* End of Text */}
        {/* Images */}
        <HeroImagesBackground />
      </div>
    </Wrapper>
  )
}

export default Hero
