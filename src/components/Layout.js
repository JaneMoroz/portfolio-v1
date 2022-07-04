import React from "react"
import "normalize.css"
import "../assets/css/main.css"
import { NavigationButton } from "./"
import { AppProvider } from "../context/context"

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <NavigationButton />
      {children}
    </AppProvider>
  )
}

export default Layout
