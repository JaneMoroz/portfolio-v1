///////////////////////////////////////////////////////////
// Menu animation

// Expanding background animation
export const containerVariant = {
  hidden: {
    scale: 0,
    originX: 1,
    originY: 0,
    borderRadius: "100% 0 100% 100%",
  },
  visible: {
    scale: 1,
    borderRadius: "0% 0 0% 0%",
    transition: {
      ease: "easeInOut",
      when: "beforeChildren", // after parent animation finishes, only then starts to animate children
    },
  },
  exit: {
    scale: 0,
    borderRadius: "100% 0 100% 100%",
    transition: {
      delay: 0.5,
      ease: "easeInOut",
    },
  },
}

// Menu button animation
export const menuButtonVariant = {
  hidden: { opacity: 0, rotate: "0deg" },
  visible: {
    opacity: 1,
    rotate: "90deg",
    transition: { delay: 0.5 },
  },
  exit: {
    opacity: 0,
    rotate: "0deg",
  },
  hover: {
    boxShadow: "0px 0px 8px rgb(245, 201, 194)",
  },
}

// Menu text animation
export const menuVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5 },
  },
  exit: { opacity: 0, x: "100vw" },
}

///////////////////////////////////////////////////////////
// Hero animation

// From bottom animation
export const fromBottomVariant = {
  hiddenHill: {
    y: 300,
  },
  hiddenTree: {
    y: 100,
    opacity: 0,
  },
  visibleFirst: {
    y: 0,
    transition: { delay: 0.5 },
  },
  visibleSecond: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.7 },
  },
  visibleThird: {
    y: 0,
    transition: { delay: 1 },
  },
  exit: {
    opacity: 0,
  },
}

// From right animation
export const fromRightVariant = {
  hidden: {
    x: "50vw",
  },
  visible: {
    x: 0,
    transition: { delay: 1 },
  },
}

// Expnding animation
export const expandingVariant = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
  },
}

// Big cloud animation
export const bigCloudVariant = {
  animate: {
    x: [0, -50],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 10,
      type: "tween",
    },
  },
}

// Small cloud animation
export const smallCloudVariant = {
  animate: {
    x: [0, -40],
    transition: {
      delay: 1,
      repeat: Infinity,
      repeatType: "reverse",
      duration: 10,
      type: "tween",
    },
  },
}

// Lamp infinite animation
export const lampVariant = {
  animate: {
    rotateZ: [5, -5],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
    },
  },
}

///////////////////////////////////////////////////////////
// About animation

// Mouse animation
export const mouseVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

// Program animation
export const programVariant = {
  hidden: {
    y: "200",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// Console type thing animation (don't know to call it)
export const typeBlockVariant = {
  animate: {
    opacity: [0, 1],
    transition: { repeat: Infinity, repeatType: "reverse", duration: 0.7 },
  },
}

///////////////////////////////////////////////////////////
// Projects animation

// From left animation
export const slideInFromLeftVariant = {
  hidden: {
    x: "-100",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// From right animation
export const slideInFromRightVariant = {
  hidden: {
    x: "100",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// Overlay animation
export const overlayVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0.5,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// See more button animation
export const buttonVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

///////////////////////////////////////////////////////////
// More Projects animation

// Navigation animation
export const navVariant = {
  hidden: {
    opacity: 0,
    x: "-100vh",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Projects animation
export const projectsVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Image animation
export const imageVariant = {
  hidden: {
    x: "200px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.6,
      duration: 0.5,
    },
  },
  exit: {
    x: "200px",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
}

// Text animation
export const textVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
  },
}

// Overlay animation
export const overlayVariant2 = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0.5,
    transition: {
      duration: 0.5,
    },
  },
}

///////////////////////////////////////////////////////////
// Footer animation

export const bigHillVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const smallHillVariant = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

export const girlVariant = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

export const treeVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}
