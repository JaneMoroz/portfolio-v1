import React from "react"
import "normalize.css"
import "../assets/css/main.css"
import { AppProvider } from "../context/context"

const Layout = ({ children }) => {
  return <AppProvider>{children}</AppProvider>
}

export default Layout
