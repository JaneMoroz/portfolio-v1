import React from "react"
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa"

export const socialLinks = [
  {
    icon: <FaEnvelope />,
    link: `mailto:${process.env.EMAIL}`,
    label: "mail",
    newTab: false,
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/JaneMoroz",
    label: "GitHub",
    newTab: true,
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/jane_moroz",
    label: "Twitter",
    newTab: true,
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/eugenia-ishunina-b1b452244/",
    label: "Linkedin",
    newTab: true,
  },
]
