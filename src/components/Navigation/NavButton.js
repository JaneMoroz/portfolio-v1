import React from "react"
import { useGlobalContext } from "../../context/context"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FormattedMessage } from "react-intl"

const NavButton = ({ section, langId, defaultMsg }) => {
  const { toggleMenu, page } = useGlobalContext()
  const handleScroll = section => {
    scrollTo(section)
    toggleMenu()
  }
  return (
    <button onClick={() => handleScroll(`#${section}`)} className="btn">
      <h2 className={page === "/ru" || page === "/ru/" ? "no-cursive" : ""}>
        <FormattedMessage id={langId} defaultMessage={defaultMsg} />
      </h2>
    </button>
  )
}

export default NavButton
