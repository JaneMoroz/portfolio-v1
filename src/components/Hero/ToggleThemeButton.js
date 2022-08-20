import React from "react"
import { motion } from "framer-motion"
import { light, lightDarkMode } from "../../assets/images"
import { useGlobalContext } from "../../context/context"
import { lampVariant } from "../../utils/animation"

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useGlobalContext()

  if (theme === undefined) {
    return <div></div>
  }

  return (
    <button
      className="btn dark-light-mode-btn"
      onClick={() => {
        toggleTheme()
      }}
      aria-label="day/night toggle"
    >
      <motion.img
        variants={lampVariant}
        animate="animate"
        src={theme === "light-theme" ? light : lightDarkMode}
        alt="dark/light mode button"
      />
    </button>
  )
}

export default ToggleThemeButton
